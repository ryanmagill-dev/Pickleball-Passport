'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { ComingSoonCard } from '@/components/trips/coming-soon-card';
import { useReserveHref } from '@/lib/hooks/use-reserve-href';

/* ─────────────────────── COMING SOON ─────────────────────── */

const comingSoonDestinations = [
  {
    destination: 'BALI',
    imageUrl: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=80',
  },
  {
    destination: 'VIETNAM',
    imageUrl: 'https://images.unsplash.com/photo-1528127269322-539801943592?w=800&q=80',
  },
  {
    destination: 'JAPAN',
    imageUrl: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800&q=80',
  },
  {
    destination: 'DUBAI',
    imageUrl: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80',
  },
  {
    destination: 'MALAYSIA',
    imageUrl: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=800&q=80',
  },
  {
    destination: 'PHILIPPINES',
    imageUrl: 'https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?w=800&q=80',
  },
];

/* ─────────────────────── PAGE ─────────────────────── */

export function TripsListingPage() {
  const reserveHref = useReserveHref();

  return (
    <main className="min-h-screen bg-[#FDF8F3]">

      {/* ── Featured Trip Hero ── */}
      <section className="relative min-h-[88vh] flex items-end overflow-hidden">
        {/* Background drone footage */}
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="/images/posters/tpp-aerial-0453-poster.jpg"
          className="absolute inset-0 w-full h-full object-cover object-center"
        >
          <source src="/tpp-aerial-0453.mp4" type="video/mp4" />
        </video>
        {/* Overlay gradient  ·  dark at bottom for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/10" />
        <a
          href="https://www.instagram.com/micahphotography1"
          target="_blank"
          rel="noopener noreferrer"
          className="absolute bottom-4 right-4 z-10 text-white/40 hover:text-white/70 transition-colors text-xs tracking-wide"
        >
          Aerial footage: @micahphotography1
        </a>

        {/* Content */}
        <div className="relative z-10 w-full pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif font-bold text-white mb-3 leading-tight">
              Play the World
            </h1>

            <p className="text-xl sm:text-2xl text-white/75 max-w-2xl">
              Pickleball trips to Thailand, from a single drop-in clinic to a full nine-day experience.
            </p>
          </div>
        </div>

        {/* Bottom wave */}
        <div className="absolute bottom-0 left-0 right-0 z-10">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 60L60 55C120 50 240 40 360 35C480 30 600 30 720 32C840 34 960 40 1080 43C1200 46 1320 46 1380 46L1440 46V60H0Z" fill="#FDF8F3" />
          </svg>
        </div>
      </section>

      {/* ── January Trip ── */}
      <section className="py-14 sm:py-20 bg-[#FDF8F3]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#1D2D44] mb-1">
              The January Trip
            </h2>
            <p className="text-[#1D2D44]/50 text-sm">
              9 days, 8 nights. Coached pickleball, five-star accommodation, a group worth traveling with.
            </p>
          </div>

          <Link
            href="/trips/bangkok-chiang-mai/january-14-2027"
            className="group relative block rounded-3xl overflow-hidden min-h-[420px] sm:min-h-[500px] shadow-xl shadow-[#1D2D44]/10"
          >
            <video
              autoPlay
              muted
              loop
              playsInline
              poster="/images/posters/tpp-aerial-0453b-poster.jpg"
              className="absolute inset-0 w-full h-full object-cover object-center"
            >
              <source src="/tpp-aerial-0453b.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/10 transition-all group-hover:from-black/90" />

            <div className="relative z-10 h-full flex flex-col justify-end p-8 sm:p-12">
              <span className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-[#B08D55] text-[#0F1A2A] text-xs font-bold mb-4 self-start">
                6 of 16 seats open
              </span>
              <p className="text-xs sm:text-sm font-bold tracking-widest uppercase text-[#B08D55] mb-2">
                Jan 14–22, 2027 · Bangkok + Chiang Mai
              </p>
              <h3 className="font-serif text-4xl sm:text-6xl font-bold text-white mb-6">
                January
              </h3>
              <div className="flex items-center justify-between gap-4 flex-wrap">
                <span className="font-bold text-2xl sm:text-3xl text-white">$5,500</span>
                <span className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white text-[#1D2D44] font-bold text-sm group-hover:gap-3 transition-all">
                  Apply for The Pickleball Passport <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </div>
          </Link>

          {/* What's next */}
          <div className="mt-8 bg-white rounded-2xl border border-[#B08D55]/10 p-6 max-w-3xl">
            <p className="text-[#1D2D44]/60 text-sm leading-relaxed">
              February, March, and a Songkran edition in April are now open. Dates for the rest of 2027 are provisional, one departure a month.
            </p>
            <Link
              href="/trips/calendar"
              className="inline-flex items-center gap-1.5 mt-3 text-sm font-semibold text-[#B08D55] hover:text-[#8D7144] transition-colors"
            >
              See the full departure calendar <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Clinic Week cross-promote ── */}
      <section className="py-10 sm:py-14 bg-white border-t border-[#B08D55]/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden bg-[#0F1A2A] rounded-2xl">
            <div className="relative z-10 p-6 sm:p-10 flex flex-col sm:flex-row sm:items-center gap-8">
              <div className="relative w-24 h-24 sm:w-32 sm:h-32 rounded-2xl overflow-hidden flex-shrink-0 mx-auto sm:mx-0">
                <Image
                  src="/travis-rhea.jpg"
                  alt="Coach Travis Rhea"
                  fill
                  className="object-cover object-top"
                  sizes="128px"
                />
              </div>
              <div className="min-w-0">
                <p className="text-xs font-bold tracking-[0.18em] uppercase text-[#B08D55] mb-2">Also this November</p>
                <h2 className="font-serif text-xl sm:text-2xl font-bold text-white mb-2">Clinic Week with Coach Travis Rhea</h2>
                <p className="text-white/60 text-sm leading-relaxed max-w-2xl mb-4">
                  Four sessions of mindset work and coached play in Bangkok, November 2 to 5, 11am to 2pm. Sixteen players, four courts. You sort your own hotel, we run the pickleball. Two-day passes in Bangkok or Hua Hin if you can&apos;t do the whole week.
                </p>
                <div className="flex flex-wrap items-center gap-2 mb-5">
                  {['Nov 2', 'Nov 3', 'Nov 4', 'Nov 5', 'Hua Hin Nov 7–8'].map((d) => (
                    <span key={d} className="px-3 py-1 rounded-full bg-white/10 text-white/70 text-xs font-medium">
                      {d}
                    </span>
                  ))}
                  <span className="px-3 py-1 rounded-full bg-[#B08D55]/20 text-[#B08D55] text-xs font-bold">
                    Spots open now
                  </span>
                </div>
                <Link
                  href="/clinics"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#B08D55] to-[#CFB78D] text-[#0F1A2A] font-bold text-sm whitespace-nowrap"
                >
                  See Clinic Week <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Coming Soon Destinations ── */}
      <section className="py-12 sm:py-20 bg-[#FDF8F3] border-t border-[#B08D55]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1D2D44] mb-3">
              Coming Soon
            </h2>
            <p className="text-[#1D2D44]/60 text-base max-w-2xl mx-auto">
              New destinations launching based on demand. Sign up to be notified when booking opens.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {comingSoonDestinations.map((dest) => (
              <ComingSoonCard
                key={dest.destination}
                destination={dest.destination}
                imageUrl={dest.imageUrl}
                onNotifyClick={() => { window.location.href = '/notify'; }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── Bottom CTA ── */}
      <section className="py-12 sm:py-16 bg-white border-t border-[#B08D55]/10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#1D2D44]/60 text-sm leading-relaxed">
            New destinations are added based on demand. Want to see a specific destination? Email us at{' '}
            <a href="mailto:hello@thepickleballpassport.org" className="text-[#B08D55] hover:underline font-medium">
              hello@thepickleballpassport.org
            </a>{' '}
            and let us know where you want to play next.
          </p>
        </div>
      </section>

    </main>
  );
}
