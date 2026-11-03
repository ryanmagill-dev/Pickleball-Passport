import type { Metadata } from 'next';
import { metadataFor } from '@/lib/seo/indexable-pages';

export const metadata: Metadata = {
  ...metadataFor('/apply'),
  keywords: ['apply', 'pickleball trip', 'pickleball travel application', 'Thailand pickleball trip'],
};

export default function ApplyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
