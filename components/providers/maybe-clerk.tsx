'use client';

import { use } from 'react';
import { usePathname } from 'next/navigation';
import type { ReactNode } from 'react';

// Public marketing pages do not use Clerk. The provider is loaded only on
// account and checkout routes, so clerk-js stays out of the marketing bundle.
const CLERK_PREFIXES = [
  '/dashboard',
  '/admin',
  '/booking',
  '/gift',
  '/sign-in',
  '/sign-up',
  '/forgot-password',
  '/onboarding',
  '/redirect',
  '/settings',
  '/preferences',
  '/partners/settings',
  '/partner/signup',
  '/partner/dashboard',
];

function needsClerk(pathname: string) {
  return CLERK_PREFIXES.some((prefix) => pathname === prefix || pathname.startsWith(`${prefix}/`));
}

type ClerkModule = typeof import('@clerk/nextjs');

let clerkModulePromise: Promise<ClerkModule> | null = null;

function loadClerkModule() {
  if (!clerkModulePromise) clerkModulePromise = import('@clerk/nextjs');
  return clerkModulePromise;
}

function ClerkBoundary({ children }: { children: ReactNode }) {
  const { ClerkProvider } = use(loadClerkModule());
  return <ClerkProvider>{children}</ClerkProvider>;
}

export function MaybeClerk({
  enabled,
  children,
}: {
  enabled: boolean;
  children: ReactNode;
}) {
  const pathname = usePathname() || '/';
  if (!enabled || !needsClerk(pathname)) return children;
  return <ClerkBoundary>{children}</ClerkBoundary>;
}
