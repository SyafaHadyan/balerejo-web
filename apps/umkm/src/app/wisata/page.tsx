import type { Metadata } from "next";
import NavbarJelajah from "@/components/NavbarJelajah";
import WisataGallerySection from "@/components/sections/WisataGallerySection";

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
    <div className="h-screen overflow-hidden flex flex-col">
      <NavbarJelajah activePage="wisata" />
      <main className="flex-1 overflow-hidden min-h-0">
        <WisataGallerySection />
      </main>
    </div>
  );
}
