/**
 * Upcoming events (one-off socials, clinics, trips) read from events.json.
 *
 * To add an event: add one entry to events.json and drop the poster WebP in
 * public/images/events/. Dates need the Bangkok offset (+07:00). `pageUrl` is
 * optional: when set, the home card links to it; otherwise only the ticket
 * button shows.
 */

import eventsData from './events.json';

export type SiteEvent = {
  id: string;
  title: string;
  dateStart: string;
  dateEnd: string;
  location: string;
  priceFrom: number;
  currency: string;
  description: string;
  posterImage: string;
  ctaLabel: string;
  ctaUrl: string;
  status: string;
  showOnHome: boolean;
  pageUrl?: string;
};

export const events: SiteEvent[] = eventsData;

export function getEvent(id: string): SiteEvent {
  const event = events.find((e) => e.id === id);
  if (!event) throw new Error(`Event "${id}" missing from events.json`);
  return event;
}

export function isEventOver(event: SiteEvent, now: number): boolean {
  return new Date(event.dateEnd).getTime() <= now;
}

/** Active, home-visible events that haven't ended yet, soonest first */
export function getHomeEvents(now: number): SiteEvent[] {
  return events
    .filter((e) => e.status === 'active' && e.showOnHome && !isEventOver(e, now))
    .sort((a, b) => a.dateStart.localeCompare(b.dateStart));
}

const TZ = 'Asia/Bangkok';

function part(date: Date, options: Intl.DateTimeFormatOptions): string {
  return new Intl.DateTimeFormat('en-US', { timeZone: TZ, ...options }).format(date);
}

function day(date: Date, withYear = false): string {
  // "Sat Oct 24" or "Sat Oct 24, 2026"
  const label = `${part(date, { weekday: 'short' })} ${part(date, { month: 'short', day: 'numeric' })}`;
  return withYear ? `${label}, ${part(date, { year: 'numeric' })}` : label;
}

function time(date: Date): { clock: string; period: string } {
  // "7" / "7:30" and "PM"
  const parts = new Intl.DateTimeFormat('en-US', { timeZone: TZ, hour: 'numeric', minute: '2-digit' }).formatToParts(date);
  const get = (type: string) => parts.find((p) => p.type === type)?.value ?? '';
  const minute = get('minute');
  return { clock: minute === '00' ? get('hour') : `${get('hour')}:${minute}`, period: get('dayPeriod') };
}

/**
 * Bangkok-time label, e.g. "Sat Oct 24, 7 to 10 PM" or
 * "Mon Nov 2 to Thu Nov 5" for multi-day events. `withYear` adds ", 2026".
 */
export function formatEventDate(event: SiteEvent, withYear = false): string {
  const start = new Date(event.dateStart);
  const end = new Date(event.dateEnd);
  if (day(start) !== day(end)) return `${day(start)} to ${day(end, withYear)}`;

  const s = time(start);
  const e = time(end);
  const startLabel = s.period === e.period ? s.clock : `${s.clock} ${s.period}`;
  return `${day(start, withYear)}, ${startLabel} to ${e.clock} ${e.period}`;
}
