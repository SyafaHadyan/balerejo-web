import type { Metadata } from "next";
import { Playfair_Display, Source_Sans_3 } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-playfair",
  display: "swap",
  preload: false,
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-source-sans",
  display: "swap",
  preload: false,
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://balerejo.desa.id";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Desa Balerejo",
    template: "%s — Desa Balerejo",
  },
  description:
    "Website resmi Desa Balerejo, Kecamatan Panggungrejo, Kabupaten Blitar, Jawa Timur. Profil, sejarah, dan data lengkap desa.",
  keywords: [
    "Desa Balerejo",
    "Panggungrejo",
    "Blitar",
    "Jawa Timur",
    "profil desa",
    "pemerintah desa",
  ],
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: SITE_URL,
    siteName: "Desa Balerejo",
    title: "Desa Balerejo — Tumbuh dari Sawah Menuju Sejahtera",
    description:
      "Website resmi Desa Balerejo, Kecamatan Panggungrejo, Kabupaten Blitar, Jawa Timur.",
    images: [
      {
        url: "/images/hero.jpeg",
        width: 1280,
        height: 720,
        alt: "Pemandangan persawahan Desa Balerejo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Desa Balerejo — Tumbuh dari Sawah Menuju Sejahtera",
    description:
      "Website resmi Desa Balerejo, Kecamatan Panggungrejo, Kabupaten Blitar.",
    images: ["/images/hero.jpeg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={`${playfair.variable} ${sourceSans.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
