'use client'

import React from 'react'
import {
  Sparkles,
  Zap,
  Shield,
  TrendingUp,
  Blocks,
  BarChart3,
} from 'lucide-react'
import { FEATURES } from '@/constants/content'
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import SectionHeader from '@/components/ui-custom/SectionHeader'
import AnimatedSection from '@/components/ui-custom/AnimatedSection'

// Lucide Icon mapper to optimize loading
const iconMap: Record<
  string,
  React.ComponentType<{ className?: string; style?: React.CSSProperties }>
> = {
  Sparkles,
  Zap,
  Shield,
  TrendingUp,
  Blocks,
  BarChart3,
}

export default function Features() {
  return (
    <section id="features" className="section-padding">
      {/* Header */}
      <SectionHeader
        label="What's inside"
        headline="Run engineering loops, automated by AI"
        subheadline="Flowdesk works where you work, helping you ship higher quality software with fewer meetings."
      />

      {/* Grid of features */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {FEATURES.map((feature, index) => {
          const IconComponent = iconMap[feature.icon] || Sparkles

          return (
            <AnimatedSection
              key={feature.id}
              direction="up"
              delay={index * 0.08}
            >
              <div
                className="relative flex flex-col justify-between p-6 rounded-2xl border transition-all duration-300 hover:border-[var(--indigo)] premium-shadow group h-full"
                style={{
                  backgroundColor: 'var(--surface)',
                  borderColor: 'var(--border)',
                }}
              >
                <div className="space-y-4">
                  {/* Icon wrapper */}
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center transition-colors duration-300"
                    style={{
                      backgroundColor: 'var(--surface-2)',
                    }}
                  >
                    <IconComponent
                      className="w-5 h-5 transition-transform duration-300 group-hover:scale-110"
                      style={{ color: 'var(--indigo)' }}
                    />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-semibold text-[var(--text-primary)]">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    {feature.description}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          )
        })}
      </div>
    </section>
  )
}
