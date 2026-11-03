import type { Metadata } from 'next'
import { privatePageMetadata } from '@/lib/seo/private-metadata'

export const metadata: Metadata = privatePageMetadata(
  'Sign In to Your Account | The Pickleball Passport',
  'Sign in to manage your pickleball trip, payments, and profile. This page is not for search engines.',
)

export default function SignInLayout({ children }: { children: React.ReactNode }) {
  return children
}
