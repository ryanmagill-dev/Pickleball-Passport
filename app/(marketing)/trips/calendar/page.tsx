'use client';

import Link from 'next/link';
import { ArrowRight, Star } from 'lucide-react';

/* ─────────────────────── DATA ─────────────────────── */

const routeA = [
  { month: 'November 2026', price: 5500, label: 'Nov 1–9', featured: false, href: '/trips/bangkok-hua-hin' },
  { month: 'December 2026', price: 5500, label: 'Dec 10–18', featured: false, href: '/trips/bangkok-hua-hin' },
];

const routeB = [
  { month: 'January 2027', price: 5500, label: 'Phuket Extension available', special: false, href: '/trips/bangkok-chiang-mai/january-14-2027' },
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

/* ─────────────────────── PAGE ─────────────────────── */

export default function CalendarPage() {
  return (
    <main className="min-h-screen bg-[#FDF8F3]">

      {/* ── Header ── */}
      <section className="bg-[#0F1A2A] text-white py-14 sm:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#B08D55] mb-3">All Dates</p>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-white mb-3">2026–27 Departure Calendar</h1>
          <p className="text-white/50 text-base max-w-2xl">
            Every product, every month. Reserve your month and we'll confirm exact dates with you.
          </p>
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

        {/* ── Route B ── */}
        <div>
          <div className="mb-5">
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#1D2D44]">Route B: Bangkok + Chiang Mai</h2>
            <p className="text-[#1D2D44]/50 text-sm mt-0.5">9 days / 8 nights · Bangkok riverside hotel + Our 5-Star Chiang Mai Resort · price varies by season</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {routeB.map((row) => <MonthCard key={row.month} {...row} />)}
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

      </div>
    </main>
  );
}
