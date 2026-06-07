import React from 'react'
import { SOCIAL_PROOF } from '@/constants/content'

export default function SocialProof() {
  return (
    <section
      className="py-10 border-y"
      style={{
        borderColor: 'var(--border)',
        backgroundColor: 'var(--bg)',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row md:items-center justify-between gap-6 md:gap-8">
        {/* Label */}
        <div
          className="text-xs font-semibold uppercase tracking-wider shrink-0 text-left"
          style={{ color: 'var(--text-muted)' }}
        >
          {SOCIAL_PROOF.label}
        </div>

        {/* Company logos wrapper */}
        <div className="flex flex-wrap items-center gap-x-10 gap-y-5 justify-start md:justify-end">
          {SOCIAL_PROOF.companies.map((company) => (
            <span
              key={company}
              className="text-sm font-semibold tracking-wide"
              style={{ color: 'var(--text-secondary)' }}
            >
              {company}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
