import type { MetadataRoute } from 'next'
import { GIVEAWAY_LIVE } from '@/lib/giveaway/config'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/dashboard/',
          '/admin/',
          '/api/',
          ...(GIVEAWAY_LIVE ? [] : ['/giveaway']),
        ],
      },
    ],
    sitemap: 'https://www.thepickleballpassport.org/sitemap.xml',
  }
}
