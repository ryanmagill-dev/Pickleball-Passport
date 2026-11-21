import type { Metadata } from 'next'
import { appendParams, forwardSearchParams } from '@/lib/attribution'
import { shareImage } from '@/lib/seo/share-image'

/**
 * Draft giveaway page. One switch controls whether /giveaway is public.
 *
 * Set GIVEAWAY_LIVE to true when the page should be indexable, allowed in
 * robots.txt, and listed in sitemap.xml. Leave it false to keep the route
 * as a preview: noindex, nofollow, off the sitemap, disallowed for crawlers,
 * and marked with a draft banner.
 *
 * Fill these before sending anyone a live link:
 * - GHL_GIVEAWAY_FORM_ID (the GoHighLevel form id only, not a full URL)
 * - GIVEAWAY_SCHEDULE.entryOpens
 * - GIVEAWAY_SCHEDULE.entryCloses
 * - GIVEAWAY_SCHEDULE.winnerAnnounced
 * - GIVEAWAY_SCHEDULE.officialRulesLink (an https URL)
 */

export const GIVEAWAY_LIVE: boolean = false

export const GHL_GIVEAWAY_FORM_ID = 'PLACEHOLDER_FORM_ID'

export const GIVEAWAY_SCHEDULE = {
  entryOpens: '[ENTRY OPENS: TBD]',
  entryCloses: '[ENTRY CLOSES: TBD]',
  winnerAnnounced: '[WINNER ANNOUNCED: TBD]',
  officialRulesLink: '[OFFICIAL RULES LINK: TBD]',
} as const

export const GIVEAWAY_PATH = '/giveaway'
export const GIVEAWAY_CANONICAL = 'https://www.thepickleballpassport.org/giveaway'

export const GIVEAWAY_TITLE = '2027 Trip for Two Giveaway | The Pickleball Passport'
export const GIVEAWAY_DESCRIPTION =
  'Enter free for one 2027 Pickleball Passport trip for two. Land package for you and a guest. Airfare, visas, and travel insurance are not included.'

export const GIVEAWAY_THANK_YOU = "You're entered once all three steps are done."

const FORM_ID_PATTERN = /^[A-Za-z0-9]+$/
const UTM_KEYS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content'] as const

export const giveawayIndexablePage = {
  path: GIVEAWAY_PATH,
  source: 'app/(marketing)/giveaway/layout.tsx',
  title: GIVEAWAY_TITLE,
  description: GIVEAWAY_DESCRIPTION,
  canonical: GIVEAWAY_CANONICAL,
  image: 'trips' as const,
}

export function isPlaceholder(value: string): boolean {
  return value.includes('TBD') || value.includes('[')
}

export function officialRulesHref(value: string): string | null {
  if (isPlaceholder(value) || !value.startsWith('https://')) return null
  try {
    const url = new URL(value)
    if (url.protocol !== 'https:') return null
    return url.toString()
  } catch {
    return null
  }
}

/** A real GoHighLevel form id. The placeholder renders a notice, not an iframe. */
export function isGiveawayFormConfigured(formId = GHL_GIVEAWAY_FORM_ID): boolean {
  return FORM_ID_PATTERN.test(formId) && !formId.toUpperCase().includes('PLACEHOLDER')
}

/** Public page URL stored with the entry. Uses the live host, plus the four UTM params. */
export function giveawayPageUrl(search: string): string {
  const params = new URLSearchParams(search.startsWith('?') ? search.slice(1) : search)
  const page = new URL(GIVEAWAY_CANONICAL)
  for (const key of UTM_KEYS) {
    const value = params.get(key)
    if (value) page.searchParams.set(key, value)
  }
  return page.toString()
}

/** Iframe URL: same UTM forwarding as the other GoHighLevel embeds, plus page_url. */
export function giveawayFormSrc(formId: string, search: string): string {
  const base = `https://api.leadconnectorhq.com/widget/form/${formId}`
  return appendParams(forwardSearchParams(base, search), { page_url: giveawayPageUrl(search) })
}

export function giveawayDraftMetadata(): Metadata {
  const images = [shareImage('trips')]
  return {
    title: GIVEAWAY_TITLE,
    description: GIVEAWAY_DESCRIPTION,
    robots: { index: false, follow: false },
    openGraph: {
      title: GIVEAWAY_TITLE,
      description: GIVEAWAY_DESCRIPTION,
      siteName: 'The Pickleball Passport',
      images,
    },
    twitter: {
      card: 'summary_large_image',
      title: GIVEAWAY_TITLE,
      description: GIVEAWAY_DESCRIPTION,
      images,
    },
  }
}

export const giveawayContent = {
  draftBanner: 'DRAFT, not live',
  draftNote: 'This page is a preview. It is not linked from the site, and search engines are told to skip it.',
  heroKicker: 'Free entry',
  heroTitle: 'A 2027 trip for two',
  heroBody:
    'One Pickleball Passport trip for two. The prize is the land package. No purchase necessary.',
  prizeHeading: 'The prize',
  prizeBody:
    'One 2027 Pickleball Passport trip for two (the land package). Eligible trips: most of the 2027 calendar outside January and Dubai, subject to availability. We confirm dates with the winner. Airfare, visas, and travel insurance are not included and are the winner\'s responsibility.',
  scheduleHeading: 'Entry window',
  scheduleNote: 'The open date, the close date, the winner announcement, and the official rules link are not decided yet.',
  rulesLabel: 'Official rules',
  rulesLinkText: 'Read the official rules',
  howHeading: 'How to enter',
  howIntro: "Three steps. That's it.",
  steps: [
    {
      title: 'Create a free Beyond the Bounce account',
      body: 'The account is free. This page does not create it for you.',
    },
    {
      title: 'Follow The Pickleball Passport channel',
      body: 'Follow the channel on Beyond the Bounce.',
    },
    {
      title: 'Complete the entry form',
      body: 'Fill out the form on this page.',
    },
  ],
  noPurchase: 'No purchase necessary.',
  thankYou: GIVEAWAY_THANK_YOU,
  thankYouNote: 'All three steps have to be done. Entering does not promise a win, and it does not book a seat.',
  tripHeading: 'What a trip is like',
  tripBody:
    'On a Pickleball Passport trip the hard parts are handled: transfers, courts, the stays, the internal flight, guides, and the dinners we host. You show up ready to play and be in the country. These photos show the kind of week. They are not a promise of one exact departure.',
  photos: [
    {
      src: '/images/sports-life-hua-hin.jpg',
      alt: 'Covered pickleball court with a blue surface and a net',
      caption: 'Covered courts for morning play',
    },
    {
      src: '/images/river-cruise-wat-arun.jpg',
      alt: 'Wat Arun and the Bangkok river at sunset',
      caption: 'The city when the heat drops',
    },
    {
      src: '/images/posters/chiang-mai-header-poster.jpg',
      alt: 'Aerial view of forest and an elephant in Thailand',
      caption: 'Time in the country, off the court',
    },
    {
      src: '/images/posters/hero-drone-poster.jpg',
      alt: 'Drone view of limestone islands along the coast at sunset',
      caption: 'The coast, from the air',
    },
  ],
  faqHeading: 'Questions',
  formHeading: 'Entry form',
  formPendingTitle: 'Form coming soon',
  formPendingBody: 'The entry form is not connected yet. You cannot submit an entry from this page.',
  formLoading: 'The entry form loads when this section is on screen.',
  contactHeading: 'Questions before you enter',
  contactEmail: 'hello@thepickleballpassport.org',
  contactWhatsAppLabel: 'WhatsApp',
  contactWhatsApp: '+66 99-143-3298',
  contactPhoneLabel: 'US phone',
  contactPhone: '(512) 564-8522',
} as const
