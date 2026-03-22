import type { ReactNode } from "react";

export const PETITION_URL =
  "https://www.petycjeonline.com/nie_dla_projektu_zdrowie_20_i_inwestycji_dungla_360_w_ogrodzie_botanicznym_w_odzi";

const ctaBaseClassName =
  "inline-flex items-center justify-center rounded-full border-2 border-accent-neon px-8 py-3.5 text-base font-bold uppercase tracking-wide text-accent-neon transition hover:bg-accent-neon hover:text-bg-deep hover:shadow-[0_0_32px_rgba(57,255,20,0.45)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-neon";

const fillDefault =
  "bg-accent-neon/10 shadow-[0_0_28px_rgba(57,255,20,0.2)] hover:shadow-[0_0_32px_rgba(57,255,20,0.45)]";

/** Slight frosted panel on the pill — for use on busy backdrops (e.g. hero photo). */
const fillSubtleBackdrop =
  "bg-white/15 shadow-sm ring-1 ring-white/25 backdrop-blur-sm";

type PetitionCtaButtonProps = {
  children?: ReactNode;
  subtleBackdrop?: boolean;
};

export function PetitionCtaButton({
  children = "Podpisz petycję!",
  subtleBackdrop = false,
}: PetitionCtaButtonProps) {
  return (
    <a
      href={PETITION_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`${ctaBaseClassName} ${subtleBackdrop ? fillSubtleBackdrop : fillDefault}`}
    >
      {children}
    </a>
  );
}
