import { AportSection } from "@/components/site/AportSection";
import { CommunityGallerySection } from "@/components/site/CommunityGallerySection";
import { HeroSection } from "@/components/site/HeroSection";
import { OppositionSection } from "@/components/site/OppositionSection";
import { PetitionCtaButton } from "@/components/site/PetitionCtaButton";
import { PetitionSection } from "@/components/site/PetitionSection";
import { PlanSection } from "@/components/site/PlanSection";
import { ProtestPoster } from "@/components/site/ProtestPoster";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SkipLink } from "@/components/site/SkipLink";

const navLinks = [
  { href: "#plan", label: "Start" },
  { href: "#sprzeciw", label: "Stanowiska naukowe" },
  { href: "#galeria", label: "Galeria" },
  { href: "#petycja", label: "Petycja" },
  { href: "#aport", label: "Aport" },
  { href: "#kontakt", label: "Kontakt" },
];

export default function Home() {
  return (
    <div className="flex min-h-full flex-col bg-bg-deep text-white">
      <SkipLink href="#main">Przejdź do treści</SkipLink>

      <SiteHeader
        logoSrc="/logo-zielone-serce.png"
        brandName="Zielone Serce Botanika"
        navLinks={navLinks}
      />

      <HeroSection
        imageSrc="/hero-tulipany.png"
        imageAlt="Kwitnące tulipany w ogrodzie"
        topLeftCta={<PetitionCtaButton subtleBackdrop />}
        verseLines={[
          "Zostawcie Botanika!",
          "Nie róbcie z niego show!",
          "Tu Dżungli nie chcą ludzie,",
          "Tu zieleń ma swój dom!",
        ]}
        titleMain="Nie dla projektu „Dżungla 360”"
        titleSub="w ogrodzie botanicznym w Łodzi"
      />

      <main id="main" className="flex-1">
        <article className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
          <PlanSection
            id="plan"
            headingId="h-plan"
            title="Co planuje miasto?"
            paragraphs={[
              "Władze Łodzi chcą zrealizować projekt „Dżungla 360” - budowę ogromnego całorocznego pawilonu tropikalnego na terenie Ogrodu Botanicznego przy ulicy Krzemienieckiej. Z dostępnych dokumentów wynika, że chodzi o obiekt o powierzchni 15 000–20 000 m² i wysokości 30 metrów, z ekspozycją roślin egzotycznych, ptaków i bezkręgowców. Na wizualizacjach można zobaczyć olbrzymią szklaną kopułę.",
              "Projekt ma być realizowany przez spółkę Holding Łódź Sp. z o.o., a tereny ogrodu mają zostać wniesione aportem do tej spółki (uchwała Rady Miejskiej nr XXV/716/25 z 17 grudnia 2025 r.). Inwestycja miałaby być powiązana z pobliskim Orientarium, z którym miałby łączyć ją nie tylko właściciel w postaci Holdingu Łódź, ale i bliżej nieokreślona konstrukcja architektoniczna.",
            ]}
          />

          <ProtestPoster
            src="/protest-poster.png"
            alt="Plakat: Zieleń to nie towar"
          />

          <OppositionSection
            id="sprzeciw"
            headingId="h-sprzeciw"
            title="Uratujmy Botanik! Nie dla „Dżungli 360”!"
            intro="Sprzeciw wobec planowanej “Dżungli 360” jest szeroki i pochodzi zarówno od samych mieszkańców i mieszkanek Łodzi, ale też z różnych środowisk naukowych i eksperckich. Petycję w sprawie zatrzymania tej szkodliwej inwestycji podpisało już ponad 7 tysięcy Łodzian i Łodzianek. A w sekcji poniżej zapraszamy do zapoznania się ze stanowiskami i opiniami specjalistów zajmujących się m.in. ochroną przyrody."
            entries={[
              {
                title: "Rada Naukowa Ogrodu Botanicznego w Łodzi (marzec 2026)",
                body: "Organ wewnętrzny samego ogrodu wydał opinię negatywną wobec budowy dużego pawilonu i komercjalizacji. Popiera natomiast modernizację infrastruktury, istniejących działów i budowę małej palmiarni podporządkowanej funkcjom edukacyjnym. Rada Naukowa Ogrodu Botanicznego sprzeciwia się przede wszystkim podziałowi Ogrodu i przekazaniu jego terenu spółce prawa handlowego.",
                stanceDocuments: [
                  {
                    src: "/rada-naukowa-stanowisko-2.png",
                    alt: "Oświadczenie Rady Naukowej Ogrodu Botanicznego w Łodzi w sprawie opinii do koncepcji modernizacji",
                  },
                  {
                    src: "/rada-naukowa-stanowisko-1.png",
                    alt: "Fragment oświadczenia Rady Naukowej OB w Łodzi - m.in. punkty, co Rada nie zaopiniowała pozytywnie",
                  },
                ],
              },
              {
                title:
                  "Rada Ogrodów Botanicznych i Arboretów w Polsce - ROBiA (luty 2026)",
                body:
                  "Najbardziej szczegółowe i formalne stanowisko branżowe, zdecydowanie warte przeczytania w całości. Wskazuje na ryzyko: prawne (naruszenie ustawy o ochronie przyrody i decyzji zezwalającej na prowadzenie ogrodu), przyrodnicze (zacienienie kolekcji, zaburzenie gospodarki wodnej, zagęszczenie gleb, ryzyko kolizji ptaków z przeszkleniem), biologiczne (zawleczenie patogenów przez import roślin tropikalnych), finansowe (wysokie koszty operacyjne utrzymania „tropiku”) oraz instytucjonalne (rozmycie odpowiedzialności po przekazaniu ogrodu spółce handlowej). ROBiA rekomenduje zmianę koncepcji na model modernizacji infrastruktury „niskoinwazyjnej” i wzmocnienie funkcji naukowo-edukacyjnych bez wielkoskalowej kubatury.",
                stanceDocuments: [
                  {
                    src: "/robia-stanowisko-luty-2026.pdf",
                    alt: "Stanowisko ROBiA z lutego 2026 w sprawie Ogrodu Botanicznego w Łodzi",
                    kind: "pdf",
                  },
                ],
              },
              {
                title:
                  "Sekcja Lichenologiczna Polskiego Towarzystwa Botanicznego (styczeń 2026)",
                body:
                  "Sekcja Lichenologiczna Polskiego Towarzystwa Botanicznego sprzeciwia się budowie „Dżungli 360” w łódzkim Ogrodzie Botanicznym. W 2023 roku przeprowadziła tam badania, które wykazały obecność 73 taksonów porostów z 42 rodzajów, w tym gatunków chronionych i z czerwonej listy. Zdaniem Sekcji planowana inwestycja zagraża tym siedliskom, narusza przepisy o ochronie przyrody i jest sprzeczna z ustawową rolą ogrodów botanicznych. Sekcja apeluje o ponowną analizę zasadności projektu i poszukanie rozwiązań niekolidujących z przyrodniczymi wartościami ogrodu.",
                stanceDocuments: [
                  {
                    src: "/sekcja-lichenologiczna-stanowisko-1.png",
                    alt: "Stanowisko Sekcji Lichenologicznej PTB - strona 1: pismo do Prezydenta Miasta Łodzi w sprawie „Dżungli 360”",
                  },
                  {
                    src: "/sekcja-lichenologiczna-stanowisko-2.png",
                    alt: "Stanowisko Sekcji Lichenologicznej PTB - strona 2: kontynuacja treści i podpis",
                  },
                ],
              },
              {
                title:
                  "Wydział Biologii i Ochrony Środowiska Uniwersytetu Łódzkiego (styczeń 2026)",
                body:
                  "Wydział Biologii i Ochrony Środowiska Uniwersytetu Łódzkiego popiera rozwój Ogrodu Botanicznego, ale nie może poprzeć projektu „Dżungli 360” w obecnej formie. Główne zastrzeżenia dotyczą komercyjnej skali inwestycji, braku analiz środowiskowych i społecznych, śladu węglowego oraz nieprzejrzystego procesu decyzyjnego. Wydział domaga się rzetelnych konsultacji i jasnych warunków merytorycznych przed dalszymi pracami nad projektem.",
                stanceDocuments: [
                  {
                    src: "/wydzial-biologii-stanowisko.png",
                    alt: "Stanowisko Wydziału Biologii i Ochrony Środowiska UŁ w sprawie rozwoju Ogrodu Botanicznego i koncepcji „Dżungla 360” - zrzut z posta (styczeń 2026)",
                  },
                ],
              },
              {
                title:
                  "Europejskie Regionalne Centrum Ekohydrologii PAN (ERCE PAN, pod auspicjami UNESCO) (styczeń 2026)",
                body:
                  "Europejskie Regionalne Centrum Ekohydrologii PAN (ERCE PAN), działające pod auspicjami UNESCO, sprzeciwia się realizacji „Dżungli 360” w Ogrodzie Botanicznym w obecnej formie. Wskazuje na poważne ryzyko ekohydrologiczne dla zachodniej części Łodzi - miasta znajdującego się w strefie deficytu wodnego i nasilających się susz. Ogród Botaniczny i Łódzkie Błonia to obszary kluczowe dla unijnej polityki bioróżnorodności i adaptacji klimatycznej. ERCE PAN formułuje szereg konkretnych rekomendacji, w tym rozważenie alternatywnej lokalizacji inwestycji oraz przeprowadzenie kompleksowych badań środowiskowych przed podjęciem jakichkolwiek dalszych prac.",
                stanceDocuments: [
                  {
                    src: "/erce-pan-stanowisko-1.png",
                    alt: "Stanowisko ERCE PAN pod auspicjami UNESCO - wstęp w sprawie projektu „Dżungla 360” i gospodarki wodnej na Łódzkich Błoniach",
                  },
                  {
                    src: "/erce-pan-stanowisko-2.png",
                    alt: "Rekomendacje ERCE PAN - warunki dalszych prac nad projektem i zagospodarowaniem Błoni",
                  },
                ],
              },
              {
                title: "Prof. dr hab. Romuald Olaczek (styczeń 2026)",
                body:
                  "Prof. dr hab. Romuald Olaczek - botanik, wieloletni członek Rady Naukowej Ogrodu Botanicznego, autor kilkudziesięciu lat badań nad łódzkimi parkami - kieruje do władz miasta list otwarty, w którym sprzeciwia się projektowi „Dżungli 360”. Zwraca uwagę, że za językiem „zrównoważonego rozwoju” kryje się przekazanie części powierzchni Ogrodu spółce handlowej w celach komercyjnych. Projekt wpisuje się - jego zdaniem - w trwający od 20 lat proces degradacji instytucji: pozbawienie jej autonomii naukowej, podporządkowanie Zarządowi Zieleni Miejskiej i stopniowe odbieranie pomieszczeń. Budowę palmiarni profesor uznaje za dopuszczalną, jednak kategorycznie odrzuca koncepcję obiektu o skali komercyjnej i gabarytach dominujących nad ogrodem. Apeluje, by Ogrodowi Botanicznemu przywrócić należną mu rangę i zasoby.",
                stanceDocuments: [
                  {
                    src: "/olaczek-list-otwarty-1.png",
                    alt: "List otwarty prof. Romualda Olaczka w sprawie inwestycji w Ogrodzie Botanicznym - strona 1",
                  },
                  {
                    src: "/olaczek-list-otwarty-2.png",
                    alt: "List otwarty prof. Romualda Olaczka - strona 2 (zakończenie i podpis)",
                  },
                ],
              },
              {
                title: "Towarzystwo Urbanistów Polskich, Oddział w Łodzi",
                body:
                  "Towarzystwo Urbanistów Polskich - Oddział w Łodzi ostrzega przed najpoważniejszą z możliwych konsekwencji realizacji projektu „Dżungli 360”: utratą przez Ogród Botaniczny statusu ogrodu botanicznego. Jeśli planowane inwestycje okażą się niezgodne z Ustawą o ochronie przyrody, skutkiem może być nie tylko utrata prestiżu, ale przede wszystkim osłabienie ochrony przyrody, która powinna być tu priorytetem absolutnym. Towarzystwo przypomina, że Ogród Botaniczny to wspólne dziedzictwo mieszkańców Łodzi - nie teren inwestycyjny - i wzywa do uważnej obserwacji działań decydentów.",
                stanceDocuments: [
                  {
                    src: "/towarzystwo-urbanistow-lodz-stanowisko.png",
                    alt: "Post Towarzystwa Urbanistów Polskich Oddział w Łodzi o ryzyku dla statusu Ogrodu Botanicznego (styczeń 2026)",
                  },
                ],
              },
            ]}
          />

          <CommunityGallerySection id="galeria" headingId="h-galeria" />

          <PetitionSection />

          <AportSection id="aport" headingId="h-aport" />
        </article>
      </main>

      <SiteFooter />
    </div>
  );
}
