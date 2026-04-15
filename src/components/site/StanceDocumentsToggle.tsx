"use client";

import Image from "next/image";
import { useState, type ReactNode } from "react";

export type StanceDocument = {
  src: string;
  alt: string;
  /** Defaults to PNG/JPEG; `pdf` embeds the file in a frame (e.g. stance as PDF). */
  kind?: "image" | "pdf";
};

type StanceDocumentsToggleProps = {
  documents: StanceDocument[];
  body: ReactNode;
};

export function StanceDocumentsToggle({
  documents,
  body,
}: StanceDocumentsToggleProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <p className="mt-3 text-base leading-relaxed text-white/90">{body}</p>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="mt-3 inline-flex items-center justify-center rounded-full border border-accent-neon/60 bg-accent-neon/10 px-4 py-2 text-sm font-semibold text-accent-neon transition hover:bg-accent-neon/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-neon"
      >
        {open ? "ukryj stanowisko" : "zobacz stanowisko"}
      </button>
      {open ? (
        <div
          className="mt-6 space-y-4 border-t border-white/10 pt-6"
          role="region"
          aria-label="Załączone dokumenty stanowiska"
        >
          {documents.map((doc) => {
            const isPdf = doc.kind === "pdf" || doc.src.toLowerCase().endsWith(".pdf");
            if (isPdf) {
              return (
                <div
                  key={doc.src}
                  className="overflow-hidden rounded-lg border border-white/10 bg-white"
                >
                  <iframe
                    title={doc.alt}
                    src={doc.src}
                    className="h-[min(70vh,900px)] min-h-[420px] w-full"
                  />
                  <p className="border-t border-black/10 bg-bg-card/95 px-3 py-2 text-center text-sm">
                    <a
                      href={doc.src}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-accent-neon underline-offset-2 hover:underline"
                    >
                      Otwórz PDF w nowej karcie
                    </a>
                  </p>
                </div>
              );
            }
            return (
              <figure
                key={doc.src}
                className="overflow-hidden rounded-lg border border-white/10 bg-black/20"
              >
                <Image
                  src={doc.src}
                  alt={doc.alt}
                  width={1200}
                  height={1700}
                  className="h-auto w-full"
                  sizes="(max-width: 768px) 100vw, 72rem"
                />
              </figure>
            );
          })}
        </div>
      ) : null}
    </>
  );
}
