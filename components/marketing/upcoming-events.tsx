'use client';

/**
 * Upcoming Events strip (home page)
 *
 * Slim card(s) for events in lib/data/events.json. The server passes events
 * that hadn't ended at build/render time; the browser re-checks against its
 * own clock so a stale static build hides past events too. Renders nothing
 * when no events are left.
 */

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Clock, MapPin } from 'lucide-react';
import { formatEventDate, isEventOver, type SiteEvent } from '@/lib/data/events';
import { useClientNow } from '@/lib/hooks/use-client-now';

function firstSentence(text: string): string {
  const end = text.indexOf('. ');
  return end === -1 ? text : text.slice(0, end + 1);
}

export function UpcomingEvents({ events }: { events: SiteEvent[] }) {
  const now = useClientNow();
  const visible = now === null ? events : events.filter((e) => !isEventOver(e, now));
  if (visible.length === 0) return null;

  return (
    <section className="bg-[#FDF8F3] py-10 sm:py-12 border-b border-[#B08D55]/20" aria-labelledby="upcoming-heading">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto">
          <p id="upcoming-heading" className="text-sm font-semibold tracking-widest text-[#B08D55] uppercase mb-4">
            Upcoming
          </p>
          <ul className="space-y-4">
            {visible.map((event) => (
              <li key={event.id}>
                <EventCard event={event} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function EventCard({ event }: { event: SiteEvent }) {
  const poster = (
    <Image
      src={event.posterImage}
      alt={`${event.title} poster`}
      width={96}
      height={136}
      loading="lazy"
      sizes="96px"
      className="w-20 sm:w-24 h-auto rounded-lg shadow-sm"
    />
  );

  return (
    <div className="flex flex-col sm:flex-row sm:items-center gap-4 bg-white rounded-2xl p-4 sm:p-5 border border-[#B08D55]/20">
      <div className="flex gap-4 items-start flex-1 min-w-0">
        {event.pageUrl ? (
          <Link href={event.pageUrl} className="flex-shrink-0" tabIndex={-1} aria-hidden="true">
            {poster}
          </Link>
        ) : (
          <div className="flex-shrink-0">{poster}</div>
        )}
        <div className="min-w-0">
          <h3 className="font-serif font-bold text-[#1D2D44] text-lg leading-snug mb-1">
            {event.pageUrl ? (
              <Link href={event.pageUrl} className="hover:text-[#B08D55] transition-colors">
                {event.title}
              </Link>
            ) : (
              event.title
            )}
          </h3>
          <p className="flex items-center gap-1.5 text-sm text-[#1D2D44]/80">
            <Clock className="w-4 h-4 text-[#B08D55] flex-shrink-0" />
            {formatEventDate(event)}
          </p>
          <p className="flex items-center gap-1.5 text-sm text-[#1D2D44]/80">
            <MapPin className="w-4 h-4 text-[#B08D55] flex-shrink-0" />
            {event.location}
          </p>
          <p className="text-sm text-[#1D2D44]/70 leading-relaxed mt-2">{firstSentence(event.description)}</p>
        </div>
      </div>
      <a
        href={event.ctaUrl}
        target="_blank"
        rel="noopener"
        className="inline-flex whitespace-nowrap items-center justify-center gap-2 px-6 py-3 min-h-11 rounded-xl bg-gradient-to-r from-[#B08D55] to-[#CFB78D] text-[#0F1A2A] font-bold text-sm shadow-md shadow-[#B08D55]/20 hover:shadow-lg transition-all"
      >
        {event.ctaLabel}
        <ArrowRight className="w-4 h-4" />
      </a>
    </div>
  );
}
