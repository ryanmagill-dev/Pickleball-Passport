'use client';

import Link from 'next/link';
import { Sparkles, Calendar, ArrowRight, Plane, Heart } from 'lucide-react';
import { ComingSoonCard } from '@/components/trips/coming-soon-card';
import { useReserveHref } from '@/lib/hooks/use-reserve-href';

/* ─────────────────────── PRODUCTS ─────────────────────── */

const trips = [
  {
    label: 'January',
    dates: 'Jan 14–22, 2027',
    destination: 'Bangkok + Chiang Mai',
    price: '$5,500',
    seatsRemaining: 6,
    badge: 'FEWEST SEATS LEFT',
    href: '/trips/bangkok-chiang-mai/january-14-2027',
    dark: true,
  },
  {
    label: 'November',
    dates: 'Nov 1–9, 2026',
    destination: 'Bangkok + Hua Hin',
    price: '$5,500',
    seatsRemaining: null,
    badge: null,
    href: '/trips/bangkok-hua-hin',
    dark: false,
  },
  {
    label: 'December',
    dates: 'Dec 10–18, 2026',
    destination: 'Bangkok + Hua Hin',
    price: '$5,500',
    seatsRemaining: null,
    badge: null,
    href: '/trips/bangkok-hua-hin',
    dark: false,
  },
];

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

/* ─────────────────────── JOURNEY STEPS ─────────────────────── */

const journeySteps = [
  {
    number: 1,
    title: 'Choose Your Route',
    description: 'Pick Bangkok + Hua Hin (year-round) or Bangkok + Chiang Mai (May–January). Same format, different destinations.',
    icon: Sparkles,
    gradient: 'from-[#1D2D44] to-[#7587A5]',
  },
  {
    number: 2,
    title: 'Reserve & Plan',
    description: 'Reserve your spot and our team will reach out to answer questions and help you prepare for the trip.',
    icon: Calendar,
    gradient: 'from-[#B08D55] to-[#CFB78D]',
  },
  {
    number: 3,
    title: 'Travel & Play',
    description: 'Arrive in Thailand where our on-the-ground team handles everything. Five-star hotels, daily pickleball, and cultural immersion.',
    icon: Plane,
    gradient: 'from-[#2D5A3D] to-[#3D7A52]',
  },
  {
    number: 4,
    title: 'Come Back for More',
    description: 'Head home with improved skills, new friendships, and the inside track on our next departure. Come once. Come back for the rest.',
    icon: Heart,
    gradient: 'from-[#E07A5F] to-[#F09B8A]',
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
          poster="/images/bangkok-skyline.jpg"
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

      {/* ── Trips ── */}
      <section className="py-14 sm:py-20 bg-[#FDF8F3]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#1D2D44] mb-1">
              Upcoming Trips
            </h2>
            <p className="text-[#1D2D44]/50 text-sm">
              9 days, 8 nights. Coached pickleball, five-star accommodation, a group worth traveling with.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {trips.map((t) => (
              <Link
                key={t.label}
                href={t.href}
                className={`rounded-2xl border p-5 flex flex-col hover:shadow-md transition-all group ${
                  t.dark
                    ? 'bg-[#0F1A2A] border-[#B08D55]/40 hover:border-[#B08D55]/70'
                    : 'bg-white border-[#B08D55]/10 hover:border-[#B08D55]/30'
                }`}
              >
                {t.badge && (
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#B08D55] text-white text-xs font-bold mb-3 self-start">
                    {t.badge}
                  </span>
                )}
                <p className={`text-xs font-bold tracking-widest uppercase mb-1 text-[#B08D55]`}>
                  {t.dates}
                </p>
                <p className={`font-serif font-bold text-lg mb-1 ${t.dark ? 'text-white' : 'text-[#1D2D44]'}`}>
                  {t.label}
                </p>
                <p className={`text-sm mb-4 flex-1 ${t.dark ? 'text-white/50' : 'text-[#1D2D44]/50'}`}>
                  {t.destination}
                </p>
                {t.seatsRemaining !== null && (
                  <p className={`text-xs font-semibold mb-3 ${t.dark ? 'text-[#B08D55]' : 'text-[#B08D55]'}`}>
                    {t.seatsRemaining} of 16 seats open
                  </p>
                )}
                <div className="flex items-center justify-between mt-auto">
                  <span className={`font-bold text-xl ${t.dark ? 'text-white' : 'text-[#1D2D44]'}`}>
                    {t.price}
                  </span>
                  <span className={`text-xs font-semibold flex items-center gap-1 group-hover:gap-2 transition-all ${t.dark ? 'text-[#B08D55]' : 'text-[#B08D55]'}`}>
                    Apply <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {/* What's next */}
          <div className="mt-8 bg-white rounded-2xl border border-[#B08D55]/10 p-6 max-w-3xl">
            <p className="text-[#1D2D44]/60 text-sm leading-relaxed">
              Route A and Route B run on a rolling schedule through 2027. Bangkok with Hua Hin year-round, or Bangkok with Chiang Mai or Phuket depending on the season. New dates are announced as they confirm.
            </p>
            <Link
              href="/notify"
              className="inline-flex items-center gap-1.5 mt-3 text-sm font-semibold text-[#B08D55] hover:text-[#8D7144] transition-colors"
            >
              Get notified <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Day Clinics ── */}
      <section className="py-10 sm:py-14 bg-white border-t border-[#B08D55]/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#0F1A2A] rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-5">
            <div>
              <p className="text-xs font-bold tracking-[0.18em] uppercase text-[#B08D55] mb-2">Not ready for the full trip?</p>
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-white mb-1">Clinic Week Bangkok, with Coach Travis Rhea</h2>
              <p className="text-white/50 text-sm">Just the pickleball. Mind Your Pickle mindset coaching, on court in Bangkok.</p>
            </div>
            <Link
              href="/clinics"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#B08D55] to-[#CFB78D] text-[#0F1A2A] font-bold text-sm shrink-0 whitespace-nowrap"
            >
              See Clinic Week <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Your Journey in 4 Steps ── */}
      <section className="py-12 sm:py-20 bg-white border-t border-[#B08D55]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1D2D44] mb-4">
              Your Journey in 4 Simple Steps
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#B08D55] to-[#CFB78D] mx-auto mb-6 rounded-full" />
            <p className="text-lg text-[#1D2D44]/70 max-w-3xl mx-auto">
              From initial consultation to your return home, we handle every detail so you can focus on playing and relaxing.
            </p>
          </div>

          <div className="relative">
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-[#1D2D44] via-[#B08D55] to-[#2D5A3D] -translate-y-1/2 z-0" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {journeySteps.map((step) => (
                <div key={step.number} className="relative z-10 group">
                  <div className="bg-white rounded-2xl shadow-xl shadow-[#1D2D44]/10 p-8 text-center transition-all duration-300 group-hover:shadow-2xl group-hover:-translate-y-2 border border-[#B08D55]/10 h-full">
                    <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${step.gradient} flex items-center justify-center shadow-lg`}>
                      <span className="text-2xl font-bold text-white">{step.number}</span>
                    </div>
                    <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-[#F5E6D3] flex items-center justify-center">
                      <step.icon className="h-7 w-7 text-[#1D2D44]" />
                    </div>
                    <h3 className="text-xl font-serif font-bold text-[#1D2D44] mb-3">{step.title}</h3>
                    <p className="text-[#1D2D44]/70 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
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
