import { PETITION_URL } from "@/lib/petition-url";
import { getPetitionSignatureCountDisplay } from "@/lib/petition-signature-count";

import { PetitionCtaButton } from "./PetitionCtaButton";
import { PetitionCommentsSlider } from "./PetitionCommentsSlider";
import { SectionHeading } from "./SectionHeading";

type PetitionSectionProps = {
  id?: string;
  headingId?: string;
};

function PetitionLeadParagraph({ className }: { className?: string }) {
  return (
    <p className={className}>
      Petycja sprzeciwia się planowanej budowie „Dżungli 360” - dużej,
      kosztownej budowli w Ogrodzie Botanicznym w Łodzi. Projekt zakłada
      postawienie sztucznych konstrukcji i komercyjnych atrakcji na terenie
      jednego z najcenniejszych terenów zielonych w mieście. Tego rodzaju
      inwestycja oznaczałaby ingerencję w unikatowy obszar przyrodniczy,
      ryzyko komercjalizacji miejsca, które powinno pozostać ogólnodostępne,
      oraz ignorowanie realnych potrzeb mieszkańców - ochrony zieleni, a nie
      jej zastępowania atrakcjami.
    </p>
  );
}

export async function PetitionSection({
  id = "petycja",
  headingId = "h-petycja",
}: PetitionSectionProps) {
  const signatureDisplay = await getPetitionSignatureCountDisplay();

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
        {signatureDisplay != null ? (
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_min(17.5rem,32%)] lg:items-start lg:gap-8 xl:gap-10">
            <PetitionLeadParagraph className="min-w-0" />
            <div
              className="mx-auto w-full max-w-md shrink-0 rounded-2xl border border-accent-neon/30 bg-linear-to-b from-bg-card/95 to-bg-raised/90 px-5 py-5 text-center shadow-[0_0_40px_rgba(57,255,20,0.12),inset_0_1px_0_rgba(57,255,20,0.12)] ring-1 ring-white/10 sm:px-6 sm:py-6 lg:sticky lg:top-28 lg:mx-0 lg:max-w-none lg:px-5 lg:py-6 xl:px-6 xl:py-7"
              role="status"
            >
              <p className="text-sm font-medium leading-snug text-white/88 sm:text-base">
                Zarejestrowanych podpisów na{" "}
                <a
                  href={PETITION_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-accent-lime underline decoration-accent-lime/40 underline-offset-[3px] transition hover:text-white hover:decoration-white/70"
                >
                  petycjeonline.com
                </a>
              </p>
              <p className="mt-2 font-black tabular-nums tracking-tight text-accent-neon drop-shadow-[0_0_28px_rgba(57,255,20,0.35)] sm:mt-3 text-4xl sm:text-5xl lg:text-4xl xl:text-5xl">
                {signatureDisplay}
              </p>
            </div>
          </div>
        ) : (
          <PetitionLeadParagraph />
        )}

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
