import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import InfografisSection from "@/components/sections/InfografisSection";
import APBDesSection from "@/components/sections/APBDesSection";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Infografis",
};

export default function InfografisPage() {
  return (
    <>
      <Navbar activePage="infografis" />
      <main>
        <PageHeader eyebrow="DATA DESA" heading="Infografis" />
        <InfografisSection />
        <APBDesSection />
      </main>
      <Footer />
    </>
  );
}
