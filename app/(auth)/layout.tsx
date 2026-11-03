/**
 * Auth Layout
 *
 * Layout wrapper for authentication pages (sign-in, sign-up)
 * Provides consistent styling and structure for auth flows
 */

import type { Metadata } from 'next'
import { privatePageMetadata } from '@/lib/seo/private-metadata'

export const metadata: Metadata = privatePageMetadata(
  'Account Access | The Pickleball Passport',
  'Sign in, create an account, or reset a password. This page is not for search engines.',
)

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-amber-50">
      {children}
    </div>
  )
}
