import type { Metadata } from 'next';
import { redirect } from 'next/navigation';
import { TRIPS_HOME } from '@/lib/trips/public-schedule';

// Hidden while listed is false in lib/trips/public-schedule.ts.
// The trip page component is still in march-18-page.tsx.
export const metadata: Metadata = {
  robots: { index: false, follow: false },
  title: 'Trips',
};

export default function Page() {
  redirect(TRIPS_HOME);
}
