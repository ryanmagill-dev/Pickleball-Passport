import { Suspense } from 'react';
import { Metadata } from 'next';
import { TripsListingPage } from './trips-listing-page';

export const metadata: Metadata = {
  title: 'Upcoming Pickleball Trips | The Pickleball Passport',
  description:
    'Nine-day pickleball trips to Thailand with coached sessions and five-star hotels. Next departure: Bangkok and Chiang Mai, Jan 14 to 22, 2027.',
  openGraph: {
    title: 'Upcoming Pickleball Trips | The Pickleball Passport',
    description:
      'Curated pickleball travel experiences across Thailand, Bali, Vietnam, Malaysia, and Japan.',
    url: 'https://www.thepickleballpassport.org/trips',
    siteName: 'The Pickleball Passport',
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thepickleballpassport.org/trips',
  },
};

export default function TripsPage() {
  return <Suspense><TripsListingPage /></Suspense>;
}
