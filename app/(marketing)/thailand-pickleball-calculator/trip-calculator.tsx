'use client';

import { useState } from 'react';
import Link from 'next/link';

type CityKey = 'bangkok' | 'chiang-mai' | 'hua-hin' | 'pattaya' | 'phuket';
type CourtFormat = 'open' | 'mixed' | 'private';
type TravelStyle = 'condo' | 'boutique' | 'luxury';
type Season = 'cool' | 'hot' | 'green';

interface TripState {
  cities: CityKey[];
  days: number;
  sessionsPerDay: number;
  courtFormat: CourtFormat;
  travelStyle: TravelStyle;
  season: Season;
}

const THB_PER_USD = 35;

const CITY_DATA: Record<
  CityKey,
  {
    name: string;
    button: string;
    region: string;
    openPlayThb: number;
    privateCourtThb: number;
    dailyTransitThb: number;
    transferFromBkkThb: number;
    courts: string[];
    tip: string;
  }
> = {
  bangkok: {
    name: 'Bangkok',
    button: 'Bangkok (Capital)',
    region: 'Capital Base',
    openPlayThb: 280,
    privateCourtThb: 750,
    dailyTransitThb: 420,
    transferFromBkkThb: 0,
    courts: ['Arise Pickleball (Udom Suk)', 'Sterling Sport & Wellness', 'Papaya Pickleball'],
    tip: 'Location beats star rating. Stay near the BTS Sukhumvit line or riverside, and budget 30 to 40 min (150 to 250 THB by Grab) to Udom Suk.',
  },
  'chiang-mai': {
    name: 'Chiang Mai',
    button: 'Chiang Mai (North)',
    region: 'Northern Thailand',
    openPlayThb: 200,
    privateCourtThb: 550,
    dailyTransitThb: 260,
    transferFromBkkThb: 2200,
    courts: ['BokBok Pickleball', 'All-Time', 'Rally House'],
    tip: 'Best from November to February. Avoid March and April when northern agricultural burning hurts outdoor air quality.',
  },
  'hua-hin': {
    name: 'Hua Hin',
    button: 'Hua Hin (Beach)',
    region: 'Beach Rhythm',
    openPlayThb: 220,
    privateCourtThb: 600,
    dailyTransitThb: 240,
    transferFromBkkThb: 1400,
    courts: ['Sports Life', 'T-Rex', 'Bluport'],
    tip: 'Ideal slower second leg after Bangkok with zero airport lines.',
  },
  pattaya: {
    name: 'Pattaya',
    button: 'Pattaya (Coast)',
    region: 'Beach Rhythm',
    openPlayThb: 220,
    privateCourtThb: 600,
    dailyTransitThb: 250,
    transferFromBkkThb: 1100,
    courts: ['88 Pickleball', 'Skyline', 'Sunshine'],
    tip: 'Book early morning or evening court blocks so midday heat stays reserved for beach or pool recovery.',
  },
  phuket: {
    name: 'Phuket',
    button: 'Phuket (Island)',
    region: 'Southern Islands',
    openPlayThb: 260,
    privateCourtThb: 700,
    dailyTransitThb: 450,
    transferFromBkkThb: 2500,
    courts: ['Raccoon Pickleball Club', 'Sharkbites', 'Pickleball Phuket'],
    tip: 'Pair morning court sessions with afternoon Andaman Sea boat days, and fly home directly from HKT.',
  },
};

const CITY_ORDER: CityKey[] = ['bangkok', 'chiang-mai', 'hua-hin', 'pattaya', 'phuket'];

const STYLE_DATA: Record<TravelStyle, { hotelNightThb: number; foodAndMassageDayThb: number }> = {
  condo: { hotelNightThb: 1900, foodAndMassageDayThb: 1100 },
  boutique: { hotelNightThb: 3600, foodAndMassageDayThb: 1600 },
  luxury: { hotelNightThb: 9200, foodAndMassageDayThb: 3100 },
};

const PRESETS: { key: string; title: string; subtitle: string; apply: (s: TripState) => TripState }[] = [
  {
    key: 'clinic',
    title: '5-Day Bangkok Clinic Focus',
    subtitle: '1 Base · Coached Play +BTS/Grab',
    apply: (s) => ({ ...s, cities: ['bangkok'], days: 5, sessionsPerDay: 1, courtFormat: 'private', travelStyle: 'boutique' }),
  },
  {
    key: 'flagship',
    title: '9-Day Bangkok + Chiang Mai',
    subtitle: '2 Bases · Flagship 5-Star Rhythm',
    apply: (s) => ({ ...s, cities: ['bangkok', 'chiang-mai'], days: 9, sessionsPerDay: 1, courtFormat: 'private', travelStyle: 'luxury', season: 'cool' }),
  },
  {
    key: 'beach',
    title: '8-Day Bangkok + Hua Hin Beach',
    subtitle: '2 Bases · Zero Domestic Flights',
    apply: (s) => ({ ...s, cities: ['bangkok', 'hua-hin'], days: 8, sessionsPerDay: 1, courtFormat: 'mixed', travelStyle: 'boutique' }),
  },
  {
    key: 'island',
    title: '12-Day Flagship + Phuket Extension',
    subtitle: '3 Bases · Capital + North + Island',
    apply: (s) => ({ ...s, cities: ['bangkok', 'chiang-mai', 'phuket'], days: 12, sessionsPerDay: 1, courtFormat: 'private', travelStyle: 'luxury' }),
  },
];

function formatNumber(n: number) {
  return Math.round(n).toLocaleString('en-US');
}

function calculate(state: TripState) {
  const numCities = state.cities.length;
  const transitionDays = Math.max(0, numCities - 1);
  const activePlayDays = Math.max(1, state.days - transitionDays - (state.days >= 7 ? 1 : 0));
  const totalSessions = activePlayDays * state.sessionsPerDay;

  let avgOpenThb = 0;
  let avgPrivateThb = 0;
  let avgTransitThb = 0;
  let interCityThb = 0;
  for (const key of state.cities) {
    const c = CITY_DATA[key];
    avgOpenThb += c.openPlayThb;
    avgPrivateThb += c.privateCourtThb;
    avgTransitThb += c.dailyTransitThb;
    if (key !== 'bangkok') interCityThb += c.transferFromBkkThb * 2;
  }
  avgOpenThb /= numCities;
  avgPrivateThb /= numCities;
  avgTransitThb /= numCities;

  let sessionCostThb = avgOpenThb;
  if (state.courtFormat === 'mixed') sessionCostThb = avgOpenThb * 0.5 + avgPrivateThb * 0.5;
  else if (state.courtFormat === 'private') sessionCostThb = avgPrivateThb + 950;

  const courtThb = Math.round(totalSessions * sessionCostThb);
  const transportThb =
    Math.round(activePlayDays * avgTransitThb + (state.days - activePlayDays) * 250) + interCityThb;
  const style = STYLE_DATA[state.travelStyle];
  const nights = Math.max(1, state.days - 1);
  const hotelThb = nights * style.hotelNightThb;
  const foodThb = state.days * style.foodAndMassageDayThb;

  const courtUsd = Math.round(courtThb / THB_PER_USD);
  const transportUsd = Math.round(transportThb / THB_PER_USD);
  const hotelUsd = Math.round(hotelThb / THB_PER_USD);
  const foodUsd = Math.round(foodThb / THB_PER_USD);

  return {
    numCities,
    activePlayDays,
    totalSessions,
    nights,
    courtThb,
    transportThb,
    hotelThb,
    foodThb,
    courtUsd,
    transportUsd,
    hotelUsd,
    foodUsd,
    grandThb: courtThb + transportThb + hotelThb + foodThb,
    grandUsd: courtUsd + transportUsd + hotelUsd + foodUsd,
    diyHours: 8 + numCities * 4 + Math.round(totalSessions * 0.8),
  };
}

const ACTIVE_PILL = 'bg-[#1D2D44] text-[#CFB78D] border-[#1D2D44] font-bold';
const INACTIVE_PILL = 'bg-[#FDF8F3] text-[#1D2D44]/80 border-[#B08D55]/25 hover:border-[#B08D55] font-semibold';

export function TripCalculator() {
  const [state, setState] = useState<TripState>({
    cities: ['bangkok', 'chiang-mai'],
    days: 9,
    sessionsPerDay: 1,
    courtFormat: 'mixed',
    travelStyle: 'luxury',
    season: 'cool',
  });
  const r = calculate(state);

  const toggleCity = (key: CityKey) =>
    setState((s) => {
      if (!s.cities.includes(key)) return { ...s, cities: [...s.cities, key] };
      if (s.cities.length === 1) return s; // always keep at least one base
      return { ...s, cities: s.cities.filter((c) => c !== key) };
    });

  let alert: { tone: 'warn' | 'ok'; title: string; body: string };
  if (r.numCities >= 3 && state.days <= 8) {
    alert = {
      tone: 'warn',
      title: 'Playbook Rhythm Warning:',
      body: `Fitting ${r.numCities} cities into ${state.days} days means spending your best court energy in airports and taxis. We recommend 2 bases max for a trip under 10 days.`,
    };
  } else if (state.cities.includes('chiang-mai') && state.season === 'hot') {
    alert = {
      tone: 'warn',
      title: 'Seasonal Air Quality Note:',
      body: 'March to May includes Northern Thailand burning season. Swap Chiang Mai for Hua Hin, Pattaya, or Phuket during those months, or visit Chiang Mai between November and February.',
    };
  } else {
    alert = {
      tone: 'ok',
      title: 'Good Rhythm:',
      body: `${r.numCities} base(s) across ${state.days} days gives you ${r.activePlayDays} quality court days plus proper recovery and cultural space.`,
    };
  }

  return (
    <section id="tpp-trip-calculator" className="py-12 sm:py-16 border-b border-[#B08D55]/15">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Quick Presets */}
        <div className="mb-8 bg-white rounded-2xl border border-[#B08D55]/20 p-4 sm:p-5 shadow-sm">
          <p className="text-xs font-bold tracking-[0.15em] uppercase text-[#B08D55] mb-3">
            Quick Trip Templates (Click to Load):
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
            {PRESETS.map((p) => (
              <button
                key={p.key}
                type="button"
                onClick={() => setState(p.apply)}
                className="px-3.5 py-2.5 rounded-xl bg-[#FDF8F3] hover:bg-[#F5E6D3] border border-[#B08D55]/25 text-left transition-colors"
              >
                <span className="block font-serif font-bold text-sm text-[#1D2D44]">{p.title}</span>
                <span className="block text-xs text-[#1D2D44]/70">{p.subtitle}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Controls */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-[#B08D55]/20 p-6 sm:p-8 shadow-sm space-y-8">
            {/* Step 1: Select Cities */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#B08D55]">
                  Step 01 · Choose Your Thailand Pickleball Bases
                </p>
                <span className="text-xs text-[#1D2D44]/60">Toggle 1 or more</span>
              </div>
              <p className="text-xs text-[#1D2D44]/70 mb-3">
                Select each city you plan to visit. Our playbook rule of thumb is 2 bases for a 7-to-9-day trip.
              </p>
              <div className="flex flex-wrap gap-2.5">
                {CITY_ORDER.map((key) => {
                  const active = state.cities.includes(key);
                  return (
                    <button
                      key={key}
                      type="button"
                      aria-pressed={active}
                      onClick={() => toggleCity(key)}
                      className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm border transition-all ${active ? `${ACTIVE_PILL} shadow-sm` : INACTIVE_PILL}`}
                    >
                      {CITY_DATA[key].button}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Trip Duration */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label
                  htmlFor="calc-days-slider"
                  className="text-xs font-bold tracking-[0.2em] uppercase text-[#B08D55]"
                >
                  Step 02 · Total Trip Length
                </label>
                <span className="font-serif font-bold text-lg text-[#1D2D44]">
                  {state.days} Days / {r.nights} Nights
                </span>
              </div>
              <input
                id="calc-days-slider"
                type="range"
                min={3}
                max={14}
                value={state.days}
                onChange={(e) => setState((s) => ({ ...s, days: parseInt(e.target.value, 10) || 9 }))}
                className="w-full accent-[#B08D55] cursor-pointer h-2 bg-[#F5E6D3] rounded-lg"
              />
              <div className="flex justify-between text-[11px] text-[#1D2D44]/60 mt-1">
                <span>3 Days (Regional Trip)</span>
                <span>9 Days (Flagship Rhythm)</span>
                <span>14 Days (Extended)</span>
              </div>
            </div>

            {/* Step 3 & 4: Sessions & Season */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <p className="block text-xs font-bold tracking-[0.2em] uppercase text-[#B08D55] mb-2">
                  Step 03 · Court Pace
                </p>
                <div className="flex gap-2">
                  {[1, 2].map((n) => (
                    <button
                      key={n}
                      type="button"
                      aria-pressed={state.sessionsPerDay === n}
                      onClick={() => setState((s) => ({ ...s, sessionsPerDay: n }))}
                      className={`flex-1 px-4 py-2.5 rounded-xl text-xs sm:text-sm border transition-all ${state.sessionsPerDay === n ? ACTIVE_PILL : INACTIVE_PILL}`}
                    >
                      {n} Session{n > 1 ? 's' : ''} / Day
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <p className="block text-xs font-bold tracking-[0.2em] uppercase text-[#B08D55] mb-2">
                  Step 04 · Travel Window
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {(
                    [
                      ['cool', 'Nov to Feb'],
                      ['hot', 'Mar to May'],
                      ['green', 'Jun to Oct'],
                    ] as const
                  ).map(([key, label]) => (
                    <button
                      key={key}
                      type="button"
                      aria-pressed={state.season === key}
                      onClick={() => setState((s) => ({ ...s, season: key }))}
                      className={`px-3.5 py-2 rounded-xl text-xs border transition-all ${state.season === key ? ACTIVE_PILL : INACTIVE_PILL}`}
                    >
                      {label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Step 5: Court Format */}
            <div>
              <p className="block text-xs font-bold tracking-[0.2em] uppercase text-[#B08D55] mb-2">
                Step 05 · Court Booking Format
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {(
                  [
                    ['open', 'Community Open Play', '150 to 350 THB / session'],
                    ['mixed', '50/50 Open + Private AC', 'Balanced indoor + social'],
                    ['private', 'Private Courts + Clinics', 'Reserved AC + coaching'],
                  ] as const
                ).map(([key, title, sub]) => (
                  <button
                    key={key}
                    type="button"
                    aria-pressed={state.courtFormat === key}
                    onClick={() => setState((s) => ({ ...s, courtFormat: key }))}
                    className={`px-3.5 py-2.5 rounded-xl text-xs border transition-all text-left ${state.courtFormat === key ? ACTIVE_PILL : INACTIVE_PILL}`}
                  >
                    <span className="block font-bold">{title}</span>
                    <span className="block opacity-75 mt-0.5">{sub}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 6: Hotel & Travel Style */}
            <div>
              <p className="block text-xs font-bold tracking-[0.2em] uppercase text-[#B08D55] mb-2">
                Step 06 · Accommodation &amp; Recovery Standard
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {(
                  [
                    ['condo', 'Serviced Condo / Nomad', '~1,900 THB ($54) / night'],
                    ['boutique', '4-Star Boutique Hotel', '~3,600 THB ($103) / night'],
                    ['luxury', '5-Star Riverside / Resort', 'TPP Flagship Standard'],
                  ] as const
                ).map(([key, title, sub]) => (
                  <button
                    key={key}
                    type="button"
                    aria-pressed={state.travelStyle === key}
                    onClick={() => setState((s) => ({ ...s, travelStyle: key }))}
                    className={`px-3.5 py-2.5 rounded-xl text-xs border transition-all text-left ${state.travelStyle === key ? ACTIVE_PILL : INACTIVE_PILL}`}
                  >
                    <span className="block font-bold">{title}</span>
                    <span className="block opacity-75 mt-0.5">{sub}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Recommended Courts per Selected City */}
            <div className="pt-4 border-t border-[#B08D55]/15">
              <h3 className="text-xs font-bold tracking-[0.2em] uppercase text-[#B08D55] mb-3">
                Recommended Courts for Your Selected Route
              </h3>
              <div className="space-y-3">
                {state.cities.map((key) => {
                  const c = CITY_DATA[key];
                  return (
                    <div key={key} className="bg-[#FDF8F3] rounded-xl border border-[#B08D55]/20 p-4">
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <span className="font-serif font-bold text-[#1D2D44] text-base">{c.name}</span>
                        <span className="text-[11px] font-bold uppercase tracking-wider text-[#B08D55]">
                          {c.region}
                        </span>
                      </div>
                      <p className="text-xs font-semibold text-[#1D2D44] mb-1.5">Courts: {c.courts.join(' · ')}</p>
                      <p className="text-xs text-[#1D2D44]/75 leading-relaxed">{c.tip}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column: Live Cost & Rhythm Output */}
          <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-24">
            <div className="bg-[#0F1A2A] text-white rounded-2xl border border-[#B08D55]/30 p-6 sm:p-8 shadow-xl">
              <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#CFB78D] mb-1">
                Estimated Per-Person Ground Budget
              </p>
              <p className="text-xs text-white/75 mb-4">
                {r.activePlayDays} Court Days · {r.totalSessions} Total Sessions · {state.days - r.activePlayDays}{' '}
                Recovery/Transfer Days
              </p>

              <div className="bg-white/5 rounded-2xl border border-[#B08D55]/30 p-5 mb-6" aria-live="polite">
                <p className="text-xs uppercase tracking-wider text-white/60 mb-1">Estimated Total Ground Spend</p>
                <p className="font-serif text-3xl sm:text-4xl font-bold text-[#CFB78D]">
                  ${formatNumber(r.grandUsd)} USD
                </p>
                <p className="text-xs text-white/70 mt-1">
                  Approx. {formatNumber(r.grandThb)} THB (excluding international airfare)
                </p>
              </div>

              <div className="space-y-3 text-sm border-b border-white/15 pb-6">
                {[
                  ['Courts, Open Play & Clinics', `${formatNumber(r.courtThb)} THB (${r.totalSessions} sessions)`, r.courtUsd],
                  ['Grab, BTS & Domestic Transfers', `${formatNumber(r.transportThb)} THB (Grab/BTS + inter-city)`, r.transportUsd],
                  ['Accommodation', `${formatNumber(r.hotelThb)} THB (${r.nights} nights)`, r.hotelUsd],
                  ['Meals, Electrolytes & Thai Massage', `${formatNumber(r.foodThb)} THB (meals, electrolytes, Thai massage)`, r.foodUsd],
                ].map(([label, thb, usd]) => (
                  <div key={label as string} className="flex items-center justify-between gap-2">
                    <div>
                      <p className="font-semibold text-white">{label}</p>
                      <p className="text-xs text-white/65">{thb}</p>
                    </div>
                    <span className="shrink-0 whitespace-nowrap font-serif font-bold text-lg text-[#CFB78D]">
                      ${formatNumber(usd as number)} USD
                    </span>
                  </div>
                ))}
              </div>

              <div
                className={
                  alert.tone === 'warn'
                    ? 'mt-4 rounded-xl bg-[#B08D55]/20 border border-[#B08D55] p-3.5 text-xs text-white'
                    : 'mt-4 rounded-xl bg-white/10 border border-white/15 p-3.5 text-xs text-white/90'
                }
              >
                <strong>{alert.title}</strong> {alert.body}
              </div>

              {/* DIY Planning Hours vs TPP Comparison */}
              <div className="mt-6 pt-5 border-t border-white/15">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#CFB78D]">
                    DIY Coordination Time:
                  </span>
                  <span className="font-serif font-bold text-base text-white">{r.diyHours} hrs</span>
                </div>
                <p className="text-xs text-white/75 leading-relaxed mb-5">
                  Coordinating Reclub waitlists, messaging venues on LINE 7 days out, confirming skill brackets, and
                  booking domestic transfers takes roughly 15 to 25 hours of solo admin. Want us to handle the
                  pickleball or the entire trip?
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <Link
                    href="/clinics"
                    className="inline-flex items-center justify-center px-4 py-3 rounded-xl bg-white text-[#1D2D44] font-bold text-xs hover:bg-[#FDF8F3] transition-all text-center"
                  >
                    Bangkok Clinic Week ($169 / $299)
                  </Link>
                  <Link
                    href="/trips"
                    className="inline-flex items-center justify-center px-4 py-3 rounded-xl bg-gradient-to-r from-[#B08D55] to-[#CFB78D] text-[#0F1A2A] font-bold text-xs shadow-lg shadow-[#B08D55]/30 transition-all text-center"
                  >
                    2027 Flagship &amp; Regional Trips
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
