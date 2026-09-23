'use client';

import { useState } from 'react';
import {
  CheckCircle,
  Plus,
  Trophy,
  Landmark,
  Ship,
  Sparkles,
  Plane,
  Droplets,
  ChevronDown,
  MapPin,
  Clock,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { type TripSection } from './trip-sidebar-nav';
import { StatBar } from './stat-bar';
import { TripFAQ } from './trip-faq';
import { CancellationSection } from './cancellation-section';
import { TravelInsuranceSection } from './travel-insurance-section';

/* ─────────────────────── TRIP DETAILS DATA ─────────────────────── */

const statItems = [
  { value: '16', label: 'Max Group Size' },
  {
    value: '6/10',
    label: 'Activity Level',
    tooltip:
      '6/10: Moderate. Pickleball sessions run the first five days. The last three are festival days: no pickleball, plenty of walking and, if you want it, getting soaked.',
  },
  { value: '4', label: 'Pickleball Sessions' },
  { value: '3', label: 'Songkran Festival Days' },
];

const includedItems = [
  '8 nights (1 night Bangkok + 3 nights Hua Hin + 4 nights Bangkok)',
  'Daily breakfast throughout (8 breakfasts)',
  '4 group dinners: welcome, Hua Hin, a Songkran street food night, and farewell',
  'Private ground transfer Bangkok to Hua Hin and back (3-hr scenic drive each way)',
  'All private ground transportation (air-con vans, airport transfers)',
  '4 pickleball sessions with court fees, equipment, and structured programming, all before the festival begins',
  'Songkran water blessing ceremony at a temple',
  'Guided access to Bangkok’s Songkran street festivities',
  'Hotel wellness amenities: spa, pools, fitness centers',
  'Dedicated trip host throughout',
  'Welcome pack with trip essentials, including a dry bag for festival days',
];

const extrasItems = [
  'International airfare to/from Bangkok (BKK)',
  'Travel and medical insurance',
  'Michelin dining upgrades (optional group outings to starred restaurants)',
  'Optional spa treatments beyond hotel amenities',
  'Alcoholic beverages beyond group dinner inclusions',
  'Meals on designated free nights',
  'Personal shopping and souvenirs',
  'Gratuities for guides, drivers, and hotel staff',
];

/* ─────────────────────── ITINERARY DATA ─────────────────────── */

type DayIcon = 'trophy' | 'landmark' | 'ship' | 'sparkles' | 'plane' | 'droplets';

interface TimeSlot {
  label: string;
  description: string;
}

interface ItineraryDay {
  day: number;
  title: string;
  city: string;
  hotel: string;
  vibe: string;
  icon: DayIcon;
  slots: TimeSlot[];
}

const iconMap: Record<DayIcon, React.ComponentType<{ className?: string }>> = {
  trophy: Trophy,
  landmark: Landmark,
  ship: Ship,
  sparkles: Sparkles,
  plane: Plane,
  droplets: Droplets,
};

const days: ItineraryDay[] = [
  {
    day: 1,
    title: 'Arrival Day',
    city: 'Bangkok',
    hotel: 'Our 5-Star Bangkok riverside hotel',
    vibe: 'Land, breathe, bond',
    icon: 'sparkles',
    slots: [
      { label: 'Highlights', description: 'Land in Bangkok, settle into our hotel, welcome dinner on the river.' },
    ],
  },
  {
    day: 2,
    title: 'Pickleball + Drive to Hua Hin',
    city: 'Bangkok → Hua Hin',
    hotel: 'Our 5-Star Hua Hin Beachfront Resort',
    vibe: 'One session, then the coast',
    icon: 'trophy',
    slots: [
      { label: 'Highlights', description: 'Pickleball session 1 in Bangkok. Afternoon scenic drive down the coast to Hua Hin, check into our beachfront resort.' },
    ],
  },
  {
    day: 3,
    title: 'Pickleball + Coast',
    city: 'Hua Hin',
    hotel: 'Our 5-Star Hua Hin Beachfront Resort',
    vibe: 'Play, then the beach',
    icon: 'trophy',
    slots: [
      { label: 'Highlights', description: 'Pickleball session 2 at Sports Life Hua Hin. Afternoon on the coast, beach or pool. Group dinner.' },
    ],
  },
  {
    day: 4,
    title: 'Pickleball + Free Afternoon',
    city: 'Hua Hin',
    hotel: 'Our 5-Star Hua Hin Beachfront Resort',
    vibe: 'Last session on the coast',
    icon: 'trophy',
    slots: [
      { label: 'Highlights', description: 'Pickleball session 3 at Sports Life Hua Hin. Free afternoon, explore Hua Hin town or relax at the resort.' },
    ],
  },
  {
    day: 5,
    title: 'Back to Bangkok',
    city: 'Hua Hin → Bangkok',
    hotel: 'Our 5-Star Bangkok riverside hotel',
    vibe: 'Drive in while the city drives out',
    icon: 'ship',
    slots: [
      { label: 'Highlights', description: 'Morning drive back to Bangkok, timed against the crowds heading the other way for the holiday. Pickleball session 4, late afternoon, our final session before the festival.' },
    ],
  },
  {
    day: 6,
    title: 'Songkran Begins',
    city: 'Bangkok',
    hotel: 'Our 5-Star Bangkok riverside hotel',
    vibe: 'Blessings first, then the water fights',
    icon: 'droplets',
    slots: [
      { label: 'Highlights', description: 'Morning water blessing ceremony at a temple. Afternoon in the streets for anyone who wants in on the water fights. No pickleball today, that’s the point.' },
    ],
  },
  {
    day: 7,
    title: 'Songkran',
    city: 'Bangkok',
    hotel: 'Our 5-Star Bangkok riverside hotel',
    vibe: 'Street food, the river, the festival',
    icon: 'sparkles',
    slots: [
      { label: 'Highlights', description: 'A full day in the festival: street food, the river, the whole city out celebrating. Group dinner in the evening.' },
    ],
  },
  {
    day: 8,
    title: 'Last Day of Songkran',
    city: 'Bangkok',
    hotel: 'Our 5-Star Bangkok riverside hotel',
    vibe: 'Last splash, then a toast',
    icon: 'droplets',
    slots: [
      { label: 'Highlights', description: 'Final day of the festival. Farewell dinner, trip recap and toasts.' },
    ],
  },
  {
    day: 9,
    title: 'Departure Day',
    city: 'Bangkok',
    hotel: 'Our 5-Star Bangkok riverside hotel',
    vibe: 'Hugs, promises to come back',
    icon: 'plane',
    slots: [
      { label: 'Highlights', description: 'Final breakfast at the hotel. Private transfer to the airport. Head home, still finding water in your shoes.' },
    ],
  },
];

/* ─────────────────────── PICKLEBALL DATA ─────────────────────── */

const pickleballSessions = [
  {
    number: 1,
    city: 'Bangkok',
    venue: 'Bangkok riverside hotel',
    day: 'Day 2',
    time: 'Morning',
    focus: 'Assessment, warm-up, coaching + round-robin',
  },
  {
    number: 2,
    city: 'Hua Hin',
    venue: 'Sports Life Hua Hin',
    day: 'Day 3',
    time: 'Morning',
    focus: 'Coaching clinic + doubles play',
  },
  {
    number: 3,
    city: 'Hua Hin',
    venue: 'Sports Life Hua Hin',
    day: 'Day 4',
    time: 'Morning',
    focus: 'Coaching clinic + round-robin',
  },
  {
    number: 4,
    city: 'Bangkok',
    venue: 'Bangkok riverside hotel',
    day: 'Day 5',
    time: 'Late Afternoon',
    focus: 'Final session before the festival: fun tournament + awards',
  },
];

/* ─────────────────────── ACCOMMODATIONS DATA ─────────────────────── */

const hotels = [
  {
    name: 'Our 5-Star Bangkok riverside hotel',
    city: 'Bangkok',
    location: 'Riverside, Charoenkrung Road',
    duration: '5 Nights (1 + 4, split by the Hua Hin leg)',
    highlights: [
      'Five-star riverside luxury on the Chao Phraya River',
      'On-site pickleball courts, spa, and world-class restaurants',
      'Front-row to the city’s Songkran street festivities',
    ],
  },
  {
    name: 'Our 5-Star Hua Hin Beachfront Resort',
    city: 'Hua Hin',
    location: 'Beachfront, Hua Hin',
    duration: '3 Nights',
    highlights: [
      'Five-star beachfront resort with direct beach access',
      'Full-service spa and wellness facilities',
      'Resort pool, daily breakfast, and beachfront dining',
    ],
  },
];

/* ─────────────────────── DINING DATA ─────────────────────── */

const groupDinners = [
  {
    label: 'Welcome Dinner',
    description: 'Welcome dinner on the river in Bangkok',
  },
  {
    label: 'Hua Hin Dinner',
    description: 'Fresh seafood, oceanfront dining',
  },
  {
    label: 'Songkran Street Food Night',
    description: 'Out in the festival, eating our way through it',
  },
  {
    label: 'Farewell Dinner',
    description: 'Final night celebration back in Bangkok, trip recap and toasts',
  },
];

/* ─────────────────────── HELPERS ─────────────────────── */

function getCityColor(city: string): string {
  return city === 'Hua Hin' ? 'bg-[#B08D55] text-white' : 'bg-[#1D2D44] text-white';
}

/* ─────────────────────── SECTION COMPONENTS ─────────────────────── */

function TripDetailsSongkran() {
  return (
    <div className="space-y-10">
      <StatBar items={statItems} />

      {/* Route Visual */}
      <div className="bg-gradient-to-r from-[#1D2D44] to-[#495F87] rounded-2xl p-6 text-white">
        <h3 className="font-serif text-lg font-bold mb-4">The Route</h3>
        <div className="flex items-center gap-3 text-sm flex-wrap">
          <span className="px-3 py-1.5 rounded-full bg-white/20 font-medium">Bangkok (1 night)</span>
          <span className="text-[#B08D55]">&rarr;</span>
          <span className="px-3 py-1.5 rounded-full bg-[#B08D55]/30 font-medium">Hua Hin (3 nights)</span>
          <span className="text-[#B08D55]">&rarr;</span>
          <span className="px-3 py-1.5 rounded-full bg-white/20 font-medium">Bangkok (4 nights, Songkran)</span>
        </div>
        <p className="text-white/50 text-xs mt-3">Reversed on purpose, so the group is back in Bangkok for the festival, April 13&ndash;15.</p>
      </div>

      <div>
        <h3 className="font-serif text-2xl font-bold text-[#1D2D44] mb-6">
          What&apos;s Included
        </h3>
        <div className="grid md:grid-cols-2 gap-x-8 gap-y-3">
          {includedItems.map((item, idx) => (
            <div key={idx} className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
              <span className="text-[#1D2D44]/80 text-sm leading-relaxed">{item}</span>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-serif text-2xl font-bold text-[#1D2D44] mb-6">
          Extras (Not Included)
        </h3>
        <div className="grid md:grid-cols-2 gap-x-8 gap-y-3">
          {extrasItems.map((item, idx) => (
            <div key={idx} className="flex items-start gap-3">
              <Plus className="w-5 h-5 text-[#B08D55]/70 flex-shrink-0 mt-0.5" />
              <span className="text-[#1D2D44]/60 text-sm leading-relaxed">{item}</span>
            </div>
          ))}
        </div>
        <p className="text-sm text-[#1D2D44]/50 mt-4">
          Need travel insurance?{' '}
          <a
            href="https://www.squaremouth.com/?aid=24050"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#B08D55] hover:underline font-medium"
          >
            Compare plans with our partner, Squaremouth
          </a>.
        </p>
      </div>
    </div>
  );
}

function ItineraryAccordion() {
  const [expandedDay, setExpandedDay] = useState<number | null>(null);

  return (
    <div className="space-y-8">
      <div>
        <h2 className="font-serif text-3xl font-bold text-[#1D2D44] mb-2">
          Day-by-Day Itinerary
        </h2>
        <p className="text-[#1D2D44]/60 text-sm">
          9 days: one night in Bangkok, three on the coast in Hua Hin, then four back in Bangkok for Songkran. Click any day to see the highlights.
        </p>
      </div>

      <div className="space-y-3">
        {days.map((day) => {
          const isExpanded = expandedDay === day.day;
          const Icon = iconMap[day.icon];

          return (
            <div
              key={day.day}
              className={`overflow-hidden rounded-xl border transition-all ${
                isExpanded
                  ? 'border-[#B08D55]/40 bg-[#FDF8F3] shadow-md'
                  : 'border-[#1D2D44]/10 bg-white hover:shadow-sm'
              }`}
            >
              <button
                onClick={() => setExpandedDay(isExpanded ? null : day.day)}
                className="flex w-full items-center justify-between p-4 text-left transition-colors hover:bg-[#FDF8F3]/50"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div
                    className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full text-sm font-bold ${
                      isExpanded ? 'bg-[#1D2D44] text-white' : 'bg-[#1D2D44]/10 text-[#1D2D44]'
                    }`}
                  >
                    {day.day}
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-serif font-semibold text-[#1D2D44] truncate">
                      {day.title}
                    </h3>
                  </div>
                  <span className="hidden sm:inline-flex flex-shrink-0 items-center rounded-full bg-[#B08D55]/10 px-3 py-1 text-xs font-medium text-[#B08D55]">
                    {day.city}
                  </span>
                  <Icon className="h-4 w-4 flex-shrink-0 text-[#B08D55]/60" />
                </div>
                <ChevronDown
                  className={`ml-3 h-5 w-5 flex-shrink-0 text-[#1D2D44]/40 transition-transform duration-200 ${
                    isExpanded ? 'rotate-180' : ''
                  }`}
                />
              </button>

              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <div className="border-t border-[#B08D55]/20 px-4 pb-4 pt-3">
                      <span className="sm:hidden inline-flex items-center rounded-full bg-[#B08D55]/10 px-3 py-1 text-xs font-medium text-[#B08D55] mb-3">
                        {day.city}
                      </span>
                      <p className="text-xs text-[#1D2D44]/50 mb-1">{day.hotel}</p>
                      <p className="text-xs italic text-[#B08D55] mb-3">Vibe: {day.vibe}</p>
                      <div className="space-y-3">
                        {day.slots.map((slot, idx) => (
                          <div key={idx} className="flex gap-3">
                            <span className="flex-shrink-0 w-20 text-xs font-semibold uppercase tracking-wide text-[#B08D55] pt-0.5">
                              {slot.label}
                            </span>
                            <p className="text-sm text-[#1D2D44]/80 leading-relaxed">
                              {slot.description}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function AccommodationsSongkran() {
  return (
    <div className="space-y-8">
      <p className="text-[#1D2D44]/70 text-base leading-relaxed max-w-3xl">
        Same two five-star properties as our standard Bangkok + Hua Hin route, in reverse order:
        one night in Bangkok to start, three nights on the coast, then four nights back in
        Bangkok so the group is there for Songkran.
      </p>

      <div className="space-y-6">
        {hotels.map((hotel, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl border border-[#B08D55]/15 shadow-sm p-6 sm:p-8"
          >
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-5">
              <div>
                <h4 className="font-serif text-xl font-bold text-[#1D2D44]">{hotel.name}</h4>
                <div className="flex items-center gap-1.5 mt-1.5 text-sm text-[#1D2D44]/60">
                  <MapPin className="w-4 h-4 text-[#B08D55]" />
                  {hotel.location}
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium ${getCityColor(hotel.city)}`}>
                  {hotel.city}
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#F5E6D3] text-[#1D2D44] text-xs font-medium">
                  <Clock className="w-3.5 h-3.5 text-[#B08D55]" />
                  {hotel.duration}
                </span>
              </div>
            </div>
            <ul className="space-y-2.5">
              {hotel.highlights.map((highlight, hIdx) => (
                <li
                  key={hIdx}
                  className="flex items-start gap-3 text-sm text-[#1D2D44]/75 leading-relaxed"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#B08D55] flex-shrink-0 mt-2" />
                  {highlight}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

function PickleballSongkran() {
  return (
    <div className="space-y-10">
      <p className="text-[#1D2D44]/70 text-base leading-relaxed max-w-3xl">
        4 sessions across 2 cities, all finished before the festival starts. No pickleball during
        Songkran, April 13 to 15. That&apos;s a feature, not a gap.
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
        {[
          { value: '4', label: 'Total Sessions' },
          { value: '8-10 hrs', label: 'Total Court Time' },
          { value: 'Coaching', label: 'Clinics Each Session' },
          { value: '3.0–5.0+', label: 'All Skill Levels' },
        ].map((item, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl border border-[#B08D55]/20 p-4 text-center shadow-sm"
          >
            <div className="text-lg sm:text-xl font-bold text-[#1D2D44] whitespace-nowrap">{item.value}</div>
            <div className="text-xs text-[#1D2D44]/60 font-medium uppercase tracking-wider mt-1">
              {item.label}
            </div>
          </div>
        ))}
      </div>

      <div>
        <h3 className="font-serif text-2xl font-bold text-[#1D2D44] mb-6">
          Session Breakdown
        </h3>
        <div className="space-y-3">
          {pickleballSessions.map((session) => (
            <div
              key={session.number}
              className="bg-white rounded-xl border border-[#B08D55]/15 shadow-sm p-4 sm:p-5 overflow-hidden"
            >
              <div className="flex items-start gap-3 sm:gap-4">
                <span className="w-10 h-10 rounded-full bg-[#1D2D44] text-white flex items-center justify-center text-sm font-bold flex-shrink-0">
                  {session.number}
                </span>
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span
                      className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${getCityColor(session.city)}`}
                    >
                      {session.city} &middot; {session.venue}
                    </span>
                    <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-[#F5E6D3] text-[#1D2D44] text-xs font-medium">
                      {session.day}, {session.time}
                    </span>
                  </div>
                  <p className="text-sm text-[#1D2D44]/75 leading-relaxed">
                    {session.focus}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function DiningSongkran() {
  return (
    <div className="space-y-10">
      <p className="text-[#1D2D44]/70 text-base leading-relaxed max-w-3xl">
        4 group dinners included, from the river in Bangkok to the coast in Hua Hin and back
        into the festival streets. Daily breakfast throughout. Free time gives you room to
        explore Songkran your own way.
      </p>

      <div>
        <h3 className="font-serif text-2xl font-bold text-[#1D2D44] mb-6">
          Included Group Dinners
        </h3>
        <div className="space-y-4">
          {groupDinners.map((dinner, idx) => (
            <div key={idx} className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-[#B08D55] flex-shrink-0 mt-0.5" />
              <div>
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-sm font-semibold text-[#1D2D44]">
                    {dinner.label}:
                  </span>
                  <span className="text-sm text-[#1D2D44]/80">{dinner.description}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-[#FDF8F3] rounded-xl border border-[#B08D55]/10 p-5">
        <p className="text-sm text-[#1D2D44]/60 leading-relaxed">
          Optional Michelin dining upgrades available. Ask us on your consultation call for details.
        </p>
      </div>
    </div>
  );
}

/* ─────────────────────── MAIN EXPORT ─────────────────────── */

export function TripSectionContentSongkran({ activeSection }: { activeSection: TripSection }) {
  switch (activeSection) {
    case 'details':
      return <TripDetailsSongkran />;
    case 'itinerary':
      return <ItineraryAccordion />;
    case 'accommodations':
      return <AccommodationsSongkran />;
    case 'pickleball':
      return <PickleballSongkran />;
    case 'dining':
      return <DiningSongkran />;
    case 'faq':
      return <TripFAQ />;
    case 'cancellation':
      return <CancellationSection />;
    case 'insurance':
      return <TravelInsuranceSection />;
    default:
      return <TripDetailsSongkran />;
  }
}
