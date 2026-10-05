/**
 * Clerk on/off switch
 *
 * Clerk (auth) is only used by the signed-in dashboards, which are dormant.
 * When its keys are absent (e.g. Vercel Preview builds), the app skips Clerk:
 * no ClerkProvider, middleware locks auth-only routes, tRPC sees no user.
 * Add the keys back and everything switches on again.
 */

export const isClerkEnabled = Boolean(
  process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY && process.env.CLERK_SECRET_KEY
);

// Client components only see NEXT_PUBLIC_ vars
export const isClerkEnabledClient = Boolean(process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY);
