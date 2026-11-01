import Link from 'next/link';
import { JAN_URL } from './jan-trip';

export function ClinicsJanCta() {
  return (
    <section className="bg-[#FDF8F3] py-14">
      <div className="mx-auto max-w-4xl rounded-2xl border border-[#B08D55]/30 bg-white px-6 py-8 text-center shadow-sm sm:px-10">
        <h2 className="mb-3 font-serif text-2xl font-bold text-[#1D2D44] sm:text-3xl">Want more than a clinic week?</h2>
        <p className="mx-auto mb-6 max-w-2xl text-[#1D2D44]/70">
          Our January trip is nine days in Bangkok and Chiang Mai, January 14 to 22, 2027: four coached sessions,
          five-star hotels, Elephant Nature Park and a day trip to Chiang Rai. $5,500 per person, paid in full.
        </p>
        <Link
          href={JAN_URL}
          className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-[#B08D55] to-[#CFB78D] px-6 py-3 font-bold text-[#0F1A2A] shadow-lg"
        >
          See the January Trip
        </Link>
      </div>
    </section>
  );
}
