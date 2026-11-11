/**
 * First-party partner attribution.
 *
 * tpp_ft         First partner touch. Set once, never overwritten.
 * tpp_lt         Last tagged visit (any utm_* or ref). Refreshed for 90 days.
 * referral_code  Partner slug only. Set once, so /r/{code} and /reserve keep working.
 *
 * Partner credit is written only when utm_medium is partner or qr, or when
 * ref= is present. A visit such as utm_source=google updates last touch and
 * does not become partner credit.
 */

export const FT_COOKIE = 'tpp_ft';
export const LT_COOKIE = 'tpp_lt';
export const REF_COOKIE = 'referral_code';
export const ATTRIB_MAX_AGE = 90 * 24 * 60 * 60;

export const PARTNER_MEDIUMS = new Set(['partner', 'qr']);

const SITE_HOSTS = new Set([
  'www.thepickleballpassport.org',
  'thepickleballpassport.org',
  'localhost',
  '127.0.0.1',
]);

const TRIP_PATH = /^\/trips(?:\/[A-Za-z0-9._~-]+)*$/;

export type AttributionTouch = {
  source: string;
  medium: string;
  campaign: string;
  content: string;
  term: string;
  ref: string;
  landing: string;
  ts: string;
};

export type AttributionJar = {
  ft: string | null;
  lt: string | null;
  ref: string | null;
};

export type CookieWrite = {
  name: string;
  value: string;
};

export type AttributionState = {
  first: AttributionTouch | null;
  last: AttributionTouch | null;
  referralCode: string | null;
  writes: CookieWrite[];
};

export function cookieOptions() {
  return {
    maxAge: ATTRIB_MAX_AGE,
    httpOnly: false, // The tracker reads these to decorate payment and form URLs.
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax' as const,
    path: '/',
  };
}

export function sanitize(value: unknown, max = 80): string {
  if (typeof value !== 'string' || !value) return '';
  return value.replace(/[^\w.\-+=@]/g, '').slice(0, max);
}

export function sanitizeLanding(value: unknown): string {
  if (typeof value !== 'string' || !value.startsWith('/') || value.startsWith('//')) return '';
  if (value.includes('\\') || value.includes('..')) return '';
  if (!/^\/[A-Za-z0-9/._~-]*$/.test(value)) return '';
  return value.slice(0, 200);
}

export function emptyTouch(): AttributionTouch {
  return {
    source: '',
    medium: '',
    campaign: '',
    content: '',
    term: '',
    ref: '',
    landing: '',
    ts: '',
  };
}

function encodeBase64Url(value: string): string {
  const bytes = new TextEncoder().encode(value);
  let binary = '';
  for (let i = 0; i < bytes.length; i++) binary += String.fromCharCode(bytes[i]);
  return btoa(binary).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/g, '');
}

function decodeBase64Url(value: string): string | null {
  if (!/^[A-Za-z0-9_-]+$/.test(value)) return null;
  try {
    const padded = value.replace(/-/g, '+').replace(/_/g, '/') + '='.repeat((4 - (value.length % 4)) % 4);
    const binary = atob(padded);
    const bytes = new Uint8Array(binary.length);
    for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);
    return new TextDecoder().decode(bytes);
  } catch {
    return null;
  }
}

function touchFromJson(raw: string): AttributionTouch | null {
  try {
    const data = JSON.parse(raw) as Partial<AttributionTouch> | null;
    if (!data || typeof data !== 'object' || Array.isArray(data)) return null;
    return {
      source: sanitize(data.source),
      medium: sanitize(data.medium),
      campaign: sanitize(data.campaign),
      content: sanitize(data.content),
      term: sanitize(data.term),
      ref: sanitize(data.ref),
      landing: sanitizeLanding(data.landing),
      ts: typeof data.ts === 'string' ? data.ts.replace(/[^0-9TZ:.\-+]/g, '').slice(0, 40) : '',
    };
  } catch {
    return null;
  }
}

export function parseTouch(raw: string | null | undefined): AttributionTouch | null {
  if (!raw) return null;
  const direct = touchFromJson(raw);
  if (direct) return direct;

  const decodedBase64 = decodeBase64Url(raw);
  if (decodedBase64) {
    const parsed = touchFromJson(decodedBase64);
    if (parsed) return parsed;
  }

  try {
    const decoded = decodeURIComponent(raw);
    if (decoded !== raw) return parseTouch(decoded);
  } catch {
    return null;
  }
  return null;
}

export function serializeTouch(touch: AttributionTouch): string {
  return encodeBase64Url(JSON.stringify(touch));
}

export function partnerRefFrom(touch: Pick<AttributionTouch, 'source' | 'medium' | 'ref'>): string {
  const ref = sanitize(touch.ref);
  if (ref) return ref;
  const medium = sanitize(touch.medium).toLowerCase();
  const source = sanitize(touch.source);
  if (PARTNER_MEDIUMS.has(medium) && source) return source;
  return '';
}

export function touchFromReferral(code: string, landing = ''): AttributionTouch {
  const ref = sanitize(code);
  return {
    source: ref,
    medium: 'partner',
    campaign: '',
    content: '',
    term: '',
    ref,
    landing: sanitizeLanding(landing),
    ts: '',
  };
}

/**
 * Fill source/medium when a partner hit only carried ref=, so first-touch
 * fields stored in GHL are not blank. Existing utm values are left as sent.
 */
export function normalizePartnerTouch(touch: AttributionTouch): AttributionTouch {
  const partner = partnerRefFrom(touch);
  if (!partner) return touch;
  return {
    ...touch,
    ref: touch.ref || partner,
    source: touch.source || partner,
    medium: touch.medium || 'partner',
  };
}

export function readSearchParams(search: string | URLSearchParams): {
  touch: AttributionTouch;
  hasTracking: boolean;
} {
  const params = typeof search === 'string'
    ? new URLSearchParams(search.startsWith('?') ? search.slice(1) : search)
    : search;
  const touch: AttributionTouch = {
    source: sanitize(params.get('utm_source')),
    medium: sanitize(params.get('utm_medium')),
    campaign: sanitize(params.get('utm_campaign')),
    content: sanitize(params.get('utm_content')),
    term: sanitize(params.get('utm_term')),
    ref: sanitize(params.get('ref')),
    landing: '',
    ts: new Date().toISOString(),
  };
  const hasTracking = Boolean(
    touch.source || touch.medium || touch.campaign || touch.content || touch.term || touch.ref
  );
  return { touch, hasTracking };
}

/**
 * Decide cookie writes for one visit.
 * Partner credit (tpp_ft and referral_code) is first-touch and never replaced.
 * Last touch is replaced on every newly tagged URL.
 */
export function applyVisit(jar: AttributionJar, search: string | URLSearchParams, landing: string): AttributionState {
  const existingFirst = parseTouch(jar.ft);
  const existingLast = parseTouch(jar.lt);
  const existingRef = sanitize(jar.ref) || null;
  const landingPath = sanitizeLanding(landing);
  const { touch, hasTracking } = readSearchParams(search);
  touch.landing = landingPath;

  const writes: CookieWrite[] = [];
  let first = existingFirst;
  let last = existingLast;
  let referralCode = existingRef;

  if (!first && existingRef) {
    first = touchFromReferral(existingRef, landingPath);
    writes.push({ name: FT_COOKIE, value: serializeTouch(first) });
  }

  if (!hasTracking) {
    return { first, last, referralCode, writes };
  }

  const normalized = normalizePartnerTouch(touch);
  const partner = partnerRefFrom(normalized);

  if (partner && !first) {
    first = normalized;
    writes.push({ name: FT_COOKIE, value: serializeTouch(first) });
  }
  if (partner && !referralCode) {
    referralCode = partner;
    writes.push({ name: REF_COOKIE, value: partner });
  }

  last = normalized;
  writes.push({ name: LT_COOKIE, value: serializeTouch(last) });

  return { first, last, referralCode, writes };
}

/**
 * Query params for FastPay links, GHL form iframes, and the /reserve calendar.
 * ref + partner_ref + ft_* are first-touch partner credit.
 * utm_* is last touch.
 */
export function outboundParams(
  first: AttributionTouch | null,
  last: AttributionTouch | null,
  referralCode?: string | null
): Record<string, string> {
  const params: Record<string, string> = {};
  const partner =
    (first && partnerRefFrom(first)) ||
    sanitize(referralCode) ||
    (last && partnerRefFrom(last)) ||
    '';
  const firstTouch = first ?? (partner ? touchFromReferral(partner) : null);

  if (partner) {
    params.ref = partner;
    params.partner_ref = partner;
  }
  if (last) {
    if (last.source) params.utm_source = last.source;
    if (last.medium) params.utm_medium = last.medium;
    if (last.campaign) params.utm_campaign = last.campaign;
    if (last.content) params.utm_content = last.content;
    if (last.term) params.utm_term = last.term;
  }
  if (firstTouch && partner) {
    if (firstTouch.source) params.ft_source = firstTouch.source;
    if (firstTouch.medium) params.ft_medium = firstTouch.medium;
    if (firstTouch.campaign) params.ft_campaign = firstTouch.campaign;
  }
  return params;
}

const FORWARDED_PARAM_KEYS = [
  'ref',
  'partner_ref',
  'utm_source',
  'utm_medium',
  'utm_campaign',
  'utm_content',
  'utm_term',
  'ft_source',
  'ft_medium',
  'ft_campaign',
] as const;

/** Copy attribution params from a page URL onto a calendar or form URL. */
export function forwardSearchParams(href: string, search: string | URLSearchParams): string {
  const params = typeof search === 'string'
    ? new URLSearchParams(search.startsWith('?') ? search.slice(1) : search)
    : search;
  const forwarded: Record<string, string> = {};
  for (const key of FORWARDED_PARAM_KEYS) {
    const value = sanitize(params.get(key));
    if (value) forwarded[key] = value;
  }
  return appendParams(href, forwarded);
}

export function appendParams(href: string, params: Record<string, string>, base = 'https://www.thepickleballpassport.org'): string {
  try {
    const url = new URL(href, base);
    let changed = false;
    for (const [key, value] of Object.entries(params)) {
      if (!value || url.searchParams.has(key)) continue;
      url.searchParams.set(key, value);
      changed = true;
    }
    if (!changed) return href;
    return url.toString();
  } catch {
    return href;
  }
}

/**
 * Allow /r/{code}?to=/trips/... to land on that trip.
 * Rejects other hosts and paths so this cannot be used as an open redirect.
 */
export function safeTripPath(raw: string | null | undefined): string | null {
  if (!raw) return null;
  const trimmed = raw.trim();
  if (!trimmed || /[\s\\]/.test(trimmed) || trimmed.includes('..')) return null;
  if (trimmed.startsWith('//')) return null;

  let pathname = trimmed;
  if (!trimmed.startsWith('/')) {
    try {
      const absolute = new URL(trimmed);
      if (!SITE_HOSTS.has(absolute.hostname.toLowerCase())) return null;
      pathname = absolute.pathname;
    } catch {
      return null;
    }
  } else {
    pathname = trimmed.split('?')[0]?.split('#')[0] ?? '';
  }

  if (pathname.length > 1 && pathname.endsWith('/')) pathname = pathname.slice(0, -1);
  if (!pathname || pathname.includes('%') || !TRIP_PATH.test(pathname)) return null;
  return pathname;
}

/**
 * /r/{code} redirect. The path code is the partner. `to` may select a trip.
 * Other query params are kept. Missing ref/utm_source/utm_medium are filled
 * so the landing URL and the cookies describe the same partner click.
 */
export function planReferralRedirect(requestUrl: string, code: string, jar: AttributionJar): {
  destination: string;
  writes: CookieWrite[];
} {
  const url = new URL(requestUrl);
  const path = safeTripPath(url.searchParams.get('to')) ?? '/trips';
  const dest = new URL(path, url.origin);
  url.searchParams.forEach((value, key) => {
    if (key === 'to') return;
    dest.searchParams.append(key, value);
  });

  const slug = sanitize(code);
  if (slug) {
    dest.searchParams.set('ref', slug);
    if (!dest.searchParams.has('utm_source')) dest.searchParams.set('utm_source', slug);
    if (!dest.searchParams.has('utm_medium')) dest.searchParams.set('utm_medium', 'partner');
  }

  const { writes } = applyVisit(jar, dest.searchParams, dest.pathname);
  return { destination: `${dest.pathname}${dest.search}`, writes };
}
