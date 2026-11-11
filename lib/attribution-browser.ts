/**
 * Browser helpers for reading and writing attribution cookies and decorating
 * FastPay / GoHighLevel URLs after hydration. Safe to import from client
 * components; cookie access is inside functions so SSR does not touch document.
 */

import {
  appendParams,
  applyVisit,
  ATTRIB_MAX_AGE,
  FT_COOKIE,
  LT_COOKIE,
  outboundParams,
  REF_COOKIE,
  type AttributionState,
} from '@/lib/attribution';

const ORIGINAL_HREF = 'data-tpp-orig-href';
const ORIGINAL_SRC = 'data-tpp-orig-src';

function escapeRegExp(value: string): string {
  return value.replace(/[$()*+./?[\\\]^{|}]/g, '\\$&');
}

export function readCookie(name: string): string | null {
  if (typeof document === 'undefined') return null;
  const match = document.cookie.match(new RegExp('(?:^|;\\s*)' + escapeRegExp(name) + '=([^;]*)'));
  if (!match?.[1]) return null;
  try {
    return decodeURIComponent(match[1]);
  } catch {
    return match[1];
  }
}

export function writeCookie(name: string, value: string, maxAge = ATTRIB_MAX_AGE): void {
  if (typeof document === 'undefined') return;
  const secure = typeof window !== 'undefined' && window.location.protocol === 'https:' ? '; Secure' : '';
  document.cookie = `${name}=${encodeURIComponent(value)}; Max-Age=${maxAge}; Path=/; SameSite=Lax${secure}`;
}

export function currentJar() {
  return {
    ft: readCookie(FT_COOKIE),
    lt: readCookie(LT_COOKIE),
    ref: readCookie(REF_COOKIE),
  };
}

export function persistVisit(): AttributionState {
  const search = typeof window === 'undefined' ? '' : window.location.search;
  const landing = typeof window === 'undefined' ? '' : window.location.pathname;
  const state = applyVisit(currentJar(), search, landing);
  for (const write of state.writes) writeCookie(write.name, write.value);
  return state;
}

/** /reserve href carrying first-touch partner credit and last-touch UTMs. Reads only. */
export function reservePathFromWindow(): string {
  if (typeof window === 'undefined') return '/reserve';
  const search = window.location.search;
  const landing = window.location.pathname;
  const state = applyVisit(currentJar(), search, landing);
  const params = outboundParams(state.first, state.last, state.referralCode);
  const qs = new URLSearchParams(params).toString();
  return qs ? `/reserve?${qs}` : '/reserve';
}

function decorateAttribute(element: Element, attribute: 'href' | 'src', originalAttribute: string, params: Record<string, string>) {
  const current = element.getAttribute(attribute);
  if (!current) return;
  if (!element.hasAttribute(originalAttribute)) element.setAttribute(originalAttribute, current);
  const original = element.getAttribute(originalAttribute) || current;
  const next = appendParams(original, params);
  if (next !== current) element.setAttribute(attribute, next);
}

export function decorateDocument(root: ParentNode, params: Record<string, string>): void {
  if (!Object.keys(params).length) return;

  root.querySelectorAll<HTMLAnchorElement>('a[href*="fastpaydirect.com"]').forEach((link) => {
    decorateAttribute(link, 'href', ORIGINAL_HREF, params);
  });

  root.querySelectorAll<HTMLIFrameElement>(
    'iframe[src*="leadconnectorhq.com/widget/form"], iframe[src*="leadconnectorhq.com/widget/bookings"]'
  ).forEach((frame) => {
    decorateAttribute(frame, 'src', ORIGINAL_SRC, params);
  });
}
