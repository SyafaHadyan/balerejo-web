import React from "react";

const SEP = "#b2ada3";

const KEPALA_DESA = { name: "SUPRANS", role: "Kepala Desa" } as const;
const SEKRETARIS  = { name: "SUWARDIONO, S.Sos", role: "Sekretaris Desa" } as const;

/* Kasi — cabang tersendiri langsung dari Kepala Desa, digambar sebagai
   satu kelompok bertumpuk di sisi kiri (sesuai bagan RPJMDes asli). */
const KASI = [
  { name: "GUNADI",        role: "Kasi Pemerintahan" },
  { name: "WAHYUDIONO",    role: "Kasi Kesejahteraan" },
  { name: "KATENI WIYONO", role: "Kasi Pelayanan" },
] as const;

/* Kaur — bawahan Sekretaris, bukan Kepala Desa langsung. */
const KAUR = [
  { name: "FEBRI FADILAH RUDIANTO, S.Kom",  role: "Kaur Perencanaan" },
  { name: "ANANG PRASTYO SHOFIRUDIN, M.Pd", role: "Kaur Umum dan TU" },
  { name: "YULI TRISNAWATI, S.Pd",          role: "Kaur Keuangan" },
] as const;

/* Kamituwo — cabang terpisah, sejajar dengan Kasi & Sekretaris, sama-sama
   langsung dari Kepala Desa. Disatukan dalam satu baris cabang (bukan
   baris terpisah di bawahnya) supaya sambungannya selalu presisi terlepas
   dari tinggi cabang Kasi/Sekretaris yang berbeda-beda. */
const KAMITUWO = [
  { name: "SUMAJI",       role: "Kamituwo Balerejo I" },
  { name: "EBDI SUPRIYO", role: "Kamituwo Balerejo II" },
] as const;

type Person = { name: string; role: string };

function VLine({ h = 28 }: { h?: number }) {
  return (
    <div
      className="w-[3px] shrink-0"
      style={{ height: h, backgroundColor: SEP }}
      aria-hidden="true"
    />
  );
}

function OrgCard({ name, role }: Person) {
  return (
    <div className="bg-surface border border-divider rounded-[11px] w-[220px] flex flex-col items-center gap-[11px] px-[13px] py-[19px] shrink-0 overflow-hidden">
      <div className="w-[53px] h-[53px] rounded-full bg-accent/30 shrink-0" />
      <div className="flex flex-col items-center gap-[7px] text-center">
        <p className="font-heading font-bold text-[17px] leading-[1.3] text-primary">
          {name}
        </p>
        <p className="font-sans text-[14px] leading-[1.5] text-primary">
          {role}
        </p>
      </div>
    </div>
  );
}

/* Sekelompok anak yang bercabang dari satu palang mendatar: palang
   membentang dari tengah anak pertama sampai tengah anak terakhir, dengan
   cabang pendek turun ke tiap anak. Anak boleh berupa konten apa pun —
   kartu tunggal maupun sub-cabang lain — dan lebar tiap anak boleh
   berbeda-beda; garis penghubungnya tetap presisi karena dihitung
   per-anak, bukan mengandalkan lebar seragam. */
function BranchGroup({ items }: { items: React.ReactNode[] }) {
  const n = items.length;
  return (
    <div className="flex flex-nowrap items-start justify-center">
      {items.map((content, i) => (
        <div key={i} className="relative flex flex-col items-center px-[14px]">
          {n > 1 && (
            <div
              className="absolute top-0 h-[3px]"
              style={{
                backgroundColor: SEP,
                left: i === 0 ? "50%" : 0,
                right: i === n - 1 ? "50%" : 0,
              }}
              aria-hidden="true"
            />
          )}
          <VLine h={22} />
          {content}
        </div>
      ))}
    </div>
  );
}

/* Sama seperti BranchGroup, tapi dengan garis batang sendiri di atasnya
   — dipakai untuk cabang paling atas yang turun langsung dari kartu di
   atasnya (mis. dari Kepala Desa). */
function BranchRow({ items }: { items: React.ReactNode[] }) {
  return (
    <div className="flex flex-col items-center w-full">
      <VLine />
      <BranchGroup items={items} />
    </div>
  );
}

/* 3 Kasi bertumpuk vertikal — satu kelompok/cabang. */
function KasiStack() {
  return (
    <div className="flex flex-col items-center gap-[10px]">
      {KASI.map((p, i) => (
        <React.Fragment key={p.name}>
          {i > 0 && <VLine h={10} />}
          <OrgCard {...p} />
        </React.Fragment>
      ))}
    </div>
  );
}

/* Sekretaris beserta cabangnya sendiri ke 3 Kaur — satu kelompok/cabang. */
function SekretarisBranch() {
  return (
    <div className="flex flex-col items-center">
      <OrgCard {...SEKRETARIS} />
      <BranchRow items={KAUR.map((p) => <OrgCard key={p.name} {...p} />)} />
    </div>
  );
}

/* 2 Kamituwo berdampingan — satu kelompok/cabang. */
function KamituwoGroup() {
  return <BranchGroup items={KAMITUWO.map((p) => <OrgCard key={p.name} {...p} />)} />;
}

/* Satu baris pada bagan-pohon mobile: avatar kecil + nama + jabatan,
   dengan cabang pendek horizontal yang menyambung ke garis pemandu
   vertikal milik induknya (pola file-tree/folder-tree yang umum dan
   sudah dikenal, jauh lebih ringkas daripada kartu besar bertumpuk). */
function TreeNode({ name, role, isRoot = false }: Person & { isRoot?: boolean }) {
  return (
    <div className={`relative flex items-center gap-3 py-[10px] ${isRoot ? "" : "pl-5"}`}>
      {!isRoot && (
        <div
          className="absolute left-0 top-1/2 w-5 h-[2px] -translate-y-1/2"
          style={{ backgroundColor: SEP }}
          aria-hidden="true"
        />
      )}
      <div className="w-9 h-9 rounded-full bg-accent/30 shrink-0 border-2 border-white ring-1 ring-divider" />
      <div className="flex flex-col min-w-0">
        <span className="font-heading font-bold text-[13px] leading-[1.3] text-primary truncate">
          {name}
        </span>
        <span className="font-sans text-[11px] leading-[1.4] text-muted">
          {role}
        </span>
      </div>
    </div>
  );
}

/* Bungkus sekelompok TreeNode dengan garis pemandu vertikal di kiri —
   menandai bahwa semuanya adalah anak dari node yang sama di atasnya.
   Bisa disarangkan (Kaur di dalam Sekretaris di dalam Kepala Desa). */
function TreeChildren({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col border-l-2 ml-[17px] pl-[3px]" style={{ borderColor: SEP }}>
      {children}
    </div>
  );
}

function MobileTree() {
  return (
    <div className="w-full max-w-[360px] mx-auto">
      <TreeNode {...KEPALA_DESA} isRoot />
      <TreeChildren>
        {KASI.map((p) => (
          <TreeNode key={p.name} {...p} />
        ))}
        <TreeNode {...SEKRETARIS} />
        <TreeChildren>
          {KAUR.map((p) => (
            <TreeNode key={p.name} {...p} />
          ))}
        </TreeChildren>
        {KAMITUWO.map((p) => (
          <TreeNode key={p.name} {...p} />
        ))}
      </TreeChildren>
    </div>
  );
}

export default function OrgChartSection() {
  return (
    <section className="px-5 md:px-[106px] py-[53px] flex flex-col gap-[40px]" aria-label="Struktur pemerintahan">
      <h2 className="font-heading font-bold text-[35px] leading-[1.3] text-primary">
        Struktur Pemerintahan
      </h2>

      <div className="flex flex-col items-center w-full">
        {/* Desktop/tablet: kartu besar dengan satu baris cabang berisi Kasi,
            Sekretaris (dengan Kaur di bawahnya), dan Kamituwo — ketiganya
            sejajar, sama-sama langsung dari Kepala Desa. */}
        <div className="hidden md:flex flex-col items-center w-full overflow-x-auto">
          <OrgCard {...KEPALA_DESA} />
          <BranchRow
            items={[
              <KasiStack key="kasi" />,
              <SekretarisBranch key="sekretaris" />,
              <KamituwoGroup key="kamituwo" />,
            ]}
          />
        </div>

        {/* Mobile: bagan-pohon ringkas dengan garis pemandu berjenjang */}
        <div className="md:hidden w-full">
          <MobileTree />
        </div>
      </div>
    </section>
  );
}
