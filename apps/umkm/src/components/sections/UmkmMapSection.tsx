"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { useState, useMemo, useEffect } from "react";
import { PRODUCTS, type Product } from "@/data/umkm";

const SIDEBAR_WIDTH = 360;

/* MapLibre requires browser APIs — disable SSR */
const UmkmMap = dynamic(() => import("@/components/UmkmMap"), {
  ssr: false,
  loading: () => (
    <div className="h-full w-full bg-[#e8ede8] animate-pulse" />
  ),
});

/* ── Search bar ─────────────────────────────────────────────── */
function SearchBar({
  value,
  onChange,
}: {
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div className="relative">
      <svg
        className="absolute left-3 top-1/2 -translate-y-1/2 text-[#888] pointer-events-none"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
        <path d="M20 20l-3-3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
      <input
        type="text"
        placeholder="Cari UMKM..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full pl-9 pr-4 py-2.5 text-[14px] font-sans bg-white border border-[#e0e0e0] rounded-lg focus:outline-none focus:border-[#1D392B] focus:ring-1 focus:ring-[#1D392B] transition-colors placeholder:text-[#aaa]"
      />
      {value && (
        <button
          onClick={() => onChange("")}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-[#aaa] hover:text-[#555] transition-colors"
          aria-label="Hapus pencarian"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
            <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>
      )}
    </div>
  );
}

/* ── Sidebar product card ───────────────────────────────────── */
function ProductCard({
  product,
  isSelected,
  onClick,
}: {
  product: Product;
  isSelected: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`w-full text-left flex gap-3 p-4 border-b border-[#f0f0f0] transition-colors duration-150 focus:outline-none ${
        isSelected
          ? "bg-[#e8f0e8] border-l-[5px] border-l-[#1D392B] hover:bg-[#deeade]"
          : "border-l-[5px] border-l-transparent hover:bg-[#f5f8f5]"
      }`}
    >
      {/* Thumbnail */}
      <div className="shrink-0 w-[60px] h-[60px] rounded-[8px] overflow-hidden bg-[#e8ede8]">
        <Image
          src={product.image}
          alt={product.name}
          width={60}
          height={60}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Text */}
      <div className="flex flex-col gap-0.5 min-w-0">
        <p
          style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
          className={`font-bold text-[14px] leading-[1.3] truncate ${
            isSelected ? "text-[#1D392B]" : "text-[#222]"
          }`}
        >
          {product.name}
        </p>
        <p className="text-[11px] font-semibold text-[#37644d] tracking-[0.5px]">
          {product.category}
        </p>
        <p className="text-[12px] font-semibold text-[#1D392B] mt-0.5">{product.price}</p>
        <p className="text-[11px] text-[#888] leading-[1.4] line-clamp-2 mt-0.5">
          {product.address}
        </p>
      </div>
    </button>
  );
}

/* ── Main dashboard ─────────────────────────────────────────── */
export default function UmkmMapSection() {
  const [selectedSlug, setSelectedSlug] = useState<string | null>(null);
  const [search, setSearch] = useState("");
  /* Default closed on mobile — sidebar at 360px covers most of a ~390px screen */
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  useEffect(() => {
    if (window.innerWidth < 768) setIsSidebarOpen(false);
  }, []);

  const filtered = useMemo(() => {
    if (!search.trim()) return PRODUCTS;
    const q = search.toLowerCase();
    return PRODUCTS.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.address.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q),
    );
  }, [search]);

  function handleMarkerClick(slug: string) {
    setSelectedSlug((prev) => (prev === slug ? null : slug));
    /* On mobile, auto-close sidebar so the marker + popup are fully visible */
    if (window.innerWidth < 768) setIsSidebarOpen(false);
  }

  return (
    <section
      className="relative overflow-hidden h-full"
      aria-label="Peta digital UMKM"
    >
      {/* ── Sidebar — slides over the map, no layout shift ── */}
      <div
        className="absolute left-0 top-0 h-full z-20 flex flex-col bg-white border-r border-[#e0e0e0] overflow-hidden shadow-[4px_0_16px_rgba(0,0,0,0.08)]"
        style={{
          width: 360,
          transform: isSidebarOpen ? "translateX(0)" : "translateX(-360px)",
          transition: "transform 300ms ease-in-out",
        }}
      >
        {/* Header */}
        <div className="px-4 pt-5 pb-3 border-b border-[#f0f0f0] shrink-0">
          <p className="font-sans font-semibold text-[11px] text-[#37644d] tracking-[1.5px] mb-1">
            PETA SEBARAN
          </p>
          <h2
            style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
            className="font-bold text-[20px] text-[#1D392B] leading-[1.3]"
          >
            UMKM Desa Balerejo
          </h2>
        </div>

        {/* Search */}
        <div className="px-4 py-3 border-b border-[#f0f0f0] shrink-0">
          <SearchBar value={search} onChange={setSearch} />
        </div>

        {/* Result count */}
        <div className="px-4 py-2 shrink-0">
          <p className="text-[12px] text-[#888] font-sans">
            {filtered.length === PRODUCTS.length
              ? `${PRODUCTS.length} UMKM tersedia`
              : `${filtered.length} dari ${PRODUCTS.length} hasil`}
          </p>
        </div>

        {/* List — scrollable */}
        <div className="flex-1 overflow-y-auto">
          {filtered.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-40 gap-2 text-center px-6">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-[#ccc]">
                <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.5" />
                <path d="M20 20l-3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
              <p className="text-[13px] text-[#aaa] font-sans">Tidak ada hasil ditemukan</p>
            </div>
          ) : (
            filtered.map((product) => (
              <ProductCard
                key={product.slug}
                product={product}
                isSelected={product.slug === selectedSlug}
                onClick={() => handleMarkerClick(product.slug)}
              />
            ))
          )}
        </div>

        {/* Selected: quick detail link — outside scrollable area so it stays pinned */}
        {selectedSlug && (
          <div className="shrink-0 px-4 py-3 border-t border-[#e0e0e0] bg-white">
            <Link
              href={`/${selectedSlug}`}
              className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-[#1D392B] text-white text-[13px] font-semibold px-4 py-2.5 hover:opacity-90 transition-opacity"
            >
              Lihat halaman produk
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        )}
      </div>

      {/* ── Map — always full size, sidebar overlays it ── */}
      <div className="absolute inset-0 overflow-hidden">
        <UmkmMap
          selectedSlug={selectedSlug}
          onMarkerClick={handleMarkerClick}
          onPopupClose={() => setSelectedSlug(null)}
          sidebarOpen={isSidebarOpen}
          sidebarWidth={SIDEBAR_WIDTH}
        />

        {/* Toggle tab — vertically centered, hugs the sidebar's right edge */}
        <button
          type="button"
          onClick={() => setIsSidebarOpen((prev) => !prev)}
          aria-label={isSidebarOpen ? "Sembunyikan daftar" : "Tampilkan daftar"}
          className="absolute z-30 hover:bg-[#f0f4f0] transition-colors"
          style={{
            left: isSidebarOpen ? 360 : 0,
            top: "50%",
            transform: "translateY(-50%)",
            transition: "left 300ms ease-in-out",
            width: 20,
            height: 52,
            background: "white",
            border: "1px solid #e0e0e0",
            borderLeft: "none",
            borderRadius: "0 8px 8px 0",
            boxShadow: "2px 2px 8px rgba(0,0,0,0.08)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
          }}
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
            {isSidebarOpen ? (
              <path d="M11 17l-5-5 5-5M17 17l-5-5 5-5" stroke="#1D392B" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            ) : (
              <path d="M13 17l5-5-5-5M7 17l5-5-5-5" stroke="#1D392B" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            )}
          </svg>
        </button>

        {/* Legend — bottom-12 (48px) clears MapLibre's attribution bar */}
        <div className="absolute bottom-12 right-4 z-20 bg-white rounded-lg px-3 py-2 shadow-md border border-[#e0e0e0] flex flex-col gap-1.5">
          <p className="text-[11px] font-semibold text-[#555] tracking-[0.5px]">LEGENDA</p>
          <div className="flex items-center gap-2">
            <svg width="14" height="18" viewBox="0 0 28 36" fill="none">
              <path d="M14 0C6.268 0 0 6.268 0 14c0 9.333 14 22 14 22S28 23.333 28 14C28 6.268 21.732 0 14 0z" fill="#1D392B" />
              <circle cx="14" cy="14" r="5.5" fill="#DCBe82" />
            </svg>
            <span className="text-[11px] text-[#555] font-sans">UMKM Desa</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-[14px] h-[3px] bg-[#c0392b] rounded-full" />
            <span className="text-[11px] text-[#555] font-sans">Batas wilayah</span>
          </div>
        </div>
      </div>
    </section>
  );
}
