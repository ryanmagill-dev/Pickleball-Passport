import { Metadata } from 'next';
import { March18Page } from './march-18-page';
import { shareImage } from '@/lib/seo/share-image';

export const metadata: Metadata = {
  title: 'Bangkok + Phuket: March 18 to 26, 2027 | The Pickleball Passport',
  description:
    '9-day pickleball experience through Bangkok and Phuket, March 18 to 26, 2027. Bangkok riverside hotel, beachfront resort on Bang Tao Beach, Phang Nga Bay speedboat day, 4 pickleball sessions. $7,000/person.',
  keywords: [
    'pickleball trip Thailand',
    'pickleball travel',
    'Bangkok pickleball',
    'Phuket pickleball',
    'March 2027 Thailand trip',
  ],
  openGraph: {
    title: 'Bangkok + Phuket: March 18 to 26, 2027 | The Pickleball Passport',
    description:
      '9 days across Bangkok and Phuket, March 18 to 26, 2027. Coached pickleball, Phang Nga Bay by private speedboat, beachfront resort. $7,000/person.',
    url: 'https://www.thepickleballpassport.org/trips/bangkok-phuket/march-18-2027',
    siteName: 'The Pickleball Passport',
    images: [shareImage('phuket')],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bangkok + Phuket: March 18 to 26, 2027 | The Pickleball Passport',
    description:
      '9 days across Bangkok and Phuket, March 18 to 26, 2027. Coached pickleball, Phang Nga Bay by private speedboat, beachfront resort. $7,000/person.',
    images: [shareImage('phuket')],
  },
  alternates: {
    canonical: 'https://www.thepickleballpassport.org/trips/bangkok-phuket/march-18-2027',
  },
};

export default function Page() {
  return <March18Page />;
}
