import { Metadata } from 'next';
import { NewsletterPage } from './newsletter-page';
import { metadataFor } from '@/lib/seo/indexable-pages';

export const metadata: Metadata = metadataFor('/newsletter');

export default function Page() {
  return <NewsletterPage />;
}
