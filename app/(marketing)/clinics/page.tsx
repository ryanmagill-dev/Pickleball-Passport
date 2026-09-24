'use client';

import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle, MapPin, Clock, ArrowRight, QrCode, Users, Globe, Package, Award } from 'lucide-react';

/* ─────────────────────── SCHEDULE ─────────────────────── */

const bangkokSchedule = [
  { day: 'Sun 1 Nov', time: 'Evening', venue: '', label: 'Arrivals. Welcome and priming dinner. No pickleball.' },
  { day: 'Mon 2 Nov', time: '11am–2pm', venue: 'Arise Pickleball', label: 'Mind Your Pickle mindset session with Travis.' },
  { day: 'Tue 3 Nov', time: '11am–2pm', venue: 'Papaya Pickleball Club', label: 'Live coaching session.' },
  { day: 'Wed 4 Nov', time: '11am–2pm', venue: 'Arise Pickleball', label: 'Mind Your Pickle mindset session with Travis.' },
  { day: 'Thu 5 Nov', time: '11am–2pm', venue: 'Papaya Pickleball Club', label: 'Final live coaching session, mini tournament.' },
];

const huaHinSchedule = [
  { day: 'Sat 7 Nov', time: '9am–12pm', label: 'Skills clinic, then open play to put it into action.' },
];

/* ─────────────────────── PASSES ─────────────────────── */

const passes = [
  {
    name: 'Clinic Week',
    summary: '4 sessions: 2 mindset, 2 live coaching',
    price: '$299',
    link: 'https://link.fastpaydirect.com/payment-link/6aaa56229f7ff2c808a75e19',
    external: true,
    featured: true,
    includes: [
      'Two Mind Your Pickle mindset sessions with Coach Travis Rhea',
      'Two live coaching sessions with Jaron and Ryan',
      'All court time, balls, water, snacks, and setup',
    ],
  },
  {
    name: 'Two-Day Pass',
    summary: '2 sessions in Bangkok: 1 mindset, 1 live coaching',
    price: '$169',
    link: 'https://link.fastpaydirect.com/payment-link/6aaa56b2f426560dbc2f08a6',
    external: true,
    featured: false,
    includes: [
      'One Mind Your Pickle mindset session with Coach Travis Rhea',
      'One live coaching session with Jaron and Ryan',
      'All court time, balls, water, snacks, and setup',
    ],
  },
  {
    name: 'Hua Hin Day',
    summary: 'Skills clinic + open play, one day on the coast',
    price: 'Details soon',
    link: '/clinics/hua-hin',
    external: false,
    featured: false,
    includes: [
      'One skills clinic with Jaron and Ryan',
      'Open play afterward to put it into action',
      'Paid locally in Thailand, booking details to follow',
    ],
  },
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
                Four sessions.<br className="hidden sm:block" /> One week. Just the pickleball.
              </h1>
              <p className="text-xl text-white mb-8 max-w-2xl">
                Coach Travis Rhea on mindset. Jaron and Ryan on court. Four sessions in Bangkok, capped at sixteen players. You book your own room and eat where you like. We run the pickleball.
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
                <Link
                  href="/clinics/hua-hin"
                  className="flex items-center gap-2 bg-[#B08D55]/20 hover:bg-[#B08D55]/30 rounded-full px-4 py-2 text-sm transition-colors"
                >
                  <Clock className="h-4 w-4 text-[#B08D55]" />
                  + Nov 7, Hua Hin
                </Link>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="https://link.fastpaydirect.com/payment-link/6aaa56229f7ff2c808a75e19"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-gradient-to-r from-[#B08D55] to-[#CFB78D] text-[#0F1A2A] font-bold text-sm shadow-lg shadow-[#B08D55]/30 hover:shadow-xl transition-all"
                >
                  Reserve your spot · $299
                  <ArrowRight className="w-4 h-4" />
                </a>
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
            Clinic Week is the opposite. Just the pickleball, priced to match. You book your own room, you get yourself to the courts, and your mornings and evenings are your own.
          </p>
          <p>
            Sixteen players, four courts. Nobody hides at the back of a drill line.
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
            Bangkok · 11am to 2pm · Arise Pickleball and Papaya Pickleball Club
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

          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white mb-1 mt-12">
            Hua Hin Schedule
          </h2>
          <p className="text-white/50 text-sm mb-6">
            Hua Hin · 9am to 12pm
          </p>
          <div className="space-y-3">
            {huaHinSchedule.map((row) => (
              <div key={row.day} className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4 bg-white rounded-xl border border-[#B08D55]/10 p-4 shadow-lg">
                <span className="font-serif font-bold text-[#1D2D44] text-sm w-28 shrink-0">{row.day}</span>
                <span className="text-[#B08D55] text-xs font-semibold w-20 shrink-0">{row.time}</span>
                <span className="text-[#1D2D44]/70 text-sm">{row.label}</span>
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
                <p className="text-[#1D2D44]/70 text-sm">Arise Pickleball (Mon &amp; Wed) and Papaya Pickleball Club (Tue &amp; Thu), both in Bangkok.</p>
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
                <p className="text-[#1D2D44]/70 text-sm">Maximum sixteen. Four courts.</p>
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

      {/* ── Choose Your Pass ── */}
      <section id="two-day-pass" className="py-12 sm:py-16 bg-[#FDF8F3] border-b border-[#B08D55]/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#1D2D44] mb-2">
            Choose Your Pass
          </h2>
          <p className="text-[#1D2D44]/60 text-sm mb-8">
            Court time, coaching, and equipment. Room, transport, and meals are yours to arrange.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {passes.map((pass) => {
              const cardClass = `rounded-2xl border p-6 flex flex-col hover:shadow-md transition-all group ${
                pass.featured
                  ? 'bg-[#0F1A2A] border-[#B08D55]/40 hover:border-[#B08D55]/70'
                  : 'bg-white border-[#B08D55]/10 hover:border-[#B08D55]/30'
              }`;
              const content = (
                <>
                  {pass.featured && (
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#B08D55] text-white text-xs font-bold mb-3 self-start">
                      BEST VALUE
                    </span>
                  )}
                  <p className={`font-serif font-bold text-lg mb-1 ${pass.featured ? 'text-white' : 'text-[#1D2D44]'}`}>
                    {pass.name}
                  </p>
                  <p className={`text-sm mb-4 ${pass.featured ? 'text-white/50' : 'text-[#1D2D44]/50'}`}>
                    {pass.summary}
                  </p>
                  <ul className="space-y-1.5 mb-5 flex-1">
                    {pass.includes.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <CheckCircle className={`w-3.5 h-3.5 flex-shrink-0 mt-0.5 ${pass.featured ? 'text-[#B08D55]' : 'text-[#B08D55]'}`} />
                        <span className={`text-xs ${pass.featured ? 'text-white/70' : 'text-[#1D2D44]/70'}`}>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center justify-between mt-auto">
                    <span className={`font-bold text-xl ${pass.featured ? 'text-white' : 'text-[#1D2D44]'}`}>
                      {pass.price}
                    </span>
                    <span className="flex items-center gap-1 text-[#B08D55] font-bold text-sm group-hover:gap-2 transition-all">
                      {pass.external ? 'Reserve' : 'Learn more'} <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </>
              );
              return pass.external ? (
                <a key={pass.name} href={pass.link} target="_blank" rel="noopener noreferrer" className={cardClass}>
                  {content}
                </a>
              ) : (
                <Link key={pass.name} href={pass.link} className={cardClass}>
                  {content}
                </Link>
              );
            })}
          </div>

          <p className="text-[#1D2D44]/60 text-xs mt-6 leading-relaxed">
            * Clinic Week and the Two-Day Pass are Bangkok only: two mindset sessions with Coach Travis Rhea and two live coaching sessions with Jaron and Ryan, across Arise Pickleball and Papaya Pickleball Club. The Hua Hin day is a separate, single-day clinic, booked and paid locally in Thailand.
          </p>

          <p className="text-[#1D2D44]/40 text-xs mt-4">
            Not included on any pass: accommodation, flights, visas, insurance, transport, meals. Hua Hin runs only with ten or more players by November 1. See the{' '}
            <Link href="/clinics/hua-hin" className="text-[#B08D55] hover:underline font-medium">
              Hua Hin day page
            </Link>.
          </p>
          <p className="text-[#1D2D44]/40 text-xs mt-2">
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
          <p className="text-[#1D2D44]/40 text-xs mt-2">
            Want just one session, or one-on-one coaching with Travis, Jaron, or Ryan? Message us on WhatsApp or LINE below and we&apos;ll set it up.
          </p>
        </div>
      </section>

      {/* ── Venue / Getting there ── */}
      <section className="py-12 sm:py-16 bg-white border-t border-[#B08D55]/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#1D2D44] mb-2">
            Venues
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-8 max-w-5xl">
            <div className="bg-[#FDF8F3] rounded-2xl border border-[#B08D55]/10 overflow-hidden">
              <div className="relative h-44 bg-white flex items-center justify-center p-8">
                <Image
                  src="/Arise-Pickleball-Black-02.png"
                  alt="Arise Pickleball"
                  fill
                  className="object-contain p-8"
                  sizes="(max-width: 768px) 100vw, 340px"
                />
              </div>
              <div className="p-4">
                <p className="font-serif font-bold text-[#1D2D44] text-base">Arise Pickleball courts</p>
                <p className="text-[#1D2D44]/60 text-sm">Udom Suk, Bangkok · Mon &amp; Wed</p>
              </div>
            </div>

            <div className="bg-[#FDF8F3] rounded-2xl border border-[#B08D55]/10 overflow-hidden">
              <div className="relative h-44">
                <Image
                  src="/papaya2.jpg"
                  alt="The Pickleball Passport group at Papaya Pickleball Club"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 340px"
                />
              </div>
              <div className="p-4">
                <p className="font-serif font-bold text-[#1D2D44] text-base">Papaya Pickleball Club</p>
                <p className="text-[#1D2D44]/60 text-sm">Bangkok · Tue &amp; Thu</p>
              </div>
            </div>

            <div className="bg-[#FDF8F3] rounded-2xl border border-[#B08D55]/10 overflow-hidden">
              <div className="relative h-44">
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
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <p className="text-white/70 text-sm font-medium">Venue to be announced</p>
                </div>
              </div>
              <div className="p-4">
                <p className="font-serif font-bold text-[#1D2D44] text-base">Hua Hin courts</p>
                <p className="text-[#1D2D44]/60 text-sm">Hua Hin · Nov 7</p>
              </div>
            </div>
          </div>

          <div className="bg-[#FDF8F3] rounded-xl border border-[#B08D55]/10 p-5 max-w-lg">
            <p className="text-xs font-bold tracking-[0.15em] uppercase text-[#B08D55] mb-2">Getting There. Not Optional.</p>
            <p className="text-[#1D2D44]/70 text-sm leading-relaxed">
              Arise Pickleball is in Udom Suk. If you&apos;re staying central, budget 30 to 40 minutes by Grab, roughly 150 to 250 baht each way. Papaya Pickleball Club travel times to follow. Easy either way, but worth knowing before you arrive rather than on the first morning.
            </p>
          </div>
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
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 overflow-hidden rounded-lg">
              <Image
                src="/newqr.jpeg"
                alt="PromptPay QR code"
                fill
                className="object-contain"
                sizes="320px"
              />
            </div>
            <p className="text-xs text-[#1D2D44]/40 mt-3">
              PromptPay · Screenshot and scan in any Thai banking app
            </p>
          </div>

          {/* ── LINE + WhatsApp (questions before paying) ── */}
          <div className="mt-6 bg-white rounded-2xl border border-[#B08D55]/10 p-6 sm:p-8">
            <p className="text-xs font-bold tracking-[0.15em] uppercase text-[#B08D55] mb-4 text-center">
              Questions before you pay? Chat with Jaron
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 justify-items-center">
              <a
                href="https://line.me/ti/p/-PkfPC68L8"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-2"
              >
                <div className="relative w-40 h-40 sm:w-44 sm:h-44 overflow-hidden rounded-xl border border-[#B08D55]/10">
                  <Image
                    src="/line-qr-jaron.png"
                    alt="Add Jaron on LINE, QR code"
                    fill
                    className="object-cover"
                    sizes="176px"
                  />
                </div>
                <span className="text-xs font-semibold text-[#1D2D44]/60">Scan to add on LINE</span>
              </a>
              <a
                href="https://wa.me/qr/GELZNRU2267RE1"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-2"
              >
                <div className="relative w-48 h-48 sm:w-52 sm:h-52 overflow-hidden rounded-xl border border-[#B08D55]/10">
                  <Image
                    src="/whatsapp-qr-jaron.png"
                    alt="Add Jaron on WhatsApp, QR code"
                    fill
                    className="object-contain bg-[#5CBD6D]"
                    sizes="208px"
                  />
                </div>
                <span className="text-xs font-semibold text-[#1D2D44]/60">Scan to add on WhatsApp</span>
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
