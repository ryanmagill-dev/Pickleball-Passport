'use client';

/**
 * Event ticket button. Once the event has ended (checked on the server and
 * again in the browser), swaps to a short "done" line with a link home.
 */

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { isEventOver, type SiteEvent } from '@/lib/data/events';
import { useClientNow } from '@/lib/hooks/use-client-now';

export function EventCta({ event, endedAtRender }: { event: SiteEvent; endedAtRender: boolean }) {
  const now = useClientNow();
  const ended = now === null ? endedAtRender : isEventOver(event, now);

  if (ended) {
    return (
      <p className="text-[#1D2D44]/80">
        This one&apos;s done.{' '}
        <Link href="/" className="font-semibold text-[#B08D55] hover:underline">
          Back to the home page
        </Link>
      </p>
    );
  }

  return (
    <a
      href={event.ctaUrl}
      target="_blank"
      rel="noopener"
      className="inline-flex w-full sm:w-auto whitespace-nowrap items-center justify-center gap-2 px-7 py-4 rounded-xl bg-gradient-to-r from-[#B08D55] to-[#CFB78D] text-[#0F1A2A] font-bold text-sm shadow-lg shadow-[#B08D55]/30 hover:shadow-xl transition-all"
    >
      {event.ctaLabel}
      <ArrowRight className="w-4 h-4" />
    </a>
  );
}
