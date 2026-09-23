import { Metadata } from 'next';
import { February18Page } from './february-18-page';

export const metadata: Metadata = {
  title: 'Bangkok + Hua Hin: February 18–26, 2027 | The Pickleball Passport',
  description:
    '9-day pickleball experience through Bangkok and Hua Hin, February 18 to 26, 2027. Our 5-Star Bangkok riverside hotel, Our 5-Star Hua Hin Beachfront Resort, 4 pickleball sessions. $5,500/person.',
  keywords: [
    'pickleball trip Thailand',
    'pickleball travel',
    'Bangkok pickleball',
    'Hua Hin pickleball',
    'February 2027 Thailand trip',
  ],
  openGraph: {
    title: 'Bangkok + Hua Hin: February 18–26, 2027 | The Pickleball Passport',
    description:
      '9 days across Bangkok and Hua Hin, February 18 to 26, 2027. Coached pickleball, five-star accommodation. $5,500/person.',
    url: 'https://www.thepickleballpassport.org/trips/bangkok-hua-hin/february-18-2027',
    siteName: 'The Pickleball Passport',
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thepickleballpassport.org/trips/bangkok-hua-hin/february-18-2027',
  },
};

export default function Page() {
  return <February18Page />;
}
