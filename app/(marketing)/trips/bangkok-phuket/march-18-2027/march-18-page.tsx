'use client';

import Link from 'next/link';
import { BackgroundVideo } from '@/components/marketing/background-video';
import { ArrowRight, Calendar, MapPin } from 'lucide-react';
import { TripDetailLayout } from '@/components/trips/trip-detail-layout';
import { TripSectionContentPhuket } from '@/components/trips/trip-section-content-phuket';
import { DatesInterestCta } from '@/components/marketing/dates-interest-cta';
import { JAN_URL } from '@/components/marketing/january/jan-trip';

/* ─────────────────────── COMPONENT ─────────────────────── */

export function March18Page() {
  return (
    <main className="min-h-screen bg-[#FDF8F3]">

      {/* ── Hero ── */}
      <section className="relative overflow-hidden text-white py-16 sm:py-20">
        <BackgroundVideo
          src="/hero-drone.mp4"
          poster="/images/posters/hero-drone-poster.jpg"
          playControlClassName="top-6 left-4"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-[#0F1A2A]/90" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#B08D55] mb-4">
              Mar 18 to 26, 2027 · Bangkok + Phuket · Peak Dry Season
            </p>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
              Bangkok + Phuket
            </h1>

            <p className="text-white/70 text-base leading-relaxed mb-8 max-w-2xl">
              Four nights of Bangkok culture and river life, then four nights on Bang Tao Beach,
              peak dry season on the Andaman coast. Coached pickleball in both cities, a full-day
              private speedboat through Phang Nga Bay, and a walk through Old Phuket Town. You fly
              home from Phuket, no return to Bangkok.
            </p>

            <div className="flex flex-wrap gap-3 mb-10">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm">
                <Calendar className="h-4 w-4 text-[#B08D55]" />
                Mar 18 to Mar 26, 2027
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm">
                <MapPin className="h-4 w-4 text-[#B08D55]" />
                2 Cities, Bangkok to the Andaman Coast
              </div>
            </div>

            <DatesInterestCta tone="dark" />
          </div>
        </div>

        {/* Bottom wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 60L60 55C120 50 240 40 360 35C480 30 600 30 720 32C840 34 960 40 1080 43C1200 46 1320 46 1380 46L1440 46V60H0Z" fill="#FDF8F3" />
          </svg>
        </div>
      </section>

      {/* ── Route B Phuket Details ── */}
      <TripDetailLayout
        tripName="Bangkok + Phuket (Mar 18 to 26)"
        cities="Our 5-Star Bangkok riverside hotel · Beachfront resort, Bang Tao Beach"
        dates="Mar 18 to Mar 26, 2027"
        interestOnly
        ContentComponent={TripSectionContentPhuket}
      />

      {/* Cross-link */}
      <section className="py-12 bg-[#0F1A2A]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-white/70 text-base mb-4">Trips you can book now.</p>
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href={JAN_URL}
              className="inline-flex items-center gap-2 text-[#B08D55] hover:text-[#CFB78D] font-semibold transition-colors"
            >
              January 14 to 22
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/trips/bangkok-hua-hin/february-18-2027"
              className="inline-flex items-center gap-2 text-[#B08D55] hover:text-[#CFB78D] font-semibold transition-colors"
            >
              February 18 to 26
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
