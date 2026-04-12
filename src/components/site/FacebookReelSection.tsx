import { SectionHeading } from "./SectionHeading";

const REEL_URL = "https://www.facebook.com/reel/908373188553279";

/** Player width / height (px) — horizontal 16:9. */
const EMBED_WIDTH = 720;
const EMBED_HEIGHT = Math.round((EMBED_WIDTH * 9) / 16);

/** Official Facebook player embed (video.php). `height` limits empty space below the video. */
function reelEmbedSrc(width: number, height: number) {
  const params = new URLSearchParams({
    href: REEL_URL,
    show_text: "false",
    width: String(width),
    height: String(height),
    t: "0",
  });
  return `https://www.facebook.com/plugins/video.php?${params.toString()}`;
}

type FacebookReelSectionProps = {
  id: string;
  headingId: string;
};

export function FacebookReelSection({ id, headingId }: FacebookReelSectionProps) {
  return (
    <section
      id={id}
      className="mt-16 scroll-mt-28 sm:mt-20"
      aria-labelledby={headingId}
    >
      <SectionHeading id={headingId} variant="neon">
        Debata o przyszłości Ogrodu Botanicznego w Łodzi
      </SectionHeading>
      <p className="mb-3 text-sm font-medium tracking-wide text-accent-lime/95 sm:text-base">
        <time dateTime="2026-01-26">26 stycznia 2026</time>
        <span className="text-white/35"> | </span>
        Wydział Ekonomiczno-Socjologiczny, Uniwersytet Łódzki
      </p>
      <p className="mb-8 w-full max-w-none text-balance text-base leading-relaxed text-white/80 sm:text-lg">
        Wzięliśmy udział w debacie poświęconej przyszłości łódzkiego Ogrodu
        Botanicznego. Adam Sęczkowski, twórca petycji i członek Komitetu Społecznego Zielone Serce
        Botanika, przedstawił emocjonalne i merytoryczne wystąpienie – przypominając, że to nie spór
        o Dżunglę 360, lecz pytanie o to, czy Łódź potrafi chronić swoje zielone serce.
      </p>
      <div className="mx-auto w-full max-w-4xl">
        <div className="overflow-hidden rounded-xl border border-accent-neon/45 bg-black p-1 shadow-[0_0_28px_rgba(57,255,20,0.14),inset_0_0_0_1px_rgba(57,255,20,0.12)] sm:rounded-2xl sm:p-1.5">
          <div className="relative w-full overflow-hidden rounded-lg bg-black leading-none sm:rounded-xl">
            <div className="relative aspect-video w-full">
              <iframe
                title="Zapis debaty o przyszłości Ogrodu Botanicznego w Łodzi — materiał z Facebooka"
                src={reelEmbedSrc(EMBED_WIDTH, EMBED_HEIGHT)}
                className="absolute inset-0 block h-full w-full border-0"
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
