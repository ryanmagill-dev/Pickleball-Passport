import type { Metadata } from 'next'
import { metadataFor } from '@/lib/seo/indexable-pages'

export const metadata: Metadata = metadataFor('/contact')

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {/* Schema.org ContactPage structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ContactPage',
            name: 'Contact The Pickleball Passport',
            description:
              'Contact page for The Pickleball Passport - pickleball travel packages in Thailand',
            url: 'https://thepickleballpassport.org/contact',
            mainEntity: {
              '@type': 'Organization',
              name: 'The Pickleball Passport',
              url: 'https://thepickleballpassport.org',
              email: 'hello@thepickleballpassport.org',
              telephone: '+1-555-123-4567',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Bangkok',
                addressCountry: 'Thailand',
              },
              contactPoint: {
                '@type': 'ContactPoint',
                telephone: '+1-555-123-4567',
                contactType: 'Customer Service',
                email: 'hello@thepickleballpassport.org',
                availableLanguage: ['English'],
                hoursAvailable: {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: [
                    'Monday',
                    'Tuesday',
                    'Wednesday',
                    'Thursday',
                    'Friday',
                  ],
                  opens: '09:00',
                  closes: '18:00',
                },
              },
            },
          }),
        }}
      />
      {children}
    </>
  )
}
