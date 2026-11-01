import type { Metadata } from 'next';

// /about/page.tsx is a client component, so the title lives here.
export const metadata: Metadata = {
  title: { absolute: 'About The Pickleball Passport: Two Cousins, One Bangkok Base' },
  description:
    'Meet Jaron Shoptaugh and Ryan Magill, the cousins behind The Pickleball Passport. Based in Bangkok, they vet every court, hotel, and restaurant on our trips.',
  alternates: { canonical: 'https://www.thepickleballpassport.org/about' },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
