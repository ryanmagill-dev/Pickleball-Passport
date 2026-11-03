import type { Metadata } from 'next';
import { metadataFor } from '@/lib/seo/indexable-pages';

export const metadata: Metadata = {
  ...metadataFor('/partners'),
  keywords: ['pickleball partners', 'pickleball creators', 'pickleball influencers', 'pickleball travel partners'],
};

export default function PartnersLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
