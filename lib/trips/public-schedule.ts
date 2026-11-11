/**
 * Public departure list.
 *
 * `listed: false` keeps the departure in the repo but removes it from the
 * public site (listings, calendar, sitemap, and internal links) and redirects
 * its page to /trips. Flip the flag when the next schedule is ready.
 *
 * December 9 to 17, 2027 is Koh Chang. It stays listed with no price and no
 * itinerary page. The row links to /notify while costing is unfinished.
 */

export const TRIPS_HOME = '/trips';

export type ScheduledDeparture = {
  id: string;
  monthLabel: string;
  dates: string;
  route: string;
  priceLabel: string | null;
  href: string | null;
  listed: boolean;
};

export const SCHEDULED_DEPARTURES: ScheduledDeparture[] = [
  {
    id: '2027-01-chiang-mai',
    monthLabel: 'January',
    dates: 'Jan 14 to 22, 2027',
    route: 'Bangkok + Chiang Mai',
    priceLabel: '$5,500',
    href: '/trips/bangkok-chiang-mai/january-14-2027',
    listed: true,
  },
  {
    id: '2027-02-hua-hin',
    monthLabel: 'February',
    dates: 'Feb 18 to 26, 2027',
    route: 'Bangkok + Hua Hin',
    priceLabel: '$7,000',
    href: '/trips/bangkok-hua-hin/february-18-2027',
    listed: true,
  },
  {
    id: '2027-12-koh-chang',
    monthLabel: 'December 2027',
    dates: 'Dec 9 to Dec 17',
    route: 'Koh Chang',
    priceLabel: null,
    href: null,
    listed: true,
  },
  {
    id: '2027-03-phuket',
    monthLabel: 'March',
    dates: 'Mar 18 to 26, 2027',
    route: 'Bangkok + Phuket',
    priceLabel: '$7,000',
    href: '/trips/bangkok-phuket/march-18-2027',
    listed: false,
  },
  {
    id: '2027-04-songkran',
    monthLabel: 'April',
    dates: 'Apr 12 to 20, 2027',
    route: 'Bangkok + Pattaya',
    priceLabel: '$7,000',
    href: '/trips/bangkok-pattaya/songkran-april-2027',
    listed: false,
  },
  {
    id: '2027-05-chiang-mai',
    monthLabel: 'May 2027',
    dates: 'May 20 to May 28',
    route: 'Chiang Mai',
    priceLabel: null,
    href: null,
    listed: false,
  },
  {
    id: '2027-06-hua-hin',
    monthLabel: 'June 2027',
    dates: 'Jun 17 to Jun 25',
    route: 'Hua Hin',
    priceLabel: null,
    href: null,
    listed: false,
  },
  {
    id: '2027-07-chiang-mai',
    monthLabel: 'July 2027',
    dates: 'Jul 15 to Jul 23',
    route: 'Chiang Mai',
    priceLabel: null,
    href: null,
    listed: false,
  },
  {
    id: '2027-08-hua-hin',
    monthLabel: 'August 2027',
    dates: 'Aug 19 to Aug 27',
    route: 'Hua Hin',
    priceLabel: null,
    href: null,
    listed: false,
  },
  {
    id: '2027-09-chiang-mai',
    monthLabel: 'September 2027',
    dates: 'Sep 16 to Sep 24',
    route: 'Chiang Mai',
    priceLabel: null,
    href: null,
    listed: false,
  },
  {
    id: '2027-10-hua-hin',
    monthLabel: 'October 2027',
    dates: 'Oct 14 to Oct 22',
    route: 'Hua Hin',
    priceLabel: null,
    href: null,
    listed: false,
  },
  {
    id: '2027-11-chiang-mai',
    monthLabel: 'November 2027',
    dates: 'Nov 11 to Nov 19',
    route: 'Chiang Mai',
    priceLabel: null,
    href: null,
    listed: false,
  },
];

export function listedDepartures(): ScheduledDeparture[] {
  return SCHEDULED_DEPARTURES.filter((departure) => departure.listed);
}

export function isDepartureListed(href: string): boolean {
  const match = SCHEDULED_DEPARTURES.find((departure) => departure.href === href);
  return match ? match.listed : false;
}

export function hiddenTripPaths(): string[] {
  return SCHEDULED_DEPARTURES.flatMap((departure) =>
    departure.listed || !departure.href ? [] : [departure.href]
  );
}
