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
              <Card
                className="glass-card flex flex-col h-full hover:border-[var(--border-hover)] transition-all duration-300"
                style={{
                  backgroundColor: 'var(--surface)',
                  borderColor: 'var(--border)',
                }}
              >
                <CardHeader className="p-6 pb-4 flex flex-row items-center justify-between gap-4 border-b border-[var(--border)]/40">
                  <div className="flex items-center gap-3">
                    {/* Initials Avatar */}
                    <Avatar className="w-10 h-10 border border-[var(--border)]">
                      <AvatarFallback
                        className="font-semibold text-xs text-white"
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
                  <div className="flex items-center gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-3.5 h-3.5 fill-amber-500 text-amber-500"
                      />
                    ))}
                  </div>
                </CardHeader>

                <CardContent className="p-6 flex-1 text-sm italic leading-relaxed text-[var(--text-secondary)]">
                  &ldquo;{testimonial.quote}&rdquo;
                </CardContent>

                <CardFooter
                  className="p-6 pt-0 border-t border-[var(--border)]/30 mt-auto text-xs font-semibold"
                  style={{ color: 'var(--indigo-text)' }}
                >
                  Outcome: {testimonial.metric}
                </CardFooter>
              </Card>
            </AnimatedSection>
          )
        })}
      </div>
    </section>
  )
}
