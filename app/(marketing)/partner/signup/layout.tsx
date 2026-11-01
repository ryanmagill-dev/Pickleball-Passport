import type { Metadata } from 'next';
import { shareImage } from '@/lib/seo/share-image';

export const metadata: Metadata = {
  title: 'Become a Partner | The Pickleball Passport',
  description: 'Sign up to become a partner with The Pickleball Passport. Earn rewards, free trips, and exclusive benefits while offering your members transformational wellness experiences in Thailand.',
  keywords: ['become a partner', 'partner signup', 'pickleball partner registration', 'earn rewards', 'referral program signup'],
  openGraph: {
    title: 'Become a Partner | The Pickleball Passport',
    description: 'Sign up to become a partner and start earning rewards for referring members to transformational wellness experiences.',
    url: 'https://thepickleballpassport.org/partner/signup',
    siteName: 'The Pickleball Passport',
    images: [shareImage('trips')],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Become a Partner | The Pickleball Passport',
    description: 'Sign up to become a partner and start earning rewards for referring members to transformational wellness experiences.',
    images: [shareImage('trips')],
    site: '@PickleballPass',
    creator: '@PickleballPass',
  },
  alternates: {
    canonical: 'https://thepickleballpassport.org/partner/signup',
  },
  robots: {
    index: true,
    follow: true,
  },
};

// Render on request: this page uses Clerk hooks, which can't prerender when Clerk is disabled
export const dynamic = 'force-dynamic';

export default function PartnerSignupLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
