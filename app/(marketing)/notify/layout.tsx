import type { Metadata } from 'next'
import { metadataFor } from '@/lib/seo/indexable-pages'

export const metadata: Metadata = metadataFor('/notify')

export default function NotifyLayout({ children }: { children: React.ReactNode }) {
  return children
}
