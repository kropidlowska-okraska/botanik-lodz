import { SectionHeading } from "./SectionHeading";

type PlanSectionProps = {
  id: string;
  headingId: string;
  title: string;
  paragraphs: string[];
};

export function PlanSection({ id, headingId, title, paragraphs }: PlanSectionProps) {
  return (
    <section id={id} className="scroll-mt-28" aria-labelledby={headingId}>
      <SectionHeading id={headingId} variant="neon">
        {title}
      </SectionHeading>
      <div className="space-y-4 text-base leading-relaxed text-white/92 sm:text-lg">
        {paragraphs.map((text, i) => (
          <p key={i}>{text}</p>
        ))}
      </div>
    </section>
  );
}
