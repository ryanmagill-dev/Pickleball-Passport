import type { Metadata } from 'next'
import { privatePageMetadata } from '@/lib/seo/private-metadata'

export const metadata: Metadata = privatePageMetadata(
  'Partner Notification Settings | The Pickleball Passport',
  'Update notification settings for your partner account. This page is not for search engines.',
)

export default function PartnerNotificationSettingsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
