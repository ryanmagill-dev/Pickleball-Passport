/**
 * Referral Link Tracking Route
 * Epic 10 - US-001: Referral Link Tracking (Cookie-Based)
 *
 * Handles referral link redirects:
 * - Sets referral_code plus first/last-touch cookies (90-day expiration)
 * - Stores click event in ReferralEvent table
 * - Increments click count on partner/user profile
 * - First-click attribution (doesn't overwrite existing cookie)
 * - Optional ?to=/trips/... sends the guest to that trip instead of /trips
 * - Graceful handling of invalid codes
 */

import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/db';
import { ReferralEventType } from '@prisma/client';
import { cookieOptions, FT_COOKIE, LT_COOKIE, planReferralRedirect, REF_COOKIE } from '@/lib/attribution';

interface RouteParams {
  params: Promise<{ code: string }>;
}

export async function GET(request: NextRequest, { params }: RouteParams) {
  const { code } = await params;

  // Extract UTM parameters from URL
  const url = new URL(request.url);
  const utmSource = url.searchParams.get('utm_source');
  const utmMedium = url.searchParams.get('utm_medium');
  const utmCampaign = url.searchParams.get('utm_campaign');

  // Extract IP address and user agent
  const ipAddress =
    request.headers.get('x-forwarded-for')?.split(',')[0] ||
    request.headers.get('x-real-ip') ||
    'unknown';
  const userAgent = request.headers.get('user-agent') || 'unknown';

  // Set cookies immediately, before DB validation, so partner codes stick even
  // when the profile row does not exist yet. First touch is not overwritten.
  const plan = planReferralRedirect(request.url, code, {
    ft: request.cookies.get(FT_COOKIE)?.value ?? null,
    lt: request.cookies.get(LT_COOKIE)?.value ?? null,
    ref: request.cookies.get(REF_COOKIE)?.value ?? null,
  });
  const redirectUrl = new URL(plan.destination, request.url);
  const response = NextResponse.redirect(redirectUrl);
  const options = cookieOptions();
  for (const write of plan.writes) {
    response.cookies.set(write.name, write.value, options);
  }
  const shouldSetCookie = plan.writes.some((write) => write.name === REF_COOKIE);

  try {
    // Attempt DB tracking for codes that exist as partner/user profiles
    const [partnerProfile, userWithReferralCode] = await Promise.all([
      prisma.partnerProfile.findUnique({
        where: { referralCode: code },
        select: { id: true },
      }),
      prisma.user.findUnique({
        where: { referralCode: code },
        select: { id: true },
      }),
    ]);

    const isValidCode = partnerProfile !== null || userWithReferralCode !== null;

    if (isValidCode) {
      await prisma.referralEvent.create({
        data: {
          referralCode: code,
          eventType: ReferralEventType.CLICK,
          ipAddress,
          userAgent,
          utmSource,
          utmMedium,
          utmCampaign,
        },
      });

      if (partnerProfile) {
        await prisma.partnerProfile.update({
          where: { id: partnerProfile.id },
          data: { referralCodeClickCount: { increment: 1 } },
        });
      }

      // Operational click log. Kept at info level for the existing Vercel trail.
      // eslint-disable-next-line no-console
      console.log(`[Referral] Click tracked for code: ${code}, cookie set: ${shouldSetCookie}`);
    } else {
      // eslint-disable-next-line no-console
      console.log(`[Referral] Unknown code (cookie still set): ${code}`);
    }
  } catch (error) {
    console.error(`[Referral] Error processing referral code ${code}:`, error);
  }

  return response;
}
