import type { Metadata } from 'next';
import { shareImage } from '@/lib/seo/share-image';

const calendarDescription =
  'Every Pickleball Passport departure in one place. 2027 routes: Bangkok + Chiang Mai in January, Bangkok + Hua Hin in February, Bangkok + Phuket in March, and Bangkok + Pattaya for Songkran in April.';

// /trips/calendar/page.tsx is a client component, so the title lives here.
export const metadata: Metadata = {
  title: { absolute: 'Thailand Pickleball Trip Calendar 2027 | The Pickleball Passport' },
  description: calendarDescription,
  openGraph: {
    title: 'Thailand Pickleball Trip Calendar 2027 | The Pickleball Passport',
    description: calendarDescription,
    url: 'https://www.thepickleballpassport.org/trips/calendar',
    siteName: 'The Pickleball Passport',
    images: [shareImage('trips')],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Thailand Pickleball Trip Calendar 2027 | The Pickleball Passport',
    description: calendarDescription,
    images: [shareImage('trips')],
  },
  alternates: { canonical: 'https://www.thepickleballpassport.org/trips/calendar' },
};

export default function CalendarLayout({ children }: { children: React.ReactNode }) {
  return children;
}
