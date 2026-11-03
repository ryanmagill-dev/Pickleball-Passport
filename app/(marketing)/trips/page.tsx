import { Suspense } from 'react';
import { Metadata } from 'next';
import { TripsListingPage } from './trips-listing-page';
import { metadataFor } from '@/lib/seo/indexable-pages';

export const metadata: Metadata = metadataFor('/trips');

export default function TripsPage() {
  return <Suspense><TripsListingPage /></Suspense>;
}
