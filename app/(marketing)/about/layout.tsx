import type { Metadata } from 'next';
import { metadataFor } from '@/lib/seo/indexable-pages';

// /about/page.tsx is a client component, so the title lives here.
export const metadata: Metadata = metadataFor('/about');

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
