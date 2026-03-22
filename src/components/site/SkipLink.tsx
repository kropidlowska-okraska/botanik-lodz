import type { ReactNode } from "react";

type SkipLinkProps = {
  href: string;
  children: ReactNode;
};

export function SkipLink({ href, children }: SkipLinkProps) {
  return (
    <a
      href={href}
      className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-100 focus:rounded-md focus:bg-accent-neon focus:px-4 focus:py-2 focus:text-bg-deep"
    >
      {children}
    </a>
  );
}
