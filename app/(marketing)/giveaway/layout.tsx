import type { Metadata } from 'next'
import { GIVEAWAY_LIVE, giveawayDraftMetadata } from '@/lib/giveaway/config'
import { metadataFor } from '@/lib/seo/indexable-pages'

export const metadata: Metadata = GIVEAWAY_LIVE
  ? metadataFor('/giveaway')
  : giveawayDraftMetadata()

export default function GiveawayLayout({ children }: { children: React.ReactNode }) {
  return children
}
