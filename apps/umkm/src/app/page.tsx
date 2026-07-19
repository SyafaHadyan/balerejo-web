import type { Metadata } from "next";
import NavbarJelajah from "@/components/NavbarJelajah";
import UmkmHeroSection from "@/components/sections/UmkmHeroSection";
import UmkmStatsBar from "@/components/sections/UmkmStatsBar";
import UmkmGridSection from "@/components/sections/UmkmGridSection";
import FooterJelajah from "@/components/FooterJelajah";

export const metadata: Metadata = {
  title: "Katalog UMKM",
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
