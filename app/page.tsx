import { HeroSection } from '@/components/marketing/hero-section';
import { NextDepartureBand } from '@/components/marketing/january/next-departure-band';
import { BrandPillars } from '@/components/marketing/brand-pillars';
import { WhyThailand } from '@/components/marketing/why-thailand';
import { SafetySection } from '@/components/marketing/safety-section';
import { ConciergeSection } from '@/components/marketing/concierge-section';
import { UpcomingEvents } from '@/components/marketing/upcoming-events';
import { getHomeEvents } from '@/lib/data/events';
import type { Metadata } from 'next';
import { metadataFor } from '@/lib/seo/indexable-pages';

export const metadata: Metadata = {
  ...metadataFor('/'),
  keywords: [
    'pickleball',
    'pickleball travel',
    'Thailand',
    'pickleball retreat',
    'pickleball vacation',
    'pickleball concierge',
    'pickleball trips Thailand',
  ],
};

// Filtered at build/render time; UpcomingEvents re-checks in the browser
const homeEvents = getHomeEvents(Date.now());

export default function Home() {
  return (
    <>
      <HeroSection />
      <NextDepartureBand />
      <BrandPillars />
      <UpcomingEvents events={homeEvents} />
      <WhyThailand />
      <SafetySection />
      <ConciergeSection />
    </>
  );
}
