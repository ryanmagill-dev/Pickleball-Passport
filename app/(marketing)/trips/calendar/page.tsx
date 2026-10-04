'use client';

import Link from 'next/link';
import { ArrowRight, Star } from 'lucide-react';

/* ─────────────────────── DATA ─────────────────────── */

const routeA = [
  { month: 'November 2026', price: 5500, label: 'Nov 1–9', featured: false, href: '/trips/bangkok-hua-hin' },
  { month: 'December 2026', price: 5500, label: 'Dec 10–18', featured: false, href: '/trips/bangkok-hua-hin' },
];

const provisional2027 = [
  { month: 'May 2027', route: 'Route B · Chiang Mai', dates: 'Thu May 20 – Fri May 28' },
  { month: 'June 2027', route: 'Route A · Hua Hin', dates: 'Thu Jun 17 – Fri Jun 25' },
  { month: 'July 2027', route: 'Route B · Chiang Mai', dates: 'Thu Jul 15 – Fri Jul 23' },
  { month: 'August 2027', route: 'Route A · Hua Hin', dates: 'Thu Aug 19 – Fri Aug 27' },
  { month: 'September 2027', route: 'Route B · Chiang Mai', dates: 'Thu Sep 16 – Fri Sep 24' },
  { month: 'October 2027', route: 'Route A · Hua Hin', dates: 'Thu Oct 14 – Fri Oct 22' },
  { month: 'November 2027', route: 'Route B · Chiang Mai', dates: 'Thu Nov 11 – Fri Nov 19' },
  { month: 'December 2027', route: 'Route A · Hua Hin', dates: 'Thu Dec 9 – Fri Dec 17' },
];

/* ─────────────────────── MONTH CARD ─────────────────────── */

function MonthCard({
  month, price, label, featured, special, href,
}: {
  month: string; price: number; label: string | null;
  featured?: boolean; special?: boolean; href: string | null;
}) {
  const highlight = featured || special;
  return (
    <div className={`rounded-xl border p-4 flex flex-col gap-2 ${highlight ? 'bg-[#FDF8F3] border-[#B08D55]/30' : 'bg-white border-[#B08D55]/10'}`}>
      <div>
        {featured && (
          <div className="inline-flex items-center gap-1 text-xs font-bold text-[#B08D55] mb-1">
            <Star className="w-3 h-3" /> Featured
          </div>
        )}
        <p className="font-serif font-bold text-[#1D2D44] text-base">{month}</p>
        {label && <p className="text-xs text-[#B08D55] mt-0.5">{label}</p>}
        {!label && <p className="text-xs text-[#1D2D44]/35 mt-0.5">Dates set once your spot is reserved</p>}
      </div>
      <div className="flex items-center justify-between mt-auto pt-1">
        <span className="text-sm font-bold text-[#1D2D44]">${price.toLocaleString()}<span className="text-xs font-normal text-[#1D2D44]/40 ml-1">/person</span></span>
        {href ? (
          <Link href={href} className="text-xs font-semibold text-[#B08D55] hover:text-[#8D7144] transition-colors flex items-center gap-1">
            Details <ArrowRight className="w-3 h-3" />
          </Link>
        ) : (
          <Link href="/contact"
            className="text-xs font-semibold text-[#B08D55] hover:text-[#8D7144] transition-colors flex items-center gap-1">
            I&apos;m interested <ArrowRight className="w-3 h-3" />
          </Link>
        )}
      </div>
    </div>
  );
}

/* ─────────────────────── PROVISIONAL ROW ─────────────────────── */

function ProvisionalRow({ month, route, dates }: { month: string; route: string; dates: string }) {
  return (
    <div className="rounded-xl border border-[#1D2D44]/10 bg-white p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
      <div className="flex items-center gap-3 flex-wrap">
        <p className="font-serif font-bold text-[#1D2D44] text-base">{month}</p>
        <span className="text-xs text-[#1D2D44]/50">{route}</span>
        <span className="text-xs text-[#1D2D44]/40">{dates}</span>
      </div>
      <div className="flex items-center gap-4">
        <span className="text-sm font-bold text-[#1D2D44]">$5,500<span className="text-xs font-normal text-[#1D2D44]/40 ml-1">/person</span></span>
        <Link
          href="/notify"
          className="text-xs font-semibold text-[#B08D55] hover:text-[#8D7144] transition-colors flex items-center gap-1 whitespace-nowrap"
        >
          Hold my interest <ArrowRight className="w-3 h-3" />
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
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-white mb-3">2026–27 Departure Calendar</h1>
          <p className="text-white/70 text-base max-w-2xl">
            Every product, every month. Reserve your month and we&apos;ll confirm exact dates with you.
          </p>
          <Link
            href="/trips"
            className="inline-flex items-center gap-2 mt-4 text-sm font-semibold text-[#B08D55] hover:text-[#CFB78D] transition-colors"
          >
            Looking for January to April 2027? See our featured departures <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-14">

        {/* ── Route A ── */}
        <div>
          <div className="mb-5">
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#1D2D44]">Route A: Bangkok + Hua Hin</h2>
            <p className="text-[#1D2D44]/50 text-sm mt-0.5">9 days / 8 nights · Bangkok riverside hotel + Our 5-Star Hua Hin Resort · $5,500/person</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {routeA.map((row) => <MonthCard key={row.month} {...row} />)}
          </div>
        </div>

        {/* ── Clinic Week ── */}
        <div>
          <div className="mb-5">
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#1D2D44]">Clinic Week Bangkok</h2>
            <p className="text-[#1D2D44]/50 text-sm mt-0.5">Nov 1–5, 2026. $299 full week, $169 Two-Day Pass. No trip required.</p>
          </div>
          <Link
            href="/clinics"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#B08D55] hover:text-[#8D7144] transition-colors"
          >
            See Clinic Week <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* ── Rest of 2027, provisional ── */}
        <div>
          <div className="mb-5">
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#1D2D44]">The Rest of 2027</h2>
            <p className="text-[#1D2D44]/50 text-sm mt-0.5">One departure a month, alternating Chiang Mai and Hua Hin.</p>
          </div>
          <div className="space-y-2.5">
            {provisional2027.map((row) => <ProvisionalRow key={row.month} {...row} />)}
          </div>
          <p className="text-[#1D2D44]/40 text-xs mt-4 leading-relaxed max-w-2xl">
            Dates are confirmed about 90 days before departure, once rooms are locked. If a date moves, everyone on the list hears first.
          </p>
        </div>

      </div>
    </main>
  );
}
