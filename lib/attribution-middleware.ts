/**
 * Sets attribution cookies on the HTML response so a partner landing is
 * recorded before client JavaScript runs. Webhooks, API routes, and /r/{code}
 * are skipped by the caller. /r/{code} writes the same cookies on its redirect.
 */

import { NextRequest, NextResponse } from 'next/server';
import { applyVisit, cookieOptions, FT_COOKIE, LT_COOKIE, REF_COOKIE } from '@/lib/attribution';

export function applyAttributionCookies(request: NextRequest, response: NextResponse): NextResponse {
  const state = applyVisit(
    {
      ft: request.cookies.get(FT_COOKIE)?.value ?? null,
      lt: request.cookies.get(LT_COOKIE)?.value ?? null,
      ref: request.cookies.get(REF_COOKIE)?.value ?? null,
    },
    request.nextUrl.searchParams,
    request.nextUrl.pathname
  );
  const options = cookieOptions();
  for (const write of state.writes) {
    response.cookies.set(write.name, write.value, options);
  }
  return response;
}
