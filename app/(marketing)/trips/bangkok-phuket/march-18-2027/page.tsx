import { Metadata } from 'next';
import { March18Page } from './march-18-page';
import { metadataFor } from '@/lib/seo/indexable-pages';

export const metadata: Metadata = {
  ...metadataFor('/trips/bangkok-phuket/march-18-2027'),
  robots: { index: false, follow: true },
  keywords: [
    'pickleball trip Thailand',
    'pickleball travel',
    'Bangkok pickleball',
    'Phuket pickleball',
    'March 2027 Thailand trip',
  ],
};

export default function Page() {
  return <March18Page />;
}
