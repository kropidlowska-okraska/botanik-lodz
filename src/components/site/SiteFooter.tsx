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
      <div className="mx-auto flex max-w-7xl items-center gap-3 px-4 py-5 sm:h-20 sm:gap-0 sm:px-0 sm:py-0">
        <Image
          src="/logo-zielone-serce.png"
          alt="Zielone Serce Botanika"
          width={512}
          height={512}
          className="h-28 w-28 shrink-0 object-contain sm:hidden"
          sizes="112px"
        />

        <div className="relative hidden h-full w-64 shrink-0 pl-6 sm:block">
          <Image
            src="/logo-horizontal.png"
            alt="Zielone Serce Botanika"
            fill
            className="object-contain object-left"
            sizes="256px"
          />
        </div>

        <div className="flex min-w-0 flex-1 flex-col items-end justify-center gap-2 sm:flex-row sm:items-center sm:justify-end sm:gap-x-4 sm:px-6 sm:pl-4">
          <a
            href={FACEBOOK_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook - Zielone Serce Botanika"
            className="hidden shrink-0 text-white/75 transition hover:text-accent-neon sm:inline-flex"
          >
            <FacebookIcon className="h-7 w-7" />
          </a>
          <a
            href={`mailto:${EMAIL}`}
            className="min-w-0 max-w-[min(100%,14rem)] text-right wrap-anywhere text-xs font-medium leading-snug text-accent-neon underline decoration-accent-neon/35 underline-offset-2 transition hover:decoration-accent-neon sm:max-w-none sm:truncate sm:text-base"
          >
            {EMAIL}
          </a>
          <a
            href={FACEBOOK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-medium text-white/80 underline decoration-white/30 underline-offset-2 transition hover:text-accent-neon hover:decoration-accent-neon/50 sm:hidden"
          >
            Odwiedź nas na Facebooku
          </a>
        </div>
      </div>
    </footer>
  );
}
