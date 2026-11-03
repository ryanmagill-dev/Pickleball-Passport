import type { Metadata } from 'next'
import { privatePageMetadata } from '@/lib/seo/private-metadata'

export const metadata: Metadata = privatePageMetadata(
  'Check a Support Ticket | The Pickleball Passport',
  'Look up a support ticket with your reference number and email. This page is not for search engines.',
)

export default function SupportStatusLayout({ children }: { children: React.ReactNode }) {
  return children
}
