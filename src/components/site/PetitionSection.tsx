import { PetitionCtaButton } from "./PetitionCtaButton";
import { PetitionCommentsSlider } from "./PetitionCommentsSlider";
import { SectionHeading } from "./SectionHeading";

type PetitionSectionProps = {
  id?: string;
  headingId?: string;
};

export function PetitionSection({
  id = "petycja",
  headingId = "h-petycja",
}: PetitionSectionProps) {
  return (
    <section
      id={id}
      className="scroll-mt-28 mt-16 sm:mt-20"
      aria-labelledby={headingId}
    >
      <SectionHeading id={headingId} variant="neon">
        Petycja
      </SectionHeading>

      <div className="space-y-4 text-base leading-relaxed text-white/92 sm:text-lg">
        <p>
          Petycja sprzeciwia się planowanej budowie „Dżungli 360” - dużej,
          kosztownej budowli w Ogrodzie Botanicznym w Łodzi. Projekt zakłada
          postawienie sztucznych konstrukcji i komercyjnych atrakcji na terenie
          jednego z najcenniejszych terenów zielonych w mieście. Tego rodzaju
          inwestycja oznaczałaby ingerencję w unikatowy obszar przyrodniczy,
          ryzyko komercjalizacji miejsca, które powinno pozostać
          ogólnodostępne, oraz ignorowanie realnych potrzeb mieszkańców -
          ochrony zieleni, a nie jej zastępowania atrakcjami.
        </p>

        <h3 className="pt-2 text-lg font-bold text-white sm:text-xl">
          Dlaczego warto ją podpisać?
        </h3>

        <p>
          Jeśli zależy Ci na tym, żeby Ogród Botaniczny pozostał miejscem
          prawdziwej przyrody, ciszy i edukacji, a nie kolejną miejską atrakcją
          turystyczną z drogimi biletami wstępu, to petycja daje Ci konkretny
          głos w tej sprawie. Podpisując ją, sygnalizujesz władzom miasta, że
          mieszkańcy wolą chronić istniejące tereny zielone niż je zabudowywać,
          nawet jeśli projekt wygląda efektownie na wizualizacjach. To
          szczególnie ważne teraz, gdy sprawa jest na etapie projektu uchwały -
          zanim zapadną nieodwracalne decyzje.
        </p>

        <div className="mt-8 flex justify-center sm:mt-10">
        <PetitionCtaButton />
      </div>
      
        <h3 className="mt-10 text-lg font-bold text-white sm:mt-12 sm:text-xl text-center">
          Komentarze od osób, które podpisały petycję.
        </h3>
        
        <PetitionCommentsSlider />
      </div>


    </section>
  );
}
