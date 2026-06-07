/**
 * Simple in-memory rate limiter keyed by IP address.
 * Sufficient for a marketing site; at scale, replace with
 * Upstash Redis + @upstash/ratelimit for distributed limiting.
 */

interface RateLimitEntry {
  count: number
  resetTime: number
}

const rateLimitMap = new Map<string, RateLimitEntry>()

const MAX_REQUESTS = parseInt(process.env.RATE_LIMIT_MAX_REQUESTS || '5', 10)
const WINDOW_MS = parseInt(process.env.RATE_LIMIT_WINDOW_MS || '60000', 10)

/** Check if a request from the given IP is allowed under the rate limit */
export function rateLimit(ip: string): {
  allowed: boolean
  remaining: number
  resetIn: number
} {
  const now = Date.now()
  const entry = rateLimitMap.get(ip)

  // No previous requests or window expired — reset
  if (!entry || now > entry.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + WINDOW_MS })
    return { allowed: true, remaining: MAX_REQUESTS - 1, resetIn: WINDOW_MS }
  }

  // Within window — increment
  entry.count += 1

  if (entry.count > MAX_REQUESTS) {
    const resetIn = Math.max(0, entry.resetTime - now)
    return { allowed: false, remaining: 0, resetIn }
  }

  return {
    allowed: true,
    remaining: MAX_REQUESTS - entry.count,
    resetIn: Math.max(0, entry.resetTime - now),
  }
}
