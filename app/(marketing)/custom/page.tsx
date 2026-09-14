'use client';

import Script from 'next/script';
import Link from 'next/link';

export default function CustomPage() {
  return (
    <main className="min-h-screen bg-[#FDF8F3]">
      {/* Header */}
      <section className="bg-[#0F1A2A] text-white py-14 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#B08D55] mb-3">
            Private Packages &amp; Corporate Events
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-white mb-3">
            Build Something Custom
          </h1>
          <p className="text-white/60 text-base max-w-xl mx-auto leading-relaxed">
            Planning a private trip, a group buyout, or a corporate event around pickleball in Thailand? Tell us what you have in mind and we&apos;ll follow up.
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
              id="inline-custom-DOYQ7o4C8pR6V0hSLxcm"
              data-layout="{'id':'INLINE'}"
              data-trigger-type="alwaysShow"
              data-trigger-value=""
              data-activation-type="alwaysActivated"
              data-activation-value=""
              data-deactivation-type="neverDeactivate"
              data-deactivation-value=""
              data-form-name="Website: Custom Package Inquiry"
              data-height="724"
              data-layout-iframe-id="inline-custom-DOYQ7o4C8pR6V0hSLxcm"
              data-form-id="DOYQ7o4C8pR6V0hSLxcm"
              title="Website: Custom Package Inquiry"
            />
            <Script src="https://link.msgsndr.com/js/form_embed.js" strategy="afterInteractive" />
          </div>
        </div>
      </section>

      {/* Back link */}
      <section className="pb-12">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/" className="text-[#1D2D44]/60 hover:text-[#1D2D44] text-sm">
            &larr; Back home
          </Link>
        </div>
      </section>
    </main>
  );
}
