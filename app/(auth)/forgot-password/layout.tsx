import type { Metadata } from 'next'
import { privatePageMetadata } from '@/lib/seo/private-metadata'

export const metadata: Metadata = privatePageMetadata(
  'Reset Your Password | The Pickleball Passport',
  'Reset the password for your Pickleball Passport account. This page is not for search engines.',
)

export default function ForgotPasswordLayout({ children }: { children: React.ReactNode }) {
  return children
}
