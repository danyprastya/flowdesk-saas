'use client'

import { useInView } from 'framer-motion'
import { useRef } from 'react'

/**
 * Reusable hook to detect when an element is in view to trigger scroll animations.
 * @param amount - Fraction of the element that must be visible (0 to 1)
 * @param once - Whether the animation should trigger only once
 */
export function useScrollAnimation(amount = 0.15, once = true) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once, amount })

  return { ref, isInView }
}
