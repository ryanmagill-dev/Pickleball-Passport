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
      '6/10: Moderate. Pickleball sessions run in Pattaya. Festival days in both cities are no-pickleball days: plenty of walking and, if you want it, getting soaked.',
  },
  { value: '2', label: 'Pickleball Sessions' },
  { value: '4', label: 'Festival Days' },
];

const includedItems = [
  '8 nights (4 nights Bangkok + 4 nights Pattaya)',
  'Daily breakfast throughout (8 breakfasts)',
  '4 group dinners: welcome, Pattaya welcome, a Songkran street food night, and farewell',
  'Private ground transfer Bangkok to Pattaya (about 2 hours)',
  'Private transfer from Pattaya to Bangkok airport (BKK) on departure day',
  '2 pickleball sessions in Pattaya with court fees, equipment, and structured programming',
  'Songkran water blessing ceremony at a Bangkok temple',
  'Guided access to Bangkok’s Songkran street festivities and Pattaya’s Wan Lai finale',
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
    title: 'Songkran Begins: Khao San Road',
    city: 'Bangkok',
    hotel: 'Our 5-Star Bangkok riverside hotel',
    vibe: 'Blessings first, then the water fights',
    icon: 'droplets',
    slots: [
      { label: 'Highlights', description: 'Morning Buddha-bathing and merit-making at a local temple. Afternoon and evening at Khao San Road, the high-energy international street party and water gun battles. No pickleball today, that’s the point.' },
    ],
  },
  {
    day: 3,
    title: 'Songkran: Silom Road + Siam Square',
    city: 'Bangkok',
    hotel: 'Our 5-Star Bangkok riverside hotel',
    vibe: 'Foam parties and water slides',
    icon: 'sparkles',
    slots: [
      { label: 'Highlights', description: 'A full day in the festival: Silom Road and Siam Square close to traffic for concerts, foam parties, and organized water slides. Group dinner in the evening.' },
    ],
  },
  {
    day: 4,
    title: 'Last Day of Bangkok Songkran',
    city: 'Bangkok',
    hotel: 'Our 5-Star Bangkok riverside hotel',
    vibe: 'Last splash in the capital',
    icon: 'droplets',
    slots: [
      { label: 'Highlights', description: 'Final official day of Songkran in Bangkok. Traditional merit-making and temple visits for anyone who wants a quieter morning, festival streets for everyone else in the afternoon.' },
    ],
  },
  {
    day: 5,
    title: 'Bangkok to Pattaya',
    city: 'Bangkok → Pattaya',
    hotel: 'Beachfront resort, Pattaya',
    vibe: 'The party moves to the coast',
    icon: 'ship',
    slots: [
      { label: 'Highlights', description: 'Private transfer to Pattaya, about 2 hours down the coast. Check into our beachfront resort. Evening at Beach Road, already warming up ahead of Wan Lai.' },
    ],
  },
  {
    day: 6,
    title: 'Pickleball + Beach Road',
    city: 'Pattaya',
    hotel: 'Beachfront resort, Pattaya',
    vibe: 'Play, then join the water war',
    icon: 'trophy',
    slots: [
      { label: 'Highlights', description: 'Pickleball session 1, venue to be confirmed. Afternoon and evening on Beach Road, now a kilometer-long water war zone with live music stages and beach access.' },
    ],
  },
  {
    day: 7,
    title: 'Pickleball + Walking Street',
    city: 'Pattaya',
    hotel: 'Beachfront resort, Pattaya',
    vibe: 'Play, then explore',
    icon: 'trophy',
    slots: [
      { label: 'Highlights', description: 'Pickleball session 2, venue to be confirmed. Daytime festivities and nightlife on Walking Street, or a quieter cultural stop at Lan Pho Naklua Public Park for traditional merit-making.' },
    ],
  },
  {
    day: 8,
    title: 'Wan Lai Pattaya',
    city: 'Pattaya',
    hotel: 'Beachfront resort, Pattaya',
    vibe: 'The grand finale',
    icon: 'droplets',
    slots: [
      { label: 'Highlights', description: 'Pattaya’s Wan Lai, the biggest day of the festival here and the reason we route through Pattaya at all. Beach Road at full scale: live music, beach access, the whole city out. No pickleball today. Farewell dinner in the evening.' },
    ],
  },
  {
    day: 9,
    title: 'Departure Day',
    city: 'Pattaya',
    hotel: 'Beachfront resort, Pattaya',
    vibe: 'Hugs, promises to come back',
    icon: 'plane',
    slots: [
      { label: 'Highlights', description: 'Final breakfast at the resort. Private transfer to Bangkok airport (BKK), about 2 hours. Head home, still finding water in your shoes.' },
    ],
  },
];

/* ─────────────────────── PICKLEBALL DATA ─────────────────────── */

const pickleballSessions = [
  {
    number: 1,
    city: 'Pattaya',
    venue: 'Venue to be confirmed',
    day: 'Day 6',
    time: 'Morning',
    focus: 'Assessment, warm-up, coaching + round-robin',
  },
  {
    number: 2,
    city: 'Pattaya',
    venue: 'Venue to be confirmed',
    day: 'Day 7',
    time: 'Morning',
    focus: 'Coaching clinic + doubles play',
  },
];

/* ─────────────────────── ACCOMMODATIONS DATA ─────────────────────── */

const hotels = [
  {
    name: 'Our 5-Star Bangkok riverside hotel',
    city: 'Bangkok',
    location: 'Riverside, Charoenkrung Road',
    duration: '4 Nights',
    highlights: [
      'Five-star riverside luxury on the Chao Phraya River',
      'On-site pickleball courts, spa, and world-class restaurants',
      'Front-row to the city’s Songkran street festivities',
    ],
  },
  {
    name: 'Beachfront resort, Pattaya',
    city: 'Pattaya',
    location: 'Beachfront, Pattaya',
    duration: '4 Nights',
    highlights: [
      'Beachfront property close to Beach Road and Walking Street',
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
    label: 'Songkran Street Food Night',
    description: 'Out in the Bangkok festival, eating our way through it',
  },
  {
    label: 'Pattaya Welcome',
    description: 'Beachfront dinner on arrival in Pattaya',
  },
  {
    label: 'Farewell Dinner',
    description: 'Final night celebration after Wan Lai, trip recap and toasts',
  },
];

/* ─────────────────────── HELPERS ─────────────────────── */

function getCityColor(city: string): string {
  return city === 'Pattaya' ? 'bg-[#B08D55] text-white' : 'bg-[#1D2D44] text-white';
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
          <span className="px-3 py-1.5 rounded-full bg-white/20 font-medium">Bangkok (4 nights, Songkran)</span>
          <span className="text-[#B08D55]">&rarr;</span>
          <span className="px-3 py-1.5 rounded-full bg-[#B08D55]/30 font-medium">Pattaya (4 nights, Wan Lai)</span>
        </div>
        <p className="text-white/50 text-xs mt-3">Bangkok&apos;s Songkran runs April 13&ndash;15. Pattaya peaks later, culminating in Wan Lai on April 19, so we follow the festival down the coast.</p>
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
          9 days: four in Bangkok for the official Songkran, four in Pattaya for the extended
          celebration and Wan Lai. Click any day to see the highlights.
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
        Two properties, one on the river and one on the beach: four nights in Bangkok for the
        official Songkran, then four nights in Pattaya through Wan Lai.
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
        2 sessions, both in Pattaya, once the group has moved down the coast. No pickleball
        during Bangkok Songkran (April 13&ndash;15) or on Wan Lai in Pattaya (April 19). That&apos;s
        a feature, not a gap.
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
        {[
          { value: '2', label: 'Total Sessions' },
          { value: '4-5 hrs', label: 'Total Court Time' },
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
        4 group dinners included, from the river in Bangkok to the beach in Pattaya. Daily
        breakfast throughout. Free time gives you room to explore both festivals your own way.
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
