'use client'

import React from 'react'
import { ArrowRight, Star } from 'lucide-react'
import { HERO } from '@/constants/content'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import AnimatedSection from '@/components/ui-custom/AnimatedSection'
import TypingEffect from '@/components/ui-custom/TypingEffect'
import DashboardMockup from '@/components/ui-custom/DashboardMockup'

export default function Hero() {
  const handleScrollToDemo = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    const element = document.getElementById('demo-request')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleScrollToHow = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    const element = document.getElementById('how-it-works')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden"
      style={{ backgroundColor: 'var(--bg)' }}
    >
      {/* Subtle background radial glow */}
      <div
        className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[130px] pointer-events-none opacity-25"
        style={{
          background: 'radial-gradient(circle, var(--indigo) 0%, transparent 70%)',
        }}
      />
      <div
        className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[500px] h-[500px] rounded-full blur-[120px] pointer-events-none opacity-15"
        style={{
          background: 'radial-gradient(circle, var(--green) 0%, transparent 70%)',
        }}
      />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column (55% width on large desktop) */}
        <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
          <AnimatedSection direction="up" delay={0} className="space-y-6">
            
            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[var(--text-primary)] leading-[1.08] whitespace-pre-line">
              {HERO.headline}
            </h1>

            {/* Typewriter phrase */}
            <div
              className="text-lg sm:text-xl md:text-2xl font-semibold min-h-[36px]"
              style={{ color: 'var(--indigo-text)' }}
            >
              <TypingEffect phrases={HERO.subheadlines} />
            </div>

            {/* Body copy */}
            <p
              className="text-base sm:text-lg max-w-xl leading-relaxed"
              style={{ color: 'var(--text-secondary)' }}
            >
              {HERO.body}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Button
                onClick={handleScrollToDemo}
                size="lg"
                className="text-white flex items-center gap-2 cursor-pointer font-medium"
                style={{ backgroundColor: 'var(--indigo)' }}
              >
                {HERO.ctas.primary.label}
                <ArrowRight className="w-4 h-4" />
              </Button>
              <Button
                onClick={handleScrollToHow}
                variant="outline"
                size="lg"
                className="border-[var(--border)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--surface-2)] cursor-pointer"
              >
                {HERO.ctas.secondary.label}
              </Button>
            </div>

            {/* Social proof stars */}
            <div className="flex items-center gap-2 pt-4 border-t border-[var(--border)] w-full max-w-sm">
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-amber-500 text-amber-500"
                  />
                ))}
              </div>
              <span
                className="text-xs font-medium"
                style={{ color: 'var(--text-secondary)' }}
              >
                {HERO.socialProof}
              </span>
            </div>
          </AnimatedSection>
        </div>

        {/* Right Column (45% width on large desktop) */}
        <div className="lg:col-span-5 w-full flex justify-center">
          <AnimatedSection direction="left" delay={0.2} className="w-full">
            <DashboardMockup />
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
