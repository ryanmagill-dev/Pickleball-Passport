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
 * Prevents static generation since these routes use Clerk for auth
 */

// Render on request: these routes use Clerk hooks, which can't prerender when Clerk is disabled
export const dynamic = 'force-dynamic'

export default function BookingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
