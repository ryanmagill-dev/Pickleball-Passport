'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { CalendarJanRow } from '@/components/marketing/january/calendar-jan-row';

function FebruaryRow() {
  return (
    <div>
      <div className="mb-5">
        <h2 className="font-serif text-xl font-bold text-[#1D2D44] sm:text-2xl">February</h2>
        <p className="mt-0.5 text-sm text-[#1D2D44]/50">Nine days in Bangkok and Hua Hin. A 25% deposit holds your place.</p>
      </div>
      <Link
        href="/trips/bangkok-hua-hin/february-18-2027"
        className="flex flex-col gap-3 rounded-xl border border-[#B08D55]/40 bg-white p-4 transition-colors hover:border-[#B08D55] sm:flex-row sm:items-center sm:justify-between"
      >
        <p className="font-serif text-base font-bold text-[#1D2D44]">Feb 18 to 26, 2027: Bangkok + Hua Hin</p>
        <div className="flex items-center gap-4">
          <span className="text-sm font-bold text-[#1D2D44]">
            $7,000<span className="ml-1 text-xs font-normal text-[#1D2D44]/40">/person</span>
          </span>
          <span className="inline-flex items-center gap-1 whitespace-nowrap text-xs font-semibold text-[#B08D55]">
            See the February Trip <ArrowRight className="h-3 w-3" />
          </span>
        </div>
      </Link>
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
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-white mb-3">2027 Departure Calendar</h1>
          <p className="text-white/70 text-base max-w-2xl">
            Two trips are open: January 14 to 22 and February 18 to 26.
          </p>
          <Link
            href="/trips"
            className="inline-flex items-center gap-2 mt-4 text-sm font-semibold text-[#B08D55] hover:text-[#CFB78D] transition-colors"
          >
            See the trip pages <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-14">

        <CalendarJanRow />
        <FebruaryRow />

      </div>
    </main>
  );
}
