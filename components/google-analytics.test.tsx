import { fireEvent, render } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { GaInteractions } from '@/components/google-analytics';
import { FT_COOKIE, serializeTouch, type AttributionTouch } from '@/lib/attribution';
import { writeCookie } from '@/lib/attribution-browser';

vi.mock('next/navigation', () => ({
  usePathname: () => '/trips',
  useSearchParams: () => new URLSearchParams(),
}));

const riley: AttributionTouch = {
  source: 'riley-palmer',
  medium: 'partner',
  campaign: 'feb-2027',
  content: '',
  term: '',
  ref: 'riley-palmer',
  landing: '/trips/bangkok-hua-hin/february-18-2027',
  ts: '2026-11-11T00:00:00.000Z',
};

describe('GaInteractions', () => {
  afterEach(() => {
    delete (window as { gtag?: unknown }).gtag;
    document.cookie = `${FT_COOKIE}=; Max-Age=0; Path=/`;
  });

  it('sends begin_checkout with the first-touch partner on a FastPay click', () => {
    const gtag = vi.fn();
    window.gtag = gtag;
    writeCookie(FT_COOKIE, serializeTouch(riley));
    const view = render(
      <>
        <GaInteractions />
        <a href="https://link.fastpaydirect.com/payment-link/6aed7fe318be8d04a49bdae4">Pay in Full</a>
      </>
    );
    fireEvent.click(view.getByText('Pay in Full'));
    expect(gtag).toHaveBeenCalledWith('event', 'begin_checkout', { partner_ref: 'riley-palmer' });
  });

  it('sends generate_lead when a reserve link is clicked', () => {
    const gtag = vi.fn();
    window.gtag = gtag;
    writeCookie(FT_COOKIE, serializeTouch(riley));
    const view = render(
      <>
        <GaInteractions />
        <a href="/reserve?ref=riley-palmer">Talk to our team</a>
      </>
    );
    fireEvent.click(view.getByText('Talk to our team'));
    expect(gtag).toHaveBeenCalledWith('event', 'generate_lead', { partner_ref: 'riley-palmer' });
  });

  it('does not send an event for an ordinary link', () => {
    const gtag = vi.fn();
    window.gtag = gtag;
    const view = render(
      <>
        <GaInteractions />
        <a href="/trips">Trips</a>
      </>
    );
    fireEvent.click(view.getByText('Trips'));
    expect(gtag).not.toHaveBeenCalled();
  });
});
