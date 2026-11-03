import type { Metadata } from 'next'
import { privatePageMetadata } from '@/lib/seo/private-metadata'

export const metadata: Metadata = privatePageMetadata(
  'Email Preference Center | The Pickleball Passport',
  'Choose which emails you get from The Pickleball Passport. This page is not for search engines.',
)

export default function PreferencesLayout({ children }: { children: React.ReactNode }) {
  return children
}
