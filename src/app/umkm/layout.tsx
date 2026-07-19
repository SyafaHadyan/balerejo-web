import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Jelajah Balerejo",
    template: "%s — Jelajah Balerejo",
  },
  description:
    "Temukan produk unggulan UMKM Desa Balerejo: makanan, kerajinan, dan hasil bumi asli desa.",
};

export default function UmkmLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
