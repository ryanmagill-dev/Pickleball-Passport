import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Apply for The Pickleball Passport | The Pickleball Passport',
  description: 'Apply for a Pickleball Passport trip to Thailand. Tell us about your trip and our team will follow up with dates, pricing, and next steps.',
  keywords: ['apply', 'pickleball trip', 'pickleball travel application', 'Thailand pickleball trip'],
  openGraph: {
    title: 'Apply for The Pickleball Passport',
    description: 'Apply for a Pickleball Passport trip to Thailand. Tell us about your trip and our team will follow up.',
    url: 'https://thepickleballpassport.org/apply',
    siteName: 'The Pickleball Passport',
    images: [
      {
        url: '/og-images/apply.jpg',
        width: 1200,
        height: 630,
        alt: 'Apply for The Pickleball Passport',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Apply for The Pickleball Passport',
    description: 'Apply for a Pickleball Passport trip to Thailand. Tell us about your trip and our team will follow up.',
    images: ['/og-images/apply.jpg'],
    site: '@PickleballPass',
    creator: '@PickleballPass',
  },
  alternates: {
    canonical: 'https://thepickleballpassport.org/apply',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ApplyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
