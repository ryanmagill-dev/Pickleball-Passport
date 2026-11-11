import { describe, expect, it } from 'vitest';
import { hiddenTripPaths, isDepartureListed, listedDepartures } from '@/lib/trips/public-schedule';

describe('public schedule', () => {
  it('lists January, February, and December 9 to 17, 2027 Koh Chang', () => {
    const listed = listedDepartures();
    expect(listed.map((departure) => departure.id)).toEqual([
      '2027-01-chiang-mai',
      '2027-02-hua-hin',
      '2027-12-koh-chang',
    ]);
    const kohChang = listed.find((departure) => departure.id === '2027-12-koh-chang');
    expect(kohChang).toMatchObject({
      monthLabel: 'December 2027',
      dates: 'Dec 9 to Dec 17',
      route: 'Koh Chang',
      priceLabel: null,
      href: null,
      listed: true,
    });
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
