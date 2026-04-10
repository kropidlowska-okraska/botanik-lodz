import { CommunityGalleryGrid } from "./CommunityGalleryGrid";
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
  {
    src: "/galeria/konsultacje-2020-infografika.png",
    alt: "Infografika z raportu konsultacji społecznych „Jaki Ogród Botaniczny w Łodzi?” 2020 - m.in. powody wizyt i oczekiwania mieszkańców",
  },
  {
    src: "/galeria/protest-holding-lodz.png",
    alt: "Grupa z transparentem „Botanik nie dla Spółki Holding Łódź” w Ogrodzie Botanicznym, logo Zielone Serce Botanika",
  },
  {
    src: "/galeria/protest-nie-dla-betonu-rodzina.png",
    alt: "Rodzina na alei wśród tulipanów; transparent „Nie dla betonu, tak dla zieleni”; w tle plac budowy",
  },
  {
    src: "/galeria/kampania-nie-dla-holding.png",
    alt: "Plakat kampanii: „Nie dla holdingu — nie oddamy zieleni”; rodzina na tle lasu i maszyn budowlanych, Zielone Serce Botanika",
  },
  {
    src: "/galeria/protest-banner-tulipany.png",
    alt: "Transparent przy kwitnących rabatach: „Nie dla przekazania Botanika do Holding Łódź”, „Botanik nie na sprzedaż”",
  },
];

const MOBILE_VISIBLE_INDICES = [0, 1, 10, 11];

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
      <CommunityGalleryGrid
        photos={PHOTOS}
        mobileVisibleIndices={MOBILE_VISIBLE_INDICES}
      />
    </section>
  );
}
