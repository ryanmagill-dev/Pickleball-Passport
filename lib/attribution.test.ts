import { describe, expect, it } from 'vitest';
import { NextRequest, NextResponse } from 'next/server';
import {
  ATTRIB_MAX_AGE,
  applyVisit,
  appendParams,
  cookieOptions,
  forwardSearchParams,
  FT_COOKIE,
  LT_COOKIE,
  outboundParams,
  parseTouch,
  planReferralRedirect,
  REF_COOKIE,
  safeTripPath,
  serializeTouch,
  type AttributionJar,
} from '@/lib/attribution';
import { applyAttributionCookies } from '@/lib/attribution-middleware';

const EMPTY: AttributionJar = { ft: null, lt: null, ref: null };
const FEB = '/trips/bangkok-hua-hin/february-18-2027';
const JAN = '/trips/bangkok-chiang-mai/january-14-2027';
const RILEY = `?utm_source=riley-palmer&utm_medium=partner&utm_campaign=feb-2027`;
const NICK = `?utm_source=nick-casey&utm_medium=partner&utm_campaign=feb-2027`;
const GOOGLE = `?utm_source=google&utm_medium=cpc&utm_campaign=brand`;
const PAY = 'https://link.fastpaydirect.com/payment-link/6aed7fe318be8d04a49bdae4';
const FORM = 'https://api.leadconnectorhq.com/widget/form/DOYQ7o4C8pR6V0hSLxcm';
const CALENDAR = 'https://api.leadconnectorhq.com/widget/bookings/tpp-discoverycall';

function jarFrom(state: ReturnType<typeof applyVisit>): AttributionJar {
  return {
    ft: state.writes.find((write) => write.name === FT_COOKIE)?.value ?? (state.first ? serializeTouch(state.first) : null),
    lt: state.writes.find((write) => write.name === LT_COOKIE)?.value ?? (state.last ? serializeTouch(state.last) : null),
    ref: state.referralCode,
  };
}

describe('partner attribution cookies', () => {
  it('keeps partner credit for 90 days', () => {
    expect(ATTRIB_MAX_AGE).toBe(90 * 24 * 60 * 60);
    expect(cookieOptions().maxAge).toBe(ATTRIB_MAX_AGE);
    expect(cookieOptions().httpOnly).toBe(false);
    expect(cookieOptions().sameSite).toBe('lax');
    expect(cookieOptions().path).toBe('/');
  });

  it('records a partner UTM landing as first touch, last touch, and referral_code', () => {
    const visit = applyVisit(EMPTY, RILEY, FEB);
    expect(visit.referralCode).toBe('riley-palmer');
    expect(visit.writes.map((write) => write.name).sort()).toEqual([FT_COOKIE, LT_COOKIE, REF_COOKIE].sort());
    expect(visit.first).toMatchObject({
      source: 'riley-palmer',
      medium: 'partner',
      campaign: 'feb-2027',
      landing: FEB,
    });
    const params = outboundParams(visit.first, visit.last, visit.referralCode);
    for (const href of [PAY, FORM, CALENDAR]) {
      const url = new URL(appendParams(href, params));
      expect(url.searchParams.get('ref')).toBe('riley-palmer');
      expect(url.searchParams.get('partner_ref')).toBe('riley-palmer');
      expect(url.searchParams.get('utm_source')).toBe('riley-palmer');
      expect(url.searchParams.get('utm_medium')).toBe('partner');
      expect(url.searchParams.get('utm_campaign')).toBe('feb-2027');
      expect(url.searchParams.get('ft_source')).toBe('riley-palmer');
      expect(url.searchParams.get('ft_medium')).toBe('partner');
      expect(url.searchParams.get('ft_campaign')).toBe('feb-2027');
    }
    expect(new URL(appendParams(PAY, params)).pathname).toBe('/payment-link/6aed7fe318be8d04a49bdae4');
  });

  it('forwards attribution params onto the reserve calendar without dropping the booking path', () => {
    const src = forwardSearchParams(
      CALENDAR,
      'ref=riley-palmer&partner_ref=riley-palmer&utm_campaign=jan-2027&ft_source=riley-palmer&ft_campaign=jan-2027&unrelated=1'
    );
    const url = new URL(src);
    expect(url.pathname).toBe('/widget/bookings/tpp-discoverycall');
    expect(url.searchParams.get('ref')).toBe('riley-palmer');
    expect(url.searchParams.get('partner_ref')).toBe('riley-palmer');
    expect(url.searchParams.get('utm_campaign')).toBe('jan-2027');
    expect(url.searchParams.get('ft_source')).toBe('riley-palmer');
    expect(url.searchParams.get('ft_campaign')).toBe('jan-2027');
    expect(url.searchParams.get('unrelated')).toBeNull();
    expect(forwardSearchParams(CALENDAR, '')).toBe(CALENDAR);
  });

  it('treats a printed ref= link as partner credit', () => {
    const visit = applyVisit(EMPTY, '?ref=riley-palmer', FEB);
    expect(visit.referralCode).toBe('riley-palmer');
    expect(visit.first).toMatchObject({ source: 'riley-palmer', medium: 'partner', ref: 'riley-palmer' });
    const params = outboundParams(visit.first, visit.last, visit.referralCode);
    expect(params.ref).toBe('riley-palmer');
    expect(params.partner_ref).toBe('riley-palmer');
    expect(params.ft_source).toBe('riley-palmer');
  });

  it('treats utm_medium=qr as partner credit and keeps a January campaign', () => {
    const visit = applyVisit(EMPTY, '?utm_source=riley-palmer&utm_medium=QR&utm_campaign=jan-2027', JAN);
    expect(visit.referralCode).toBe('riley-palmer');
    expect(visit.first?.medium).toBe('QR');
    expect(visit.first?.campaign).toBe('jan-2027');
    expect(outboundParams(visit.first, visit.last, visit.referralCode).ft_campaign).toBe('jan-2027');
  });

  it('backfills first touch from a legacy referral_code cookie without replacing it', () => {
    const visit = applyVisit({ ft: null, lt: null, ref: 'riley-palmer' }, '', '/trips');
    expect(visit.referralCode).toBe('riley-palmer');
    expect(visit.first).toMatchObject({ source: 'riley-palmer', medium: 'partner', ref: 'riley-palmer' });
    expect(visit.writes.map((write) => write.name)).toEqual([FT_COOKIE]);
    expect(outboundParams(visit.first, visit.last, visit.referralCode).ref).toBe('riley-palmer');
    expect(applyVisit(jarFrom(visit), '', '/').writes).toEqual([]);
  });

  it('does not credit an organic or paid search source as a partner', () => {
    const visit = applyVisit(EMPTY, GOOGLE, '/');
    expect(visit.referralCode).toBeNull();
    expect(visit.first).toBeNull();
    expect(visit.writes.map((write) => write.name)).toEqual([LT_COOKIE]);
    const params = outboundParams(visit.first, visit.last, visit.referralCode);
    expect(params.ref).toBeUndefined();
    expect(params.partner_ref).toBeUndefined();
    expect(params.ft_source).toBeUndefined();
    expect(params.utm_source).toBe('google');
    expect(params.utm_medium).toBe('cpc');
    expect(params.utm_campaign).toBe('brand');
  });

  it('does not let a later untagged visit overwrite partner credit', () => {
    const first = applyVisit(EMPTY, RILEY, FEB);
    const jar = jarFrom(first);
    const again = applyVisit(jar, '', '/');
    expect(again.writes).toEqual([]);
    expect(again.referralCode).toBe('riley-palmer');
    expect(serializeTouch(again.first!)).toBe(jar.ft);
    const params = outboundParams(again.first, again.last, again.referralCode);
    expect(params.ref).toBe('riley-palmer');
    expect(params.utm_campaign).toBe('feb-2027');
    expect(params.ft_source).toBe('riley-palmer');
  });

  it('keeps the first partner when a later tagged visit changes last touch', () => {
    const first = applyVisit(EMPTY, RILEY, FEB);
    const jar = jarFrom(first);
    const nick = applyVisit(jar, NICK, FEB);
    expect(nick.referralCode).toBe('riley-palmer');
    expect(nick.writes.map((write) => write.name)).toEqual([LT_COOKIE]);
    expect(nick.first?.source).toBe('riley-palmer');
    expect(nick.last?.source).toBe('nick-casey');

    const google = applyVisit(jarFrom(nick), GOOGLE, '/');
    expect(google.referralCode).toBe('riley-palmer');
    expect(google.first?.source).toBe('riley-palmer');
    expect(google.writes.map((write) => write.name)).toEqual([LT_COOKIE]);
    const params = outboundParams(google.first, google.last, google.referralCode);
    expect(params.ref).toBe('riley-palmer');
    expect(params.partner_ref).toBe('riley-palmer');
    expect(params.ft_source).toBe('riley-palmer');
    expect(params.ft_campaign).toBe('feb-2027');
    expect(params.utm_source).toBe('google');
    expect(params.utm_medium).toBe('cpc');
  });

  it('still gives the first partner credit when an organic visit happened earlier', () => {
    const google = applyVisit(EMPTY, GOOGLE, '/');
    const partner = applyVisit(jarFrom(google), RILEY, FEB);
    expect(partner.referralCode).toBe('riley-palmer');
    expect(partner.first?.source).toBe('riley-palmer');
    expect(partner.writes.map((write) => write.name).sort()).toEqual([FT_COOKIE, LT_COOKIE, REF_COOKIE].sort());
  });

  it('does not replace a ref that is already on a payment link', () => {
    const href = `${PAY}?ref=keep-me`;
    const once = appendParams(href, {
      ref: 'riley-palmer',
      partner_ref: 'riley-palmer',
      utm_source: 'riley-palmer',
    });
    const url = new URL(once);
    expect(url.pathname).toBe('/payment-link/6aed7fe318be8d04a49bdae4');
    expect(url.searchParams.get('ref')).toBe('keep-me');
    expect(url.searchParams.get('utm_source')).toBe('riley-palmer');
    expect(appendParams(once, { ref: 'riley-palmer', utm_source: 'riley-palmer', partner_ref: 'riley-palmer' })).toBe(once);
  });

  it('round-trips a touch through the cookie encoding', () => {
    const visit = applyVisit(EMPTY, RILEY, FEB);
    const encoded = visit.writes.find((write) => write.name === FT_COOKIE)?.value ?? '';
    expect(parseTouch(encoded)?.source).toBe('riley-palmer');
    expect(parseTouch(encodeURIComponent(encoded))?.campaign).toBe('feb-2027');
  });
});

describe('/r/{code} redirect', () => {
  it('can send a partner to a specific trip and keeps the query', () => {
    const plan = planReferralRedirect(
      `https://www.thepickleballpassport.org/r/riley-palmer?to=${FEB}&utm_campaign=feb-2027`,
      'riley-palmer',
      EMPTY
    );
    expect(plan.destination.startsWith(`${FEB}?`)).toBe(true);
    const params = new URL(plan.destination, 'https://www.thepickleballpassport.org').searchParams;
    expect(params.get('ref')).toBe('riley-palmer');
    expect(params.get('utm_source')).toBe('riley-palmer');
    expect(params.get('utm_medium')).toBe('partner');
    expect(params.get('utm_campaign')).toBe('feb-2027');
    expect(params.get('to')).toBeNull();
    expect(plan.writes.map((write) => write.name)).toContain(REF_COOKIE);
  });

  it('falls back to /trips and ignores off-site destinations', () => {
    expect(safeTripPath('https://evil.example/trips/bangkok-hua-hin/february-18-2027')).toBeNull();
    expect(safeTripPath('//evil.example')).toBeNull();
    expect(safeTripPath('/trips/../admin')).toBeNull();
    expect(safeTripPath('/dashboard')).toBeNull();
    expect(safeTripPath(FEB)).toBe(FEB);

    for (const to of ['https://evil.example/phish', '//evil.example', '/trips/../admin', '/dashboard']) {
      const plan = planReferralRedirect(
        `https://www.thepickleballpassport.org/r/riley-palmer?to=${encodeURIComponent(to)}`,
        'riley-palmer',
        EMPTY
      );
      expect(plan.destination.startsWith('/trips')).toBe(true);
      expect(plan.destination).not.toContain('evil');
      expect(plan.destination).not.toContain('admin');
      expect(plan.destination).not.toContain('dashboard');
    }
  });

  it('does not overwrite an existing partner when a second /r/ link is opened', () => {
    const first = applyVisit(EMPTY, RILEY, FEB);
    const plan = planReferralRedirect(
      'https://www.thepickleballpassport.org/r/nick-casey?to=/trips/bangkok-hua-hin/february-18-2027',
      'nick-casey',
      jarFrom(first)
    );
    expect(plan.writes.find((write) => write.name === REF_COOKIE)).toBeUndefined();
    expect(plan.writes.find((write) => write.name === FT_COOKIE)).toBeUndefined();
    expect(parseTouch(plan.writes.find((write) => write.name === LT_COOKIE)?.value)?.source).toBe('nick-casey');
  });
});

describe('applyAttributionCookies', () => {
  it('sets partner cookies on the HTML response and leaves them in place on a later untagged request', () => {
    const request = new NextRequest(`https://www.thepickleballpassport.org${FEB}${RILEY}`);
    const response = NextResponse.next();
    applyAttributionCookies(request, response);

    expect(response.cookies.get(REF_COOKIE)?.value).toBe('riley-palmer');
    expect(parseTouch(response.cookies.get(FT_COOKIE)?.value)?.campaign).toBe('feb-2027');
    expect(parseTouch(response.cookies.get(LT_COOKIE)?.value)?.source).toBe('riley-palmer');

    const header = response.cookies.getAll().map((cookie) => `${cookie.name}=${cookie.value}`).join('; ');
    const followUp = new NextRequest('https://www.thepickleballpassport.org/', { headers: { cookie: header } });
    const followResponse = NextResponse.next();
    applyAttributionCookies(followUp, followResponse);
    expect(followResponse.cookies.getAll().map((cookie) => cookie.name)).not.toContain(REF_COOKIE);
    expect(followResponse.cookies.getAll().map((cookie) => cookie.name)).not.toContain(FT_COOKIE);
  });

  it('does not set referral_code for a google landing', () => {
    const request = new NextRequest(`https://www.thepickleballpassport.org/${GOOGLE}`);
    const response = NextResponse.next();
    applyAttributionCookies(request, response);
    expect(response.cookies.get(REF_COOKIE)).toBeUndefined();
    expect(response.cookies.get(FT_COOKIE)).toBeUndefined();
    expect(parseTouch(response.cookies.get(LT_COOKIE)?.value)?.source).toBe('google');
  });
});
