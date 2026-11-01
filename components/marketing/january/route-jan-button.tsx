import Link from 'next/link';
import { JAN_URL } from './jan-trip';

export function RouteJanButton() {
  return (
    <Link
      href={JAN_URL}
      className="flex items-center gap-2 rounded-full bg-gradient-to-r from-[#B08D55] to-[#CFB78D] px-4 py-2 text-sm font-bold text-[#0F1A2A] shadow-lg"
    >
      See the January 14 to 22, 2027 departure
    </Link>
  );
}
