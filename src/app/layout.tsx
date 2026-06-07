import type { Metadata, Viewport } from 'next'
import { Inter, JetBrains_Mono, Geist } from 'next/font/google'
import { siteMetadata, siteViewport } from '@/constants/metadata'
import './globals.css'
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata: Metadata = siteMetadata
export const viewport: Viewport = siteViewport

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={cn("font-sans", geist.variable)}>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}
        style={{
          backgroundColor: 'var(--bg)',
          color: 'var(--text-primary)',
        }}
      >
        {/* Skip to content link for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-lg focus:px-4 focus:py-2 focus:text-sm"
          style={{
            backgroundColor: 'var(--indigo)',
            color: '#fff',
          }}
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  )
}
