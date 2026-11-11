'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { listedDepartures } from '@/lib/trips/public-schedule';

/* ─────────────────────── PROVISIONAL ROW ─────────────────────── */

function ProvisionalRow({
  month, route, dates, price, href,
}: {
  month: string;
  route: string;
  dates: string;
  price: string | null;
  href: string | null;
}) {
  return (
    <div className="rounded-xl border border-[#1D2D44]/10 bg-white p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
      <div className="flex items-center gap-3 flex-wrap">
        <p className="font-serif font-bold text-[#1D2D44] text-base">{month}</p>
        <span className="text-xs text-[#1D2D44]/50">{route}</span>
        <span className="text-xs text-[#1D2D44]/40">{dates}</span>
      </div>
      <div className="flex items-center gap-4">
        {price ? (
          <span className="text-sm font-bold text-[#1D2D44]">{price}<span className="text-xs font-normal text-[#1D2D44]/40 ml-1">/person</span></span>
        ) : null}
        <Link
          href={href ?? '/notify'}
          className="text-xs font-semibold text-[#B08D55] hover:text-[#8D7144] transition-colors flex items-center gap-1 whitespace-nowrap"
        >
          {href ? 'See this trip' : 'Hold my interest'} <ArrowRight className="w-3 h-3" />
        </Link>
      </div>
    </div>
  );
}

/* ─────────────────────── PAGE ─────────────────────── */

export default function CalendarPage() {
  return (
    <main className="min-h-screen bg-[#FDF8F3]">

      {/* ── Header ── */}
      <section className="relative overflow-hidden text-white py-14 sm:py-20">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="/images/posters/songkran-sunset-poster.jpg"
          className="absolute inset-0 w-full h-full object-cover object-center"
        >
          <source src="/songkran-sunset.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-[#0F1A2A]/85" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#B08D55] mb-3">All Dates</p>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-white mb-3">Departure Calendar</h1>
          <p className="text-white/70 text-base max-w-2xl">
            January and February 2027 are open. December 9 to 17, 2027 is Koh Chang. Other 2027 dates are not on sale yet.
          </p>
          <Link
            href="/trips"
            className="inline-flex items-center gap-2 mt-4 text-sm font-semibold text-[#B08D55] hover:text-[#CFB78D] transition-colors"
          >
            See the January and February trips <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-14">

        {/* ── Clinic Week ── */}
        <div>
          <div className="mb-5">
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#1D2D44]">Clinic Week Bangkok</h2>
            <p className="text-[#1D2D44]/50 text-sm mt-0.5">Nov 2 to 5, 2026. $299 full week, $169 Two-Day Pass. No trip required.</p>
          </div>
          <Link
            href="/clinics"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#B08D55] hover:text-[#8D7144] transition-colors"
          >
            See Clinic Week <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div>
          <div className="mb-5">
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#1D2D44]">Open dates</h2>
            <p className="text-[#1D2D44]/50 text-sm mt-0.5">January and February 2027 are the trips you can book now. December 9 to 17, 2027 is Koh Chang.</p>
          </div>
          <div className="space-y-2.5">
            {listedDepartures().map((row) => (
              <ProvisionalRow
                key={row.id}
                month={row.monthLabel}
                route={row.route}
                dates={row.dates}
                price={row.priceLabel}
                href={row.href}
              />
            ))}
          </div>
        </div>

      </div>
    </main>
  );
}
