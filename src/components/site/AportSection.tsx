import Image from "next/image";

import { ReadMoreBlock } from "./ReadMoreBlock";
import { SectionHeading } from "./SectionHeading";

type AportSectionProps = {
  id: string;
  headingId: string;
};

export function AportSection({ id, headingId }: AportSectionProps) {
  return (
    <section
      id={id}
      className="mt-16 scroll-mt-28"
      aria-labelledby={headingId}
    >
      <SectionHeading id={headingId} variant="neon">
        Aport i ryzyko finansowe - co to oznacza w praktyce?
      </SectionHeading>

      <div className="space-y-10 text-base leading-relaxed text-white/92 sm:text-lg">
        <div>
          <h3 className="text-lg font-bold text-accent-lime sm:text-xl">
            Co to jest aport do spółki?
          </h3>
          <div className="mt-4 space-y-4">
            <p>
              Aport to wniesienie majątku (np. nieruchomości) jako wkładu
              niepieniężnego do spółki, w zamian za udziały w tej spółce. W tym
              przypadku miasto Łódź miałoby przekazać tereny Ogrodu
              Botanicznego do Holding Łódź Sp. z o.o. - miejskiej spółki prawa
              handlowego.
            </p>
            <p>
              Formalnie Holding Łódź jest spółką miejską, więc miasto pozostaje
              jej właścicielem. Ale to rozróżnienie jest kluczowe i ma poważne
              konsekwencje praktyczne.
            </p>
            <p>
              Sytuacja wygląda asymetrycznie: zyski (jeśli projekt się powiedzie)
              trafią do spółki, a ryzyko strat poniesie miasto, czyli
              ostatecznie mieszkańcy. Jednocześnie ogród jako instytucja traci
              autonomię i podporządkowuje się logice komercyjnej - nawet jeśli
              formalnie pozostaje „ogrodem botanicznym”.
            </p>
          </div>
        </div>

        <div>
          <div className="mb-8 flex justify-center">
            <Image
              src="/zagrozenia-aport.svg"
              alt="Infografika o zagrożeniach związanych z przekazaniem terenów zielonych do Holdingu Łódź."
              width={680}
              height={840}
              className="h-auto w-full max-w-xl md:max-w-2xl lg:max-w-3xl rounded-lg border border-white/15 shadow-lg shadow-black/20"
              unoptimized
            />
          </div>
          <h3 className="text-lg font-bold text-accent-lime sm:text-xl">
            Czy miasto może stracić teren ogrodu?
          </h3>
          <p className="mt-4">
            Bezpośrednio - nie od razu. Pośrednio - istnieje realne ryzyko.
          </p>
          <ReadMoreBlock>
            <p>
              Po wniesieniu aportu teren przestaje być własnością gminy jako
              takiej, a staje się własnością spółki. Oznacza to kilka istotnych
              zmian:
            </p>
            <p>
              <strong className="text-white">
                Zmiana zarządcy i logiki działania.
              </strong>{" "}
              Spółka prawa handlowego działa według kodeksu spółek handlowych, a
              jej zarząd ma obowiązek dbać o wyniki finansowe. Ogród przestaje
              być zarządzany jak instytucja publiczna, a zaczyna być zarządzany
              jak przedsięwzięcie biznesowe. Misja ochrony przyrody może zostać
              podporządkowana logice frekwencji i przychodów.
            </p>
            <p>
              <strong className="text-white">
                Ryzyko dalszego obrotu nieruchomością.
              </strong>{" "}
              Jeśli spółka w przyszłości będzie miała kłopoty finansowe,
              wierzyciele mogą dochodzić swoich roszczeń z jej majątku - w tym
              z nieruchomości. Teoretycznie teren mógłby zostać obciążony
              hipoteką, a w skrajnym scenariuszu - zajęty. Miasto musiałoby
              wykupić udziały lub interweniować kapitałowo, żeby temu zapobiec.
            </p>
            <p>
              <strong className="text-white">Utrudniony powrót.</strong>{" "}
              Wniesienie aportu jest trudno odwracalne. Żeby odzyskać teren,
              miasto musiałoby odkupić go od spółki lub przeprowadzić
              skomplikowane procedury prawne. Im więcej zainwestowano w
              infrastrukturę na tym terenie, tym trudniej i drożej.
            </p>
            <p>
              <strong className="text-white">Zmiana decyzji zezwalającej.</strong>{" "}
              Ogród Botaniczny w Łodzi działa na podstawie decyzji Generalnego
              Dyrektora Ochrony Środowiska, która wskazuje konkretny podmiot
              prowadzący ogród. Jeśli faktyczne zarządzanie przejmie spółka
              handlowa, może to wymagać zmiany tej decyzji - a organ może jej nie
              wydać lub nałożyć dodatkowe warunki.
            </p>
          </ReadMoreBlock>
        </div>

        <div>
          <h3 className="text-lg font-bold text-accent-lime sm:text-xl">
            Kto zapłaci, jeśli inwestycja okaże się nieopłacalna?
          </h3>
          <p className="mt-4">
            To jest najpoważniejsze pytanie i odpowiedź brzmi: prawie na pewno
            mieszkańcy Łodzi, tyle że pośrednio i rozłożone w czasie.
          </p>
          <ReadMoreBlock>
            <p>
              <strong className="text-white">
                Koszty operacyjne są ogromne i pewne.
              </strong>{" "}
              Utrzymanie całorocznego pawilonu tropikalnego w Polsce to
              ekstremalnie kosztowna operacja - ogrzewanie do temperatury
              tropikalnej przez polską zimę, nawilżanie powietrza, oświetlenie,
              woda, ochrona fitosanitarna, personel wyspecjalizowany w roślinach
              tropikalnych. ROBiA wskazuje, że koszty operacyjne (OPEX) są tu
              nie dodatkiem, lecz głównym czynnikiem ryzyka. Nikt publicznie nie
              przedstawił pełnego bilansu tych kosztów w perspektywie
              wieloletniej.
            </p>
            <p>
              <strong className="text-white">Model przychodowy jest niepewny.</strong>{" "}
              Projekt zakłada, że wysoka frekwencja turystyczna pokryje koszty.
              Ale podobne obiekty w Europie pokazują, że entuzjazm odwiedzających
              z czasem opada, a koszty pozostają stałe. Jeśli przychody z
              biletów okażą się niewystarczające, spółka będzie wymagała
              dofinansowania z budżetu miasta - czyli z podatków mieszkańców.
            </p>
            <p>
              <strong className="text-white">
                Spółka miejska = ryzyko dla budżetu gminy.
              </strong>{" "}
              Holding Łódź Sp. z o.o. jest spółką w 100% miejską. Jeśli spółka
              poniesie straty, miasto jako jedyny udziałowiec będzie musiało
              zdecydować: albo dokapitalizować spółkę (wpłacić pieniądze z
              budżetu), albo dopuścić do jej upadłości - co oznaczałoby utratę
              kontroli nad terenem.
            </p>
          </ReadMoreBlock>
        </div>
      </div>
    </section>
  );
}
