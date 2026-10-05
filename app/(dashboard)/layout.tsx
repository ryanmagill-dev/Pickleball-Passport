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
 * Prevents static generation since these routes require authentication
 */

// Render on request: these routes use Clerk hooks, which can't prerender when Clerk is disabled
export const dynamic = 'force-dynamic'

export default function DashboardGroupLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
