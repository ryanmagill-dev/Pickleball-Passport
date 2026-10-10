import { HeroSection } from '@/components/marketing/hero-section';
import { BrandPillars } from '@/components/marketing/brand-pillars';
import { WhyThailand } from '@/components/marketing/why-thailand';
import { SafetySection } from '@/components/marketing/safety-section';
import { ConciergeSection } from '@/components/marketing/concierge-section';
import { UpcomingEvents } from '@/components/marketing/upcoming-events';
import { getHomeEvents } from '@/lib/data/events';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Your Personal Pickleball Concierge in Thailand | The Pickleball Passport',
  description:
    'We vet every court, handle every detail, and make sure you show up, play safe, and actually enjoy it. Pickleball travel to Thailand from $169.',
  keywords: [
    'pickleball',
    'pickleball travel',
    'Thailand',
    'pickleball retreat',
    'pickleball vacation',
    'pickleball concierge',
    'pickleball trips Thailand',
  ],
  openGraph: {
    title: 'The Pickleball Passport: Your Personal Pickleball Concierge in Thailand',
    description:
      'We vet every court, handle every detail, and make sure you show up, play safe, and actually enjoy it.',
    url: 'https://www.thepickleballpassport.org',
    siteName: 'The Pickleball Passport',
    images: [
      {
        url: '/og-images/homepage.jpg',
        width: 1200,
        height: 630,
        alt: 'The Pickleball Passport: Pickleball Concierge in Thailand',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Pickleball Passport: Your Personal Pickleball Concierge in Thailand',
    description:
      'We vet every court, handle every detail, and make sure you show up, play safe, and actually enjoy it.',
    images: ['/og-images/homepage.jpg'],
    site: '@PickleballPass',
    creator: '@PickleballPass',
  },
  alternates: {
    canonical: 'https://www.thepickleballpassport.org',
  },
  robots: {
    index: true,
    follow: true,
  },
};

// Filtered at build/render time; UpcomingEvents re-checks in the browser
const homeEvents = getHomeEvents(Date.now());

export default function Home() {
  return (
    <>
      <HeroSection />
      <BrandPillars />
      <UpcomingEvents events={homeEvents} />
      <WhyThailand />
      <SafetySection />
      <ConciergeSection />
    </>
  );
}
