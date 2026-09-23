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
      '6/10: Moderate. Pickleball sessions are the most physically active part. The speedboat day, beach time, and town walk keep the overall pace accessible to all fitness levels.',
  },
  { value: '4-5', label: 'Hrs. Instruction' },
  { value: '4-5', label: 'Hrs. Social Play' },
];

const includedItems = [
  '8 nights at two properties (4 nights Bangkok riverside hotel + 4 nights beachfront resort, Bang Tao Beach, Phuket)',
  'Daily breakfast at both properties (8 breakfasts)',
  'Domestic flight, Bangkok to Phuket',
  'Private airport and ground transfers throughout',
  '4 group dinners: welcome and farewell in each city',
  '4 pickleball sessions with court fees, equipment, and structured programming',
  'Guided Chinatown street food walk (all tastings included)',
  'Wat Pho guided temple tour (Reclining Buddha)',
  'Full-day private speedboat charter through Phang Nga Bay: James Bond Island, kayaking, snorkelling',
  'Old Phuket Town walking tour',
  'Hotel wellness amenities: spa, pools, fitness centers',
  'Dedicated trip host throughout',
  'Welcome pack with trip essentials',
];

const extrasItems = [
  'International airfare to/from Bangkok (BKK) and home from Phuket (HKT)',
  'Travel and medical insurance',
  'Michelin dining upgrades (optional group outings to starred restaurants)',
  'Optional spa treatments beyond hotel amenities',
  'Alcoholic beverages beyond group dinner inclusions',
  'Meals on designated free nights',
  'Personal shopping and souvenirs',
  'Gratuities for guides, drivers, and hotel staff',
];

/* ─────────────────────── ITINERARY DATA ─────────────────────── */

type DayIcon = 'trophy' | 'landmark' | 'ship' | 'sparkles' | 'plane';

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
    title: 'Pickleball + River Cruise',
    city: 'Bangkok',
    hotel: 'Our 5-Star Bangkok riverside hotel',
    vibe: 'Shake off the rust, then explore the river',
    icon: 'trophy',
    slots: [
      { label: 'Highlights', description: 'Morning session on court at the Bangkok riverside hotel. Afternoon long-tail boat cruise through Bangkok’s canals past the Grand Palace and Wat Arun at sunset.' },
    ],
  },
  {
    day: 3,
    title: 'Temples, Street Food + Pickleball',
    city: 'Bangkok',
    hotel: 'Our 5-Star Bangkok riverside hotel',
    vibe: 'One temple done right, then eat everything',
    icon: 'landmark',
    slots: [
      { label: 'Highlights', description: 'Guided tour of Wat Pho (Reclining Buddha), street food walk through Chinatown, afternoon pickleball session at the Bangkok riverside hotel. Free evening to explore night markets or rooftop bars.' },
    ],
  },
  {
    day: 4,
    title: 'Fly to Phuket',
    city: 'Phuket',
    hotel: 'Beachfront resort, Bang Tao Beach',
    vibe: 'Bangkok to the beach',
    icon: 'plane',
    slots: [
      { label: 'Highlights', description: 'Domestic flight from Bangkok to Phuket. Check into our beachfront resort on Bang Tao Beach. Welcome dinner by the water.' },
    ],
  },
  {
    day: 5,
    title: 'Pickleball + Beach Day',
    city: 'Phuket',
    hotel: 'Beachfront resort, Bang Tao Beach',
    vibe: 'Play, then sink into the sand',
    icon: 'trophy',
    slots: [
      { label: 'Highlights', description: 'Morning pickleball session, venue to be confirmed. Free afternoon at Bang Tao Beach or the resort pool.' },
    ],
  },
  {
    day: 6,
    title: 'Phang Nga Bay',
    city: 'Phuket',
    hotel: 'Beachfront resort, Bang Tao Beach',
    vibe: 'James Bond Island by private speedboat',
    icon: 'ship',
    slots: [
      { label: 'Highlights', description: 'Full-day private speedboat charter through Phang Nga Bay: James Bond Island, kayaking through the limestone caves, and snorkelling. Group dinner back at the resort.' },
    ],
  },
  {
    day: 7,
    title: 'Old Phuket Town + Final Pickleball',
    city: 'Phuket',
    hotel: 'Beachfront resort, Bang Tao Beach',
    vibe: 'Sino-Portuguese streets, then last paddles',
    icon: 'landmark',
    slots: [
      { label: 'Highlights', description: 'Morning walking tour of Old Phuket Town, Sino-Portuguese architecture and local coffee shops. Final pickleball session in the afternoon, fun tournament and awards. Farewell dinner.' },
    ],
  },
  {
    day: 8,
    title: 'Free Day, Phuket',
    city: 'Phuket',
    hotel: 'Beachfront resort, Bang Tao Beach',
    vibe: 'Slow morning, your own agenda',
    icon: 'sparkles',
    slots: [
      { label: 'Highlights', description: 'A free day before departure. Beach, pool, spa, or explore Bang Tao at your own pace.' },
    ],
  },
  {
    day: 9,
    title: 'Departure Day',
    city: 'Phuket',
    hotel: 'Beachfront resort, Bang Tao Beach',
    vibe: 'Hugs, promises to come back',
    icon: 'plane',
    slots: [
      { label: 'Highlights', description: 'Final breakfast at the resort. Private transfer to Phuket airport (HKT). Fly home from Phuket, no return to Bangkok.' },
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
    city: 'Bangkok',
    venue: 'Bangkok riverside hotel',
    day: 'Day 3',
    time: 'Afternoon',
    focus: 'Coaching clinic + doubles play',
  },
  {
    number: 3,
    city: 'Phuket',
    venue: 'Venue to be confirmed',
    day: 'Day 5',
    time: 'Morning',
    focus: 'Coaching clinic + round-robin',
  },
  {
    number: 4,
    city: 'Phuket',
    venue: 'Venue to be confirmed',
    day: 'Day 7',
    time: 'Afternoon',
    focus: 'Fun tournament + awards ceremony',
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
      'Outdoor riverside pool and daily breakfast included',
    ],
  },
  {
    name: 'Beachfront resort, Bang Tao Beach',
    city: 'Phuket',
    location: 'Bang Tao Beach, Phuket',
    duration: '4 Nights',
    highlights: [
      'Beachfront resort on the Andaman coast',
      'Full-service spa and wellness facilities',
      'Resort pool, daily breakfast, and beachfront dining',
    ],
  },
];

/* ─────────────────────── DINING DATA ─────────────────────── */

const groupDinners = [
  {
    city: 'Bangkok',
    label: 'Welcome Dinner',
    restaurant: 'Riverside dining',
    description: 'Welcome dinner on the river at the hotel',
  },
  {
    city: 'Phuket',
    label: 'Phuket Welcome',
    restaurant: 'Beachside restaurant',
    description: 'Welcome dinner by the water on Bang Tao Beach',
  },
  {
    city: 'Phuket',
    label: 'Farewell Dinner',
    restaurant: 'Curated fine dining',
    description: 'Final night celebration on the Andaman coast',
  },
];

/* ─────────────────────── HELPERS ─────────────────────── */

function getCityColor(city: string): string {
  return city === 'Phuket' ? 'bg-[#B08D55] text-white' : 'bg-[#1D2D44] text-white';
}

/* ─────────────────────── SECTION COMPONENTS ─────────────────────── */

function TripDetailsPhuket() {
  return (
    <div className="space-y-10">
      <StatBar items={statItems} />

      {/* Route Visual */}
      <div className="bg-gradient-to-r from-[#1D2D44] to-[#495F87] rounded-2xl p-6 text-white">
        <h3 className="font-serif text-lg font-bold mb-4">The Route</h3>
        <div className="flex items-center gap-3 text-sm flex-wrap">
          <span className="px-3 py-1.5 rounded-full bg-white/20 font-medium">Our 5-Star Bangkok Hotel (4 nights)</span>
          <span className="text-[#B08D55]">&rarr;</span>
          <span className="px-3 py-1.5 rounded-full bg-[#B08D55]/30 font-medium">Beachfront Resort, Bang Tao Beach (4 nights)</span>
        </div>
        <p className="text-white/50 text-xs mt-3">Fly home from Phuket (HKT) on departure day. No return to Bangkok.</p>
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
          9 days across Bangkok and Phuket, flying home from Phuket on departure day. Click any day to see the highlights.
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

function AccommodationsPhuket() {
  return (
    <div className="space-y-8">
      <p className="text-[#1D2D44]/70 text-base leading-relaxed max-w-3xl">
        Two properties selected for their location and proximity to our pickleball venues.
        Four nights in Bangkok, then four nights on Bang Tao Beach in Phuket.
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

function PickleballPhuket() {
  return (
    <div className="space-y-10">
      <p className="text-[#1D2D44]/70 text-base leading-relaxed max-w-3xl">
        4 sessions across 2 cities. Each session blends structured instruction with social
        play, so you&apos;re improving your game and meeting your travel crew at the same time.
        Phuket court venue to be confirmed.
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

function DiningPhuket() {
  return (
    <div className="space-y-10">
      <p className="text-[#1D2D44]/70 text-base leading-relaxed max-w-3xl">
        4 group dinners included, from riverside restaurants in Bangkok to beachfront dining
        on Bang Tao Beach. Daily breakfast at both properties. Free nights give you a chance
        to explore on your own. Your trip host will share curated recommendations.
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

export function TripSectionContentPhuket({ activeSection }: { activeSection: TripSection }) {
  switch (activeSection) {
    case 'details':
      return <TripDetailsPhuket />;
    case 'itinerary':
      return <ItineraryAccordion />;
    case 'accommodations':
      return <AccommodationsPhuket />;
    case 'pickleball':
      return <PickleballPhuket />;
    case 'dining':
      return <DiningPhuket />;
    case 'faq':
      return <TripFAQ />;
    case 'cancellation':
      return <CancellationSection />;
    case 'insurance':
      return <TravelInsuranceSection />;
    default:
      return <TripDetailsPhuket />;
  }
}
