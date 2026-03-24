import Image from "next/image";
import type { ReactNode } from "react";

type HeroSectionProps = {
  imageSrc: string;
  imageAlt: string;
  verseLines: readonly string[];
  titleMain: string;
  titleSub: string;
  titleId?: string;
  topLeftCta?: ReactNode;
};

export function HeroSection({
  imageSrc,
  imageAlt,
  verseLines,
  titleMain,
  titleSub,
  titleId = "hero-title",
  topLeftCta,
}: HeroSectionProps) {
  return (
    <section
      className="relative isolate min-h-[min(90vh,1000px)] overflow-hidden"
      aria-labelledby={titleId}
    >
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        className="object-cover object-center"
        sizes="100vw"
        priority
      />
      <div
        className="absolute inset-0 bg-linear-to-t from-bg-deep via-bg-deep/55 to-transparent"
        aria-hidden
      />
      {/* Radial washes: top-right (verse) + top-left (CTA), both fade to transparent */}
      <div
        className="pointer-events-none absolute inset-0 z-1 bg-[radial-gradient(ellipse_95%_75%_at_100%_0%,rgba(5,24,13,0.55)_0%,rgba(5,24,13,0.22)_38%,rgba(5,24,13,0.06)_58%,transparent_72%),radial-gradient(ellipse_90%_70%_at_0%_0%,rgba(5,24,13,0.42)_0%,rgba(5,24,13,0.12)_48%,transparent_70%)]"
        aria-hidden
      />
      <div className="relative mx-auto flex min-h-[min(85vh,720px)] max-w-6xl flex-col justify-end px-4 pb-24 pt-24 sm:px-6 sm:pb-16">
        {topLeftCta ? (
          <div className="absolute left-4 top-16 z-10 sm:left-6 sm:top-20">
            {topLeftCta}
          </div>
        ) : null}
        <div className="absolute right-4 top-16 z-10 hidden w-fit max-w-[min(26rem,calc(100vw-2rem))] md:block sm:right-6 sm:top-20">
          <p className="text-right text-base font-semibold leading-snug text-white/85 [text-shadow:0_1px_3px_rgba(0,0,0,0.9),0_4px_20px_rgba(5,24,13,0.45)] sm:text-lg sm:leading-relaxed md:text-xl">
            {verseLines.map((line, i) => (
              <span key={`${i}-${line}`}>
                {i > 0 ? <br /> : null}
                {line}
              </span>
            ))}
          </p>
        </div>
        <h1
          id={titleId}
          className="max-w-6xl font-extrabold uppercase tracking-tight text-white drop-shadow-md"
        >
          <span className="block text-3xl leading-tight sm:text-4xl md:text-5xl">
            {titleMain}
          </span>
          <span className="mt-2 block font-emphasis text-2xl font-normal normal-case tracking-normal text-accent-neon sm:text-3xl md:text-4xl">
            {titleSub}
          </span>
        </h1>
      </div>
    </section>
  );
}
