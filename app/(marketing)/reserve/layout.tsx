import type { Metadata } from 'next'
import { metadataFor } from '@/lib/seo/indexable-pages'

export const metadata: Metadata = metadataFor('/reserve')

export default function ReserveLayout({ children }: { children: React.ReactNode }) {
  return children
}
