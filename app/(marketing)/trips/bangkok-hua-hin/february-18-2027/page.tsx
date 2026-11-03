import { Metadata } from 'next';
import { February18Page } from './february-18-page';
import { metadataFor } from '@/lib/seo/indexable-pages';

export const metadata: Metadata = {
  ...metadataFor('/trips/bangkok-hua-hin/february-18-2027'),
  keywords: [
    'pickleball trip Thailand',
    'pickleball travel',
    'Bangkok pickleball',
    'Hua Hin pickleball',
    'February 2027 Thailand trip',
  ],
};

export default function Page() {
  return <February18Page />;
}
