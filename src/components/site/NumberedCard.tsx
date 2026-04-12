import type { StanceDocument } from "./StanceDocumentsToggle";
import { StanceDocumentsToggle } from "./StanceDocumentsToggle";

export type OppositionItem = {
  title: string;
  body: string;
  /** Optional document scans (e.g. statement) — drives the “view stance” control. */
  stanceDocuments?: StanceDocument[];
};

type NumberedCardProps = {
  index: number;
  entry: OppositionItem;
};

export function NumberedCard({ index, entry }: NumberedCardProps) {
  return (
    <li className="relative rounded-xl border border-white/10 bg-bg-card/90 p-5 pl-6 shadow-[inset_0_1px_0_rgba(57,255,20,0.08)] sm:p-6 sm:pl-8">
      <span
        className="absolute left-0 top-0 h-full w-1 rounded-l-xl bg-linear-to-b from-accent-neon to-accent-lime"
        aria-hidden
      />
      <p className="text-sm font-bold uppercase tracking-wide text-accent-lime sm:text-base">
        {index + 1}. {entry.title}
      </p>
      {entry.stanceDocuments?.length ? (
        <StanceDocumentsToggle
          documents={entry.stanceDocuments}
          body={entry.body}
        />
      ) : (
        <p className="mt-3 text-base leading-relaxed text-white/90">{entry.body}</p>
      )}
    </li>
  );
}
