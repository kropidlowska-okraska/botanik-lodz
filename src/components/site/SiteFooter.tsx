import Image from "next/image";

const EMAIL = "zielonesercebotanika@gmail.com";
const FACEBOOK_URL = "https://www.facebook.com/zielonesercebotanika/";

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

export function SiteFooter() {
  return (
    <footer
      id="kontakt"
      className="scroll-mt-28 border-t border-white/10 bg-bg-raised"
      aria-labelledby="h-kontakt"
    >
      <h2 id="h-kontakt" className="sr-only">
        Kontakt
      </h2>
      <div className="mx-auto flex h-16 max-w-6xl items-stretch sm:h-20">
        <div className="relative w-[min(52vw,15rem)] shrink-0 pl-4 sm:w-64 sm:pl-6">
          <Image
            src="/logo-horizontal.png"
            alt="Zielone Serce Botanika"
            fill
            className="object-contain object-left"
            sizes="(max-width: 640px) 52vw, 256px"
          />
        </div>

        <div className="flex min-w-0 flex-1 flex-wrap items-center justify-end gap-x-4 gap-y-2 px-4 text-sm text-white/90 sm:px-6 sm:text-base">
          <a
            href={FACEBOOK_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook — Zielone Serce Botanika"
            className="shrink-0 text-white/75 transition hover:text-accent-neon"
          >
            <FacebookIcon className="h-6 w-6 sm:h-7 sm:w-7" />
          </a>
          <a
            href={`mailto:${EMAIL}`}
            className="truncate font-medium text-accent-neon underline decoration-accent-neon/35 underline-offset-2 transition hover:decoration-accent-neon"
          >
            {EMAIL}
          </a>
        </div>
      </div>
    </footer>
  );
}
