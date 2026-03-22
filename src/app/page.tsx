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
  { href: "#petycja", label: "Petycja" },
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
                body:
                  "Organ wewnętrzny samego ogrodu wydał opinię negatywną wobec budowy dużego pawilonu, podziału ogrodu i jego komercjalizacji. Popiera natomiast modernizację infrastruktury, istniejących działów i budowę małej palmiarni podporządkowanej funkcjom edukacyjnym.",
              },
              {
                title:
                  "Rada Ogrodów Botanicznych i Arboretów w Polsce — ROBiA (luty 2026)",
                body:
                  "Najbardziej szczegółowe i formalne stanowisko branżowe. Wskazuje na ryzyko: prawne (naruszenie ustawy o ochronie przyrody i decyzji zezwalającej na prowadzenie ogrodu), przyrodnicze (zacienienie kolekcji, zaburzenie gospodarki wodnej, zagęszczenie gleb, ryzyko kolizji ptaków z przeszkleniem), biologiczne (zawleczenie patogenów przez import roślin tropikalnych), finansowe (wysokie koszty operacyjne utrzymania „tropiku”) oraz instytucjonalne (rozmycie odpowiedzialności po przekazaniu ogrodu spółce handlowej). ROBiA apeluje o wstrzymanie prac i zbadanie wariantu „niskoinwazyjnej” modernizacji.",
              },
              {
                title:
                  "Sekcja Lichenologiczna Polskiego Towarzystwa Botanicznego (styczeń 2026)",
                body:
                  "Przeprowadziła w 2023 r. badania, które wykazały obecność 73 taksonów porostów z 42 rodzajów na terenie ogrodu, w tym gatunków chronionych i wpisanych na czerwoną listę. Ostrzega, że roboty budowlane mogą nieodwracalnie zniszczyć te siedliska, co byłoby sprzeczne z ustawą o ochronie przyrody.",
              },
              {
                title:
                  "Wydział Biologii i Ochrony Środowiska Uniwersytetu Łódzkiego (styczeń 2026)",
                body:
                  "Nie może poprzeć projektu w obecnej formule. Kwestionuje skalę i charakter komercyjny inwestycji, wskazuje na brak przejrzystości informacji i apeluje o rzeczywisty dialog społeczny oraz analizę wpływu na ekosystem i krajobraz.",
              },
              {
                title:
                  "Europejskie Regionalne Centrum Ekohydrologii PAN (ERCE PAN, pod auspicjami UNESCO) (styczeń 2026)",
                body:
                  "Ostrzega przed długofalowymi konsekwencjami ekohydrologicznymi dla zachodniej części Łodzi, zwłaszcza że miasto leży w strefie prognozowanego deficytu wodnego. Rekomenduje m.in. rozważenie alternatywnej lokalizacji poza ogrodem, przeprowadzenie oceny wpływu na wody gruntowe oraz wdrożenie zasady „no net loss” zgodnie z unijnym Prawem o Odtwarzaniu Ekosystemów.",
              },
              {
                title: "Prof. dr hab. Romuald Olaczek (styczeń 2026)",
                body:
                  "Wybitny botanik, wieloletni członek Rady Naukowej ogrodu i współautor książek o łódzkich parkach. W liście otwartym zarzuca władzom miasta, że od 20 lat systematycznie obniżają rangę ogrodu (podporządkowanie ZZM, zabieranie pomieszczeń), a projekt „Dżungli” wpisuje się w ten trend. Protestuje przeciwko oddaniu terenu spółce handlowej i apeluje: „Ogród Botaniczny proszę zostawić w spokoju, oddać mu co zabrano.”",
              },
              {
                title: "Towarzystwo Urbanistów Polskich, Oddział w Łodzi",
                body:
                  "Zwraca uwagę, że niezgodność inwestycji z ustawą o ochronie przyrody może skutkować utratą przez ogród statusu ogrodu botanicznego, co oznaczałoby nie tylko utratę prestiżu, ale przede wszystkim osłabienie ochrony przyrody.",
              },
            ]}
          />

          <PetitionSection />
        </article>
      </main>

      <SiteFooter />
    </div>
  );
}
