'use client';

import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle, X, MapPin, Users, Clock, ArrowRight, MessageCircle } from 'lucide-react';

/* ─────────────────────── GO / NO-GO GATE ─────────────────────── */

type GateStatus = 'open' | 'confirmed' | 'closed';

const GATE_STATUS: GateStatus = 'open';

const included = [
  'One mindset seminar with Coach Travis Rhea',
  'One live open play session with Jaron and Ryan',
  'All court time, balls, water',
  'Group WhatsApp thread',
  'Photos afterwards',
];

const notIncluded = ['Accommodation', 'Transport', 'Meals'];

export default function ClinicsHuaHinPage() {
  return (
    <main className="min-h-screen bg-[#FDF8F3]">

      {/* ── Hero ── */}
      <section className="relative overflow-hidden text-white py-16 sm:py-20">
        <div className="relative h-full">
          <Image
            src="/images/sports-life-hua-hin.jpg"
            alt="Sports Life Hua Hin"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/65 to-black/40" />
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#B08D55] mb-3">
            Two-Day Pass · Hua Hin
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
            Two sessions. One weekend. Hua Hin.
          </h1>
          <p className="text-xl text-white mb-8 max-w-2xl">
            Coach Travis Rhea brings the mindset work down the coast. Two sessions at Sports Life Hua Hin, capped at sixteen. Same deal as Bangkok, you sort your own room and we run the pickleball.
          </p>

          <div className="flex flex-wrap gap-3 mb-10">
            <div className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 text-sm">
              <Clock className="h-4 w-4 text-[#B08D55]" />
              Nov 7–8, 2026
            </div>
            <div className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 text-sm">
              <MapPin className="h-4 w-4 text-[#B08D55]" />
              Sports Life Hua Hin
            </div>
            <div className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 text-sm">
              <Users className="h-4 w-4 text-[#B08D55]" />
              16 spots
            </div>
          </div>

          {GATE_STATUS === 'open' && (
            <>
              <a
                href="https://link.fastpaydirect.com/payment-link/6aa93ddcceb12d9fc1a8cfa2"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-gradient-to-r from-[#B08D55] to-[#CFB78D] text-[#0F1A2A] font-bold text-sm shadow-lg shadow-[#B08D55]/30 hover:shadow-xl transition-all"
              >
                Reserve your spot · $169
                <ArrowRight className="w-4 h-4" />
              </a>
              <p className="text-white/50 text-xs mt-3 max-w-md">
                This weekend runs with ten players or more. If we don&apos;t get there by November 1, everyone booked is refunded in full.
              </p>
            </>
          )}

          {GATE_STATUS === 'confirmed' && (
            <>
              <a
                href="https://link.fastpaydirect.com/payment-link/6aa93ddcceb12d9fc1a8cfa2"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-gradient-to-r from-[#B08D55] to-[#CFB78D] text-[#0F1A2A] font-bold text-sm shadow-lg shadow-[#B08D55]/30 hover:shadow-xl transition-all"
              >
                Reserve your spot · $169
                <ArrowRight className="w-4 h-4" />
              </a>
              <p className="text-white/50 text-xs mt-3">Confirmed and running.</p>
            </>
          )}

          {GATE_STATUS === 'closed' && (
            <>
              <p className="text-white text-lg font-semibold mb-3">Not running this November.</p>
              <Link
                href="/notify"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl border border-white/20 text-white font-semibold text-sm hover:bg-white/10 transition-all"
              >
                Join the list
              </Link>
            </>
          )}
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
