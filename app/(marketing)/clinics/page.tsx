'use client';

import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle, X, MapPin, Clock, ArrowRight, QrCode, MessageCircle } from 'lucide-react';

/* ─────────────────────── THE WEEK ─────────────────────── */

const weekSchedule = [
  { day: 'Sun 1 Nov', label: 'Arrivals. Welcome and priming dinner in the evening.' },
  { day: 'Mon 2 Nov', label: "Mindset seminar with Travis, morning." },
  { day: 'Tue 3 Nov', label: 'Coaching and open play, morning.' },
  { day: 'Wed 4 Nov', label: "Mindset seminar with Travis, morning." },
  { day: 'Thu 5 Nov', label: 'Final session. Round robin, group photo, awards.' },
];

/* ─────────────────────── WHAT'S INCLUDED ─────────────────────── */

const included = [
  'Two mindset seminars with Coach Travis Rhea',
  'Coaching and open play with Jaron',
  'All court time, balls, water, setup',
  'Group WhatsApp thread for the week',
  'Our Bangkok list',
  'Photos and video afterwards',
];

const notIncluded = [
  'Accommodation',
  'Flights, visas, insurance',
  'Transport to and from the courts',
  'Meals',
  'Tours and sightseeing',
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
                Clinic Week · Bangkok
              </p>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
                Four mornings.<br className="hidden sm:block" /> One week. Just the pickleball.
              </h1>
              <p className="text-xl text-white mb-8 max-w-2xl">
                Coach Travis Rhea on mindset. Jaron on court. Four mornings in Bangkok, capped at sixteen players. You book your own room and eat where you like. We run the pickleball.
              </p>

              <div className="flex flex-wrap gap-3 mb-10">
                <div className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 text-sm">
                  <Clock className="h-4 w-4 text-[#B08D55]" />
                  Nov 1–5, 2026
                </div>
                <div className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 text-sm">
                  <MapPin className="h-4 w-4 text-[#B08D55]" />
                  Arise Pickleball courts, Udom Suk
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-gradient-to-r from-[#B08D55] to-[#CFB78D] text-[#0F1A2A] font-bold text-sm shadow-lg shadow-[#B08D55]/30 hover:shadow-xl transition-all"
                >
                  Reserve your spot · $299
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href="#two-day-pass"
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl border border-white/20 text-white font-semibold text-sm hover:bg-white/10 transition-all"
                >
                  Two-Day Pass · $169
                </a>
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
            Most pickleball travel makes you buy the whole thing. Hotel, transport, guide, itinerary, whether you wanted it or not.
          </p>
          <p>
            Clinic Week is the opposite. Just the pickleball, priced to match. You book your own room, you get yourself to the courts, and your afternoons are your own.
          </p>
          <p>
            Sixteen players. Four courts. Nobody hides at the back of a drill line.
          </p>
        </div>
      </section>

      {/* ── The week ── */}
      <section className="py-12 sm:py-16 bg-[#FDF8F3] border-b border-[#B08D55]/10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#1D2D44] mb-6">
            The Week
          </h2>
          <div className="space-y-3">
            {weekSchedule.map((row) => (
              <div key={row.day} className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4 bg-white rounded-xl border border-[#B08D55]/10 p-4">
                <span className="font-serif font-bold text-[#1D2D44] text-sm w-28 shrink-0">{row.day}</span>
                <span className="text-[#1D2D44]/70 text-sm">{row.label}</span>
              </div>
            ))}
          </div>
          <p className="text-[#1D2D44]/40 text-xs mt-4">
            All sessions run in the morning.
          </p>
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
            <p className="text-[#1D2D44]/70 text-base leading-relaxed">
              Travis built Mind Your Pickle around one idea. The players who win close games aren&apos;t hitting better shots, they&apos;re managing themselves better. He flies in from Arizona for this week.
            </p>
          </div>
        </div>
      </section>

      {/* ── Included / Not included ── */}
      <section className="py-12 sm:py-16 bg-[#FDF8F3] border-b border-[#B08D55]/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 gap-10">
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
      </section>

      {/* ── Wat Pho photo strip ── */}
      <section className="relative h-56 sm:h-72 overflow-hidden">
        <Image
          src="/images/jaron-ryan-wat-pho-1.jpg"
          alt="Jaron and Ryan at Wat Pho, Bangkok"
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
      </section>

      {/* ── Venue / Getting there ── */}
      <section className="py-12 sm:py-16 bg-white border-t border-[#B08D55]/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#1D2D44] mb-2">
            Venues
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8 max-w-3xl">
            <div className="bg-[#FDF8F3] rounded-2xl border border-[#B08D55]/10 overflow-hidden">
              <div className="relative h-44 bg-[#0F1A2A] flex items-center justify-center">
                <span className="text-white/30 font-serif text-lg">Arise Pickleball</span>
              </div>
              <div className="p-4">
                <p className="font-serif font-bold text-[#1D2D44] text-base">Arise Pickleball courts</p>
                <p className="text-[#1D2D44]/60 text-sm">Udom Suk, Bangkok · Nov 1–5</p>
              </div>
            </div>

            <div className="bg-[#FDF8F3] rounded-2xl border border-[#B08D55]/10 overflow-hidden">
              <div className="relative h-44">
                <Image
                  src="/images/sports-life-hua-hin.jpg"
                  alt="Sports Life Hua Hin"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 340px"
                />
              </div>
              <div className="p-4">
                <p className="font-serif font-bold text-[#1D2D44] text-base">Sports Life Hua Hin</p>
                <p className="text-[#1D2D44]/60 text-sm">Hua Hin · Nov 7–8</p>
              </div>
            </div>
          </div>

          <div className="bg-[#FDF8F3] rounded-xl border border-[#B08D55]/10 p-5 max-w-lg">
            <p className="text-xs font-bold tracking-[0.15em] uppercase text-[#B08D55] mb-2">Getting There. Not Optional.</p>
            <p className="text-[#1D2D44]/70 text-sm leading-relaxed">
              Courts are in Udom Suk. If you&apos;re staying central, budget 30 to 40 minutes by Grab, roughly 150 to 250 baht each way. Easy, but worth knowing before you arrive rather than on the first morning.
            </p>
          </div>
        </div>
      </section>

      {/* ── Two-Day Pass ── */}
      <section id="two-day-pass" className="py-12 sm:py-16 bg-[#FDF8F3] border-t border-[#B08D55]/10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#1D2D44] mb-2">
            Two-Day Pass
          </h2>
          <p className="text-[#1D2D44]/70 text-base leading-relaxed mb-6">
            Can&apos;t do the full week? $169 gets you two sessions, one mindset seminar with Travis and one coaching and open play block. Bangkok on November 4 and 5, or Hua Hin on the 7th and 8th. Pick your city when you book.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-gradient-to-r from-[#B08D55] to-[#CFB78D] text-[#0F1A2A] font-bold text-sm shadow-lg shadow-[#B08D55]/30 hover:shadow-xl transition-all"
          >
            Two-Day Pass · $169
            <ArrowRight className="w-4 h-4" />
          </Link>
          <p className="text-[#1D2D44]/40 text-xs mt-3">
            Hua Hin runs only with ten or more players by November 1. See the{' '}
            <Link href="/clinics/hua-hin" className="text-[#B08D55] hover:underline font-medium">
              Hua Hin weekend page
            </Link>{' '}
            for details.
          </p>
        </div>
      </section>

      {/* ── PromptPay QR (Thailand local payments) ── */}
      <section className="py-12 sm:py-16 bg-[#FDF8F3] border-t border-[#B08D55]/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl border border-[#B08D55]/10 p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <div className="flex-shrink-0 flex items-center justify-center w-24 h-24 rounded-xl bg-[#FDF8F3] border-2 border-dashed border-[#B08D55]/30">
              <QrCode className="w-10 h-10 text-[#B08D55]/40" />
            </div>
            <div>
              <p className="text-xs font-bold tracking-[0.15em] uppercase text-[#B08D55] mb-1">
                Paying in Thailand? ชำระเงินในไทย
              </p>
              <h3 className="font-serif text-xl font-bold text-[#1D2D44] mb-2">
                PromptPay: No Stripe Fees
              </h3>
              <p className="text-[#1D2D44]/60 text-sm leading-relaxed mb-3">
                If you&apos;re based in Thailand, scan the QR code below to pay via PromptPay, standard Thai bank transfer, zero international fees. Screenshot it and go.
              </p>
              <p className="text-sm font-semibold text-[#1D2D44]">
                ฿9,700 for the full week · ฿5,500 for the Two-Day Pass
              </p>
            </div>
          </div>

          <div className="mt-6 bg-white rounded-2xl border border-[#B08D55]/10 p-6 flex flex-col items-center">
            <div className="relative w-56 h-56 sm:w-64 sm:h-64 overflow-hidden rounded-lg">
              <Image
                src="/images/newpromptpay-qr.png"
                alt="PromptPay QR code — Jaron Dhillon Shoptaugh"
                fill
                className="object-contain"
                sizes="256px"
              />
            </div>
            <p className="text-xs text-[#1D2D44]/40 mt-3">
              PromptPay · Jaron Dhillon Shoptaugh · Screenshot and scan in any Thai banking app
            </p>
          </div>

          {/* ── LINE contact (questions before paying) ── */}
          <div className="mt-6 bg-white rounded-2xl border border-[#B08D55]/10 p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-6">
            <div className="relative w-40 h-40 sm:w-44 sm:h-44 flex-shrink-0 overflow-hidden rounded-lg border border-[#B08D55]/10">
              <Image
                src="/line-qr-jaron.png"
                alt="Add Jaron on LINE — QR code"
                fill
                className="object-cover"
                sizes="176px"
              />
            </div>
            <div className="text-center sm:text-left">
              <p className="text-xs font-bold tracking-[0.15em] uppercase text-[#B08D55] mb-1">
                Questions before you pay?
              </p>
              <h3 className="font-serif text-xl font-bold text-[#1D2D44] mb-2">
                Chat with Jaron on LINE
              </h3>
              <p className="text-[#1D2D44]/60 text-sm leading-relaxed mb-4">
                Scan the QR code or tap below to add Jaron on LINE — ask questions, confirm your spot, or just say hi before you send a PromptPay payment.
              </p>
              <a
                href="https://line.me/ti/p/-PkfPC68L8"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#06C755] text-white font-semibold text-sm hover:bg-[#05a648] transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                Add Jaron on LINE
              </a>
            </div>
          </div>

          {/* ── WhatsApp contact (questions before paying) ── */}
          <div className="mt-6 bg-white rounded-2xl border border-[#B08D55]/10 p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-6">
            <div className="relative w-40 h-40 sm:w-44 sm:h-44 flex-shrink-0 overflow-hidden rounded-lg border border-[#B08D55]/10">
              <Image
                src="/whatsapp-qr-jaron.png"
                alt="Add Jaron on WhatsApp — QR code"
                fill
                className="object-contain bg-[#5CBD6D]"
                sizes="176px"
              />
            </div>
            <div className="text-center sm:text-left">
              <p className="text-xs font-bold tracking-[0.15em] uppercase text-[#B08D55] mb-1">
                Prefer WhatsApp?
              </p>
              <h3 className="font-serif text-xl font-bold text-[#1D2D44] mb-2">
                Chat with Jaron on WhatsApp
              </h3>
              <p className="text-[#1D2D44]/60 text-sm leading-relaxed mb-4">
                Scan the QR code or tap below to add Jaron on WhatsApp — ask questions, confirm your spot, or just say hi before you send a PromptPay payment.
              </p>
              <a
                href="https://wa.me/qr/GELZNRU2267RE1"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#25D366] text-white font-semibold text-sm hover:bg-[#1ebe5a] transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                Add Jaron on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Trip link ── */}
      <section className="py-10 bg-white border-t border-[#B08D55]/10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#1D2D44]/60 text-sm">
            Want the whole thing? We also run a{' '}
            <Link href="/trips" className="text-[#B08D55] hover:underline font-medium">
              9-day, 8-night trip
            </Link>.
          </p>
        </div>
      </section>

    </main>
  );
}
