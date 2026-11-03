import type { Metadata } from 'next'
import { privatePageMetadata } from '@/lib/seo/private-metadata'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = privatePageMetadata(
  'Decline a Gifted Trip | The Pickleball Passport',
  'Decline a gifted pickleball trip and send the booking back. This page is not for search engines.',
)

export default function GiftDeclineLayout({ children }: { children: React.ReactNode }) {
  return children
}
