import { Metadata } from 'next';
import { SongkranAprilPage } from './songkran-april-page';

export const metadata: Metadata = {
  title: 'Songkran + Wan Lai: April 12–20, 2027 | The Pickleball Passport',
  description:
    '9 days built around Thailand’s New Year. Official Songkran in Bangkok April 13-15, then coached pickleball and the Wan Lai finale in Pattaya through April 19. $5,500/person.',
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
    title: 'Songkran + Wan Lai: April 12–20, 2027 | The Pickleball Passport',
    description:
      'Official Songkran in Bangkok, then coached pickleball and the Wan Lai finale in Pattaya. $5,500/person.',
    url: 'https://www.thepickleballpassport.org/trips/bangkok-pattaya/songkran-april-2027',
    siteName: 'The Pickleball Passport',
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thepickleballpassport.org/trips/bangkok-pattaya/songkran-april-2027',
  },
};

export default function Page() {
  return <SongkranAprilPage />;
}
