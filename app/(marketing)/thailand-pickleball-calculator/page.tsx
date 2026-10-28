import type { Metadata } from "next";
import Link from "next/link";
import { TripCalculator } from "./trip-calculator";

export const metadata: Metadata = {
  title:
    "Thailand Pickleball Trip & Court Cost Calculator (2026 THB/USD) | The Pickleball Passport",
  description:
    "Free interactive Thailand pickleball trip calculator. Estimate court fees in THB and USD, Grab and BTS transport, domestic transfers, heat play windows, and 4-star vs 5-star trip budgets across Bangkok, Chiang Mai, Hua Hin, Pattaya, and Phuket.",
  keywords: [
    "Thailand pickleball trip cost",
    "Thailand pickleball calculator",
    "Bangkok pickleball court fees",
    "how much does a pickleball trip to Thailand cost",
    "pickleball in Thailand budget",
    "Thailand pickleball itinerary builder",
    "Arise Pickleball Bangkok cost",
    "Chiang Mai pickleball court cost",
    "Hua Hin pickleball trip",
    "Phuket pickleball trip cost",
  ],
  alternates: {
    canonical: "https://www.thepickleballpassport.org/thailand-pickleball-calculator",
  },
  openGraph: {
    title: "Thailand Pickleball Trip & Court Cost Calculator (2026) | The Pickleball Passport",
    description:
      "Plan your Thailand pickleball budget and daily rhythm in 60 seconds. Compare court fees in THB and USD, Grab and BTS rides, city pairings, and DIY vs guided trip options.",
    url: "https://www.thepickleballpassport.org/thailand-pickleball-calculator",
    siteName: "The Pickleball Passport",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.thepickleballpassport.org/og-images/homepage.jpg",
        width: 1200,
        height: 630,
        alt: "Thailand Pickleball Trip & Court Cost Calculator by The Pickleball Passport",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Thailand Pickleball Trip & Court Cost Calculator (2026)",
    description:
      "Calculate court fees in THB and USD, Grab transport, heat windows, and city pairings across Bangkok, Chiang Mai, Hua Hin, Pattaya, and Phuket.",
    images: ["https://www.thepickleballpassport.org/og-images/homepage.jpg"],
  },
};

const COST_BENCHMARKS = [
  {
    category: "Open Play Session (Per Player)",
    thbRange: "150 to 350 THB",
    usdRange: "$4 to $10 USD",
    notes: "2 to 3 hours of organized community rotation (booked via Reclub or LINE).",
  },
  {
    category: "Private Indoor / Covered Court Rental (Per Hour)",
    thbRange: "400 to 900 THB / hr",
    usdRange: "$11 to $26 USD / hr",
    notes: "Split across 4 players ($3 to $7 per person per hour). Peak evening and AC courts sit at the top of the range.",
  },
  {
    category: "Private Coaching or Small-Group Clinic",
    thbRange: "1,200 to 2,800 THB",
    usdRange: "$35 to $80 USD",
    notes: "Per session depending on coach credentials, indoor court fees, and group ratio.",
  },
  {
    category: "Grab Car / Taxi to Bangkok Courts (One Way)",
    thbRange: "150 to 250 THB",
    usdRange: "$4.50 to $7.50 USD",
    notes: "Typical 30 to 40 minute ride from central Sukhumvit to Udom Suk (Arise Pickleball).",
  },
  {
    category: "BTS Skytrain / MRT Subway Ride",
    thbRange: "25 to 62 THB",
    usdRange: "$0.75 to $1.80 USD",
    notes: "Fastest way to beat Bangkok rush-hour traffic before hopping a short taxi to the court.",
  },
  {
    category: "Thai Sports / Traditional Recovery Massage (60 to 90 min)",
    thbRange: "350 to 900 THB",
    usdRange: "$10 to $26 USD",
    notes: "Clean neighborhood spas to upscale wellness centers. Worth scheduling every 2 to 3 play days.",
  },
  {
    category: "Domestic Flight (Bangkok to Chiang Mai or Phuket)",
    thbRange: "1,400 to 3,200 THB",
    usdRange: "$40 to $92 USD",
    notes: "One-way economy fare with checked paddle bag on Bangkok Airways, Thai Smile/Thai Airways, or AirAsia.",
  },
  {
    category: "Private Van Transfer (Bangkok to Hua Hin or Pattaya)",
    thbRange: "2,200 to 3,500 THB",
    usdRange: "$63 to $100 USD",
    notes: "Door-to-door private van for 2 to 4 players with luggage. Zero airport security lines.",
  },
];

const CALCULATOR_FAQS = [
  {
    question: "How much does it cost to play pickleball in Thailand?",
    answer:
      "Drop-in open play sessions in Bangkok, Chiang Mai, Hua Hin, Pattaya, and Phuket typically cost between 150 and 350 THB ($4 to $10 USD) for a two-to-three-hour session. Booking a private covered or indoor air-conditioned court runs 400 to 900 THB ($11 to $26 USD) per hour total, or roughly $3 to $7 USD per player when split four ways.",
  },
  {
    question: "How much should I budget for Grab and BTS transport to Bangkok pickleball courts?",
    answer:
      "Budget 300 to 500 THB ($9 to $15 USD) per play day for round-trip court transport in Bangkok. For example, taking a Grab from central Sukhumvit to Arise Pickleball in Udom Suk takes 30 to 40 minutes and costs 150 to 250 THB ($4.50 to $7.50 USD) each way, or even less if you ride the BTS Skytrain to Udom Suk station first.",
  },
  {
    question: "How many cities should I include in a 7-to-9-day Thailand pickleball trip?",
    answer:
      "Stick to two bases on a 7-to-9-day trip, such as Bangkok plus Chiang Mai (cooler mountain air and Lanna culture) or Bangkok plus Hua Hin or Pattaya (slower beach rhythm with no domestic flight required). Travel days are poor court days, so cramming three cities into one week cuts your court time and recovery in half.",
  },
  {
    question: "Is it better to book a DIY Thailand pickleball trip or join an organized group?",
    answer:
      "If you have flexible time and enjoy coordinating Reclub waitlists, messaging venues on LINE a week ahead, and booking your own hotels and transfers, Thailand is very rewarding to travel independently. If you want guaranteed court blocks, 16 level-matched players, pro coaching, five-star riverside and boutique hotels, and zero logistics stress, joining a Bangkok Clinic Week ($169 to $299) or a 9-day flagship trip saves 15 to 20 hours of planning.",
  },
];


export default function ThailandPickleballCalculatorPage() {
  const softwareJsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Thailand Pickleball Trip & Court Cost Calculator",
    applicationCategory: "TravelApplication",
    operatingSystem: "Web",
    url: "https://www.thepickleballpassport.org/thailand-pickleball-calculator",
    description:
      "Interactive Thailand pickleball trip budget and rhythm calculator covering court fees in THB and USD, Grab and BTS transport, domestic transfers, and recommended courts across Bangkok, Chiang Mai, Hua Hin, Pattaya, and Phuket.",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    provider: {
      "@type": "Organization",
      name: "The Pickleball Passport",
      url: "https://www.thepickleballpassport.org",
    },
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: CALCULATOR_FAQS.map((item) => ({
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#0F1A2A] via-[#1D2D44] to-[#0F1A2A] text-white py-14 sm:py-20 border-b border-[#B08D55]/30">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#B08D55]/40 bg-white/10 backdrop-blur-sm px-4 py-1.5 text-xs font-bold tracking-[0.2em] uppercase text-[#CFB78D] mb-5">
            Free Interactive Planning Tool · 2026 THB &amp; USD Rates
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight mb-4">
            Thailand Pickleball Trip &amp; Court Cost Calculator
          </h1>
          <p className="text-base sm:text-lg text-white/80 max-w-3xl leading-relaxed mb-6">
            Select the cities you want to play in, your trip length, and your court preferences below. You will get an instant breakdown of court fees in Thai Baht (THB) and USD, Grab and BTS transport costs, recommended venues, and how a DIY schedule compares to a hosted trip.
          </p>
          <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm">
            <Link
              href="/thailand-pickleball-playbook"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/15 text-[#CFB78D] font-semibold border border-white/15 transition-colors"
            >
              Read the 23-Page Thailand Playbook
            </Link>
            <Link
              href="/bangkok-pickleball-courts"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/15 text-white font-semibold border border-white/15 transition-colors"
            >
              Bangkok Courts Guide
            </Link>
          </div>
        </div>
      </section>

      {/* Interactive Calculator Section */}
      <TripCalculator />

      {/* Server-Rendered Reference Table: 2026 Thailand Pickleball Cost Benchmarks */}
      <section className="py-16 sm:py-20 bg-white border-b border-[#B08D55]/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#B08D55] mb-2">
            2026 Price Reference Table
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1D2D44] mb-4">
            What Pickleball Courts, Transport &amp; Recovery Actually Cost in Thailand
          </h2>
          <p className="text-base text-[#1D2D44]/75 max-w-3xl mb-8 leading-relaxed">
            Below are the real-world 2026 price ranges in Thai Baht (THB) and US Dollars (calculated at roughly 35 THB per $1 USD) across Bangkok, Chiang Mai, Hua Hin, Pattaya, and Phuket.
          </p>

          <div className="overflow-x-auto rounded-2xl border border-[#B08D55]/20 shadow-sm">
            <table className="w-full text-left border-collapse bg-white">
              <thead>
                <tr className="bg-[#1D2D44] text-white text-xs uppercase tracking-wider">
                  <th className="py-4 px-5 font-bold">Item / Expense</th>
                  <th className="py-4 px-5 font-bold">Thai Baht (THB)</th>
                  <th className="py-4 px-5 font-bold">US Dollars (USD)</th>
                  <th className="py-4 px-5 font-bold">Local Context</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#B08D55]/15 text-sm">
                {COST_BENCHMARKS.map((row) => (
                  <tr key={row.category} className="hover:bg-[#FDF8F3]/80 transition-colors">
                    <td className="py-4 px-5 font-serif font-bold text-[#1D2D44]">
                      {row.category}
                    </td>
                    <td className="py-4 px-5 font-semibold text-[#B08D55] whitespace-nowrap">
                      {row.thbRange}
                    </td>
                    <td className="py-4 px-5 font-bold text-[#1D2D44] whitespace-nowrap">
                      {row.usdRange}
                    </td>
                    <td className="py-4 px-5 text-[#1D2D44]/75 leading-relaxed">
                      {row.notes}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* DIY vs Hosted Comparison Section */}
      <section className="py-16 sm:py-20 bg-[#FDF8F3] border-b border-[#B08D55]/15">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#B08D55] mb-2">
            Three Ways to Experience Thailand
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1D2D44] mb-8">
            DIY Planning vs. Clinic Week vs. Hosted Trips
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl border border-[#B08D55]/15 p-6 flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#B08D55]">
                  Option 01 · DIY With Our Free Guides
                </span>
                <h3 className="font-serif text-xl font-bold text-[#1D2D44] mt-1 mb-3">
                  Self-Guided Trip
                </h3>
                <p className="text-sm text-[#1D2D44]/75 leading-relaxed mb-4">
                  Best when you have flexible dates and enjoy messaging local clubs yourself. Use our free 23-page Thailand Playbook and Bangkok Court Guide to book your own Reclub and LINE sessions.
                </p>
                <ul className="space-y-2 text-xs text-[#1D2D44]/75 mb-6">
                  <li>• Pay court fees directly (150 to 900 THB)</li>
                  <li>• Message venues 7 days before arrival</li>
                  <li>• Coordinate your own hotels, Grab rides, and domestic flights</li>
                </ul>
              </div>
              <Link
                href="/thailand-pickleball-playbook"
                className="inline-flex items-center justify-center px-5 py-3 rounded-xl border border-[#1D2D44] text-[#1D2D44] font-bold text-xs hover:bg-[#1D2D44] hover:text-white transition-colors"
              >
                Open Free 23-Page Playbook
              </Link>
            </div>

            <div className="bg-white rounded-2xl border border-[#B08D55]/30 p-6 flex flex-col justify-between shadow-sm">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#B08D55]">
                  Option 02 · Book Your Own Hotel, We Run the Courts
                </span>
                <h3 className="font-serif text-xl font-bold text-[#1D2D44] mt-1 mb-3">
                  Bangkok Clinic Week ($169 to $299)
                </h3>
                <p className="text-sm text-[#1D2D44]/75 leading-relaxed mb-4">
                  Already in Bangkok or traveling on your own hotel points? Join Coach Travis Rhea (Mind Your Pickle) plus Jaron and Ryan for four 3-hour sessions of mindset work and coached open play (Nov 2 to 5, 2026, capped at 16 players).
                </p>
                <ul className="space-y-2 text-xs text-[#1D2D44]/75 mb-6">
                  <li>• Two-Day Pass: $169 (2 sessions, 6 hours on court)</li>
                  <li>• Full Clinic Pass: $299 (4 sessions, 12 hours on court + Nov 1 welcome mixer)</li>
                  <li>• Guaranteed court space and level-matched group</li>
                </ul>
              </div>
              <Link
                href="/clinics"
                className="inline-flex items-center justify-center px-5 py-3 rounded-xl bg-[#1D2D44] text-[#CFB78D] font-bold text-xs hover:bg-[#0F1A2A] transition-colors"
              >
                View Bangkok Clinic Week
              </Link>
            </div>

            <div className="bg-[#0F1A2A] text-white rounded-2xl border border-[#B08D55]/40 p-6 flex flex-col justify-between shadow-md">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#CFB78D]">
                  Option 03 · Turnkey 5-Star Experience
                </span>
                <h3 className="font-serif text-xl font-bold text-white mt-1 mb-3">
                  9-Day Flagship &amp; Shorter 3-to-5-Day Trips
                </h3>
                <p className="text-sm text-white/80 leading-relaxed mb-4">
                  Our 9-day, 8-night flagship Thailand trips (starting Jan 14 to 22, 2027 in Bangkok and Chiang Mai with an optional 3-night Phuket extension) and shorter 3-to-5-day regional trips handle every court, hotel, transfer, and cultural anchor for 16 players.
                </p>
                <ul className="space-y-2 text-xs text-white/80 mb-6">
                  <li>• Five-star stays (Anantara Riverside &amp; Melia Chiang Mai)</li>
                  <li>• 6 structured court sessions + final tournament</li>
                  <li>• Domestic flights, private transfers, Wat Pho, Thonburi boat, and Elephant Nature Park included</li>
                </ul>
              </div>
              <Link
                href="/trips"
                className="inline-flex items-center justify-center px-5 py-3 rounded-xl bg-gradient-to-r from-[#B08D55] to-[#CFB78D] text-[#0F1A2A] font-bold text-xs shadow-lg shadow-[#B08D55]/30 transition-all"
              >
                Explore 2027 Trips
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 sm:py-20 bg-white border-b border-[#B08D55]/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#B08D55] mb-2">
            Budget &amp; Logistics FAQ
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1D2D44] mb-8">
            Frequently Asked Questions About Thailand Pickleball Costs
          </h2>
          <div className="space-y-4">
            {CALCULATOR_FAQS.map((item) => (
              <div
                key={item.question}
                className="bg-[#FDF8F3] rounded-2xl border border-[#B08D55]/15 p-6"
              >
                <h3 className="font-serif text-lg sm:text-xl font-bold text-[#1D2D44] mb-2">
                  {item.question}
                </h3>
                <p className="text-sm sm:text-base text-[#1D2D44]/75 leading-relaxed">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact & Cross-Link Footer Banner */}
      <section className="py-14 bg-[#0F1A2A] text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="text-sm text-white/80">
            <p className="font-serif text-xl font-bold text-white mb-1">
              Have a question about court costs, dates, or bringing your club to Thailand?
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
              , call or text our US line at{" "}
              <a
                href="tel:+15125648522"
                className="text-[#CFB78D] underline hover:text-white"
              >
                (512) 564-8522
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
          <div className="flex flex-wrap gap-3 shrink-0">
            <Link
              href="/thailand-pickleball-playbook"
              className="px-4 py-2.5 rounded-xl border border-[#CFB78D]/50 text-[#CFB78D] hover:bg-white/10 font-semibold text-xs uppercase tracking-wider transition-colors"
            >
              Read Full Playbook
            </Link>
            <Link
              href="/bangkok-pickleball-courts"
              className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#B08D55] to-[#CFB78D] text-[#0F1A2A] font-bold text-xs uppercase tracking-wider transition-all"
            >
              Bangkok Courts Guide
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
