'use client'

import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  Mail,
  Calendar,
  Video,
  Shield,
  Globe,
  Activity,
  ArrowRight,
  Loader2,
  AlertCircle,
} from 'lucide-react'
import {
  demoRequestSchema,
  type DemoRequestFormValues,
} from '@/lib/validations'
import { DEMO_REQUEST, AUTOMATION_LOG_LINES } from '@/constants/content'
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import SectionHeader from '@/components/ui-custom/SectionHeader'
import AutomationLog from '@/components/ui-custom/AutomationLog'
import AnimatedSection from '@/components/ui-custom/AnimatedSection'

export default function DemoRequest() {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success' | 'error'>(
    'idle'
  )
  const [submittedData, setSubmittedData] = useState<DemoRequestFormValues | null>(null)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  const form = useForm<DemoRequestFormValues>({
    resolver: zodResolver(demoRequestSchema),
    defaultValues: {
      fullName: '',
      workEmail: '',
      companyName: '',
      teamSize: undefined,
      hearAboutUs: undefined,
      message: '',
    },
  })

  const onSubmit = async (values: DemoRequestFormValues) => {
    setFormState('submitting')
    setErrorMessage(null)

    try {
      const response = await fetch('/api/demo-request', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      })

      const data = await response.json()

      if (response.ok) {
        setSubmittedData(values)
        setFormState('success')
      } else {
        // Handle custom validation errors or rate limiting
        const msg = data.message || 'Validation failed. Please verify your input.'
        setErrorMessage(msg)
        setFormState('error')
      }
    } catch (err) {
      console.error('Demo request submission failed:', err)
      setErrorMessage('Network connection lost. Please try again.')
      setFormState('error')
    }
  }

  return (
    <section id="demo-request" className="section-padding scroll-mt-16">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Side: Form or Success Terminal (60% width) */}
        <div className="lg:col-span-7 w-full">
          {formState === 'success' && submittedData ? (
            <div className="space-y-6">
              <SectionHeader
                align="left"
                label="Connected & Processing"
                headline="Automation in motion"
                subheadline="Watch our n8n demo workflow process your request in real time. We are provisioning your demo environment."
                className="mb-8"
              />
              <AnimatedSection direction="up" delay={0}>
                <AutomationLog
                  lines={AUTOMATION_LOG_LINES}
                  submittedEmail={submittedData.workEmail}
                  submittedName={submittedData.fullName}
                />
              </AnimatedSection>
            </div>
          ) : (
            <div className="space-y-6">
              <SectionHeader
                align="left"
                label={DEMO_REQUEST.label}
                headline={DEMO_REQUEST.headline}
                subheadline={DEMO_REQUEST.subheadline}
                className="mb-8"
              />

              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-6 glass-card p-6 sm:p-8"
                  style={{
                    backgroundColor: 'var(--surface)',
                    borderColor: 'var(--border)',
                  }}
                >
                  {/* Name + Email Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="fullName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Sarah Chen"
                              className="bg-[var(--surface-2)] border-[var(--border)] focus-visible:ring-1 focus-visible:ring-[var(--indigo)] text-sm h-10"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="workEmail"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Work Email</FormLabel>
                          <FormControl>
                            <Input
                              type="email"
                              placeholder="sarah@company.com"
                              className="bg-[var(--surface-2)] border-[var(--border)] focus-visible:ring-1 focus-visible:ring-[var(--indigo)] text-sm h-10"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  {/* Company Name Row */}
                  <FormField
                    control={form.control}
                    name="companyName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Company Name</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Ramp"
                            className="bg-[var(--surface-2)] border-[var(--border)] focus-visible:ring-1 focus-visible:ring-[var(--indigo)] text-sm h-10"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Team Size + Hear About Us Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="teamSize"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Team Size</FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger className="bg-[var(--surface-2)] border-[var(--border)] focus:ring-1 focus:ring-[var(--indigo)] text-sm h-10">
                                <SelectValue placeholder="Select size" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent className="bg-[var(--surface)] border-[var(--border)]">
                              <SelectItem value="1-10">1-10 people</SelectItem>
                              <SelectItem value="11-50">11-50 people</SelectItem>
                              <SelectItem value="51-200">51-200 people</SelectItem>
                              <SelectItem value="200+">200+ people</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="hearAboutUs"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>How did you hear about us?</FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger className="bg-[var(--surface-2)] border-[var(--border)] focus:ring-1 focus:ring-[var(--indigo)] text-sm h-10">
                                <SelectValue placeholder="Select source" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent className="bg-[var(--surface)] border-[var(--border)]">
                              <SelectItem value="google">Google Search</SelectItem>
                              <SelectItem value="linkedin">LinkedIn</SelectItem>
                              <SelectItem value="friend">Friend / Colleague</SelectItem>
                              <SelectItem value="twitter">Twitter / X</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  {/* Message Row */}
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message (Optional)</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Tell us a bit about your current planning overhead or project tools..."
                            rows={4}
                            className="bg-[var(--surface-2)] border-[var(--border)] focus-visible:ring-1 focus-visible:ring-[var(--indigo)] text-sm"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Error Box */}
                  {formState === 'error' && errorMessage && (
                    <div
                      className="p-3 rounded-lg border flex items-start gap-2.5 text-xs bg-red-950/20"
                      style={{ borderColor: 'var(--red)' }}
                    >
                      <AlertCircle
                        className="w-4 h-4 shrink-0 mt-0.5"
                        style={{ color: 'var(--red)' }}
                      />
                      <span style={{ color: 'var(--text-primary)' }}>
                        {errorMessage}
                      </span>
                    </div>
                  )}

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    disabled={formState === 'submitting'}
                    className="w-full text-sm font-semibold flex items-center justify-center gap-1.5 h-11 text-white cursor-pointer"
                    style={{ backgroundColor: 'var(--indigo)' }}
                  >
                    {formState === 'submitting' ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Sending request...
                      </>
                    ) : (
                      <>
                        Request my demo
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </Button>
                </form>
              </Form>
            </div>
          )}
        </div>

        {/* Right Side: Trust signals (40% width) always visible */}
        <div className="lg:col-span-5 w-full space-y-6 lg:pl-4">
          {/* Timeline Process Card */}
          <Card
            className="glass-card"
            style={{
              backgroundColor: 'var(--surface)',
              borderColor: 'var(--border)',
            }}
          >
            <CardContent className="p-6 space-y-6">
              <h4 className="text-sm font-bold text-[var(--text-primary)]">
                What happens next
              </h4>

              <div className="relative pl-7 space-y-6">
                {/* Connector line */}
                <div
                  className="absolute top-2 left-2.5 bottom-2 w-0.5 border-l pointer-events-none"
                  style={{ borderColor: 'var(--border)' }}
                />

                {/* Step 1 */}
                <div className="relative">
                  <span
                    className="absolute -left-7 top-0.5 w-5.5 h-5.5 rounded-full border flex items-center justify-center bg-[var(--surface)]"
                    style={{ borderColor: 'var(--border)' }}
                  >
                    <Mail className="w-3 h-3" style={{ color: 'var(--indigo)' }} />
                  </span>
                  <div className="space-y-1">
                    <p className="text-xs font-semibold text-[var(--text-primary)]">
                      1. We review your request
                    </p>
                    <p className="text-[11px]" style={{ color: 'var(--text-secondary)' }}>
                      Within 2 hours during normal business hours.
                    </p>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="relative">
                  <span
                    className="absolute -left-7 top-0.5 w-5.5 h-5.5 rounded-full border flex items-center justify-center bg-[var(--surface)]"
                    style={{ borderColor: 'var(--border)' }}
                  >
                    <Calendar className="w-3 h-3" style={{ color: 'var(--indigo)' }} />
                  </span>
                  <div className="space-y-1">
                    <p className="text-xs font-semibold text-[var(--text-primary)]">
                      2. You get a calendar link
                    </p>
                    <p className="text-[11px]" style={{ color: 'var(--text-secondary)' }}>
                      Select a convenient time for your engineering leads.
                    </p>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="relative">
                  <span
                    className="absolute -left-7 top-0.5 w-5.5 h-5.5 rounded-full border flex items-center justify-center bg-[var(--surface)]"
                    style={{ borderColor: 'var(--border)' }}
                  >
                    <Video className="w-3 h-3" style={{ color: 'var(--indigo)' }} />
                  </span>
                  <div className="space-y-1">
                    <p className="text-xs font-semibold text-[var(--text-primary)]">
                      3. 30-min personalized demo
                    </p>
                    <p className="text-[11px]" style={{ color: 'var(--text-secondary)' }}>
                      Tailored walkthrough based on your tools & stack.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Trust badges strip */}
          <div className="grid grid-cols-3 gap-3">
            <div
              className="p-3 border rounded-xl flex flex-col items-center justify-center text-center gap-1.5"
              style={{
                backgroundColor: 'var(--surface)',
                borderColor: 'var(--border)',
              }}
            >
              <Shield className="w-4 h-4" style={{ color: 'var(--indigo)' }} />
              <span className="text-[10px] font-bold text-[var(--text-primary)]">
                SOC 2
              </span>
              <span className="text-[8px]" style={{ color: 'var(--text-muted)' }}>
                Compliant
              </span>
            </div>
            <div
              className="p-3 border rounded-xl flex flex-col items-center justify-center text-center gap-1.5"
              style={{
                backgroundColor: 'var(--surface)',
                borderColor: 'var(--border)',
              }}
            >
              <Globe className="w-4 h-4" style={{ color: 'var(--indigo)' }} />
              <span className="text-[10px] font-bold text-[var(--text-primary)]">
                GDPR
              </span>
              <span className="text-[8px]" style={{ color: 'var(--text-muted)' }}>
                Ready
              </span>
            </div>
            <div
              className="p-3 border rounded-xl flex flex-col items-center justify-center text-center gap-1.5"
              style={{
                backgroundColor: 'var(--surface)',
                borderColor: 'var(--border)',
              }}
            >
              <Activity className="w-4 h-4" style={{ color: 'var(--indigo)' }} />
              <span className="text-[10px] font-bold text-[var(--text-primary)]">
                99.9%
              </span>
              <span className="text-[8px]" style={{ color: 'var(--text-muted)' }}>
                Uptime
              </span>
            </div>
          </div>

          {/* Social Proof sub-label */}
          <div
            className="text-center text-xs font-medium"
            style={{ color: 'var(--text-muted)' }}
          >
            Join 2,400+ teams already using Flowdesk
          </div>
        </div>
      </div>
    </section>
  )
}
