'use client'

import { useEffect, useRef, useState } from 'react'
import Script from 'next/script'
import { useSearchParams } from 'next/navigation'
import { GiveawayFormPending } from '@/components/marketing/giveaway-form-pending'
import {
  GHL_GIVEAWAY_FORM_ID,
  giveawayContent,
  giveawayFormSrc,
  isGiveawayFormConfigured,
} from '@/lib/giveaway/config'

/**
 * GoHighLevel entry form. Same embed shape as Contact, Notify, and the footer,
 * including the lazy load. UTM params and the page URL are on the iframe src.
 */
export function GiveawayEntryForm() {
  const searchParams = useSearchParams()
  const containerRef = useRef<HTMLDivElement>(null)
  const [loadForm, setLoadForm] = useState(false)
  const formId = GHL_GIVEAWAY_FORM_ID
  const ready = isGiveawayFormConfigured(formId)
  const iframeSrc = ready ? giveawayFormSrc(formId, searchParams.toString()) : ''

  useEffect(() => {
    if (!ready) return
    const node = containerRef.current
    if (!node) return
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setLoadForm(true)
          observer.disconnect()
        }
      },
      { rootMargin: '120px' },
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [ready])

  if (!ready) {
    return <GiveawayFormPending />
  }

  return (
    <div
      ref={containerRef}
      className="overflow-hidden rounded-2xl border border-[#B08D55]/20 bg-white shadow-lg"
    >
      {loadForm ? (
        <>
          <iframe
            src={iframeSrc}
            style={{ width: '100%', height: '980px', border: 'none', borderRadius: '8px' }}
            id={`inline-giveaway-${formId}`}
            data-layout="{'id':'INLINE'}"
            data-trigger-type="alwaysShow"
            data-trigger-value=""
            data-activation-type="alwaysActivated"
            data-activation-value=""
            data-deactivation-type="neverDeactivate"
            data-deactivation-value=""
            data-form-name="BTB Holiday Giveaway 2026"
            data-height="980"
            data-layout-iframe-id={`inline-giveaway-${formId}`}
            data-form-id={formId}
            title="Giveaway entry form"
          />
          <Script src="https://link.msgsndr.com/js/form_embed.js" strategy="lazyOnload" />
        </>
      ) : (
        <div className="flex min-h-[240px] items-center justify-center px-6 text-center text-lg text-[#1D2D44]/70">
          {giveawayContent.formLoading}
        </div>
      )}
    </div>
  )
}
