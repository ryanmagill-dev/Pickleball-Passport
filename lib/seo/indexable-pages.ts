import type { Metadata } from 'next'
import { shareImage, type ShareImage, type ShareImageKey } from '@/lib/seo/share-image'

/**
 * Indexable public pages. Each route has one title and one description.
 * openGraph and twitter use those same strings. scripts/check-unique-metadata.ts
 * fails the build check when two of these routes share a title or description.
 *
 * Canonical URLs are the ones already published. Do not "fix" the host.
 */

type PageImage = ShareImageKey | Pick<ShareImage, 'url' | 'alt'>

export type IndexablePage = {
  path: string
  /** File that must call metadataFor(path). */
  source: string
  title: string
  description: string
  canonical: string
  image: PageImage
  ogType?: 'website' | 'article'
}

const CLINIC_IMAGE = {
  url: 'https://www.thepickleballpassport.org/images/posters/tpp-aerial-0467-poster.jpg',
  alt: 'Aerial view of Bangkok, The Pickleball Passport clinic week',
}

export const INDEXABLE_PAGES: IndexablePage[] = [
  {
    path: '/',
    source: 'app/page.tsx',
    title: 'Pickleball Trips in Thailand | The Pickleball Passport',
    description:
      'Pickleball trips in Thailand with vetted courts. We handle the details so you show up and play. Next: Bangkok and Chiang Mai, Jan 14 to 22, 2027.',
    canonical: 'https://www.thepickleballpassport.org',
    image: 'homepage',
  },
  {
    path: '/trips',
    source: 'app/(marketing)/trips/page.tsx',
    title: 'Upcoming Pickleball Trips | The Pickleball Passport',
    description:
      'Open pickleball trips: Koh Chang on December 9 to 17, 2026, Bangkok and Chiang Mai in January 2027, and Bangkok and Hua Hin in February 2027.',
    canonical: 'https://www.thepickleballpassport.org/trips',
    image: 'trips',
  },
  {
    path: '/trips/calendar',
    source: 'app/(marketing)/trips/calendar/layout.tsx',
    title: 'Pickleball Trip Calendar | The Pickleball Passport',
    description:
      'Open departure dates: Koh Chang on December 9 to 17, 2026, Bangkok and Chiang Mai on January 14, 2027, and Bangkok plus Hua Hin in February.',
    canonical: 'https://www.thepickleballpassport.org/trips/calendar',
    image: 'trips',
  },
  {
    path: '/trips/bangkok-chiang-mai',
    source: 'app/(marketing)/trips/bangkok-chiang-mai/page.tsx',
    title: 'Bangkok + Chiang Mai Trip | The Pickleball Passport',
    description:
      'A nine-day Bangkok and Chiang Mai pickleball trip with coached sessions in both cities, a domestic flight, and a visit to Elephant Nature Park.',
    canonical: 'https://www.thepickleballpassport.org/trips/bangkok-chiang-mai',
    image: 'chiangMai',
  },
  {
    path: '/trips/bangkok-chiang-mai/january-14-2027',
    source: 'app/(marketing)/trips/bangkok-chiang-mai/january-14-2027/page.tsx',
    title: 'Bangkok + Chiang Mai, Jan 2027 | The Pickleball Passport',
    description:
      'January 14 to 22, 2027: nine days in Bangkok and Chiang Mai with coached pickleball. The only date with a Phuket extension. $5,500 per person.',
    canonical: 'https://www.thepickleballpassport.org/trips/bangkok-chiang-mai/january-14-2027',
    image: 'chiangMai',
  },
  {
    path: '/trips/bangkok-hua-hin/february-18-2027',
    source: 'app/(marketing)/trips/bangkok-hua-hin/february-18-2027/page.tsx',
    title: 'Bangkok + Hua Hin, Feb 2027 | The Pickleball Passport',
    description:
      'February 18 to 26, 2027: four nights in Bangkok, then four nights on the Gulf in Hua Hin. Coached pickleball in both cities. $7,000 per person.',
    canonical: 'https://www.thepickleballpassport.org/trips/bangkok-hua-hin/february-18-2027',
    image: 'trips',
  },
  {
    path: '/clinics',
    source: 'app/(marketing)/clinics/layout.tsx',
    title: 'Bangkok Clinic Week, Nov 2026 | The Pickleball Passport',
    description:
      'November 2 to 5, 2026 in Bangkok: mindset sessions with Coach Travis Rhea, coached open play, and a Thursday mini tournament. Six spots only.',
    canonical: 'https://www.thepickleballpassport.org/clinics',
    image: CLINIC_IMAGE,
  },
  {
    path: '/about',
    source: 'app/(marketing)/about/layout.tsx',
    title: 'About the Team in Thailand | The Pickleball Passport',
    description:
      'Meet cousins Jaron Shoptaugh and Ryan Magill. From Colorado to a Bangkok base, they plan the courts, days, and details on every trip together.',
    canonical: 'https://www.thepickleballpassport.org/about',
    image: 'trips',
  },
  {
    path: '/blog',
    source: 'app/(marketing)/blog/layout.tsx',
    title: 'Thailand Pickleball Blog | The Pickleball Passport',
    description:
      'Stories and guides on pickleball travel in Thailand: where to play, when to go, how to plan a trip, and notes from time on the court. Read on.',
    canonical: 'https://www.thepickleballpassport.org/blog',
    image: 'trips',
  },
  {
    path: '/contact',
    source: 'app/(marketing)/contact/layout.tsx',
    title: 'Contact Our Thailand Team | The Pickleball Passport',
    description:
      'Questions about a pickleball trip to Thailand? Email hello@thepickleballpassport.org or call +1 512-564-8522. The Bangkok-based team will help.',
    canonical: 'https://thepickleballpassport.org/contact',
    image: 'trips',
  },
  {
    path: '/apply',
    source: 'app/apply/layout.tsx',
    title: 'Apply for a Thailand Trip | The Pickleball Passport',
    description:
      'Apply for a pickleball trip to Thailand. Tell us who is traveling and which departure you want. The team follows up with dates and next steps.',
    canonical: 'https://thepickleballpassport.org/apply',
    image: 'trips',
  },
  {
    path: '/partners',
    source: 'app/(marketing)/partners/layout.tsx',
    title: 'Our Pickleball Trip Partners | The Pickleball Passport',
    description:
      'Meet the creators, pros, and personalities who partner with The Pickleball Passport to bring pickleball travel in Thailand to their communities.',
    canonical: 'https://thepickleballpassport.org/partners',
    image: 'trips',
  },
  {
    path: '/partner/signup',
    source: 'app/(marketing)/partner/signup/layout.tsx',
    title: 'Thailand Partner Program | The Pickleball Passport',
    description:
      'Apply to partner with The Pickleball Passport. Share Thailand pickleball trips with your community and earn rewards when your guests book a trip.',
    canonical: 'https://thepickleballpassport.org/partner/signup',
    image: 'trips',
  },
  {
    path: '/trust-and-safety',
    source: 'app/(marketing)/trust-and-safety/page.tsx',
    title: 'Trust and Safety in Thailand | The Pickleball Passport',
    description:
      'How each trip is covered: vetted stays, private transport, hosts on the ground in Thailand, and guidance on travel insurance before you fly.',
    canonical: 'https://www.thepickleballpassport.org/trust-and-safety',
    image: 'trips',
  },
  {
    path: '/faq',
    source: 'app/(marketing)/faq/layout.tsx',
    title: 'Thailand Pickleball Trip FAQ | The Pickleball Passport',
    description:
      'Search answers on dates, what a trip includes, skill levels, and how booking works for pickleball trips to Thailand with The Pickleball Passport.',
    canonical: 'https://www.thepickleballpassport.org/faq',
    image: 'trips',
  },
  {
    path: '/testimonials',
    source: 'app/(marketing)/testimonials/layout.tsx',
    title: 'Guest Stories from Thailand | The Pickleball Passport',
    description:
      'Stories from guests who played pickleball in Thailand with The Pickleball Passport, including coached sessions and time on and off the court.',
    canonical: 'https://www.thepickleballpassport.org/testimonials',
    image: 'trips',
  },
  {
    path: '/reserve',
    source: 'app/(marketing)/reserve/layout.tsx',
    title: 'Reserve a Discovery Call | The Pickleball Passport',
    description:
      'Pick a time for a discovery call. We walk through the Thailand trips, answer your questions, and help you choose the right 2027 departure date.',
    canonical: 'https://www.thepickleballpassport.org/reserve',
    image: 'trips',
  },
  {
    path: '/custom',
    source: 'app/(marketing)/custom/layout.tsx',
    title: 'Private Group Trip Planning | The Pickleball Passport',
    description:
      'Plan a private pickleball trip, a group buyout, or a corporate event in Thailand. Tell us the group and dates, and the team will follow up soon.',
    canonical: 'https://www.thepickleballpassport.org/custom',
    image: 'trips',
  },
  {
    path: '/refund-policy',
    source: 'app/(marketing)/refund-policy/layout.tsx',
    title: 'Trip Booking Refund Policy | The Pickleball Passport',
    description:
      'If your plans change, a portion of every payment (15-20%, depending on timing and supplier commitments) is non-refundable. No full refund ever.',
    canonical: 'https://www.thepickleballpassport.org/refund-policy',
    image: 'trips',
  },
  {
    path: '/notify',
    source: 'app/(marketing)/notify/layout.tsx',
    title: 'New Thailand Trip Alerts | The Pickleball Passport',
    description:
      'Get an email when new pickleball destinations and departure dates launch in Thailand. Join the list and hear about trips before they fill up.',
    canonical: 'https://www.thepickleballpassport.org/notify',
    image: 'trips',
  },
  {
    path: '/privacy',
    source: 'app/(marketing)/privacy/page.tsx',
    title: 'Privacy Policy for Guests | The Pickleball Passport',
    description:
      'How The Pickleball Passport collects, uses, and protects guest data, including cookies, third-party services, and your GDPR and CCPA rights.',
    canonical: 'https://thepickleballpassport.org/privacy',
    image: 'trips',
  },
  {
    path: '/terms',
    source: 'app/(marketing)/terms/page.tsx',
    title: 'Booking Terms of Service | The Pickleball Passport',
    description:
      'Booking rules, cancellation terms, liability, and how disputes are handled for pickleball trips to Thailand with The Pickleball Passport team.',
    canonical: 'https://www.thepickleballpassport.org/terms',
    image: 'trips',
  },
  {
    path: '/newsletter',
    source: 'app/(marketing)/newsletter/page.tsx',
    title: 'Thailand Trip Newsletter | The Pickleball Passport',
    description:
      'Trip dates, new Thailand departures, and stories from the court. Subscribe for updates from the team at The Pickleball Passport based in Bangkok.',
    canonical: 'https://www.thepickleballpassport.org/newsletter',
    image: 'trips',
  },
  {
    path: '/pickleball-club-retreats',
    source: 'app/(marketing)/pickleball-club-retreats/page.tsx',
    title: 'Club Trip Guide, Thailand | The Pickleball Passport',
    description:
      'A guide for pickleball clubs and coaches hosting private member trips to Thailand: group size, courts, and what the team handles on the ground.',
    canonical: 'https://www.thepickleballpassport.org/pickleball-club-retreats',
    image: 'trips',
    ogType: 'article',
  },
  {
    path: '/thailand-pickleball-calculator',
    source: 'app/(marketing)/thailand-pickleball-calculator/page.tsx',
    title: 'Thailand Trip Cost Calculator | The Pickleball Passport',
    description:
      'Estimate a Thailand pickleball trip budget in THB and USD: court fees, Grab and BTS rides, city pairings, and a DIY trip versus a guided one.',
    canonical: 'https://www.thepickleballpassport.org/thailand-pickleball-calculator',
    image: 'trips',
  },
  {
    path: '/thailand-pickleball-playbook',
    source: 'app/(marketing)/thailand-pickleball-playbook/page.tsx',
    title: 'Thailand Pickleball Playbook | The Pickleball Passport',
    description:
      'Where to play pickleball in Bangkok, Hua Hin, Pattaya, Chiang Mai, and Phuket, plus heat tips, the best seasons, and a nine-day trip rhythm.',
    canonical: 'https://www.thepickleballpassport.org/thailand-pickleball-playbook',
    image: 'trips',
    ogType: 'article',
  },
  {
    path: '/bangkok-pickleball-courts',
    source: 'app/(marketing)/bangkok-pickleball-courts/page.tsx',
    title: 'Bangkok Pickleball Courts | The Pickleball Passport',
    description:
      'A 2026 local guide to pickleball courts in Bangkok: indoor and covered play, BTS access, Grab fares, and how to book games on Reclub and LINE.',
    canonical: 'https://www.thepickleballpassport.org/bangkok-pickleball-courts',
    image: 'trips',
    ogType: 'article',
  },
  {
    path: '/best-time-to-visit-thailand-for-pickleball',
    source: 'app/(marketing)/best-time-to-visit-thailand-for-pickleball/page.tsx',
    title: 'Best Time to Visit Thailand | The Pickleball Passport',
    description:
      'Month-by-month weather for pickleball in Thailand: the cool season, hot season, and rainy season, plus which cities play best in each window.',
    canonical: 'https://www.thepickleballpassport.org/best-time-to-visit-thailand-for-pickleball',
    image: 'trips',
    ogType: 'article',
  },
]

const pagesByPath = new Map(INDEXABLE_PAGES.map((page) => [page.path, page]))

function resolveImage(image: PageImage): ShareImage | Pick<ShareImage, 'url' | 'alt'> {
  return typeof image === 'string' ? shareImage(image) : image
}

export function metadataFor(path: string): Metadata {
  const page = pagesByPath.get(path)
  if (!page) {
    throw new Error(`No indexable metadata registered for ${path}`)
  }

  const images = [resolveImage(page.image)]

  return {
    title: page.title,
    description: page.description,
    openGraph: {
      title: page.title,
      description: page.description,
      url: page.canonical,
      siteName: 'The Pickleball Passport',
      images,
      locale: 'en_US',
      type: page.ogType ?? 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: page.title,
      description: page.description,
      images,
      site: '@PickleballPass',
      creator: '@PickleballPass',
    },
    alternates: {
      canonical: page.canonical,
    },
    robots: {
      index: true,
      follow: true,
    },
  }
}

const FORBIDDEN_WORD = /\b(getaways|escapes|licensed|bilingual)\b/i
const EM_OR_EN_DASH = /[\u2013\u2014]/

export function indexableMetadataErrors(): string[] {
  const errors: string[] = []
  const titles = new Map<string, string>()
  const descriptions = new Map<string, string>()
  const canonicals = new Map<string, string>()

  for (const page of INDEXABLE_PAGES) {
    if (page.title.length < 50 || page.title.length > 60) {
      errors.push(`${page.path} title is ${page.title.length} characters (want 50 to 60)`)
    }
    if (!page.title.endsWith('| The Pickleball Passport')) {
      errors.push(`${page.path} title must end with "| The Pickleball Passport"`)
    }
    if (page.description.length < 140 || page.description.length > 160) {
      errors.push(`${page.path} description is ${page.description.length} characters (want 140 to 160)`)
    }
    if (FORBIDDEN_WORD.test(`${page.title} ${page.description}`)) {
      errors.push(`${page.path} uses a forbidden word`)
    }
    if (EM_OR_EN_DASH.test(`${page.title} ${page.description}`)) {
      errors.push(`${page.path} uses an en dash or em dash`)
    }
    const titleOwner = titles.get(page.title)
    if (titleOwner) errors.push(`${page.path} duplicates the title of ${titleOwner}`)
    else titles.set(page.title, page.path)

    const descriptionOwner = descriptions.get(page.description)
    if (descriptionOwner) errors.push(`${page.path} duplicates the description of ${descriptionOwner}`)
    else descriptions.set(page.description, page.path)

    const canonicalOwner = canonicals.get(page.canonical)
    if (canonicalOwner) errors.push(`${page.path} duplicates the canonical of ${canonicalOwner}`)
    else canonicals.set(page.canonical, page.path)

    if (!page.canonical.startsWith('https://')) {
      errors.push(`${page.path} canonical is not an absolute https URL`)
    }
  }

  return errors
}
