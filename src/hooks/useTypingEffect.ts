'use client'

import { useState, useEffect } from 'react'

export function useTypingEffect(
  phrases: string[],
  speed = 60,
  pause = 2500
): string {
  const [phraseIndex, setPhraseIndex] = useState(0)
  const [displayText, setDisplayText] = useState(phrases[0] || '')
  const [isDeleting, setIsDeleting] = useState(false)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    if (phrases.length === 0) return

    // If paused, wait and then start deleting
    if (isPaused) {
      const timeout = setTimeout(() => {
        setIsPaused(false)
        setIsDeleting(true)
      }, pause)
      return () => clearTimeout(timeout)
    }

    // If deleting, remove characters quickly
    if (isDeleting) {
      if (displayText === '') {
        setIsDeleting(false)
        setPhraseIndex((prev) => (prev + 1) % phrases.length)
        return
      }

      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev.slice(0, -1))
      }, 30) // fast delete speed
      return () => clearTimeout(timeout)
    }

    // If typing, add characters at normal speed
    const targetPhrase = phrases[phraseIndex]
    if (displayText === targetPhrase) {
      setIsPaused(true)
      return
    }

    const timeout = setTimeout(() => {
      setDisplayText((prev) => targetPhrase.slice(0, prev.length + 1))
    }, speed)

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, isPaused, phraseIndex, phrases, speed, pause])

  return displayText
}
