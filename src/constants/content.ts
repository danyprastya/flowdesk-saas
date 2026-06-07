import type {
  Feature,
  FAQItem,
  PricingPlan,
  Testimonial,
  AutomationLogLine,
} from '@/types'

export const SITE = {
  name: 'Flowdesk',
  tagline: 'AI-powered project management for engineering teams',
  description:
    'Flowdesk uses AI to automate sprint planning, prioritize backlogs, and surface blockers before they derail your roadmap. Built for engineering teams that ship fast.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://flowdesk.co',
  email: 'hello@flowdesk.co',
  twitter: '@flowdesk',
}

export const NAV_LINKS = [
  { label: 'Features', href: '#features' },
  { label: 'How it works', href: '#how-it-works' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
]

export const HERO = {
  badge: 'AI-powered project management',
  headline: 'Stop managing sprints.\nStart shipping product.',
  subheadlines: [
    'Auto-prioritize your backlog with AI',
    'Surface blockers before standup',
    'Ship 40% faster, every sprint',
  ],
  body: 'Flowdesk replaces the busywork of sprint planning, backlog grooming, and status updates with AI that actually understands your codebase and team velocity.',
  ctas: {
    primary: { label: 'Request a demo', href: '#demo-request' },
    secondary: { label: 'See how it works', href: '#how-it-works' },
  },
  socialProof: '4.9/5 from 2,400+ engineering teams',
}

export const SOCIAL_PROOF = {
  label: 'Trusted by teams at',
  companies: [
    'Vercel',
    'Linear',
    'Supabase',
    'Planetscale',
    'Railway',
    'Resend',
  ],
}

export const FEATURES: Feature[] = [
  {
    id: 'ai-backlog',
    icon: 'Sparkles',
    title: 'AI Backlog Prioritization',
    description:
      'Flowdesk analyzes your backlog against team velocity, dependency graphs, and business impact to rank every ticket automatically. No more hour-long grooming sessions.',
  },
  {
    id: 'sprint-autopilot',
    icon: 'Zap',
    title: 'Sprint Autopilot',
    description:
      'Define your sprint goals and let Flowdesk suggest the optimal scope based on historical capacity, upcoming PTO, and cross-team dependencies.',
  },
  {
    id: 'blocker-detection',
    icon: 'Shield',
    title: 'Blocker Detection',
    description:
      'Flowdesk monitors PR activity, Slack threads, and ticket updates to surface blockers before your daily standup — not after it.',
  },
  {
    id: 'velocity-insights',
    icon: 'TrendingUp',
    title: 'Velocity Intelligence',
    description:
      'Track team throughput with accuracy that improves every sprint. Flowdesk learns from your patterns and adjusts forecasts in real time.',
  },
  {
    id: 'integrations',
    icon: 'Blocks',
    title: 'Deep Integrations',
    description:
      'Connect your entire stack — GitHub, GitLab, Jira, Linear, Slack, Notion. Flowdesk syncs bidirectionally so nothing falls through the cracks.',
  },
  {
    id: 'reporting',
    icon: 'BarChart3',
    title: 'Executive Dashboards',
    description:
      'Generate investor-ready engineering reports in one click. Cycle time, throughput, deployment frequency — all the DORA metrics your CTO actually wants.',
  },
]

export const HOW_IT_WORKS = {
  label: 'How it works',
  headline: 'From chaos to clarity in three steps',
  steps: [
    {
      number: '01',
      icon: 'Cable',
      title: 'Connect your tools',
      description:
        'Link your GitHub repos, project boards, and communication channels. Flowdesk starts learning your workflow in under 5 minutes.',
    },
    {
      number: '02',
      icon: 'Brain',
      title: 'AI sorts the noise',
      description:
        'Our AI engine maps dependencies, scores urgency, and predicts blockers across your entire engineering org — not just one team.',
    },
    {
      number: '03',
      icon: 'Rocket',
      title: 'Ship faster, every sprint',
      description:
        'Your team spends less time in planning ceremonies and more time writing code. Average teams see a 40% reduction in sprint planning overhead.',
    },
  ],
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'testimonial-1',
    name: 'Sarah Chen',
    role: 'VP of Engineering',
    company: 'Ramp',
    avatar: 'SC',
    quote:
      'Flowdesk cut our sprint planning from 3 hours to 45 minutes. The AI suggestions are scarily accurate — it surfaces the right priorities before we even discuss them.',
    metric: '75% less time in planning',
  },
  {
    id: 'testimonial-2',
    name: 'Marcus Rivera',
    role: 'Engineering Manager',
    company: 'Loom',
    avatar: 'MR',
    quote:
      'We tried every PM tool on the market. Flowdesk is the first one that actually reduced our meeting load instead of adding to it. The blocker detection alone is worth the price.',
    metric: '40% fewer status meetings',
  },
  {
    id: 'testimonial-3',
    name: 'Aisha Patel',
    role: 'CTO',
    company: 'Deel',
    avatar: 'AP',
    quote:
      'The velocity intelligence finally gave us accurate sprint forecasts. We went from missing deadlines monthly to shipping on time for 6 consecutive sprints.',
    metric: '6 sprints shipped on time',
  },
  {
    id: 'testimonial-4',
    name: 'Jakob Eriksson',
    role: 'Staff Engineer',
    company: 'Figma',
    avatar: 'JE',
    quote:
      'As an IC, I love that Flowdesk reduces the ceremony around sprint work. Less time grooming tickets, more time in the codebase. That is the entire value proposition.',
    metric: '3 hours saved per dev/week',
  },
]

export const PRICING: PricingPlan[] = [
  {
    id: 'starter',
    name: 'Starter',
    monthlyPrice: 0,
    annualPrice: 0,
    description: 'For small teams getting started with AI-powered planning',
    highlighted: false,
    features: [
      { text: 'Up to 10 team members', included: true },
      { text: 'AI backlog prioritization', included: true },
      { text: 'Basic velocity tracking', included: true },
      { text: '2 integrations (GitHub + Slack)', included: true },
      { text: 'Blocker detection', included: false },
      { text: 'Executive dashboards', included: false },
    ],
    cta: 'Get started free',
    ctaVariant: 'outline',
  },
  {
    id: 'pro',
    name: 'Pro',
    monthlyPrice: 18,
    annualPrice: 14,
    description: 'For growing teams that need full AI sprint automation',
    badge: 'Most Popular',
    highlighted: true,
    features: [
      { text: 'Unlimited team members', included: true },
      { text: 'AI backlog prioritization', included: true },
      { text: 'Advanced velocity intelligence', included: true },
      { text: 'Unlimited integrations', included: true },
      { text: 'Blocker detection + alerts', included: true },
      { text: 'Executive dashboards', included: false },
    ],
    cta: 'Start free trial',
    ctaVariant: 'default',
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    monthlyPrice: 42,
    annualPrice: 34,
    description: 'For orgs that need security, compliance, and custom AI models',
    highlighted: false,
    features: [
      { text: 'Unlimited everything', included: true },
      { text: 'Custom AI model training', included: true },
      { text: 'Advanced velocity intelligence', included: true },
      { text: 'Unlimited integrations + SSO', included: true },
      { text: 'Blocker detection + escalation', included: true },
      { text: 'Executive dashboards + API', included: true },
    ],
    cta: 'Contact sales',
    ctaVariant: 'outline',
  },
]

export const FAQ: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'How does Flowdesk AI prioritize my backlog?',
    answer:
      'Flowdesk analyzes multiple signals: business impact scores, dependency graphs between tickets, your team\'s historical velocity, upcoming deadlines, and cross-team blockers. It produces a ranked priority list that you can accept, adjust, or override entirely. The model improves every sprint as it learns your team\'s patterns.',
  },
  {
    id: 'faq-2',
    question: 'Does Flowdesk replace Jira or Linear?',
    answer:
      'No — Flowdesk works alongside your existing project management tools. We integrate deeply with Jira, Linear, GitHub Projects, and Asana. Think of Flowdesk as the AI brain that sits on top of your current workflow, not a replacement for it.',
  },
  {
    id: 'faq-3',
    question: 'How long does setup take?',
    answer:
      'Most teams are fully set up in under 10 minutes. Connect your GitHub repos and project boards via OAuth, and Flowdesk starts learning your workflow immediately. AI suggestions improve significantly after your first completed sprint.',
  },
  {
    id: 'faq-4',
    question: 'Is my code safe? What data does Flowdesk access?',
    answer:
      'Flowdesk never accesses your source code contents. We only read metadata: PR titles, ticket descriptions, branch names, and commit messages. All data is encrypted at rest (AES-256) and in transit (TLS 1.3). We are SOC 2 Type II certified and GDPR compliant.',
  },
  {
    id: 'faq-5',
    question: 'Can I try Flowdesk before committing to a paid plan?',
    answer:
      'Absolutely. Our Starter plan is free forever for teams up to 10 people. Pro plans come with a 14-day free trial — no credit card required. If you need to evaluate Enterprise features, request a demo and we will set up a custom pilot.',
  },
  {
    id: 'faq-6',
    question: 'What happens if Flowdesk is down? Will my team be blocked?',
    answer:
      'Flowdesk is a productivity layer, not a critical path dependency. If our service is temporarily unavailable, your existing tools (Jira, Linear, GitHub) continue working as usual. We maintain 99.9% uptime with redundant infrastructure across three regions.',
  },
]

export const DEMO_REQUEST = {
  label: 'Get started',
  headline: 'See Flowdesk in action',
  subheadline:
    'Book a 30-minute personalized demo and see how Flowdesk can transform your sprint workflow.',
  trustSignals: [
    'No credit card required',
    'Personalized to your stack',
    'See ROI in your first sprint',
  ],
  whatHappensNext: [
    {
      icon: 'Mail',
      title: 'We review your request',
      description: 'Within 2 hours during business hours',
    },
    {
      icon: 'Calendar',
      title: 'You get a calendar link',
      description: 'Pick a time that works for your team',
    },
    {
      icon: 'Video',
      title: '30-min personalized demo',
      description: 'Tailored to your workflow and team size',
    },
  ],
}

export const AUTOMATION_LOG_LINES: AutomationLogLine[] = [
  {
    id: 'log-1',
    timestamp: '14:32:01.204',
    status: 'success',
    message: 'Webhook received — validating payload...',
    delay: 400,
  },
  {
    id: 'log-2',
    timestamp: '14:32:01.412',
    status: 'success',
    message: 'Schema validation passed ✓',
    delay: 600,
  },
  {
    id: 'log-3',
    timestamp: '14:32:01.891',
    status: 'success',
    message: 'Rate limit check — 4 requests remaining',
    delay: 500,
  },
  {
    id: 'log-4',
    timestamp: '14:32:02.103',
    status: 'success',
    message: 'Creating lead in CRM (HubSpot)...',
    delay: 800,
  },
  {
    id: 'log-5',
    timestamp: '14:32:02.847',
    status: 'success',
    message: 'Lead created — assigned to sales team',
    delay: 700,
  },
  {
    id: 'log-6',
    timestamp: '14:32:03.201',
    status: 'success',
    message: 'Sending confirmation email via Resend...',
    delay: 600,
  },
  {
    id: 'log-7',
    timestamp: '14:32:03.892',
    status: 'success',
    message: 'Email delivered to recipient',
    delay: 700,
  },
  {
    id: 'log-8',
    timestamp: '14:32:04.156',
    status: 'success',
    message: 'Slack notification sent → #sales-leads',
    delay: 500,
  },
  {
    id: 'log-9',
    timestamp: '14:32:04.601',
    status: 'success',
    message: '★ Workflow complete — all 5 steps executed',
    delay: 600,
  },
]

export const FOOTER = {
  brand: {
    name: 'Flowdesk',
    tagline: 'AI-powered project management for teams that ship.',
  },
  columns: [
    {
      title: 'Product',
      links: [
        { label: 'Features', href: '#features' },
        { label: 'Pricing', href: '#pricing' },
        { label: 'Integrations', href: '#features' },
        { label: 'Changelog', href: '#' },
      ],
    },
    {
      title: 'Company',
      links: [
        { label: 'About', href: '#' },
        { label: 'Blog', href: '#' },
        { label: 'Careers', href: '#' },
        { label: 'Contact', href: '#demo-request' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { label: 'Documentation', href: '#' },
        { label: 'API Reference', href: '#' },
        { label: 'Status', href: '#' },
        { label: 'Support', href: '#' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { label: 'Privacy Policy', href: '#' },
        { label: 'Terms of Service', href: '#' },
        { label: 'Cookie Policy', href: '#' },
        { label: 'Security', href: '#' },
      ],
    },
  ],
  legal: {
    copyright: `© ${new Date().getFullYear()} Flowdesk, Inc. All rights reserved.`,
    builtWith: 'Built with Next.js & n8n',
  },
}
