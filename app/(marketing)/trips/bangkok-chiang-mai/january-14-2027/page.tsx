import { Metadata } from 'next';
import { January14Page } from './january-14-page';
import { absoluteShareUrl, shareImage } from '@/lib/seo/share-image';

const janTripJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TouristTrip',
  name: 'Bangkok + Chiang Mai Pickleball Trip, January 14 to 22, 2027',
  description:
    '9 days in Bangkok and Chiang Mai with four coached pickleball sessions, five-star hotels and Elephant Nature Park.',
  url: 'https://www.thepickleballpassport.org/trips/bangkok-chiang-mai/january-14-2027',
  image: absoluteShareUrl('chiangMai'),
  touristType: 'Recreational pickleball players',
  provider: {
    '@type': 'Organization',
    name: 'The Pickleball Passport',
    url: 'https://www.thepickleballpassport.org',
  },
  offers: {
    '@type': 'Offer',
    price: '5500',
    priceCurrency: 'USD',
    availability: 'https://schema.org/LimitedAvailability',
    url: 'https://www.thepickleballpassport.org/trips/bangkok-chiang-mai/january-14-2027',
  },
};

export const metadata: Metadata = {
  title: { absolute: 'Thailand Pickleball Trip, Jan 2027: Bangkok + Chiang Mai' },
  description:
    '9 days in Bangkok and Chiang Mai, Jan 14 to 22, 2027: four coached pickleball sessions, five-star hotels, Elephant Nature Park. $5,500 per person.',
  keywords: [
    'pickleball trip Thailand January 2027',
    'Bangkok Chiang Mai pickleball',
    'Phuket extension pickleball trip',
    'The Pickleball Passport January',
    'Thailand pickleball travel',
  ],
  openGraph: {
    title: 'Thailand Pickleball Trip, Jan 2027: Bangkok + Chiang Mai',
    description:
      '9 days in Bangkok and Chiang Mai, Jan 14 to 22, 2027: four coached pickleball sessions, five-star hotels, Elephant Nature Park. $5,500 per person.',
    url: 'https://www.thepickleballpassport.org/trips/bangkok-chiang-mai/january-14-2027',
    siteName: 'The Pickleball Passport',
    images: [shareImage('chiangMai')],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Thailand Pickleball Trip, Jan 2027: Bangkok + Chiang Mai',
    description:
      '9 days in Bangkok and Chiang Mai, Jan 14 to 22, 2027: four coached pickleball sessions, five-star hotels, Elephant Nature Park. $5,500 per person.',
    images: [shareImage('chiangMai')],
  },
  alternates: {
    canonical: 'https://www.thepickleballpassport.org/trips/bangkok-chiang-mai/january-14-2027',
  },
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(janTripJsonLd) }}
      />
      <January14Page />
    </>
  );
}
