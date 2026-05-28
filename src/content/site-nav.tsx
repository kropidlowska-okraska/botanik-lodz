import type { LucideIcon } from "lucide-react";
import {
  Building2,
  ClipboardPen,
  FileText,
  Images,
  Mail,
  Music,
  Newspaper,
  Sprout,
  Video,
} from "lucide-react";

export type SiteNavLink = {
  href: string;
  label: string;
  icon: LucideIcon;
};

export const siteNavLinks: SiteNavLink[] = [
  { href: "#plan", label: "Start", icon: Sprout },
  { href: "#sprzeciw", label: "Stanowiska", icon: FileText },
  { href: "#facebook-reel", label: "Debata", icon: Video },
  { href: "#petycja", label: "Petycja", icon: ClipboardPen },
  { href: "#galeria", label: "Galeria", icon: Images },
  { href: "#media", label: "Media o nas", icon: Newspaper },
  { href: "#aport", label: "Aport", icon: Building2 },
  { href: "#piosenka", label: "Protest song", icon: Music },
  { href: "#kontakt", label: "Kontakt", icon: Mail },
];
