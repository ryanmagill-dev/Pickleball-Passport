import type { Metadata } from 'next'
import { metadataFor } from '@/lib/seo/indexable-pages'

export const metadata: Metadata = metadataFor('/custom')

export default function CustomTripLayout({ children }: { children: React.ReactNode }) {
  return children
}
