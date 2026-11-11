'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { outboundParams } from '@/lib/attribution';
import { decorateDocument, persistVisit } from '@/lib/attribution-browser';

/**
 * Records partner / UTM landing cookies and copies them onto FastPay payment
 * links and GoHighLevel form and calendar iframes. Mounted from the root layout.
 * Runs after hydration so server HTML and the first client render stay in sync.
 */
export function AffiliateTracker() {
  const pathname = usePathname();

  useEffect(() => {
    let applying = false;

    const apply = () => {
      if (applying) return;
      applying = true;
      try {
        const state = persistVisit();
        decorateDocument(document, outboundParams(state.first, state.last, state.referralCode));
      } finally {
        applying = false;
      }
    };

    apply();

    let frame = 0;
    const schedule = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        frame = 0;
        apply();
      });
    };

    const observer = new MutationObserver(schedule);
    observer.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ['href', 'src'],
    });

    // pointerdown runs before click and before a new tab opens, including a
    // click that happens as the page is still painting.
    const onPointerDown = (event: Event) => {
      const target = event.target;
      const element = target instanceof Element ? target : target instanceof Node ? target.parentElement : null;
      if (!element?.closest('a[href*="fastpaydirect.com"]')) return;
      apply();
    };

    document.addEventListener('pointerdown', onPointerDown, true);
    window.addEventListener('popstate', apply);

    return () => {
      observer.disconnect();
      if (frame) window.cancelAnimationFrame(frame);
      document.removeEventListener('pointerdown', onPointerDown, true);
      window.removeEventListener('popstate', apply);
    };
  }, [pathname]);

  return null;
}
