import type { Metadata } from 'next'
import { privatePageMetadata } from '@/lib/seo/private-metadata'

export const metadata: Metadata = privatePageMetadata(
  'Create Your Account | The Pickleball Passport',
  'Create an account to apply for a pickleball trip to Thailand. This page is not for search engines.',
)

export default function SignUpLayout({ children }: { children: React.ReactNode }) {
  return children
}
