import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4">
      <p
        className="text-8xl font-bold font-mono"
        style={{ color: 'var(--indigo)' }}
      >
        404
      </p>
      <h1
        className="mt-4 text-2xl font-semibold"
        style={{ color: 'var(--text-primary)' }}
      >
        Page not found
      </h1>
      <p
        className="mt-2 max-w-md text-center text-sm"
        style={{ color: 'var(--text-secondary)' }}
      >
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
        Let&apos;s get you back on track.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-medium text-white transition-colors hover:opacity-90"
        style={{ backgroundColor: 'var(--indigo)' }}
      >
        ← Back to home
      </Link>
    </div>
  )
}
