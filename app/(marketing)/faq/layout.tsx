import type { Metadata } from 'next'
import { metadataFor } from '@/lib/seo/indexable-pages'

export const metadata: Metadata = metadataFor('/faq')

export default function FaqLayout({ children }: { children: React.ReactNode }) {
  return children
}
