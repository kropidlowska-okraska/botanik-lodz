import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

import { CANONICAL_HOST, SITE_DOMAIN } from "@/lib/site-url";

/**
 * If traffic hits the app on the apex host (no www), redirect to the canonical host.
 * Vercel often does this at the edge — this keeps behavior aligned with `CANONICAL_HOST`.
 */
export function middleware(request: NextRequest) {
  const host =
    request.headers.get("host")?.split(":")[0]?.toLowerCase() ?? "";

  if (host.endsWith(".vercel.app")) {
    return NextResponse.next();
  }

  if (host === SITE_DOMAIN) {
    const url = request.nextUrl.clone();
    url.hostname = CANONICAL_HOST;
    return NextResponse.redirect(url, 308);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
