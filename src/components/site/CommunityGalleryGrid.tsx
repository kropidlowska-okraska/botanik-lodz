"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

export type GalleryPhoto = {
  src: string;
  alt: string;
};

type CommunityGalleryGridProps = {
  photos: GalleryPhoto[];
  mobileVisibleIndices: number[];
};

export function CommunityGalleryGrid({
  photos,
  mobileVisibleIndices,
}: CommunityGalleryGridProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  const close = useCallback(() => setOpenIndex(null), []);

  useEffect(() => {
    if (openIndex === null) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeBtnRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [openIndex, close]);

  const open = photos[openIndex ?? -1];

  return (
    <>
      <div className="grid grid-cols-1 gap-0 overflow-hidden rounded-xl border border-white/10 sm:grid-cols-2 lg:grid-cols-3">
        {photos.map((photo, index) => (
          <figure
            key={photo.src}
            className={`relative aspect-4/3 w-full min-h-48 bg-black/40 sm:min-h-0 ${mobileVisibleIndices.includes(index) ? "" : "hidden sm:block"}`}
          >
            <button
              type="button"
              className="group absolute inset-0 cursor-zoom-in focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-neon"
              onClick={() => setOpenIndex(index)}
              aria-haspopup="dialog"
              aria-expanded={openIndex === index}
              aria-label={`Powiększ zdjęcie: ${photo.alt}`}
            >
              <Image
                src={photo.src}
                alt=""
                fill
                className="object-cover transition-opacity group-hover:opacity-95 group-focus-visible:opacity-95"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </button>
          </figure>
        ))}
      </div>

      {openIndex !== null && open && (
        <div
          className="fixed inset-0 z-100 flex items-center justify-center bg-black/88 p-1 sm:p-2"
          role="presentation"
          onClick={close}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-label={open.alt}
            className="relative box-border flex w-[min(98vw,calc(100vw-12px))] max-w-[min(98vw,3840px)] flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              ref={closeBtnRef}
              type="button"
              onClick={close}
              aria-label="Zamknij"
              className="absolute -right-2 -top-2 z-20 flex h-11 w-11 items-center justify-center rounded-full border-2 border-accent-neon/80 bg-bg-deep text-white shadow-[0_0_20px_rgba(57,255,20,0.35)] transition hover:border-accent-neon hover:bg-bg-raised hover:shadow-[0_0_28px_rgba(57,255,20,0.5)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-neon sm:-right-3 sm:-top-3 sm:h-12 sm:w-12"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.25"
                strokeLinecap="round"
                className="h-5 w-5 text-accent-neon sm:h-6 sm:w-6"
                aria-hidden
              >
                <path d="M18 6 6 18M6 6l12 12" />
              </svg>
            </button>
            <div
              className="relative w-full min-w-0 overflow-hidden rounded-lg bg-black/40 p-1 shadow-[0_0_40px_rgba(57,255,20,0.12),inset_0_0_0_1px_rgba(57,255,20,0.15)] ring-2 ring-accent-neon/70 ring-offset-2 ring-offset-bg-deep sm:rounded-xl sm:p-1.5 sm:ring-[3px]"
            >
              {/* Explicit width + height so object-contain actually fills the viewport */}
              <div className="relative h-[min(92dvh,2600px)] w-full min-h-[40vh] overflow-hidden rounded-md sm:rounded-lg">
                <Image
                  src={open.src}
                  alt=""
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 98vw, min(98vw, 3840px)"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
