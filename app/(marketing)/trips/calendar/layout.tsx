import type { Metadata } from 'next';
import { metadataFor } from '@/lib/seo/indexable-pages';

// /trips/calendar/page.tsx is a client component, so the title lives here.
export const metadata: Metadata = metadataFor('/trips/calendar');

export default function CalendarLayout({ children }: { children: React.ReactNode }) {
  return children;
}
