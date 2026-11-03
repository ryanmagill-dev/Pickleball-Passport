import type { Metadata } from 'next'
import { privatePageMetadata } from '@/lib/seo/private-metadata'

export const metadata: Metadata = privatePageMetadata(
  'Application Received | The Pickleball Passport',
  'Your trip application was received. This confirmation page is not for search engines.',
)

export default function ApplySuccessLayout({ children }: { children: React.ReactNode }) {
  return children
}
