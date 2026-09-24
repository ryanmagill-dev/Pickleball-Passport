'use client';

import Link from 'next/link';
import { ArrowRight, Calendar, MapPin, Users } from 'lucide-react';
import { TripDetailLayout } from '@/components/trips/trip-detail-layout';
import { TripSectionContentHuaHinFeb } from '@/components/trips/trip-section-content-hua-hin-feb';

/* ─────────────────────── COMPONENT ─────────────────────── */

export function February18Page() {
  return (
    <main className="min-h-screen bg-[#FDF8F3]">

      {/* ── Hero ── */}
      <section className="relative overflow-hidden text-white py-16 sm:py-20">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="/images/posters/hua-hin-cave-poster.jpg"
          className="absolute inset-0 w-full h-full object-cover object-center"
        >
          <source src="/hua-hin-cave.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-[#0F1A2A]/90" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#B08D55] mb-4">
              Feb 18–26, 2027 · Bangkok + Hua Hin · Clear of Chinese New Year
            </p>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
              Bangkok + Hua Hin
            </h1>

            <p className="text-white/70 text-base leading-relaxed mb-8 max-w-2xl">
              Four nights of Bangkok culture and river life, then four nights on the Gulf coast
              in Hua Hin, peak dry season. Coached pickleball in both cities. You fly home from
              Bangkok on departure day.
            </p>

            <div className="flex flex-wrap gap-3 mb-10">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm">
                <Calendar className="h-4 w-4 text-[#B08D55]" />
                Feb 18 – Feb 26, 2027
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm">
                <MapPin className="h-4 w-4 text-[#B08D55]" />
                2 Cities, 2 Five-Star Hotels
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm">
                <Users className="h-4 w-4 text-[#B08D55]" />
                16 spots open
              </div>
            </div>

            <div className="mb-8">
              <span className="text-4xl font-bold text-white">$5,500</span>
              <span className="text-white/50 text-lg ml-2">USD / person</span>
              <p className="text-white/40 text-xs mt-1">Double occupancy · Private room $900</p>
              <p className="text-white/40 text-xs mt-1">Travelling solo? We&apos;ll pair you with another solo traveller in the group at no extra cost. Plenty of people do.</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/apply"
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

      {/* ── Standard Route A Details ── */}
      <TripDetailLayout
        tripName="Bangkok + Hua Hin (Feb 18–26)"
        cities="Our 5-Star Bangkok riverside hotel · Our 5-Star Hua Hin Beachfront Resort"
        dates="Feb 18 – Feb 26, 2027"
        price={5500}
        hidePaymentPlan={true}
        fullLink="https://link.fastpaydirect.com/payment-link/6aa938089f7ff2c808a75ad4"
        spotsLeft={16}
        totalSpots={16}
        ContentComponent={TripSectionContentHuaHinFeb}
      />

      {/* Cross-link */}
      <section className="py-12 bg-[#0F1A2A]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-white/70 text-base mb-3">Not travelling in February? View the full departure calendar.</p>
          <Link
            href="/trips/calendar"
            className="inline-flex items-center gap-2 text-[#B08D55] hover:text-[#CFB78D] font-semibold transition-colors"
          >
            All departures
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
