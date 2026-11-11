'use client';

import { Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { forwardSearchParams } from '@/lib/attribution';

const GHL_CALENDAR_URL = 'https://api.leadconnectorhq.com/widget/bookings/tpp-discoverycall';

function ReserveForm() {
  const searchParams = useSearchParams();
  // Search params are available during SSR. Cookie-only credit is added by
  // AffiliateTracker after hydration, so the server and client markup match.
  const iframeSrc = forwardSearchParams(GHL_CALENDAR_URL, searchParams.toString());

  return (
    <main className="min-h-screen bg-[#FDF8F3]">
      {/* Header */}
      <section className="bg-[#0F1A2A] text-white py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl font-serif font-bold mb-3">
            Let&apos;s Talk About Your Trip
          </h1>
          <p className="text-white/60 text-base max-w-xl mx-auto leading-relaxed">
            Pick a time that works for you. We&apos;ll walk you through the experience, answer every question, and find the right departure.
          </p>
        </div>
      </section>

      {/* GHL Calendar */}
      <section className="py-8 sm:py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <iframe
            src={iframeSrc}
            style={{ width: '100%', height: '700px', border: 'none', borderRadius: '8px' }}
            title="Book a Discovery Call"
          />
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

export default function ReservePage() {
  return (
    <Suspense>
      <ReserveForm />
    </Suspense>
  );
}
