'use client';

import { Shield, ExternalLink } from 'lucide-react';

interface InsuranceAffiliate {
  name: string;
  description: string;
  link: string;
}

const affiliates: InsuranceAffiliate[] = [
  {
    name: 'Squaremouth',
    description: 'Compare plans from dozens of providers in one place, then buy the one that fits your trip.',
    link: 'https://www.squaremouth.com/?aid=24050',
  },
];

export function TravelInsuranceSection() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="font-serif text-3xl font-bold text-[#1D2D44] mb-2">
          Travel Insurance
        </h2>
        <p className="text-[#1D2D44]/60 text-sm">
          Protect your trip investment and your health abroad.
        </p>
      </div>

      {/* Recommendation */}
      <div className="rounded-xl border border-[#B08D55]/30 bg-[#FDF8F3] p-6">
        <div className="flex items-start gap-4">
          <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#B08D55]/10">
            <Shield className="h-5 w-5 text-[#B08D55]" />
          </div>
          <p className="text-sm text-[#1D2D44]/80 leading-relaxed">
            We strongly recommend purchasing comprehensive travel insurance
            before your trip. Travel insurance protects against trip
            cancellation, medical emergencies, lost baggage, and flight delays.
          </p>
        </div>
      </div>

      {/* Affiliate Cards */}
      <div className="grid gap-4 sm:grid-cols-2">
        {affiliates.map((affiliate) => (
          <a
            key={affiliate.name}
            href={affiliate.link}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border border-[#B08D55]/20 bg-white p-5 transition-all hover:border-[#B08D55]/40 hover:shadow-sm group"
          >
            <div className="flex items-center gap-2 mb-2">
              <h3 className="font-serif font-semibold text-[#1D2D44] text-base">
                {affiliate.name}
              </h3>
              <ExternalLink className="h-3.5 w-3.5 text-[#B08D55]" />
            </div>
            <p className="text-sm text-[#1D2D44]/70 leading-relaxed mb-3">
              {affiliate.description}
            </p>
            <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#B08D55] group-hover:gap-2 transition-all">
              Get a quote &rarr;
            </span>
          </a>
        ))}
      </div>

      {/* Affiliate disclosure */}
      <p className="text-xs text-[#1D2D44]/40 leading-relaxed">
        Disclosure: we&apos;re an affiliate of the providers linked above. If you buy a policy through these links, we may earn a small commission at no extra cost to you. The Pickleball Passport does not sell, underwrite, or arrange travel insurance directly. Please review each policy&apos;s terms and choose what&apos;s right for your trip.
      </p>

      {/* Tip */}
      <div className="rounded-xl bg-[#1D2D44]/5 border border-[#1D2D44]/10 p-4">
        <p className="text-sm text-[#1D2D44]/80 leading-relaxed">
          <span className="font-serif font-semibold text-[#1D2D44]">
            Tip:
          </span>{' '}
          Purchase travel insurance within 14 days of your initial trip deposit
          to maximize coverage options, including pre-existing condition waivers.
        </p>
      </div>

      {/* Liability Waiver */}
      <div className="rounded-xl border border-[#1D2D44]/10 bg-white p-5">
        <p className="text-sm text-[#1D2D44]/80 leading-relaxed">
          <span className="font-serif font-semibold text-[#1D2D44]">
            Liability Waiver:
          </span>{' '}
          Prior to departure, all guests will complete a standard liability
          waiver as part of the onboarding process.
        </p>
      </div>
    </div>
  );
}
