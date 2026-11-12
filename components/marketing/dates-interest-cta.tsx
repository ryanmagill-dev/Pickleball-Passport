import Link from 'next/link';
import { JAN_URL } from '@/components/marketing/january/jan-trip';

const FEB_URL = '/trips/bangkok-hua-hin/february-18-2027';

export function DatesInterestCta({
  tone = 'light',
  compact = false,
}: {
  tone?: 'light' | 'dark';
  compact?: boolean;
}) {
  const muted = tone === 'dark' ? 'text-white/80' : 'text-[#1D2D44]/70';
  const link = tone === 'dark' ? 'text-[#CFB78D] hover:text-white' : 'text-[#B08D55] hover:text-[#8D7144]';

  if (compact) {
    return (
      <div className="flex items-center justify-between gap-3">
        <p className="text-sm font-semibold text-[#1D2D44]">Dates being finalized.</p>
        <Link
          href="/notify"
          className="inline-flex shrink-0 items-center justify-center rounded-xl bg-gradient-to-r from-[#B08D55] to-[#CFB78D] px-4 py-2.5 text-xs font-bold text-[#0F1A2A]"
        >
          Join the interest list
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <p className={`text-base font-semibold ${tone === 'dark' ? 'text-white' : 'text-[#1D2D44]'}`}>
        Dates being finalized.
      </p>
      <Link
        href="/notify"
        className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-[#B08D55] to-[#CFB78D] px-6 py-3 text-sm font-bold text-[#0F1A2A] shadow-lg shadow-[#B08D55]/30"
      >
        Join the interest list
      </Link>
      <p className={`text-sm ${muted}`}>
        Or see a trip you can book now.{' '}
        <Link href={JAN_URL} className={`font-semibold underline underline-offset-2 ${link}`}>
          January 14 to 22
        </Link>
        {' or '}
        <Link href={FEB_URL} className={`font-semibold underline underline-offset-2 ${link}`}>
          February 18 to 26
        </Link>
      </p>
    </div>
  );
}
