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
                className="relative flex flex-col items-center text-center space-y-5 group px-4 py-6 rounded-2xl border border-transparent hover:border-[var(--border)] hover:bg-[var(--surface-2)]/30 transition-all duration-300"
              >
                {/* Giant Watermark Step Number in Background */}
                <span
                  className="absolute top-2 left-1/2 -translate-x-1/2 -translate-y-4 text-8xl font-black font-mono select-none pointer-events-none opacity-[0.03] transition-opacity duration-300 group-hover:opacity-[0.05]"
                  style={{ color: 'var(--text-primary)' }}
                >
                  {step.number}
                </span>

                {/* Step circle & Icon */}
                <div className="relative z-10 flex items-center justify-center">
                  <div
                    className="w-14 h-14 rounded-full border flex items-center justify-center transition-all duration-300 group-hover:scale-105 group-hover:border-[var(--indigo)] group-hover:shadow-[0_0_15px_rgba(99,102,241,0.2)]"
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
                </div>

                {/* Step text content */}
                <div className="space-y-2.5 max-w-sm flex flex-col items-center">
                  <span className="text-[10px] font-bold tracking-widest text-[var(--indigo-text)] uppercase px-2.5 py-0.5 rounded-full bg-[var(--indigo-subtle)] border border-[var(--indigo)]/20">
                    Step {step.number}
                  </span>
                  <h3 className="text-xl font-semibold text-[var(--text-primary)] pt-1">
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
                <div className="w-full h-20 flex items-center justify-center pt-2">
                  {index === 0 && (
                    // Step 1: Connect — 3 tools connection web
                    <svg width="160" height="60" viewBox="0 0 160 60" fill="none" className="overflow-visible">
                      {/* Connection lines */}
                      <path d="M 28 30 L 80 30" stroke="var(--border)" strokeWidth="1.5" strokeDasharray="3,3" />
                      <path d="M 132 30 L 80 30" stroke="var(--border)" strokeWidth="1.5" strokeDasharray="3,3" />
                      
                      {/* GitHub Node */}
                      <g transform="translate(8, 10)">
                        <rect width="40" height="40" rx="8" fill="var(--surface-3)" stroke="var(--border)" strokeWidth="1" />
                        <path d="M20 28c-4.4 0-8-3.6-8-8 0-3.5 2.3-6.5 5.5-7.6.4-.1.5.2.5.4v1.4c-2.2.5-2.7-1.1-2.7-1.1-.4-.9-.9-1.1-.9-1.1-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.2 1.9.9 2.3.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-4 0-.9.3-1.6.8-2.2-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8.6-.2 1.3-.3 2-.3.7 0 1.4.1 2 .3 1.5-1 2.2-.8 2.2-.8.5 1.1.2 1.9.1 2.1.5.6.8 1.3.8 2.2 0 3.1-1.9 3.7-3.7 3.9.3.3.5.8.5 1.6v2.4c0 .2.1.5.6.4C29.7 21.5 32 18.5 32 15c0-4.4-3.6-8-8-8z" fill="var(--text-secondary)" />
                      </g>

                      {/* Center Flowdesk Node */}
                      <g transform="translate(60, 10)">
                        <rect width="40" height="40" rx="8" fill="var(--indigo-subtle)" stroke="var(--indigo)" strokeWidth="1" />
                        <rect x="11" y="11" width="7" height="7" rx="1.5" fill="var(--indigo)" />
                        <rect x="22" y="11" width="7" height="7" rx="1.5" fill="var(--border)" />
                        <rect x="11" y="22" width="7" height="7" rx="1.5" fill="var(--border)" />
                        <rect x="22" y="22" width="7" height="7" rx="1.5" fill="var(--indigo)" />
                        {/* Glow dot */}
                        <circle cx="20" cy="20" r="2.5" fill="var(--green)" />
                      </g>

                      {/* Slack Node */}
                      <g transform="translate(112, 10)">
                        <rect width="40" height="40" rx="8" fill="var(--surface-3)" stroke="var(--border)" strokeWidth="1" />
                        <circle cx="20" cy="15" r="2" fill="#10B981" />
                        <rect x="15" y="19" width="3" height="5" rx="1" fill="#F59E0B" />
                        <rect x="22" y="19" width="3" height="5" rx="1" fill="#EF4444" />
                        <circle cx="20" cy="25" r="2" fill="#6366F1" />
                      </g>
                    </svg>
                  )}

                  {index === 1 && (
                    // Step 2: AI sorting — mini task list sorting mockup
                    <div
                      className="w-44 border rounded-xl p-2 shadow-lg relative overflow-hidden"
                      style={{
                        backgroundColor: 'var(--surface-3)',
                        borderColor: 'var(--border)',
                      }}
                    >
                      {/* AI Scan line decoration */}
                      <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-[var(--indigo)] to-transparent opacity-80" />
                      
                      {/* Task 1 */}
                      <div className="flex items-center justify-between p-1.5 rounded bg-[var(--surface-2)]/60 border border-[var(--border)]/80 mb-1.5">
                        <div className="flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-[var(--red)]" />
                          <span className="w-16 h-1.5 rounded bg-neutral-600" />
                        </div>
                        <span className="text-[7px] px-1 py-0.2 rounded bg-[var(--red-subtle)] text-[var(--red)] font-semibold font-mono">P0</span>
                      </div>
                      
                      {/* Task 2 */}
                      <div className="flex items-center justify-between p-1.5 rounded bg-[var(--surface-2)]/60 border border-[var(--border)]/80">
                        <div className="flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-[var(--green)]" />
                          <span className="w-20 h-1.5 rounded bg-neutral-600" />
                        </div>
                        <span className="text-[7px] px-1 py-0.2 rounded bg-[var(--green-subtle)] text-[var(--green)] font-semibold font-mono">P2</span>
                      </div>
                    </div>
                  )}

                  {index === 2 && (
                    // Step 3: Ship faster — Sparkline chart
                    <div
                      className="w-40 border rounded-xl p-2 shadow-lg flex flex-col gap-1"
                      style={{
                        backgroundColor: 'var(--surface-3)',
                        borderColor: 'var(--border)',
                      }}
                    >
                      <div className="flex justify-between items-center px-0.5">
                        <span className="text-[8px] text-[var(--text-muted)] font-mono">VELOCITY TREND</span>
                        <span className="text-[9px] font-bold font-mono text-[var(--green)]">+40%</span>
                      </div>
                      
                      {/* Sparkline chart */}
                      <svg width="100%" height="22" viewBox="0 0 120 22" fill="none" className="overflow-visible">
                        <defs>
                          <linearGradient id="chart-glow" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="var(--green)" stopOpacity="0.3" />
                            <stop offset="100%" stopColor="var(--green)" stopOpacity="0" />
                          </linearGradient>
                        </defs>
                        {/* Chart Area Fill */}
                        <path d="M 0 20 L 20 18 L 40 12 L 60 14 L 80 6 L 100 8 L 120 2 L 120 22 L 0 22 Z" fill="url(#chart-glow)" />
                        {/* Chart Line */}
                        <path d="M 0 20 L 20 18 L 40 12 L 60 14 L 80 6 L 100 8 L 120 2" stroke="var(--green)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        {/* Hotspot dot */}
                        <circle cx="120" cy="2" r="2.5" fill="var(--green)" />
                      </svg>
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
