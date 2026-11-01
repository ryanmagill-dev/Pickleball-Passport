import { Metadata } from 'next';
import { BangkokChiangMaiPage } from './trip-detail-page';
import { shareImage } from '@/lib/seo/share-image';

export const metadata: Metadata = {
  title: { absolute: 'Bangkok + Chiang Mai Pickleball Vacation: 9 Days in Thailand' },
  description:
    'A 9-day pickleball vacation in Bangkok and Chiang Mai: coached sessions, five-star hotels, a domestic flight, Elephant Nature Park. Next departure Jan 14, 2027.',
  keywords: [
    'pickleball trip Thailand',
    'Chiang Mai pickleball',
    'Bangkok pickleball',
    'Our 5-Star Chiang Mai Riverside Resort',
    'Bangkok riverside hotel',
    'BokBok Pickleball',
    '9 day Thailand trip',
  ],
  openGraph: {
    title: 'Bangkok + Chiang Mai Pickleball Vacation: 9 Days in Thailand',
    description:
      'A 9-day pickleball vacation in Bangkok and Chiang Mai: coached sessions, five-star hotels, a domestic flight, Elephant Nature Park. Next departure Jan 14, 2027.',
    url: 'https://www.thepickleballpassport.org/trips/bangkok-chiang-mai',
    siteName: 'The Pickleball Passport',
    images: [shareImage('chiangMai')],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bangkok + Chiang Mai Pickleball Vacation: 9 Days in Thailand',
    description:
      'A 9-day pickleball vacation in Bangkok and Chiang Mai: coached sessions, five-star hotels, a domestic flight, Elephant Nature Park. Next departure Jan 14, 2027.',
    images: [shareImage('chiangMai')],
  },
  alternates: {
    canonical: 'https://www.thepickleballpassport.org/trips/bangkok-chiang-mai',
  },
};

export default function Page() {
  return <BangkokChiangMaiPage />;
}
