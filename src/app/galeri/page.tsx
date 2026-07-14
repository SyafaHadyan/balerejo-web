import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import GaleriSection from "@/components/sections/GaleriSection";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Galeri",
};

export default function GaleriPage() {
  return (
    <>
      <Navbar activePage="galeri" />
      <main>
        <PageHeader
          eyebrow="DOKUMENTASI KEGIATAN"
          heading="Galeri Kegiatan & Lingkungan"
        />
        <GaleriSection />
      </main>
      <Footer />
    </>
  );
}
