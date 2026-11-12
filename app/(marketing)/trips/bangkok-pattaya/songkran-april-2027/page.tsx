import { Metadata } from 'next';
import { SongkranAprilPage } from './songkran-april-page';
import { metadataFor } from '@/lib/seo/indexable-pages';

export const metadata: Metadata = {
  ...metadataFor('/trips/bangkok-pattaya/songkran-april-2027'),
  robots: { index: false, follow: true },
  keywords: [
    'Songkran Thailand',
    'Wan Lai Pattaya',
    'pickleball trip Thailand',
    'Bangkok water festival',
    'Songkran 2027',
    'Bangkok pickleball',
    'Pattaya pickleball',
  ],
};

export default function Page() {
  return <SongkranAprilPage />;
}
