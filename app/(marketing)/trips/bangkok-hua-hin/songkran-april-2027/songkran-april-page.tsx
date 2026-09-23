'use client';

import Link from 'next/link';
import { ArrowRight, Calendar, MapPin, Users, Droplets } from 'lucide-react';
import { TripDetailLayout } from '@/components/trips/trip-detail-layout';
import { TripSectionContentSongkran } from '@/components/trips/trip-section-content-songkran';

/* ─────────────────────── COMPONENT ─────────────────────── */
/* TODO: replace navy hero background with real Bangkok river / Songkran
   street-scene drone or photo footage once sourced. */

export function SongkranAprilPage() {
  return (
    <main className="min-h-screen bg-[#FDF8F3]">

      {/* ── Hero ── */}
      <section className="relative overflow-hidden text-white py-16 sm:py-20">
        <div className="absolute inset-0 bg-[#0F1A2A]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#B08D55] mb-4">
              Apr 8–16, 2027 · Songkran Edition
            </p>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
              Songkran in Bangkok
            </h1>

            <p className="text-xl text-[#B08D55] italic mb-4">
              Nine days built around Thailand&apos;s New Year.
            </p>

            <p className="text-white/70 text-base leading-relaxed mb-4 max-w-2xl">
              Three days of coached pickleball on the coast in Hua Hin, then back into Bangkok
              for the biggest water festival on earth.
            </p>

            <p className="text-white/70 text-base leading-relaxed mb-4 max-w-2xl">
              Songkran is three days when the whole country stops. People go home to their
              families, pour water over their elders&apos; hands for luck, and then the streets
              turn into one enormous, good-natured water fight.
            </p>

            <p className="text-white/70 text-base leading-relaxed mb-8 max-w-2xl">
              You&apos;ll get wet. That&apos;s the point. If you&apos;d rather stay dry, the hotel is a calm
              base and we&apos;ll have dry options every day.
            </p>

            <div className="flex flex-wrap gap-3 mb-10">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm">
                <Calendar className="h-4 w-4 text-[#B08D55]" />
                Apr 8 – Apr 16, 2027
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm">
                <MapPin className="h-4 w-4 text-[#B08D55]" />
                Bangkok + Hua Hin
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm">
                <Users className="h-4 w-4 text-[#B08D55]" />
                16 spots open
              </div>
              <div className="flex items-center gap-2 bg-[#B08D55]/20 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-semibold">
                <Droplets className="h-4 w-4 text-[#B08D55]" />
                Songkran
              </div>
            </div>

            <div className="mb-8">
              <span className="text-4xl font-bold text-white">$5,500</span>
              <span className="text-white/50 text-lg ml-2">USD / person</span>
              <p className="text-white/40 text-xs mt-1">Double occupancy · Private room $950</p>
              <p className="text-white/40 text-xs mt-1">Travelling solo? We&apos;ll pair you with another solo traveller in the group at no extra cost. Plenty of people do.</p>
              <p className="text-[#B08D55] text-xs mt-2 font-medium">Festival-week hotel rate is being confirmed. Price may adjust if festival pricing pushes cost up materially.</p>
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

      {/* ── Songkran Edition Details ── */}
      <TripDetailLayout
        tripName="Songkran in Bangkok (Apr 8–16)"
        cities="Our 5-Star Bangkok riverside hotel · Our 5-Star Hua Hin Beachfront Resort"
        dates="Apr 8 – Apr 16, 2027"
        price={5500}
        hidePaymentPlan={true}
        fullLink="https://link.fastpaydirect.com/payment-link/6aa938089f7ff2c808a75ad4"
        spotsLeft={16}
        totalSpots={16}
        ContentComponent={TripSectionContentSongkran}
      />

      {/* Cross-link */}
      <section className="py-12 bg-[#0F1A2A]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-white/70 text-base mb-3">Prefer a quieter week? View the full departure calendar.</p>
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
