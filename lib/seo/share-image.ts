import type { Metadata } from 'next'

export const SHARE_SITE = 'https://www.thepickleballpassport.org'

export type ShareImageKey = 'homepage' | 'trips' | 'chiangMai' | 'phuket'

const SHARE_IMAGES: Record<ShareImageKey, { path: string; alt: string }> = {
  homepage: {
    path: '/og-images/homepage.jpg',
    alt: 'Drone view of Thailand islands at sunset, The Pickleball Passport pickleball trips',
  },
  trips: {
    path: '/og-images/trips.jpg',
    alt: 'Drone view of a river and limestone mountains in Thailand, The Pickleball Passport pickleball trips',
  },
  chiangMai: {
    path: '/og-images/bangkok-chiang-mai.jpg',
    alt: 'Drone view of forested hills in Chiang Mai, The Pickleball Passport Bangkok and Chiang Mai pickleball trip',
  },
  phuket: {
    path: '/og-images/bangkok-phuket.jpg',
    alt: 'Drone view of limestone islands at dusk, The Pickleball Passport Bangkok and Phuket pickleball trip',
  },
}

export type ShareImage = {
  url: string
  width: number
  height: number
  alt: string
}

export function shareImage(key: ShareImageKey): ShareImage {
  const image = SHARE_IMAGES[key]
  return {
    url: image.path,
    width: 1200,
    height: 630,
    alt: image.alt,
  }
}

export function absoluteShareUrl(key: ShareImageKey): string {
  return `${SHARE_SITE}${SHARE_IMAGES[key].path}`
}

const EMPTY_OG_PATHS = new Set([
  '/og-images/apply.jpg',
  '/og-images/package-default.jpg',
  '/og-images/partner-signup.jpg',
  '/og-images/partners.jpg',
  '/og-images/trust-safety.jpg',
])

/**
 * Keep a site-relative image on this host. Anything else, including the old
 * empty placeholder files, falls back to the trips share image.
 */
export function shareImageFromUrl(url: string | null | undefined, alt: string): ShareImage {
  const fallback = shareImage('trips')
  const safeAlt = alt.trim() || fallback.alt
  if (!url) return { ...fallback, alt: safeAlt }

  const path = url.startsWith(`${SHARE_SITE}/`) ? url.slice(SHARE_SITE.length) : url
  if (path.startsWith('/') && !path.startsWith('//') && !EMPTY_OG_PATHS.has(path)) {
    return { url: path, width: 1200, height: 630, alt: safeAlt }
  }

  return { ...fallback, alt: safeAlt }
}

export function absoluteImageUrl(image: { url: string }): string {
  if (image.url.startsWith('https://') || image.url.startsWith('http://')) return image.url
  return `${SHARE_SITE}${image.url.startsWith('/') ? image.url : `/${image.url}`}`
}

export const defaultShareMetadata: Pick<Metadata, 'openGraph'> = {
  openGraph: {
    images: [shareImage('trips')],
  },
}
