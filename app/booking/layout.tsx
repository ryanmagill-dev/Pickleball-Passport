/**
 * Booking Route Layout
 *
 * Covers all booking-related routes:
 * - /booking/configure/*
 * - /booking/confirmation/*
 * - /booking/modify/*
 * - /booking/payment/*
 * - /booking/review/*
 *
 * Checkout steps keep their own titles. They are noindex so they do not
 * compete with the public trip pages.
 */

import type { Metadata } from 'next'

export const metadata: Metadata = {
  robots: { index: false, follow: false },
}

// Render on request: these routes use Clerk hooks, which can't prerender when Clerk is disabled
export const dynamic = 'force-dynamic'

export default function BookingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
