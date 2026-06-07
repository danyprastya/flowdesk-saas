import React from 'react'
import { cn } from '@/lib/utils'

interface SectionHeaderProps {
  label?: string
  headline: string
  subheadline?: string
  align?: 'left' | 'center'
  className?: string
}

export default function SectionHeader({
  label,
  headline,
  subheadline,
  align = 'center',
  className = '',
}: SectionHeaderProps) {
  const isLeft = align === 'left'

  return (
    <div
      className={cn(
        'mb-16 flex flex-col',
        isLeft ? 'items-start text-left' : 'items-center text-center',
        className
      )}
    >
      {label && (
        <span
          className="mb-3 text-xs font-semibold tracking-wider uppercase"
          style={{ color: 'var(--indigo-text)' }}
        >
          {label}
        </span>
      )}
      <h2
        className={cn(
          'text-gradient text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl',
          isLeft ? '' : 'mx-auto max-w-3xl'
        )}
      >
        {headline}
      </h2>
      {subheadline && (
        <p
          className={cn(
            'mt-4 text-base sm:text-lg',
            isLeft ? '' : 'mx-auto max-w-2xl'
          )}
          style={{ color: 'var(--text-secondary)' }}
        >
          {subheadline}
        </p>
      )}
    </div>
  )
}
