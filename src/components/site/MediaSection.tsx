import Image from "next/image";

import { SectionHeading } from "./SectionHeading";

const EXPRESS_ARTICLE_URL =
  "https://expressilustrowany.pl/trwa-batalia-o-ogrod-botaniczny-w-lodzi-dlaczego-pawilon-dzungla-360-nie-powinien-stanac-w-botaniku-pytamy-ekspertow/ar/c1p2-28972207";
const RADIO_PARADA_YOUTUBE_VIDEO_ID = "bPqAeYMhupM";
const RADIO_PARADA_YOUTUBE_VIDEO_URL = `https://www.youtube.com/watch?v=${RADIO_PARADA_YOUTUBE_VIDEO_ID}`;
const RADIO_PARADA_YOUTUBE_THUMBNAIL_URL = `https://img.youtube.com/vi/${RADIO_PARADA_YOUTUBE_VIDEO_ID}/hqdefault.jpg`;

type MediaSectionProps = {
  id: string;
  headingId: string;
};

export function MediaSection({ id, headingId }: MediaSectionProps) {
  return (
    <section
      id={id}
      className="mt-16 scroll-mt-28 sm:mt-20"
      aria-labelledby={headingId}
    >
      <SectionHeading id={headingId} variant="neon">
        Media o nas
      </SectionHeading>

      <p className="mb-8 w-full max-w-none text-balance text-base leading-relaxed text-white/80 sm:text-lg">
        Artykuły i relacje prasowe o działaniach Komitetu Społecznego Zielone
        Serce Botanika.
      </p>

      <div className="space-y-6">
        <a
          href={EXPRESS_ARTICLE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="group block overflow-hidden rounded-xl border border-white/12 bg-bg-card transition hover:border-accent-neon/40 hover:shadow-[0_0_24px_rgba(57,255,20,0.08)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-neon"
        >
          <div className="grid gap-0 sm:grid-cols-2">
            <div className="relative aspect-4/3 bg-black/30 sm:aspect-auto sm:min-h-48">
              <Image
                src="/media/express-okladka-2026-05-09.png"
                alt="Okładka Express Ilustrowany z 9 maja 2026 – główny tytuł o możliwej utracie Botanika"
                fill
                className="object-cover object-top transition duration-300 group-hover:brightness-110"
                sizes="(max-width: 640px) 100vw, 50vw"
              />
            </div>
            <div className="relative aspect-3/4 bg-black/30 sm:aspect-auto sm:min-h-56">
              <Image
                src="/media/express-artykul-2026-05-09.png"
                alt="Strona artykułu w Express Ilustrowany – wywiad z Komitetem Zielone Serce Botanika"
                fill
                className="object-cover object-top transition duration-300 group-hover:brightness-110"
                sizes="(max-width: 640px) 100vw, 50vw"
              />
            </div>
          </div>

          <div className="border-t border-white/10 px-5 py-5 sm:px-6 sm:py-6">
            <p className="text-xs font-semibold uppercase tracking-widest text-accent-lime">
              Express Ilustrowany · 9 maja 2026
            </p>
            <h3 className="mt-2 font-emphasis text-xl leading-snug text-white sm:text-2xl">
              Możemy stracić „Botanik” – alarmują łódzcy społecznicy
            </h3>
            <p className="mt-3 text-sm text-white/70 sm:text-base">
              Wywiad z Adamem Sęczkowskim i Małgorzatą Czubak z Komitetu
              Społecznego Zielone Serce Botanika o planowanej „Dżungli 360”.
            </p>
            <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-accent-neon transition group-hover:gap-2.5">
              Czytaj artykuł online
              <span aria-hidden>→</span>
            </span>
          </div>
        </a>

        <a
          href={RADIO_PARADA_YOUTUBE_VIDEO_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="group block overflow-hidden rounded-xl border border-white/12 bg-bg-card transition hover:border-accent-neon/40 hover:shadow-[0_0_24px_rgba(57,255,20,0.08)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-neon"
        >
          <div className="relative aspect-video overflow-hidden bg-black/30">
            <img
              src={RADIO_PARADA_YOUTUBE_THUMBNAIL_URL}
              alt="Miniatura filmu z YouTube dotyczącego ochrony Ogrodu Botanicznego w Łodzi"
              className="h-full w-full object-cover transition duration-300 group-hover:brightness-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-red-600/90 text-xl text-white shadow-[0_0_24px_rgba(239,68,68,0.5)]">
                ▶
              </span>
            </div>
          </div>

          <div className="px-5 py-5 sm:px-6 sm:py-6">
            <p className="text-xs font-semibold uppercase tracking-widest text-accent-lime">
              Radio Parada · wywiad · 28 sierpnia 2026
            </p>
            <h3 className="mt-2 font-emphasis text-xl leading-snug text-white sm:text-2xl">
              Zielone Serce Botanika w „Forum Radia Parada”
            </h3>
            <p className="mt-3 text-sm text-white/70 sm:text-base">
              Adam Sęczkowski z Komitetu Społecznego „Zielone Serce Botanika” był gościem Ewy Kubasiewicz w audycji „Forum Radia Parada”.
              Rozmowa dotyczyła zagrożeń dla łódzkiej zieleni, przyszłości
              cennych terenów przyrodniczych, planowanych inwestycji w lesie Łagiewnickim oraz sytuacji Ogrodu Botanicznego i
              kontrowersyjnego projektu „Dżungla 360”.
            </p>
            <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-accent-neon transition group-hover:gap-2.5">
              Posłuchaj rozmowy
              <span aria-hidden>→</span>
            </span>
          </div>
        </a>
      </div>
    </section>
  );
}
