"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useId, useState } from "react";

export type NavLink = {
  href: string;
  label: string;
};

type SiteHeaderProps = {
  logoSrc: string;
  brandName: string;
  navLinks: NavLink[];
  homeHref?: string;
};

function MenuIcon({ open }: { open: boolean }) {
  return (
    <svg
      className="h-6 w-6"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      aria-hidden
    >
      {open ? (
        <>
          <path d="M18 6L6 18M6 6l12 12" />
        </>
      ) : (
        <>
          <path d="M4 7h16M4 12h16M4 17h16" />
        </>
      )}
    </svg>
  );
}

export function SiteHeader({
  logoSrc,
  brandName,
  navLinks,
  homeHref = "#",
}: SiteHeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const navId = useId();
  const close = useCallback(() => setMenuOpen(false), []);

  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [menuOpen, close]);

  const linkClass =
    "rounded-md px-3 py-2 text-white/90 transition hover:bg-white/10 hover:text-accent-neon lg:px-3 lg:py-1";

  return (
    <header className="sticky top-0 z-50 border-b border-border-subtle bg-bg-deep/90 backdrop-blur-md">
      <div className="relative mx-auto flex h-14 max-w-7xl items-stretch sm:h-16">
        <Link
          href={homeHref}
          className="flex h-full min-w-0 items-center gap-3 pl-4 sm:pl-6"
          onClick={close}
        >
          <div className="relative h-full w-12 shrink-0 sm:w-14">
            <Image
              src={logoSrc}
              alt={`${brandName} - logo`}
              fill
              className="object-contain object-left"
              sizes="56px"
              priority
            />
          </div>
          <span className="hidden text-xs font-bold uppercase tracking-[0.2em] text-white/95 sm:block sm:max-w-56 sm:leading-tight">
            {brandName}
          </span>
        </Link>

        <div className="relative ml-auto flex h-full items-center pr-4 sm:pr-6">
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2 text-white/90 transition hover:bg-white/10 hover:text-accent-neon lg:hidden"
            aria-expanded={menuOpen}
            aria-controls={navId}
            aria-label={menuOpen ? "Zamknij menu" : "Otwórz menu nawigacji"}
            onClick={() => setMenuOpen((o) => !o)}
          >
            <MenuIcon open={menuOpen} />
          </button>

          <nav
            id={navId}
            className={[
              "absolute right-0 top-full z-50 mt-1 w-max min-w-[11rem] max-w-[min(18rem,calc(100vw-2rem))] flex-col gap-0.5 rounded-lg border border-border-subtle bg-bg-deep/98 px-3 py-3 text-xs font-semibold uppercase tracking-wide shadow-lg backdrop-blur-md sm:text-sm",
              "lg:static lg:mt-0 lg:ml-4 lg:flex lg:min-w-0 lg:max-w-none lg:flex-row lg:items-center lg:gap-4 lg:rounded-none lg:border-0 lg:bg-transparent lg:p-0 lg:shadow-none",
              menuOpen ? "max-lg:flex" : "max-lg:hidden",
            ].join(" ")}
            aria-label="Nawigacja sekcji"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={linkClass}
                onClick={close}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
