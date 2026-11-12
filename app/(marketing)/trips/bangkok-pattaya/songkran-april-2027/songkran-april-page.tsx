'use client';

import Link from 'next/link';
import { ArrowRight, Calendar, MapPin, Droplets } from 'lucide-react';
import { TripDetailLayout } from '@/components/trips/trip-detail-layout';
import { TripSectionContentSongkran } from '@/components/trips/trip-section-content-songkran';
import { DatesInterestCta } from '@/components/marketing/dates-interest-cta';
import { JAN_URL } from '@/components/marketing/january/jan-trip';

/* ─────────────────────── COMPONENT ─────────────────────── */

export function SongkranAprilPage() {
  return (
    <main className="min-h-screen bg-[#FDF8F3]">

      {/* ── Hero ── */}
      <section className="relative overflow-hidden text-white py-16 sm:py-20">
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#B08D55] mb-4">
              Apr 12 to 20, 2027 · Songkran + Wan Lai
            </p>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
              Songkran + Wan Lai
            </h1>

            <p className="text-xl text-[#B08D55] italic mb-4">
              Nine days built around Thailand&apos;s biggest water festival, Bangkok to the coast.
            </p>

            <p className="text-white/70 text-base leading-relaxed mb-4 max-w-2xl">
              Four days of official Songkran in Bangkok: Khao San Road&apos;s water gun battles,
              foam parties and water slides on Silom Road and Siam Square, Buddha-bathing and
              merit-making at the temples for the traditional side. Then we follow the festival
              down the coast to Pattaya, where it runs longer, building to Wan Lai on April 19.
            </p>

            <p className="text-white/70 text-base leading-relaxed mb-4 max-w-2xl">
              Songkran is the days when the whole country stops. People go home to their
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
                Apr 12 to Apr 20, 2027
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm">
                <MapPin className="h-4 w-4 text-[#B08D55]" />
                Bangkok + Pattaya
              </div>
              <div className="flex items-center gap-2 bg-[#B08D55]/20 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-semibold">
                <Droplets className="h-4 w-4 text-[#B08D55]" />
                Wan Lai Apr 19
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

      {/* ── Songkran + Wan Lai Edition Details ── */}
      <TripDetailLayout
        tripName="Songkran + Wan Lai (Apr 12 to 20)"
        cities="Our 5-Star Bangkok riverside hotel · Beachfront resort, Pattaya"
        dates="Apr 12 to Apr 20, 2027"
        interestOnly
        ContentComponent={TripSectionContentSongkran}
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
