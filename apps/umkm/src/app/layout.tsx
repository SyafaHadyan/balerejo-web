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

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://umkm.balerejo.desa.id";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Jelajah Balerejo",
    template: "%s — Jelajah Balerejo",
  },
  description:
    "Temukan produk unggulan UMKM, wisata, dan peta digital Desa Balerejo, Kecamatan Panggungrejo, Kabupaten Blitar.",
  keywords: [
    "UMKM Balerejo",
    "produk lokal Blitar",
    "wisata Balerejo",
    "peta digital desa",
    "Panggungrejo",
    "Kabupaten Blitar",
  ],
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: SITE_URL,
    siteName: "Jelajah Balerejo",
    title: "Jelajah Balerejo — UMKM & Wisata Desa Balerejo",
    description:
      "Temukan produk unggulan UMKM, wisata, dan peta digital Desa Balerejo, Kecamatan Panggungrejo, Kabupaten Blitar.",
    images: [
      {
        url: "/images/hero.jpeg",
        width: 1280,
        height: 720,
        alt: "UMKM dan wisata Desa Balerejo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jelajah Balerejo — UMKM & Wisata Desa Balerejo",
    description:
      "Temukan produk unggulan UMKM, wisata, dan peta digital Desa Balerejo.",
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
