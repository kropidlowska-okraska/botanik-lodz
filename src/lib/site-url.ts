/** Apex domain (no www) — same as in DNS / Vercel. */
export const SITE_DOMAIN = "zielonesercebotanika.pl";

/**
 * Canonical production host — must match Vercel “Primary Domain”
 * (e.g. www.zielonesercebotanika.pl).
 */
export const CANONICAL_HOST = `www.${SITE_DOMAIN}`;

/** Full canonical HTTPS URL (sitemap, metadataBase, JSON-LD). */
export const CANONICAL_SITE_URL = `https://${CANONICAL_HOST}`;

/**
 * Site URL for builds (sitemap, Open Graph).
 * On Vercel, set `NEXT_PUBLIC_SITE_URL` to the same URL as Primary Domain.
 */
export function getSiteUrl(): string {
  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");
  if (fromEnv) {
    return fromEnv;
  }

  if (process.env.NODE_ENV === "development") {
    return "http://localhost:3000";
  }

  if (process.env.VERCEL_ENV === "preview" && process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`.replace(/\/$/, "");
  }

  return CANONICAL_SITE_URL;
}
