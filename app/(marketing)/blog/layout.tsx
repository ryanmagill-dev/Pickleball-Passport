/**
 * Blog Layout
 * Story 12-3: Blog Posts System
 *
 * Provides base SEO metadata for the blog section.
 * Individual post pages will override with dynamic metadata.
 */

import { Metadata } from 'next';
import { metadataFor } from '@/lib/seo/indexable-pages';

export const metadata: Metadata = metadataFor('/blog');

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
