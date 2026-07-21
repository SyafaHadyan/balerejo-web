import React from "react";

/* ─────────────────────── DATA ───────────────────────
   Sumber: Profil Desa Balerejo — Bab Potensi (3.1.1 Sumber Daya Alam).
   Baris komoditas yang datanya kosong/terpotong pada dokumen sumber
   (mis. Jagung, Tomat, Alpukat, Pisang, Kopi, Pinang, Tembakau) tidak
   disertakan karena tidak ada angka luas tanam/hasil yang bisa ditampilkan. */

const TANAMAN_PANGAN = [
  { name: process.env.NEXT_PUBLIC_TANPANG_1_NAME ?? "Kacang Kedelai", luas: process.env.NEXT_PUBLIC_TANPANG_1_LUAS ?? "567 Ha", hasil: process.env.NEXT_PUBLIC_TANPANG_1_HASIL ?? "5 Ton/Ha"   },
  { name: process.env.NEXT_PUBLIC_TANPANG_2_NAME ?? "Kacang Tanah",   luas: process.env.NEXT_PUBLIC_TANPANG_2_LUAS ?? "502 Ha", hasil: process.env.NEXT_PUBLIC_TANPANG_2_HASIL ?? "3 Ton/Ha"   },
  { name: process.env.NEXT_PUBLIC_TANPANG_3_NAME ?? "Kubis",          luas: process.env.NEXT_PUBLIC_TANPANG_3_LUAS ?? "352 Ha", hasil: process.env.NEXT_PUBLIC_TANPANG_3_HASIL ?? "6 Ton/Ha"   },
  { name: process.env.NEXT_PUBLIC_TANPANG_4_NAME ?? "Jagung",         luas: process.env.NEXT_PUBLIC_TANPANG_4_LUAS ?? "120 Ha", hasil: process.env.NEXT_PUBLIC_TANPANG_4_HASIL ?? "4 Ton/Ha"   },
  { name: process.env.NEXT_PUBLIC_TANPANG_5_NAME ?? "Singkong",       luas: process.env.NEXT_PUBLIC_TANPANG_5_LUAS ?? "45 Ha",  hasil: process.env.NEXT_PUBLIC_TANPANG_5_HASIL ?? "12 Ton/Ha"  },
  { name: process.env.NEXT_PUBLIC_TANPANG_6_NAME ?? "Cabe",           luas: process.env.NEXT_PUBLIC_TANPANG_6_LUAS ?? "52 Ha",  hasil: process.env.NEXT_PUBLIC_TANPANG_6_HASIL ?? "4 Ton/Ha"   },
  { name: process.env.NEXT_PUBLIC_TANPANG_7_NAME ?? "Bawang Merah",   luas: process.env.NEXT_PUBLIC_TANPANG_7_LUAS ?? "28 Ha",  hasil: process.env.NEXT_PUBLIC_TANPANG_7_HASIL ?? "6 Ton/Ha"   },
  { name: process.env.NEXT_PUBLIC_TANPANG_8_NAME ?? "Tomat",          luas: process.env.NEXT_PUBLIC_TANPANG_8_LUAS ?? "22 Ha",  hasil: process.env.NEXT_PUBLIC_TANPANG_8_HASIL ?? "8 Ton/Ha"   },
  { name: process.env.NEXT_PUBLIC_TANPANG_9_NAME ?? "Padi",           luas: process.env.NEXT_PUBLIC_TANPANG_9_LUAS ?? "35 Ha",  hasil: process.env.NEXT_PUBLIC_TANPANG_9_HASIL ?? "1,4 Ton/Ha" },
];

const BUAH_BUAHAN = [
  { name: process.env.NEXT_PUBLIC_BUAH_1_NAME ?? "Mangga", luas: process.env.NEXT_PUBLIC_BUAH_1_LUAS ?? "20 Ha", hasil: process.env.NEXT_PUBLIC_BUAH_1_HASIL ?? "5 Ton/Ha"  },
  { name: process.env.NEXT_PUBLIC_BUAH_2_NAME ?? "Melon",  luas: process.env.NEXT_PUBLIC_BUAH_2_LUAS ?? "15 Ha", hasil: process.env.NEXT_PUBLIC_BUAH_2_HASIL ?? "8 Ton/Ha"  },
  { name: process.env.NEXT_PUBLIC_BUAH_3_NAME ?? "Pepaya", luas: process.env.NEXT_PUBLIC_BUAH_3_LUAS ?? "10 Ha", hasil: process.env.NEXT_PUBLIC_BUAH_3_HASIL ?? "10 Ton/Ha" },
  { name: process.env.NEXT_PUBLIC_BUAH_4_NAME ?? "Durian", luas: process.env.NEXT_PUBLIC_BUAH_4_LUAS ?? "5 Ha",  hasil: process.env.NEXT_PUBLIC_BUAH_4_HASIL ?? "5 Ton/Ha"  },
];

const PERKEBUNAN_RAKYAT = [
  { name: process.env.NEXT_PUBLIC_KEBUN_1_NAME ?? "Kelapa", luas: process.env.NEXT_PUBLIC_KEBUN_1_LUAS ?? "30 Ha", hasil: process.env.NEXT_PUBLIC_KEBUN_1_HASIL ?? "15 Ton/Ha"  },
  { name: process.env.NEXT_PUBLIC_KEBUN_2_NAME ?? "Tebu",   luas: process.env.NEXT_PUBLIC_KEBUN_2_LUAS ?? "20 Ha", hasil: process.env.NEXT_PUBLIC_KEBUN_2_HASIL ?? "1,5 Ton/Ha" },
];

function sumHa(data: { luas: string }[]) {
  return data.reduce((sum, d) => sum + parseFloat(d.luas), 0);
}

const TOTAL_TANAMAN_PANGAN = sumHa(TANAMAN_PANGAN);
const TOTAL_BUAH           = sumHa(BUAH_BUAHAN);
const TOTAL_PERKEBUNAN     = sumHa(PERKEBUNAN_RAKYAT);

/* ─────────────────────── ICONS: kategori ─────────────────────── */

function IconTanamanPangan() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="24" cy="24" r="24" fill="#E8F5EE"/>
      <path d="M24 34V20" stroke="#1D392B" strokeWidth="1.8" strokeLinecap="round"/>
      <path d="M24 22c0-5 4-8 8-8 0 5-4 8-8 8z" fill="#37644d"/>
      <path d="M24 26c0-5-4-8-8-8 0 5 4 8 8 8z" fill="#5a9e75"/>
      <path d="M16 34h16" stroke="#1D392B" strokeWidth="1.8" strokeLinecap="round"/>
    </svg>
  );
}

function IconBuah() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="24" cy="24" r="24" fill="#FFF3E0"/>
      <path d="M24 20c-5 0-8 3.8-8 8.2 0 4 3 7.3 6.5 7.3.9 0 1.7-.3 2.5-.9.8.6 1.6.9 2.5.9 3.5 0 6.5-3.3 6.5-7.3 0-4.4-3-8.2-8-8.2z" fill="#E65100" opacity="0.85"/>
      <path d="M24 20v-4" stroke="#5D4037" strokeWidth="1.6" strokeLinecap="round"/>
      <path d="M24 16c0-2 1.8-3 3.5-3-.3 2-1.8 3-3.5 3z" fill="#2E7D32"/>
    </svg>
  );
}

function IconPerkebunan() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="24" cy="24" r="24" fill="#EFEBE9"/>
      <circle cx="24" cy="18" r="8" fill="#37644d"/>
      <path d="M24 26v10" stroke="#5D4037" strokeWidth="2" strokeLinecap="round"/>
      <path d="M18 36h12" stroke="#5D4037" strokeWidth="1.8" strokeLinecap="round"/>
    </svg>
  );
}

/* ─────────────────────── ICONS: per komoditas ─────────────────────── */

function IconKedelai() {
  return (
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="22" cy="22" r="22" fill="#E8F5E9"/>
      <path d="M14 18c0-4 3-7 8-7s8 3 8 7-3 12-8 12-8-8-8-12z" stroke="#2E7D32" strokeWidth="1.6" fill="none"/>
      <circle cx="22" cy="16" r="2.1" fill="#2E7D32"/>
      <circle cx="22" cy="22" r="2.1" fill="#2E7D32"/>
      <circle cx="22" cy="28" r="2.1" fill="#2E7D32"/>
    </svg>
  );
}

function IconKacangTanah() {
  return (
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="22" cy="22" r="22" fill="#FFF3E0"/>
      <path
        d="M22 12c-3 0-5 2.2-5 5 0 2 1 3.5 2.5 4.5-1.5 1-2.5 2.5-2.5 4.5 0 2.8 2 5 5 5s5-2.2 5-5c0-2-1-3.5-2.5-4.5 1.5-1 2.5-2.5 2.5-4.5 0-2.8-2-5-5-5z"
        stroke="#8D6E63" strokeWidth="1.6" fill="none"
      />
    </svg>
  );
}

function IconKubis() {
  return (
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="22" cy="22" r="22" fill="#E8F5E9"/>
      <circle cx="22" cy="24" r="10" stroke="#558B2F" strokeWidth="1.6" fill="none"/>
      <circle cx="22" cy="24" r="6" stroke="#7CB342" strokeWidth="1.4" fill="none"/>
      <circle cx="22" cy="24" r="2.4" fill="#9CCC65"/>
      <path d="M14 18c2-3 5-4 8-4M30 18c-2-3-5-4-8-4" stroke="#558B2F" strokeWidth="1.4" fill="none" strokeLinecap="round"/>
    </svg>
  );
}

function IconCabe() {
  return (
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="22" cy="22" r="22" fill="#FFEBEE"/>
      <path d="M16 14c1-1 2-1 2 0 0 2 2 2 4 2 5 0 8 4 8 9 0 5-3 8-6 8-5 0-9-5-9-11 0-3 .5-6 1-8z" fill="#C62828" opacity="0.85"/>
      <path d="M16 14c1-2 2-3 3-3" stroke="#2E7D32" strokeWidth="1.6" strokeLinecap="round"/>
    </svg>
  );
}

function IconPadi() {
  return (
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="22" cy="22" r="22" fill="#FFF8E1"/>
      <path d="M22 32V16" stroke="#8D6E63" strokeWidth="1.6" strokeLinecap="round"/>
      <path d="M22 16c-3-2-3-6 0-8" stroke="#F9A825" strokeWidth="1.4" fill="none" strokeLinecap="round"/>
      <path d="M22 20c3-1 4-4 3-7" stroke="#F9A825" strokeWidth="1.4" fill="none" strokeLinecap="round"/>
      <path d="M22 24c-3-1-4-4-3-7" stroke="#F9A825" strokeWidth="1.4" fill="none" strokeLinecap="round"/>
    </svg>
  );
}

function IconMangga() {
  return (
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="22" cy="22" r="22" fill="#FFF3E0"/>
      <path d="M22 32c-6 0-9-5-9-11 0-5 4-9 9-9s9 3 9 8c0 7-3 12-9 12z" fill="#FB8C00" opacity="0.85"/>
      <path d="M22 12c0-2 1.5-3.5 3.5-3.5-.3 2-1.5 3.5-3.5 3.5z" fill="#2E7D32"/>
    </svg>
  );
}

function IconDurian() {
  return (
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="22" cy="22" r="22" fill="#F1F8E9"/>
      <circle cx="22" cy="23" r="9" fill="#8BC34A" opacity="0.7"/>
      <path
        d="M22 10v4M13 14l2.8 2.8M31 14l-2.8 2.8M10 23h4M34 23h-4M13 32l2.8-2.8M31 32l-2.8-2.8M22 36v-4"
        stroke="#33691E" strokeWidth="1.6" strokeLinecap="round"
      />
    </svg>
  );
}

function IconKelapa() {
  return (
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="22" cy="22" r="22" fill="#EFEBE9"/>
      <circle cx="22" cy="23" r="10" stroke="#6D4C41" strokeWidth="1.8" fill="none"/>
      <circle cx="19" cy="20" r="1.3" fill="#6D4C41"/>
      <circle cx="25" cy="20" r="1.3" fill="#6D4C41"/>
      <path d="M22 22v3" stroke="#6D4C41" strokeWidth="1.3" strokeLinecap="round"/>
      <path d="M17 12c2-2 5-2 7 0" stroke="#558B2F" strokeWidth="1.6" fill="none" strokeLinecap="round"/>
    </svg>
  );
}

function IconTebu() {
  return (
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="22" cy="22" r="22" fill="#E8F5E9"/>
      <path d="M22 32V12" stroke="#689F38" strokeWidth="2" strokeLinecap="round"/>
      <path d="M17 16h10M17 22h10M17 28h10" stroke="#33691E" strokeWidth="1.3"/>
      <path d="M22 12c1.5-2 4-3 6-2.5-1 2-3 3.5-6 2.5z" fill="#558B2F"/>
    </svg>
  );
}

function IconJagung() {
  return (
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="22" cy="22" r="22" fill="#FFFDE7"/>
      <path d="M22 33V16" stroke="#8D6E63" strokeWidth="1.8" strokeLinecap="round"/>
      <rect x="16" y="16" width="12" height="14" rx="3" fill="#F9A825" opacity="0.85"/>
      <path d="M16 20h12M16 24h12" stroke="#F57F17" strokeWidth="1" opacity="0.6"/>
      <path d="M22 16c-2-2-2-5 0-7" stroke="#558B2F" strokeWidth="1.6" fill="none" strokeLinecap="round"/>
      <path d="M22 16c2-2 2-5 0-7" stroke="#558B2F" strokeWidth="1.6" fill="none" strokeLinecap="round"/>
    </svg>
  );
}

function IconSingkong() {
  return (
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="22" cy="22" r="22" fill="#EFEBE9"/>
      <path d="M22 12v20" stroke="#5D4037" strokeWidth="1.8" strokeLinecap="round"/>
      <ellipse cx="16" cy="27" rx="5" ry="2.5" fill="#8D6E63" opacity="0.8" transform="rotate(-15 16 27)"/>
      <ellipse cx="28" cy="29" rx="5" ry="2.5" fill="#6D4C41" opacity="0.8" transform="rotate(10 28 29)"/>
      <ellipse cx="20" cy="31" rx="4" ry="2" fill="#795548" opacity="0.7" transform="rotate(-5 20 31)"/>
      <path d="M22 14c-3-2-5-1-6 2" stroke="#558B2F" strokeWidth="1.4" fill="none" strokeLinecap="round"/>
      <path d="M22 14c3-2 5-1 6 2" stroke="#558B2F" strokeWidth="1.4" fill="none" strokeLinecap="round"/>
    </svg>
  );
}

function IconBawangMerah() {
  return (
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="22" cy="22" r="22" fill="#FCE4EC"/>
      <path d="M22 32c-5 0-8-4-8-9 0-4 2-7 5-8l3-5 3 5c3 1 5 4 5 8 0 5-3 9-8 9z" fill="#E91E63" opacity="0.7"/>
      <path d="M22 10v-3" stroke="#558B2F" strokeWidth="1.6" strokeLinecap="round"/>
    </svg>
  );
}

function IconTomat() {
  return (
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="22" cy="22" r="22" fill="#FFEBEE"/>
      <circle cx="22" cy="25" r="10" fill="#E53935" opacity="0.85"/>
      <path d="M18 17c1-2 4-2 6 0M22 17v-4" stroke="#2E7D32" strokeWidth="1.6" fill="none" strokeLinecap="round"/>
      <path d="M22 17c-2-1-3-1-4 0" stroke="#558B2F" strokeWidth="1.4" fill="none" strokeLinecap="round"/>
      <path d="M22 17c2-1 3-1 4 0" stroke="#558B2F" strokeWidth="1.4" fill="none" strokeLinecap="round"/>
    </svg>
  );
}

function IconMelon() {
  return (
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="22" cy="22" r="22" fill="#E8F5E9"/>
      <ellipse cx="22" cy="24" rx="11" ry="9" fill="#66BB6A" opacity="0.75"/>
      <path d="M12 24c3-4 6-5 10-5M32 24c-3-4-6-5-10-5" stroke="#2E7D32" strokeWidth="1.2" fill="none" strokeLinecap="round"/>
      <path d="M22 15v-3" stroke="#558B2F" strokeWidth="1.6" strokeLinecap="round"/>
    </svg>
  );
}

function IconPepaya() {
  return (
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="22" cy="22" r="22" fill="#FFF3E0"/>
      <path d="M22 12c-5 0-7 4-7 9 0 6 3 12 7 12s7-6 7-12c0-5-2-9-7-9z" fill="#FF8F00" opacity="0.8"/>
      <path d="M22 12v-4" stroke="#558B2F" strokeWidth="1.6" strokeLinecap="round"/>
      <path d="M19 10c0-2 1.5-3 3-3" stroke="#558B2F" strokeWidth="1.3" fill="none" strokeLinecap="round"/>
    </svg>
  );
}

const KOMODITAS_ICONS: Record<string, React.ReactNode> = {
  "Kacang Kedelai": <IconKedelai />,
  "Kacang Tanah":   <IconKacangTanah />,
  "Kubis":          <IconKubis />,
  "Jagung":         <IconJagung />,
  "Singkong":       <IconSingkong />,
  "Cabe":           <IconCabe />,
  "Bawang Merah":   <IconBawangMerah />,
  "Tomat":          <IconTomat />,
  "Padi":           <IconPadi />,
  "Mangga":         <IconMangga />,
  "Melon":          <IconMelon />,
  "Pepaya":         <IconPepaya />,
  "Durian":         <IconDurian />,
  "Kelapa":         <IconKelapa />,
  "Tebu":           <IconTebu />,
};

/* ─────────────────────── UI COMPONENTS ─────────────────────── */

const CARD = "bg-white border border-[#e5e5e5] rounded-[16px] shadow-[0_2px_8px_rgba(0,0,0,0.06)]";

function SubSection({ id, title, icon, children }: { id: string; title: string; icon: React.ReactNode; children: React.ReactNode }) {
  return (
    <section
      aria-labelledby={id}
      className="px-5 md:px-[80px] py-[40px] border-t border-divider flex flex-col gap-6"
    >
      <div className="flex items-center gap-4">
        {icon}
        <h3 id={id} className="font-heading font-bold text-[24px] leading-[1.3] text-primary flex items-center gap-3">
          <span className="w-[4px] h-[28px] bg-accent rounded-full inline-block" />
          {title}
        </h3>
      </div>
      {children}
    </section>
  );
}

function CommodityIconGrid({ data }: { data: { name: string; luas: string; hasil: string }[] }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 w-full">
      {data.map(({ name, luas, hasil }) => (
        <div key={name} className={`${CARD} p-4 flex flex-col items-center text-center gap-2 hover:shadow-md transition-shadow`}>
          {KOMODITAS_ICONS[name] ?? <IconTanamanPangan />}
          <div className="flex flex-col items-center">
            <span className="font-sans font-semibold text-[13px] text-primary">{name}</span>
            <span className="font-sans text-[12px] text-[#37644d] font-semibold mt-0.5">{luas}</span>
            <span className="font-sans text-[11px] text-muted">{hasil}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

function CommodityTable({ data }: { data: { name: string; luas: string; hasil: string }[] }) {
  return (
    <div className={`${CARD} p-6 w-full overflow-x-auto`}>
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="border-b border-divider">
            <th className="font-sans text-[13px] text-muted font-semibold pb-3">Komoditas</th>
            <th className="font-sans text-[13px] text-muted font-semibold pb-3 text-right">Luas Tanam</th>
            <th className="font-sans text-[13px] text-muted font-semibold pb-3 text-right">Hasil</th>
          </tr>
        </thead>
        <tbody>
          {data.map(({ name, luas, hasil }) => (
            <tr key={name} className="border-b border-divider last:border-0">
              <td className="py-3 font-sans text-[14px] text-primary flex items-center gap-2">
                <span className="[&>svg]:w-6 [&>svg]:h-6">{KOMODITAS_ICONS[name]}</span>
                {name}
              </td>
              <td className="py-3 text-right font-sans text-[14px] font-semibold text-[#37644d]">{luas}</td>
              <td className="py-3 text-right font-sans text-[14px] text-muted">{hasil}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/* ─────────────────────── MAIN SECTION ─────────────────────── */

export default function PotensiSection() {
  return (
    <section aria-label="Potensi desa" className="flex flex-col bg-surface">

      {/* ══════ HERO ══════ */}
      <div className="px-5 md:px-[80px] pt-[50px] pb-[30px]">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-14">
          <div className="flex-1 min-w-0">
            <h2 className="font-heading font-bold text-[32px] md:text-[42px] leading-[1.15] text-primary uppercase tracking-tight">
              Potensi<br />Desa
            </h2>
            <p className="mt-4 font-sans text-[17px] md:text-[18px] leading-[1.7] text-muted max-w-[520px]">
              Gambaran sumber daya alam Desa Balerejo di sektor pertanian, buah-buahan, dan
              perkebunan rakyat — mencakup luas lahan tanam dan hasil produksi tiap komoditas.
            </p>
          </div>
          <div className="shrink-0 hidden md:flex items-center justify-center">
            <svg width="200" height="180" viewBox="0 0 200 180" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <ellipse cx="100" cy="160" rx="80" ry="12" fill="#E8F5EE" opacity="0.6"/>
              {/* Large tree */}
              <circle cx="100" cy="70" r="38" fill="#37644d" opacity="0.18"/>
              <path d="M100 160V100" stroke="#5D4037" strokeWidth="5" strokeLinecap="round"/>
              <path d="M100 105c0-10 8-17 18-17 0 10-8 17-18 17z" fill="#37644d" opacity="0.7"/>
              <path d="M100 118c0-10-8-17-18-17 0 10 8 17 18 17z" fill="#5a9e75" opacity="0.7"/>
              <path d="M100 95c0-12 10-20 22-20 0 12-10 20-22 20z" fill="#1D392B" opacity="0.55"/>
              <path d="M100 95c0-12-10-20-22-20 0 12 10 20 22 20z" fill="#37644d" opacity="0.55"/>
              {/* Small plants */}
              <path d="M50 155V135" stroke="#5D4037" strokeWidth="3" strokeLinecap="round"/>
              <path d="M50 140c0-6 5-10 10-10 0 6-5 10-10 10z" fill="#5a9e75" opacity="0.6"/>
              <path d="M50 147c0-6-5-10-10-10 0 6 5 10 10 10z" fill="#37644d" opacity="0.5"/>
              <path d="M155 155V138" stroke="#5D4037" strokeWidth="3" strokeLinecap="round"/>
              <path d="M155 143c0-6 5-9 10-9 0 6-5 9-10 9z" fill="#DCBe82" opacity="0.7"/>
              <path d="M155 150c0-5-5-9-10-9 0 5 5 9 10 9z" fill="#5a9e75" opacity="0.5"/>
              {/* Ground line */}
              <path d="M20 160h160" stroke="#E8F5EE" strokeWidth="2" opacity="0.8"/>
            </svg>
          </div>
        </div>
      </div>

      {/* ══════ RINGKASAN LUAS LAHAN ══════ */}
      <SubSection id="ringkasan-potensi" title="Ringkasan Luas Lahan" icon={null}>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-[900px]">
          <div className={`${CARD} p-5 flex items-center gap-4 hover:shadow-md transition-shadow`}>
            <IconTanamanPangan />
            <div className="flex flex-col">
              <span className="font-sans font-bold text-[24px] text-primary leading-none">{TOTAL_TANAMAN_PANGAN.toLocaleString("id-ID")} Ha</span>
              <span className="font-sans text-[13px] text-muted mt-1">Tanaman Pangan</span>
            </div>
          </div>
          <div className={`${CARD} p-5 flex items-center gap-4 hover:shadow-md transition-shadow`}>
            <IconBuah />
            <div className="flex flex-col">
              <span className="font-sans font-bold text-[24px] text-primary leading-none">{TOTAL_BUAH.toLocaleString("id-ID")} Ha</span>
              <span className="font-sans text-[13px] text-muted mt-1">Buah-buahan</span>
            </div>
          </div>
          <div className={`${CARD} p-5 flex items-center gap-4 hover:shadow-md transition-shadow`}>
            <IconPerkebunan />
            <div className="flex flex-col">
              <span className="font-sans font-bold text-[24px] text-primary leading-none">{TOTAL_PERKEBUNAN.toLocaleString("id-ID")} Ha</span>
              <span className="font-sans text-[13px] text-muted mt-1">Perkebunan Rakyat</span>
            </div>
          </div>
        </div>
      </SubSection>

      {/* ══════ TANAMAN PANGAN ══════ */}
      <SubSection id="tanaman-pangan" title="Tanaman Pangan" icon={<IconTanamanPangan />}>
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 w-full">
          <CommodityIconGrid data={TANAMAN_PANGAN} />
          <CommodityTable data={TANAMAN_PANGAN} />
        </div>
      </SubSection>

      {/* ══════ BUAH-BUAHAN ══════ */}
      <SubSection id="buah-buahan" title="Buah-buahan" icon={<IconBuah />}>
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 w-full">
          <CommodityIconGrid data={BUAH_BUAHAN} />
          <CommodityTable data={BUAH_BUAHAN} />
        </div>
      </SubSection>

      {/* ══════ PERKEBUNAN RAKYAT ══════ */}
      <SubSection id="perkebunan-rakyat" title="Perkebunan Rakyat" icon={<IconPerkebunan />}>
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 w-full">
          <CommodityIconGrid data={PERKEBUNAN_RAKYAT} />
          <CommodityTable data={PERKEBUNAN_RAKYAT} />
        </div>
      </SubSection>
    </section>
  );
}
