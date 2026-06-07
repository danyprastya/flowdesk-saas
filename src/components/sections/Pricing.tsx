'use client'

import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Check, X } from 'lucide-react'
import { PRICING } from '@/constants/content'
import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Switch } from '@/components/ui/switch'
import { Separator } from '@/components/ui/separator'
import { Badge } from '@/components/ui/badge'
import { usePricingToggle } from '@/hooks/usePricingToggle'
import SectionHeader from '@/components/ui-custom/SectionHeader'
import AnimatedSection from '@/components/ui-custom/AnimatedSection'

export default function Pricing() {
  const { isAnnual, toggle } = usePricingToggle()

  const handleScrollToDemo = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    const element = document.getElementById('demo-request')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      id="pricing"
      className="py-24 border-y"
      style={{
        borderColor: 'var(--border)',
        backgroundColor: 'var(--surface)',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <SectionHeader
          label="Pricing"
          headline="Flexible plans for teams of all sizes"
          subheadline="Get started for free or upgrade for advanced backlog prioritization and blocker tracking."
        />

        {/* Annual Monthly Switch */}
        <div className="flex items-center justify-center gap-3 mb-12 select-none">
          <span
            className="text-sm transition-colors duration-200"
            style={{
              color: isAnnual ? 'var(--text-secondary)' : 'var(--text-primary)',
            }}
          >
            Monthly
          </span>
          <Switch
            checked={isAnnual}
            onCheckedChange={toggle}
            className="data-[state=checked]:bg-[var(--indigo)]"
            aria-label="Toggle annual billing"
          />
          <span
            className="text-sm transition-colors duration-200 flex items-center gap-2"
            style={{
              color: isAnnual ? 'var(--text-primary)' : 'var(--text-secondary)',
            }}
          >
            Annual billing
            <Badge
              variant="outline"
              className="text-[10px] py-0.5 px-2 font-semibold border-[var(--indigo-subtle)] text-[var(--indigo-text)] bg-[var(--indigo-subtle)]"
            >
              Save 20%
            </Badge>
          </span>
        </div>

        {/* Plan Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {PRICING.map((plan, index) => {
            const price = isAnnual ? plan.annualPrice : plan.monthlyPrice
            const isPro = plan.highlighted

            return (
              <AnimatedSection
                key={plan.id}
                direction="up"
                delay={index * 0.08}
                className="h-full flex"
              >
                <div
                  className={`relative flex flex-col justify-between p-6 rounded-2xl transition-all duration-300 w-full h-full border ${
                    isPro
                      ? 'border-2 border-[var(--indigo)] shadow-xl shadow-indigo-100 scale-[1.02] lg:scale-105 z-10'
                      : 'hover:border-[var(--border-hover)]'
                  }`}
                  style={{
                    backgroundColor: 'var(--surface)',
                    borderColor: isPro ? 'var(--indigo)' : 'var(--border)',
                  }}
                >
                  {/* Badge */}
                  {plan.badge && (
                    <span
                      className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[10px] font-bold uppercase tracking-widest py-1 px-4 rounded-full text-white shadow-md z-20"
                      style={{ backgroundColor: 'var(--indigo)' }}
                    >
                      {plan.badge}
                    </span>
                  )}

                  <div className="space-y-6 flex-1 flex flex-col">
                    {/* Card Info Header */}
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold text-[var(--text-primary)]">
                        {plan.name}
                      </h3>
                      <p
                        className="text-xs min-h-[32px] leading-relaxed"
                        style={{ color: 'var(--text-secondary)' }}
                      >
                        {plan.description}
                      </p>
                    </div>

                    {/* Price info content */}
                    <div className="flex items-baseline gap-1">
                      <AnimatePresence mode="wait">
                        <motion.span
                          key={price}
                          initial={{ opacity: 0, y: -6 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 6 }}
                          transition={{ duration: 0.15 }}
                          className="text-5xl font-black font-mono text-[var(--text-primary)]"
                        >
                          ${price}
                        </motion.span>
                      </AnimatePresence>
                      <span
                        className="text-xs ml-1"
                        style={{ color: 'var(--text-secondary)' }}
                      >
                        / seat / month
                      </span>
                    </div>

                    <div className="h-[1px] w-full bg-[var(--border)]" />

                    {/* Features checklist */}
                    <ul className="space-y-4 flex-1">
                      {plan.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-3 text-xs leading-relaxed"
                        >
                          {feature.included ? (
                            <Check
                              className="w-4 h-4 shrink-0 mt-0.5"
                              style={{ color: 'var(--green)' }}
                            />
                          ) : (
                            <X
                              className="w-4 h-4 shrink-0 mt-0.5"
                              style={{ color: 'var(--text-muted)' }}
                            />
                          )}
                          <span
                            className="flex-1"
                            style={{
                              color: feature.included
                                ? 'var(--text-primary)'
                                : 'var(--text-muted)',
                            }}
                          >
                            {feature.text}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action card button */}
                  <div className="mt-6 pt-6 border-t border-[var(--border)]/40">
                    <Button
                      onClick={handleScrollToDemo}
                      variant={plan.ctaVariant}
                      className={`w-full py-2.5 text-xs font-semibold cursor-pointer transition-all duration-200 ${
                        isPro
                          ? 'bg-[var(--indigo)] text-white hover:bg-[var(--indigo)]/90 shadow-sm shadow-indigo-100'
                          : 'border border-[var(--border)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--surface-2)]'
                      }`}
                    >
                      {plan.cta}
                    </Button>
                  </div>
                </div>
              </AnimatedSection>
            )
          })}
        </div>
      </div>
    </section>
  )
}
