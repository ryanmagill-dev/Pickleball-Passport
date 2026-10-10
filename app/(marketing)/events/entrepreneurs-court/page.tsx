/**
 * Entrepreneurs' Court event page (/events/entrepreneurs-court)
 *
 * Dates, place, price, poster and ticket link come from lib/data/events.json
 * (also used for the JSON-LD and Open Graph tags). After the event ends the
 * page stays up and the ticket button becomes a "This one's done" line.
 */

import Image from 'next/image';
import type { Metadata } from 'next';
import { Clock, MapPin, Ticket, Users, Handshake } from 'lucide-react';
import { EventCta } from '@/components/marketing/event-cta';
import { formatEventDate, getEvent, isEventOver } from '@/lib/data/events';

const SITE_URL = 'https://www.thepickleballpassport.org';
const PAGE_PATH = '/events/entrepreneurs-court';
const POSTER_WIDTH = 1400;
const POSTER_HEIGHT = 1979;

const event = getEvent('entrepreneurs-court-oct-2026');
const pageUrl = `${SITE_URL}${PAGE_PATH}`;
const posterUrl = `${SITE_URL}${event.posterImage}`;
const price = `From ${event.priceFrom} ${event.currency}`;
// Checked at build/render time; EventCta re-checks in the browser
const endedAtRender = isEventOver(event, Date.now());

const title = `${event.title}, Oct 24 in Bangkok | The Pickleball Passport`;
const description =
  'Two hours of pickleball with people building things, then an hour worth staying for. Sat Oct 24, Pick A Court, Bangkok. From 899 THB. All levels welcome.';

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: pageUrl },
  openGraph: {
    title,
    description,
    url: pageUrl,
    siteName: 'The Pickleball Passport',
    type: 'website',
    images: [{ url: posterUrl, width: POSTER_WIDTH, height: POSTER_HEIGHT, alt: `${event.title} poster` }],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: [posterUrl],
  },
};

const faqs = [
  { q: 'Do I need to be good?', a: 'No. All levels welcome.' },
  { q: 'How many spots?', a: '24.' },
  { q: 'Where is it?', a: event.location + '.' },
  { q: 'How much?', a: `${price}.` },
  { q: "What's the format?", a: "Two hours of pickleball, then an hour that's worth staying for. No pitch decks, no panel." },
];

export default function EntrepreneursCourtPage() {
  const eventSchema = {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: event.title,
    startDate: event.dateStart,
    endDate: event.dateEnd,
    eventStatus: 'https://schema.org/EventScheduled',
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
    location: {
      '@type': 'Place',
      name: 'Pick A Court',
      address: { '@type': 'PostalAddress', addressLocality: 'Bangkok', addressCountry: 'TH' },
    },
    image: [posterUrl],
    description: event.description,
    organizer: { '@type': 'Organization', name: 'The Pickleball Passport', url: SITE_URL },
    offers: {
      '@type': 'Offer',
      price: event.priceFrom,
      priceCurrency: event.currency,
      url: event.ctaUrl,
      availability: 'https://schema.org/InStock',
    },
  };

  const details = [
    { icon: Clock, text: formatEventDate(event, true) },
    { icon: MapPin, text: event.location },
    { icon: Ticket, text: `${price} · 24 spots` },
    { icon: Users, text: 'All levels welcome' },
    { icon: Handshake, text: 'Hosted with The Right Play' },
  ];

  return (
    <div className="bg-[#FDF8F3]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(eventSchema) }}
      />

      <section className="py-10 sm:py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
            <Image
              src={event.posterImage}
              alt="The Entrepreneurs' Court poster: two hours of pickleball with people building things, then an hour worth staying for. 7 to 10 PM at Pick A Court, from 899 THB, 24 spots, all levels welcome. Hosted by The Pickleball Passport and The Right Play."
              width={POSTER_WIDTH}
              height={POSTER_HEIGHT}
              sizes="(max-width: 768px) 100vw, 480px"
              priority
              className="w-full max-w-sm md:max-w-none mx-auto h-auto rounded-2xl shadow-lg"
            />

            <div>
              <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#B08D55] mb-3">Event · Bangkok</p>
              <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#1D2D44] leading-tight mb-5">
                {event.title}
              </h1>
              <p className="text-lg text-[#1D2D44]/80 leading-relaxed mb-3">
                Two hours of pickleball with people building things. And then an hour that&apos;s actually worth
                staying for.
              </p>
              <p className="text-lg font-semibold text-[#1D2D44] mb-8">No pitch decks. No panel.</p>

              <ul className="space-y-3 mb-8">
                {details.map(({ icon: Icon, text }) => (
                  <li key={text} className="flex items-center gap-3 text-[#1D2D44]/80">
                    <Icon className="w-5 h-5 text-[#B08D55] flex-shrink-0" />
                    {text}
                  </li>
                ))}
              </ul>

              <EventCta event={event} endedAtRender={endedAtRender} />
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 sm:py-14 bg-white border-t border-[#B08D55]/10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1D2D44] mb-6">Quick questions</h2>
          <dl className="divide-y divide-[#B08D55]/15">
            {faqs.map(({ q, a }) => (
              <div key={q} className="py-4">
                <dt className="font-semibold text-[#1D2D44]">{q}</dt>
                <dd className="mt-1 text-[#1D2D44]/75">{a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
    </div>
  );
}
