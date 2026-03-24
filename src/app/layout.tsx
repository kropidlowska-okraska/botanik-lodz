import type { Metadata, Viewport } from "next";
import { DM_Serif_Display, Montserrat } from "next/font/google";
import "./globals.css";

import { getSiteUrl } from "@/lib/site-url";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700", "800"],
});

const dmSerif = DM_Serif_Display({
  variable: "--font-dm-serif",
  subsets: ["latin", "latin-ext"],
  weight: ["400"],
});

const siteUrl = getSiteUrl();

const SITE_NAME = "Zielone Serce Botanika";

const defaultDescription =
  "Nie dla projektu Dżungla 360 w Ogrodzie Botanicznym w Łodzi. Plan miasta i Holding Łódź, ryzyko aportu, stanowiska naukowe (Rada Naukowa OB, ROBiA, ERCE PAN, Wydział Biologii UŁ), petycja mieszkańców, galeria protestów i debat.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${SITE_NAME} - sprzeciw wobec Dżungli 360 w łódzkim Ogrodzie Botanicznym`,
    template: `%s | ${SITE_NAME}`,
  },
  description: defaultDescription,
  keywords: [
    "Ogród Botaniczny Łódź",
    "Dżungla 360",
    "Dżungli 360",
    "Holding Łódź",
    "aport",
    "Łódź",
    "ochrona przyrody",
    "petycja",
    "ROBiA",
    "ERCE PAN",
    "botanik",
    "Zielone Serce Botanika",
  ],
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "pl_PL",
    url: "/",
    siteName: SITE_NAME,
    title: `${SITE_NAME} - nie dla Dżungli 360 w Ogrodzie Botanicznym`,
    description: defaultDescription,
    images: [
      {
        url: "/hero-tulipany.png",
        width: 1920,
        height: 1080,
        alt: "Kwitnące tulipany w ogrodzie - kampania Zielone Serce Botanika",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} - nie dla Dżungli 360`,
    description: defaultDescription,
    images: ["/hero-tulipany.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: "/",
  },
};

export const viewport: Viewport = {
  themeColor: "#05180d",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: SITE_NAME,
        description: defaultDescription,
        inLanguage: "pl-PL",
        publisher: { "@id": `${siteUrl}/#organization` },
      },
      {
        "@type": "Organization",
        "@id": `${siteUrl}/#organization`,
        name: SITE_NAME,
        url: siteUrl,
        email: "zielonesercebotanika@gmail.com",
        sameAs: ["https://www.facebook.com/zielonesercebotanika/"],
      },
    ],
  };

  return (
    <html
      lang="pl"
      className={`${montserrat.variable} ${dmSerif.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
