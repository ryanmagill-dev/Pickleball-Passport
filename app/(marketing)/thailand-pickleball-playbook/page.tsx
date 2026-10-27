import type { Metadata } from "next";
import Link from "next/link";

// Self-hosted copy of the V2 playbook (public/thailand-pickleball-playbook-2026.pdf).
// Not exported: Next.js only allows its own named exports from page files.
const PLAYBOOK_PDF_URL = "/thailand-pickleball-playbook-2026.pdf";

export const metadata: Metadata = {
  title:
    "The Thailand Pickleball Playbook 2026: Courts, Cities & Travel Guide | The Pickleball Passport",
  description:
    "Where to play pickleball in Thailand across Bangkok, Hua Hin, Pattaya, Chiang Mai, and Phuket. Vetted court directory, heat survival checklist, best seasons, and a 9-day trip rhythm.",
  keywords: [
    "pickleball in Thailand",
    "where to play pickleball in Bangkok",
    "Bangkok pickleball courts",
    "Hua Hin pickleball courts",
    "Chiang Mai pickleball",
    "Phuket pickleball courts",
    "Pattaya pickleball courts",
    "Thailand pickleball travel guide",
    "Thailand Pickleball Playbook 2026",
    "Arise Pickleball Bangkok",
    "Papaya Pickleball Bangkok",
    "Sterling Sport and Wellness Bangkok",
    "BokBok Pickleball Chiang Mai",
    "Sports Life Hua Hin pickleball",
    "Raccoon Pickleball Phuket",
  ],
  alternates: {
    canonical: "https://www.thepickleballpassport.org/thailand-pickleball-playbook",
  },
  openGraph: {
    title: "The Thailand Pickleball Playbook 2026 | The Pickleball Passport",
    description:
      "Find the right games, handle the heat, and explore Thailand properly. City-by-city pickleball courts in Bangkok, Hua Hin, Pattaya, Chiang Mai, and Phuket.",
    url: "https://www.thepickleballpassport.org/thailand-pickleball-playbook",
    siteName: "The Pickleball Passport",
    locale: "en_US",
    type: "article",
    images: [
      {
        url: "https://www.thepickleballpassport.org/og-images/homepage.jpg",
        width: 1200,
        height: 630,
        alt: "The Thailand Pickleball Playbook 2026 by The Pickleball Passport",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Thailand Pickleball Playbook 2026 | The Pickleball Passport",
    description:
      "Find the right games, handle the heat, and explore Thailand properly. Courts, booking apps, seasons, and a 9-day rhythm.",
    images: ["https://www.thepickleballpassport.org/og-images/homepage.jpg"],
  },
};

interface CourtVenue {
  name: string;
  city: string;
  note: string;
}

interface CityGuide {
  id: string;
  regionTag: string;
  city: string;
  headline: string;
  ruleOfThumb: string;
  summary: string;
  courts: CourtVenue[];
  courtNote: string;
  localTip: string;
}

const CITY_GUIDES: CityGuide[] = [
  {
    id: "bangkok",
    regionTag: "01 · Capital Base",
    city: "Bangkok",
    headline: "Where to Base Yourself: Bangkok",
    ruleOfThumb: "Location > Star Rating",
    summary:
      "Choose your base before your hotel. In Bangkok, being close to the courts, BTS or MRT lines, food, and the neighborhoods you actually want to experience matters more than adding another hotel amenity.",
    courts: [
      {
        name: "Arise Pickleball",
        city: "Bangkok (Udom Suk)",
        note: "Dedicated pickleball community with organized sessions and strong local play. Budget 30 to 40 minutes by Grab from central Bangkok (roughly 150 to 250 THB each way) or take the BTS Skytrain to Udom Suk.",
      },
      {
        name: "Sterling Sport & Wellness",
        city: "Bangkok",
        note: "Well-kept courts pairing quality play with wellness and recovery facilities.",
      },
      {
        name: "Papaya Pickleball",
        city: "Bangkok",
        note: "Active Bangkok club hosting coached play, organized rotations, and community games.",
      },
    ],
    courtNote: "Strongest depth of organized play in Thailand",
    localTip:
      "Don't plan Bangkok by map distance. A short stretch on the map can take an hour in rush-hour traffic. Use BTS and MRT when traffic locks up, and message venues on LINE or Reclub a week before you land.",
  },
  {
    id: "hua-hin",
    regionTag: "02 · Beach Rhythm",
    city: "Hua Hin",
    headline: "Where to Base Yourself: Hua Hin",
    ruleOfThumb: "For a Slower Second Leg",
    summary:
      "A second base should feel different from Bangkok. Think slower mornings, recovery, water access, and fewer transfers. Hua Hin works well when you want real courts and a coastal pace without turning the whole trip into airport-hopping.",
    courts: [
      {
        name: "Sports Life",
        city: "Hua Hin",
        note: "Active Hua Hin court hub with regular expat and visiting player sessions.",
      },
      {
        name: "T-Rex",
        city: "Hua Hin",
        note: "Friendly community venue popular with local regulars and seasonal visitors.",
      },
      {
        name: "Bluport",
        city: "Hua Hin",
        note: "Central Hua Hin location near dining, shopping, and beach resorts.",
      },
    ],
    courtNote: "Good for a slower second leg",
    localTip:
      "Hua Hin is an easy private van transfer south of Bangkok, which means zero airport security lines on your transition day.",
  },
  {
    id: "pattaya",
    regionTag: "02 · Beach Rhythm",
    city: "Pattaya",
    headline: "Where to Base Yourself: Pattaya",
    ruleOfThumb: "Fast Coastal Access from Bangkok",
    summary:
      "Like Hua Hin, Pattaya gives you water access, resort recovery, and an active court scene within easy driving distance of Bangkok.",
    courts: [
      {
        name: "88 Pickleball",
        city: "Pattaya",
        note: "Dedicated Pattaya venue running organized open play and group sessions.",
      },
      {
        name: "Skyline",
        city: "Pattaya",
        note: "Popular court setup drawing both local residents and visiting players.",
      },
      {
        name: "Sunshine",
        city: "Pattaya",
        note: "Welcoming coastal club with regular morning and evening play windows.",
      },
    ],
    courtNote: "Good for a slower second leg",
    localTip:
      "Book early morning or evening court blocks so the midday coastal heat stays reserved for the pool or a Thai massage.",
  },
  {
    id: "chiang-mai",
    regionTag: "03 · Northern Thailand",
    city: "Chiang Mai",
    headline: "Where to Base Yourself: Chiang Mai",
    ruleOfThumb: "Best in the Cooler Season",
    summary:
      "Chiang Mai works best when the season is right. Pair pickleball with Northern Thai food, Lanna culture, and mountain air, but avoid building a northern trip around the burning-season months when air quality can be poor.",
    courts: [
      {
        name: "BokBok Pickleball",
        city: "Chiang Mai",
        note: "Go-to Chiang Mai pickleball community with welcoming local and expat games.",
      },
      {
        name: "All-Time",
        city: "Chiang Mai",
        note: "Regularly scheduled sessions for visiting and resident players.",
      },
      {
        name: "Rally House",
        city: "Chiang Mai",
        note: "Active Northern Thailand venue; check current weekly schedules before arrival.",
      },
    ],
    courtNote: "Confirm current schedules before travel",
    localTip:
      "Target November through February for Chiang Mai. In March and April, agricultural burning hurts northern air quality, so stick to Bangkok and southern beach bases during those months.",
  },
  {
    id: "phuket",
    regionTag: "04 · Southern Islands",
    city: "Phuket",
    headline: "Where to Base Yourself: Phuket",
    ruleOfThumb: "Island Recovery + Court Access",
    summary:
      "Phuket pairs Andaman Sea beaches and boat days on Phang Nga Bay with a growing island pickleball community. It works well as a 3-night beach extension or a southern leg when northern air quality dips.",
    courts: [
      {
        name: "Raccoon Pickleball Club",
        city: "Phuket",
        note: "Established Phuket pickleball club hosting visiting players and organized games.",
      },
      {
        name: "Sharkbites",
        city: "Phuket",
        note: "Island venue with social and competitive play windows.",
      },
      {
        name: "Pickleball Phuket",
        city: "Phuket",
        note: "Local community hub; message ahead to confirm weekly session times.",
      },
    ],
    courtNote: "Confirm current schedules before travel",
    localTip:
      "Pair morning court sessions with afternoon beach recovery or a private boat charter, and fly home directly from Phuket International Airport (HKT) instead of backtracking to Bangkok.",
  },
];

const SEASON_WINDOWS = [
  {
    months: "November to February",
    badge: "Peak Window",
    summary:
      "Best all-around window: cooler, drier, and the pickleball scene is most active with visiting and expat players across Bangkok, Chiang Mai, Hua Hin, Pattaya, and Phuket.",
  },
  {
    months: "March to May",
    badge: "Hot Season",
    summary:
      "Outdoor play should be early morning, late evening, or indoors. Heat and humidity change how much you can realistically play. Avoid planning Northern Thailand around burning season; Bangkok and southern destinations are the best choices then.",
  },
  {
    months: "June to October",
    badge: "Green & Monsoon Season",
    summary:
      "Rain usually comes in bursts rather than all-day washouts, but outdoor courts get slick fast. Always build an indoor court backup into your schedule.",
  },
];

const FOUR_LAYERS = [
  {
    title: "Play",
    items: ["Clinics", "Open play", "Local-community games"],
  },
  {
    title: "Recovery",
    items: ["Thai massage", "Pool time", "A deliberately lighter day"],
  },
  {
    title: "Culture",
    items: ["Temples early", "Neighborhoods", "Markets and local food"],
  },
  {
    title: "Adventure",
    items: ["Nature", "Long-tail boats or cycling", "Unstructured time"],
  },
];

const NINE_DAY_RHYTHM = [
  {
    phase: "Phase 01 · Days 1 to 2",
    title: "Arrive + Settle",
    detail:
      "Land in Bangkok, check in near your courts and the river or BTS, play lighter on Day 1 while you adjust to the heat, and take a sunset long-tail boat through Thonburi.",
  },
  {
    phase: "Phase 02 · Days 3 to 4",
    title: "Play + Explore",
    detail:
      "Pair morning or indoor Bangkok sessions (Arise, Sterling, or Papaya) with early morning visits to Wat Pho and an evening street-food walk in Yaowarat (Chinatown) before transitioning to your second base.",
  },
  {
    phase: "Phase 03 · Days 5 to 6",
    title: "Recover + Experience",
    detail:
      "Settle into your second rhythm in Chiang Mai, Hua Hin, or Phuket. Schedule a Thai massage, pool recovery, and one reduced-intensity day alongside a cultural anchor like Elephant Nature Park or a coastal excursion.",
  },
  {
    phase: "Phase 04 · Days 7 to 9",
    title: "Play + Celebrate + Continue",
    detail:
      "Play your final community sessions or mini-tournament now that you know the local regulars, leave unscheduled afternoon hours, share a farewell meal, and fly home refreshed (or extend to the beach).",
  },
];

const EIGHT_MISTAKES = [
  {
    mistake: "They overplay on Day 1",
    fix: "Jet lag plus 90-degree humidity catches up fast. Go lighter in your first session and use electrolytes, not just plain water.",
  },
  {
    mistake: "They plan Bangkok by map distance",
    fix: "Two miles on a map can mean 50 minutes in a taxi. Pick accommodation near BTS/MRT or close to the courts you booked.",
  },
  {
    mistake: "They try to fit three cities into one week",
    fix: "Travel days are poor court days. Two bases across nine days lets you play enough to build real connections.",
  },
  {
    mistake: "They assume courts are always drop-in",
    fix: "Thailand's best games run through local organizers. Message venues a week ahead instead of showing up unannounced.",
  },
  {
    mistake: "They arrive without LINE or Grab",
    fix: "LINE is how Thai venues and groups communicate. Grab handles rides and food without language friction. Install both before you board.",
  },
  {
    mistake: "They skip recovery",
    fix: "Schedule a Thai massage every few days and keep one reduced-intensity day so your legs hold up for the second half of the trip.",
  },
  {
    mistake: "They assume random open play will match their level",
    fix: "Tell organizers both your DUPR/skill rating and how many days a week you play so they put you in the right court rotation.",
  },
  {
    mistake: "They schedule every free hour",
    fix: "Don't confuse a full calendar with a good trip. Leave unscheduled hours for the meals and conversations nobody could have planned.",
  },
];

const FAQ_ITEMS = [
  {
    question: "Where can I play pickleball in Bangkok, Hua Hin, Pattaya, Chiang Mai, and Phuket?",
    answer:
      "In Bangkok, the top venues with organized play are Arise Pickleball (Udom Suk), Sterling Sport & Wellness, and Papaya Pickleball. On the coast, Hua Hin players use Sports Life, T-Rex, and Bluport, while Pattaya players head to 88 Pickleball, Skyline, and Sunshine. In Chiang Mai, check BokBok Pickleball, All-Time, and Rally House. In Phuket, the main hubs are Raccoon Pickleball Club, Sharkbites, and Pickleball Phuket.",
  },
  {
    question: "Will I find pickleball games at my skill level in Thailand?",
    answer:
      "Yes, if you don't rely on luck. Thailand's best games are organized through local club communities rather than a single national database. Download Reclub and LINE, join city Facebook groups, and message venues about a week before arrival. Tell them how often you play alongside your skill rating so they can slot you into the right group.",
  },
  {
    question: "What is the best time of year to visit Thailand for a pickleball trip?",
    answer:
      "November to February is the best all-around window because the weather is cooler and drier, and the courts are busy with local, expat, and visiting players. March to May is hot and humid, so you should play early morning, late evening, or indoors, and avoid Chiang Mai during the northern burning season. From June to October, rain usually arrives in short bursts, so having an indoor court backup keeps your week on track.",
  },
  {
    question: "Is Thailand hard to navigate on your own?",
    answer:
      "No. The Grab app removes almost all transport friction, and Bangkok's BTS Skytrain and MRT subway beat cars during rush hour. The real mistake is trying to cross Bangkok too many times in a single day or packing three cities into a seven-day trip.",
  },
  {
    question: "Can a non-playing partner still enjoy a Thailand pickleball trip?",
    answer:
      "Yes. Thai food, wellness and spa treatments, historic neighborhoods, markets, and boat excursions create a full parallel experience while players are on court, with everyone rejoining for dinners and cultural outings.",
  },
  {
    question: "What should I pack for playing pickleball in Thailand's heat?",
    answer:
      "Bring your primary paddles, plenty of fresh overgrips (sweat eats through grips quickly in tropical humidity), court shoes, a court towel, extra dry shirts for changing mid-session, and electrolyte packets so you aren't relying on plain water alone.",
  },
];

export default function ThailandPickleballPlaybookPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "The Thailand Pickleball Playbook 2026: Find the Right Games, Handle the Heat & Explore Properly",
    description:
      "2026 guide to playing pickleball in Thailand, covering courts in Bangkok (Arise, Sterling, Papaya), Hua Hin (Sports Life, T-Rex, Bluport), Pattaya (88 Pickleball, Skyline, Sunshine), Chiang Mai (BokBok, All-Time, Rally House), and Phuket (Raccoon, Sharkbites, Pickleball Phuket).",
    author: {
      "@type": "Organization",
      name: "The Pickleball Passport",
      url: "https://www.thepickleballpassport.org",
    },
    publisher: {
      "@type": "Organization",
      name: "The Pickleball Passport",
      url: "https://www.thepickleballpassport.org",
      logo: {
        "@type": "ImageObject",
        url: "https://www.thepickleballpassport.org/logo.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://www.thepickleballpassport.org/thailand-pickleball-playbook",
    },
    datePublished: "2026-10-01",
    dateModified: "2026-10-27",
    about: [
      { "@type": "Place", name: "Bangkok, Thailand" },
      { "@type": "Place", name: "Hua Hin, Thailand" },
      { "@type": "Place", name: "Pattaya, Thailand" },
      { "@type": "Place", name: "Chiang Mai, Thailand" },
      { "@type": "Place", name: "Phuket, Thailand" },
    ],
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_ITEMS.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <main className="min-h-screen bg-[#FDF8F3] text-[#1D2D44]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Hero Section (Slide 1 & 2). clip-path + fixed video: the footage stays put while the hero scrolls over it */}
      <section className="relative overflow-hidden [clip-path:inset(0)] bg-[#0F1A2A] text-white pt-20 pb-16 sm:pt-32 sm:pb-24 border-b border-[#B08D55]/30">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="/images/playbook-sunset-poster.jpg"
          className="fixed inset-0 w-full h-full object-cover object-center"
        >
          <source src="/playbook-sunset.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F1A2A]/90 via-[#0F1A2A]/65 to-[#0F1A2A]/30" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#B08D55]/40 bg-white/10 backdrop-blur-sm px-4 py-1.5 text-xs font-bold tracking-[0.2em] uppercase text-[#CFB78D] mb-6">
            Free 23-Page Guide · 2026 Edition
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight mb-6">
            The Thailand Pickleball Playbook 2026
          </h1>
          <p className="text-xl sm:text-2xl text-[#CFB78D] font-serif mb-4">
            Find the right games. Handle the heat. Explore Thailand properly.
          </p>
          <p className="text-base sm:text-lg text-white/80 max-w-3xl leading-relaxed mb-8">
            A great Thailand pickleball trip is not built by cramming activities into every hour. It is built around rhythm: play, culture, recovery, people, and space to actually enjoy where you are. Read the full 23-part playbook below or download the PDF to keep on your phone.
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap gap-4">
            <a
              href={PLAYBOOK_PDF_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-[#B08D55] to-[#CFB78D] hover:from-[#8D7144] hover:to-[#B08D55] text-[#0F1A2A] font-bold text-sm sm:text-base shadow-xl shadow-[#B08D55]/30 transition-all"
            >
              Download the Full 23-Page PDF Playbook
            </a>
            <a
              href="#courts-by-city"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-white/25 bg-white/10 hover:bg-white/15 text-white font-semibold text-sm sm:text-base transition-all"
            >
              Jump to Courts by City
            </a>
          </div>

          <div className="grid grid-cols-3 gap-4 sm:gap-6 max-w-2xl mt-12 pt-8 border-t border-white/15">
            <div>
              <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#B08D55]">01 · Play</p>
              <p className="font-serif text-lg sm:text-xl font-bold text-white mt-1">Play Enough</p>
            </div>
            <div>
              <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#B08D55]">02 · Explore</p>
              <p className="font-serif text-lg sm:text-xl font-bold text-white mt-1">Explore Deeply</p>
            </div>
            <div>
              <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#B08D55]">03 · Recover</p>
              <p className="font-serif text-lg sm:text-xl font-bold text-white mt-1">Leave Room</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick-Jump Navigation (not sticky: the site header is already sticky at top-0) */}
      <nav
        aria-label="Playbook Quick Jump"
        className="bg-[#FDF8F3]/95 backdrop-blur-md border-b border-[#B08D55]/20 py-3 shadow-sm"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          <div className="flex min-w-0 items-center gap-1 overflow-x-auto text-xs sm:text-sm font-medium whitespace-nowrap">
            <span className="text-[#B08D55] font-bold uppercase tracking-wider mr-1">Jump to:</span>
            <a href="#bangkok" className="px-2.5 py-1.5 rounded-lg hover:bg-[#F5E6D3] text-[#1D2D44] transition-colors">
              Bangkok
            </a>
            <a href="#hua-hin" className="px-2.5 py-1.5 rounded-lg hover:bg-[#F5E6D3] text-[#1D2D44] transition-colors">
              Hua Hin
            </a>
            <a href="#pattaya" className="px-2.5 py-1.5 rounded-lg hover:bg-[#F5E6D3] text-[#1D2D44] transition-colors">
              Pattaya
            </a>
            <a href="#chiang-mai" className="px-2.5 py-1.5 rounded-lg hover:bg-[#F5E6D3] text-[#1D2D44] transition-colors">
              Chiang Mai
            </a>
            <a href="#phuket" className="px-2.5 py-1.5 rounded-lg hover:bg-[#F5E6D3] text-[#1D2D44] transition-colors">
              Phuket
            </a>
            <a href="#seasons-and-heat" className="px-2.5 py-1.5 rounded-lg hover:bg-[#F5E6D3] text-[#1D2D44] transition-colors">
              Seasons &amp; Heat
            </a>
            <a href="#find-games" className="px-2.5 py-1.5 rounded-lg hover:bg-[#F5E6D3] text-[#1D2D44] transition-colors">
              Booking &amp; Apps
            </a>
            <a href="#nine-day-rhythm" className="px-2.5 py-1.5 rounded-lg hover:bg-[#F5E6D3] text-[#1D2D44] transition-colors">
              9-Day Rhythm
            </a>
            <a href="#faq" className="px-2.5 py-1.5 rounded-lg hover:bg-[#F5E6D3] text-[#1D2D44] transition-colors">
              FAQ
            </a>
          </div>
          <a
            href={PLAYBOOK_PDF_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex shrink-0 items-center px-3.5 py-1.5 rounded-lg bg-[#1D2D44] text-[#CFB78D] text-xs font-bold whitespace-nowrap hover:bg-[#0F1A2A] transition-colors"
          >
            Download PDF
          </a>
        </div>
      </nav>

      {/* Why Thailand Works for Pickleball (Slide 3) */}
      <section className="py-14 sm:py-16 bg-white border-b border-[#B08D55]/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#B08D55] mb-2">
            The Premise
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1D2D44] mb-3">
            Why Thailand Works for Pickleball
          </h2>
          <p className="text-lg text-[#1D2D44]/75 max-w-2xl mb-10">
            Pickleball gives you a reason to enter Thailand socially, not just observe it.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#FDF8F3] rounded-2xl border border-[#B08D55]/15 p-6">
              <span className="text-xs font-bold tracking-[0.2em] text-[#B08D55] uppercase">01 · Play</span>
              <h3 className="font-serif text-xl font-bold text-[#1D2D44] mt-2 mb-2">
                Active Communities &amp; Dedicated Courts
              </h3>
              <p className="text-sm text-[#1D2D44]/75 leading-relaxed">
                From indoor clubs in Bangkok to beachside and northern venues, you can find organized rotations and welcoming local regulars in every major hub.
              </p>
            </div>
            <div className="bg-[#FDF8F3] rounded-2xl border border-[#B08D55]/15 p-6">
              <span className="text-xs font-bold tracking-[0.2em] text-[#B08D55] uppercase">02 · Live Well</span>
              <h3 className="font-serif text-xl font-bold text-[#1D2D44] mt-2 mb-2">
                Food, Hospitality &amp; Strong Travel Value
              </h3>
              <p className="text-sm text-[#1D2D44]/75 leading-relaxed">
                Five-star riverside stays, private coaching, daily Thai massage recovery, and memorable meals cost a fraction of comparable trips in the US or Europe.
              </p>
            </div>
            <div className="bg-[#FDF8F3] rounded-2xl border border-[#B08D55]/15 p-6">
              <span className="text-xs font-bold tracking-[0.2em] text-[#B08D55] uppercase">03 · Connect</span>
              <h3 className="font-serif text-xl font-bold text-[#1D2D44] mt-2 mb-2">
                Culture, Wellness &amp; Local Connection
              </h3>
              <p className="text-sm text-[#1D2D44]/75 leading-relaxed">
                Sharing a court turns strangers into dinner companions before the first hour is up. You experience the country with people who live there.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* City-by-City Court Directory & Where to Base Yourself (Slides 4, 5, 6, 12) */}
      <section id="courts-by-city" className="scroll-mt-24 py-16 sm:py-20 bg-[#FDF8F3] border-b border-[#B08D55]/15">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#B08D55] mb-2">
              City-by-City Court Directory
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1D2D44] mb-4">
              Where to Play &amp; Where to Base Yourself
            </h2>
            <p className="text-base sm:text-lg text-[#1D2D44]/75 leading-relaxed">
              Think city-by-city, then find the right community. Below is every major Thailand pickleball hub from the 2026 Playbook, including the primary courts in Bangkok, Hua Hin, Pattaya, Chiang Mai, and Phuket.
            </p>
          </div>

          <div className="space-y-10">
            {CITY_GUIDES.map((city) => (
              <article
                key={city.id}
                id={city.id}
                className="scroll-mt-24 bg-white rounded-2xl border border-[#B08D55]/15 p-6 sm:p-8 shadow-sm"
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 pb-5 mb-6 border-b border-[#B08D55]/10">
                  <div>
                    <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#B08D55]">
                      {city.regionTag}
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#1D2D44] mt-1">
                      {city.city}: {city.headline}
                    </h3>
                  </div>
                  <span className="inline-flex self-start sm:self-center px-3.5 py-1.5 rounded-full bg-[#F5E6D3] text-[#1D2D44] text-xs font-bold uppercase tracking-wider">
                    {city.ruleOfThumb}
                  </span>
                </div>

                <p className="text-[#1D2D44]/80 text-base leading-relaxed mb-6">
                  {city.summary}
                </p>

                <h4 className="text-xs font-bold tracking-[0.15em] uppercase text-[#B08D55] mb-4">
                  Key {city.city} Pickleball Courts ({city.courtNote})
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  {city.courts.map((court) => (
                    <div
                      key={court.name}
                      className="bg-[#FDF8F3] rounded-xl border border-[#B08D55]/15 p-4"
                    >
                      <p className="font-serif font-bold text-[#1D2D44] text-lg">
                        {court.name}
                      </p>
                      <p className="text-xs font-semibold text-[#B08D55] mb-2">
                        {court.city}
                      </p>
                      <p className="text-sm text-[#1D2D44]/75 leading-relaxed">
                        {court.note}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="bg-[#1D2D44] text-white rounded-xl p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center gap-3">
                  <span className="text-xs font-bold tracking-[0.15em] uppercase text-[#CFB78D] shrink-0">
                    Local Planning Tip:
                  </span>
                  <p className="text-sm text-white/90 leading-relaxed">
                    {city.localTip}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Heat Survival & Best Seasons (Slides 10 & 11) */}
      <section id="seasons-and-heat" className="scroll-mt-24 py-16 sm:py-20 bg-white border-b border-[#B08D55]/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-5 bg-[#0F1A2A] text-white rounded-2xl p-6 sm:p-8 border border-[#B08D55]/25">
              <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#CFB78D] mb-2">
                First-Day Survival Checklist
              </p>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-4">
                The Heat Will Humble You
              </h2>
              <p className="text-sm text-white/75 leading-relaxed mb-6">
                Even fit players feel tropical humidity on their first court day. Respect the climate early so you stay sharp all week:
              </p>
              <ul className="space-y-4 text-sm">
                <li className="flex items-start gap-3 bg-white/5 rounded-xl p-3.5 border border-white/10">
                  <span className="font-bold text-[#CFB78D]">01</span>
                  <span><strong>Play lighter on Day 1.</strong> Shake off the flight before jumping into three-hour competitive blocks.</span>
                </li>
                <li className="flex items-start gap-3 bg-white/5 rounded-xl p-3.5 border border-white/10">
                  <span className="font-bold text-[#CFB78D]">02</span>
                  <span><strong>Use electrolytes, not only water.</strong> You sweat out salt fast; mineral packets in every bottle prevent late-session cramping.</span>
                </li>
                <li className="flex items-start gap-3 bg-white/5 rounded-xl p-3.5 border border-white/10">
                  <span className="font-bold text-[#CFB78D]">03</span>
                  <span><strong>Pack extra shirts, a towel, and fresh overgrips.</strong> Humid air makes tacky grips slick within an hour.</span>
                </li>
                <li className="flex items-start gap-3 bg-white/5 rounded-xl p-3.5 border border-white/10">
                  <span className="font-bold text-[#CFB78D]">04</span>
                  <span><strong>Outdoor play: early morning or evening.</strong> Save midday hours for indoor courts, massage, or the pool.</span>
                </li>
              </ul>
            </div>

            <div className="lg:col-span-7 flex flex-col justify-between">
              <div>
                <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#B08D55] mb-2">
                  Seasonal Calendar
                </p>
                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1D2D44] mb-4">
                  When to Come: Season Changes the Trip
                </h2>
                <p className="text-[#1D2D44]/75 text-base leading-relaxed mb-6">
                  You can play pickleball in Thailand twelve months a year, but the season dictates which cities to pair and whether you need indoor backups.
                </p>
                <div className="space-y-4">
                  {SEASON_WINDOWS.map((s) => (
                    <div
                      key={s.months}
                      className="bg-[#FDF8F3] rounded-2xl border border-[#B08D55]/15 p-5"
                    >
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                        <h3 className="font-serif text-xl font-bold text-[#1D2D44]">
                          {s.months}
                        </h3>
                        <span className="px-3 py-1 rounded-full bg-[#B08D55]/15 text-[#1D2D44] text-xs font-bold uppercase tracking-wider">
                          {s.badge}
                        </span>
                      </div>
                      <p className="text-sm text-[#1D2D44]/75 leading-relaxed">
                        {s.summary}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Find Games at Your Level & 60-Second Checklist (Slides 13 & 22) */}
      <section id="find-games" className="scroll-mt-24 py-16 sm:py-20 bg-[#FDF8F3] border-b border-[#B08D55]/15">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#B08D55] mb-2">
              Do This Before You Arrive
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1D2D44] mb-3">
              How to Find Games at Your Level
            </h2>
            <p className="text-base text-[#1D2D44]/75 leading-relaxed">
              Thailand&apos;s best games are organized through local club communities rather than a single national booking system. Follow these four steps a week before your flight:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
            <div className="bg-white rounded-2xl border border-[#B08D55]/15 p-5">
              <span className="text-xs font-bold text-[#B08D55] uppercase tracking-wider">Step 01</span>
              <h3 className="font-serif text-lg font-bold text-[#1D2D44] mt-1 mb-2">
                Join City Facebook Groups
              </h3>
              <p className="text-sm text-[#1D2D44]/70 leading-relaxed">
                Search for Bangkok, Chiang Mai, Hua Hin, Pattaya, and Phuket pickleball groups to see weekly schedules and visiting player threads.
              </p>
            </div>
            <div className="bg-white rounded-2xl border border-[#B08D55]/15 p-5">
              <span className="text-xs font-bold text-[#B08D55] uppercase tracking-wider">Step 02</span>
              <h3 className="font-serif text-lg font-bold text-[#1D2D44] mt-1 mb-2">
                Download Reclub &amp; LINE
              </h3>
              <p className="text-sm text-[#1D2D44]/70 leading-relaxed">
                Many Thai clubs post open-play signups on Reclub and manage waitlists, court pins, and weather updates on LINE.
              </p>
            </div>
            <div className="bg-white rounded-2xl border border-[#B08D55]/15 p-5">
              <span className="text-xs font-bold text-[#B08D55] uppercase tracking-wider">Step 03</span>
              <h3 className="font-serif text-lg font-bold text-[#1D2D44] mt-1 mb-2">
                Message Venues a Week Ahead
              </h3>
              <p className="text-sm text-[#1D2D44]/70 leading-relaxed">
                Don&apos;t assume every court is all-day drop-in. Send a message seven days out to lock in leveled sessions or private court blocks.
              </p>
            </div>
            <div className="bg-white rounded-2xl border border-[#B08D55]/15 p-5">
              <span className="text-xs font-bold text-[#B08D55] uppercase tracking-wider">Step 04</span>
              <h3 className="font-serif text-lg font-bold text-[#1D2D44] mt-1 mb-2">
                Share Your Level + Frequency
              </h3>
              <p className="text-sm text-[#1D2D44]/70 leading-relaxed">
                Tell organizers how many days a week you play alongside your DUPR or rating. That context gets you invited to the right court faster.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-[#B08D55]/20 p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#B08D55] mb-1">
                The 60-Second Thailand Checklist
              </p>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#1D2D44] mb-2">
                Four Things to Lock In Before Takeoff
              </h3>
              <p className="text-sm text-[#1D2D44]/75">
                1. Install Grab and LINE · 2. Confirm games with local venues · 3. Pack paddle + extra overgrips · 4. Leave recovery time in your schedule.
              </p>
            </div>
            <a
              href={PLAYBOOK_PDF_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#B08D55] to-[#CFB78D] text-[#0F1A2A] font-bold text-sm shadow-md hover:shadow-lg transition-all"
            >
              Save Checklist PDF
            </a>
          </div>
        </div>
      </section>

      {/* Food, Culture & Layers (Slides 7, 8, 9, 14, 15, 16, 17) */}
      <section className="py-16 sm:py-20 bg-white border-b border-[#B08D55]/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {/* Build Layers, Not an Activity List (Slide 8) */}
          <div>
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#B08D55] mb-2">
              Trip Architecture
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1D2D44] mb-3">
              Don&apos;t Build an Activity List. Build Layers.
            </h2>
            <p className="text-[#1D2D44]/75 text-base max-w-3xl mb-8">
              A good longer trip alternates intensity. Play enough to create repeated interaction, then give culture, recovery, and travel enough space to breathe. Remember: travel days are poor court days, clinics are tighter and higher-focus, and open play runs longer because people rotate, rest, and socialize.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {FOUR_LAYERS.map((layer) => (
                <div
                  key={layer.title}
                  className="bg-[#FDF8F3] rounded-2xl border border-[#B08D55]/15 p-5"
                >
                  <h3 className="font-serif text-xl font-bold text-[#1D2D44] mb-3">
                    {layer.title}
                  </h3>
                  <ul className="space-y-2 text-sm text-[#1D2D44]/75">
                    {layer.items.map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#B08D55]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Food & Culture Entered, Not Observed (Slides 7 & 9) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#FDF8F3] rounded-2xl border border-[#B08D55]/15 p-6 sm:p-8">
              <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#B08D55] mb-2">
                Food Is Part of the Experience
              </p>
              <h3 className="font-serif text-2xl font-bold text-[#1D2D44] mb-4">
                Eat With People, Not Just Near Them
              </h3>
              <div className="space-y-4 text-sm text-[#1D2D44]/75 leading-relaxed">
                <p>
                  <strong className="text-[#1D2D44]">Street Food:</strong> Busy local stalls, high turnover, and freshly wok-fired dishes are often far more memorable than another formal restaurant reservation.
                </p>
                <p>
                  <strong className="text-[#1D2D44]">Yaowarat (Chinatown):</strong> Go after dark. Walk, taste, follow the crowds, and let the evening unfold rather than planning every stop.
                </p>
                <p>
                  <strong className="text-[#1D2D44]">Shared Meals:</strong> The social side of Thai food is half the point. Put dishes in the middle of the table, let everyone reach in, and let post-match conversation do the rest.
                </p>
              </div>
            </div>

            <div className="bg-[#FDF8F3] rounded-2xl border border-[#B08D55]/15 p-6 sm:p-8">
              <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#B08D55] mb-2">
                Culture Entered, Not Observed
              </p>
              <h3 className="font-serif text-2xl font-bold text-[#1D2D44] mb-4">
                Three Ways to Experience Bangkok
              </h3>
              <div className="space-y-4 text-sm text-[#1D2D44]/75 leading-relaxed">
                <p>
                  <strong className="text-[#1D2D44]">Markets &amp; Neighborhoods:</strong> Walk where people actually spend time. The goal is to understand the rhythm of the city, not collect tourist stops.
                </p>
                <p>
                  <strong className="text-[#1D2D44]">Canals at Sunset:</strong> A private long-tail boat through Thonburi changes how Bangkok makes sense. The city reads differently from the water.
                </p>
                <p>
                  <strong className="text-[#1D2D44]">Temples Early:</strong> Places like Wat Pho (the Reclining Buddha) are far better before the heat and tour buses arrive. Go early and leave time to linger.
                </p>
              </div>
            </div>
          </div>

          {/* Accommodation, Recovery & Leaving Room (Slides 15, 16, 17) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl border border-[#B08D55]/15 p-6 shadow-sm">
              <h3 className="font-serif text-xl font-bold text-[#1D2D44] mb-3">
                Rest Is Part of the Plan
              </h3>
              <p className="text-sm text-[#1D2D44]/75 leading-relaxed mb-3">
                A deliberately lighter block makes the second half of the trip much better:
              </p>
              <ul className="space-y-2 text-sm text-[#1D2D44]/75">
                <li>• Thai massage every few days</li>
                <li>• Pool or low-impact water recovery</li>
                <li>• One reduced-intensity day mid-week</li>
                <li>• Never confuse a full calendar with a good trip</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl border border-[#B08D55]/15 p-6 shadow-sm">
              <h3 className="font-serif text-xl font-bold text-[#1D2D44] mb-3">
                Choose Accommodation for Rhythm
              </h3>
              <p className="text-sm text-[#1D2D44]/75 leading-relaxed mb-3">
                The right property supports the trip instead of becoming the trip:
              </p>
              <ul className="space-y-2 text-sm text-[#1D2D44]/75">
                <li>• Quiet sleep, strong AC, and recovery space</li>
                <li>• Location that cuts out unnecessary transfers</li>
                <li>• Pool, massage, or wellness options nearby</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl border border-[#B08D55]/15 p-6 shadow-sm">
              <h3 className="font-serif text-xl font-bold text-[#1D2D44] mb-3">
                Leave Room for Thailand
              </h3>
              <p className="text-sm text-[#1D2D44]/75 leading-relaxed mb-3">
                Structure the essentials, then leave space for spontaneity:
              </p>
              <ul className="space-y-2 text-sm text-[#1D2D44]/75">
                <li>• Eat where locals actually eat</li>
                <li>• Build around one or two cultural anchors</li>
                <li>• Take a market walk or Thai cooking class</li>
                <li>• Leave unscheduled hours for unplanned moments</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* The Rhythm of a Great 9-Day Trip & Common Mistakes (Slides 18, 19, 21) */}
      <section id="nine-day-rhythm" className="scroll-mt-24 py-16 sm:py-20 bg-[#FDF8F3] border-b border-[#B08D55]/15">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div>
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#B08D55] mb-2">
              A Framework, Not a Rigid Script
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1D2D44] mb-6">
              The Rhythm of a Great 9-Day Thailand Trip
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {NINE_DAY_RHYTHM.map((step) => (
                <div
                  key={step.title}
                  className="bg-white rounded-2xl border border-[#B08D55]/15 p-6 shadow-sm"
                >
                  <span className="text-xs font-bold tracking-[0.15em] uppercase text-[#B08D55]">
                    {step.phase}
                  </span>
                  <h3 className="font-serif text-xl font-bold text-[#1D2D44] mt-1 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-[#1D2D44]/75 leading-relaxed">
                    {step.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#B08D55] mb-2">
              Avoid the Pitfalls
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1D2D44] mb-6">
              What Visitors Usually Get Wrong
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {EIGHT_MISTAKES.map((item) => (
                <div
                  key={item.mistake}
                  className="bg-white rounded-xl border border-[#B08D55]/15 p-5"
                >
                  <h3 className="font-serif font-bold text-[#1D2D44] text-base mb-1">
                    {item.mistake}
                  </h3>
                  <p className="text-sm text-[#1D2D44]/70 leading-relaxed">
                    {item.fix}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* What Google Doesn't Solve (Slide 21) */}
          <div className="bg-[#1D2D44] text-white rounded-2xl p-6 sm:p-10 border border-[#B08D55]/30">
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#CFB78D] mb-2">
              Why Local Execution Matters
            </p>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-6">
              What Google Doesn&apos;t Solve
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white/5 rounded-xl p-5 border border-white/10">
                <span className="text-xs font-bold text-[#CFB78D] uppercase tracking-wider">01 · Local Access</span>
                <p className="text-sm text-white/85 leading-relaxed mt-2">
                  The hard part is not finding a hotel. It is finding the right people, the right games, the right pace, and the local relationships that make the week work.
                </p>
              </div>
              <div className="bg-white/5 rounded-xl p-5 border border-white/10">
                <span className="text-xs font-bold text-[#CFB78D] uppercase tracking-wider">02 · Right Games</span>
                <p className="text-sm text-white/85 leading-relaxed mt-2">
                  Direct venue relationships, local organizers, and current community knowledge mean you walk onto courts where the level matches yours.
                </p>
              </div>
              <div className="bg-white/5 rounded-xl p-5 border border-white/10">
                <span className="text-xs font-bold text-[#CFB78D] uppercase tracking-wider">03 · Right People</span>
                <p className="text-sm text-white/85 leading-relaxed mt-2">
                  Thoughtful trip pacing, guided autonomy, and a group of 16 players worth spending the week with on and off the court.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section (Slide 20 + AEO Structured Q&A) */}
      <section id="faq" className="scroll-mt-24 py-16 sm:py-20 bg-white border-b border-[#B08D55]/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#B08D55] mb-2">
            First-Timer Questions
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1D2D44] mb-8">
            Frequently Asked Questions About Pickleball in Thailand
          </h2>
          <div className="space-y-4">
            {FAQ_ITEMS.map((faq) => (
              <div
                key={faq.question}
                className="bg-[#FDF8F3] rounded-2xl border border-[#B08D55]/15 p-6"
              >
                <h3 className="font-serif text-lg sm:text-xl font-bold text-[#1D2D44] mb-2">
                  {faq.question}
                </h3>
                <p className="text-sm sm:text-base text-[#1D2D44]/75 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Soft CTA Section: Play the World, Clinics & Flagship / Regional Trips (Slide 23) */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-[#0F1A2A] to-[#1D2D44] text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#CFB78D] mb-3">
              Play the World
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
              Want Us to Run the Pickleball (or the Whole Trip) for You?
            </h2>
            <p className="text-base sm:text-lg text-white/80 leading-relaxed">
              The Pickleball Passport is a private global membership for entrepreneurs and high-income professionals who want to play, travel, and form meaningful relationships across cultures. Thailand is our home base and flagship gateway.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            <div className="bg-white/5 rounded-2xl border border-[#B08D55]/30 p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <span className="inline-block px-3 py-1 rounded-full bg-[#B08D55]/20 text-[#CFB78D] text-xs font-bold uppercase tracking-wider mb-3">
                  Bangkok · Nov 1 to 5, 2026
                </span>
                <h3 className="font-serif text-2xl font-bold text-white mb-2">
                  Bangkok Clinic Week (No Trip Required)
                </h3>
                <p className="text-sm text-white/80 leading-relaxed mb-6">
                  Already coming to Thailand or live in the region? Join Coach Travis Rhea (Mind Your Pickle) plus Jaron and Ryan for four sessions of mindset work and coached open play in Bangkok (Nov 2 to 5, 11am to 2pm, capped at 16 players). Book your own room; we run the pickleball. Full 4-session pass ($299) or Two-Day Pass ($169).
                </p>
              </div>
              <Link
                href="/clinics"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-white text-[#1D2D44] font-bold text-sm hover:bg-[#FDF8F3] transition-all"
              >
                Explore Bangkok Clinic Week
              </Link>
            </div>

            <div className="bg-white/5 rounded-2xl border border-[#B08D55]/30 p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <span className="inline-block px-3 py-1 rounded-full bg-[#B08D55]/20 text-[#CFB78D] text-xs font-bold uppercase tracking-wider mb-3">
                  2027 Departures · Flagship &amp; Regional Trips
                </span>
                <h3 className="font-serif text-2xl font-bold text-white mb-2">
                  9-Day Flagship Trips &amp; Shorter 3-to-5-Day Trips
                </h3>
                <p className="text-sm text-white/80 leading-relaxed mb-6">
                  Experience our 9-day, 8-night flagship Thailand trips (starting with January 14 to 22, 2027 across Bangkok and Chiang Mai with five-star riverside stays and an optional 3-night Phuket extension), or ask about our shorter 3-to-5-day regional trips in Phuket, Hua Hin, and Bangkok.
                </p>
              </div>
              <Link
                href="/trips"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#B08D55] to-[#CFB78D] text-[#0F1A2A] font-bold text-sm shadow-lg shadow-[#B08D55]/30 hover:from-[#8D7144] hover:to-[#B08D55] transition-all"
              >
                View 2027 Trips &amp; Apply
              </Link>
            </div>
          </div>

          <div className="bg-white/5 rounded-2xl border border-white/10 p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-sm text-white/80">
            <div>
              <p className="font-semibold text-white mb-1">
                Planning a Thailand trip and have a question about courts or dates?
              </p>
              <p>
                Email{" "}
                <a
                  href="mailto:hello@thepickleballpassport.org"
                  className="text-[#CFB78D] underline hover:text-white"
                >
                  hello@thepickleballpassport.org
                </a>{" "}
                or{" "}
                <a
                  href="mailto:ryan@thepickleballpassport.org"
                  className="text-[#CFB78D] underline hover:text-white"
                >
                  ryan@thepickleballpassport.org
                </a>
                , or message us on WhatsApp at{" "}
                <a
                  href="https://wa.me/66991433298"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#CFB78D] underline hover:text-white"
                >
                  +66 99-143-3298
                </a>
                .
              </p>
            </div>
            <a
              href={PLAYBOOK_PDF_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 inline-flex items-center px-5 py-2.5 rounded-lg border border-[#CFB78D]/50 text-[#CFB78D] hover:bg-white/10 font-semibold text-xs uppercase tracking-wider transition-colors"
            >
              Download Playbook PDF
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
