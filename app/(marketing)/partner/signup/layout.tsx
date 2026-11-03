import type { Metadata } from 'next';
import { metadataFor } from '@/lib/seo/indexable-pages';

export const metadata: Metadata = {
  ...metadataFor('/partner/signup'),
  keywords: ['become a partner', 'partner signup', 'pickleball partner registration', 'earn rewards', 'referral program signup'],
};

// Render on request: this page uses Clerk hooks, which can't prerender when Clerk is disabled
export const dynamic = 'force-dynamic';

export default function PartnerSignupLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
