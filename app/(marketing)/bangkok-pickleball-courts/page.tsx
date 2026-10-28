import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Where to Play Pickleball in Bangkok (2026 Local Guide): Courts, BTS Access & Reclub | The Pickleball Passport",
  description:
    "The 2026 local guide to Bangkok pickleball courts. Compare Arise Pickleball (Udom Suk), Sterling Sport & Wellness, and Papaya Pickleball, including BTS Skytrain access, Grab fares, Reclub and LINE booking, and heat tips.",
  keywords: [
    "where to play pickleball in Bangkok",
    "Bangkok pickleball courts",
    "indoor pickleball Bangkok",
    "Arise Pickleball Bangkok",
    "Sterling Sport and Wellness pickleball",
    "Papaya Pickleball Bangkok",
    "Bangkok pickleball open play Reclub",
    "Udom Suk pickleball Bangkok",
    "pickleball clinics Bangkok",
    "pickleball Thailand",
  ],
  alternates: {
    canonical: "https://www.thepickleballpassport.org/bangkok-pickleball-courts",
  },
  openGraph: {
    title:
      "Where to Play Pickleball in Bangkok (2026 Local Guide) | The Pickleball Passport",
    description:
      "Compare Arise Pickleball, Sterling Sport & Wellness, and Papaya Pickleball in Bangkok. BTS access, Grab fares, Reclub & LINE booking templates, and where to stay.",
    url: "https://www.thepickleballpassport.org/bangkok-pickleball-courts",
    siteName: "The Pickleball Passport",
    locale: "en_US",
    type: "article",
    images: [
      {
        url: "https://www.thepickleballpassport.org/og-images/homepage.jpg",
        width: 1200,
        height: 630,
        alt: "Where to Play Pickleball in Bangkok (2026 Guide) by The Pickleball Passport",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Where to Play Pickleball in Bangkok (2026 Local Guide)",
    description:
      "Indoor & covered courts, BTS transit tips, Grab fares, and how to find level-matched games on Reclub & LINE in Bangkok.",
    images: ["https://www.thepickleballpassport.org/og-images/homepage.jpg"],
  },
};

const BANGKOK_VENUES = [
  {
    id: "arise-pickleball",
    badge: "01 · Dedicated Pickleball Complex",
    name: "Arise Pickleball",
    neighborhood: "Udom Suk (Bang Na / Sukhumvit 103 Corridor)",
    bestFor: "Organized open play, leveled rotations, visiting & expat community",
    transitSummary:
      "BTS Skytrain (Sukhumvit Line) to Udom Suk station + 5 to 10 min taxi/motorbike, or 30 to 40 min by Grab from central Sukhumvit (roughly 150 to 250 THB / $4.50 to $7.50 USD each way).",
    courtVibe:
      "Arise Pickleball is one of Bangkok's anchor communities for dedicated players. Built specifically around pickleball rather than retrofitted multi-sport lines, it offers reliable court surfaces, roof shelter from midday sun and sudden tropical downpours, strong lighting for evening sessions, and steady airflow.",
    bookingAndGames:
      "Sessions fill up quickly on weekday evenings and weekends. Check Reclub and message the club via LINE or Facebook about 7 days before you land. Share both your skill rating (e.g. 3.5, 4.0+) and how many days a week you play so organizers can direct you to the right court block.",
    peakWindows: "Mornings (7:00 AM to 10:30 AM) and Evenings (5:00 PM to 10:00 PM)",
  },
  {
    id: "sterling-sport-and-wellness",
    badge: "02 · Play + Recovery Hub",
    name: "Sterling Sport & Wellness",
    neighborhood: "Bangkok",
    bestFor: "Private court bookings, wellness/recovery pairing, clean modern amenities",
    transitSummary:
      "Accessible via Grab or BTS/MRT + short taxi depending on your hotel base. Check traffic on Google Maps or Grab 45 minutes before your court time.",
    courtVibe:
      "Sterling Sport & Wellness pairs well-kept pickleball courts with recovery and fitness facilities. It is an ideal option when you want a cleaner, club-style environment where you can play a solid two-hour block and cool down properly afterward instead of stepping straight from a hot court into a humid taxi.",
    bookingAndGames:
      "Works well for both pre-arranged group bookings and organized community sessions. Message a week ahead on LINE or check weekly Reclub listings to confirm which skill brackets are running during your dates.",
    peakWindows: "Morning blocks (8:00 AM to 11:00 AM) and After-Work Sessions (5:30 PM to 9:30 PM)",
  },
  {
    id: "papaya-pickleball",
    badge: "03 · Community & Coached Play",
    name: "Papaya Pickleball",
    neighborhood: "Bangkok",
    bestFor: "Social rotations, coached clinics, welcoming local + visiting player mix",
    transitSummary:
      "Take BTS/MRT toward the nearest station and use Grab for the final mile to avoid sitting in Sukhumvit or Sathorn gridlock.",
    courtVibe:
      "Papaya Pickleball has built a reputation for welcoming visiting players into regular Bangkok rotations without making newcomers feel like outsiders. Courts are well maintained, the paddle-rack system keeps games moving, and the atmosphere balances competitive rallies with post-match social connection.",
    bookingAndGames:
      "Sign up via Reclub or message the organizers directly on LINE/Instagram before arrival. If you are traveling solo or as a couple, let them know your arrival dates a week out so they can point you to the strongest session for your level.",
    peakWindows: "Early mornings, weekday evenings (6:00 PM to 9:30 PM), and weekend blocks",
  },
];

const COMPARISON_ROWS = [
  {
    venue: "Arise Pickleball",
    area: "Udom Suk (Sukhumvit Line)",
    transit: "BTS Udom Suk + quick Grab, or 30 to 40 min Grab from central BKK (150 to 250 THB)",
    bestFor: "Deepest pool of organized open play & competitive rotations",
    booking: "Reclub + LINE / Facebook (message 7 days out)",
  },
  {
    venue: "Sterling Sport & Wellness",
    area: "Bangkok",
    transit: "Grab or BTS/MRT + short car transfer",
    bestFor: "Quality court surfaces paired with wellness & recovery facilities",
    booking: "Direct via LINE + Reclub session listings",
  },
  {
    venue: "Papaya Pickleball",
    area: "Bangkok",
    transit: "BTS/MRT + short Grab transfer",
    bestFor: "Coached play, welcoming social rotations & visiting players",
    booking: "Reclub + LINE / social channels",
  },
];

const BANGKOK_FAQS = [
  {
    question: "Where are the best places to play pickleball in Bangkok?",
    answer:
      "The three primary pickleball hubs in Bangkok with the strongest depth of organized play are Arise Pickleball (located in Udom Suk), Sterling Sport & Wellness, and Papaya Pickleball. Together they cover competitive open play, private covered court rentals, and coached clinic sessions.",
  },
  {
    question: "How do I get to Arise Pickleball in Bangkok and how much does a Grab cost?",
    answer:
      "Arise Pickleball is in the Udom Suk neighborhood. From central Sukhumvit (Asok, Phrom Phong, or Thong Lo), a Grab car takes about 30 to 40 minutes outside peak gridlock and costs roughly 150 to 250 THB ($4.50 to $7.50 USD) each way. During rush hour (4:30 PM to 7:00 PM), take the BTS Skytrain on the Sukhumvit Line straight to Udom Suk station and hop a 5-minute taxi or motorbike from the station.",
  },
  {
    question: "Can I just show up for drop-in open play at Bangkok pickleball courts?",
    answer:
      "Do not rely on unannounced walk-ins. Bangkok's best sessions use Reclub and LINE to cap court numbers and balance skill levels. Download Reclub and LINE before your flight, and message the venue about 7 days ahead with your skill rating and how often you play.",
  },
  {
    question: "Are there indoor or covered pickleball courts in Bangkok for the heat and rainy season?",
    answer:
      "Yes. Because Bangkok deals with 90-degree humidity year-round and short afternoon rain bursts from June to October, dedicated venues like Arise Pickleball, Sterling Sport & Wellness, and Papaya Pickleball prioritize covered and indoor court setups. Even under a roof, you should bring electrolyte packets, a towel, extra shirts, and fresh overgrips.",
  },
  {
    question: "What is the best neighborhood to stay in Bangkok if I want to play pickleball?",
    answer:
      "Pick your base by BTS Skytrain access rather than hotel star rating alone. Staying along the BTS Sukhumvit Line (between Asok, Phrom Phong, Thong Lo, On Nut, and Udom Suk) gives you fast train access to courts and dining. If you prefer five-star resort recovery (such as Anantara Riverside), use river boats and the BTS Silom/Sukhumvit interchange or leave outside rush hour.",
  },
];

export default function BangkokPickleballCourtsPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "Where to Play Pickleball in Bangkok (2026 Local Guide): Indoor Courts, BTS Access, Reclub & Open Play",
    description:
      "2026 local player guide to Bangkok pickleball courts, covering Arise Pickleball (Udom Suk), Sterling Sport & Wellness, and Papaya Pickleball, plus BTS Skytrain transit, Grab fares, Reclub booking, and heat tips.",
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
      "@id": "https://www.thepickleballpassport.org/bangkok-pickleball-courts",
    },
    datePublished: "2026-10-15",
    dateModified: "2026-10-27",
    about: [
      { "@type": "Place", name: "Bangkok, Thailand" },
      { "@type": "SportsActivityLocation", name: "Arise Pickleball Bangkok" },
      { "@type": "SportsActivityLocation", name: "Sterling Sport & Wellness Bangkok" },
      { "@type": "SportsActivityLocation", name: "Papaya Pickleball Bangkok" },
    ],
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: BANGKOK_FAQS.map((item) => ({
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
      <section className="relative overflow-hidden bg-gradient-to-b from-[#0F1A2A] via-[#1D2D44] to-[#0F1A2A] text-white py-16 sm:py-22 border-b border-[#B08D55]/30">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#B08D55]/40 bg-white/10 backdrop-blur-sm px-4 py-1.5 text-xs font-bold tracking-[0.2em] uppercase text-[#CFB78D] mb-6">
            Bangkok City Guide · 2026 Local Edition
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight mb-5">
            Where to Play Pickleball in Bangkok (2026 Local Guide)
          </h1>
          <p className="text-lg sm:text-xl text-[#CFB78D] font-serif mb-4">
            Indoor &amp; covered courts, BTS Skytrain access, Grab fares, and how to lock in games at your level before you land.
          </p>
          <p className="text-base sm:text-lg text-white/80 max-w-3xl leading-relaxed mb-8">
            Bangkok has the deepest organized pickleball scene in Thailand, centered around clubs like <strong>Arise Pickleball (Udom Suk)</strong>, <strong>Sterling Sport &amp; Wellness</strong>, and <strong>Papaya Pickleball</strong>. Here is everything you need to find the right sessions, beat Bangkok traffic, and handle the tropical heat.
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap gap-3.5">
            <a
              href="#top-bangkok-courts"
              className="inline-flex items-center justify-center px-7 py-4 rounded-xl bg-gradient-to-r from-[#B08D55] to-[#CFB78D] hover:from-[#8D7144] hover:to-[#B08D55] text-[#0F1A2A] font-bold text-sm shadow-xl shadow-[#B08D55]/30 transition-all"
            >
              See Bangkok&apos;s Top 3 Pickleball Venues
            </a>
            <Link
              href="/thailand-pickleball-calculator"
              className="inline-flex items-center justify-center px-6 py-4 rounded-xl border border-white/25 bg-white/10 hover:bg-white/15 text-white font-semibold text-sm transition-all"
            >
              Calculate Your Thailand Trip Cost
            </Link>
            <Link
              href="/thailand-pickleball-playbook"
              className="inline-flex items-center justify-center px-6 py-4 rounded-xl border border-[#CFB78D]/40 text-[#CFB78D] hover:bg-white/10 font-semibold text-sm transition-all"
            >
              Full 5-City Thailand Playbook
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Anchor Bar */}
      <nav
        aria-label="Bangkok Guide Navigation"
        className="sticky top-0 z-40 bg-[#FDF8F3]/95 backdrop-blur-md border-b border-[#B08D55]/20 py-3 shadow-sm"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4 overflow-x-auto text-xs sm:text-sm font-medium whitespace-nowrap">
          <div className="flex items-center gap-2">
            <span className="text-[#B08D55] font-bold uppercase tracking-wider mr-1">On this page:</span>
            <a href="#rule-one" className="px-3 py-1.5 rounded-lg hover:bg-[#F5E6D3] text-[#1D2D44]">
              #1 Transit Rule
            </a>
            <a href="#top-bangkok-courts" className="px-3 py-1.5 rounded-lg hover:bg-[#F5E6D3] text-[#1D2D44]">
              Top 3 Bangkok Venues
            </a>
            <a href="#comparison-table" className="px-3 py-1.5 rounded-lg hover:bg-[#F5E6D3] text-[#1D2D44]">
              Comparison Table
            </a>
            <a href="#reclub-and-line" className="px-3 py-1.5 rounded-lg hover:bg-[#F5E6D3] text-[#1D2D44]">
              Reclub &amp; LINE Booking
            </a>
            <a href="#where-to-stay" className="px-3 py-1.5 rounded-lg hover:bg-[#F5E6D3] text-[#1D2D44]">
              Where to Stay
            </a>
            <a href="#bangkok-faq" className="px-3 py-1.5 rounded-lg hover:bg-[#F5E6D3] text-[#1D2D44]">
              FAQ
            </a>
          </div>
          <Link
            href="/clinics"
            className="hidden md:inline-flex items-center px-3.5 py-1.5 rounded-lg bg-[#1D2D44] text-[#CFB78D] text-xs font-bold hover:bg-[#0F1A2A]"
          >
            Bangkok Clinic Week
          </Link>
        </div>
      </nav>

      {/* Rule #1: Location > Star Rating in Bangkok */}
      <section id="rule-one" className="scroll-mt-20 py-14 sm:py-16 bg-white border-b border-[#B08D55]/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#FDF8F3] rounded-2xl border border-[#B08D55]/20 p-6 sm:p-8">
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#B08D55] mb-2">
              Rule #1 Before You Book a Hotel or Court
            </p>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1D2D44] mb-4">
              Never Plan Bangkok Pickleball by Map Distance Alone
            </h2>
            <p className="text-base text-[#1D2D44]/80 leading-relaxed mb-4">
              The single biggest mistake first-time visitors make in Bangkok is looking at a four-mile line on Google Maps and assuming it is a 10-minute ride. Between 4:30 PM and 7:30 PM, crossing Sukhumvit, Asok, or Sathorn by car can easily take 50 to 65 minutes.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              <div className="bg-white rounded-xl border border-[#B08D55]/15 p-4">
                <p className="text-xs font-bold uppercase tracking-wider text-[#B08D55] mb-1">
                  Transit Rule 01
                </p>
                <p className="font-serif font-bold text-[#1D2D44] mb-1">
                  Use BTS &amp; MRT at Rush Hour
                </p>
                <p className="text-xs text-[#1D2D44]/75 leading-relaxed">
                  Take the BTS Skytrain or MRT subway for the main corridor, then use a 5-minute Grab or taxi from the station to the court.
                </p>
              </div>
              <div className="bg-white rounded-xl border border-[#B08D55]/15 p-4">
                <p className="text-xs font-bold uppercase tracking-wider text-[#B08D55] mb-1">
                  Transit Rule 02
                </p>
                <p className="font-serif font-bold text-[#1D2D44] mb-1">
                  Know Your Udom Suk Timing
                </p>
                <p className="text-xs text-[#1D2D44]/75 leading-relaxed">
                  Arise Pickleball in Udom Suk is ~30 to 40 minutes by Grab from central Bangkok (150 to 250 THB / $4.50 to $7.50 USD each way) outside peak gridlock.
                </p>
              </div>
              <div className="bg-white rounded-xl border border-[#B08D55]/15 p-4">
                <p className="text-xs font-bold uppercase tracking-wider text-[#B08D55] mb-1">
                  Transit Rule 03
                </p>
                <p className="font-serif font-bold text-[#1D2D44] mb-1">
                  One Major Crossing Per Day
                </p>
                <p className="text-xs text-[#1D2D44]/75 leading-relaxed">
                  Group your court session with dinner or massage in the same part of town rather than zig-zagging across the city three times.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Deep-Dive Venue Profiles */}
      <section id="top-bangkok-courts" className="scroll-mt-20 py-16 sm:py-20 bg-[#FDF8F3] border-b border-[#B08D55]/15">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#B08D55] mb-2">
              Vetted Bangkok Court Directory
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1D2D44] mb-4">
              Bangkok&apos;s Top 3 Pickleball Venues for Visiting &amp; Local Players
            </h2>
            <p className="text-base text-[#1D2D44]/75 leading-relaxed">
              While hotel roof courts and pop-up lines appear around the city, these three clubs provide the strongest depth of organized play, consistent court quality, and reliable community games in 2026.
            </p>
          </div>

          <div className="space-y-8">
            {BANGKOK_VENUES.map((venue) => (
              <article
                key={venue.id}
                id={venue.id}
                className="bg-white rounded-2xl border border-[#B08D55]/20 p-6 sm:p-8 shadow-sm"
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 pb-4 mb-5 border-b border-[#B08D55]/10">
                  <div>
                    <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#B08D55]">
                      {venue.badge}
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#1D2D44] mt-1">
                      {venue.name}
                    </h3>
                    <p className="text-xs font-semibold text-[#1D2D44]/65 mt-0.5">
                      Area: {venue.neighborhood}
                    </p>
                  </div>
                  <span className="inline-flex self-start sm:self-center px-3.5 py-1.5 rounded-full bg-[#F5E6D3] text-[#1D2D44] text-xs font-bold">
                    Peak: {venue.peakWindows}
                  </span>
                </div>

                <div className="space-y-4 text-sm sm:text-base text-[#1D2D44]/80 leading-relaxed">
                  <p>{venue.courtVibe}</p>
                  <p>
                    <strong className="text-[#1D2D44]">How to Book &amp; Join Games:</strong>{" "}
                    {venue.bookingAndGames}
                  </p>
                </div>

                <div className="mt-6 bg-[#FDF8F3] rounded-xl border border-[#B08D55]/15 p-4 text-xs sm:text-sm text-[#1D2D44]/85">
                  <strong className="text-[#B08D55] uppercase tracking-wider mr-2">
                    BTS &amp; Grab Access:
                  </strong>
                  {venue.transitSummary}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section id="comparison-table" className="scroll-mt-20 py-16 sm:py-20 bg-white border-b border-[#B08D55]/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#B08D55] mb-2">
            At-a-Glance Comparison
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1D2D44] mb-6">
            Bangkok Pickleball Courts Side-by-Side
          </h2>

          <div className="overflow-x-auto rounded-2xl border border-[#B08D55]/20 shadow-sm">
            <table className="w-full text-left border-collapse bg-white">
              <thead>
                <tr className="bg-[#1D2D44] text-white text-xs uppercase tracking-wider">
                  <th className="py-4 px-5 font-bold">Venue</th>
                  <th className="py-4 px-5 font-bold">Location / Line</th>
                  <th className="py-4 px-5 font-bold">Getting There (BTS / Grab)</th>
                  <th className="py-4 px-5 font-bold">Best For</th>
                  <th className="py-4 px-5 font-bold">How to Book</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#B08D55]/15 text-sm">
                {COMPARISON_ROWS.map((row) => (
                  <tr key={row.venue} className="hover:bg-[#FDF8F3]/80 transition-colors">
                    <td className="py-4 px-5 font-serif font-bold text-[#1D2D44] whitespace-nowrap">
                      {row.venue}
                    </td>
                    <td className="py-4 px-5 text-[#1D2D44]/80">{row.area}</td>
                    <td className="py-4 px-5 text-[#1D2D44]/75">{row.transit}</td>
                    <td className="py-4 px-5 text-[#1D2D44]/80 font-medium">{row.bestFor}</td>
                    <td className="py-4 px-5 text-[#B08D55] font-semibold">{row.booking}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* How to Find Games on Reclub & LINE + Copy-Paste Message Template */}
      <section id="reclub-and-line" className="scroll-mt-20 py-16 sm:py-20 bg-[#FDF8F3] border-b border-[#B08D55]/15">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7">
              <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#B08D55] mb-2">
                Pre-Arrival Booking Playbook
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1D2D44] mb-4">
                How to Lock In Level-Matched Games 7 Days Before You Land
              </h2>
              <p className="text-base text-[#1D2D44]/75 leading-relaxed mb-6">
                Bangkok&apos;s best games run through community organizers rather than walk-up public park queues. If you follow this four-step routine one week before takeoff, you will walk straight onto courts that match your pace:
              </p>

              <ol className="space-y-4 text-sm text-[#1D2D44]/80">
                <li className="bg-white rounded-xl border border-[#B08D55]/15 p-4">
                  <strong className="text-[#1D2D44] block mb-1">
                    1. Install Reclub, LINE, and Grab Before You Board
                  </strong>
                  Thai clubs post session caps and waitlists on Reclub, handle court pins and payment QR codes on LINE, and rely on Grab for painless transport.
                </li>
                <li className="bg-white rounded-xl border border-[#B08D55]/15 p-4">
                  <strong className="text-[#1D2D44] block mb-1">
                    2. Join Bangkok Pickleball Facebook Groups
                  </strong>
                  Weekly open-play flyers and visiting-player threads get posted in city Facebook groups first.
                </li>
                <li className="bg-white rounded-xl border border-[#B08D55]/15 p-4">
                  <strong className="text-[#1D2D44] block mb-1">
                    3. Message Venues 7 Days Ahead
                  </strong>
                  Evening indoor blocks fill fast. Sending a note a week ahead lets organizers point you to the exact night your skill tier gathers.
                </li>
                <li className="bg-white rounded-xl border border-[#B08D55]/15 p-4">
                  <strong className="text-[#1D2D44] block mb-1">
                    4. Share Both Your Rating and How Often You Play
                  </strong>
                  Self-ratings vary around the world. Telling an organizer &quot;I&apos;m a 3.8 DUPR and play four times a week&quot; gives them much better context than a number alone.
                </li>
              </ol>
            </div>

            <div className="lg:col-span-5 bg-[#0F1A2A] text-white rounded-2xl border border-[#B08D55]/30 p-6 sm:p-8">
              <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#CFB78D] mb-2">
                Copy-Paste LINE / Facebook Message
              </p>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-white mb-3">
                What to Send Bangkok Venues a Week Before Arrival
              </h3>
              <p className="text-xs text-white/75 mb-4">
                Use this exact script when messaging Arise, Sterling, or Papaya on LINE or Facebook:
              </p>
              <div className="bg-white/10 rounded-xl border border-white/15 p-4 font-sans text-xs sm:text-sm text-white/95 leading-relaxed mb-6">
                &quot;Hi! Sawasdee krub/ka. I&apos;m visiting Bangkok from [Date] to [Date] and staying near [BTS Station / Neighborhood]. I play around a [3.5 / 4.0 / 4.5] level and get on court [3 to 4] times a week back home. Which open-play sessions or leveled rotations during those dates would be the best fit, and can I reserve a spot on Reclub or LINE?&quot;
              </div>
              <p className="text-xs text-[#CFB78D] font-semibold">
                Tip: Bring cash (Thai Baht) in small bills (100, 500 THB) if you do not have a Thai bank PromptPay QR app, as foreign credit cards aren&apos;t always accepted for small open-play drop-in fees.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Where to Stay in Bangkok for Court Access */}
      <section id="where-to-stay" className="scroll-mt-20 py-16 sm:py-20 bg-white border-b border-[#B08D55]/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#B08D55] mb-2">
            Choosing Your Bangkok Base
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1D2D44] mb-4">
            Where to Stay in Bangkok for Pickleball + Recovery
          </h2>
          <p className="text-base text-[#1D2D44]/75 max-w-3xl mb-8 leading-relaxed">
            The right hotel supports your rhythm instead of trapping you in traffic. These two Bangkok corridors work best for visiting players:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#FDF8F3] rounded-2xl border border-[#B08D55]/20 p-6 sm:p-8">
              <span className="text-xs font-bold uppercase tracking-wider text-[#B08D55]">
                Corridor 01 · Fast Court &amp; Train Access
              </span>
              <h3 className="font-serif text-2xl font-bold text-[#1D2D44] mt-1 mb-3">
                Mid-to-East Sukhumvit (Phrom Phong, Thong Lo, On Nut, Udom Suk)
              </h3>
              <p className="text-sm text-[#1D2D44]/75 leading-relaxed mb-4">
                If your top priority is getting to Arise Pickleball in Udom Suk and other city courts with minimal commute friction, stay within a 5-minute walk of a green-line BTS Sukhumvit station.
              </p>
              <ul className="space-y-2 text-xs sm:text-sm text-[#1D2D44]/80">
                <li>• Direct BTS Skytrain ride straight to Udom Suk station</li>
                <li>• Walkable to cafes, sports massage spots, and late-night street food</li>
                <li>• Easy airport highway access to Suvarnabhumi (BKK)</li>
              </ul>
            </div>

            <div className="bg-[#FDF8F3] rounded-2xl border border-[#B08D55]/20 p-6 sm:p-8">
              <span className="text-xs font-bold uppercase tracking-wider text-[#B08D55]">
                Corridor 02 · Five-Star Resort Recovery &amp; Culture
              </span>
              <h3 className="font-serif text-2xl font-bold text-[#1D2D44] mt-1 mb-3">
                Chao Phraya Riverside (TPP Flagship Standard)
              </h3>
              <p className="text-sm text-[#1D2D44]/75 leading-relaxed mb-4">
                On our 9-day flagship trips, we base at five-star riverside properties like Anantara Riverside so returning from the courts feels like entering a tropical resort rather than another city block.
              </p>
              <ul className="space-y-2 text-xs sm:text-sm text-[#1D2D44]/80">
                <li>• Quiet sleep, river breezes, resort pools, and spa recovery</li>
                <li>• Immediate boat access to Wat Pho, Thonburi canals, and Yaowarat (Chinatown)</li>
                <li>• Best paired with mid-morning court windows (10:30 AM to 2:00 PM) when highway traffic flows smoothly</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="bangkok-faq" className="scroll-mt-20 py-16 sm:py-20 bg-[#FDF8F3] border-b border-[#B08D55]/15">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#B08D55] mb-2">
            Bangkok Player FAQ
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1D2D44] mb-8">
            Frequently Asked Questions About Playing Pickleball in Bangkok
          </h2>
          <div className="space-y-4">
            {BANGKOK_FAQS.map((item) => (
              <div
                key={item.question}
                className="bg-white rounded-2xl border border-[#B08D55]/15 p-6 shadow-sm"
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

      {/* Soft CTA Footer: Clinics, Trips & Full Playbook */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-[#0F1A2A] to-[#1D2D44] text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            <div className="bg-white/5 rounded-2xl border border-[#B08D55]/30 p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <span className="inline-block px-3 py-1 rounded-full bg-[#B08D55]/20 text-[#CFB78D] text-xs font-bold uppercase tracking-wider mb-3">
                  Bangkok · Nov 1 to 5, 2026
                </span>
                <h2 className="font-serif text-2xl font-bold text-white mb-2">
                  Play With Us in Bangkok: Clinic Week ($169 / $299)
                </h2>
                <p className="text-sm text-white/80 leading-relaxed mb-6">
                  Skip the Reclub waitlists. Join Coach Travis Rhea (Mind Your Pickle) plus Jaron and Ryan for four 3-hour sessions of mindset work and coached open play in Bangkok (Nov 2 to 5, 11am to 2pm, capped at 16 players). Book your own hotel; we run the courts.
                </p>
              </div>
              <Link
                href="/clinics"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-white text-[#1D2D44] font-bold text-sm hover:bg-[#FDF8F3] transition-all"
              >
                Reserve a Spot in Bangkok Clinic Week
              </Link>
            </div>

            <div className="bg-white/5 rounded-2xl border border-[#B08D55]/30 p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <span className="inline-block px-3 py-1 rounded-full bg-[#B08D55]/20 text-[#CFB78D] text-xs font-bold uppercase tracking-wider mb-3">
                  2027 Departures · Flagship &amp; Regional Trips
                </span>
                <h2 className="font-serif text-2xl font-bold text-white mb-2">
                  9-Day Flagship Trips &amp; Shorter 3-to-5-Day Trips
                </h2>
                <p className="text-sm text-white/80 leading-relaxed mb-6">
                  Want the entire week handled for you? Join our 9-day, 8-night flagship trips across Bangkok and Chiang Mai (starting January 14 to 22, 2027 with five-star stays and an optional 3-night Phuket extension) or our shorter 3-to-5-day regional trips in Phuket, Hua Hin, and Bangkok.
                </p>
              </div>
              <Link
                href="/trips"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#B08D55] to-[#CFB78D] text-[#0F1A2A] font-bold text-sm shadow-lg shadow-[#B08D55]/30 transition-all"
              >
                Explore 2027 Trips &amp; Apply
              </Link>
            </div>
          </div>

          <div className="bg-white/5 rounded-2xl border border-white/10 p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-sm text-white/80">
            <div>
              <p className="font-semibold text-white mb-1">
                Need help planning your Bangkok court sessions or group trip?
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
            <div className="flex flex-wrap gap-2.5 shrink-0">
              <Link
                href="/thailand-pickleball-playbook"
                className="px-4 py-2.5 rounded-lg border border-[#CFB78D]/50 text-[#CFB78D] hover:bg-white/10 font-semibold text-xs uppercase tracking-wider"
              >
                Full 5-City Playbook
              </Link>
              <Link
                href="/thailand-pickleball-calculator"
                className="px-4 py-2.5 rounded-lg border border-white/25 text-white hover:bg-white/10 font-semibold text-xs uppercase tracking-wider"
              >
                Trip Calculator
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
