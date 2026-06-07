'use client'

import { useState } from 'react'

export function usePricingToggle() {
  const [isAnnual, setIsAnnual] = useState(false)

  const toggle = () => setIsAnnual((prev) => !prev)

  return {
    isAnnual,
    toggle,
    setIsAnnual,
  }
}
