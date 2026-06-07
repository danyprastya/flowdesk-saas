import { NextResponse } from 'next/server'
import { demoRequestSchema } from '@/lib/validations'
import { rateLimit } from '@/lib/rate-limit'
import { sendConfirmationEmail, sendInternalNotification } from '@/lib/email'
import type { N8nWebhookPayload } from '@/types'

// Node.js runtime required — Resend SDK needs Node.js APIs
export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

export async function POST(request: Request) {
  try {
    // 1. Extract client IP for rate limiting
    const forwardedFor = request.headers.get('x-forwarded-for')
    const realIp = request.headers.get('x-real-ip')
    const ip = forwardedFor
      ? forwardedFor.split(',')[0].trim()
      : realIp || '127.0.0.1'

    // 2. Rate limit check
    const { allowed, resetIn } = rateLimit(ip)
    if (!allowed) {
      const resetInSeconds = Math.ceil(resetIn / 1000)
      return NextResponse.json(
        {
          success: false,
          message: `Too many requests. Please try again in ${resetInSeconds} seconds.`,
        },
        {
          status: 429,
          headers: { 'Retry-After': String(resetInSeconds) },
        }
      )
    }

    // 3. Parse request body — catch malformed JSON separately
    let body: unknown
    try {
      body = await request.json()
    } catch {
      return NextResponse.json(
        { success: false, message: 'Invalid JSON in request body.' },
        { status: 400 }
      )
    }

    // 4. Validate against Zod schema
    const result = demoRequestSchema.safeParse(body)
    if (!result.success) {
      return NextResponse.json(
        { success: false, errors: result.error.flatten() },
        { status: 400 }
      )
    }

    const validatedData = result.data
    const submittedAt = new Date().toISOString()

    // 5. Call n8n webhook — non-critical, failure doesn't break the response
    const webhookUrl = process.env.N8N_WEBHOOK_URL
    const webhookSecret = process.env.N8N_WEBHOOK_SECRET

    if (webhookUrl && !webhookUrl.includes('your-n8n-instance')) {
      const payload: N8nWebhookPayload = {
        fullName: validatedData.fullName,
        workEmail: validatedData.workEmail,
        companyName: validatedData.companyName,
        teamSize: validatedData.teamSize,
        hearAboutUs: validatedData.hearAboutUs,
        message: validatedData.message || '',
        submittedAt,
        source: 'flowdesk-landing-page',
        webhookSecret: webhookSecret || '',
      }

      // n8n failure is non-critical — user still gets confirmation
      try {
        const controller = new AbortController()
        const timeout = setTimeout(() => controller.abort(), 8000)

        await fetch(webhookUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            ...(webhookSecret && {
              'X-Webhook-Secret': webhookSecret,
            }),
          },
          body: JSON.stringify(payload),
          signal: controller.signal,
        })

        clearTimeout(timeout)
      } catch (error) {
        console.error('n8n webhook call failed (non-critical):', error)
      }
    }

    // 6. Send emails in parallel — using allSettled so individual
    // failures don't affect each other or the response
    await Promise.allSettled([
      sendConfirmationEmail(validatedData),
      sendInternalNotification(validatedData),
    ])

    // 7. Success response
    return NextResponse.json({
      success: true,
      message: 'Demo request received',
      submittedAt,
    })
  } catch (error) {
    // Top-level catch — something truly unexpected happened
    console.error('Unhandled error in demo-request route:', error)
    return NextResponse.json(
      {
        success: false,
        message: 'Something went wrong. Please try again.',
      },
      { status: 500 }
    )
  }
}
