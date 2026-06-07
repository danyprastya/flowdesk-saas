'use client'

import React from 'react'
import { FAQ } from '@/constants/content'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import SectionHeader from '@/components/ui-custom/SectionHeader'
import AnimatedSection from '@/components/ui-custom/AnimatedSection'
import { Button } from '@/components/ui/button'

export default function FAQSection() {
  const handleScrollToDemo = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    const element = document.getElementById('demo-request')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="faq" className="section-padding">
      {/* Header */}
      <SectionHeader
        label="FAQ"
        headline="Frequently asked questions"
        subheadline="Everything you need to know about the product, integrations, and pricing structures."
      />

      {/* Accordion list */}
      <div className="max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="w-full space-y-4">
          {FAQ.map((item, index) => (
            <AnimatedSection
              key={item.id}
              direction="up"
              delay={index * 0.05}
            >
              <AccordionItem
                value={item.id}
                className="border rounded-xl px-5 transition-all duration-200 hover:border-[var(--border-hover)]"
                style={{
                  backgroundColor: 'var(--surface)',
                  borderColor: 'var(--border)',
                }}
              >
                <AccordionTrigger className="text-sm font-semibold py-4 text-left hover:no-underline text-[var(--text-primary)]">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent
                  className="text-xs sm:text-sm leading-relaxed pb-4 pt-1"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            </AnimatedSection>
          ))}
        </Accordion>
      </div>

      {/* Bottom Callout */}
      <div className="mt-16 text-center space-y-4 flex flex-col items-center">
        <p className="text-xs sm:text-sm" style={{ color: 'var(--text-secondary)' }}>
          Still have questions? We&apos;re here to help.
        </p>
        <Button
          onClick={handleScrollToDemo}
          variant="outline"
          className="border-[var(--border)] text-xs font-semibold px-6 hover:bg-[var(--surface-2)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] cursor-pointer"
        >
          Contact Sales
        </Button>
      </div>
    </section>
  )
}
