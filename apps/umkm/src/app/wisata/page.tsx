import type { Metadata } from "next";
import NavbarJelajah from "@/components/NavbarJelajah";
import WisataGallerySection from "@/components/sections/WisataGallerySection";
import FooterJelajah from "@/components/FooterJelajah";

export const metadata: Metadata = {
  title: "Wisata",
  description:
    "Jelajahi destinasi wisata alam sekitar Desa Balerejo — sumber air, dam, taman, dan pantai selatan Blitar.",
  openGraph: {
    title: "Wisata — Jelajah Balerejo",
    description:
      "Jelajahi destinasi wisata alam sekitar Desa Balerejo — sumber air, dam, taman, dan pantai selatan Blitar.",
  },
};

export default function WisataPage() {
  return (
    <>
      <NavbarJelajah activePage="wisata" />
      <main>
        <WisataGallerySection />
      </main>
      <FooterJelajah />
    </>
  );
}
