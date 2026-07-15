import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import InfografisTabs from "@/components/InfografisTabs";
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
        <InfografisTabs />
      </main>
      <Footer />
    </>
  );
}
