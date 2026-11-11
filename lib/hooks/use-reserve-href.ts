'use client';

import { useSyncExternalStore } from 'react';
import { reservePathFromWindow } from '@/lib/attribution-browser';

const noopSubscribe = () => () => {};
const getServerHref = () => '/reserve';

/**
 * Returns /reserve with first-touch partner credit and last-touch UTMs.
 * Used by components that link to /reserve.
 *
 * Reads window.location instead of useSearchParams: useSearchParams makes
 * every page using this hook client-side rendered (no SSR HTML). The server
 * renders plain /reserve; the browser adds the query after hydration.
 */
export function useReserveHref(): string {
  return useSyncExternalStore(noopSubscribe, reservePathFromWindow, getServerHref);
}
