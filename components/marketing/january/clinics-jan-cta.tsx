import Link from 'next/link';
import { JAN_PRICE, JAN_URL } from './jan-trip';

const FEB_URL = '/trips/bangkok-hua-hin/february-18-2027';

export function ClinicsJanCta() {
  return (
    <section className="bg-[#FDF8F3] py-14">
      <div className="mx-auto max-w-4xl rounded-2xl border border-[#B08D55]/30 bg-white px-6 py-8 text-center shadow-sm sm:px-10">
        <h2 className="mb-3 font-serif text-2xl font-bold text-[#1D2D44] sm:text-3xl">The next trips</h2>
        <p className="mx-auto mb-6 max-w-2xl text-[#1D2D44]/70">
          January 14 to 22, 2027 is nine days in Bangkok and Chiang Mai, {JAN_PRICE} per person, paid in full.
          February 18 to 26, 2027 is Bangkok and Hua Hin, $7,000 per person.
        </p>
        <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href={JAN_URL}
            className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-[#B08D55] to-[#CFB78D] px-6 py-3 font-bold text-[#0F1A2A] shadow-lg"
          >
            See the January Trip
          </Link>
          <Link
            href={FEB_URL}
            className="inline-flex items-center justify-center rounded-xl border border-[#B08D55]/40 px-6 py-3 font-bold text-[#1D2D44]"
          >
            See the February Trip
          </Link>
        </div>
      </div>
    </section>
  );
}
