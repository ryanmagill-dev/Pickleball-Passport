'use client';

import Link from 'next/link';
import { CheckCircle, ArrowRight, Calendar, MapPin, Users, TreePalm, ExternalLink } from 'lucide-react';
import { TripDetailLayout } from '@/components/trips/trip-detail-layout';
import { TripSectionContentChiangMai } from '@/components/trips/trip-section-content-chiang-mai';
import { useReserveHref } from '@/lib/hooks/use-reserve-href';

/* ─────────────────────── PHUKET DATA ─────────────────────── */

const phuketIncludes = [
  '3 nights beachfront with daily breakfast',
  'Domestic flight, Chiang Mai to Phuket',
  'Private transfers',
  'Full-day private speedboat charter through Phang Nga Bay, James Bond Island, kayaking and snorkelling',
  'Welcome and farewell dinners',
  'Optional pickleball nearby',
];

/* ─────────────────────── COMPONENT ─────────────────────── */

export function January14Page() {
  const reserveHref = useReserveHref();

  return (
    <main className="min-h-screen bg-[#FDF8F3]">

      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-[#0F1A2A] text-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            {/* Eyebrow */}
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#B08D55] mb-4">
              January 14–22, 2027 · Bangkok + Chiang Mai · High Season
            </p>

            {/* Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
              Bangkok + Chiang Mai
            </h1>

            <p className="text-xl text-[#B08D55] italic mb-4">
              The only departure with a Phuket Extension option.
            </p>

            <p className="text-white/70 text-base leading-relaxed mb-8 max-w-2xl">
              The January 14 departure follows the standard Route B format: 9 days across Bangkok and Chiang Mai, with one distinction. This is the only Chiang Mai departure where you can add a Phuket extension and fly home from the beach. Three nights at a beachfront resort on Bang Tao Beach.
            </p>

            {/* Badges */}
            <div className="flex flex-wrap gap-3 mb-10">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm">
                <Calendar className="h-4 w-4 text-[#B08D55]" />
                Jan 14 – Jan 22, 2027
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm">
                <MapPin className="h-4 w-4 text-[#B08D55]" />
                2 Cities + Optional Phuket
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm">
                <Users className="h-4 w-4 text-[#B08D55]" />
                6 of 16 spaces remaining
              </div>
              <div className="flex items-center gap-2 bg-[#B08D55]/20 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-semibold">
                <TreePalm className="h-4 w-4 text-[#B08D55]" />
                Phuket Extension Available
              </div>
            </div>

            {/* Price */}
            <div className="mb-8">
              <span className="text-4xl font-bold text-white">$5,500</span>
              <span className="text-white/50 text-lg ml-2">USD / person</span>
              <p className="text-white/40 text-xs mt-1">Double occupancy · Private room $1,750</p>
              <p className="text-white/40 text-xs mt-1">Travelling solo? We&apos;ll pair you with another solo traveller in the group at no extra cost. Plenty of people do.</p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href={reserveHref}
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-gradient-to-r from-[#B08D55] to-[#CFB78D] text-[#0F1A2A] font-bold text-sm shadow-lg shadow-[#B08D55]/30 hover:shadow-xl transition-all"
              >
                Apply for The Pickleball Passport
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 60L60 55C120 50 240 40 360 35C480 30 600 30 720 32C840 34 960 40 1080 43C1200 46 1320 46 1380 46L1440 46V60H0Z" fill="#FDF8F3" />
          </svg>
        </div>
      </section>

      {/* ── Phuket Extension ── */}
      <section className="py-14 sm:py-20 bg-[#FDF8F3]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <p className="text-xs font-bold tracking-[0.18em] uppercase text-[#B08D55] mb-2">Add-On · January 14 Departure Only</p>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#1D2D44] mb-2">
              Phuket Extension
            </h2>
            <p className="text-[#1D2D44]/60 text-sm max-w-2xl leading-relaxed">
              After your 9 days in Bangkok and Chiang Mai, extend into Phuket instead of flying home. Available only on this departure. Trip ends in Phuket  ·  fly home from HKT, departing January 25.
            </p>
          </div>

          {/* Price */}
          <div className="bg-white rounded-2xl border border-[#B08D55]/10 shadow-sm p-6 mb-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <p className="font-serif font-bold text-[#1D2D44] text-lg mb-1">3 nights, Bang Tao Beach</p>
              <p className="text-[#1D2D44]/50 text-sm">Beachfront resort. Private room $450.</p>
            </div>
            <div className="text-2xl font-bold text-[#1D2D44] shrink-0">
              $1,488<span className="text-sm font-normal text-[#1D2D44]/40 ml-1">/person</span>
            </div>
          </div>

          {/* What's included */}
          <div className="bg-white rounded-2xl border border-[#B08D55]/10 shadow-sm p-6">
            <h4 className="text-sm font-semibold text-[#1D2D44] mb-4 uppercase tracking-wide">Extension Includes</h4>
            <div className="grid sm:grid-cols-2 gap-y-2.5 gap-x-8">
              {phuketIncludes.map((item) => (
                <div key={item} className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-[#1D2D44]/70 leading-snug">{item}</span>
                </div>
              ))}
            </div>
            <div className="mt-5 pt-4 border-t border-[#B08D55]/10">
              <p className="text-xs text-[#1D2D44]/40 leading-relaxed">
                Extension guests fly home from Phuket, not Chiang Mai. Book your return flight from HKT, departing January 25. Return flight home not included.
              </p>
            </div>
          </div>

          <div className="mt-5">
            <Link
              href={reserveHref}
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#B08D55] hover:text-[#8D7144] transition-colors"
            >
              Talk to our team about the Phuket Extension
              <ExternalLink className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      <div className="border-t border-[#B08D55]/10" />

      {/* ── Standard Route B Details ── */}
      <TripDetailLayout
        tripName="Bangkok + Chiang Mai (Jan 14–22)"
        cities="Our 5-Star Bangkok riverside hotel · Our 5-Star Chiang Mai Riverside Resort"
        dates="Jan 14 – Jan 22, 2027"
        price={5500}
        spotsLeft={6}
        totalSpots={16}
        ContentComponent={TripSectionContentChiangMai}
      />

      {/* Cross-link */}
      <section className="py-12 bg-[#0F1A2A]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-white/70 text-base mb-3">Not travelling in January? View all Bangkok + Chiang Mai departures.</p>
          <Link
            href="/trips/bangkok-chiang-mai"
            className="inline-flex items-center gap-2 text-[#B08D55] hover:text-[#CFB78D] font-semibold transition-colors"
          >
            All Chiang Mai departures
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
