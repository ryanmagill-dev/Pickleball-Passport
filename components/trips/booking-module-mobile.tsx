'use client';

import { useState } from 'react';
import { DatesInterestCta } from '@/components/marketing/dates-interest-cta';

interface BookingModuleMobileProps {
  tripName?: string;
  price?: number;
  depositAmount?: number;
  depositLink?: string;
  fullLink?: string;
  spotsLeft?: number;
  hidePaymentPlan?: boolean;
  privateRoomPrice?: number;
  privateRoomLink?: string;
  interestOnly?: boolean;
}

export function BookingModuleMobile({
  price = 5500,
  depositAmount = 1163,
  depositLink,
  fullLink,
  spotsLeft,
  hidePaymentPlan = false,
  privateRoomPrice,
  privateRoomLink,
  interestOnly = false,
}: BookingModuleMobileProps) {
  const [showPaymentOptions, setShowPaymentOptions] = useState(false);

  return (
    <>
      {/* Fixed Bottom Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-white border-t border-[#B08D55]/20 shadow-[0_-4px_20px_rgba(0,0,0,0.1)]">
        {interestOnly ? (
          <div className="px-4 py-3">
            <DatesInterestCta compact />
          </div>
        ) : (
        <div className="py-3 px-4 flex items-center justify-between gap-3">
          <div className="min-w-0">
            <p className="font-serif font-bold text-[#1D2D44] text-sm">
              From ${price.toLocaleString()}/person
            </p>
            {!hidePaymentPlan && (
              <p className="text-xs text-[#1D2D44]/50">
                or 25% deposit of ${depositAmount.toLocaleString()}
              </p>
            )}
            {spotsLeft !== undefined && (
              <p className="text-xs font-semibold text-[#1D2D44]/60">
                {spotsLeft === 0 ? 'Fully reserved' : `${spotsLeft} spaces available`}
              </p>
            )}
          </div>
          <div className="flex gap-2 flex-shrink-0">
            {hidePaymentPlan && fullLink ? (
              <a
                href={fullLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#B08D55] to-[#CFB78D] text-[#0F1A2A] font-bold text-xs shadow-lg shadow-[#B08D55]/25"
              >
                Reserve Your Spot
              </a>
            ) : depositLink ? (
              <button
                type="button"
                onClick={() => setShowPaymentOptions(!showPaymentOptions)}
                className="inline-flex items-center justify-center px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#B08D55] to-[#CFB78D] text-[#0F1A2A] font-bold text-xs shadow-lg shadow-[#B08D55]/25"
              >
                Reserve Your Spot
              </button>
            ) : null}
          </div>
        </div>
        )}

        {/* Expandable payment options */}
        {showPaymentOptions && depositLink && fullLink && (
          <div className="px-4 pb-3 grid grid-cols-2 gap-2 border-t border-[#B08D55]/10 pt-3">
            <a
              href={depositLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center rounded-lg border-2 border-[#B08D55] p-2.5 text-center hover:bg-[#B08D55]/10 transition-colors"
            >
              <span className="text-xs font-semibold uppercase text-[#1D2D44]">25% Deposit</span>
              <span className="text-sm font-bold text-[#1D2D44]">${depositAmount.toLocaleString()}</span>
              <span className="text-[10px] text-[#1D2D44]/50">Balance invoiced later</span>
            </a>
            <a
              href={fullLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center rounded-lg border-2 border-[#B08D55] p-2.5 text-center hover:bg-[#B08D55]/10 transition-colors"
            >
              <span className="text-xs font-semibold uppercase text-[#1D2D44]">Pay in Full</span>
              <span className="text-sm font-bold text-[#1D2D44]">${price.toLocaleString()}</span>
            </a>
            {privateRoomLink && privateRoomPrice !== undefined && (
              <a
                href={privateRoomLink}
                target="_blank"
                rel="noopener noreferrer"
                className="col-span-2 text-center text-xs text-[#1D2D44]/60 pt-1"
              >
                Want your own room? <span className="font-semibold text-[#B08D55] underline underline-offset-2">Add a private room, ${privateRoomPrice.toLocaleString()}</span>
              </a>
            )}
          </div>
        )}
      </div>
    </>
  );
}
