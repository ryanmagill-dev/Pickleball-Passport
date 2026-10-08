'use client';

import { CheckCircle, AlertTriangle, XCircle, ArrowRightLeft, Shield } from 'lucide-react';

interface PolicyTier {
  timeframe: string;
  description: string;
  color: 'green' | 'amber' | 'red';
  icon: React.ReactNode;
}

// Mirrors Trip Products in content/legal/terms-of-service.md (section 3)
const policyTiers: PolicyTier[] = [
  {
    timeframe: '90+ days',
    description: 'Full refund, less a $500 per person administration fee',
    color: 'green',
    icon: <CheckCircle className="h-5 w-5" />,
  },
  {
    timeframe: '60–89 days',
    description: '50% refund',
    color: 'amber',
    icon: <AlertTriangle className="h-5 w-5" />,
  },
  {
    timeframe: '30–59 days',
    description: '25% refund',
    color: 'amber',
    icon: <AlertTriangle className="h-5 w-5" />,
  },
  {
    timeframe: 'Fewer than 30 days',
    description: 'No refund',
    color: 'red',
    icon: <XCircle className="h-5 w-5" />,
  },
];

const colorStyles: Record<string, { border: string; bg: string; icon: string; text: string }> = {
  green: {
    border: 'border-emerald-200',
    bg: 'bg-emerald-50',
    icon: 'text-emerald-600',
    text: 'text-emerald-800',
  },
  amber: {
    border: 'border-amber-200',
    bg: 'bg-amber-50',
    icon: 'text-amber-600',
    text: 'text-amber-800',
  },
  red: {
    border: 'border-red-200',
    bg: 'bg-red-50',
    icon: 'text-red-600',
    text: 'text-red-800',
  },
};

export function CancellationSection() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="font-serif text-3xl font-bold text-[#1D2D44] mb-2">
          Cancellation Policy
        </h2>
        <p className="text-[#1D2D44]/60 text-sm">
          Transparent and straightforward. No hidden terms.
        </p>
      </div>

      {/* Payment Note */}
      <div className="rounded-xl border-2 border-[#B08D55]/30 bg-[#FDF8F3] p-4">
        <p className="text-sm font-medium text-[#1D2D44]">
          Payment in full reserves your spot. Refunds are based on the date we receive your
          cancellation in writing.
        </p>
      </div>

      {/* Policy Tiers */}
      <div className="grid gap-3 sm:grid-cols-4">
        {policyTiers.map((tier, index) => {
          const styles = colorStyles[tier.color];
          return (
            <div
              key={index}
              className={`rounded-xl border-2 ${styles.border} ${styles.bg} p-5 text-center`}
            >
              <div className={`inline-flex ${styles.icon} mb-3`}>
                {tier.icon}
              </div>
              <p className="font-serif font-bold text-[#1D2D44] text-sm mb-1">
                {tier.timeframe}
              </p>
              <p className={`text-sm font-medium ${styles.text}`}>
                {tier.description}
              </p>
            </div>
          );
        })}
      </div>

      {/* Additional Options */}
      <div className="space-y-4">
        <div className="flex items-start gap-3 rounded-xl border border-[#1D2D44]/10 bg-white p-4">
          <ArrowRightLeft className="h-5 w-5 flex-shrink-0 text-[#B08D55] mt-0.5" />
          <div>
            <p className="font-serif font-semibold text-[#1D2D44] text-sm">
              Transfer Option
            </p>
            <p className="text-sm text-[#1D2D44]/70 mt-1 leading-relaxed">
              You may transfer your booking to another person at no charge up to
              30 days before departure, subject to our approval of the replacement
              guest and any supplier name-change fees.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3 rounded-xl border border-[#B08D55]/30 bg-[#FDF8F3] p-4">
          <Shield className="h-5 w-5 flex-shrink-0 text-[#B08D55] mt-0.5" />
          <div>
            <p className="font-serif font-semibold text-[#1D2D44] text-sm">
              Travel Insurance Recommended
            </p>
            <p className="text-sm text-[#1D2D44]/70 mt-1 leading-relaxed">
              We strongly recommend travel insurance to protect against
              unforeseen circumstances.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
