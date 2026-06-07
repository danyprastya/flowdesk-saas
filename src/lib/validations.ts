import { z } from 'zod'

/** Personal email domains that should be rejected — we want business emails only */
const PERSONAL_EMAIL_DOMAINS = [
  'gmail.com',
  'yahoo.com',
  'hotmail.com',
  'outlook.com',
  'aol.com',
  'icloud.com',
  'mail.com',
  'protonmail.com',
  'zoho.com',
  'yandex.com',
]

export const demoRequestSchema = z.object({
  fullName: z
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name must be under 100 characters')
    .regex(/^[^0-9]*$/, 'Name should not contain numbers'),
  workEmail: z
    .string()
    .email('Please enter a valid email address')
    .refine(
      (email) => {
        const domain = email.split('@')[1]?.toLowerCase()
        return !PERSONAL_EMAIL_DOMAINS.includes(domain)
      },
      { message: 'Please use your work email address' }
    ),
  companyName: z
    .string()
    .min(2, 'Company name must be at least 2 characters')
    .max(200, 'Company name must be under 200 characters'),
  teamSize: z.enum(['1-10', '11-50', '51-200', '200+']),
  hearAboutUs: z.enum(['google', 'linkedin', 'friend', 'twitter', 'other']),
  message: z
    .string()
    .max(1000, 'Message must be under 1000 characters')
    .optional()
    .or(z.literal('')),
})

export type DemoRequestFormValues = z.infer<typeof demoRequestSchema>
