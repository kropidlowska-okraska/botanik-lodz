import { PROTEST_SONG_YOUTUBE_VIDEO_ID } from "@/content/protest-verse";

import { SectionHeading } from "./SectionHeading";

type ProtestSongSectionProps = {
  id: string;
  headingId: string;
};

export function ProtestSongSection({ id, headingId }: ProtestSongSectionProps) {
  return (
    <section
      id={id}
      className="mt-16 scroll-mt-28 sm:mt-20"
      aria-labelledby={headingId}
    >
      <SectionHeading id={headingId} variant="neon">
        Piosenka protestu
      </SectionHeading>
      {PROTEST_SONG_YOUTUBE_VIDEO_ID ? (
        <div className="overflow-hidden rounded-xl border border-white/10 bg-black/40 shadow-[inset_0_1px_0_rgba(57,255,20,0.08)]">
          <div className="relative aspect-video w-full">
            <iframe
              title="Piosenka protestu - NIE dla Dżungli 360 w Ogrodzie Botanicznym w Łodzi"
              src={`https://www.youtube-nocookie.com/embed/${PROTEST_SONG_YOUTUBE_VIDEO_ID}`}
              className="absolute inset-0 h-full w-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </div>
        </div>
      ) : null}
    </section>
  );
}
