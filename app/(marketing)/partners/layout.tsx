import type { Metadata } from 'next';
import { shareImage } from '@/lib/seo/share-image';

export const metadata: Metadata = {
  title: 'Our Partners | The Pickleball Passport',
  description: 'Meet the creators, pros, and personalities who partner with The Pickleball Passport to bring world-class pickleball travel to the community.',
  keywords: ['pickleball partners', 'pickleball creators', 'pickleball influencers', 'pickleball travel partners'],
  openGraph: {
    title: 'Our Partners | The Pickleball Passport',
    description: 'Meet the creators, pros, and personalities who partner with The Pickleball Passport.',
    url: 'https://thepickleballpassport.org/partners',
    siteName: 'The Pickleball Passport',
    images: [shareImage('trips')],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Our Partners | The Pickleball Passport',
    description: 'Meet the creators, pros, and personalities who partner with The Pickleball Passport.',
    images: [shareImage('trips')],
    site: '@PickleballPass',
    creator: '@PickleballPass',
  },
  alternates: {
    canonical: 'https://thepickleballpassport.org/partners',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PartnersLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
