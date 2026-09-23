import { Metadata } from 'next';
import { March18Page } from './march-18-page';

export const metadata: Metadata = {
  title: 'Bangkok + Phuket: March 18–26, 2027 | The Pickleball Passport',
  description:
    '9-day pickleball experience through Bangkok and Phuket, March 18 to 26, 2027. Bangkok riverside hotel, beachfront resort on Bang Tao Beach, Phang Nga Bay speedboat day, 4 pickleball sessions. $5,500/person.',
  keywords: [
    'pickleball trip Thailand',
    'pickleball travel',
    'Bangkok pickleball',
    'Phuket pickleball',
    'March 2027 Thailand trip',
  ],
  openGraph: {
    title: 'Bangkok + Phuket: March 18–26, 2027 | The Pickleball Passport',
    description:
      '9 days across Bangkok and Phuket, March 18 to 26, 2027. Coached pickleball, Phang Nga Bay by private speedboat, beachfront resort. $5,500/person.',
    url: 'https://www.thepickleballpassport.org/trips/bangkok-phuket/march-18-2027',
    siteName: 'The Pickleball Passport',
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thepickleballpassport.org/trips/bangkok-phuket/march-18-2027',
  },
};

export default function Page() {
  return <March18Page />;
}
