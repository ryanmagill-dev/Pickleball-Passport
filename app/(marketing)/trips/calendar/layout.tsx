import type { Metadata } from 'next';

// /trips/calendar/page.tsx is a client component, so the title lives here.
export const metadata: Metadata = {
  title: { absolute: 'Thailand Pickleball Trip Calendar 2027 | The Pickleball Passport' },
  description:
    'Every Pickleball Passport departure in one place, starting with the January 14 to 22, 2027 Bangkok + Chiang Mai trip. One Thailand pickleball trip a month.',
  alternates: { canonical: 'https://www.thepickleballpassport.org/trips/calendar' },
};

export default function CalendarLayout({ children }: { children: React.ReactNode }) {
  return children;
}
