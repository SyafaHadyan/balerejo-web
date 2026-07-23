import { PRODUCTS } from "@/data/umkm";

const total     = PRODUCTS.length;
const kategori  = new Set(PRODUCTS.map((p) => p.category)).size;

const STATS = [
  { value: String(total),    label: "Produk Terdaftar" },
  { value: String(total),    label: "Pelaku UMKM" },
  { value: String(kategori), label: "Kategori Produk" },
  { value: "100%",           label: "Produk Asli Desa" },
];

export default function UmkmStatsBar() {
  return (
    <div
      className="bg-surface flex flex-wrap items-center justify-center gap-y-6 py-[28px] md:py-0 md:h-[100px] overflow-hidden"
      aria-label="Statistik UMKM"
    >
      {STATS.map(({ value, label }, i) => (
        <div
          key={i}
          className="flex flex-col items-center gap-[4px] w-1/2 md:w-[360px]"
        >
          <p className="font-heading font-bold text-[32px] text-primary leading-none">
            {value}
          </p>
          <p className="font-sans text-[12px] text-muted">{label}</p>
        </div>
      ))}
    </div>
  );
}
