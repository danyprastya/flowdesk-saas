'use client'

import React from 'react'
import { Star } from 'lucide-react'
import { TESTIMONIALS } from '@/constants/content'
import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import SectionHeader from '@/components/ui-custom/SectionHeader'
import AnimatedSection from '@/components/ui-custom/AnimatedSection'

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-padding">
      {/* Header */}
      <SectionHeader
        label="Testimonials"
        headline="Proven impact with top engineering teams"
        subheadline="See how engineering leaders are eliminating administrative overhead and shipping on time."
      />

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {TESTIMONIALS.map((testimonial, index) => {
          return (
            <AnimatedSection
              key={testimonial.id}
              direction="up"
              delay={index * 0.08}
            >
              <div
                className="relative flex flex-col justify-between p-6 rounded-2xl border transition-all duration-300 hover:border-[var(--indigo)] premium-shadow h-full"
                style={{
                  backgroundColor: 'var(--surface)',
                  borderColor: 'var(--card-border)',
                }}
              >
                <div className="space-y-4">
                  {/* Header: User Profile & Stars */}
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-3">
                      {/* Initials Avatar */}
                      <Avatar className="w-10 h-10 border border-[var(--border)] flex items-center justify-center rounded-full">
                        <AvatarFallback
                          className="font-semibold text-xs text-white w-full h-full flex items-center justify-center rounded-full"
                          style={{ backgroundColor: 'var(--indigo)' }}
                        >
                          {testimonial.avatar}
                        </AvatarFallback>
                      </Avatar>
                      {/* User credentials */}
                      <div>
                        <h4 className="text-sm font-semibold text-[var(--text-primary)]">
                          {testimonial.name}
                        </h4>
                        <p
                          className="text-[11px] mt-0.5"
                          style={{ color: 'var(--text-secondary)' }}
                        >
                          {testimonial.role} at {testimonial.company}
                        </p>
                      </div>
                    </div>

                    {/* Stars */}
                    <div className="flex items-center gap-0.5 pt-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-3.5 h-3.5 fill-amber-500 text-amber-500"
                        />
                      ))}
                    </div>
                  </div>

                  {/* Quote */}
                  <p className="text-sm leading-relaxed text-[var(--text-secondary)] italic pt-1">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                </div>

                {/* Metric Outcome Badge */}
                <div className="mt-6 pt-4 border-t border-[var(--border)]/40 flex items-center justify-between">
                  <span className="text-[11px] text-[var(--text-muted)] uppercase tracking-wider font-mono">MEASURED IMPACT</span>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-[var(--indigo-subtle)] border border-[var(--indigo)]/20" style={{ color: 'var(--indigo-text)' }}>
                    {testimonial.metric}
                  </span>
                </div>
              </div>
            </AnimatedSection>
          )
        })}
      </div>
    </section>
  )
}
