'use client'

import { useEffect, useState } from 'react'

export function useCountUp(
  end: number,
  duration = 2000,
  trigger = false
): number {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!trigger) return

    let startTime: number | null = null
    const startValue = 0

    const easeOutQuart = (x: number): number => {
      return 1 - Math.pow(1 - x, 4)
    }

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      const easedProgress = easeOutQuart(progress)
      
      setCount(Math.floor(startValue + easedProgress * (end - startValue)))

      if (progress < 1) {
        window.requestAnimationFrame(step)
      } else {
        setCount(end)
      }
    }

    window.requestAnimationFrame(step)
  }, [end, duration, trigger])

  return count
}
