import { describe, expect, it } from 'vitest';
import { hiddenTripPaths, isDepartureListed, listedDepartures } from '@/lib/trips/public-schedule';

describe('public schedule', () => {
  it('lists Koh Chang in December 2026 plus January and February 2027 only', () => {
    const listed = listedDepartures();
    expect(listed.map((departure) => departure.id)).toEqual([
      '2026-12-koh-chang',
      '2027-01-chiang-mai',
      '2027-02-hua-hin',
    ]);
    expect(listed.find((departure) => departure.id === '2026-12-koh-chang')?.route).toBe('Koh Chang');
    expect(listed.find((departure) => departure.id === '2026-12-koh-chang')?.route).not.toContain('Hua Hin');
  });

  it('hides March, April, and later 2027 departures without deleting them', () => {
    expect(isDepartureListed('/trips/bangkok-phuket/march-18-2027')).toBe(false);
    expect(isDepartureListed('/trips/bangkok-pattaya/songkran-april-2027')).toBe(false);
    expect(isDepartureListed('/trips/bangkok-hua-hin/february-18-2027')).toBe(true);
    expect(hiddenTripPaths()).toEqual([
      '/trips/bangkok-phuket/march-18-2027',
      '/trips/bangkok-pattaya/songkran-april-2027',
    ]);
  });
});
