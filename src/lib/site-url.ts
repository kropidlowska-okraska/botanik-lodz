/** Kanoniczny adres produkcyjny strony. Nadpisz przez `NEXT_PUBLIC_SITE_URL` jeśli potrzeba. */
export const CANONICAL_SITE_URL = "https://www.zielonesercebotanika.pl";

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
