import { Metadata } from 'next';
import { BangkokChiangMaiPage } from './trip-detail-page';
import { metadataFor } from '@/lib/seo/indexable-pages';

export const metadata: Metadata = {
  ...metadataFor('/trips/bangkok-chiang-mai'),
  keywords: [
    'pickleball trip Thailand',
    'Chiang Mai pickleball',
    'Bangkok pickleball',
    'BokBok Pickleball',
    '9 day Thailand trip',
  ],
};

export default function Page() {
  return <BangkokChiangMaiPage />;
}
