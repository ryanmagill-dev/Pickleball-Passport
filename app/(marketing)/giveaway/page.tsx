import { Suspense } from 'react'
import Image from 'next/image'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { GiveawayEntryForm } from '@/components/marketing/giveaway-entry-form'
import { GiveawayFormPending } from '@/components/marketing/giveaway-form-pending'
import {
  GIVEAWAY_LIVE,
  GIVEAWAY_SCHEDULE,
  giveawayContent,
  isGiveawayFormConfigured,
  isPlaceholder,
  officialRulesHref,
} from '@/lib/giveaway/config'

function MarkedValue({ value }: { value: string }) {
  if (isPlaceholder(value)) {
    return (
      <span className="inline-block rounded-md border border-dashed border-[#B08D55] bg-[#FDF8F3] px-3 py-1 font-mono text-base text-[#1D2D44]">
        {value}
      </span>
    )
  }
  return <span className="text-lg font-medium text-[#1D2D44]">{value}</span>
}

function faqItems() {
  const rulesHref = officialRulesHref(GIVEAWAY_SCHEDULE.officialRulesLink)
  const rulesAnswer = rulesHref
    ? 'The official rules are linked in the entry window section on this page.'
    : `Official rules are not published yet. The link is ${GIVEAWAY_SCHEDULE.officialRulesLink}.`

  return [
    {
      question: 'What is the prize?',
      answer: giveawayContent.prizeBody,
    },
    {
      question: 'How do I enter?',
      answer: `${giveawayContent.steps.map((step) => step.title).join('. ')}. ${giveawayContent.thankYou} ${giveawayContent.noPurchase}`,
    },
    {
      question: 'When does entry open and close?',
      answer: `Entry opens ${GIVEAWAY_SCHEDULE.entryOpens}. Entry closes ${GIVEAWAY_SCHEDULE.entryCloses}. The winner is announced ${GIVEAWAY_SCHEDULE.winnerAnnounced}. ${giveawayContent.scheduleNote}`,
    },
    {
      question: 'Where are the official rules?',
      answer: rulesAnswer,
    },
    {
      question: 'Do I need to buy anything?',
      answer: `${giveawayContent.noPurchase} Entering does not book a seat.`,
    },
    {
      question: 'What is included?',
      answer:
        'The land package covers courts, stays, transfers, the internal flight, guides, and the dinners we host. Airfare, visas, and travel insurance are not included. Those are the winner\'s responsibility.',
    },
    {
      question: 'Does entering mean I win?',
      answer: giveawayContent.thankYouNote,
    },
  ]
}

export default function GiveawayPage() {
  const rulesHref = officialRulesHref(GIVEAWAY_SCHEDULE.officialRulesLink)
  const schedule = [
    { label: 'Entry opens', value: GIVEAWAY_SCHEDULE.entryOpens },
    { label: 'Entry closes', value: GIVEAWAY_SCHEDULE.entryCloses },
    { label: 'Winner announced', value: GIVEAWAY_SCHEDULE.winnerAnnounced },
  ]

  return (
    <div className="bg-[#FDF8F3] text-[#1D2D44]">
      {GIVEAWAY_LIVE ? null : (
        <div className="bg-[#1D2D44] px-4 py-3 text-center text-white" role="status">
          <p className="text-base font-bold tracking-wide">{giveawayContent.draftBanner}</p>
          <p className="mt-1 text-sm text-white/80">{giveawayContent.draftNote}</p>
        </div>
      )}

      <section className="bg-gradient-to-br from-[#1D2D44] via-[#243656] to-[#495F87] px-4 py-14 text-white sm:py-16">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#CFB78D]">
            {giveawayContent.heroKicker}
          </p>
          <h1 className="mt-4 font-serif text-4xl font-bold leading-tight sm:text-5xl">
            {giveawayContent.heroTitle}
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-white/85 sm:text-xl">
            {giveawayContent.heroBody}
          </p>
        </div>
      </section>

      <section className="px-4 py-14">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-serif text-3xl font-bold">{giveawayContent.prizeHeading}</h2>
          <p className="mt-4 text-lg leading-relaxed">{giveawayContent.prizeBody}</p>
        </div>
      </section>

      <section className="bg-white px-4 py-14">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-serif text-3xl font-bold">{giveawayContent.scheduleHeading}</h2>
          <p className="mt-4 text-lg leading-relaxed">{giveawayContent.scheduleNote}</p>
          <dl className="mt-8 space-y-5">
            {schedule.map((item) => (
              <div key={item.label} className="grid gap-2 sm:grid-cols-[12rem_1fr] sm:items-center">
                <dt className="text-base font-semibold">{item.label}</dt>
                <dd>
                  <MarkedValue value={item.value} />
                </dd>
              </div>
            ))}
            <div className="grid gap-2 sm:grid-cols-[12rem_1fr] sm:items-center">
              <dt className="text-base font-semibold">{giveawayContent.rulesLabel}</dt>
              <dd>
                {rulesHref ? (
                  <a href={rulesHref} className="text-lg font-medium text-[#1D2D44] underline">
                    {giveawayContent.rulesLinkText}
                  </a>
                ) : (
                  <MarkedValue value={GIVEAWAY_SCHEDULE.officialRulesLink} />
                )}
              </dd>
            </div>
          </dl>
        </div>
      </section>

      <section id="how-to-enter" className="scroll-mt-28 px-4 py-14">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-serif text-3xl font-bold">{giveawayContent.howHeading}</h2>
          <p className="mt-4 text-lg leading-relaxed">{giveawayContent.howIntro}</p>
          <ol className="mt-8 space-y-6">
            {giveawayContent.steps.map((step, index) => (
              <li key={step.title} className="flex gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#1D2D44] text-lg font-bold text-white">
                  {index + 1}
                </span>
                <div>
                  <h3 className="text-xl font-semibold">
                    {index === 2 ? (
                      <a href="#entry-form" className="underline decoration-[#B08D55] underline-offset-4">
                        {step.title}
                      </a>
                    ) : (
                      step.title
                    )}
                  </h3>
                  <p className="mt-1 text-lg leading-relaxed text-[#1D2D44]/80">{step.body}</p>
                </div>
              </li>
            ))}
          </ol>
          <p className="mt-8 text-lg font-semibold">{giveawayContent.noPurchase}</p>
          <div className="mt-6 rounded-2xl border border-[#B08D55]/40 bg-white px-5 py-4">
            <p className="text-lg font-semibold">{giveawayContent.thankYou}</p>
            <p className="mt-2 text-base leading-relaxed text-[#1D2D44]/80">{giveawayContent.thankYouNote}</p>
          </div>
        </div>
      </section>

      <section id="entry-form" className="scroll-mt-28 bg-white px-4 py-14">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-serif text-3xl font-bold">{giveawayContent.formHeading}</h2>
          <p className="mt-4 text-lg leading-relaxed">{giveawayContent.thankYou}</p>
          <div className="mt-8">
            {isGiveawayFormConfigured() ? (
              <Suspense
                fallback={
                  <p className="text-lg text-[#1D2D44]/70">{giveawayContent.formLoading}</p>
                }
              >
                <GiveawayEntryForm />
              </Suspense>
            ) : (
              <GiveawayFormPending />
            )}
          </div>
        </div>
      </section>

      <section className="px-4 py-14">
        <div className="mx-auto max-w-5xl">
          <div className="mx-auto max-w-3xl">
            <h2 className="font-serif text-3xl font-bold">{giveawayContent.tripHeading}</h2>
            <p className="mt-4 text-lg leading-relaxed">{giveawayContent.tripBody}</p>
          </div>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {giveawayContent.photos.map((photo) => (
              <figure key={photo.src} className="overflow-hidden rounded-2xl bg-white shadow-sm">
                <div className="relative aspect-[4/3]">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes="(min-width: 640px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <figcaption className="px-4 py-3 text-base leading-relaxed">{photo.caption}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-14">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-serif text-3xl font-bold">{giveawayContent.faqHeading}</h2>
          <Accordion type="single" collapsible className="mt-6">
            {faqItems().map((item) => (
              <AccordionItem key={item.question} value={item.question} className="border-[#B08D55]/30">
                <AccordionTrigger className="py-5 text-left text-lg font-semibold text-[#1D2D44] hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-base leading-relaxed text-[#1D2D44]/85">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="px-4 py-14">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-serif text-3xl font-bold">{giveawayContent.contactHeading}</h2>
          <ul className="mt-6 space-y-3 text-lg">
            <li>
              <a className="underline" href={`mailto:${giveawayContent.contactEmail}`}>
                {giveawayContent.contactEmail}
              </a>
            </li>
            <li>
              {giveawayContent.contactWhatsAppLabel}{' '}
              <a className="underline" href="https://wa.me/66991433298">
                {giveawayContent.contactWhatsApp}
              </a>
            </li>
            <li>
              {giveawayContent.contactPhoneLabel}{' '}
              <a className="underline" href="tel:+15125648522">
                {giveawayContent.contactPhone}
              </a>
            </li>
          </ul>
        </div>
      </section>
    </div>
  )
}
