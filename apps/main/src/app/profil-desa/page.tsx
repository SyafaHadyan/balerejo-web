import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import ProfileSection from "@/components/sections/ProfileSection";
import OrgChartSection from "@/components/sections/OrgChartSection";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Profil Desa",
};

export default function ProfilDesaPage() {
  return (
    <>
      <Navbar activePage="profil-desa" />
      <main>
        <PageHeader eyebrow="TENTANG DESA" heading="Profil Desa" />
        <ProfileSection />
        <OrgChartSection />
      </main>
      <Footer />
    </>
  );
}
