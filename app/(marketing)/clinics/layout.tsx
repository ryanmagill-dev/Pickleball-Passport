import type { Metadata } from 'next';
import { ClinicWeekJsonLd } from '@/components/marketing/clinic/clinic-week-json-ld';

// /clinics/page.tsx is a client component, so the title lives here.
export const metadata: Metadata = {
  title: { absolute: 'Bangkok Pickleball Clinic Week, Nov 2 to 5, 2026 | The Pickleball Passport' },
  description:
    'Four pickleball sessions in Bangkok, Nov 2 to 5, 2026: mindset seminars with Coach Travis Rhea (Mind Your Pickle) and coached open play at Arise, Papaya, and Pick A Court. 6 spots. $169 to $299.',
  alternates: { canonical: 'https://www.thepickleballpassport.org/clinics' },
  openGraph: {
    title: 'Bangkok Pickleball Clinic Week, Nov 2 to 5, 2026',
    description:
      'Mindset seminars with Coach Travis Rhea plus coached open play at three Bangkok venues. 6 spots. Two-Day Pass $169 or Full Clinic Week $299.',
    url: 'https://www.thepickleballpassport.org/clinics',
    images: ['https://www.thepickleballpassport.org/images/posters/tpp-aerial-0467-poster.jpg'],
    type: 'website',
  },
};

export default function ClinicsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ClinicWeekJsonLd />
      {children}
    </>
  );
}
