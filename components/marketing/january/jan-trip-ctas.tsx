import Link from 'next/link';
import { JAN_ROUTE_URL, JAN_URL } from './jan-trip';

// Sits under the January card on /trips. The card itself links to the trip.
// Apply and the route link stay outside that card so anchors are not nested.
export function JanTripCtas() {
  return (
    <div className="mt-4 flex flex-col items-start gap-3 sm:flex-row sm:flex-wrap sm:items-center">
      <Link
        href={JAN_URL}
        className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-[#B08D55] to-[#CFB78D] px-5 py-3 text-sm font-bold text-[#0F1A2A] shadow-lg"
      >
        See the January Trip
      </Link>
      <Link
        href="/apply"
        className="inline-flex items-center justify-center rounded-xl border border-[#1D2D44]/20 px-5 py-3 text-sm font-bold text-[#1D2D44]"
      >
        Apply
      </Link>
      <Link href={JAN_ROUTE_URL} className="text-sm font-semibold text-[#1D2D44]/70 underline underline-offset-4">
        About the Bangkok + Chiang Mai route
      </Link>
    </div>
  );
}
