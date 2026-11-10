'use client';

import { Suspense } from 'react';
import Script from 'next/script';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { useReserveHref } from '@/lib/hooks/use-reserve-href';

const TRIPS = [
  { name: 'Bangkok + Chiang Mai', dates: 'Jan 14 to 22, 2027', price: '$5,500', href: '/trips/bangkok-chiang-mai/january-14-2027' },
  { name: 'Bangkok + Hua Hin', dates: 'Feb 18 to 26, 2027', price: '$7,000', href: '/trips/bangkok-hua-hin/february-18-2027' },
  { name: 'Bangkok + Phuket', dates: 'Mar 18 to 26, 2027', price: '$7,000', href: '/trips/bangkok-phuket/march-18-2027' },
  { name: 'Songkran: Bangkok + Pattaya', dates: 'Apr 12 to 20, 2027', price: '$7,000', href: '/trips/bangkok-pattaya/songkran-april-2027' },
];

function ApplyContent() {
  const reserveHref = useReserveHref();

  return (
    <main className="min-h-screen bg-[#FDF8F3]">
      {/* Header */}
      <section className="bg-[#0F1A2A] text-white py-14 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#B08D55] mb-3">
            Apply for The Pickleball Passport
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-white mb-3">
            Tell Us About Your Trip
          </h1>
          <p className="text-white/60 text-base max-w-xl mx-auto leading-relaxed">
            Fill out the form below and our team will follow up with dates, pricing, and next steps.
          </p>
        </div>
      </section>

      {/* GHL Form */}
      <section className="py-12 sm:py-16">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl border border-[#B08D55]/10 shadow-lg overflow-hidden">
            <iframe
              src="https://api.leadconnectorhq.com/widget/form/DOYQ7o4C8pR6V0hSLxcm"
              style={{ width: '100%', height: '724px', border: 'none', borderRadius: '3px' }}
              id="inline-apply-DOYQ7o4C8pR6V0hSLxcm"
              data-layout="{'id':'INLINE'}"
              data-trigger-type="alwaysShow"
              data-trigger-value=""
              data-activation-type="alwaysActivated"
              data-activation-value=""
              data-deactivation-type="neverDeactivate"
              data-deactivation-value=""
              data-form-name="Website: Apply"
              data-height="724"
              data-layout-iframe-id="inline-apply-DOYQ7o4C8pR6V0hSLxcm"
              data-form-id="DOYQ7o4C8pR6V0hSLxcm"
              title="Website: Apply"
            />
            <Script src="https://link.msgsndr.com/js/form_embed.js" strategy="afterInteractive" />
          </div>
          <div className="text-center mt-6">
            <p className="text-[#1D2D44]/70 text-sm font-semibold mb-3">
              Ready to book? Choose your trip.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 max-w-lg mx-auto">
              {TRIPS.map((trip) => (
                <Link
                  key={trip.href}
                  href={trip.href}
                  className="flex items-center justify-between gap-2 rounded-xl border border-[#B08D55]/30 bg-white px-4 py-3 text-left text-sm hover:border-[#B08D55] transition-colors"
                >
                  <span>
                    <span className="block font-semibold text-[#1D2D44]">{trip.name}</span>
                    <span className="block text-xs text-[#1D2D44]/50">{trip.dates} · {trip.price}</span>
                  </span>
                  <ArrowRight className="w-4 h-4 text-[#B08D55] shrink-0" />
                </Link>
              ))}
            </div>
            <p className="text-[#1D2D44]/40 text-xs mt-5">
              Prefer to talk it through first?{' '}
              <Link href={reserveHref} className="text-[#B08D55] hover:underline font-medium">
                Schedule a call
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* Back link */}
      <section className="pb-12">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/trips" className="text-[#1D2D44]/60 hover:text-[#1D2D44] text-sm">
            &larr; Back to Trips
          </Link>
        </div>
      </section>
    </main>
  );
}

export default function ApplyPage() {
  return (
    <Suspense>
      <ApplyContent />
    </Suspense>
  );
}
