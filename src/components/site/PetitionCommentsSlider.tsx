"use client";

import Image from "next/image";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  useSyncExternalStore,
} from "react";

const REDUCED_MOTION_MQ = "(prefers-reduced-motion: reduce)";

function subscribePrefersReducedMotion(onChange: () => void) {
  const mq = window.matchMedia(REDUCED_MOTION_MQ);
  mq.addEventListener("change", onChange);
  return () => mq.removeEventListener("change", onChange);
}

function getPrefersReducedMotionSnapshot() {
  return window.matchMedia(REDUCED_MOTION_MQ).matches;
}

function getPrefersReducedMotionServerSnapshot() {
  return false;
}

const INTERVAL_MS = 5500;

function ArrowLeftIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M15 18l-6-6 6-6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowRightIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M9 18l6-6-6-6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** One slide = one image file with a comment screenshot (text is on the image). */
export type PetitionCommentSlide = {
  id: string;
  imageSrc: string;
  imageAlt: string;
};

/** Filenames under public/petycja-komentarze/ (chronological order by timestamp in filename). */
const PETITION_COMMENT_SCREENSHOT_FILES = [
  "Screenshot 2026-03-22 at 18.03.41.png",
  "Screenshot 2026-03-22 at 18.03.54.png",
  "Screenshot 2026-03-22 at 18.04.17.png",
  "Screenshot 2026-03-22 at 18.04.32.png",
  "Screenshot 2026-03-22 at 18.04.48.png",
  "Screenshot 2026-03-22 at 18.05.15.png",
  "Screenshot 2026-03-22 at 18.05.38.png",
  "Screenshot 2026-03-22 at 18.05.48.png",
  "Screenshot 2026-03-22 at 18.06.00.png",
  "Screenshot 2026-03-22 at 18.06.18.png",
  "Screenshot 2026-03-22 at 18.06.27.png",
  "Screenshot 2026-03-22 at 18.06.35.png",
  "Screenshot 2026-03-22 at 18.07.09.png",
  "Screenshot 2026-03-22 at 18.08.02.png",
  "Screenshot 2026-03-22 at 18.08.10.png",
  "Screenshot 2026-03-22 at 18.08.34.png",
  "Screenshot 2026-03-22 at 18.08.48.png",
  "Screenshot 2026-03-22 at 18.09.10.png",
  "Screenshot 2026-03-22 at 18.09.18.png",
  "Screenshot 2026-03-22 at 18.10.06.png",
  "Screenshot 2026-03-22 at 18.11.50.png",
  "Screenshot 2026-03-22 at 18.12.09.png",
  "Screenshot 2026-03-22 at 18.12.21.png",
  "Screenshot 2026-03-22 at 18.12.29.png",
  "Screenshot 2026-03-22 at 18.12.54.png",
  "Screenshot 2026-03-22 at 18.13.35.png",
  "Screenshot 2026-03-22 at 18.13.45.png",
  "Screenshot 2026-03-22 at 18.14.07.png",
  "Screenshot 2026-03-22 at 18.14.29.png",
  "Screenshot 2026-03-22 at 18.14.42.png",
  "Screenshot 2026-03-22 at 18.15.11.png",
  "Screenshot 2026-03-22 at 18.15.31.png",
  "Screenshot 2026-03-22 at 18.15.59.png",
  "Screenshot 2026-03-22 at 18.16.11.png",
  "Screenshot 2026-03-22 at 18.16.33.png",
  "Screenshot 2026-03-22 at 18.16.43.png",
  "Screenshot 2026-03-22 at 18.16.48.png",
] as const;

function buildSlidesFromPetycjaFolder(): PetitionCommentSlide[] {
  const total = PETITION_COMMENT_SCREENSHOT_FILES.length;
  return PETITION_COMMENT_SCREENSHOT_FILES.map((filename, i) => ({
    id: `petycja-${i + 1}`,
    imageSrc: `/petycja-komentarze/${encodeURIComponent(filename)}`,
    imageAlt: `Zrzut ekranu komentarza z petycji (${i + 1} z ${total})`,
  }));
}

export const PETITION_COMMENT_SLIDES: PetitionCommentSlide[] =
  buildSlidesFromPetycjaFolder();

type PetitionCommentsSliderProps = {
  slides?: PetitionCommentSlide[];
};

export function PetitionCommentsSlider({
  slides = PETITION_COMMENT_SLIDES,
}: PetitionCommentsSliderProps) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduceMotion = useSyncExternalStore(
    subscribePrefersReducedMotion,
    getPrefersReducedMotionSnapshot,
    getPrefersReducedMotionServerSnapshot,
  );
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const advance = useCallback(() => {
    setIndex((i) => (i + 1) % slides.length);
  }, [slides.length]);

  useEffect(() => {
    if (reduceMotion || paused) {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
      return;
    }
    timerRef.current = setInterval(advance, INTERVAL_MS);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [advance, paused, reduceMotion]);

  const goPrev = useCallback(() => {
    setIndex((i) => (i - 1 + slides.length) % slides.length);
  }, [slides.length]);

  const goNext = useCallback(() => {
    setIndex((i) => (i + 1) % slides.length);
  }, [slides.length]);

  const navDisabled = slides.length <= 1;

  return (
    <div
      className="mt-6 w-full sm:mt-6"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <nav
        className="flex w-full items-center gap-2 sm:gap-3"
        aria-label="Nawigacja galerii zrzutów"
      >
        <button
          type="button"
          disabled={navDisabled}
          aria-label="Poprzedni zrzut"
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/15 bg-bg-raised/90 text-white/90 shadow-sm transition hover:border-accent-neon/60 hover:bg-bg-card hover:text-accent-neon disabled:pointer-events-none disabled:opacity-35 sm:h-11 sm:w-11"
          onClick={goPrev}
        >
          <ArrowLeftIcon className="h-6 w-6" />
        </button>

        <figure
          key={slides[index].id}
          className="relative min-w-0 flex-1 overflow-hidden rounded-xl border border-white/10 bg-bg-deep/40 shadow-[inset_0_1px_0_rgba(57,255,20,0.06)]"
        >
          <Image
            src={slides[index].imageSrc}
            alt={slides[index].imageAlt}
            width={2400}
            height={1200}
            className="relative z-0 h-auto w-full object-contain"
            sizes="(max-width: 768px) 100vw, min(72rem, 100vw)"
            priority={index === 0}
          />
          <div
            className="pointer-events-none absolute inset-0 z-10 rounded-[inherit] bg-bg-deep/3"
            aria-hidden
          />
        </figure>

        <button
          type="button"
          disabled={navDisabled}
          aria-label="Następny zrzut"
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/15 bg-bg-raised/90 text-white/90 shadow-sm transition hover:border-accent-neon/60 hover:bg-bg-card hover:text-accent-neon disabled:pointer-events-none disabled:opacity-35 sm:h-11 sm:w-11"
          onClick={goNext}
        >
          <ArrowRightIcon className="h-6 w-6" />
        </button>
      </nav>

      {reduceMotion ? (
        <p className="mt-2 text-center text-xs text-white/45">
          Automatyczna zmiana slajdów jest wyłączona (preferencje dostępności).
        </p>
      ) : null}
    </div>
  );
}
