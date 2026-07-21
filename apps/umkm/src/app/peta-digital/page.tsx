import type { Metadata } from "next";
import NavbarJelajah from "@/components/NavbarJelajah";
import UmkmMapSection from "@/components/sections/UmkmMapSection";

export const metadata: Metadata = {
  title: "Peta Digital — Jelajah Balerejo",
};

export default function PetaDigitalPage() {
  return (
    <>
      <NavbarJelajah activePage="peta-digital" />
      <main>
        <UmkmMapSection />
      </main>
    </>
  );
}
