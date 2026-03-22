"use client";

import type { ReactNode } from "react";
import { useState } from "react";

type ReadMoreBlockProps = {
  children: ReactNode;
};

export function ReadMoreBlock({ children }: ReadMoreBlockProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="mt-3">
      {!open ? (
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="inline-flex items-center justify-center rounded-full border border-accent-neon/60 bg-accent-neon/10 px-4 py-2 text-sm font-semibold text-accent-neon transition hover:bg-accent-neon/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-neon"
        >
          czytaj więcej
        </button>
      ) : null}
      {open ? (
        <div className="mt-5 space-y-4 border-t border-white/10 pt-5 text-base leading-relaxed text-white/90">
          {children}
        </div>
      ) : null}
    </div>
  );
}
