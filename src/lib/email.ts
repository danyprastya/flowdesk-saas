import { Resend } from 'resend'
import type { DemoRequestFormData } from '@/types'

const resend = new Resend(process.env.RESEND_API_KEY)

/**
 * Send a confirmation email to the user who requested a demo.
 * Failure is non-critical — logged but not thrown.
 */
export async function sendConfirmationEmail(
  data: DemoRequestFormData
): Promise<void> {
  const firstName = data.fullName.split(' ')[0]

  try {
    await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || 'demos@flowdesk.co',
      to: data.workEmail,
      replyTo: process.env.RESEND_REPLY_TO || 'hello@flowdesk.co',
      subject: `Your Flowdesk demo is confirmed, ${firstName}`,
      html: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin:0;padding:0;background-color:#07090F;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
  <div style="max-width:560px;margin:0 auto;padding:40px 24px;">
    <div style="margin-bottom:32px;">
      <span style="display:inline-block;width:28px;height:28px;background:linear-gradient(135deg,#6366F1 50%,#1C2128 50%);border-radius:6px;vertical-align:middle;margin-right:10px;"></span>
      <span style="color:#F0F6FC;font-size:18px;font-weight:600;vertical-align:middle;">Flowdesk</span>
    </div>
    
    <h1 style="color:#F0F6FC;font-size:24px;font-weight:600;margin:0 0 16px;">
      Hey ${firstName}, you're all set!
    </h1>
    
    <p style="color:#8B949E;font-size:15px;line-height:1.6;margin:0 0 24px;">
      We've received your demo request for <strong style="color:#F0F6FC;">${data.companyName}</strong>. 
      Our team is already reviewing your details to prepare a personalized walkthrough.
    </p>
    
    <div style="background:#0D1117;border:1px solid #21262D;border-radius:12px;padding:24px;margin:0 0 24px;">
      <h2 style="color:#F0F6FC;font-size:16px;font-weight:600;margin:0 0 16px;">What happens next</h2>
      
      <div style="margin-bottom:16px;display:flex;align-items:flex-start;">
        <span style="display:inline-block;width:24px;height:24px;background:#1E1B4B;border-radius:50%;text-align:center;line-height:24px;color:#A5B4FC;font-size:12px;font-weight:600;margin-right:12px;flex-shrink:0;">1</span>
        <div>
          <p style="color:#F0F6FC;font-size:14px;margin:0;font-weight:500;">We review your request</p>
          <p style="color:#8B949E;font-size:13px;margin:4px 0 0;">Within 2 hours during business hours</p>
        </div>
      </div>
      
      <div style="margin-bottom:16px;display:flex;align-items:flex-start;">
        <span style="display:inline-block;width:24px;height:24px;background:#1E1B4B;border-radius:50%;text-align:center;line-height:24px;color:#A5B4FC;font-size:12px;font-weight:600;margin-right:12px;flex-shrink:0;">2</span>
        <div>
          <p style="color:#F0F6FC;font-size:14px;margin:0;font-weight:500;">You get a calendar link</p>
          <p style="color:#8B949E;font-size:13px;margin:4px 0 0;">Pick a time that works for your team</p>
        </div>
      </div>
      
      <div style="display:flex;align-items:flex-start;">
        <span style="display:inline-block;width:24px;height:24px;background:#1E1B4B;border-radius:50%;text-align:center;line-height:24px;color:#A5B4FC;font-size:12px;font-weight:600;margin-right:12px;flex-shrink:0;">3</span>
        <div>
          <p style="color:#F0F6FC;font-size:14px;margin:0;font-weight:500;">30-min personalized demo</p>
          <p style="color:#8B949E;font-size:13px;margin:4px 0 0;">Tailored to your team's workflow</p>
        </div>
      </div>
    </div>
    
    <p style="color:#484F58;font-size:13px;line-height:1.5;margin:24px 0 0;">
      Questions? Reply to this email or reach us at hello@flowdesk.co
    </p>
    
    <div style="border-top:1px solid #21262D;margin-top:32px;padding-top:16px;">
      <p style="color:#484F58;font-size:11px;line-height:1.5;margin:0;">
        © ${new Date().getFullYear()} Flowdesk, Inc. All rights reserved.<br>
        You're receiving this because you requested a demo at flowdesk.co.
      </p>
    </div>
  </div>
</body>
</html>
      `,
    })
  } catch (error) {
    console.error('Failed to send confirmation email:', error)
  }
}

/**
 * Send an internal notification to the team about a new demo request.
 * Failure is non-critical — logged but not thrown.
 */
export async function sendInternalNotification(
  data: DemoRequestFormData
): Promise<void> {
  try {
    await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || 'demos@flowdesk.co',
      to: process.env.RESEND_REPLY_TO || 'hello@flowdesk.co',
      subject: `New demo request — ${data.companyName} (${data.teamSize} people)`,
      html: `
<!DOCTYPE html>
<html>
<body style="margin:0;padding:20px;background-color:#07090F;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;color:#F0F6FC;">
  <h2 style="margin:0 0 16px;">New Demo Request</h2>
  <table style="border-collapse:collapse;width:100%;max-width:500px;">
    <tr><td style="padding:8px 12px;border:1px solid #21262D;color:#8B949E;">Name</td><td style="padding:8px 12px;border:1px solid #21262D;">${data.fullName}</td></tr>
    <tr><td style="padding:8px 12px;border:1px solid #21262D;color:#8B949E;">Email</td><td style="padding:8px 12px;border:1px solid #21262D;">${data.workEmail}</td></tr>
    <tr><td style="padding:8px 12px;border:1px solid #21262D;color:#8B949E;">Company</td><td style="padding:8px 12px;border:1px solid #21262D;">${data.companyName}</td></tr>
    <tr><td style="padding:8px 12px;border:1px solid #21262D;color:#8B949E;">Team Size</td><td style="padding:8px 12px;border:1px solid #21262D;">${data.teamSize}</td></tr>
    <tr><td style="padding:8px 12px;border:1px solid #21262D;color:#8B949E;">Source</td><td style="padding:8px 12px;border:1px solid #21262D;">${data.hearAboutUs}</td></tr>
    <tr><td style="padding:8px 12px;border:1px solid #21262D;color:#8B949E;">Message</td><td style="padding:8px 12px;border:1px solid #21262D;">${data.message || '—'}</td></tr>
  </table>
  <p style="color:#484F58;font-size:12px;margin-top:16px;">Submitted at ${new Date().toISOString()}</p>
</body>
</html>
      `,
    })
  } catch (error) {
    console.error('Failed to send internal notification:', error)
  }
}
