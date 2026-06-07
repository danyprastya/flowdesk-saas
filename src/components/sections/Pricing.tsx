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
                <Card
                  className={`glass-card flex flex-col relative w-full h-full transition-all duration-300 ${
                    isPro
                      ? 'border-2 border-[var(--indigo)] shadow-lg shadow-indigo-950/20'
                      : 'border hover:border-[var(--border-hover)]'
                  }`}
                  style={{
                    backgroundColor: 'var(--surface)',
                  }}
                >
                  {/* Badge */}
                  {plan.badge && (
                    <span
                      className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2 text-[10px] font-bold uppercase tracking-wider py-1 px-3.5 rounded-full text-white"
                      style={{ backgroundColor: 'var(--indigo)' }}
                    >
                      {plan.badge}
                    </span>
                  )}

                  {/* Card Info Header */}
                  <CardHeader className="p-6 pb-2 mt-2 space-y-2">
                    <h3 className="text-xl font-bold text-[var(--text-primary)]">
                      {plan.name}
                    </h3>
                    <p
                      className="text-xs min-h-[32px] leading-relaxed"
                      style={{ color: 'var(--text-secondary)' }}
                    >
                      {plan.description}
                    </p>
                  </CardHeader>

                  {/* Price info content */}
                  <CardContent className="p-6 py-2 flex-1 flex flex-col gap-6">
                    <div className="flex items-baseline gap-1.5 min-h-[44px]">
                      <AnimatePresence mode="wait">
                        <motion.span
                          key={price}
                          initial={{ opacity: 0, y: -8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 8 }}
                          transition={{ duration: 0.15 }}
                          className="text-4xl font-extrabold text-[var(--text-primary)] font-mono"
                        >
                          ${price}
                        </motion.span>
                      </AnimatePresence>
                      <span
                        className="text-xs"
                        style={{ color: 'var(--text-secondary)' }}
                      >
                        per seat/month
                      </span>
                    </div>

                    <Separator style={{ backgroundColor: 'var(--border)' }} />

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
                  </CardContent>

                  {/* Action card button */}
                  <CardFooter className="p-6 mt-auto">
                    <Button
                      onClick={handleScrollToDemo}
                      variant={plan.ctaVariant}
                      className={`w-full py-2.5 text-xs font-semibold cursor-pointer ${
                        isPro
                          ? 'bg-[var(--indigo)] text-white hover:opacity-90'
                          : 'border-[var(--border)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--surface-2)]'
                      }`}
                    >
                      {plan.cta}
                    </Button>
                  </CardFooter>
                </Card>
              </AnimatedSection>
            )
          })}
        </div>
      </div>
    </section>
  )
}
