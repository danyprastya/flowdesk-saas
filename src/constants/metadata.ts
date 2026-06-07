import type { Metadata, Viewport } from 'next'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://flowdesk.co'

export const siteMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Flowdesk — AI-Powered Project Management for Engineering Teams',
    template: '%s | Flowdesk',
  },
  description:
    'Flowdesk uses AI to automate sprint planning, prioritize backlogs, and surface blockers. Built for engineering teams that ship fast. Free to start.',
  keywords: [
    'AI project management',
    'sprint planning',
    'backlog prioritization',
    'engineering team tools',
    'velocity tracking',
    'agile automation',
    'DORA metrics',
    'developer productivity',
  ],
  authors: [{ name: 'Flowdesk' }],
  creator: 'Flowdesk',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: 'Flowdesk',
    title: 'Flowdesk — AI-Powered Project Management for Engineering Teams',
    description:
      'Automate sprint planning, prioritize backlogs with AI, and ship faster. Built for engineering teams.',
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: 'Flowdesk — AI-powered project management',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Flowdesk — AI-Powered Sprint Planning',
    description:
      'Automate sprint planning and ship faster with AI. Free to start.',
    images: [`${siteUrl}/og-image.png`],
    creator: '@flowdesk',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
}

export const siteViewport: Viewport = {
  themeColor: '#07090F',
  width: 'device-width',
  initialScale: 1,
}
