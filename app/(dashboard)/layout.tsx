/**
 * Dashboard Route Group Layout
 *
 * This layout covers all authenticated dashboard routes:
 * - /admin/* (admin dashboard)
 * - /partner/* (partner dashboard)
 * - /dashboard/* (guest dashboard)
 * - /onboarding/*
 * - /redirect/*
 *
 * Prevents static generation since these routes require authentication.
 * One noindex title covers the private app. These URLs are not public pages.
 */

import type { Metadata } from 'next'
import { privatePageMetadata } from '@/lib/seo/private-metadata'

export const metadata: Metadata = privatePageMetadata(
  'Your Account | The Pickleball Passport',
  'Private account area for trips, payments, and profile details. This page is not for search engines.',
)

// Render on request: these routes use Clerk hooks, which can't prerender when Clerk is disabled
export const dynamic = 'force-dynamic'

export default function DashboardGroupLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
