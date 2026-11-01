import { Metadata } from 'next';
import { NewsletterPage } from './newsletter-page';
import { shareImage } from '@/lib/seo/share-image';

export const metadata: Metadata = {
  title: 'Newsletter | The Pickleball Passport',
  description:
    'Stay in the loop with trip announcements, new destinations, exclusive offers, and stories from the Pickleball Passport community.',
  openGraph: {
    title: 'Newsletter | The Pickleball Passport',
    description:
      'Stay in the loop with trip announcements, new destinations, exclusive offers, and stories from the Pickleball Passport community.',
    url: 'https://www.thepickleballpassport.org/newsletter',
    siteName: 'The Pickleball Passport',
    images: [shareImage('trips')],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    images: [shareImage('trips')],
  },
  alternates: {
    canonical: 'https://www.thepickleballpassport.org/newsletter',
  },
};

export default function Page() {
  return <NewsletterPage />;
}
