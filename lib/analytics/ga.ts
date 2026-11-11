/**
 * GA4 is production-only. Preview builds and local `next dev` skip the tag.
 * NEXT_PUBLIC_GA_MEASUREMENT_ID overrides the public measurement ID.
 */

export const DEFAULT_GA_MEASUREMENT_ID = 'G-NXCRNZGEL0';

type GaEnv = {
  NODE_ENV?: string;
  VERCEL_ENV?: string;
  NEXT_PUBLIC_GA_MEASUREMENT_ID?: string;
};

export function gaMeasurementId(env: GaEnv = process.env): string | null {
  if (env.NODE_ENV !== 'production') return null;
  if (env.VERCEL_ENV && env.VERCEL_ENV !== 'production') return null;
  const id = (env.NEXT_PUBLIC_GA_MEASUREMENT_ID || DEFAULT_GA_MEASUREMENT_ID).trim();
  return /^G-[A-Z0-9]+$/.test(id) ? id : null;
}

/** FastPay starts checkout. A link to the discovery-call calendar is a lead. */
export function gaClickEvent(href: string): 'begin_checkout' | 'generate_lead' | null {
  if (href.includes('fastpaydirect.com')) return 'begin_checkout';
  if (href.includes('/reserve')) return 'generate_lead';
  return null;
}
