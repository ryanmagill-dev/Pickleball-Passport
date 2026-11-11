'use client';

import { Suspense, useEffect, useRef } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { gaClickEvent } from '@/lib/analytics/ga';
import { FT_COOKIE, REF_COOKIE, parseTouch, partnerRefFrom } from '@/lib/attribution';
import { readCookie } from '@/lib/attribution-browser';

function gtag(): ((...args: unknown[]) => void) | null {
  if (typeof window === 'undefined') return null;
  const fn = (window as { gtag?: (...args: unknown[]) => void }).gtag;
  return typeof fn === 'function' ? fn : null;
}

function firstTouchPartner(): string | undefined {
  const first = parseTouch(readCookie(FT_COOKIE));
  const ref = (first && partnerRefFrom(first)) || readCookie(REF_COOKIE) || '';
  return ref || undefined;
}

/**
 * The installed @next/third-parties tag sends the first page_view only.
 * Later App Router navigations need their own page_view.
 */
function RoutePageViews() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const skipInitial = useRef(true);

  useEffect(() => {
    const query = searchParams.toString();
    if (skipInitial.current) {
      skipInitial.current = false;
      return;
    }
    const send = gtag();
    if (!send) return;
    send('event', 'page_view', {
      page_path: query ? `${pathname}?${query}` : pathname,
      page_location: window.location.href,
      page_title: document.title,
    });
  }, [pathname, searchParams]);

  return null;
}

export function GaInteractions() {
  useEffect(() => {
    const onClick = (event: Event) => {
      const target = event.target;
      const element = target instanceof Element ? target : target instanceof Node ? target.parentElement : null;
      const href = element?.closest('a')?.getAttribute('href');
      if (!href) return;
      const name = gaClickEvent(href);
      if (!name) return;
      const send = gtag();
      if (!send) return;
      const partnerRef = firstTouchPartner();
      send('event', name, partnerRef ? { partner_ref: partnerRef } : {});
    };
    document.addEventListener('click', onClick, true);
    return () => document.removeEventListener('click', onClick, true);
  }, []);

  return (
    <Suspense fallback={null}>
      <RoutePageViews />
    </Suspense>
  );
}
