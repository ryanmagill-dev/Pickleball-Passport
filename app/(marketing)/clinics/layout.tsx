import type { Metadata } from 'next';
import { ClinicWeekJsonLd } from '@/components/marketing/clinic/clinic-week-json-ld';
import { metadataFor } from '@/lib/seo/indexable-pages';

// /clinics/page.tsx is a client component, so the title lives here.
export const metadata: Metadata = metadataFor('/clinics');

export default function ClinicsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ClinicWeekJsonLd />
      {children}
    </>
  );
}
