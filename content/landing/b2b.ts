/**
 * Signature Group Experience (B2B) landing page copy
 *
 * Page: app/(marketing)/group-experiences/page.tsx
 * Edit any text here without touching layout. Images live in public/images/sge/.
 */

// TODO(Ryan): paste the GHL form ID for the group-planning form
// (GHL → Sites → Forms → your form → Integrate → the ID in the embed code).
// Until this is set, the page shows a placeholder card instead of the form.
export const GHL_FORM_ID = '';

// Testimonials, partner logo strip, and case study are placeholders.
// Flip to true once real, verified proof is filled in below.
export const showProof = false;

export const b2b = {
  meta: {
    title: 'Signature Group Experience | The Pickleball Passport',
    description:
      'Plan a private, fully hosted pickleball and cultural experience in Thailand for your company, leadership team, club, or professional community.',
  },

  brand: {
    title: 'The Pickleball Passport',
    tagline: 'Play the World',
    logo: '/images/sge/brand-mark.webp',
  },

  nav: {
    links: [
      { label: 'Experience', href: '#experience' },
      { label: 'How it works', href: '#how-it-works' },
      { label: 'FAQ', href: '#faq' },
    ],
    cta: 'Plan an SGE',
  },

  primaryCta: { label: 'Plan a Signature Group Experience', href: '#plan' },

  hero: {
    eyebrow: 'The Pickleball Passport Signature Group Experience',
    title: 'A Premium Thailand Experience Built Around Play, Culture, and Camaraderie',
    lede: 'A fully hosted journey combining pickleball, cultural immersion, shared adventure, and exceptional hospitality, thoughtfully designed around your group.',
    supportLine: 'You do not need a confirmed group to start planning.',
    image: {
      src: '/images/sge/hero.webp',
      width: 1920,
      height: 1280,
      alt: 'Four pickleball players smile and tap paddles together across the net.',
    },
  },

  trust: ['Based in Bangkok', 'Small-group delivery', 'Vetted local partners', 'Dedicated trip host'],

  about: {
    eyebrow: 'What is The Pickleball Passport?',
    title: 'Premium group travel built around shared play, local culture, and stronger relationships.',
    lede: 'The Pickleball Passport creates premium international experiences where people play, travel, and build relationships across cultures. The SGE brings that experience to private groups and organizations.',
    body: 'A fully hosted group journey combines organized pickleball, premium stays, local culture, meals, transport, and participant support.',
    reasons: [
      {
        number: '01',
        title: 'Why pickleball',
        body: 'Pickleball gives people across roles and playing levels an easy way to interact. It creates camaraderie through a shared activity that feels natural from the first game.',
        image: {
          src: '/images/sge/reason-pickleball.webp',
          width: 1200,
          height: 800,
          alt: 'Players from different backgrounds chat together on an indoor pickleball court.',
        },
      },
      {
        number: '02',
        title: 'Why Thailand',
        body: 'Thailand combines world-class hospitality, rich culture, and established pickleball access. As our operating base, it gives us trusted local partners and direct on-the-ground hosting.',
        image: {
          src: '/images/sge/reason-thailand.webp',
          width: 1200,
          height: 800,
          alt: 'A guest walks into a tropical Thai resort framed by trees and elephant sculptures.',
        },
      },
    ],
  },

  groups: {
    eyebrow: 'Give them an experience worth travelling for',
    title: 'Choose an experience that reflects how much you value your people.',
    lede: 'One signature experience, designed around the people you want to bring together.',
    cards: [
      {
        title: 'Company or leadership team',
        body: 'Turn a reward, offsite, or team gathering into an experience people genuinely want to join.',
      },
      {
        title: 'Founder or professional community',
        body: 'Bring members together through shared play and local experiences instead of another conference or formal networking program.',
      },
      {
        title: 'Members or clients',
        body: 'Create a distinctive experience that deepens their connection to your organization and gives them something valuable to anticipate.',
      },
      {
        title: 'Pickleball club or coaching group',
        body: 'Take your players to Thailand without sourcing courts, hotels, transport, activities, and local support separately.',
      },
      {
        title: 'A group you host or represent',
        body: 'Offer a premium Thailand departure to your audience while The Pickleball Passport manages participant preparation and delivery on the ground.',
      },
    ],
    prompt: 'Tell us who you are planning for and what you want them to experience. We will recommend the right approach.',
  },

  options: {
    eyebrow: 'Choose your Signature Group Experience',
    title: 'Choose the level of collaboration that fits your organization.',
    cards: [
      {
        tag: 'Established experience',
        title: 'Fully Curated SGE',
        body: 'Best for groups that want The Pickleball Passport’s established flagship experience with minimal planning work.',
        detail: 'Select the established route and experience. Our Bangkok-based team plans and delivers it end to end.',
        featured: true,
      },
      {
        tag: 'Co-created experience',
        title: 'Customized SGE',
        body: 'Best for organizations that want the trip aligned to a specific audience, purpose, brand, or internal objective.',
        detail: 'Collaborate with us on selected elements such as the route, activities, organization-led sessions, and brand moments.',
        featured: false,
      },
    ],
    partnerNote: 'Exploring a referral or distribution partnership?',
    partnerLink: 'Tell us about the group or audience you represent.',
  },

  experience: {
    eyebrow: 'Inside the Signature Group Experience',
    title: 'See what a typical flagship departure includes.',
    route: 'Bangkok + Hua Hin or Chiang Mai',
    includes: [
      '9 days and 8 nights across two Thailand destinations.',
      'Two five-star hotels selected for location, comfort, and reliable group delivery.',
      'Four organized pickleball sessions with published play format and level expectations.',
      'Local cultural experiences, selected group meals, and room for independent exploration.',
      'Private ground transportation and a dedicated trip host.',
      'A parallel experience for nonplaying companions, with shared group moments built in.',
      'A maximum group size of 16 on the current flagship format.',
    ],
    gallery: [
      {
        src: '/images/sge/gallery-play.webp',
        width: 1400,
        height: 933,
        alt: 'A player returns a low shot during an organized pickleball session.',
      },
      {
        src: '/images/sge/gallery-yoga.webp',
        width: 1000,
        height: 667,
        alt: 'Guests join a guided yoga session on the lawn of a tropical resort.',
      },
      {
        src: '/images/sge/gallery-seaside.webp',
        width: 1000,
        height: 667,
        alt: 'A guest relaxes beside the sea at a Thailand resort.',
      },
    ],
    tripCard: {
      title: 'Flagship Thailand SGE',
      status: 'Sample trip',
      stats: [
        { value: '9 days', label: '8 nights' },
        { value: '2 stops', label: 'Thailand' },
        { value: '16 guests', label: 'Maximum' },
      ],
    },
  },

  passport: {
    eyebrow: 'Priority access to future trips',
    title: 'Extend the experience beyond a single trip.',
    lede: 'After their SGE, attendees become eligible for The Pickleball Passport. This gives them exclusive and priority access to independent trips beyond their group experience.',
    body: 'Future trips are designed to take the Pickleball Passport experience into multiple countries, giving participants new opportunities to Play the World and reconnect.',
    bookLines: ['The', 'Pickleball', 'Passport'],
    bookStamp: 'Priority Access',
  },

  process: {
    eyebrow: 'From first conversation to Thailand',
    title: 'From first conversation to confirmed departure.',
    lede: 'A clear path for your organization, your participants, and our on-the-ground team.',
    steps: [
      { title: 'Tell us about your group.', body: 'Share who you are planning for, your goals, preferred timing, and any priorities.' },
      { title: 'We design the experience.', body: 'We shape the agreed route, hotels, pickleball, cultural activities, companion options, and group moments.' },
      { title: 'You review the complete plan.', body: 'We confirm the itinerary, responsibilities, pricing, inclusions, and terms before you invite participants.' },
      { title: 'We prepare your group.', body: 'Participants receive clear trip information, complete the necessary intake, and know what to expect.' },
      { title: 'We host the experience in Thailand.', body: 'A dedicated team coordinates the agreed local logistics and supports the group throughout.' },
      { title: 'We review the experience.', body: 'We gather participant feedback and discuss future opportunities for your organization.' },
    ],
    // TODO(Ryan): replace with the approved minimum lead time and group confirmation deadline.
    note: { label: 'Planning note:', body: 'Add the approved minimum lead time and group confirmation deadline before publishing.' },
  },

  // Hidden while showProof = false
  proof: {
    eyebrow: 'Proof from group leaders and participants',
    title: 'See what group leaders and participants say.',
    logos: ['PARTNER LOGO', 'PARTNER LOGO', 'PARTNER LOGO', 'PARTNER LOGO', 'PARTNER LOGO'],
    testimonials: [
      {
        kicker: 'B2B buyer testimonial placeholder',
        quote: 'Add a verified quote about communication, workload removed, confidence in delivery, participant response, and willingness to run another experience.',
        person: 'Full name · Role · Organization',
        context: 'Group size · Route · Date',
      },
      {
        kicker: 'Participant testimonial placeholder',
        quote: 'Add a verified quote about group fit, matched play, local access, the companion experience, and the quality of relationships formed.',
        person: 'Full name · Professional context',
        context: 'Route · Date',
      },
    ],
    caseStudy: {
      kicker: 'Case study placeholder',
      body: 'Add a verified case study covering partner type, audience, group size, commercial model, challenge, what The Pickleball Passport handled, participant outcome, partner outcome, and next step.',
    },
  },

  faq: {
    eyebrow: 'Frequently asked questions',
    title: 'What group organizers need to know.',
    items: [
      {
        q: 'Do we need a full group before we contact you?',
        a: 'No. We can assess audience fit, likely group size, route, and timing before you invite anyone. A departure is confirmed only after the agreed minimum paid participation and payment milestones are met.',
      },
      {
        q: 'How far in advance should we plan?',
        a: 'International group travel requires enough time for internal approval, promotion, deposits, flights, passports, companion decisions, and participant intake. The approved minimum lead time will be confirmed before this page is published.',
      },
      {
        q: 'Who handles booking, payments, and participant questions?',
        a: 'We confirm the booking, payment, and support flow during planning. Your organization and participants receive one clear contact path before the experience is announced.',
      },
      {
        q: 'What pickleball levels can you accommodate?',
        a: 'Every departure publishes its expected level and play format. Participants complete a play intake so sessions can be organized appropriately. The experience does not use skill rating as the main status system.',
      },
      {
        q: 'Can nonplaying partners join?',
        a: 'Yes. Nonplaying companions can enjoy culture, food, wellness, shopping, and experiences suited to their interests, then rejoin the group for selected meals and anchor moments. Their confirmed itinerary and price will be clear before booking.',
      },
      {
        q: 'What happens if someone cancels or the group minimum is not reached?',
        a: 'The departure brief and partner agreement set the deposit, refund, rescheduling, replacement traveler, minimum-group, and force majeure rules. Participants also receive clear travel-insurance requirements before payment.',
      },
      {
        q: 'Is this a business networking retreat?',
        a: 'The SGE is a premium group travel experience. Shared play, meals, culture, and optional sessions create space for relationships and business conversations without turning the trip into a conference.',
      },
    ],
  },

  plan: {
    eyebrow: 'Plan your Signature Group Experience',
    title: 'Start planning an experience your people will be proud to join.',
    lede: 'Tell us about your organization, the people you are planning for, and your preferred timing. We will respond with the clearest next step for your group.',
    image: {
      src: '/images/sge/final-group.webp',
      width: 1400,
      height: 933,
      alt: 'A mixed group of players pose together with paddles after a pickleball session.',
    },
    formTitle: 'Tell us about your group',
    formSubtitle: 'You do not need a confirmed group to start planning.',
    formPlaceholder: 'The planning form is coming soon. In the meantime, email hello@thepickleballpassport.org.',
    // TODO(Ryan): replace with the verified response time and privacy notice.
    formNote: 'Add the verified response time and privacy notice before publishing.',
  },

  footer: {
    line: 'Private, fully hosted group experiences in Thailand.',
  },
} as const;
