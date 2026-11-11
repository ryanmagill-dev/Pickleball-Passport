/**
 * Fails when two indexable routes share a title or a meta description.
 *
 *   npx tsx scripts/check-unique-metadata.ts
 *
 * Redirects and noindex pages are listed below so a new public route has to
 * be classified instead of silently inheriting the root title.
 */
import fs from 'fs'
import path from 'path'
import { INDEXABLE_PAGES, indexableMetadataErrors } from '../lib/seo/indexable-pages'

const ROOT = path.resolve(__dirname, '..')

/** Routes that redirect in next.config.ts and must not render their own title. */
const REDIRECTS = new Set([
  '/how-it-works',
  '/trips/bangkok-hua-hin',
  '/trips/thailand-8-day',
  '/trips/thailand',
  '/trips/bangkok-hua-hin-essential',
  '/trips/bangkok-hua-hin-ultimate',
  '/clinics/hua-hin',
  '/trips/bangkok-phuket',
  '/trips/bangkok-phuket/march-18-2027',
  '/trips/bangkok-pattaya',
  '/trips/bangkok-pattaya/songkran-april-2027',
  '/playbook',
  '/calculator',
  '/bangkok-courts',
  '/club-retreats',
  '/best-time',
])

/**
 * Dynamic HTML routes. Titles come from the database (blog post, package,
 * or partner landing page) and are not in the static inventory.
 */
const DYNAMIC_PREFIXES = ['/blog/', '/packages/', '/p/']

/** Private or utility trees. Their layouts set robots noindex. */
const NOINDEX_PREFIXES = [
  '/dashboard',
  '/admin',
  '/onboarding',
  '/redirect',
  '/partner/dashboard',
  '/partner/setup',
  '/booking',
  '/sign-in',
  '/sign-up',
  '/forgot-password',
  '/gift',
  '/preferences',
  '/settings',
  '/unsubscribe',
  '/partners/settings',
  '/newsletter/confirm',
  '/newsletter/unsubscribe',
  '/support',
  '/apply/success',
  '/waiver',
]

function walk(dir: string, found: string[] = []): string[] {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      if (entry.name === 'api') continue
      walk(full, found)
    } else if (entry.name === 'page.tsx' || entry.name === 'page.ts') {
      found.push(full)
    }
  }
  return found
}

function routeFromPage(file: string): string {
  const rel = path.relative(path.join(ROOT, 'app'), file).replace(/\\/g, '/')
  const segments = rel
    .split('/')
    .filter((segment) => segment !== 'page.tsx' && segment !== 'page.ts' && !segment.startsWith('('))
    .map((segment) => segment.replace(/\[\[\.\.\.(.+?)\]\]/g, '').replace(/\/$/, ''))
    .filter(Boolean)

  return `/${segments.join('/')}`.replace(/\/$/, '') || '/'
}

function isClassified(route: string): boolean {
  if (INDEXABLE_PAGES.some((page) => page.path === route)) return true
  if (REDIRECTS.has(route)) return true
  if (DYNAMIC_PREFIXES.some((prefix) => route.startsWith(prefix))) return true
  if (NOINDEX_PREFIXES.some((prefix) => route === prefix || route.startsWith(`${prefix}/`))) return true
  return false
}

function privateMetadataCollisions(): string[] {
  const errors: string[] = []
  const titles = new Map<string, string>(INDEXABLE_PAGES.map((page) => [page.title, page.path]))
  const descriptions = new Map<string, string>(INDEXABLE_PAGES.map((page) => [page.description, page.path]))
  const pattern = /privatePageMetadata\(\s*['"]([^'"]+)['"]\s*,\s*['"]([^'"]+)['"]\s*,?\s*\)/g
  let found = 0

  function scan(dir: string) {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const full = path.join(dir, entry.name)
      if (entry.isDirectory()) {
        if (entry.name === 'node_modules' || entry.name === '.next') continue
        scan(full)
      } else if (/\.(ts|tsx)$/.test(entry.name)) {
        const text = fs.readFileSync(full, 'utf8')
        for (const match of text.matchAll(pattern)) {
          found += 1
          const title = match[1]
          const description = match[2]
          const where = path.relative(ROOT, full)
          const titleOwner = titles.get(title)
          if (titleOwner) errors.push(`${where} duplicates the title of ${titleOwner}`)
          else titles.set(title, where)
          const descriptionOwner = descriptions.get(description)
          if (descriptionOwner) errors.push(`${where} duplicates the description of ${descriptionOwner}`)
          else descriptions.set(description, where)
        }
      }
    }
  }

  scan(path.join(ROOT, 'app'))
  if (found < 20) {
    errors.push(`expected privatePageMetadata calls, found ${found}`)
  }
  return errors
}

function main() {
  const errors = [
    ...indexableMetadataErrors(),
    ...privateMetadataCollisions(),
  ]

  for (const page of INDEXABLE_PAGES) {
    const file = path.join(ROOT, page.source)
    if (!fs.existsSync(file)) {
      errors.push(`${page.path} source file is missing: ${page.source}`)
      continue
    }
    const text = fs.readFileSync(file, 'utf8')
    const call = `metadataFor('${page.path}')`
    const callDouble = `metadataFor("${page.path}")`
    if (!text.includes(call) && !text.includes(callDouble)) {
      errors.push(`${page.source} does not call ${call}`)
    }
  }

  for (const file of walk(path.join(ROOT, 'app'))) {
    const route = routeFromPage(file)
    if (!isClassified(route)) {
      errors.push(`${route} (${path.relative(ROOT, file)}) has no metadata classification`)
    }
  }

  const bookingLayout = fs.readFileSync(path.join(ROOT, 'app/booking/layout.tsx'), 'utf8')
  if (!bookingLayout.includes('index: false')) {
    errors.push('app/booking/layout.tsx must set robots index: false')
  }

  const dashboardLayout = fs.readFileSync(path.join(ROOT, 'app/(dashboard)/layout.tsx'), 'utf8')
  if (!dashboardLayout.includes('privatePageMetadata(')) {
    errors.push('app/(dashboard)/layout.tsx must set private page metadata')
  }

  if (errors.length > 0) {
    console.error(`Unique metadata check failed (${errors.length}):`)
    for (const error of errors) console.error(`- ${error}`)
    process.exit(1)
  }

  console.log(`Unique metadata check passed (${INDEXABLE_PAGES.length} indexable routes).`)
}

main()
