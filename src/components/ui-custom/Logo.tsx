import React from 'react'

interface LogoProps {
  className?: string
  iconSize?: 'sm' | 'md' | 'lg'
  showText?: boolean
}

export default function Logo({ className = '', iconSize = 'md', showText = true }: LogoProps) {
  const sizeMap = {
    sm: { width: 24, height: 24, text: 'text-sm' },
    md: { width: 28, height: 28, text: 'text-base font-semibold' },
    lg: { width: 36, height: 36, text: 'text-xl font-bold' },
  }
  const size = sizeMap[iconSize]

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <svg
        width={size.width}
        height={size.height}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0 transition-transform duration-300 hover:scale-105"
      >
        <defs>
          <linearGradient id="logo-indigo-grad" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="var(--indigo)" />
            <stop offset="100%" stopColor="#818CF8" />
          </linearGradient>
          <linearGradient id="logo-dark-grad" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="var(--surface-3)" />
            <stop offset="100%" stopColor="var(--border)" />
          </linearGradient>
        </defs>
        {/* Top-Left Active Block */}
        <rect x="4" y="4" width="11" height="11" rx="3" fill="url(#logo-indigo-grad)" />
        {/* Top-Right Inactive Block */}
        <rect x="17" y="4" width="11" height="11" rx="3" fill="url(#logo-dark-grad)" stroke="var(--border)" strokeWidth="1" />
        {/* Bottom-Left Inactive Block */}
        <rect x="4" y="17" width="11" height="11" rx="3" fill="url(#logo-dark-grad)" stroke="var(--border)" strokeWidth="1" />
        {/* Bottom-Right Active Block */}
        <rect x="17" y="17" width="11" height="11" rx="3" fill="url(#logo-indigo-grad)" />
        {/* Connection node/glow in center */}
        <circle cx="16" cy="16" r="3" fill="var(--bg)" />
        <circle cx="16" cy="16" r="1.5" fill="var(--green)" />
      </svg>
      {showText && (
        <span className={`tracking-tight text-[var(--text-primary)] ${size.text}`}>
          Flowdesk
        </span>
      )}
    </div>
  )
}
