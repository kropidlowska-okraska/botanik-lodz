import Image from "next/image";
import Link from "next/link";

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

export function SiteHeader({
  logoSrc,
  brandName,
  navLinks,
  homeHref = "#",
}: SiteHeaderProps) {
  return (
    <header className="sticky top-0 z-50 border-b border-border-subtle bg-bg-deep/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link href={homeHref} className="flex items-center gap-3">
          <Image
            src={logoSrc}
            alt={`${brandName} — logo`}
            width={48}
            height={48}
            className="h-10 w-auto object-contain sm:h-12"
            priority
          />
          <span className="hidden text-xs font-bold uppercase tracking-[0.2em] text-white/95 sm:block sm:max-w-56 sm:leading-tight">
            {brandName}
          </span>
        </Link>
        <nav
          className="flex flex-wrap items-center gap-1 text-xs font-semibold uppercase tracking-wide sm:gap-4 sm:text-sm"
          aria-label="Nawigacja sekcji"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-md px-2 py-1 text-white/90 transition hover:bg-white/10 hover:text-accent-neon sm:px-3"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
