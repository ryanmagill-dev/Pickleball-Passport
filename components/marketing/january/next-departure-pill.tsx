import Link from 'next/link';
import { JAN_SPOTS_LEFT, JAN_URL } from './jan-trip';

// Hero pill. Hidden when the January trip is full.
export function NextDeparturePill({ className = '' }: { className?: string }) {
  if (JAN_SPOTS_LEFT <= 0) return null;
  return (
    <Link
      href={JAN_URL}
      className={`inline-flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-sm font-semibold text-[#1D2D44] shadow-lg backdrop-blur-sm transition-colors hover:bg-white ${className}`}
    >
      <span className="h-2 w-2 rounded-full bg-[#B08D55]" aria-hidden="true" />
      Next departure: Jan 14 to 22, 2027, {JAN_SPOTS_LEFT} spots
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path d="M5 12h14M13 6l6 6-6 6" />
      </svg>
    </Link>
  );
}
