'use client';

import Link from 'next/link';
import { Calendar, Users } from 'lucide-react';
import { useReserveHref } from '@/lib/hooks/use-reserve-href';
import { DatesInterestCta } from '@/components/marketing/dates-interest-cta';

interface BookingModuleProps {
  tripName?: string;
  cities?: string;
  dates?: string;
  price?: number;
  depositAmount?: number;
  depositLink?: string;
  fullLink?: string;
  spotsLeft?: number;
  totalSpots?: number;
  hidePaymentPlan?: boolean;
  privateRoomPrice?: number;
  privateRoomLink?: string;
  interestOnly?: boolean;
}

export function BookingModule({
  cities = 'Bangkok · Hua Hin',
  dates = 'Multiple 2026–27 departures',
  price = 5500,
  depositAmount = 1163,
  depositLink,
  fullLink,
  spotsLeft,
  totalSpots,
  hidePaymentPlan = false,
  privateRoomPrice,
  privateRoomLink,
  interestOnly = false,
}: BookingModuleProps) {
  const reserveHref = useReserveHref();

  return (
    <div className="rounded-2xl shadow-xl shadow-[#1D2D44]/10 border border-[#B08D55]/10 bg-white overflow-hidden">
      {/* Header */}
      <div className="relative h-[180px] bg-gradient-to-br from-[#1D2D44] via-[#495F87] to-[#7587A5] rounded-t-2xl flex flex-col items-center justify-center">
        <h3 className="font-serif text-2xl text-white font-semibold tracking-wide">
          Thailand
        </h3>
        <p className="text-white/70 text-sm mt-1 text-center px-4">
          {cities}
        </p>
        <div className="flex items-center gap-1.5 mt-3 text-white/80 text-xs text-center">
          <Calendar className="w-3.5 h-3.5 text-[#B08D55]" />
          {dates}
        </div>
      </div>

      {/* Content Area */}
      <div className="p-5 space-y-4">
        {interestOnly ? (
          <DatesInterestCta />
        ) : (
        <div className="pt-2 pb-1 text-center">
          <p className="font-serif text-2xl font-bold text-[#1D2D44]">
            From ${price.toLocaleString()}<span className="text-base font-normal text-[#1D2D44]/60">/person</span>
          </p>
          {!hidePaymentPlan && (
            <p className="text-xs text-[#1D2D44]/60 mt-1">
              or a 25% deposit of ${depositAmount.toLocaleString()}
            </p>
          )}
        </div>
        )}

        {/* Spots Counter */}
        {!interestOnly && spotsLeft !== undefined && totalSpots !== undefined && (
          <div className="flex items-center justify-center gap-2 py-2 px-3 rounded-lg text-sm font-semibold bg-[#1D2D44]/5 text-[#1D2D44] border border-[#1D2D44]/10">
            <Users className="w-4 h-4 text-[#B08D55]" />
            {spotsLeft === 0
              ? 'Fully Reserved'
              : `${spotsLeft} of ${totalSpots} spaces available`
            }
          </div>
        )}

        {/* Payment buttons */}
        {!interestOnly && (
        <div className="space-y-3">
          {depositLink && fullLink ? (
            <div className="grid grid-cols-2 gap-2">
              <a
                href={depositLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center rounded-xl p-3 text-center bg-gradient-to-r from-[#B08D55] to-[#CFB78D] text-[#0F1A2A] font-semibold text-sm shadow-lg shadow-[#B08D55]/25 hover:shadow-xl hover:shadow-[#B08D55]/30 transition-all hover:-translate-y-0.5"
              >
                <span className="text-xs font-semibold uppercase">25% Deposit</span>
                <span className="text-base font-bold mt-0.5">${depositAmount.toLocaleString()}</span>
                <span className="text-[11px] font-normal text-[#0F1A2A]/70">${(price - depositAmount).toLocaleString()} balance invoiced later</span>
              </a>
              <a
                href={fullLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center rounded-xl border-2 border-[#B08D55] p-3 text-center hover:bg-[#B08D55]/10 transition-colors"
              >
                <span className="text-xs font-semibold uppercase text-[#1D2D44]">Pay in Full</span>
                <span className="text-base font-bold text-[#1D2D44] mt-0.5">${price.toLocaleString()}</span>
                <span className="text-[11px] text-[#1D2D44]/50">Full amount</span>
              </a>
            </div>
          ) : fullLink ? (
            <a
              href={fullLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full min-h-12 px-5 py-3 items-center justify-center text-center rounded-xl uppercase tracking-wider bg-gradient-to-r from-[#B08D55] to-[#CFB78D] text-[#0F1A2A] font-semibold text-sm shadow-lg shadow-[#B08D55]/25 hover:shadow-xl hover:shadow-[#B08D55]/30 transition-all hover:-translate-y-0.5"
            >
              Reserve Your Spot · ${price.toLocaleString()}
            </a>
          ) : null}

          {privateRoomLink && privateRoomPrice !== undefined && (
            <a
              href={privateRoomLink}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center text-xs text-[#1D2D44]/60 hover:text-[#1D2D44] transition-colors"
            >
              Want your own room? <span className="font-semibold text-[#B08D55] underline underline-offset-2">Add a private room, ${privateRoomPrice.toLocaleString()}</span>
            </a>
          )}
        </div>
        )}

        {!interestOnly && (
        <p className="text-center text-xs text-[#1D2D44]/40">
          Prefer to talk it through?{' '}
          <Link href={reserveHref} className="text-[#B08D55] hover:underline font-medium">
            Schedule a call
          </Link>
        </p>
        )}
      </div>
    </div>
  );
}
