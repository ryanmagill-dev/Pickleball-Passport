import type { Metadata } from 'next'
import { metadataFor } from '@/lib/seo/indexable-pages'

export const metadata: Metadata = metadataFor('/testimonials')

export default function TestimonialsLayout({ children }: { children: React.ReactNode }) {
  return children
}
