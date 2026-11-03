import type { Metadata } from 'next'
import { metadataFor } from '@/lib/seo/indexable-pages'

export const metadata: Metadata = metadataFor('/refund-policy')

export default function RefundPolicyLayout({ children }: { children: React.ReactNode }) {
  return children
}
