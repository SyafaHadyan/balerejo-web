import type { Metadata } from "next";
import NavbarJelajah from "@/components/NavbarJelajah";
import UmkmHeroSection from "@/components/sections/UmkmHeroSection";
import UmkmStatsBar from "@/components/sections/UmkmStatsBar";
import UmkmGridSection from "@/components/sections/UmkmGridSection";
import FooterJelajah from "@/components/FooterJelajah";

export const metadata: Metadata = {
  title: "Katalog UMKM",
  description:
    "Jelajahi katalog produk UMKM unggulan Desa Balerejo — makanan, kerajinan, fashion, dan lebih banyak lagi dari warga lokal.",
  openGraph: {
    title: "Katalog UMKM — Jelajah Balerejo",
    description:
      "Jelajahi katalog produk UMKM unggulan Desa Balerejo — makanan, kerajinan, fashion, dan lebih banyak lagi dari warga lokal.",
  },
};

export default function UmkmPage() {
  return (
    <>
      <NavbarJelajah activePage="umkm" />
      <main>
        <UmkmHeroSection />
        <UmkmStatsBar />
        <UmkmGridSection />
      </main>
      <FooterJelajah />
    </>
  );
}
