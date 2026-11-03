/**
 * Individual Blog Post Page
 * Story 12-3: Blog Posts System
 *
 * Server component that provides SEO metadata for blog posts.
 * Renders the client BlogPostContent component for interactivity.
 */

import { Metadata } from 'next';
import { prisma } from '@/lib/db';
import { shareImage, shareImageFromUrl } from '@/lib/seo/share-image';
import { BlogPostContent } from './blog-post-content';

function blogSocial(title: string, description: string, image = shareImage('trips')): Pick<Metadata, 'openGraph' | 'twitter'> {
  return {
    openGraph: {
      title,
      description,
      type: 'article',
      siteName: 'The Pickleball Passport',
      images: [image],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
    },
  }
}

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

// Generate dynamic metadata for SEO
export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const resolvedParams = await params;

  try {
    const post = await prisma.blogPost.findFirst({
      where: {
        slug: resolvedParams.slug,
        status: 'PUBLISHED',
        deletedAt: null,
        publishedAt: { lte: new Date() },
      },
      select: {
        title: true,
        excerpt: true,
        featuredImage: true,
        metaTitle: true,
        metaDescription: true,
        metaKeywords: true,
        ogImage: true,
        publishedAt: true,
        category: {
          select: { name: true },
        },
      },
    });

    if (!post) {
      const title = 'Post Not Found | The Pickleball Passport Blog';
      const description = 'The blog post you are looking for could not be found.';
      return {
        title,
        description,
        robots: { index: false, follow: false },
        ...blogSocial(title, description),
      };
    }

    const title = `${post.metaTitle || post.title} | The Pickleball Passport Blog`;
    const description = post.metaDescription || post.excerpt || `Read ${post.title} on The Pickleball Passport Blog`;
    const image = shareImageFromUrl(post.ogImage || post.featuredImage, title);

    return {
      title,
      description,
      keywords: post.metaKeywords.length > 0 ? post.metaKeywords.join(', ') : undefined,
      authors: [{ name: 'The Pickleball Passport' }],
      openGraph: {
        title,
        description,
        type: 'article',
        publishedTime: post.publishedAt?.toISOString(),
        siteName: 'The Pickleball Passport',
        images: [image],
        ...(post.category && { section: post.category.name }),
      },
      twitter: {
        card: 'summary_large_image',
        title,
        description,
        images: [image],
      },
      alternates: {
        canonical: `/blog/${resolvedParams.slug}`,
      },
    };
  } catch {
    const title = 'Blog Post Unavailable | The Pickleball Passport';
    const description = 'This article could not be loaded. Browse the Thailand pickleball blog for other stories.';
    return {
      title,
      description,
      robots: { index: false, follow: false },
      ...blogSocial(title, description),
    };
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const resolvedParams = await params;
  return <BlogPostContent slug={resolvedParams.slug} />;
}
