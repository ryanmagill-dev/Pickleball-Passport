import { Suspense, type ReactNode } from "react";
import type { Metadata } from "next";
import localFont from "next/font/local";
import { MaybeClerk } from "@/components/providers/maybe-clerk";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";

// ClerkProvider works with static pages when NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY
// is available as a build env var. No force-dynamic needed.
import { Providers } from "./providers";
import { Header } from "@/components/marketing/header";
import { Footer } from "@/components/marketing/footer";
import { AffiliateTracker } from "@/components/affiliate-tracker";
import { GoogleTranslateWidget } from "@/components/marketing/google-translate-widget";
import { isClerkEnabled } from "@/lib/auth/clerk-enabled";
import { gaMeasurementId } from "@/lib/analytics/ga";
import { GaInteractions } from "@/components/google-analytics";
import { absoluteShareUrl, defaultShareMetadata } from "@/lib/seo/share-image";

/**
 * Pickleball Passport - Official Brand Fonts
 *
 * Primary Heading Font: Nunito Sans (Google Fonts alternative to Proxima Nova)
 * Body Font: Montserrat
 *
 * Brand Kit by: inahsempire.social
 */

// Self-hosted variable fonts. next/font/google downloads from Google at build
// time, and Turbopack fails when Google returns extensionless font URLs.
const nunitoSans = localFont({
  src: "./fonts/nunito-sans-latin.woff2",
  variable: "--font-nunito-sans",
  display: "swap",
  weight: "200 1000",
});

const montserrat = localFont({
  src: "./fonts/montserrat-latin.woff2",
  variable: "--font-montserrat",
  display: "swap",
  weight: "100 900",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.thepickleballpassport.org'),
  title: "The Pickleball Passport | Premier Pickleball Travel in Thailand",
  description: "Where Pickleball Meets Exceptional Wellness and Adventure in Thailand",
  ...defaultShareMetadata,
  verification: {
    google: "TqBXzhNGDQHJPailnK5a9YMcSDB34Vr8lP_997AIQgg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const gaId = gaMeasurementId();

  // Organization JSON-LD Schema for SEO
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'The Pickleball Passport',
    url: 'https://thepickleballpassport.org',
    image: absoluteShareUrl('homepage'),
    logo: 'https://www.thepickleballpassport.org/logo.png',
    description: 'Premier wellness and pickleball travel experiences in Thailand.',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+1-512-564-8522',
      contactType: 'Customer Service',
      email: 'hello@thepickleballpassport.org',
      availableLanguage: ['English'],
    },
    sameAs: [
      'https://www.facebook.com/profile.php?id=61588121918620',
      'https://www.instagram.com/pickleball.passport',
      'https://www.linkedin.com/in/jaron-shoptaugh-ab675574/',
    ],
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'TH',
      addressLocality: 'Bangkok',
    },
  };

  const page = (
      <html lang="en">
        <head>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
          />
        </head>
        <body
          className={`${montserrat.variable} ${nunitoSans.variable} font-sans antialiased`}
        >
          <Providers>
            <AffiliateTracker />
            <GoogleTranslateWidget />
            <div className="flex flex-col min-h-screen">
              <Header />
              <main className="flex-1">{children}</main>
              <Footer />
            </div>
          </Providers>
          <Analytics />
          <SpeedInsights />
          {gaId ? (
            <>
              <GoogleAnalytics gaId={gaId} />
              <GaInteractions />
            </>
          ) : null}
        </body>
      </html>
  );

  // Clerk loads only on account and checkout routes. Marketing pages render immediately.
  return (
    <Suspense fallback={null}>
      <MaybeClerk enabled={isClerkEnabled}>{page}</MaybeClerk>
    </Suspense>
  );
}
