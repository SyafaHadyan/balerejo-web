import type { Metadata } from "next";
import NavbarJelajah from "@/components/NavbarJelajah";
import UmkmMapSection from "@/components/sections/UmkmMapSection";

export const metadata: Metadata = {
  title: "Peta Digital",
  description:
    "Peta interaktif lokasi UMKM Desa Balerejo. Temukan usaha warga, dapatkan petunjuk arah, dan eksplorasi potensi desa.",
  openGraph: {
    title: "Peta Digital — Jelajah Balerejo",
    description:
      "Peta interaktif lokasi UMKM Desa Balerejo. Temukan usaha warga, dapatkan petunjuk arah, dan eksplorasi potensi desa.",
  },
};

export default function PetaDigitalPage() {
  return (
    <div className="h-screen overflow-hidden flex flex-col">
      <NavbarJelajah activePage="peta-digital" />
      <main className="flex-1 overflow-hidden">
        <UmkmMapSection />
      </main>
    </div>
  );
}
