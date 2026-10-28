import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "How Pickleball Clubs & Coaches Run Destination Trips to Thailand (2026 Guide) | The Pickleball Passport",
  description:
    "The operational blueprint for US, UK, Australian, and APAC pickleball club owners, racquet directors, and touring pros to host private member trips to Thailand without logistical headaches.",
  keywords: [
    "pickleball club retreats",
    "host a pickleball trip for my club",
    "pickleball travel partner for coaches",
    "international pickleball group trips",
    "pickleball destination trips for clubs",
    "racquet club travel program Thailand",
    "private group pickleball trips Thailand",
    "pickleball club member trips",
  ],
  alternates: {
    canonical: "https://www.thepickleballpassport.org/pickleball-club-retreats",
  },
  openGraph: {
    title:
      "How Pickleball Clubs & Coaches Run Destination Trips to Thailand (2026 B2B Guide)",
    description:
      "Why the 16-player, 4-court group architecture works best for private club trips, what separates a real destination program from a chaotic group vacation, and how to partner on the ground in Thailand.",
    url: "https://www.thepickleballpassport.org/pickleball-club-retreats",
    siteName: "The Pickleball Passport",
    type: "article",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "How Pickleball Clubs Run Destination Trips to Thailand (2026 Guide)",
    description:
      "Operational guide for club owners, directors of racquet sports, and coaches planning private member trips to Thailand.",
  },
};

const PILLARS_WHY_CLUBS_TRAVEL = [
  {
    number: "01",
    title: "Year-Over-Year Member Retention",
    detail:
      "Members rarely leave a club where their closest travel memories and friendships live. A well-run international trip turns casual court acquaintances into a tight-knit core community that renews memberships, fills clinics, and brings referrals back home.",
  },
  {
    number: "02",
    title: "Off-Court Revenue & Host Perks Without Facility Capex",
    detail:
      "Adding new courts requires leases, buildout capital, and permits. Hosting an annual or semi-annual destination trip creates a meaningful new program line and travel perks for your coaching staff without adding a single square foot of facility overhead.",
  },
  {
    number: "03",
    title: "Zero Operational Distraction for Your Staff",
    detail:
      "Your head pros and club managers should be coaching, playing alongside members, and hosting dinners, not arguing with local van drivers in Thai traffic or chasing hotel rooming lists at midnight.",
  },
];

const GROUP_MATH_SPECS = [
  {
    metric: "16 Players",
    label: "Ideal Single-Wave Cohort Size",
    explanation:
      "Sixteen players fill 4 dedicated courts at 4 players per court with zero bench sit-outs. Everyone plays at the same time, rotates cleanly across skill pods, and fits comfortably at one long dinner table.",
  },
  {
    metric: "4 Dedicated Courts",
    label: "Private Indoor / Covered Block",
    explanation:
      "Instead of dropping 16 club members into crowded public open-play queues, we reserve a 4-court private block at vetted indoor or covered venues so your coach controls the drills, rotations, and Hosted Match Play.",
  },
  {
    metric: "2 Base Cities",
    label: "9-Day Flagship Pacing (or 4-Day Regional)",
    explanation:
      "Moving a group of 16 through 4 hotels in 8 days creates suitcase fatigue. Anchoring in two distinct bases (such as Bangkok Riverside + Chiang Mai Highlands, or Bangkok + Hua Hin Beach) protects recovery and court energy.",
  },
  {
    metric: "8 Local Players",
    label: "Curated Thai Cultural Match Days",
    explanation:
      "For cultural mixer sessions, we bring in level-matched local Thai and expat players from our Bangkok and Chiang Mai partner clubs so your members experience genuine international match play.",
  },
];

const DIVISION_OF_LABOR = [
  {
    area: "Member Invitation & Community Energy",
    clubRole:
      "Share the private trip page with your member email list, announce the dates at club mixers, and select the coach or club ambassador leading the cohort.",
    tppRole:
      "Provide co-branded digital flyers, an optional custom trip landing page, sample member emails, and a live Q&A call to help your members understand the itinerary.",
  },
  {
    area: "Court Reservations & Format Execution",
    clubRole:
      "Your coach leads optional morning clinics or strategy blocks if desired, or simply plays alongside members as the group host.",
    tppRole:
      "Book private indoor/covered court blocks at Arise, Sterling, Papaya, BokBok, All-Time, or Sports Life; supply tournament-grade balls, water, electrolytes, and local level-matched players.",
  },
  {
    area: "5-Star Hotels, Transfers & Cultural Experiences",
    clubRole:
      "Show up at Bangkok Suvarnabhumi (BKK) and enjoy the trip alongside your members.",
    tppRole:
      "Through our dedicated on-the-ground team in Bangkok and local Thai destination management company (DMC) partners, we coordinate airport pickups, 5-star boutique room blocks, domestic flights, private luxury vans, temple and elephant sanctuary visits, and group dinners.",
  },
  {
    area: "Registration, Waivers & Pre-Trip Prep",
    clubRole:
      "Approve the cohort roster and skill pairings.",
    tppRole:
      "Handle individual member deposits, rooming preferences (single vs. shared), dietary tracking, packing checklists, and pre-departure onboarding.",
  },
];

const SAMPLE_ITINERARY_FORMATS = [
  {
    badge: "Format A · Flagship 9-Day / 8-Night",
    title: "The Dual-City Flagship: Bangkok Riverside + Chiang Mai Highlands",
    bestFor:
      "US, Canadian, UK, and European clubs flying long-haul who want a once-in-a-lifetime flagship member trip combining world-class indoor courts, 5-star hospitality, and northern Thai mountain culture.",
    highlights: [
      "4 nights on the Chao Phraya River in Bangkok + 4 nights in Chiang Mai",
      "12+ hours of organized court time: coach-led clinics, skill pods, and Thai club mixers",
      "Private longtail boat temple tour, ethical elephant sanctuary morning, and farewell gala",
      "Ideal window: November through February (cool dry season)",
    ],
  },
  {
    badge: "Format B · Regional 4-to-5-Day Intensive",
    title: "The Bangkok Clinic Week or Bangkok + Hua Hin Coastal Retreat",
    bestFor:
      "APAC clubs (Singapore, Hong Kong, Australia, Japan, Korea, Malaysia) or US groups pairing Thailand with another Asia stop who want a high-density 4-to-5-day clinic and cultural trip with zero domestic flights.",
    highlights: [
      "5 days anchored in Bangkok or split between Bangkok and beachfront Hua Hin (3 hours by private luxury van)",
      "Daily 2-to-3-hour structured clinic + match play blocks inside dedicated indoor complexes",
      "Thai sports massage recovery, rooftop dining, and night market food tours",
      "Ideal window: Year-round (indoor Bangkok complexes) or Nov to May (Hua Hin coast)",
    ],
  },
];

const FAQ_ITEMS = [
  {
    question: "How many players do we need to run a private club trip to Thailand?",
    answer:
      "Our sweet spot for a private single-wave club cohort is 12 to 16 players (plus 1 or 2 club hosts/coaches), which maps cleanly to 3 or 4 dedicated courts with zero sitting out. For larger clubs, we can run a 24-to-32-player double wave split into morning and late-afternoon court blocks, or stagger two back-to-back weeks. If you have a smaller group of 6 to 10 players, we can also reserve a dedicated sub-pod for your club inside one of our scheduled 2027 trip dates.",
  },
  {
    question: "How does the commercial partnership and host compensation work?",
    answer:
      "Every club structures their travel program slightly differently. Some clubs prefer a revenue-share per registered member, others prefer complimentary travel and 5-star accommodations for their coaching staff/directors, and some blend both models into their member pricing. Because club sizes, trip lengths, and coaching involvement vary, we customize the commercial structure directly with club owners and directors on a short discovery call.",
  },
  {
    question: "What if our club has mixed skill levels from 3.0 to 4.5+?",
    answer:
      "Mixed skill levels are the norm for club trips, including spouses or travel partners who play at different DUPR bands (or non-playing partners who want the cultural and spa itinerary). With 4 private courts reserved simultaneously, we group courts by skill pod (for example, two courts at 3.0 to 3.5 and two courts at 3.5 to 4.5+) and bring in local Thai players of matching levels so every court gets competitive games.",
  },
  {
    question: "How far in advance should a club lock in dates for Thailand?",
    answer:
      "For prime cool-season dates (November through February), we recommend locking in your target window 6 to 10 months in advance so we can secure peak 5-star resort room blocks and private indoor court windows in Bangkok and Chiang Mai. For shorter 4-to-5-day regional trips or shoulder-season windows, 3 to 5 months of lead time is typically sufficient.",
  },
  {
    question: "Can non-playing spouses or partners join a club trip?",
    answer:
      "Yes. Non-playing companions are a major reason Thailand works so well for club retreats. While players are in morning court sessions, companions can enjoy 5-star resort pools, guided neighborhood temple walks, Thai cooking classes, or spa treatments, and then reunite with the full group for every lunch, cultural excursion, and dinner.",
  },
];

export default function PickleballClubRetreatsPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "How Pickleball Clubs & Coaches Run Destination Trips to Thailand (2026 B2B Guide)",
    description:
      "Operational guide for pickleball club owners, directors of racquet sports, and coaches planning private member trips and retreats to Thailand.",
    author: {
      "@type": "Organization",
      name: "The Pickleball Passport",
      url: "https://www.thepickleballpassport.org",
    },
    publisher: {
      "@type": "Organization",
      name: "The Pickleball Passport",
      url: "https://www.thepickleballpassport.org",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://www.thepickleballpassport.org/pickleball-club-retreats",
    },
    datePublished: "2026-10-28",
    dateModified: "2026-10-28",
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

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#0F1A2A] via-[#1D2D44] to-[#0F1A2A] text-white py-16 sm:py-24 border-b border-[#B08D55]/30">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#B08D55]/40 bg-white/10 backdrop-blur-sm px-4 py-1.5 text-xs font-bold tracking-[0.2em] uppercase text-[#CFB78D] mb-6">
            For Club Owners, Racquet Directors &amp; Touring Pros
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight mb-6">
            How Pickleball Clubs Run Destination Trips to Thailand
          </h1>
          <p className="text-xl sm:text-2xl text-[#CFB78D] font-serif mb-4">
            Turnkey 5-star hospitality, private indoor court blocks, and curated local match play built around your members.
          </p>
          <p className="text-base sm:text-lg text-white/80 max-w-3xl leading-relaxed mb-8">
            Club owners and coaching directors know that international member travel builds community loyalty that no weekly league can match. The bottleneck is rarely member demand. It is the operational risk of coordinating foreign courts, transport, heat windows, and 5-star hotels from 8,000 miles away. Here is the exact operational blueprint we use on the ground in Thailand so you can focus 100% on hosting your members.
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap gap-4">
            <a
              href="mailto:ryan@thepickleballpassport.org?subject=Club%20Destination%20Trip%20Inquiry%20-%20The%20Pickleball%20Passport"
              className="inline-flex items-center justify-center px-7 py-4 rounded-xl bg-gradient-to-r from-[#B08D55] to-[#CFB78D] hover:from-[#8D7144] hover:to-[#B08D55] text-[#0F1A2A] font-bold text-sm sm:text-base shadow-xl shadow-[#B08D55]/30 transition-all"
            >
              Schedule a Club Partnership Call with Ryan
            </a>
            <a
              href="#group-math"
              className="inline-flex items-center justify-center px-6 py-4 rounded-xl border border-white/25 bg-white/10 hover:bg-white/15 text-white font-semibold text-sm sm:text-base transition-all"
            >
              See the 16-Player / 4-Court Architecture
            </a>
            <Link
              href="/thailand-pickleball-playbook"
              className="inline-flex items-center justify-center px-6 py-4 rounded-xl border border-white/20 bg-white/5 hover:bg-white/15 text-[#CFB78D] font-semibold text-sm sm:text-base transition-all"
            >
              Inspect Our 15 Vetted Thailand Courts
            </Link>
          </div>
        </div>
      </section>

      {/* Why Leading Clubs Are Adding International Travel */}
      <section className="py-14 sm:py-16 bg-white border-b border-[#B08D55]/15">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#B08D55] mb-2">
            The Strategic Case for Club Travel
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1D2D44] mb-4">
            Why Private Pickleball Clubs &amp; Directors Host Destination Retreats
          </h2>
          <p className="text-base sm:text-lg text-[#1D2D44]/80 max-w-3xl mb-10">
            Whether you run a multi-court indoor facility in the US, a private racquet club in Australia, or a high-performance coaching academy in Asia, a signature annual trip solves three problems at once.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PILLARS_WHY_CLUBS_TRAVEL.map((item) => (
              <div
                key={item.number}
                className="rounded-2xl bg-[#FDF8F3] p-6 sm:p-8 border border-[#B08D55]/25 shadow-sm"
              >
                <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-[#B08D55] mb-2">
                  Pillar {item.number}
                </span>
                <h3 className="font-serif text-xl font-bold text-[#1D2D44] mb-3">
                  {item.title}
                </h3>
                <p className="text-sm sm:text-base text-[#1D2D44]/80 leading-relaxed">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The 16-Player / 4-Court Architecture */}
      <section id="group-math" className="scroll-mt-20 py-16 sm:py-20 bg-[#FDF8F3] border-b border-[#B08D55]/15">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#B08D55] mb-2">
            Operational Geometry
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1D2D44] mb-4">
            Why the 16-Player, 4-Court Standard Works Best
          </h2>
          <p className="text-base sm:text-lg text-[#1D2D44]/80 max-w-3xl mb-10">
            Most failed group sports trips make one of two mistakes: they bring 40 people and turn every meal and court transfer into a bus-loading exercise, or they show up at public courts without private blocks and leave members waiting on benches in 92°F humidity. We engineer club cohorts around exact court geometry.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {GROUP_MATH_SPECS.map((spec) => (
              <div
                key={spec.metric}
                className="rounded-2xl bg-white p-6 sm:p-8 border border-[#B08D55]/25 shadow-sm"
              >
                <p className="font-serif text-3xl sm:text-4xl font-bold text-[#B08D55] mb-1">
                  {spec.metric}
                </p>
                <h3 className="font-serif text-lg sm:text-xl font-bold text-[#1D2D44] mb-3">
                  {spec.label}
                </h3>
                <p className="text-sm sm:text-base text-[#1D2D44]/80 leading-relaxed">
                  {spec.explanation}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Division of Labor Table */}
      <section className="py-16 sm:py-20 bg-white border-b border-[#B08D55]/15">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#B08D55] mb-2">
            Turnkey Partnership Structure
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1D2D44] mb-4">
            Who Handles What: Your Club vs. The Pickleball Passport
          </h2>
          <p className="text-base sm:text-lg text-[#1D2D44]/80 max-w-3xl mb-8">
            You own the relationship with your members and set the coaching tone. Our dedicated on-the-ground team in Bangkok and our local Thai destination management company (DMC) partners handle every operational detail before, during, and after the trip.
          </p>

          <div className="overflow-x-auto rounded-2xl border border-[#B08D55]/25 shadow-sm bg-[#FDF8F3]">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#0F1A2A] text-white text-xs uppercase tracking-wider">
                  <th className="py-4 px-5 font-bold">Operational Area</th>
                  <th className="py-4 px-5 font-bold text-[#CFB78D]">Your Club / Coaching Host</th>
                  <th className="py-4 px-5 font-bold text-[#CFB78D]">The Pickleball Passport (On the Ground)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#B08D55]/15 text-sm">
                {DIVISION_OF_LABOR.map((row) => (
                  <tr key={row.area} className="hover:bg-white/80 transition-colors">
                    <td className="py-4 px-5 font-bold text-[#1D2D44] align-top sm:w-1/4">
                      {row.area}
                    </td>
                    <td className="py-4 px-5 text-[#1D2D44]/85 align-top sm:w-1/3 leading-relaxed">
                      {row.clubRole}
                    </td>
                    <td className="py-4 px-5 text-[#1D2D44]/85 align-top leading-relaxed">
                      {row.tppRole}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Two Proven Trip Blueprints */}
      <section className="py-16 sm:py-20 bg-[#FDF8F3] border-b border-[#B08D55]/15">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#B08D55] mb-2">
            Proven Itinerary Architectures
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1D2D44] mb-8">
            Two Ways Clubs Structure Their Thailand Dates
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {SAMPLE_ITINERARY_FORMATS.map((fmt) => (
              <div
                key={fmt.title}
                className="rounded-3xl bg-white p-6 sm:p-8 border border-[#B08D55]/25 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <span className="inline-block text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#F5E6D3] text-[#1D2D44] mb-4">
                    {fmt.badge}
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-[#1D2D44] mb-3">
                    {fmt.title}
                  </h3>
                  <p className="text-sm text-[#1D2D44]/80 leading-relaxed mb-6">
                    {fmt.bestFor}
                  </p>
                  <p className="text-xs font-bold uppercase tracking-wider text-[#B08D55] mb-2">
                    Core Blueprint Includes:
                  </p>
                  <ul className="space-y-2.5 text-sm text-[#1D2D44]/85 mb-6">
                    {fmt.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2.5">
                        <span className="text-[#B08D55] font-bold">•</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-[#B08D55]/15 flex flex-wrap gap-3">
                  <Link
                    href="/thailand-pickleball-calculator"
                    className="text-xs font-bold text-[#1D2D44] hover:text-[#B08D55] underline underline-offset-4"
                  >
                    Model This Trip in the Calculator
                  </Link>
                  <span className="text-[#1D2D44]/30">·</span>
                  <Link
                    href="/trips"
                    className="text-xs font-bold text-[#1D2D44] hover:text-[#B08D55] underline underline-offset-4"
                  >
                    View Sample 9-Day Flagship
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="scroll-mt-20 py-16 sm:py-20 bg-white border-b border-[#B08D55]/15">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#B08D55] mb-2">
            Club Director &amp; Coach FAQ
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1D2D44] mb-8">
            Frequently Asked Questions About Hosting a Club Trip
          </h2>

          <div className="space-y-4">
            {FAQ_ITEMS.map((item) => (
              <div
                key={item.question}
                className="rounded-2xl bg-[#FDF8F3] p-6 border border-[#B08D55]/20 shadow-sm"
              >
                <h3 className="font-serif text-lg sm:text-xl font-bold text-[#1D2D44] mb-2">
                  {item.question}
                </h3>
                <p className="text-sm sm:text-base text-[#1D2D44]/80 leading-relaxed">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Direct B2B CTA Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-[#0F1A2A] to-[#1D2D44] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#CFB78D] mb-3">
            Explore a 2026 or 2027 Club Cohort
          </p>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white mb-4">
            Let&apos;s Design a Custom Thailand Trip for Your Club
          </h2>
          <p className="text-base sm:text-lg text-white/80 max-w-2xl mx-auto mb-8 leading-relaxed">
            Whether you want to bring 16 members on a private 9-day Bangkok and Chiang Mai flagship trip, run a 5-day intensive coaching clinic in Bangkok, or reserve a private sub-pod inside one of our upcoming dates, reach out directly to Ryan Magill to walk through dates, court blocks, and partnership options.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <a
              href="mailto:ryan@thepickleballpassport.org?subject=Club%20Destination%20Trip%20Inquiry"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-xl bg-gradient-to-r from-[#B08D55] to-[#CFB78D] hover:from-[#8D7144] hover:to-[#B08D55] text-[#0F1A2A] font-bold text-sm sm:text-base shadow-xl shadow-[#B08D55]/25 transition-all"
            >
              Email Ryan Directly (ryan@thepickleballpassport.org)
            </a>
            <a
              href="https://wa.me/66991433298"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-xl border border-[#CFB78D]/50 bg-white/5 hover:bg-white/15 text-[#CFB78D] font-bold text-sm sm:text-base transition-all"
            >
              WhatsApp (Thailand): +66 99-143-3298
            </a>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-white/75 mb-6">
            <Link href="/thailand-pickleball-playbook" className="hover:text-[#CFB78D] underline underline-offset-4">
              Read the 2026 Thailand Pickleball Playbook
            </Link>
            <span>·</span>
            <Link href="/thailand-pickleball-calculator" className="hover:text-[#CFB78D] underline underline-offset-4">
              Interactive Trip Cost Calculator
            </Link>
            <span>·</span>
            <Link href="/bangkok-pickleball-courts" className="hover:text-[#CFB78D] underline underline-offset-4">
              Bangkok Courts Guide
            </Link>
            <span>·</span>
            <Link href="/partners" className="hover:text-[#CFB78D] underline underline-offset-4">
              Partners Overview
            </Link>
          </div>

          <p className="text-xs text-white/60">
            US Line: <a href="tel:+15125648522" className="text-[#CFB78D] hover:underline">(512) 564-8522</a> · Thailand WhatsApp: <a href="https://wa.me/66991433298" className="text-[#CFB78D] hover:underline">+66 99-143-3298</a> · Email: <a href="mailto:ryan@thepickleballpassport.org" className="text-[#CFB78D] hover:underline">ryan@thepickleballpassport.org</a> / <a href="mailto:hello@thepickleballpassport.org" className="text-[#CFB78D] hover:underline">hello@thepickleballpassport.org</a>
          </p>
        </div>
      </section>
    </main>
  );
}
