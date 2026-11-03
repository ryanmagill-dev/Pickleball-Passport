import { describe, expect, it } from 'vitest'
import { INDEXABLE_PAGES, indexableMetadataErrors, metadataFor } from '@/lib/seo/indexable-pages'

describe('indexable page metadata', () => {
  it('gives every public route a unique title and description', () => {
    expect(indexableMetadataErrors()).toEqual([])
  })

  it('copies the page title and description onto openGraph and twitter', () => {
    for (const page of INDEXABLE_PAGES) {
      const metadata = metadataFor(page.path)
      expect(metadata.title).toBe(page.title)
      expect(metadata.description).toBe(page.description)
      expect(metadata.openGraph?.title).toBe(page.title)
      expect(metadata.openGraph?.description).toBe(page.description)
      expect(metadata.twitter?.title).toBe(page.title)
      expect(metadata.twitter?.description).toBe(page.description)
      expect(metadata.alternates?.canonical).toBe(page.canonical)
      expect(metadata.openGraph?.images).toBeTruthy()
    }
  })
})
