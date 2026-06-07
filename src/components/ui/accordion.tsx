'use client'

import React, { createContext, useContext, useState } from 'react'
import { cn } from '@/lib/utils'
import { ChevronDown } from 'lucide-react'

// Accordion Context to manage open item state
const AccordionContext = createContext<{
  openValue: string | null
  setOpenValue: React.Dispatch<React.SetStateAction<string | null>>
} | null>(null)

interface AccordionProps extends React.HTMLAttributes<HTMLDivElement> {
  type?: 'single'
  collapsible?: boolean
  children: React.ReactNode
}

function Accordion({ className, children, type, collapsible, ...props }: AccordionProps) {
  const [openValue, setOpenValue] = useState<string | null>(null)

  return (
    <AccordionContext.Provider value={{ openValue, setOpenValue }}>
      <div className={cn('flex w-full flex-col', className)} {...props}>
        {children}
      </div>
    </AccordionContext.Provider>
  )
}

// Accordion Item Context to store item's specific value
const AccordionItemContext = createContext<string | null>(null)

interface AccordionItemProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string
  children: React.ReactNode
}

function AccordionItem({ className, value, children, ...props }: AccordionItemProps) {
  return (
    <AccordionItemContext.Provider value={value}>
      <div className={cn('border-b', className)} {...props}>
        {children}
      </div>
    </AccordionItemContext.Provider>
  )
}

interface AccordionTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
}

function AccordionTrigger({ className, children, ...props }: AccordionTriggerProps) {
  const context = useContext(AccordionContext)
  const itemValue = useContext(AccordionItemContext)

  if (!context || !itemValue) {
    throw new Error('AccordionTrigger must be used within Accordion and AccordionItem')
  }

  const isOpen = context.openValue === itemValue

  const handleToggle = () => {
    if (isOpen) {
      context.setOpenValue(null)
    } else {
      context.setOpenValue(itemValue)
    }
  }

  return (
    <button
      type="button"
      onClick={handleToggle}
      aria-expanded={isOpen}
      className={cn(
        'flex flex-1 items-center justify-between w-full py-4 text-left font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180',
        className
      )}
      data-state={isOpen ? 'open' : 'closed'}
      {...props}
    >
      {children}
      <ChevronDown className="w-4 h-4 shrink-0 transition-transform duration-200" />
    </button>
  )
}

interface AccordionContentProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

function AccordionContent({ className, children, ...props }: AccordionContentProps) {
  const context = useContext(AccordionContext)
  const itemValue = useContext(AccordionItemContext)

  if (!context || !itemValue) {
    throw new Error('AccordionContent must be used within Accordion and AccordionItem')
  }

  const isOpen = context.openValue === itemValue

  return (
    <div
      className={cn(
        'overflow-hidden transition-all duration-200 ease-in-out',
        isOpen ? 'max-h-96 opacity-100 pb-4' : 'max-h-0 opacity-0'
      )}
      {...props}
    >
      <div className={className}>{children}</div>
    </div>
  )
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
