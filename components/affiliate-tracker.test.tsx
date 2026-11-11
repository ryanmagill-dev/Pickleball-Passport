import { cleanup, render } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { AffiliateTracker } from '@/components/affiliate-tracker';
import { FT_COOKIE, parseTouch, REF_COOKIE } from '@/lib/attribution';
import { decorateDocument, readCookie, reservePathFromWindow, writeCookie } from '@/lib/attribution-browser';

vi.mock('next/navigation', () => ({
  usePathname: () => '/trips/bangkok-hua-hin/february-18-2027',
}));

const PAY = 'https://link.fastpaydirect.com/payment-link/6aed7fe318be8d04a49bdae4';
const FORM = 'https://api.leadconnectorhq.com/widget/form/DOYQ7o4C8pR6V0hSLxcm';
const CALENDAR = 'https://api.leadconnectorhq.com/widget/bookings/tpp-discoverycall';

function clearCookies() {
  document.cookie.split(';').forEach((part) => {
    const name = part.split('=')[0]?.trim();
    if (name) document.cookie = `${name}=; Max-Age=0; Path=/`;
  });
}

function setLocation(path: string) {
  window.history.pushState({}, '', path);
}

function Harness() {
  return (
    <div>
      <AffiliateTracker />
      <a href={PAY}>Pay in Full</a>
      <iframe title="Website: Contact Us" src={FORM} />
      <iframe title="Book a Discovery Call" src={CALENDAR} />
    </div>
  );
}

describe('AffiliateTracker', () => {
  beforeEach(() => {
    clearCookies();
    setLocation('/trips/bangkok-hua-hin/february-18-2027');
  });

  afterEach(() => {
    cleanup();
    clearCookies();
  });

  it('decorates FastPay and GoHighLevel URLs from a partner UTM landing', () => {
    setLocation('/trips/bangkok-hua-hin/february-18-2027?utm_source=riley-palmer&utm_medium=partner&utm_campaign=feb-2027');
    const view = render(<Harness />);

    expect(readCookie(REF_COOKIE)).toBe('riley-palmer');
    expect(parseTouch(readCookie(FT_COOKIE))?.campaign).toBe('feb-2027');

    for (const selector of ['a', 'iframe']) {
      view.container.querySelectorAll(selector).forEach((element) => {
        const raw = element.getAttribute('href') ?? element.getAttribute('src') ?? '';
        const url = new URL(raw);
        expect(url.searchParams.get('ref')).toBe('riley-palmer');
        expect(url.searchParams.get('partner_ref')).toBe('riley-palmer');
        expect(url.searchParams.get('utm_source')).toBe('riley-palmer');
        expect(url.searchParams.get('utm_medium')).toBe('partner');
        expect(url.searchParams.get('utm_campaign')).toBe('feb-2027');
        expect(url.searchParams.get('ft_source')).toBe('riley-palmer');
        expect(url.searchParams.get('ft_medium')).toBe('partner');
        expect(url.searchParams.get('ft_campaign')).toBe('feb-2027');
      });
    }
  });

  it('decorates from a printed ref= link', () => {
    setLocation('/trips/bangkok-hua-hin/february-18-2027?ref=riley-palmer');
    const view = render(<Harness />);
    expect(readCookie(REF_COOKIE)).toBe('riley-palmer');
    const href = view.getByText('Pay in Full').getAttribute('href') ?? '';
    expect(new URL(href).searchParams.get('ref')).toBe('riley-palmer');
    expect(new URL(href).searchParams.get('partner_ref')).toBe('riley-palmer');
  });

  it('keeps partner credit on a later untagged visit and still decorates links', () => {
    setLocation('/trips/bangkok-hua-hin/february-18-2027?utm_source=riley-palmer&utm_medium=partner&utm_campaign=feb-2027');
    const first = render(<Harness />);
    const ft = readCookie(FT_COOKIE);
    const ref = readCookie(REF_COOKIE);
    first.unmount();

    setLocation('/');
    const view = render(<Harness />);
    expect(readCookie(REF_COOKIE)).toBe(ref);
    expect(readCookie(FT_COOKIE)).toBe(ft);
    const href = view.getByText('Pay in Full').getAttribute('href') ?? '';
    const url = new URL(href);
    expect(url.searchParams.get('ref')).toBe('riley-palmer');
    expect(url.searchParams.get('ft_source')).toBe('riley-palmer');
    expect(url.searchParams.get('utm_campaign')).toBe('feb-2027');
  });

  it('does not put a google visit on referral_code', () => {
    setLocation('/?utm_source=google&utm_medium=cpc&utm_campaign=brand');
    const view = render(<Harness />);
    expect(readCookie(REF_COOKIE)).toBeNull();
    expect(readCookie(FT_COOKIE)).toBeNull();
    const href = view.getByText('Pay in Full').getAttribute('href') ?? '';
    const url = new URL(href);
    expect(url.searchParams.get('ref')).toBeNull();
    expect(url.searchParams.get('utm_source')).toBe('google');
    expect(url.searchParams.get('utm_medium')).toBe('cpc');
  });

  it('leaves an existing ref on a payment link and tags a link clicked before decoration', () => {
    setLocation('/trips/bangkok-hua-hin/february-18-2027?utm_source=riley-palmer&utm_medium=partner&utm_campaign=feb-2027');
    const view = render(
      <div>
        <AffiliateTracker />
        <a href={`${PAY}?ref=keep-me`}>Keep</a>
      </div>
    );
    const kept = new URL(view.getByText('Keep').getAttribute('href') ?? '');
    expect(kept.searchParams.get('ref')).toBe('keep-me');
    expect(kept.searchParams.get('utm_source')).toBe('riley-palmer');

    const late = document.createElement('a');
    late.textContent = 'Late';
    late.setAttribute('href', PAY);
    document.body.appendChild(late);
    const label = late.firstChild;
    expect(label).toBeTruthy();
    label?.dispatchEvent(new Event('pointerdown', { bubbles: true }));
    const href = late.getAttribute('href') ?? '';
    expect(new URL(href).searchParams.get('ref')).toBe('riley-palmer');
    expect(new URL(href).pathname).toBe('/payment-link/6aed7fe318be8d04a49bdae4');
  });

  it('rebuilds last-touch params from the original href without dropping partner credit', () => {
    document.body.innerHTML = `<a href="${PAY}">Pay</a><iframe src="${FORM}" title="Form"></iframe>`;
    decorateDocument(document, {
      ref: 'riley-palmer',
      partner_ref: 'riley-palmer',
      utm_source: 'riley-palmer',
      utm_medium: 'partner',
      utm_campaign: 'feb-2027',
      ft_source: 'riley-palmer',
      ft_medium: 'partner',
      ft_campaign: 'feb-2027',
    });
    decorateDocument(document, {
      ref: 'riley-palmer',
      partner_ref: 'riley-palmer',
      utm_source: 'google',
      utm_medium: 'cpc',
      utm_campaign: 'brand',
      ft_source: 'riley-palmer',
      ft_medium: 'partner',
      ft_campaign: 'feb-2027',
    });
    const pay = new URL(document.querySelector('a')?.getAttribute('href') ?? '');
    const form = new URL(document.querySelector('iframe')?.getAttribute('src') ?? '');
    expect(pay.searchParams.get('ref')).toBe('riley-palmer');
    expect(pay.searchParams.get('utm_source')).toBe('google');
    expect(pay.searchParams.get('ft_campaign')).toBe('feb-2027');
    expect(form.searchParams.get('partner_ref')).toBe('riley-palmer');
    expect(form.searchParams.get('utm_source')).toBe('google');
    expect(form.pathname).toContain('DOYQ7o4C8pR6V0hSLxcm');
  });

  it('puts partner credit on the reserve link from the landing URL', () => {
    setLocation('/trips/bangkok-chiang-mai/january-14-2027?utm_source=riley-palmer&utm_medium=partner&utm_campaign=jan-2027');
    const href = reservePathFromWindow();
    const url = new URL(href, 'https://www.thepickleballpassport.org');
    expect(url.pathname).toBe('/reserve');
    expect(url.searchParams.get('ref')).toBe('riley-palmer');
    expect(url.searchParams.get('partner_ref')).toBe('riley-palmer');
    expect(url.searchParams.get('utm_campaign')).toBe('jan-2027');
    expect(url.searchParams.get('ft_campaign')).toBe('jan-2027');
  });

  it('reads a legacy referral_code cookie when the URL is untagged', () => {
    writeCookie(REF_COOKIE, 'riley-palmer');
    setLocation('/trips');
    const href = reservePathFromWindow();
    expect(new URL(href, 'https://www.thepickleballpassport.org').searchParams.get('ref')).toBe('riley-palmer');
  });
});
