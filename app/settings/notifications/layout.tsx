import type { Metadata } from 'next'
import { privatePageMetadata } from '@/lib/seo/private-metadata'

export const metadata: Metadata = privatePageMetadata(
  'Notification Settings | The Pickleball Passport',
  'Update notification settings for your Pickleball Passport account. This page is not for search engines.',
)

export default function NotificationSettingsLayout({ children }: { children: React.ReactNode }) {
  return children
}
