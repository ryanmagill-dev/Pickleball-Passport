import Link from 'next/link';
import { JAN_SPOTS_LEFT, JAN_URL } from './jan-trip';

// January stays $5,500 per person, paid in full. Months from February 2027 are $7,000.
export function CalendarJanRow() {
  return (
    <div>
      <div className="mb-5">
        <h2 className="font-serif text-xl font-bold text-[#1D2D44] sm:text-2xl">Next Departure</h2>
        <p className="mt-0.5 text-sm text-[#1D2D44]/50">Nine days in Bangkok and Chiang Mai, paid in full at booking.</p>
      </div>
      <Link
        href={JAN_URL}
        className="flex flex-col gap-3 rounded-xl border border-[#B08D55]/40 bg-white p-4 transition-colors hover:border-[#B08D55] sm:flex-row sm:items-center sm:justify-between"
      >
        <div className="flex flex-wrap items-center gap-3">
          <p className="font-serif text-base font-bold text-[#1D2D44]">Jan 14 to 22, 2027: Bangkok + Chiang Mai</p>
          {JAN_SPOTS_LEFT > 0 && (
            <span className="rounded-full bg-[#B08D55]/15 px-2 py-0.5 text-xs font-semibold text-[#8D7144]">
              {JAN_SPOTS_LEFT} spots left
            </span>
          )}
        </div>
        <div className="flex items-center gap-4">
          <span className="text-sm font-bold text-[#1D2D44]">
            $5,500<span className="ml-1 text-xs font-normal text-[#1D2D44]/40">/person</span>
          </span>
          <span className="whitespace-nowrap text-xs font-semibold text-[#B08D55]">See the January Trip</span>
        </div>
      </Link>
    </div>
  );
}
