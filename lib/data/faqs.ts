/**
 * Public FAQ content
 *
 * Static so /faq works without the database. Adapted from
 * scripts/seed-faqs.ts, with answers that contradicted the current site
 * (Stripe payments, deposit %, refund terms, Thonglor hotel, fixed
 * session counts, old booking flow) rewritten to match it.
 */

export interface FAQ {
  question: string;
  answer: string[];
  link?: { label: string; href: string };
}

export interface FAQCategory {
  id: string;
  name: string;
  faqs: FAQ[];
}

export const faqCategories: FAQCategory[] = [
  {
    id: 'general',
    name: 'General',
    faqs: [
      {
        question: 'What is The Pickleball Passport?',
        answer: [
          'The Pickleball Passport is a curated travel experience that combines exceptional pickleball with 5-star hotels, cultural immersion, and wellness in Thailand.',
          'We coordinate everything, from structured court sessions and private transportation to handpicked accommodations, group dinners, and cultural excursions.',
        ],
      },
      {
        question: 'Who is The Pickleball Passport for?',
        answer: [
          "Pickleball players of all skill levels who want to combine the sport with an unforgettable trip. Whether you're competitive, social, or just want a great trip with great people, this is for you.",
          "Travel companions who don't play are welcome too. Ask us about companion pricing when you apply.",
        ],
      },
      {
        question: 'Where do you go?',
        answer: [
          'Every trip starts in Bangkok, then continues to a second destination depending on the departure: Hua Hin, Chiang Mai, Phuket, or Pattaya for our Songkran edition.',
          'Bangkok for energy and street food. Hua Hin for the Gulf Coast. Chiang Mai for temples and nature. Phuket for islands and beaches.',
        ],
        link: { label: 'See all departures', href: '/trips' },
      },
      {
        question: 'How big are the groups?',
        answer: [
          'Groups are capped at 16 people. Small enough that everyone knows each other by name, large enough for great pickleball matchups and a social atmosphere.',
        ],
      },
    ],
  },
  {
    id: 'trips-packages',
    name: 'Trips & Packages',
    faqs: [
      {
        question: "What's included in the trip?",
        answer: [
          '8 nights at 5-star hotels across 2 destinations, daily breakfast, group dinners, private ground transportation, structured pickleball sessions with court fees, cultural experiences, and a dedicated trip host throughout.',
          'The exact itinerary, sessions, and excursions for each departure are listed on its trip page.',
        ],
        link: { label: 'See all departures', href: '/trips' },
      },
      {
        question: "What's NOT included?",
        answer: [
          'International airfare to and from Thailand, travel insurance, spa treatments beyond hotel amenities, alcoholic beverages beyond group dinner inclusions, meals on free nights, and personal shopping.',
          'Gratuities for guides, drivers, and hotel staff are at your discretion.',
        ],
      },
      {
        question: 'How long is the trip?',
        answer: [
          'Trips are 9 days and 8 nights, split between Bangkok and your second destination.',
          'The pace balances activity with downtime. Every day has structured experiences but also free time to explore on your own.',
        ],
      },
      {
        question: 'Can I bring a non-playing companion?',
        answer: [
          'Yes. Companions enjoy everything except the pickleball sessions: the hotels, dinners, excursions, and cultural experiences. Ask us about companion pricing when you apply.',
        ],
      },
      {
        question: 'Can I travel solo?',
        answer: [
          "Yes. If you're travelling solo, we'll pair you with another solo traveller in the group at no extra cost. A private room is also available for an additional fee, listed on each departure page.",
        ],
      },
    ],
  },
  {
    id: 'pickleball',
    name: 'Pickleball',
    faqs: [
      {
        question: 'What skill level do I need?',
        answer: [
          "All skill levels are welcome, from beginners who've only played a few times to tournament-level competitors. Sessions blend structured instruction with social play so everyone improves while having fun.",
        ],
      },
      {
        question: 'What does a typical session look like?',
        answer: [
          'Sessions include warm-ups, structured drills, round-robin play, and competitive games. The number of sessions varies by departure and is listed on each trip page.',
          "Paddles and balls are provided, though you're welcome to bring your own.",
        ],
      },
      {
        question: "Can I just do the pickleball without the trip?",
        answer: [
          'Yes. Clinic Week in Bangkok is four sessions of mindset work and coached play, with no trip required. You book your own room; we run the pickleball.',
        ],
        link: { label: 'See Clinic Week', href: '/clinics' },
      },
    ],
  },
  {
    id: 'wellness-culture',
    name: 'Wellness & Culture',
    faqs: [
      {
        question: 'What cultural experiences are on the itinerary?',
        answer: [
          'Each departure includes cultural experiences in both destinations, such as temple visits, food tours, and local excursions. The full list for each trip is on its departure page.',
        ],
      },
      {
        question: 'Can I extend my stay for dental or medical work?',
        answer: [
          'Yes. Thailand is a global leader in medical tourism, and some guests add days before or after the trip for dental work, health screenings, or other procedures at JCI-accredited facilities.',
          'This is entirely independent of The Pickleball Passport trip. We can provide general guidance, but medical arrangements are your responsibility.',
        ],
      },
    ],
  },
  {
    id: 'travel-logistics',
    name: 'Travel & Logistics',
    faqs: [
      {
        question: 'Do I need a visa for Thailand?',
        answer: [
          'Many passport holders, including the US, UK, EU, Canada, and Australia, can currently enter Thailand visa-free for a stay well beyond the 9-day trip.',
          'Entry rules change, so please check the latest requirements for your nationality before you book flights.',
        ],
      },
      {
        question: 'Are airport transfers included?',
        answer: [
          'Yes. Ground transportation is included throughout the trip in private air-conditioned vans, from your arrival in Bangkok through departure.',
        ],
      },
      {
        question: "What's the best time of year to visit Thailand?",
        answer: [
          'Peak season runs from November to February, when the weather is cooler and drier. Ideal for outdoor pickleball and exploring.',
          'Each departure is scheduled around the best season for its destination.',
        ],
      },
      {
        question: 'Do I need travel insurance?',
        answer: [
          'We strongly recommend comprehensive travel insurance covering medical expenses, trip cancellation, and personal liability.',
          'Before departure, all guests complete a standard liability waiver as part of onboarding.',
        ],
      },
      {
        question: 'What should I pack?',
        answer: [
          'Athletic wear for pickleball (moisture-wicking clothes, court shoes with non-marking soles), comfortable walking shoes, swimwear, sunscreen, and a light rain jacket.',
          'Thailand is hot year-round (28–35°C / 82–95°F), so pack light, breathable fabrics. Temples require covered shoulders and knees.',
        ],
      },
    ],
  },
  {
    id: 'payments-pricing',
    name: 'Payments & Pricing',
    faqs: [
      {
        question: 'How do I pay?',
        answer: [
          'Each departure page has a secure payment link to reserve your spot. All prices are in USD.',
          "Prefer to talk it through first? Schedule a call and we'll walk you through it.",
        ],
        link: { label: 'Schedule a call', href: '/reserve' },
      },
      {
        question: 'What is the cancellation and refund policy?',
        answer: [
          'Refunds depend on how far before departure you cancel. Our Refund Policy has the full schedule.',
        ],
        link: { label: 'Read the Refund Policy', href: '/refund-policy' },
      },
      {
        question: 'Are there any hidden fees?',
        answer: [
          'No. The trip price covers everything listed as included on the departure page. There are no surprise charges for transportation, court fees, equipment, or included activities.',
          'Optional extras like spa treatments are priced separately.',
        ],
      },
    ],
  },
];
