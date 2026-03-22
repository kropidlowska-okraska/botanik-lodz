import Image from "next/image";

import { SectionHeading } from "./SectionHeading";

const PHOTOS: { src: string; alt: string }[] = [
  {
    src: "/galeria/protest-ulica.png",
    alt: "Protest: transparenty m.in. „Natura nie ma głosu - my mamy”, „Zieleń to nie towar” i o petycji przeciwko Dżungli 360",
  },
  {
    src: "/galeria/debata-1.png",
    alt: "Publiczność podczas debaty o przyszłości Ogrodu Botanicznego",
  },
  {
    src: "/galeria/debata-2.png",
    alt: "Debata „Dżungla 360” - panel dyskusyjny o przyszłości ogrodu botanicznego",
  },
  {
    src: "/galeria/debata-3.png",
    alt: "Widok sali podczas debaty o Dżungli 360 i Ogrodzie Botanicznym",
  },
  {
    src: "/galeria/ankieta-express.png",
    alt: "Wyniki ankiety Express Ilustrowany: czy popierasz Dżunglę 360 w botaniku - głównie głosy przeciw",
  },
  {
    src: "/galeria/tvp-protest-noc.png",
    alt: "Relacja TVP3 Łódź: wieczorny protest przy Ogrodzie Botanicznym, transparenty „Murem za Botanikiem”",
  },
  {
    src: "/galeria/tvp-wywiad.png",
    alt: "Relacja TVP3 Łódź: wywiad z mieszkańcami przed wejściem do Ogrodu Botanicznego",
  },
  {
    src: "/galeria/tvp-stop-betonowej-dzungli.png",
    alt: "Relacja TVP3 Łódź: transparent „STOP betonowej dżungli” przy wizualizacji Dżungli 360",
  },
  {
    src: "/galeria/tvp-studio-samorzad.png",
    alt: "Program TVP3 Łódź (Samorząd): debata przy stole w studiu telewizyjnym",
  },
];

type CommunityGallerySectionProps = {
  id: string;
  headingId: string;
};

export function CommunityGallerySection({
  id,
  headingId,
}: CommunityGallerySectionProps) {
  return (
    <section
      id={id}
      className="mt-16 scroll-mt-28 sm:mt-20"
      aria-labelledby={headingId}
    >
      <SectionHeading id={headingId} variant="neon">
        W obiektywie
      </SectionHeading>
      <p className="mb-8 w-full max-w-none text-balance text-base leading-relaxed text-white/80 sm:text-lg">
        Protesty, debaty, obecność w mediach - społeczna mobilizacja wokół Ogrodu Botanicznego.
      </p>
      <div className="grid grid-cols-1 gap-0 overflow-hidden rounded-xl border border-white/10 sm:grid-cols-2 lg:grid-cols-3">
        {PHOTOS.map((photo, index) => (
          <figure
            key={photo.src}
            className={`relative aspect-4/3 w-full min-h-48 bg-black/40 sm:min-h-0 ${[0, 1, 4].includes(index) ? "" : "hidden sm:block"}`}
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          </figure>
        ))}
      </div>
    </section>
  );
}
