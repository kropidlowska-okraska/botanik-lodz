"use client";

import Image from "next/image";
import Link from "next/link";
import {
  useCallback,
  useEffect,
  useId,
  useState,
  type MouseEvent,
  type ReactNode,
} from "react";

import { siteNavLinks, type SiteNavLink } from "@/content/site-nav";

type SiteShellProps = {
  logoSrc: string;
  brandName: string;
  children: ReactNode;
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
        <path d="M18 6L6 18M6 6l12 12" />
      ) : (
        <>
          <path d="M4 7h16M4 12h16M4 17h16" />
        </>
      )}
    </svg>
  );
}

function NavLinks({
  links,
  onNavigate,
  variant,
  className,
}: {
  links: SiteNavLink[];
  onNavigate?: () => void;
  variant: "rail" | "drawer";
  className?: string;
}) {
  const isRail = variant === "rail";

  const linkClass = isRail
    ? [
        "group/link flex min-h-12 items-center gap-3 rounded-xl border-l-[3px] border-transparent py-3 pl-3 pr-3",
        "text-[0.8125rem] font-medium leading-snug tracking-wide text-white/75",
        "transition-[background-color,border-color,color,padding] duration-200",
        "hover:border-accent-neon/70 hover:bg-white/[0.07] hover:text-white",
        "focus-visible:border-accent-neon focus-visible:bg-white/[0.07] focus-visible:text-white focus-visible:outline-none",
        "group-hover/sidebar:pl-4 group-hover/sidebar:pr-4",
        "group-focus-within/sidebar:pl-4 group-focus-within/sidebar:pr-4",
        "[@media(hover:none)]:pl-4 [@media(hover:none)]:pr-4",
      ].join(" ")
    : [
        "group/link flex min-h-12 items-center gap-3.5 rounded-xl border-l-[3px] border-transparent px-5 py-3.5",
        "text-[0.9375rem] font-medium leading-snug tracking-wide text-white/80",
        "transition hover:border-accent-neon/70 hover:bg-white/[0.07] hover:text-white",
        "focus-visible:border-accent-neon focus-visible:bg-white/[0.07] focus-visible:text-white focus-visible:outline-none",
      ].join(" ");

  const iconClass = [
    "h-[1.125rem] w-[1.125rem] shrink-0 stroke-[1.75] text-accent-lime/70 transition-colors duration-200",
    "group-hover/link:text-accent-neon group-focus-visible/link:text-accent-neon",
    isRail ? "mx-auto group-hover/sidebar:mx-0 group-focus-within/sidebar:mx-0" : "",
  ].join(" ");

  const labelClass = isRail
    ? [
        "pointer-events-none max-w-0 overflow-hidden whitespace-nowrap opacity-0",
        "transition-[opacity,max-width] duration-200 delay-75",
        "group-hover/sidebar:max-w-[14rem] group-hover/sidebar:opacity-100",
        "group-focus-within/sidebar:max-w-[14rem] group-focus-within/sidebar:opacity-100",
        "[@media(hover:none)]:max-w-[14rem] [@media(hover:none)]:opacity-100",
      ].join(" ")
    : "";

  return (
    <ul className={className}>
      {links.map((link) => {
        const Icon = link.icon;
        return (
          <li key={link.href}>
            <a href={link.href} className={linkClass} onClick={onNavigate}>
              <Icon className={iconClass} aria-hidden />
              <span className={isRail ? labelClass : undefined}>{link.label}</span>
            </a>
          </li>
        );
      })}
    </ul>
  );
}

export function SiteShell({ logoSrc, brandName, children }: SiteShellProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const navId = useId();
  const close = useCallback(() => setMenuOpen(false), []);

  const handleLogoClick = useCallback(
    (e: MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
      close();
    },
    [close],
  );

  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [menuOpen, close]);

  useEffect(() => {
    if (!menuOpen) return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <div className="flex min-h-full">
      <aside
        className={[
          "group/sidebar fixed inset-y-0 left-0 z-40 hidden flex-col overflow-hidden",
          "border-r border-border-subtle/60 bg-bg-deep/97 shadow-[2px_0_16px_rgba(0,0,0,0.25)] backdrop-blur-md",
          "w-14 transition-[width,box-shadow] duration-300 ease-out",
          "hover:w-60 hover:border-border-subtle hover:shadow-[4px_0_32px_rgba(0,0,0,0.45)]",
          "focus-within:w-60 focus-within:border-border-subtle focus-within:shadow-[4px_0_32px_rgba(0,0,0,0.45)]",
          "[@media(hover:none)]:w-60 [@media(hover:none)]:shadow-[4px_0_32px_rgba(0,0,0,0.45)]",
          "lg:flex",
        ].join(" ")}
        aria-label="Nawigacja sekcji"
      >
        <Link
          href="/"
          onClick={handleLogoClick}
          className={[
            "flex shrink-0 items-center border-b border-white/10 transition-[gap,padding] duration-300",
            "justify-center px-0 py-5",
            "group-hover/sidebar:justify-start group-hover/sidebar:gap-3.5 group-hover/sidebar:px-5",
            "group-focus-within/sidebar:justify-start group-focus-within/sidebar:gap-3.5 group-focus-within/sidebar:px-5",
            "[@media(hover:none)]:justify-start [@media(hover:none)]:gap-3.5 [@media(hover:none)]:px-5",
          ].join(" ")}
        >
          <div className="relative h-9 w-9 shrink-0">
            <Image
              src={logoSrc}
              alt={`${brandName} - logo`}
              fill
              className="object-contain"
              sizes="36px"
              priority
            />
          </div>
          <span
            className={[
              "max-w-0 overflow-hidden text-[0.65rem] font-bold uppercase leading-tight tracking-[0.12em] text-white/95 opacity-0",
              "whitespace-nowrap transition-[max-width,opacity] duration-300 delay-75",
              "group-hover/sidebar:max-w-[11rem] group-hover/sidebar:opacity-100",
              "group-focus-within/sidebar:max-w-[11rem] group-focus-within/sidebar:opacity-100",
              "[@media(hover:none)]:max-w-[11rem] [@media(hover:none)]:opacity-100",
            ].join(" ")}
          >
            {brandName}
          </span>
        </Link>

        <nav className="flex flex-1 flex-col overflow-x-hidden overflow-y-auto px-2 py-5 group-hover/sidebar:px-3 group-focus-within/sidebar:px-3">
          <NavLinks
            links={siteNavLinks}
            variant="rail"
            className="flex flex-col gap-1.5"
          />
        </nav>

        <p
          className={[
            "shrink-0 px-2 pb-4 text-center text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-white/35",
            "transition-opacity duration-200 group-hover/sidebar:opacity-0 group-focus-within/sidebar:opacity-0",
          ].join(" ")}
          aria-hidden
        >
          Menu
        </p>
      </aside>

      {menuOpen ? (
        <button
          type="button"
          className="fixed inset-0 z-40 bg-black/60 lg:hidden"
          aria-label="Zamknij menu nawigacji"
          onClick={close}
        />
      ) : null}

      <aside
        id={navId}
        className={[
          "fixed inset-y-0 right-0 z-50 flex w-[min(20rem,88vw)] flex-col border-l border-border-subtle bg-bg-deep shadow-xl transition-transform duration-200 lg:hidden",
          menuOpen ? "translate-x-0" : "translate-x-full",
        ].join(" ")}
        aria-hidden={!menuOpen}
        inert={!menuOpen}
      >
        <div className="flex items-center justify-between gap-4 border-b border-white/10 px-5 py-4">
          <div className="flex min-w-0 items-center gap-3">
            <div className="relative h-10 w-10 shrink-0">
              <Image
                src={logoSrc}
                alt=""
                fill
                className="object-contain"
                sizes="40px"
              />
            </div>
            <span className="text-xs font-bold uppercase leading-tight tracking-[0.12em] text-white/95">
              {brandName}
            </span>
          </div>
          <button
            type="button"
            className="shrink-0 rounded-lg p-2.5 text-white/90 transition hover:bg-white/10 hover:text-accent-neon"
            aria-label="Zamknij menu"
            onClick={close}
          >
            <MenuIcon open />
          </button>
        </div>
        <nav
          className="flex-1 overflow-y-auto px-3 py-5"
          aria-label="Nawigacja sekcji"
        >
          <NavLinks
            links={siteNavLinks}
            onNavigate={close}
            variant="drawer"
            className="flex flex-col gap-2"
          />
        </nav>
      </aside>

      <div className="flex min-w-0 flex-1 flex-col lg:pl-14">
        <header className="sticky top-0 z-30 border-b border-border-subtle bg-bg-deep/90 backdrop-blur-md lg:hidden">
          <div className="flex h-14 items-center justify-between px-4 sm:h-16 sm:px-6">
            <Link
              href="/"
              className="flex min-w-0 items-center gap-3"
              onClick={handleLogoClick}
            >
              <div className="relative h-10 w-10 shrink-0 sm:h-11 sm:w-11">
                <Image
                  src={logoSrc}
                  alt={`${brandName} - logo`}
                  fill
                  className="object-contain"
                  sizes="44px"
                  priority
                />
              </div>
              <span className="truncate text-[0.65rem] font-bold uppercase tracking-[0.15em] text-white/95 sm:max-w-48 sm:text-xs">
                {brandName}
              </span>
            </Link>
            <button
              type="button"
              className="rounded-lg p-2.5 text-white/90 transition hover:bg-white/10 hover:text-accent-neon"
              aria-expanded={menuOpen}
              aria-controls={navId}
              aria-label={menuOpen ? "Zamknij menu" : "Otwórz menu nawigacji"}
              onClick={() => setMenuOpen((o) => !o)}
            >
              <MenuIcon open={menuOpen} />
            </button>
          </div>
        </header>

        {children}
      </div>
    </div>
  );
}
