'use client'

import React from 'react'
import { Cable, Brain, Rocket } from 'lucide-react'
import { HOW_IT_WORKS } from '@/constants/content'
import SectionHeader from '@/components/ui-custom/SectionHeader'
import AnimatedSection from '@/components/ui-custom/AnimatedSection'

const iconMap: Record<
  string,
  React.ComponentType<{ className?: string; style?: React.CSSProperties }>
> = {
  Cable,
  Brain,
  Rocket,
}

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="py-24 border-y"
      style={{
        borderColor: 'var(--border)',
        backgroundColor: 'var(--surface)',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <SectionHeader
          label={HOW_IT_WORKS.label}
          headline={HOW_IT_WORKS.headline}
          subheadline="Setup in minutes, see ROI in your first sprint. No complex training required."
        />

        {/* Steps container */}
        <div className="relative grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8 mt-16">
          {/* Horizontal connectors (desktop only) */}
          <div
            className="hidden lg:block absolute top-[68px] left-[15%] right-[15%] h-0.5 border-t-2 border-dashed pointer-events-none"
            style={{ borderColor: 'var(--border)' }}
          />

          {HOW_IT_WORKS.steps.map((step, index) => {
            const IconComponent = iconMap[step.icon] || Cable

            return (
              <AnimatedSection
                key={step.number}
                direction="up"
                delay={index * 0.1}
                className="relative flex flex-col items-center text-center space-y-4 group"
              >
                {/* Step circle & Icon */}
                <div className="relative z-10 flex items-center justify-center">
                  <div
                    className="w-14 h-14 rounded-full border-2 flex items-center justify-center transition-all duration-300 group-hover:scale-105"
                    style={{
                      backgroundColor: 'var(--surface-2)',
                      borderColor: 'var(--border)',
                    }}
                  >
                    <IconComponent
                      className="w-6 h-6"
                      style={{ color: 'var(--indigo)' }}
                    />
                  </div>
                  {/* Floating step number */}
                  <span
                    className="absolute -top-3 -right-2 text-2xl font-bold font-mono select-none"
                    style={{ color: 'var(--indigo-text)' }}
                  >
                    {step.number}
                  </span>
                </div>

                {/* Step text content */}
                <div className="space-y-2 max-w-sm">
                  <h3 className="text-xl font-semibold text-[var(--text-primary)]">
                    {step.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    {step.description}
                  </p>
                </div>

                {/* Abstract CSS illustrations */}
                <div className="w-full h-[68px] flex items-center justify-center pt-2">
                  {index === 0 && (
                    // Step 1: Connect — 3 overlapping rounded squares
                    <div className="flex -space-x-2.5">
                      <div
                        className="w-9 h-9 rounded-md border"
                        style={{
                          backgroundColor: 'var(--surface-3)',
                          borderColor: 'var(--border)',
                        }}
                      />
                      <div
                        className="w-9 h-9 rounded-md border"
                        style={{
                          backgroundColor: 'var(--indigo-subtle)',
                          borderColor: 'var(--indigo)',
                        }}
                      />
                      <div
                        className="w-9 h-9 rounded-md border"
                        style={{
                          backgroundColor: 'var(--surface-3)',
                          borderColor: 'var(--border)',
                        }}
                      />
                    </div>
                  )}

                  {index === 1 && (
                    // Step 2: AI sorting — mini task list with a lightning bolt
                    <div
                      className="w-28 border rounded p-1.5 flex flex-col gap-1"
                      style={{
                        backgroundColor: 'var(--surface-3)',
                        borderColor: 'var(--border)',
                      }}
                    >
                      <div className="flex items-center justify-between">
                        <span className="w-14 h-1.5 rounded-sm bg-neutral-700" />
                        <span className="w-2.5 h-2.5 rounded bg-[var(--indigo)]" />
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="w-10 h-1.5 rounded-sm bg-neutral-700" />
                        <span className="w-2.5 h-2.5 rounded bg-[var(--indigo)]" />
                      </div>
                    </div>
                  )}

                  {index === 2 && (
                    // Step 3: Ship faster — progress arc
                    <div className="relative w-12 h-12 flex items-center justify-center">
                      <div
                        className="absolute inset-0 rounded-full border-4 border-t-transparent"
                        style={{
                          borderColor: 'var(--green) var(--green) var(--green) transparent',
                          transform: 'rotate(-45deg)',
                        }}
                      />
                      <span
                        className="text-[10px] font-bold"
                        style={{ color: 'var(--green)' }}
                      >
                        100%
                      </span>
                    </div>
                  )}
                </div>
              </AnimatedSection>
            )
          })}
        </div>
      </div>
    </section>
  )
}
