'use client';

import { useSyncExternalStore } from 'react';

const noopSubscribe = () => () => {};
const getRef = () => new URLSearchParams(window.location.search).get('ref');
const getServerRef = () => null;

/**
 * Returns the /reserve URL with the current ref parameter preserved.
 * Used by all components that link to /reserve so partner attribution
 * follows the user through to the GHL form.
 *
 * Reads window.location instead of useSearchParams: useSearchParams makes
 * every page using this hook client-side rendered (no SSR HTML). The server
 * renders plain /reserve; the browser adds ?ref after hydration. /reserve
 * also falls back to the referral_code cookie.
 */
export function useReserveHref(): string {
  const ref = useSyncExternalStore(noopSubscribe, getRef, getServerRef);
  return ref ? `/reserve?ref=${encodeURIComponent(ref)}` : '/reserve';
}
