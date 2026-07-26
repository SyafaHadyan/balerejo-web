import type { Metadata } from "next";
import NavbarJelajah from "@/components/NavbarJelajah";
import WisataHeroSection from "@/components/sections/WisataHeroSection";
import WisataGridSection from "@/components/sections/WisataGridSection";
import FooterJelajah from "@/components/FooterJelajah";

export const metadata: Metadata = {
  title: "Wisata",
  description:
    "Jelajahi destinasi wisata alam sekitar Desa Balerejo — air terjun tersembunyi, pantai selatan Blitar, dan goa alam yang menakjubkan.",
  openGraph: {
    title: "Wisata — Jelajah Balerejo",
    description:
      "Jelajahi destinasi wisata alam sekitar Desa Balerejo — air terjun tersembunyi, pantai selatan Blitar, dan goa alam yang menakjubkan.",
  },
};

export default function WisataPage() {
  return (
    <>
      <NavbarJelajah activePage="wisata" />
      <main>
        <WisataHeroSection />
        <WisataGridSection />
      </main>
      <FooterJelajah />
    </>
  );
}
