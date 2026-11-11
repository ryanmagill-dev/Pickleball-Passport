'use client';

import { Shield } from 'lucide-react';
import { GUEST_REFUND_POLICY } from '@/lib/content/refund-policy';

export function CancellationSection({ paidInFull = false }: { paidInFull?: boolean }) {
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

      <div className="rounded-xl border-2 border-[#B08D55]/30 bg-[#FDF8F3] p-4 space-y-2">
        {paidInFull ? (
          <p className="text-sm font-medium text-[#1D2D44]">
            This January 14 to 22, 2027 trip is paid in full at booking, with no deposit.
          </p>
        ) : (
          <p className="text-sm font-medium text-[#1D2D44]">
            A 25% deposit can hold your spot. It is part of the trip price.
          </p>
        )}
        <p className="text-sm text-[#1D2D44]/80 leading-relaxed">{GUEST_REFUND_POLICY}</p>
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
  );
}
