export interface DemoRequestFormData {
  fullName: string
  workEmail: string
  companyName: string
  teamSize: '1-10' | '11-50' | '51-200' | '200+'
  hearAboutUs: 'google' | 'linkedin' | 'friend' | 'twitter' | 'other'
  message?: string
}

export interface DemoRequestResponse {
  success: boolean
  message: string
  submittedAt: string
}

export interface N8nWebhookPayload {
  fullName: string
  workEmail: string
  companyName: string
  teamSize: string
  hearAboutUs: string
  message: string
  submittedAt: string
  source: string
  webhookSecret: string
}

export interface AutomationLogLine {
  id: string
  timestamp: string
  status: 'pending' | 'success' | 'error'
  message: string
  delay: number
}

export interface PricingPlan {
  id: string
  name: string
  monthlyPrice: number
  annualPrice: number
  description: string
  badge?: string
  highlighted: boolean
  features: Array<{ text: string; included: boolean }>
  cta: string
  ctaVariant: 'default' | 'outline'
}

export interface Testimonial {
  id: string
  name: string
  role: string
  company: string
  avatar: string
  quote: string
  metric: string
}

export interface Feature {
  id: string
  icon: string
  title: string
  description: string
}

export interface FAQItem {
  id: string
  question: string
  answer: string
}
