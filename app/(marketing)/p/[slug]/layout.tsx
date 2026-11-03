import type { Metadata } from 'next'
import { prisma } from '@/lib/db'
import { INDEXABLE_PAGES } from '@/lib/seo/indexable-pages'
import { privatePageMetadata } from '@/lib/seo/private-metadata'
import { shareImage } from '@/lib/seo/share-image'

type LayoutProps = {
  children: React.ReactNode
  params: Promise<{ slug: string }>
}

const takenTitles = new Set(INDEXABLE_PAGES.map((page) => page.title))

export async function generateMetadata({ params }: LayoutProps): Promise<Metadata> {
  const { slug } = await params

  try {
    const page = await prisma.partnerLandingPage.findFirst({
      where: { slug, isPublished: true },
      select: { name: true, headline: true, subheadline: true },
    })

    if (!page) {
      return privatePageMetadata(
        'Partner Page Not Found | The Pickleball Passport',
        'This partner page is not published. See pickleball trips to Thailand on The Pickleball Passport.',
      )
    }

    const label = (page.headline || page.name).trim()
    let title = label.includes('The Pickleball Passport') ? label : `${label} | The Pickleball Passport`
    if (takenTitles.has(title)) {
      title = `${page.name} | The Pickleball Passport`
    }

    const description =
      page.subheadline?.trim() ||
      `Pickleball trips to Thailand with ${page.name}. Coached play, planned days, and a team on the ground with The Pickleball Passport.`
    const images = [shareImage('trips')]

    return {
      title,
      description,
      openGraph: {
        title,
        description,
        url: `https://www.thepickleballpassport.org/p/${slug}`,
        siteName: 'The Pickleball Passport',
        images,
        locale: 'en_US',
        type: 'website',
      },
      twitter: {
        card: 'summary_large_image',
        title,
        description,
        images,
      },
      alternates: {
        canonical: `https://www.thepickleballpassport.org/p/${slug}`,
      },
      robots: { index: true, follow: true },
    }
  } catch {
    return privatePageMetadata(
      'Partner Page Unavailable | The Pickleball Passport',
      'This partner page could not be loaded. Browse pickleball trips to Thailand with The Pickleball Passport.',
    )
  }
}

export default function PartnerLandingLayout({ children }: { children: React.ReactNode }) {
  return children
}
