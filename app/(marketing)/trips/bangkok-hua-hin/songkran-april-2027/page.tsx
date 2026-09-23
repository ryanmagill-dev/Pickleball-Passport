import { Metadata } from 'next';
import { SongkranAprilPage } from './songkran-april-page';

export const metadata: Metadata = {
  title: 'Songkran in Bangkok: April 8–16, 2027 | The Pickleball Passport',
  description:
    '9 days built around Thailand’s New Year. Three days of coached pickleball on the coast in Hua Hin, then back into Bangkok for Songkran, the biggest water festival on earth. $5,500/person.',
  keywords: [
    'Songkran Thailand',
    'pickleball trip Thailand',
    'Bangkok water festival',
    'Songkran 2027',
    'Bangkok pickleball',
    'Hua Hin pickleball',
  ],
  openGraph: {
    title: 'Songkran in Bangkok: April 8–16, 2027 | The Pickleball Passport',
    description:
      'Coached pickleball in Bangkok and Hua Hin, then Songkran, Thailand’s New Year water festival, in Bangkok. $5,500/person.',
    url: 'https://www.thepickleballpassport.org/trips/bangkok-hua-hin/songkran-april-2027',
    siteName: 'The Pickleball Passport',
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thepickleballpassport.org/trips/bangkok-hua-hin/songkran-april-2027',
  },
};

export default function Page() {
  return <SongkranAprilPage />;
}
