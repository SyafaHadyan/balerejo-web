import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Halaman Tidak Ditemukan",
  description: "Halaman yang Anda cari tidak ditemukan di situs web resmi Desa Balerejo.",
  robots: { index: true, follow: true },
};

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 flex flex-col items-center justify-center gap-4 px-5 text-center">
        <p className="font-sans font-semibold text-[13px] tracking-widest text-muted uppercase">
          404
        </p>
        <h1 className="font-heading font-bold text-[32px] md:text-[42px] leading-[1.2] text-primary">
          Halaman Tidak Ditemukan
        </h1>
        <p className="font-sans text-[16px] text-muted max-w-[400px] leading-[1.7]">
          Halaman yang Anda cari tidak ada atau telah dipindahkan.
        </p>
        <Link
          href="/"
          className="mt-4 inline-flex items-center justify-center px-8 py-3 bg-accent rounded-[10px] font-sans font-bold text-[15px] leading-none text-primary hover:opacity-90 transition-opacity duration-200"
        >
          Kembali ke Beranda
        </Link>
      </main>
      <Footer />
    </div>
  );
}
