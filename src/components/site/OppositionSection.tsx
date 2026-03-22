import type { OppositionItem } from "./NumberedCard";
import { NumberedCard } from "./NumberedCard";
import { SectionHeading } from "./SectionHeading";

type OppositionSectionProps = {
  id: string;
  headingId: string;
  title: string;
  intro: string;
  entries: OppositionItem[];
};

export function OppositionSection({
  id,
  headingId,
  title,
  intro,
  entries,
}: OppositionSectionProps) {
  return (
    <section
      id={id}
      className="scroll-mt-28"
      aria-labelledby={headingId}
    >
      <SectionHeading id={headingId} variant="neon">
        {title}
      </SectionHeading>
      <p className="mb-8 text-base text-white/80 sm:text-lg">{intro}</p>
      <ol className="space-y-6">
        {entries.map((entry, i) => (
          <NumberedCard key={entry.title} index={i} entry={entry} />
        ))}
      </ol>
    </section>
  );
}
