import { Suspense } from 'react';
import { Metadata } from 'next';
import { TripsListingPage } from './trips-listing-page';
import { shareImage } from '@/lib/seo/share-image';

const tripsDescription =
  'Nine-day pickleball trips to Thailand with coached sessions and five-star hotels. 2027 routes: Bangkok + Chiang Mai in January, Bangkok + Hua Hin in February, Bangkok + Phuket in March, and Bangkok + Pattaya for Songkran in April.';

export const metadata: Metadata = {
  title: 'Upcoming Pickleball Trips | The Pickleball Passport',
  description: tripsDescription,
  openGraph: {
    title: 'Upcoming Pickleball Trips | The Pickleball Passport',
    description: tripsDescription,
    url: 'https://www.thepickleballpassport.org/trips',
    siteName: 'The Pickleball Passport',
    images: [shareImage('trips')],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Upcoming Pickleball Trips | The Pickleball Passport',
    description: tripsDescription,
    images: [shareImage('trips')],
  },
  alternates: {
    canonical: 'https://www.thepickleballpassport.org/trips',
  },
};

export default function TripsPage() {
  return <Suspense><TripsListingPage /></Suspense>;
}
