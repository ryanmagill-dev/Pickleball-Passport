/**
 * Gift Accept Route Layout
 *
 * Render on request: this page uses Clerk hooks, which can't prerender
 * when Clerk is disabled (see lib/auth/clerk-enabled.ts).
 */

export const dynamic = 'force-dynamic'

export default function GiftAcceptLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
