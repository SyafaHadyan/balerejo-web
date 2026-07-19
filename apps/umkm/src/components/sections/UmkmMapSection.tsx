"use client";

import dynamic from "next/dynamic";

/* MapLibre requires browser APIs — disable SSR */
const UmkmMap = dynamic(() => import("@/components/UmkmMap"), {
  ssr: false,
  loading: () => (
    <div className="h-full w-full rounded-[16px] bg-surface animate-pulse" />
  ),
});

export default function UmkmMapSection() {
  return (
    <section className="bg-surface py-[60px] md:py-[80px] px-6" aria-label="Lokasi UMKM">
      <div className="max-w-[1280px] mx-auto flex flex-col gap-8">
        {/* heading */}
        <div className="flex flex-col gap-2">
          <p className="font-sans font-semibold text-[12px] text-[#37644d] tracking-[1.5px]">
            PETA SEBARAN
          </p>
          <h2 className="font-heading font-bold text-[28px] md:text-[36px] text-primary leading-[1.3]">
            Lokasi UMKM Desa Balerejo
          </h2>
          <p className="font-sans text-[15px] text-muted leading-[1.6] max-w-[520px]">
            Temukan langsung penjual di sekitar desa. Klik penanda untuk melihat detail produk.
          </p>
        </div>

        {/* map */}
        <div className="aspect-video w-full rounded-[16px] overflow-hidden shadow-[0_2px_12px_rgba(0,0,0,0.08)]">
          <UmkmMap />
        </div>
      </div>
    </section>
  );
}
