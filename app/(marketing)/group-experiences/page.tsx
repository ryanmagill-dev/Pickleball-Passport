/**
 * Signature Group Experience (B2B) landing page
 *
 * Standalone page: renders its own minimal header/footer (the site Header and
 * Footer return null on this route). All copy lives in content/landing/b2b.ts.
 * noindex until the placeholder notes and proof are finalized.
 */

import type { Metadata } from 'next';
import Image from 'next/image';
import Script from 'next/script';
import { ArrowRight, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { b2b, GHL_FORM_ID, showProof } from '@/content/landing/b2b';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  title: b2b.meta.title,
  description: b2b.meta.description,
  robots: { index: false, follow: false },
};

/* ─────────────────────── SHARED PIECES ─────────────────────── */

const container = 'mx-auto w-full max-w-6xl px-4 sm:px-6';
const narrow = 'mx-auto w-full max-w-[790px] px-4 sm:px-6';
const section = 'py-[clamp(4.5rem,8vw,7rem)] scroll-mt-20';
const eyebrow = 'mb-4 text-xs font-extrabold uppercase leading-snug tracking-[0.12em] text-brand-gold';
const h2 = 'mb-5 font-serif text-[clamp(2.1rem,4vw,3.5rem)] font-bold leading-[1.04] tracking-[-0.045em]';
const h3 = 'mb-2.5 font-serif text-[clamp(1.35rem,2vw,1.85rem)] font-bold leading-tight tracking-[-0.025em]';
const lede = 'max-w-[64ch] text-[clamp(1.05rem,1.6vw,1.25rem)] leading-relaxed text-brand-navy/70';
const goldButton =
  'h-auto min-h-[3.35rem] rounded-[14px] bg-gradient-to-r from-brand-gold to-brand-gold-300 px-5 py-3 text-base font-extrabold text-brand-navy whitespace-normal text-center shadow-lg shadow-brand-gold/30 transition-transform hover:-translate-y-0.5 hover:from-brand-gold hover:to-brand-gold-300';

function PrimaryCta({ className }: { className?: string }) {
  return (
    <Button asChild className={cn(goldButton, className)}>
      <a href={b2b.primaryCta.href}>
        {b2b.primaryCta.label}
        <ArrowRight className="size-5" aria-hidden />
      </a>
    </Button>
  );
}

function Brand({ onDark = false }: { onDark?: boolean }) {
  return (
    <a href="#top" className="inline-flex items-center gap-3 no-underline" aria-label={`${b2b.brand.title} home`}>
      <Image
        src={b2b.brand.logo}
        alt=""
        width={54}
        height={54}
        className="size-9 rounded-xl bg-white p-1.5 shadow-md shadow-brand-navy/15 sm:size-[3.35rem]"
      />
      <span className="grid gap-0.5 leading-tight">
        <span className={cn('font-serif text-[0.94rem] font-bold sm:text-[1.08rem]', onDark ? 'text-white' : 'text-brand-navy')}>
          {b2b.brand.title}
        </span>
        <span className="text-[0.57rem] font-bold uppercase tracking-[0.09em] text-brand-gold sm:text-[0.64rem]">
          {b2b.brand.tagline}
        </span>
      </span>
    </a>
  );
}

/* ─────────────────────── PAGE ─────────────────────── */

export default function GroupExperiencesPage() {
  const { hero, about, groups, options, experience, passport, process, proof, faq, plan } = b2b;

  return (
    <div className="bg-brand-cream-50 text-brand-navy">
      {/* ── Minimal header ── */}
      <header className="sticky top-0 z-50 border-t-[3px] border-b border-t-brand-gold border-b-brand-gold/20 bg-brand-cream-50/95 backdrop-blur-md">
        <div className={cn(container, 'flex min-h-[4.5rem] items-center justify-between gap-4 sm:min-h-20')}>
          <Brand />
          <nav className="flex items-center gap-6" aria-label="Page navigation">
            {b2b.nav.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hidden text-[0.91rem] font-bold text-brand-navy/80 no-underline hover:text-brand-gold-600 lg:inline"
              >
                {link.label}
              </a>
            ))}
            <Button asChild className={cn(goldButton, 'hidden sm:inline-flex')}>
              <a href={b2b.primaryCta.href}>
                {b2b.nav.cta}
                <ArrowRight className="size-5" aria-hidden />
              </a>
            </Button>
          </nav>
        </div>
      </header>

      {/* ── Hero ── */}
      <section id="top" className="relative overflow-hidden bg-brand-navy text-white">
        <Image
          src={hero.image.src}
          alt={hero.image.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-[63%_center] sm:object-[center_46%]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-navy-700/50 to-brand-navy-700/85" />
        <div className={cn(container, 'relative grid place-items-center py-16 pb-20 text-center sm:py-[clamp(5.5rem,10vw,9rem)] lg:min-h-[min(820px,calc(100vh-5rem))]')}>
          <div className="flex max-w-[1040px] flex-col items-center">
            <p className={cn(eyebrow, 'rounded-full border border-white/25 bg-white/10 px-4 py-2 backdrop-blur-sm')}>
              {hero.eyebrow}
            </p>
            <h1 className="mb-6 max-w-[18ch] font-serif text-[clamp(2.65rem,13vw,4.2rem)] font-bold leading-[1.08] tracking-[-0.055em] sm:text-[clamp(3rem,5.2vw,4.75rem)]">
              {hero.title}
            </h1>
            <p className={cn(lede, 'max-w-[58ch] text-white/80')}>{hero.lede}</p>
            <div className="mt-8 flex w-full flex-col items-stretch gap-4 sm:w-auto sm:flex-row sm:flex-wrap sm:items-center sm:justify-center sm:gap-5">
              <PrimaryCta />
              <p className="text-center text-sm text-white/60">{hero.supportLine}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Trust strip ── */}
      <div className="bg-brand-cream-200">
        <ul className={cn(container, 'grid grid-cols-2 py-5 sm:grid-cols-4')} aria-label="Experience commitments">
          {b2b.trust.map((item, i) => (
            <li
              key={item}
              className={cn(
                'px-4 py-1.5 text-center text-[0.82rem] font-bold text-brand-navy/70',
                i > 0 && 'sm:border-l sm:border-brand-gold/20',
                i % 2 === 0 && 'max-sm:border-r max-sm:border-brand-gold/20',
                i >= 2 && 'max-sm:border-t max-sm:border-brand-gold/20'
              )}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* ── About ── */}
      <section id="about" className={section}>
        <div className={cn(container, 'grid items-start gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-x-24')}>
          <div>
            <p className={eyebrow}>{about.eyebrow}</p>
            <h2 className={h2}>{about.title}</h2>
          </div>
          <div>
            <p className={cn(lede, 'mb-4')}>{about.lede}</p>
            <p>{about.body}</p>
            <div className="mt-10 grid gap-px overflow-hidden rounded-[18px] border border-brand-gold/20 bg-brand-gold/20 sm:grid-cols-2">
              {about.reasons.map((reason) => (
                <article key={reason.title} className="overflow-hidden bg-brand-cream-50">
                  <Image
                    src={reason.image.src}
                    alt={reason.image.alt}
                    width={reason.image.width}
                    height={reason.image.height}
                    sizes="(max-width: 640px) 100vw, 400px"
                    className="aspect-[16/10] w-full object-cover"
                  />
                  <div className="p-[clamp(1.4rem,3vw,2.3rem)]">
                    <span className="mb-4 inline-grid size-9 place-items-center rounded-full bg-brand-gold/15 font-extrabold text-brand-gold-600">
                      {reason.number}
                    </span>
                    <h3 className={h3}>{reason.title}</h3>
                    <p className="mb-0">{reason.body}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Who it's for ── */}
      <section id="groups" className={cn(section, 'bg-brand-cream-200')}>
        <div className={container}>
          <div className="mb-12 flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
            <div>
              <p className={eyebrow}>{groups.eyebrow}</p>
              <h2 className={cn(h2, 'mb-0 max-w-[13ch]')}>{groups.title}</h2>
            </div>
            <p className={lede}>{groups.lede}</p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
            {groups.cards.map((card, i) => (
              <article
                key={card.title}
                className={cn(
                  'rounded-[18px] border border-brand-gold/20 bg-[#FDF8F3] p-7 transition hover:-translate-y-1 hover:border-brand-gold/55 hover:shadow-xl hover:shadow-brand-navy/5 lg:min-h-72',
                  i < 3 ? 'lg:col-span-2' : 'lg:col-span-3',
                  i === groups.cards.length - 1 && 'sm:max-lg:col-span-2 sm:max-lg:mx-auto sm:max-lg:w-1/2'
                )}
              >
                <span
                  aria-hidden
                  className="mb-6 grid size-12 place-items-center rounded-full border border-brand-gold/20 bg-brand-gold/10 font-black text-brand-gold lg:mb-10"
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className={h3}>{card.title}</h3>
                <p className="mb-0 text-brand-navy/70">{card.body}</p>
              </article>
            ))}
          </div>

          <div className="mt-4 flex flex-col items-stretch justify-between gap-6 rounded-[18px] bg-brand-navy py-5 pl-6 pr-5 text-white sm:flex-row sm:items-center">
            <p className="m-0 max-w-[54ch]">{groups.prompt}</p>
            <PrimaryCta className="shrink-0" />
          </div>
        </div>
      </section>

      {/* ── Options ── */}
      <section id="options" className={cn(section, 'bg-brand-navy text-white')}>
        <div className={container}>
          <div className="mb-12 max-w-[780px]">
            <p className={eyebrow}>{options.eyebrow}</p>
            <h2 className={h2}>{options.title}</h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {options.cards.map((card) => (
              <article
                key={card.title}
                className={cn(
                  'rounded-[18px] border bg-white/5 p-[clamp(1.8rem,4vw,3.25rem)]',
                  card.featured ? 'border-brand-gold' : 'border-white/15'
                )}
              >
                <span className="mb-6 inline-block rounded-full bg-gradient-to-r from-brand-gold to-brand-gold-300 px-3 py-1.5 text-[0.72rem] font-extrabold uppercase tracking-[0.08em] text-brand-navy">
                  {card.tag}
                </span>
                <h3 className={h3}>{card.title}</h3>
                <p className="text-white/70">{card.body}</p>
                <strong className="mt-5 block text-brand-cream-400">{card.detail}</strong>
              </article>
            ))}
          </div>
          <p className="mt-6 text-sm text-white/60">
            {options.partnerNote}{' '}
            <a href={b2b.primaryCta.href} className="font-bold text-brand-gold underline">
              {options.partnerLink}
            </a>
          </p>
        </div>
      </section>

      {/* ── Inside the experience ── */}
      <section id="experience" className={section}>
        <div className={cn(container, 'grid items-start gap-12 lg:grid-cols-2 lg:gap-x-20')}>
          <div className="grid grid-cols-2 gap-3 lg:grid-cols-[1.2fr_0.8fr]" aria-label="Scenes from The Pickleball Passport experience">
            {experience.gallery.map((img, i) => (
              <div
                key={img.src}
                className={cn(
                  'relative overflow-hidden rounded-[18px] border border-brand-gold/20',
                  i === 0 ? 'col-span-2 min-h-[21rem] lg:col-span-1 lg:row-span-2 lg:min-h-[28rem]' : 'min-h-44 lg:min-h-[13.6rem]'
                )}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 400px"
                  className={cn('object-cover', i === 0 && 'object-[40%_center]')}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy-700/20 to-transparent to-55%" />
              </div>
            ))}
          </div>

          <div>
            <p className={eyebrow}>{experience.eyebrow}</p>
            <h2 className={cn(h2, 'max-w-[12ch]')}>{experience.title}</h2>
            <div className="my-6 flex items-center gap-3 font-extrabold before:h-px before:flex-1 before:bg-brand-gold/20 after:h-px after:flex-1 after:bg-brand-gold/20">
              <span>{experience.route}</span>
            </div>
            <ul className="grid gap-3">
              {experience.includes.map((item) => (
                <li key={item} className="relative pl-8 text-brand-navy/70">
                  <span className="absolute left-0 top-0.5 grid size-[1.4rem] place-items-center rounded-full bg-brand-gold text-white">
                    <Check className="size-3.5" strokeWidth={3} aria-hidden />
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            <aside className="mt-8 rounded-[18px] border border-brand-gold/20 bg-white p-6 shadow-xl shadow-brand-navy/5" aria-label="Sample trip card">
              <div className="flex items-center justify-between gap-4 border-b border-brand-gold/20 pb-4">
                <strong className="font-serif text-xl">{experience.tripCard.title}</strong>
                <span className="rounded-full bg-brand-gold/20 px-2.5 py-1 text-[0.72rem] font-extrabold uppercase">
                  {experience.tripCard.status}
                </span>
              </div>
              <div className="mt-4 grid sm:grid-cols-3">
                {experience.tripCard.stats.map((stat, i) => (
                  <div
                    key={stat.value}
                    className={cn('p-2 text-center', i > 0 && 'max-sm:border-t sm:border-l border-brand-gold/20')}
                  >
                    <strong>{stat.value}</strong>
                    <small className="block text-brand-navy/70">{stat.label}</small>
                  </div>
                ))}
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* ── Passport access ── */}
      <section id="passport-access" className={cn(section, 'bg-brand-cream-200')}>
        <div className={container}>
          <div className="grid overflow-hidden rounded-[18px] bg-brand-navy text-white shadow-2xl shadow-brand-navy/15 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="p-[clamp(2rem,5vw,4.8rem)]">
              <p className={eyebrow}>{passport.eyebrow}</p>
              <h2 className={cn(h2, 'max-w-[12ch]')}>{passport.title}</h2>
              <p className={cn(lede, 'mb-4 text-white/75')}>{passport.lede}</p>
              <p className="mb-0 text-white/75">{passport.body}</p>
            </div>
            <div className="relative grid min-h-[21rem] place-items-center overflow-hidden bg-gradient-to-br from-brand-gold to-brand-gold-300 sm:min-h-[25rem] lg:min-h-[30rem]" aria-hidden>
              <div className="relative flex aspect-[0.72] w-[min(62%,17rem)] rotate-[7deg] flex-col items-center justify-center rounded-l-[0.8rem] rounded-r-[1.3rem] border border-white/20 bg-brand-navy p-8 text-center font-serif text-2xl leading-tight text-brand-gold shadow-2xl shadow-brand-navy/30 before:absolute before:inset-y-0 before:left-3.5 before:w-px before:bg-brand-gold/40">
                {passport.bookLines.map((line) => (
                  <span key={line}>{line}</span>
                ))}
                <span className="absolute bottom-9 -rotate-[8deg] rounded-[50%] border border-current px-2.5 py-1.5 font-sans text-[0.61rem] font-extrabold uppercase tracking-[0.08em]">
                  {passport.bookStamp}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── How it works ── */}
      <section id="how-it-works" className={section}>
        <div className={narrow}>
          <p className={eyebrow}>{process.eyebrow}</p>
          <h2 className={h2}>{process.title}</h2>
          <p className={lede}>{process.lede}</p>
          <ol className="mt-12">
            {process.steps.map((step, i) => (
              <li key={step.title} className="grid grid-cols-[3.7rem_1fr] gap-6 pb-9 sm:grid-cols-[4.5rem_1fr]">
                <span
                  className={cn(
                    'relative grid size-12 place-items-center rounded-full border border-brand-gold/20 bg-brand-cream-50 font-serif text-[1.35rem] font-bold text-brand-gold-600 sm:size-[3.7rem]',
                    i < process.steps.length - 1 &&
                      'after:absolute after:left-1/2 after:top-full after:h-9 after:w-px after:bg-brand-gold/20'
                  )}
                >
                  {i + 1}
                </span>
                <div className="pt-2">
                  <h3 className={cn(h3, 'mb-1.5')}>{step.title}</h3>
                  <p className="mb-0 max-w-[64ch] text-brand-navy/70">{step.body}</p>
                </div>
              </li>
            ))}
          </ol>
          <div className="border-l-4 border-brand-gold bg-brand-cream-200 px-6 py-5 text-brand-navy/70">
            <strong>{process.note.label}</strong> {process.note.body}
          </div>
        </div>
      </section>

      {/* ── Proof (hidden until showProof = true) ── */}
      {showProof && (
        <section id="proof" className={cn(section, 'bg-brand-navy text-white')}>
          <div className={container}>
            <div className="mb-12 grid items-start gap-8 lg:grid-cols-2 lg:items-end">
              <div>
                <p className={eyebrow}>{proof.eyebrow}</p>
                <h2 className={h2}>{proof.title}</h2>
              </div>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5" aria-label="Partner logos">
                {proof.logos.map((logo, i) => (
                  <div
                    key={i}
                    className="grid min-h-[5.5rem] place-items-center rounded-[10px] border border-dashed border-white/30 text-center text-[0.72rem] font-bold text-white/50 max-sm:last:col-span-2"
                  >
                    {logo}
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-5 grid gap-5 sm:grid-cols-2">
              {proof.testimonials.map((t) => (
                <article
                  key={t.kicker}
                  className="flex min-h-[22rem] flex-col justify-between rounded-[18px] border border-white/15 bg-white/5 p-[clamp(1.6rem,4vw,2.8rem)]"
                >
                  <div>
                    <p className="text-[0.74rem] font-extrabold uppercase tracking-[0.09em] text-brand-gold">{t.kicker}</p>
                    <p className="mb-8 font-serif text-[clamp(1.25rem,2vw,1.65rem)] leading-snug text-white/85">“{t.quote}”</p>
                  </div>
                  <div className="flex items-center gap-3.5 text-sm text-white/60">
                    <span className="grid size-[3.2rem] place-items-center rounded-full border border-dashed border-white/35 text-center text-[0.65rem]">
                      HEAD
                      <br />
                      SHOT
                    </span>
                    <span>
                      {t.person}
                      <br />
                      {t.context}
                    </span>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-5 grid gap-6 rounded-[18px] border border-dashed border-white/30 p-8 sm:grid-cols-[0.6fr_1.4fr]">
              <p className="m-0 text-[0.74rem] font-extrabold uppercase tracking-[0.09em] text-brand-gold">{proof.caseStudy.kicker}</p>
              <p className="m-0 text-white/70">{proof.caseStudy.body}</p>
            </div>
          </div>
        </section>
      )}

      {/* ── FAQ ── */}
      <section id="faq" className={cn(section, 'bg-brand-cream-200')}>
        <div className={narrow}>
          <p className={eyebrow}>{faq.eyebrow}</p>
          <h2 className={h2}>{faq.title}</h2>
          <Accordion type="single" collapsible className="mt-10 border-t border-brand-gold/20">
            {faq.items.map((item, i) => (
              <AccordionItem key={item.q} value={`faq-${i}`} className="border-b border-brand-gold/20 last:border-b">
                <AccordionTrigger className="py-6 font-serif text-[clamp(1.1rem,2vw,1.35rem)] font-bold leading-snug hover:no-underline">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="max-w-[72ch] pb-6 pr-12 text-base leading-relaxed text-brand-navy/70">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* ── Plan / form ── */}
      <section id="plan" className={cn(section, 'overflow-hidden bg-brand-cream-200')}>
        <div className={cn(container, 'grid items-start gap-[clamp(2.5rem,6vw,6rem)] lg:grid-cols-[0.9fr_1.1fr]')}>
          <div>
            <p className={eyebrow}>{plan.eyebrow}</p>
            <h2 className={cn(h2, 'max-w-[12ch]')}>{plan.title}</h2>
            <p className={lede}>{plan.lede}</p>
            <div className="relative mt-8 min-h-72 overflow-hidden rounded-[18px] border border-brand-gold/20">
              <Image
                src={plan.image.src}
                alt={plan.image.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 480px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy-700/20 to-transparent to-55%" />
            </div>
          </div>

          <div className="rounded-[18px] bg-white p-[clamp(1.4rem,4vw,2.6rem)] shadow-2xl shadow-brand-navy/10">
            <div className="mb-6">
              <h3 className={cn(h3, 'mb-1.5')}>{plan.formTitle}</h3>
              <p className="m-0 text-brand-navy/70">{plan.formSubtitle}</p>
            </div>
            {GHL_FORM_ID ? (
              <>
                {/* GHL form embed, same pattern as /contact */}
                <iframe
                  src={`https://api.leadconnectorhq.com/widget/form/${GHL_FORM_ID}`}
                  style={{ width: '100%', height: '700px', border: 'none', borderRadius: '3px' }}
                  id={`inline-${GHL_FORM_ID}`}
                  data-layout="{'id':'INLINE'}"
                  data-trigger-type="alwaysShow"
                  data-trigger-value=""
                  data-activation-type="alwaysActivated"
                  data-activation-value=""
                  data-deactivation-type="neverDeactivate"
                  data-deactivation-value=""
                  data-form-name="Website: Signature Group Experience"
                  data-height="700"
                  data-layout-iframe-id={`inline-${GHL_FORM_ID}`}
                  data-form-id={GHL_FORM_ID}
                  title="Website: Signature Group Experience"
                />
                <Script src="https://link.msgsndr.com/js/form_embed.js" strategy="afterInteractive" />
              </>
            ) : (
              <div className="rounded-xl border border-dashed border-brand-gold/40 bg-brand-cream-100 p-8 text-center text-brand-navy/70">
                {plan.formPlaceholder}
              </div>
            )}
            <p className="mt-3 text-center text-[0.78rem] text-brand-navy/60">{plan.formNote}</p>
          </div>
        </div>
      </section>

      {/* ── Minimal footer ── */}
      <footer className="bg-brand-navy pb-24 pt-8 text-white/65 sm:pb-8">
        <div className={cn(container, 'flex flex-col items-start justify-between gap-4 border-t border-white/15 pt-6 text-[0.82rem] sm:flex-row sm:items-center')}>
          <Brand onDark />
          <p className="m-0">{b2b.footer.line}</p>
          <p className="m-0">© {new Date().getFullYear()} {b2b.brand.title}</p>
        </div>
      </footer>

      {/* ── Sticky mobile CTA ── */}
      <PrimaryCta className="fixed inset-x-3 bottom-3 z-[80] shadow-xl shadow-brand-navy/30 sm:hidden" />
    </div>
  );
}
