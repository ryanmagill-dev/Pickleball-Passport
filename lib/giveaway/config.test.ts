import fs from 'fs'
import path from 'path'
import { createElement } from 'react'
import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { GiveawayFormPending } from '@/components/marketing/giveaway-form-pending'
import robots from '@/app/robots'
import sitemap from '@/app/sitemap'
import {
  GHL_GIVEAWAY_FORM_ID,
  GIVEAWAY_DESCRIPTION,
  GIVEAWAY_LIVE,
  GIVEAWAY_SCHEDULE,
  GIVEAWAY_THANK_YOU,
  GIVEAWAY_TITLE,
  giveawayContent,
  giveawayDraftMetadata,
  giveawayFormSrc,
  giveawayPageUrl,
  isGiveawayFormConfigured,
  isPlaceholder,
  officialRulesHref,
} from '@/lib/giveaway/config'
import { metadataFor } from '@/lib/seo/indexable-pages'

const ROOT = path.resolve(__dirname, '../..')
const COPY_FILES = [
  'lib/giveaway/config.ts',
  'app/(marketing)/giveaway/page.tsx',
  'app/(marketing)/giveaway/layout.tsx',
  'components/marketing/giveaway-entry-form.tsx',
  'components/marketing/giveaway-form-pending.tsx',
]

const BANNED = [
  /[\u2013\u2014]/,
  /\b(getaways|escapes|licensed|bilingual)\b/i,
  /welcome package/i,
  /\bstamps\b/i,
  /\bambassador\b/i,
  /\bcookie\b/i,
  /affiliate code/i,
  /\bvietnam\b/i,
  /\$\d/,
  /\b(margin|commission|membership)\b/i,
  /second giveaway/i,
  /\b(peninsula|anantara|hilton|marriott|hyatt|mandarin)\b/i,
  /\b(USD|THB|baht|dollars)\b/,
]

describe('giveaway draft config', () => {
  it('keeps the schedule and form id unfilled', () => {
    expect(GHL_GIVEAWAY_FORM_ID).toBe('PLACEHOLDER_FORM_ID')
    expect(isGiveawayFormConfigured()).toBe(false)
    expect(isPlaceholder(GIVEAWAY_SCHEDULE.entryOpens)).toBe(true)
    expect(isPlaceholder(GIVEAWAY_SCHEDULE.entryCloses)).toBe(true)
    expect(isPlaceholder(GIVEAWAY_SCHEDULE.winnerAnnounced)).toBe(true)
    expect(GIVEAWAY_SCHEDULE.officialRulesLink).toBe('[OFFICIAL RULES LINK: TBD]')
    expect(officialRulesHref(GIVEAWAY_SCHEDULE.officialRulesLink)).toBeNull()
    expect(GIVEAWAY_SCHEDULE.entryOpens).toBe('[ENTRY OPENS: TBD]')
    expect(GIVEAWAY_SCHEDULE.entryCloses).toBe('[ENTRY CLOSES: TBD]')
    expect(GIVEAWAY_SCHEDULE.winnerAnnounced).toBe('[WINNER ANNOUNCED: TBD]')
  })

  it('uses a title and description that can go live without another edit', () => {
    expect(GIVEAWAY_TITLE.length).toBeGreaterThanOrEqual(50)
    expect(GIVEAWAY_TITLE.length).toBeLessThanOrEqual(60)
    expect(GIVEAWAY_TITLE.endsWith('| The Pickleball Passport')).toBe(true)
    expect(GIVEAWAY_DESCRIPTION.length).toBeGreaterThanOrEqual(140)
    expect(GIVEAWAY_DESCRIPTION.length).toBeLessThanOrEqual(160)
    expect(GIVEAWAY_THANK_YOU).toBe("You're entered once all three steps are done.")
    expect(giveawayContent.prizeBody).toContain('outside January and Dubai')
    expect(giveawayContent.prizeBody).toContain('land package')
    expect(giveawayContent.steps.map((step) => step.title)).toEqual([
      'Create a free Beyond the Bounce account',
      'Follow The Pickleball Passport channel',
      'Complete the entry form',
    ])
  })

  it('stays noindex and off the sitemap until the live switch is on', () => {
    const draft = giveawayDraftMetadata()
    expect(draft.robots).toEqual({ index: false, follow: false })
    expect(draft.title).toBe(GIVEAWAY_TITLE)
    expect(draft.description).toBe(GIVEAWAY_DESCRIPTION)
    expect(draft.openGraph?.title).toBe(GIVEAWAY_TITLE)
    expect(draft.twitter?.description).toBe(GIVEAWAY_DESCRIPTION)

    const urls = sitemap().map((entry) => entry.url)
    expect(urls.some((url) => url.endsWith('/giveaway'))).toBe(GIVEAWAY_LIVE)
    expect(urls.some((url) => url.endsWith('/trips'))).toBe(true)

    const rulesResult = robots().rules
    const rules = Array.isArray(rulesResult) ? rulesResult : [rulesResult]
    const disallow = rules.flatMap((rule) => {
      if (!rule.disallow) return []
      return Array.isArray(rule.disallow) ? rule.disallow : [rule.disallow]
    })
    expect(disallow.includes('/giveaway')).toBe(!GIVEAWAY_LIVE)
    expect(disallow).toEqual(expect.arrayContaining(['/dashboard/', '/admin/', '/api/']))

    if (GIVEAWAY_LIVE) {
      expect(metadataFor('/giveaway').robots).toEqual({ index: true, follow: true })
    }
  })

  it('passes UTM params and the page URL onto the form iframe', () => {
    const search = 'utm_source=beyond-the-bounce&utm_medium=community&utm_campaign=btb-holiday-giveaway-2026&utm_content=launch&utm_term=ignore-me'
    const src = new URL(giveawayFormSrc('FormId123', search))
    expect(src.origin + src.pathname).toBe('https://api.leadconnectorhq.com/widget/form/FormId123')
    expect(src.searchParams.get('utm_source')).toBe('beyond-the-bounce')
    expect(src.searchParams.get('utm_medium')).toBe('community')
    expect(src.searchParams.get('utm_campaign')).toBe('btb-holiday-giveaway-2026')
    expect(src.searchParams.get('utm_content')).toBe('launch')
    const pageUrl = new URL(src.searchParams.get('page_url') || '')
    expect(pageUrl.toString()).toBe(giveawayPageUrl(search))
    expect(pageUrl.origin + pageUrl.pathname).toBe('https://www.thepickleballpassport.org/giveaway')
    expect(pageUrl.searchParams.get('utm_content')).toBe('launch')
    expect(pageUrl.searchParams.has('utm_term')).toBe(false)
    expect(isGiveawayFormConfigured('FormId123')).toBe(true)
    expect(isGiveawayFormConfigured('PLACEHOLDER_FORM_ID')).toBe(false)
    expect(officialRulesHref('https://www.thepickleballpassport.org/giveaway-rules')).toBe(
      'https://www.thepickleballpassport.org/giveaway-rules'
    )
    expect(officialRulesHref('http://example.com/rules')).toBeNull()
  })

  it('keeps banned words and dashes out of the giveaway copy', () => {
    for (const file of COPY_FILES) {
      const text = fs.readFileSync(path.join(ROOT, file), 'utf8')
      for (const pattern of BANNED) {
        expect(text, `${file} matched ${pattern}`).not.toMatch(pattern)
      }
    }
  })

  it('shows a coming soon box instead of an iframe while the form id is a placeholder', () => {
    render(createElement(GiveawayFormPending))
    expect(screen.getByRole('heading', { name: 'Form coming soon' }).textContent).toBe('Form coming soon')
    expect(screen.getByText(/You cannot submit an entry from this page/).textContent).toContain(
      'You cannot submit an entry from this page'
    )
    expect(document.querySelector('iframe')).toBeNull()
  })

  it('does not add the page to site navigation', () => {
    const header = fs.readFileSync(path.join(ROOT, 'components/marketing/header.tsx'), 'utf8')
    const footer = fs.readFileSync(path.join(ROOT, 'components/marketing/footer.tsx'), 'utf8')
    const home = fs.readFileSync(path.join(ROOT, 'app/page.tsx'), 'utf8')
    expect(header).not.toContain('/giveaway')
    expect(footer).not.toMatch(/href:\s*['"]\/giveaway/)
    expect(home).not.toContain('/giveaway')
    const trips = fs.readFileSync(path.join(ROOT, 'app/(marketing)/trips/page.tsx'), 'utf8')
    expect(trips).not.toContain('/giveaway')
    const layout = fs.readFileSync(path.join(ROOT, 'app/(marketing)/giveaway/layout.tsx'), 'utf8')
    expect(layout).toContain("metadataFor('/giveaway')")
  })
})
