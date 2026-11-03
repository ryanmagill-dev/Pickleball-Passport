import type { Metadata } from 'next'
import { shareImage } from '@/lib/seo/share-image'

/**
 * Account, checkout, and confirmation pages. They are noindex so they are
 * not part of the public title inventory. Title and description still match
 * across the title tag, openGraph, and twitter.
 */
export function privatePageMetadata(title: string, description: string): Metadata {
  const images = [shareImage('trips')]

  return {
    title,
    description,
    robots: { index: false, follow: false },
    openGraph: {
      title,
      description,
      siteName: 'The Pickleball Passport',
      images,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images,
    },
  }
}
