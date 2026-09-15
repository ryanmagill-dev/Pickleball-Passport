'use client';

import Image from 'next/image';
import Link from 'next/link';
import { MapPin, Calendar, Trophy, ArrowRight, Sun } from 'lucide-react';
import { TripDetailLayout } from '@/components/trips/trip-detail-layout';
import { TripSectionContentHuaHin } from '@/components/trips/trip-section-content-hua-hin';

/* ─────────────────────── DEPARTURE DATA ─────────────────────── */

const departures = [
  { month: 'November 1–9, 2026', price: 5500, href: '/reserve', confirmed: true },
  { month: 'December 10–18, 2026', price: 5500, href: '/reserve', confirmed: true },
];

export function BangkokHuaHinPage() {
  return (
    <main className="min-h-screen bg-[#FDF8F3]">
      {/* Trip Header */}
      <section className="relative overflow-hidden text-white py-16 sm:py-20">
        {/* Background photo */}
        <Image
          src="/images/anantara-hua-hin-aerial.jpg"
          alt="Our 5-Star Bangkok riverside hotel pool"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            {/* Tag pills */}
            <div className="flex flex-wrap gap-2 mb-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm font-medium">
                <Sun className="w-4 h-4 text-[#B08D55]" />
                Available Year-Round
              </div>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold mb-4">
              Bangkok + Hua Hin
            </h1>

            {/* Subline */}
            <p className="text-xl sm:text-2xl text-white/80 mb-2">
              9 Days / 8 Nights
            </p>
            <p className="text-lg text-white/60 mb-6">
              Our 5-Star Bangkok riverside hotel &middot; Our 5-Star Hua Hin Beachfront Resort &middot; Our 5-Star Bangkok riverside hotel
            </p>

            {/* Trip summary badges */}
            <div className="flex flex-wrap gap-3 sm:gap-4">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm">
                <Calendar className="h-4 w-4 text-[#B08D55]" />
                Departures Jun–Jan
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm">
                <MapPin className="h-4 w-4 text-[#B08D55]" />
                2 Cities, 2 Five-Star Hotels
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm">
                <Trophy className="h-4 w-4 text-[#B08D55]" />
                4 Pickleball Sessions
              </div>
            </div>
          </div>
        </div>

        {/* Bottom wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 1440 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full"
          >
            <path
              d="M0 80L60 73.3C120 66.7 240 53.3 360 46.7C480 40 600 40 720 43.3C840 46.7 960 53.3 1080 56.7C1200 60 1320 60 1380 60L1440 60V80H1380C1320 80 1200 80 1080 80C960 80 840 80 720 80C600 80 480 80 360 80C240 80 120 80 60 80H0Z"
              fill="#FDF8F3"
            />
          </svg>
        </div>
      </section>

      {/* Upcoming Departures */}
      <section className="py-12 sm:py-16 bg-white border-t border-[#B08D55]/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#1D2D44] mb-1">
              2026 Departures
            </h2>
            <p className="text-sm text-[#1D2D44]/50">
              $5,500/person, double occupancy. Available year-round  ·  including February through April when Chiang Mai trips are paused for smoke season.
            </p>
            <p className="text-sm text-[#1D2D44]/50 mt-2">
              Travelling solo? A private room is $900. Or tell us and we&apos;ll pair you with another solo traveller in the group at no extra cost. Plenty of people do.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {departures.map((dep) => (
              <div
                key={dep.month}
                className="rounded-2xl border p-5 flex flex-col gap-3 bg-[#FDF8F3] border-[#B08D55]/10"
              >
                <div>
                  <div className="text-base font-serif font-bold text-[#1D2D44]">
                    {dep.month}
                  </div>
                  {!dep.confirmed && (
                    <div className="text-xs mt-0.5 text-[#1D2D44]/35">
                      Dates set once your spot is reserved
                    </div>
                  )}
                </div>
                <div className="text-sm font-bold mt-auto text-[#1D2D44]">
                  ${dep.price.toLocaleString()}<span className="font-normal text-xs ml-1 text-[#1D2D44]/40">/person</span>
                </div>
                {dep.href ? (
                  <Link
                    href={dep.href}
                    className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg bg-gradient-to-r from-[#B08D55] to-[#CFB78D] text-[#0F1A2A] text-xs font-bold transition-all hover:shadow-md"
                  >
                    View this departure
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                ) : (
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg border border-[#B08D55]/30 text-[#B08D55] text-xs font-semibold hover:bg-[#B08D55]/5 transition-colors"
                  >
                    I&apos;m interested
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main content with sidebar navigation */}
      <TripDetailLayout
        tripName="Bangkok + Hua Hin"
        cities="Our 5-Star Bangkok riverside hotel · Our 5-Star Hua Hin Beachfront Resort"
        dates="Nov 1–9 or Dec 10–18, 2026"
        price={5500}
        hidePaymentPlan={true}
        fullLink="https://link.fastpaydirect.com/payment-link/6aa938089f7ff2c808a75ad4"
        spotsLeft={16}
        totalSpots={16}
        ContentComponent={TripSectionContentHuaHin}
      />

      {/* Cross-link to Chiang Mai route */}
      <section className="py-12 bg-[#0F1A2A]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-white/70 text-base mb-3">Prefer a mountain city over the coast? Explore our Chiang Mai route  ·  same format, ancient temples and elephants instead of beaches.</p>
          <Link
            href="/trips/bangkok-chiang-mai"
            className="inline-flex items-center gap-2 text-[#B08D55] hover:text-[#CFB78D] font-semibold transition-colors"
          >
            Explore the Bangkok + Chiang Mai Route
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
