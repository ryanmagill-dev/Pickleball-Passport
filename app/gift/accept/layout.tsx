/**
 * Gift Accept Route Layout
 *
 * Render on request: this page uses Clerk hooks, which can't prerender
 * when Clerk is disabled (see lib/auth/clerk-enabled.ts).
 */

import type { Metadata } from 'next'
import { privatePageMetadata } from '@/lib/seo/private-metadata'

export const metadata: Metadata = privatePageMetadata(
  'Accept a Gifted Trip | The Pickleball Passport',
  'Accept a gifted pickleball trip to Thailand. This page is not for search engines.',
)

export const dynamic = 'force-dynamic'

export default function GiftAcceptLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
