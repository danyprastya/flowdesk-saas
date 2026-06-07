'use client'

import React, { useEffect, useState } from 'react'
import { useTypingEffect } from '@/hooks/useTypingEffect'

interface TypingEffectProps {
  phrases: string[]
  speed?: number
  pause?: number
}

export default function TypingEffect({
  phrases,
  speed = 60,
  pause = 2500,
}: TypingEffectProps) {
  const [mounted, setMounted] = useState(false)
  const displayText = useTypingEffect(phrases, speed, pause)

  // Avoid hydration mismatch by rendering the complete first phrase on the server
  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <span className="inline-flex items-center">
      <span>{mounted ? displayText : phrases[0]}</span>
      <span
        className="ml-1 inline-block w-[3px] h-[1.2em] bg-current animate-cursor-blink font-mono"
        aria-hidden="true"
      >
        
      </span>
    </span>
  )
}
