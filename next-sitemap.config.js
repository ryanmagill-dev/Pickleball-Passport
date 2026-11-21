/* eslint-disable @typescript-eslint/no-require-imports -- next-sitemap loads this file as CommonJS */
const fs = require('fs')
const path = require('path')

/** Same switch as lib/giveaway/config.ts. False keeps /giveaway out of a generated sitemap. */
function giveawayIsLive() {
  const src = fs.readFileSync(path.join(__dirname, 'lib/giveaway/config.ts'), 'utf8')
  const match = src.match(/export const GIVEAWAY_LIVE\b[^=]*=\s*(true|false)\b/)
  if (!match) {
    throw new Error('GIVEAWAY_LIVE must be true or false in lib/giveaway/config.ts')
  }
  return match[1] === 'true'
}

const GIVEAWAY_LIVE = giveawayIsLive()

const exclude = [
  '/dashboard/*',
  '/admin/*',
  '/api/*',
  '/partner/dashboard/*',
  '/onboarding/*',
  '/sign-in/*',
  '/sign-up/*',
  '/booking/*',
  '/redirect',
  '/trips/bangkok-phuket/march-18-2027',
  '/trips/bangkok-pattaya/songkran-april-2027',
]
if (!GIVEAWAY_LIVE) exclude.push('/giveaway')

const disallow = [
  '/dashboard',
  '/admin',
  '/api',
  '/partner/dashboard',
  '/onboarding',
  '/sign-in',
  '/sign-up',
  '/booking',
  '/redirect',
]
if (!GIVEAWAY_LIVE) disallow.push('/giveaway')

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://pickleballpassport.com',
  generateRobotsTxt: true, // Generate robots.txt
  generateIndexSitemap: false, // Don't generate sitemap-0.xml index file for smaller sites
  exclude,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow,
      },
    ],
  },
  // Set priority and change frequency for different routes
  transform: async (config, path) => {
    // Default values
    let priority = 0.7;
    let changefreq = 'weekly';

    // Homepage gets highest priority
    if (path === '/') {
      priority = 1.0;
      changefreq = 'daily';
    }
    // Package pages are high priority
    else if (path.startsWith('/packages/')) {
      priority = 0.9;
      changefreq = 'weekly';
    }
    // Apply page is high priority
    else if (path === '/apply') {
      priority = 0.9;
      changefreq = 'monthly';
    }
    // Partners page
    else if (path === '/partners' || path === '/partner/signup') {
      priority = 0.8;
      changefreq = 'monthly';
    }
    // Trust & Safety page
    else if (path === '/trust-and-safety') {
      priority = 0.7;
      changefreq = 'monthly';
    }

    return {
      loc: path,
      changefreq,
      priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
    };
  },
};
