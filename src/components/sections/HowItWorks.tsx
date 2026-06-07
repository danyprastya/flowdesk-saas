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
            className="hidden lg:block absolute top-[52px] left-[15%] right-[15%] h-0.5 border-t-2 border-dashed pointer-events-none"
            style={{ borderColor: 'var(--border)' }}
          />

          {HOW_IT_WORKS.steps.map((step, index) => {
            const IconComponent = iconMap[step.icon] || Cable

            return (
              <AnimatedSection
                key={step.number}
                direction="up"
                delay={index * 0.1}
                className="relative flex flex-col items-center text-center space-y-5 group px-4 py-6 rounded-2xl border premium-shadow transition-all duration-300 hover:border-[var(--indigo)]"
                style={{
                  backgroundColor: 'var(--surface)',
                  borderColor: 'var(--border)',
                }}
              >
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
                        <g transform="translate(10, 10)">
                          <path d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482C17.138 18.193 20 14.44 20 10.017 20 4.484 15.522 0 10 0z" fill="var(--text-primary)" />
                        </g>
                      </g>

                      {/* Center Linear Node */}
                      <g transform="translate(60, 10)">
                        <rect width="40" height="40" rx="8" fill="var(--indigo-subtle)" stroke="var(--indigo)" strokeWidth="1" />
                        <g transform="translate(10, 10)">
                          <path d="M10 0a10 10 0 1010 10A10 10 0 0010 0zm0 18a8 8 0 118-8 8 8 0 01-8 8z" fill="var(--indigo)" />
                          <path d="M10 4a6 6 0 00-6 6h12a6 6 0 00-6-6z" fill="var(--indigo)" />
                        </g>
                      </g>

                      {/* Slack Node */}
                      <g transform="translate(112, 10)">
                        <rect width="40" height="40" rx="8" fill="var(--surface-3)" stroke="var(--border)" strokeWidth="1" />
                        <g transform="translate(10, 10)">
                          <svg viewBox="0 0 24 24" width="20" height="20">
                            <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523 2.528 2.528 0 0 1-2.522-2.523 2.528 2.528 0 0 1 2.522-2.52h2.52v2.52zm1.261 0a2.528 2.528 0 0 1 2.52-2.52h5.043a2.528 2.528 0 0 1 2.522 2.52v5.042a2.528 2.528 0 0 1-2.522 2.52H8.823a2.528 2.528 0 0 1-2.52-2.52v-5.042z" fill="#36C5F0"/>
                            <path d="M8.823 5.043a2.528 2.528 0 0 1-2.52-2.52 2.528 2.528 0 0 1 2.52-2.523 2.528 2.528 0 0 1 2.522 2.52v2.52h-2.522zm0 1.261a2.528 2.528 0 0 1 2.52 2.52v5.043a2.528 2.528 0 0 1-2.52 2.522H3.78a2.528 2.528 0 0 1-2.52-2.522V8.824a2.528 2.528 0 0 1 2.52-2.52h5.043z" fill="#2EB67D"/>
                            <path d="M18.958 8.824a2.528 2.528 0 0 1 2.522-2.52 2.528 2.528 0 0 1 2.52 2.52 2.528 2.528 0 0 1-2.52 2.522h-2.522V8.824zm-1.261 0a2.528 2.528 0 0 1-2.52 2.52h-5.043a2.528 2.528 0 0 1-2.522-2.52V3.782a2.528 2.528 0 0 1 2.522-2.52h5.043a2.528 2.528 0 0 1 2.52 2.52v5.042z" fill="#ECB22E"/>
                            <path d="M15.177 18.958a2.528 2.528 0 0 1 2.52 2.522 2.528 2.528 0 0 1-2.52 2.52 2.528 2.528 0 0 1-2.522-2.52v-2.522h2.522zm0-1.261a2.528 2.528 0 0 1-2.52-2.522v-5.043a2.528 2.528 0 0 1 2.52-2.52h5.043a2.528 2.528 0 0 1 2.522 2.52v5.043a2.528 2.528 0 0 1-2.522 2.52h-5.043z" fill="#E01E5A"/>
                          </svg>
                        </g>
                      </g>
                    </svg>
                  )}

                  {index === 1 && (
                    // Step 2: AI sorting — mini task list sorting mockup
                    <div
                      className="w-44 border rounded-xl p-2 shadow-sm relative overflow-hidden"
                      style={{
                        backgroundColor: 'var(--surface)',
                        borderColor: 'var(--border)',
                      }}
                    >
                      {/* AI Scan line decoration */}
                      <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-[var(--indigo)] to-transparent opacity-80" />
                      
                      {/* Task 1 */}
                      <div className="flex items-center justify-between p-1.5 rounded bg-[var(--surface-2)]/60 border border-[var(--border)]/80 mb-1.5">
                        <div className="flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-[var(--red)]" />
                          <span className="w-16 h-1.5 rounded bg-slate-200" />
                        </div>
                        <span className="text-[7px] px-1 py-0.2 rounded bg-[var(--red-subtle)] text-[var(--red)] font-semibold font-mono">P0</span>
                      </div>
                      
                      {/* Task 2 */}
                      <div className="flex items-center justify-between p-1.5 rounded bg-[var(--surface-2)]/60 border border-[var(--border)]/80">
                        <div className="flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-[var(--green)]" />
                          <span className="w-20 h-1.5 rounded bg-slate-200" />
                        </div>
                        <span className="text-[7px] px-1 py-0.2 rounded bg-[var(--green-subtle)] text-[var(--green)] font-semibold font-mono">P2</span>
                      </div>
                    </div>
                  )}

                  {index === 2 && (
                    // Step 3: Ship faster — Sparkline chart
                    <div
                      className="w-40 border rounded-xl p-2 shadow-sm flex flex-col gap-1"
                      style={{
                        backgroundColor: 'var(--surface)',
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
