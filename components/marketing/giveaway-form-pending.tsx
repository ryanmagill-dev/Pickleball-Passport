import { giveawayContent } from '@/lib/giveaway/config'

/** Shown until GHL_GIVEAWAY_FORM_ID is a real form id. No iframe, no submission. */
export function GiveawayFormPending() {
  return (
    <div className="rounded-2xl border-2 border-dashed border-[#B08D55] bg-[#FDF8F3] px-6 py-10 text-center">
      <h3 className="font-serif text-2xl font-bold text-[#1D2D44]">{giveawayContent.formPendingTitle}</h3>
      <p className="mx-auto mt-3 max-w-md text-lg leading-relaxed text-[#1D2D44]/80">
        {giveawayContent.formPendingBody}
      </p>
    </div>
  )
}
