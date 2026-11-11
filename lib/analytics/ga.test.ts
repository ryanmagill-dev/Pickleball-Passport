import { describe, expect, it } from 'vitest';
import { DEFAULT_GA_MEASUREMENT_ID, gaClickEvent, gaMeasurementId } from '@/lib/analytics/ga';

describe('gaMeasurementId', () => {
  it('uses the public measurement ID in production', () => {
    expect(gaMeasurementId({ NODE_ENV: 'production' })).toBe(DEFAULT_GA_MEASUREMENT_ID);
    expect(gaMeasurementId({ NODE_ENV: 'production', VERCEL_ENV: 'production' })).toBe('G-NXCRNZGEL0');
  });

  it('lets NEXT_PUBLIC_GA_MEASUREMENT_ID override the default', () => {
    expect(
      gaMeasurementId({
        NODE_ENV: 'production',
        VERCEL_ENV: 'production',
        NEXT_PUBLIC_GA_MEASUREMENT_ID: 'G-TEST123',
      })
    ).toBe('G-TEST123');
  });

  it('skips dev and preview', () => {
    expect(gaMeasurementId({ NODE_ENV: 'development' })).toBeNull();
    expect(gaMeasurementId({ NODE_ENV: 'test' })).toBeNull();
    expect(gaMeasurementId({ NODE_ENV: 'production', VERCEL_ENV: 'preview' })).toBeNull();
    expect(gaMeasurementId({ NODE_ENV: 'production', VERCEL_ENV: 'development' })).toBeNull();
  });

  it('ignores an override that is not a measurement ID', () => {
    expect(
      gaMeasurementId({
        NODE_ENV: 'production',
        NEXT_PUBLIC_GA_MEASUREMENT_ID: 'not-an-id',
      })
    ).toBeNull();
  });
});

describe('gaClickEvent', () => {
  it('names FastPay clicks begin_checkout and reserve clicks generate_lead', () => {
    expect(gaClickEvent('https://link.fastpaydirect.com/payment-link/6aed7fe318be8d04a49bdae4?ref=riley-palmer')).toBe(
      'begin_checkout'
    );
    expect(gaClickEvent('/reserve?ref=riley-palmer')).toBe('generate_lead');
    expect(gaClickEvent('/trips')).toBeNull();
  });
});
