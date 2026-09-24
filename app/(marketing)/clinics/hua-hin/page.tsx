'use client';

import Link from 'next/link';
import { CheckCircle, X, MapPin, Users, Clock, MessageCircle } from 'lucide-react';

const schedule = [
  { day: 'Sat 7 Nov', time: '9am–12pm', label: 'Skills clinic with Jaron and Ryan, then open play to put it into action.' },
];

const included = [
  'A skills clinic with Jaron and Ryan',
  'Open play afterward to apply it',
  'All court time, balls, water, and snacks',
  'Group WhatsApp thread',
  'Photos afterwards',
];

const notIncluded = ['Accommodation', 'Transport', 'Meals'];

export default function ClinicsHuaHinPage() {
  return (
    <main className="min-h-screen bg-[#FDF8F3]">

      {/* ── Hero ── */}
      {/* TODO: swap for real photos of the new Hua Hin venue once confirmed */}
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
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#B08D55] mb-3">
            Hua Hin Day · Coming Soon
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
            One day. Clinic and open play. Hua Hin.
          </h1>
          <p className="text-xl text-white mb-8 max-w-2xl">
            A skills clinic with Jaron and Ryan, then open play to put it into action. One day on the coast in Hua Hin, capped at sixteen. Pricing and booking details to follow, booked and paid locally in Thailand.
          </p>

          <div className="flex flex-wrap gap-3 mb-10">
            <div className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 text-sm">
              <Clock className="h-4 w-4 text-[#B08D55]" />
              Nov 7, 2026
            </div>
            <div className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 text-sm">
              <MapPin className="h-4 w-4 text-[#B08D55]" />
              Hua Hin · venue to be announced
            </div>
            <div className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 text-sm">
              <Users className="h-4 w-4 text-[#B08D55]" />
              16 spots
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="https://line.me/ti/p/-PkfPC68L8"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-[#06C755] text-white font-bold text-sm shadow-lg hover:shadow-xl transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              Message us on LINE
            </a>
            <a
              href="https://wa.me/qr/GELZNRU2267RE1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-[#25D366] text-white font-bold text-sm shadow-lg hover:shadow-xl transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              Message us on WhatsApp
            </a>
          </div>
          <p className="text-white/50 text-xs mt-3 max-w-md">
            Tell us you want in and we&apos;ll follow up with pricing and booking once it&apos;s locked. This day runs if we get ten players or more confirmed by November 1.
          </p>
        </div>
      </section>

      {/* ── Schedule ── */}
      <section className="py-12 sm:py-16 bg-white border-b border-[#B08D55]/10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#1D2D44] mb-1">
            Schedule
          </h2>
          <p className="text-[#1D2D44]/50 text-sm mb-6">
            Hua Hin · 9am to 12pm
          </p>
          <div className="space-y-3">
            {schedule.map((row) => (
              <div key={row.day} className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4 bg-[#FDF8F3] rounded-xl border border-[#B08D55]/10 p-4">
                <span className="font-serif font-bold text-[#1D2D44] text-sm w-28 shrink-0">{row.day}</span>
                <span className="text-[#B08D55] text-xs font-semibold w-20 shrink-0">{row.time}</span>
                <span className="text-[#1D2D44]/70 text-sm">{row.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Included / Not included ── */}
      <section className="py-12 sm:py-16 bg-white border-b border-[#B08D55]/10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 gap-10">
          <div>
            <h3 className="font-serif font-bold text-[#1D2D44] text-xl mb-5">Included</h3>
            <ul className="space-y-3">
              {included.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-[#B08D55] flex-shrink-0 mt-0.5" />
                  <span className="text-[#1D2D44]/75 text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-serif font-bold text-[#1D2D44] text-xl mb-5">Not Included</h3>
            <ul className="space-y-3">
              {notIncluded.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <X className="w-4 h-4 text-[#1D2D44]/30 flex-shrink-0 mt-0.5" />
                  <span className="text-[#1D2D44]/50 text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#1D2D44]/40 text-xs mt-6">
            Need travel insurance?{' '}
            <a
              href="https://www.squaremouth.com/?aid=24050"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#B08D55] hover:underline font-medium"
            >
              Compare plans with our partner, Squaremouth
            </a>.
          </p>
        </div>
      </section>

      {/* ── Trip link ── */}
      <section className="py-10 bg-[#FDF8F3] border-t border-[#B08D55]/10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#1D2D44]/60 text-sm mb-2">
            <Link href="/clinics" className="text-[#B08D55] hover:underline font-medium">
              Full Clinic Week in Bangkok
            </Link>{' '}
            runs the same days, November 1 to 5.
          </p>
          <p className="text-[#1D2D44]/60 text-sm">
            Want the whole thing? We also run a{' '}
            <Link href="/trips" className="text-[#B08D55] hover:underline font-medium">
              9-day, 8-night trip
            </Link>.
          </p>
        </div>
      </section>

      {/* ── Contact ── */}
      <section className="py-10 bg-white border-t border-[#B08D55]/10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#1D2D44] text-white font-semibold text-sm hover:bg-[#1D2D44]/80 transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            Questions? Contact us
          </Link>
        </div>
      </section>

    </main>
  );
}
