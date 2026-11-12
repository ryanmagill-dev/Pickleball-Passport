'use client';

import Image from 'next/image';
import Link from 'next/link';
import { MapPin, Clock, ArrowRight, Users, Globe, Package, Award } from 'lucide-react';
import { ClinicsJanCta } from '@/components/marketing/january/clinics-jan-cta';
import { JAN_PRICE, JAN_URL } from '@/components/marketing/january/jan-trip';

const FEB_URL = '/trips/bangkok-hua-hin/february-18-2027';

/* ─────────────────────── SCHEDULE ─────────────────────── */

const bangkokSchedule = [
  { day: 'Mon 2 Nov', time: '11am to 2pm', venue: 'Arise Pickleball / BEAT Discovery Udomsuk', label: 'Mind Your Pickle mindset seminar with Coach Travis Rhea.' },
  { day: 'Tue 3 Nov', time: '11am to 2pm', venue: 'Papaya Pickleball Club', label: 'Coached open play with Jaron and Ryan.' },
  { day: 'Wed 4 Nov', time: '11am to 2pm', venue: 'Arise Pickleball / BEAT Discovery Udomsuk', label: 'Mind Your Pickle mindset seminar with Coach Travis Rhea.' },
  { day: 'Thu 5 Nov', time: '11am to 2pm', venue: 'Pick A Court Sukhumvit 62', label: 'First hour is coached open play to wrap up the week: recap what we learned and make minor adjustments. The last two hours are a mini tournament on PKL.club, so you get your stats and test your skills.' },
];

/* ─────────────────────── PAGE ─────────────────────── */

export default function ClinicsPage() {
  return (
    <main className="min-h-screen bg-[#FDF8F3]">

      {/* ── Hero ── */}
      <section className="relative overflow-hidden text-white py-16 sm:py-20">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="/images/posters/tpp-aerial-0467-poster.jpg"
          className="absolute inset-0 w-full h-full object-cover object-center"
        >
          <source src="/tpp-aerial-0467.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/60 to-black/35" />
        <a
          href="https://www.instagram.com/micahphotography1"
          target="_blank"
          rel="noopener noreferrer"
          className="absolute bottom-4 right-4 z-10 text-white/40 hover:text-white/70 transition-colors text-xs tracking-wide"
        >
          Aerial footage: @micahphotography1
        </a>
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

            {/* Left — copy */}
            <div>
              <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#B08D55] mb-3">
                Past event. Bangkok
              </p>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
                Clinic Week has ended
              </h1>
              <p className="text-xl text-white mb-8 max-w-2xl">
                November 2 to 5, 2026 is over. The next trips are January 14 to 22, 2027 in Bangkok and Chiang Mai ({JAN_PRICE} per person, paid in full) and February 18 to 26, 2027 in Bangkok and Hua Hin ($7,000 per person).
              </p>

              <div className="flex flex-wrap gap-3 mb-10">
                <div className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 text-sm">
                  <Clock className="h-4 w-4 text-[#B08D55]" />
                  Nov 2 to 5, 2026
                </div>
                <div className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 text-sm">
                  <MapPin className="h-4 w-4 text-[#B08D55]" />
                  Arise Pickleball Courts, Udom Suk
                </div>
                <div className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 text-sm">
                  <MapPin className="h-4 w-4 text-[#B08D55]" />
                  Papaya Pickleball Club
                </div>
                <div className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 text-sm">
                  <MapPin className="h-4 w-4 text-[#B08D55]" />
                  Pick A Court
                </div>
              </div>

              <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3">
                <Link
                  href={JAN_URL}
                  className="inline-flex whitespace-nowrap items-center justify-center gap-2 px-7 py-4 rounded-xl bg-gradient-to-r from-[#B08D55] to-[#CFB78D] text-[#0F1A2A] font-bold text-sm shadow-lg shadow-[#B08D55]/30 hover:shadow-xl transition-all"
                >
                  See the January Trip
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href={FEB_URL}
                  className="inline-flex whitespace-nowrap items-center justify-center gap-2 px-7 py-4 rounded-xl border border-white/20 text-white font-semibold text-sm hover:bg-white/10 transition-all"
                >
                  See the February Trip
                </Link>
              </div>
            </div>

            {/* Right — Coach Travis Rhea */}
            <div className="relative hidden lg:block">
              <div className="relative h-[480px] rounded-2xl overflow-hidden">
                <Image
                  src="/travis-rhea.jpg"
                  alt="Coach Travis Rhea, Mind Your Pickle"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 0px, 500px"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F1A2A]/60 via-transparent to-transparent" />
              </div>
              <p className="mt-2 text-xs text-white/30 text-center">Coach Travis Rhea · Mind Your Pickle</p>
            </div>

          </div>
        </div>
      </section>

      {/* ── What this is ── */}
      <section className="py-12 sm:py-16 bg-white border-b border-[#B08D55]/10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4 text-[#1D2D44]/75 text-base leading-relaxed">
          <p>
            Clinic Week was four sessions in Bangkok, November 2 to 5, 2026. That week is over, and passes are no longer for sale.
          </p>
          <p>
            The schedule below is what we played. For a full trip, see January or February.
          </p>
        </div>
      </section>

      {/* ── Schedule ── */}
      <section className="relative overflow-hidden py-12 sm:py-16 border-b border-[#B08D55]/10">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="/images/posters/tpp-aerial-0450-poster.jpg"
          className="absolute inset-0 w-full h-full object-cover object-center"
        >
          <source src="/tpp-aerial-0450.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0F1A2A]/85 via-[#0F1A2A]/80 to-[#0F1A2A]/90" />
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white mb-1">
            Clinic Week Schedule
          </h2>
          <p className="text-white/50 text-sm mb-6">
            November 2 to 5, 2026. This week has ended. Bangkok, 11am to 2pm.
          </p>
          <div className="space-y-3">
            {bangkokSchedule.map((row) => (
              <div key={row.day} className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4 bg-white rounded-xl border border-[#B08D55]/10 p-4 shadow-lg">
                <span className="font-serif font-bold text-[#1D2D44] text-sm w-28 shrink-0">{row.day}</span>
                <span className="text-[#B08D55] text-xs font-semibold w-20 shrink-0">{row.time}</span>
                <span className="text-[#1D2D44]/70 text-sm flex-1">{row.label}</span>
                {row.venue && (
                  <span className="text-[#1D2D44]/40 text-xs font-medium shrink-0">{row.venue}</span>
                )}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── Details ── */}
      <section className="py-12 sm:py-16 bg-white border-b border-[#B08D55]/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#1D2D44] mb-8">
            Details
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-[#B08D55] flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-serif font-bold text-[#1D2D44] text-sm mb-1">Where</p>
                <p className="text-[#1D2D44]/70 text-sm">Arise Pickleball at BEAT Discovery Udomsuk (Mon and Wed), Papaya Pickleball Club (Tue), and Pick A Court Sukhumvit 62 (Thu), all in Bangkok.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Award className="w-5 h-5 text-[#B08D55] flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-serif font-bold text-[#1D2D44] text-sm mb-1">Level</p>
                <p className="text-[#1D2D44]/70 text-sm">Built for intermediate players and up. Newer players welcome, tell us when you book and we&apos;ll group you well.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Users className="w-5 h-5 text-[#B08D55] flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-serif font-bold text-[#1D2D44] text-sm mb-1">Group</p>
                <p className="text-[#1D2D44]/70 text-sm">Six spots.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Globe className="w-5 h-5 text-[#B08D55] flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-serif font-bold text-[#1D2D44] text-sm mb-1">Language</p>
                <p className="text-[#1D2D44]/70 text-sm">English, with live Thai translation and Thai slides in the mindset sessions.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Package className="w-5 h-5 text-[#B08D55] flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-serif font-bold text-[#1D2D44] text-sm mb-1">Bring</p>
                <p className="text-[#1D2D44]/70 text-sm">Paddle, court shoes, water bottle. Balls and water are on us.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Clock className="w-5 h-5 text-[#B08D55] flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-serif font-bold text-[#1D2D44] text-sm mb-1">Getting there</p>
                <p className="text-[#1D2D44]/70 text-sm">30 to 40 minutes by Grab from central Bangkok, roughly 150 to 250 baht each way.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Coach Travis Rhea ── */}
      <section className="py-12 sm:py-16 bg-white border-b border-[#B08D55]/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-[200px_1fr] gap-8 items-center">
          <div className="relative h-56 sm:h-64 rounded-2xl overflow-hidden mx-auto sm:mx-0 max-w-xs w-full">
            <Image
              src="/travis-rhea.png"
              alt="Coach Travis Rhea"
              fill
              className="object-cover object-top"
              sizes="(max-width: 640px) 100vw, 200px"
            />
          </div>
          <div>
            <div className="relative h-8 w-40 mb-4">
              <Image
                src="/Mindyourpickle.jpeg"
                alt="Mind Your Pickle"
                fill
                className="object-contain object-left"
                sizes="160px"
              />
            </div>
            <h2 className="text-2xl font-serif font-bold text-[#1D2D44] mb-3">Coach Travis Rhea</h2>
            <p className="text-[#1D2D44]/70 text-base leading-relaxed mb-3">
              Travis built Mind Your Pickle around one idea. The players who win close games aren&apos;t hitting better shots, they&apos;re managing themselves better. He flies in from Arizona for this week.
            </p>
            <a
              href="https://mindyourpickle.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-[#B08D55] hover:text-[#8D7144] transition-colors"
            >
              mindyourpickle.com
            </a>
          </div>
        </div>
      </section>


      <ClinicsJanCta />

    </main>
  );
}
