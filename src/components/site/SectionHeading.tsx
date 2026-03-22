import type { ReactNode } from "react";

type SectionHeadingVariant = "neon" | "emphasis";

type SectionHeadingProps = {
  id: string;
  variant?: SectionHeadingVariant;
  children: ReactNode;
};

const variantClass: Record<SectionHeadingVariant, string> = {
  neon: "border-accent-neon text-accent-neon mb-6",
  emphasis: "border-emphasis-red text-white mb-2",
};

export function SectionHeading({
  id,
  variant = "neon",
  children,
}: SectionHeadingProps) {
  return (
    <h2
      id={id}
      className={`border-l-4 pl-4 text-2xl font-extrabold uppercase tracking-wide sm:text-3xl ${variantClass[variant]}`}
    >
      {children}
    </h2>
  );
}
