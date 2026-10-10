'use client';

import { useSyncExternalStore } from 'react';

/**
 * The browser's current time (captured once per page load), or null during
 * server render and hydration. Lets statically built pages re-check dates in
 * the browser so an old build never shows a past event as upcoming.
 */

let clientNow: number | undefined;
const getNow = () => (clientNow ??= Date.now());
const subscribe = () => () => {};

export function useClientNow(): number | null {
  return useSyncExternalStore(subscribe, getNow, () => null);
}
