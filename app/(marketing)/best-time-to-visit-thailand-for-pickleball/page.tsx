import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Best Time to Visit Thailand for Pickleball (2026 Month-by-Month Weather & City Guide) | The Pickleball Passport",
  description:
    "When to play pickleball in Thailand month by month: cool season (Nov to Feb), peak heat and Chiang Mai smoky season pivots (Mar to May), rainy season indoor court strategy (Jun to Oct), and best city pairings.",
  keywords: [
    "best time to visit Thailand for pickleball",
    "Thailand weather for pickleball",
    "playing pickleball in Thailand rainy season",
    "Chiang Mai burning season pickleball",
    "Thailand pickleball trip seasons",
    "Bangkok indoor pickleball weather",
    "when to go to Thailand for pickleball",
  ],
  alternates: {
    canonical:
      "https://www.thepickleballpassport.org/best-time-to-visit-thailand-for-pickleball",
  },
  openGraph: {
    title:
      "Best Time to Visit Thailand for Pickleball (2026 Month-by-Month Guide)",
    description:
      "How to match your travel month to the right Thai cities, court roof types, and daily play windows across Bangkok, Chiang Mai, Hua Hin, Pattaya, and Phuket.",
    url: "https://www.thepickleballpassport.org/best-time-to-visit-thailand-for-pickleball",
    siteName: "The Pickleball Passport",
    type: "article",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Time to Visit Thailand for Pickleball (2026 Guide)",
    description:
      "Month-by-month weather, heat windows, Chiang Mai air quality calendar, and indoor court strategy for Thailand pickleball trips.",
  },
};

const THREE_SEASONS = [
  {
    badge: "Peak Season · November to February",
    title: "Cool & Dry Season (The Gold Standard Window)",
    tempRange: "75°F to 88°F (24°C to 31°C) · Lower Humidity",
    bestPairing: "Bangkok Riverside + Chiang Mai Highlands (or Phuket)",
    courtStrategy:
      "Covered semi-indoor courts and outdoor evening courts play comfortably. Morning blocks (7:00 AM to 10:30 AM) in Chiang Mai feel crisp and breezy, and evening play after 5:00 PM in Bangkok requires zero air conditioning.",
    watchOut:
      "Peak international demand for 5-star hotels and prime evening court blocks. Book accommodations and private court blocks 4 to 8 months ahead.",
  },
  {
    badge: "Shoulder / Hot Season · March to May",
    title: "Hot Season & The Northern Air Quality Pivot",
    tempRange: "86°F to 98°F (30°C to 37°C) · High Afternoon Heat",
    bestPairing: "Bangkok Indoor Courts + Hua Hin or Pattaya Coast",
    courtStrategy:
      "Avoid uncovered outdoor play between 10:30 AM and 4:30 PM. Anchor your trip in dedicated indoor and high-roof covered complexes in Bangkok (Arise, Sterling, Papaya) paired with coastal breeze venues in Hua Hin (Sports Life, Bluport indoor mall court) or Pattaya (88 Pickleball, Skyline, Sunshine).",
    watchOut:
      "Chiang Mai and northern Thailand experience agricultural smoky season from roughly late February through mid-April. If you travel in March or April, swap Chiang Mai for Hua Hin or Pattaya.",
  },
  {
    badge: "Value / Green Season · June to October",
    title: "Tropical Monsoon Season (How Locals Play Year-Round)",
    tempRange: "80°F to 91°F (27°C to 33°C) · Late-Afternoon Showers",
    bestPairing: "Bangkok + Hua Hin (Rain-Shadow Coast) or Late-Oct Chiang Mai",
    courtStrategy:
      "Rainy season in Thailand rarely means all-day rain. It typically means sunny or partly cloudy mornings followed by a heavy 45-to-60-minute tropical downpour around 4:00 PM to 6:00 PM. Play 7:00 AM to 10:00 AM sessions or book roofed/indoor courts like Arise, Sterling, BokBok, and Sports Life.",
    watchOut:
      "September and early October bring the heaviest afternoon rain in Bangkok and Phuket. Hua Hin sits on a drier Gulf microclimate and stays significantly drier than Phuket during summer months.",
  },
];

const MONTHLY_CALENDAR = [
  {
    month: "January",
    grade: "A+ (Peak)",
    weatherFeel: "Cool mornings in the north, dry sunny days nationwide",
    chiangMaiStatus: "Prime (Clear & Crisp)",
    recommendedPairing: "Bangkok + Chiang Mai (9-Day Flagship)",
    courtRoofAdvice: "Covered or outdoor morning/evening courts",
  },
  {
    month: "February",
    grade: "A (Prime)",
    weatherFeel: "Dry, sunny, warming slightly in the final week",
    chiangMaiStatus: "Good early Feb; watch smoke late Feb",
    recommendedPairing: "Bangkok + Chiang Mai (early) or Bangkok + Phuket",
    courtRoofAdvice: "Covered courts + evening open play",
  },
  {
    month: "March",
    grade: "B+ (Pivot South)",
    weatherFeel: "Hot and dry across central and southern Thailand",
    chiangMaiStatus: "Avoid for heavy outdoor sports (Smoky Season)",
    recommendedPairing: "Bangkok + Hua Hin or Bangkok + Pattaya",
    courtRoofAdvice: "Indoor AC or high-roof covered courts only",
  },
  {
    month: "April",
    grade: "B (Peak Heat + Songkran)",
    weatherFeel: "Hottest month of the year; Songkran Thai New Year mid-month",
    chiangMaiStatus: "Avoid early April; clears after mid-April rains",
    recommendedPairing: "Bangkok Indoor + Hua Hin Beach (Bluport AC / Sports Life)",
    courtRoofAdvice: "Strict 7:00 AM to 10:00 AM or Indoor AC",
  },
  {
    month: "May",
    grade: "B+ (Shoulder)",
    weatherFeel: "Warm with early tropical showers cooling the afternoons",
    chiangMaiStatus: "Fresh green mountains; air clears completely",
    recommendedPairing: "Bangkok + Hua Hin or Bangkok + Chiang Mai",
    courtRoofAdvice: "Roofed courts for late-afternoon sessions",
  },
  {
    month: "June",
    grade: "A- (Early Green)",
    weatherFeel: "Lush landscapes, lower 5-star hotel rates, dry mornings",
    chiangMaiStatus: "Great value, green hills, light afternoon showers",
    recommendedPairing: "Bangkok + Chiang Mai or Bangkok + Hua Hin",
    courtRoofAdvice: "Morning play + covered evening venues",
  },
  {
    month: "July",
    grade: "B+ (Summer Value)",
    weatherFeel: "Sunny mornings, 1-hour late-afternoon tropical rain",
    chiangMaiStatus: "Playable daily in covered clubs (BokBok, All-Time)",
    recommendedPairing: "Bangkok + Hua Hin (Gulf coast stays drier than Andaman)",
    courtRoofAdvice: "Covered / indoor courts required for 5:00 PM play",
  },
  {
    month: "August",
    grade: "B+ (Summer Value)",
    weatherFeel: "Warm humid mornings, afternoon cloud cover helps shade",
    chiangMaiStatus: "Lush green season; stick to roofed venues",
    recommendedPairing: "Bangkok + Hua Hin or Bangkok Clinic Week style",
    courtRoofAdvice: "Covered / indoor complexes",
  },
  {
    month: "September",
    grade: "B- (Wettest Month)",
    weatherFeel: "Peak monsoon showers in late afternoons and evenings",
    chiangMaiStatus: "Indoor/roofed play only",
    recommendedPairing: "Bangkok Single-Base Indoor Intensive",
    courtRoofAdvice: "100% Indoor / Fully Roofed Courts (Arise, Sterling)",
  },
  {
    month: "October",
    grade: "A- (Season Transition)",
    weatherFeel: "Rains taper off rapidly in the second half of the month",
    chiangMaiStatus: "Crisp green mountains return by mid-to-late October",
    recommendedPairing: "Bangkok + Chiang Mai (Late Oct) or Bangkok Clinic",
    courtRoofAdvice: "Covered courts; outdoor evenings open up late Oct",
  },
  {
    month: "November",
    grade: "A+ (Peak Kickoff)",
    weatherFeel: "Cool dry breeze arrives, Loy Krathong lantern festivals",
    chiangMaiStatus: "Prime (Loy Krathong & Yi Peng season)",
    recommendedPairing: "Bangkok Clinic Week (Nov 1 to 5) or Bangkok + Chiang Mai",
    courtRoofAdvice: "All court types playable morning and evening",
  },
  {
    month: "December",
    grade: "A+ (Peak Holiday)",
    weatherFeel: "Lowest humidity and coolest evenings of the year",
    chiangMaiStatus: "Prime (62°F to 78°F mornings)",
    recommendedPairing: "Bangkok + Chiang Mai or Bangkok + Phuket",
    courtRoofAdvice: "All court types playable; book far ahead",
  },
];

const FAQ_ITEMS = [
  {
    question: "What are the best months overall to visit Thailand for pickleball?",
    answer:
      "November through February is the gold-standard window across the entire country. Humidity drops, rain is minimal, and both Bangkok and Chiang Mai offer ideal morning and evening playing conditions. Late October and June through August are our favorite value windows if you book covered or indoor courts.",
  },
  {
    question: "Can you still play pickleball in Thailand during the rainy season (June to October)?",
    answer:
      "Yes, and resident players play 12 months a year. Unlike temperate rain that drizzles all day, Thailand's monsoon season usually delivers dry, sunny mornings followed by a heavy 45-to-60-minute downpour in the late afternoon. By playing in the 7:00 AM to 10:00 AM window or booking roofed venues like Arise and Sterling in Bangkok, BokBok and All-Time in Chiang Mai, or Sports Life and Bluport in Hua Hin, you lose almost zero court time.",
  },
  {
    question: "When is Chiang Mai's smoky or burning season, and where should we play instead?",
    answer:
      "Northern Thailand (including Chiang Mai) experiences agricultural burning and hazy air quality from roughly late February through mid-April. If your travel dates fall in March or early April, we recommend skipping outdoor northern play and choosing our coastal pairing instead: Bangkok's indoor complexes paired with Hua Hin or Pattaya on the Gulf coast, where sea breezes keep the air cleaner.",
  },
  {
    question: "What time of day do locals play pickleball in Thailand?",
    answer:
      "Almost all serious play happens in two windows: 7:00 AM to 10:00 AM and 5:00 PM to 9:00 PM. Even in cool season, the tropical sun between 11:00 AM and 4:00 PM is intense. Use midday for a riverside hotel pool, cultural sightseeing, lunch, and a 90-minute Thai massage.",
  },
];

export default function BestTimeToVisitThailandPickleballPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "Best Time to Visit Thailand for Pickleball (2026 Month-by-Month Weather, Heat & City Guide)",
    description:
      "Month-by-month weather, heat windows, Chiang Mai air quality calendar, and indoor court strategy for Thailand pickleball trips.",
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
      "@id":
        "https://www.thepickleballpassport.org/best-time-to-visit-thailand-for-pickleball",
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
            2026 Seasonal &amp; Regional Planning Guide
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight mb-6">
            Best Time to Visit Thailand for Pickleball (Month-by-Month)
          </h1>
          <p className="text-xl sm:text-2xl text-[#CFB78D] font-serif mb-4">
            How to match your travel month to the right Thai cities, court roofs, and daily play windows.
          </p>
          <p className="text-base sm:text-lg text-white/80 max-w-3xl leading-relaxed mb-8">
            You can play high-level pickleball in Thailand 12 months a year if you match your cities and court roofs to the season. A trip in January looks very different from a trip in April or July. Use this month-by-month breakdown to choose between Bangkok, Chiang Mai, Hua Hin, Pattaya, and Phuket.
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap gap-4">
            <a
              href="#monthly-calendar"
              className="inline-flex items-center justify-center px-7 py-4 rounded-xl bg-gradient-to-r from-[#B08D55] to-[#CFB78D] hover:from-[#8D7144] hover:to-[#B08D55] text-[#0F1A2A] font-bold text-sm sm:text-base shadow-xl shadow-[#B08D55]/30 transition-all"
            >
              Jump to Month-by-Month Calendar
            </a>
            <Link
              href="/thailand-pickleball-calculator"
              className="inline-flex items-center justify-center px-6 py-4 rounded-xl border border-white/25 bg-white/10 hover:bg-white/15 text-white font-semibold text-sm sm:text-base transition-all"
            >
              Open Trip &amp; Court Cost Calculator
            </Link>
            <Link
              href="/thailand-pickleball-playbook"
              className="inline-flex items-center justify-center px-6 py-4 rounded-xl border border-white/20 bg-white/5 hover:bg-white/15 text-[#CFB78D] font-semibold text-sm sm:text-base transition-all"
            >
              Full 2026 Thailand Playbook
            </Link>
          </div>
        </div>
      </section>

      {/* The 3 Seasons of Thailand Pickleball */}
      <section className="py-16 sm:py-20 bg-white border-b border-[#B08D55]/15">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#B08D55] mb-2">
            Seasonal Strategy
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1D2D44] mb-4">
            The 3 Thailand Pickleball Seasons Explained
          </h2>
          <p className="text-base sm:text-lg text-[#1D2D44]/80 max-w-3xl mb-10">
            Thailand does not have four temperate seasons. It has three distinct tropical rhythms, and different regions (Northern highlands vs. Gulf coast vs. Andaman coast) peak at different times of year.
          </p>

          <div className="space-y-6">
            {THREE_SEASONS.map((season) => (
              <div
                key={season.title}
                className="rounded-3xl bg-[#FDF8F3] p-6 sm:p-8 border border-[#B08D55]/25 shadow-sm"
              >
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <span className="inline-block text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#1D2D44] text-[#CFB78D]">
                    {season.badge}
                  </span>
                  <span className="text-xs font-semibold text-[#1D2D44]/75">
                    {season.tempRange}
                  </span>
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#1D2D44] mb-2">
                  {season.title}
                </h3>
                <p className="text-sm font-bold text-[#B08D55] mb-4">
                  Best City Pairing: {season.bestPairing}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div className="rounded-xl bg-white p-4 border border-[#B08D55]/15">
                    <p className="font-bold text-[#1D2D44] mb-1">Court &amp; Timing Strategy</p>
                    <p className="text-[#1D2D44]/80 leading-relaxed">{season.courtStrategy}</p>
                  </div>
                  <div className="rounded-xl bg-white p-4 border border-[#B08D55]/15">
                    <p className="font-bold text-[#1D2D44] mb-1">What to Watch Out For</p>
                    <p className="text-[#1D2D44]/80 leading-relaxed">{season.watchOut}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Month-by-Month Calendar Table */}
      <section id="monthly-calendar" className="scroll-mt-20 py-16 sm:py-20 bg-[#FDF8F3] border-b border-[#B08D55]/15">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#B08D55] mb-2">
            12-Month Matrix
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1D2D44] mb-4">
            Month-by-Month Thailand Pickleball Planner (Jan to Dec)
          </h2>
          <p className="text-base sm:text-lg text-[#1D2D44]/80 max-w-3xl mb-8">
            Use this cheat sheet before booking flights so you pair the right second city with Bangkok and book the right court surface and roof type.
          </p>

          <div className="overflow-x-auto rounded-2xl border border-[#B08D55]/25 shadow-sm bg-white">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#0F1A2A] text-white text-xs uppercase tracking-wider">
                  <th className="py-4 px-4 font-bold">Month</th>
                  <th className="py-4 px-4 font-bold text-[#CFB78D]">Play Rating</th>
                  <th className="py-4 px-4 font-bold">Weather &amp; Humidity Feel</th>
                  <th className="py-4 px-4 font-bold">Chiang Mai Air / Conditions</th>
                  <th className="py-4 px-4 font-bold text-[#CFB78D]">Best 2-City Pairing</th>
                  <th className="py-4 px-4 font-bold">Court Roof Rule</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#B08D55]/15 text-xs sm:text-sm">
                {MONTHLY_CALENDAR.map((row) => (
                  <tr key={row.month} className="hover:bg-[#FDF8F3]/70 transition-colors">
                    <td className="py-3.5 px-4 font-serif font-bold text-[#1D2D44]">
                      {row.month}
                    </td>
                    <td className="py-3.5 px-4 font-bold text-[#B08D55] whitespace-nowrap">
                      {row.grade}
                    </td>
                    <td className="py-3.5 px-4 text-[#1D2D44]/85">
                      {row.weatherFeel}
                    </td>
                    <td className="py-3.5 px-4 text-[#1D2D44]/85">
                      {row.chiangMaiStatus}
                    </td>
                    <td className="py-3.5 px-4 font-semibold text-[#1D2D44]">
                      {row.recommendedPairing}
                    </td>
                    <td className="py-3.5 px-4 text-[#1D2D44]/80">
                      {row.courtRoofAdvice}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Heat Survival Checklist */}
      <section className="py-16 sm:py-20 bg-white border-b border-[#B08D55]/15">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#B08D55] mb-2">
            On-Court Performance
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1D2D44] mb-6">
            The 4-Part Tropical Heat &amp; Humidity Checklist
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="rounded-2xl bg-[#FDF8F3] p-6 border border-[#B08D55]/25">
              <p className="text-xs font-bold uppercase tracking-wider text-[#B08D55] mb-1">
                Rule 01 · Clock Discipline
              </p>
              <h3 className="font-serif text-xl font-bold text-[#1D2D44] mb-2">
                Play 7:00 AM to 10:00 AM or After 5:00 PM
              </h3>
              <p className="text-sm text-[#1D2D44]/80 leading-relaxed">
                Unless you are inside an air-conditioned court (such as Bluport Hua Hin or covered indoor blocks), protect the 11:00 AM to 4:00 PM window for lunch, pool recovery, and sightseeing.
              </p>
            </div>
            <div className="rounded-2xl bg-[#FDF8F3] p-6 border border-[#B08D55]/25">
              <p className="text-xs font-bold uppercase tracking-wider text-[#B08D55] mb-1">
                Rule 02 · Pre-Hydration
              </p>
              <h3 className="font-serif text-xl font-bold text-[#1D2D44] mb-2">
                Start Electrolytes Before Game 1
              </h3>
              <p className="text-sm text-[#1D2D44]/80 leading-relaxed">
                If you wait until game 4 to drink electrolytes in 75% humidity, you are already behind. Every Thai 7-Eleven stocks Royal-D electrolyte packets for 7 THB ($0.20 USD). Drink one before stepping on court.
              </p>
            </div>
            <div className="rounded-2xl bg-[#FDF8F3] p-6 border border-[#B08D55]/25">
              <p className="text-xs font-bold uppercase tracking-wider text-[#B08D55] mb-1">
                Rule 03 · Grip &amp; Shirt Rotation
              </p>
              <h3 className="font-serif text-xl font-bold text-[#1D2D44] mb-2">
                Pack 2 Shirts Per Session + Tacky Overgrips
              </h3>
              <p className="text-sm text-[#1D2D44]/80 leading-relaxed">
                Changing into a dry shirt halfway through a 3-hour session lowers perceived exertion immediately. Bring fresh overgrips, a rosin bag or grip towel, and wristbands to keep sweat off your paddle handle.
              </p>
            </div>
            <div className="rounded-2xl bg-[#FDF8F3] p-6 border border-[#B08D55]/25">
              <p className="text-xs font-bold uppercase tracking-wider text-[#B08D55] mb-1">
                Rule 04 · Multi-Day Pacing
              </p>
              <h3 className="font-serif text-xl font-bold text-[#1D2D44] mb-2">
                Schedule Recovery Every 3rd Day
              </h3>
              <p className="text-sm text-[#1D2D44]/80 leading-relaxed">
                Travelers who try to play 4 hours morning and night for 6 straight days hit a wall by Day 4. Our 9-day flagship rhythm alternates high-energy court blocks with cultural mornings and Thai sports massage recovery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="scroll-mt-20 py-16 sm:py-20 bg-[#FDF8F3] border-b border-[#B08D55]/15">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#B08D55] mb-2">
            Seasonal Questions Answered
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1D2D44] mb-8">
            Thailand Pickleball Weather &amp; Season FAQs
          </h2>
          <div className="space-y-4">
            {FAQ_ITEMS.map((item) => (
              <div
                key={item.question}
                className="rounded-2xl bg-white p-6 border border-[#B08D55]/20 shadow-sm"
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

      {/* Bottom CTA */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-[#0F1A2A] to-[#1D2D44] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#CFB78D] mb-3">
            Prime Cool-Season Dates Already Built for You
          </p>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white mb-4">
            Join Us in Thailand During Peak Pickleball Season
          </h2>
          <p className="text-base sm:text-lg text-white/80 max-w-2xl mx-auto mb-8 leading-relaxed">
            Our Bangkok Clinic Week (Nov 1 to 5, 2026 at Arise and Papaya) and our monthly 2027 9-Day Trips (Jan 14 to 22 Bangkok + Chiang Mai, Feb 18 to 26 Bangkok + Hua Hin, Mar 18 to 26 Bangkok + Phuket, and Apr 12 to 20 Songkran Bangkok + Pattaya) match each travel month to the ideal regional pairing and covered court blocks.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <Link
              href="/clinics"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-xl bg-gradient-to-r from-[#B08D55] to-[#CFB78D] hover:from-[#8D7144] hover:to-[#B08D55] text-[#0F1A2A] font-bold text-sm sm:text-base shadow-xl shadow-[#B08D55]/25 transition-all"
            >
              Explore Bangkok Clinic Week (Nov 1 to 5, 2026)
            </Link>
            <Link
              href="/trips"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-xl border border-[#CFB78D]/50 bg-white/5 hover:bg-white/15 text-[#CFB78D] font-bold text-sm sm:text-base transition-all"
            >
              View Jan &amp; Feb 2027 Flagship Trips
            </Link>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-white/75 mb-6">
            <Link href="/thailand-pickleball-playbook" className="hover:text-[#CFB78D] underline underline-offset-4">
              2026 Thailand Pickleball Playbook
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
            <Link href="/pickleball-club-retreats" className="hover:text-[#CFB78D] underline underline-offset-4">
              Private Club &amp; Coach Retreats
            </Link>
          </div>

          <p className="text-xs text-white/60">
            US Line: <a href="tel:+15125648522" className="text-[#CFB78D] hover:underline">(512) 564-8522</a> · Thailand WhatsApp: <a href="https://wa.me/66991433298" className="text-[#CFB78D] hover:underline">+66 99-143-3298</a> · Email: <a href="mailto:hello@thepickleballpassport.org" className="text-[#CFB78D] hover:underline">hello@thepickleballpassport.org</a> / <a href="mailto:ryan@thepickleballpassport.org" className="text-[#CFB78D] hover:underline">ryan@thepickleballpassport.org</a>
          </p>
        </div>
      </section>
    </main>
  );
}
