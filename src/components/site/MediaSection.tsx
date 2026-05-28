import Image from "next/image";

import { SectionHeading } from "./SectionHeading";

const EXPRESS_ARTICLE_URL =
  "https://expressilustrowany.pl/trwa-batalia-o-ogrod-botaniczny-w-lodzi-dlaczego-pawilon-dzungla-360-nie-powinien-stanac-w-botaniku-pytamy-ekspertow/ar/c1p2-28972207";

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
    </section>
  );
}
