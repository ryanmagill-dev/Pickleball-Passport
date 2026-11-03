import { Metadata } from 'next';
import { January14Page } from './january-14-page';
import { metadataFor } from '@/lib/seo/indexable-pages';
import { absoluteShareUrl } from '@/lib/seo/share-image';

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
  ...metadataFor('/trips/bangkok-chiang-mai/january-14-2027'),
  keywords: [
    'pickleball trip Thailand January 2027',
    'Bangkok Chiang Mai pickleball',
    'Phuket extension pickleball trip',
    'The Pickleball Passport January',
    'Thailand pickleball travel',
  ],
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
