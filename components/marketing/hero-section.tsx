'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import { BackgroundVideo } from '@/components/marketing/background-video';
import { JAN_PRICE, JAN_SPOTS_LEFT, JAN_TOTAL_SPOTS, JAN_URL } from '@/components/marketing/january/jan-trip';

export function HeroSection() {
  return (
    <section className="relative flex min-h-[100svh] items-start overflow-hidden lg:min-h-[88vh] lg:items-center">
      <BackgroundVideo src="/hero-drone.mp4" poster="/images/posters/hero-drone-poster.jpg" priority />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/45 to-black/70" />

      <div className="container relative z-10 px-4 pb-32 pt-8 sm:pt-12 lg:py-28">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#CFB78D]">
            Bangkok and Chiang Mai
          </p>
          <h1 className="mt-3 font-serif text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl">
            January 14 to 22, 2027
          </h1>
          <p className="mt-4 text-3xl font-bold text-white sm:text-4xl">
            {JAN_PRICE}
            <span className="ml-2 text-lg font-medium text-white/75">per person</span>
          </p>
          <p className="mt-2 text-base text-white/85 sm:text-lg">
            {JAN_SPOTS_LEFT} of {JAN_TOTAL_SPOTS} spots left. Paid in full.
          </p>

          <div className="mt-6 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <Button
              size="lg"
              asChild
              className="rounded-xl bg-gradient-to-r from-[#B08D55] to-[#CFB78D] px-8 py-6 text-lg font-bold text-[#1D2D44] shadow-xl shadow-[#B08D55]/30 transition-all hover:from-[#8D7144] hover:to-[#B08D55] hover:shadow-2xl"
            >
              <Link href={JAN_URL}>
                See the January Trip
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="rounded-xl border-white/40 bg-white/10 px-8 py-6 text-lg font-semibold text-white backdrop-blur-sm hover:border-white/60 hover:bg-white/20"
            >
              <Link href="/trips">All trips</Link>
            </Button>
          </div>

          <div className="mt-10 w-full max-w-4xl">
            <div className="rounded-2xl border border-white/20 bg-white/10 p-5 shadow-2xl backdrop-blur-md sm:p-8">
              <div className="grid grid-cols-3 gap-3 md:gap-8">
                <div className="text-center">
                  <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-[#B08D55]/20 md:h-14 md:w-14">
                    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 md:h-8 md:w-8" aria-hidden="true">
                      <g transform="rotate(-25 20 22)">
                        <rect x="9" y="4" width="22" height="25" rx="7" fill="#B08D55" />
                        <rect x="11" y="27.5" width="18" height="2" fill="#1D2D44" opacity="0.35" />
                        <rect x="17" y="29" width="6" height="14" rx="2.5" fill="#B08D55" />
                      </g>
                      <circle cx="38" cy="37" r="6" fill="#B08D55" />
                      <circle cx="36" cy="35" r="1.2" fill="#1D2D44" opacity="0.6" />
                      <circle cx="40.2" cy="35.6" r="1.2" fill="#1D2D44" opacity="0.6" />
                      <circle cx="37.6" cy="39.6" r="1.2" fill="#1D2D44" opacity="0.6" />
                    </svg>
                  </div>
                  <div className="text-base font-bold text-white md:text-2xl">Courts Vetted</div>
                  <div className="mt-1 text-xs text-white/60 md:text-sm">Every venue inspected</div>
                </div>

                <div className="text-center">
                  <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-[#B08D55]/20 md:h-14 md:w-14">
                    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 md:h-8 md:w-8" aria-hidden="true">
                      <rect x="6" y="14" width="22" height="16" rx="3" fill="#B08D55" />
                      <rect x="9" y="17" width="8" height="7" rx="1.5" fill="#1D2D44" opacity="0.4" />
                      <rect x="4" y="11" width="26" height="4" rx="2" fill="#B08D55" />
                      <rect x="28" y="20" width="10" height="10" rx="2" fill="#B08D55" />
                      <rect x="4" y="22" width="4" height="8" rx="1" fill="#B08D55" />
                      <rect x="3" y="30" width="42" height="1.5" rx="0.75" fill="#B08D55" opacity="0.3" />
                      <circle cx="35" cy="33" r="4.5" fill="#1D2D44" opacity="0.8" />
                      <circle cx="35" cy="33" r="2" fill="#B08D55" />
                      <circle cx="12" cy="33" r="4.5" fill="#1D2D44" opacity="0.8" />
                      <circle cx="12" cy="33" r="2" fill="#B08D55" />
                    </svg>
                  </div>
                  <div className="text-base font-bold text-white md:text-2xl">Logistics Handled</div>
                  <div className="mt-0.5 text-xs text-white/40">You just show up and play</div>
                </div>

                <div className="text-center">
                  <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-[#B08D55]/20 md:h-14 md:w-14">
                    <ShieldCheck className="h-6 w-6 text-[#B08D55] md:h-7 md:w-7" />
                  </div>
                  <div className="text-base font-bold text-white md:text-2xl">Injury-Aware</div>
                  <div className="mt-1 text-xs text-white/40">Scheduling and support</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <a
        href="https://www.instagram.com/micahphotography1"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute bottom-20 right-4 z-10 text-xs tracking-wide text-white/40 transition-colors hover:text-white/70"
      >
        Aerial footage: @micahphotography1
      </a>

      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="#FDF8F3"/>
        </svg>
      </div>
    </section>
  );
}
