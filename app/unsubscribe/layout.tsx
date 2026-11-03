import type { Metadata } from 'next'
import { privatePageMetadata } from '@/lib/seo/private-metadata'

export const metadata: Metadata = privatePageMetadata(
  'Email Unsubscribe | The Pickleball Passport',
  'Stop emails from The Pickleball Passport. This page is not for search engines.',
)

export default function UnsubscribeLayout({ children }: { children: React.ReactNode }) {
  return children
}
