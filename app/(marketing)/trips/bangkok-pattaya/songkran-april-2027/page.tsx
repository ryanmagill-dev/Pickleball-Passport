import { Metadata } from 'next';
import { SongkranAprilPage } from './songkran-april-page';
import { shareImage } from '@/lib/seo/share-image';

export const metadata: Metadata = {
  title: 'Songkran + Wan Lai: April 12 to 20, 2027 | The Pickleball Passport',
  description:
    '9 days built around Thailand’s New Year. Official Songkran in Bangkok April 13-15, then coached pickleball and the Wan Lai finale in Pattaya through April 19. $7,000/person.',
  keywords: [
    'Songkran Thailand',
    'Wan Lai Pattaya',
    'pickleball trip Thailand',
    'Bangkok water festival',
    'Songkran 2027',
    'Bangkok pickleball',
    'Pattaya pickleball',
  ],
  openGraph: {
    title: 'Songkran + Wan Lai: April 12 to 20, 2027 | The Pickleball Passport',
    description:
      'Official Songkran in Bangkok, then coached pickleball and the Wan Lai finale in Pattaya. $7,000/person.',
    url: 'https://www.thepickleballpassport.org/trips/bangkok-pattaya/songkran-april-2027',
    siteName: 'The Pickleball Passport',
    images: [shareImage('trips')],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Songkran + Wan Lai: April 12 to 20, 2027 | The Pickleball Passport',
    description:
      'Official Songkran in Bangkok, then coached pickleball and the Wan Lai finale in Pattaya. $7,000/person.',
    images: [shareImage('trips')],
  },
  alternates: {
    canonical: 'https://www.thepickleballpassport.org/trips/bangkok-pattaya/songkran-april-2027',
  },
};

export default function Page() {
  return <SongkranAprilPage />;
}
