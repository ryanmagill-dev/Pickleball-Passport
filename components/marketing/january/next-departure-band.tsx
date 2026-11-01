import Image from 'next/image';
import Link from 'next/link';
import { JAN_SPOTS_LEFT, JAN_TOTAL_SPOTS, JAN_URL } from './jan-trip';

// Homepage band directly under the hero. January only: $5,500 per person, paid in full.
export function NextDepartureBand() {
  return (
    <section className="bg-[#1D2D44] py-10 text-white sm:py-14" aria-labelledby="next-departure">
      <div className="container mx-auto grid gap-6 px-4 md:grid-cols-2 md:items-center">
        <div>
          <p className="text-xs uppercase tracking-widest text-[#CFB78D]">Next departure</p>
          <h2 id="next-departure" className="mt-2 font-serif text-3xl font-bold">
            Bangkok + Chiang Mai, Jan 14 to 22, 2027
          </h2>
          <p className="mt-3 text-white/80">
            9 days, four coached sessions, five-star hotels, Elephant Nature Park. $5,500 per person, paid in full.
            {' '}{JAN_SPOTS_LEFT} of {JAN_TOTAL_SPOTS} spots left.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link
              href={JAN_URL}
              className="rounded-xl bg-gradient-to-r from-[#B08D55] to-[#CFB78D] px-5 py-3 font-bold text-[#1D2D44]"
            >
              See the January Trip
            </Link>
            <Link href="/apply" className="rounded-xl border border-white/40 px-5 py-3 font-bold">
              Apply
            </Link>
          </div>
        </div>
        <Image
          src="/images/posters/chiang-mai-pill-poster.jpg"
          alt="Chiang Mai"
          width={800}
          height={600}
          className="h-auto w-full rounded-2xl object-cover"
        />
      </div>
    </section>
  );
}
