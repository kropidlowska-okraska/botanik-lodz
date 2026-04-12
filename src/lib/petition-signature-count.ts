import { PETITION_URL } from "@/lib/petition-url";

const REVALIDATE_SECONDS = 86_400; // 24 h

/**
 * Fetches the petition signature count from the petition page HTML (`.signatureAmount`).
 * Returns null on network errors, unexpected responses, or a missing marker.
 */
export async function getPetitionSignatureCountDisplay(): Promise<
  string | null
> {
  try {
    const res = await fetch(PETITION_URL, {
      next: { revalidate: REVALIDATE_SECONDS },
      headers: {
        "User-Agent":
          "Mozilla/5.0 (compatible; ZieloneSerceBotanika/1.0; +https://www.zielonesercebotanika.pl/)",
        Accept: "text/html,application/xhtml+xml",
      },
    });

    if (!res.ok) {
      return null;
    }

    const html = await res.text();
    const match = html.match(/signatureAmount[^>]*>\s*([^<]+?)\s*</);
    if (!match) {
      return null;
    }

    const raw = match[1].replace(/\u00a0/g, " ").trim();
    const compact = raw.replace(/\s/g, "");
    if (!/^\d+$/.test(compact)) {
      return null;
    }

    return raw.replace(/\s+/g, " ");
  } catch {
    return null;
  }
}
