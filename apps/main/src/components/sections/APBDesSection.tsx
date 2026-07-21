const CARD = "bg-white border border-[#d1d1d1] rounded-[16px] flex-1 p-6 flex flex-col gap-4";
const SECTION_LABEL = "font-sans font-semibold text-[12px] tracking-[1px] uppercase text-accent";
const ROW_LABEL = "font-sans text-[14px] text-primary";
const ROW_VALUE = "font-sans font-semibold text-[14px] text-[#37644d] text-right shrink-0";
const TOTAL_LABEL = "font-sans font-semibold text-[14px] text-primary";
const TOTAL_VALUE = "font-sans font-semibold text-[14px] text-primary text-right shrink-0";
const DIVIDER = "h-px bg-divider";

const APBDES_2026 = {
  pendapatan: [
    { label: process.env.NEXT_PUBLIC_APB26_PEND_1_LABEL ?? "Pendapatan Asli Desa",           amount: process.env.NEXT_PUBLIC_APB26_PEND_1_AMT ?? "Rp 9.000.000" },
    { label: process.env.NEXT_PUBLIC_APB26_PEND_2_LABEL ?? "Dana Desa (DD)",                 amount: process.env.NEXT_PUBLIC_APB26_PEND_2_AMT ?? "Rp 1.014.740.000" },
    { label: process.env.NEXT_PUBLIC_APB26_PEND_3_LABEL ?? "Bagi Hasil Pajak dan Retribusi", amount: process.env.NEXT_PUBLIC_APB26_PEND_3_AMT ?? "Rp 89.573.382" },
    { label: process.env.NEXT_PUBLIC_APB26_PEND_4_LABEL ?? "Alokasi Dana Desa (ADD)",        amount: process.env.NEXT_PUBLIC_APB26_PEND_4_AMT ?? "Rp 647.884.500" },
    { label: process.env.NEXT_PUBLIC_APB26_PEND_5_LABEL ?? "Bunga Bank",                     amount: process.env.NEXT_PUBLIC_APB26_PEND_5_AMT ?? "Rp 2.500.000" },
  ],
  totalPendapatan: process.env.NEXT_PUBLIC_APB26_PEND_TOTAL ?? "Rp 1.763.697.882",
  belanja: [
    { label: process.env.NEXT_PUBLIC_APB26_BEL_1_LABEL ?? "Penyelenggaraan Pemerintahan", amount: process.env.NEXT_PUBLIC_APB26_BEL_1_AMT ?? "Rp 781.468.128" },
    { label: process.env.NEXT_PUBLIC_APB26_BEL_2_LABEL ?? "Pelaksanaan Pembangunan",      amount: process.env.NEXT_PUBLIC_APB26_BEL_2_AMT ?? "Rp 674.055.000" },
    { label: process.env.NEXT_PUBLIC_APB26_BEL_3_LABEL ?? "Pembinaan Kemasyarakatan",     amount: process.env.NEXT_PUBLIC_APB26_BEL_3_AMT ?? "Rp 135.764.000" },
    { label: process.env.NEXT_PUBLIC_APB26_BEL_4_LABEL ?? "Pemberdayaan Kemasyarakatan",  amount: process.env.NEXT_PUBLIC_APB26_BEL_4_AMT ?? "Rp 77.730.000" },
    { label: process.env.NEXT_PUBLIC_APB26_BEL_5_LABEL ?? "Penanggulangan Bencana",       amount: process.env.NEXT_PUBLIC_APB26_BEL_5_AMT ?? "Rp 201.815.510" },
  ],
  totalBelanja: process.env.NEXT_PUBLIC_APB26_BEL_TOTAL ?? "Rp 1.870.832.638",
  surplus:      process.env.NEXT_PUBLIC_APB26_SURPLUS    ?? "Rp 107.134.756",
  silpa:        process.env.NEXT_PUBLIC_APB26_SILPA      ?? "Rp 107.234.756",
};

const REALISASI_2025 = {
  pendapatan: [
    { label: process.env.NEXT_PUBLIC_REAL25_PEND_1_LABEL ?? "Pendapatan Asli Desa",           realisasi: process.env.NEXT_PUBLIC_REAL25_PEND_1_AMT ?? "Rp 9.000.000" },
    { label: process.env.NEXT_PUBLIC_REAL25_PEND_2_LABEL ?? "Dana Desa (DD)",                 realisasi: process.env.NEXT_PUBLIC_REAL25_PEND_2_AMT ?? "Rp 1.014.740.000" },
    { label: process.env.NEXT_PUBLIC_REAL25_PEND_3_LABEL ?? "Bagi Hasil Pajak dan Retribusi", realisasi: process.env.NEXT_PUBLIC_REAL25_PEND_3_AMT ?? "Rp 89.573.382" },
    { label: process.env.NEXT_PUBLIC_REAL25_PEND_4_LABEL ?? "Alokasi Dana Desa (ADD)",        realisasi: process.env.NEXT_PUBLIC_REAL25_PEND_4_AMT ?? "Rp 647.884.500" },
    { label: process.env.NEXT_PUBLIC_REAL25_PEND_5_LABEL ?? "Pendapatan Lain-Lain",           realisasi: process.env.NEXT_PUBLIC_REAL25_PEND_5_AMT ?? "Rp 3.281.245" },
  ],
  totalPendapatan: process.env.NEXT_PUBLIC_REAL25_PEND_TOTAL ?? "Rp 1.764.479.127",
  belanja: [
    { label: process.env.NEXT_PUBLIC_REAL25_BEL_1_LABEL ?? "Penyelenggaraan Pemerintahan",   realisasi: process.env.NEXT_PUBLIC_REAL25_BEL_1_AMT ?? "Rp 745.975.129" },
    { label: process.env.NEXT_PUBLIC_REAL25_BEL_2_LABEL ?? "Pelaksanaan Pembangunan",        realisasi: process.env.NEXT_PUBLIC_REAL25_BEL_2_AMT ?? "Rp 499.697.600" },
    { label: process.env.NEXT_PUBLIC_REAL25_BEL_3_LABEL ?? "Pembinaan Kemasyarakatan",       realisasi: process.env.NEXT_PUBLIC_REAL25_BEL_3_AMT ?? "Rp 93.711.346" },
    { label: process.env.NEXT_PUBLIC_REAL25_BEL_4_LABEL ?? "Pemberdayaan Kemasyarakatan",    realisasi: process.env.NEXT_PUBLIC_REAL25_BEL_4_AMT ?? "Rp 82.400.000" },
    { label: process.env.NEXT_PUBLIC_REAL25_BEL_5_LABEL ?? "Penanggulangan Bencana Darurat", realisasi: process.env.NEXT_PUBLIC_REAL25_BEL_5_AMT ?? "Rp 126.000.000" },
  ],
  totalBelanja: process.env.NEXT_PUBLIC_REAL25_BEL_TOTAL ?? "Rp 1.547.784.075",
  surplus:      process.env.NEXT_PUBLIC_REAL25_SURPLUS    ?? "Rp 216.695.052",
  silpa:        process.env.NEXT_PUBLIC_REAL25_SILPA      ?? "Rp 108.311.878",
};

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-baseline justify-between gap-4">
      <span className={ROW_LABEL}>{label}</span>
      <span className={ROW_VALUE}>{value}</span>
    </div>
  );
}

function TotalRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-baseline justify-between gap-4 pt-1">
      <span className={TOTAL_LABEL}>{label}</span>
      <span className={TOTAL_VALUE}>{value}</span>
    </div>
  );
}

function Anggaran2026Card() {
  return (
    <div className={CARD}>
      <p className="font-heading font-bold text-[22px] leading-[1.3] text-primary">
        APBDes 2026
      </p>
      <p className="font-sans text-[14px] text-muted -mt-2">Anggaran Pendapatan dan Belanja Desa</p>

      <div className={DIVIDER} />

      <p className={SECTION_LABEL}>Pendapatan</p>
      <div className="flex flex-col gap-2">
        {APBDES_2026.pendapatan.map(({ label, amount }) => (
          <Row key={label} label={label} value={amount} />
        ))}
      </div>
      <div className={DIVIDER} />
      <TotalRow label="Jumlah Pendapatan" value={APBDES_2026.totalPendapatan} />

      <div className={DIVIDER} />

      <p className={SECTION_LABEL}>Belanja per Bidang</p>
      <div className="flex flex-col gap-2">
        {APBDES_2026.belanja.map(({ label, amount }) => (
          <Row key={label} label={label} value={amount} />
        ))}
      </div>
      <div className={DIVIDER} />
      <TotalRow label="Jumlah Belanja" value={APBDES_2026.totalBelanja} />

      <div className={DIVIDER} />

      <div className="flex flex-col gap-2">
        <Row label="Surplus / (Defisit)"      value={APBDES_2026.surplus} />
        <Row label="SILPA Tahun Sebelumnya"   value={APBDES_2026.silpa} />
      </div>
    </div>
  );
}

function Realisasi2025Card() {
  return (
    <div className={CARD}>
      <p className="font-heading font-bold text-[22px] leading-[1.3] text-primary">
        Realisasi APBDes 2025
      </p>
      <p className="font-sans text-[14px] text-muted -mt-2">Realisasi Anggaran Pendapatan dan Belanja Desa</p>

      <div className={DIVIDER} />

      <p className={SECTION_LABEL}>Pendapatan Realisasi</p>
      <div className="flex flex-col gap-2">
        {REALISASI_2025.pendapatan.map(({ label, realisasi }) => (
          <Row key={label} label={label} value={realisasi} />
        ))}
      </div>
      <div className={DIVIDER} />
      <TotalRow label="Jumlah Pendapatan" value={REALISASI_2025.totalPendapatan} />

      <div className={DIVIDER} />

      <p className={SECTION_LABEL}>Belanja Realisasi per Bidang</p>
      <div className="flex flex-col gap-2">
        {REALISASI_2025.belanja.map(({ label, realisasi }) => (
          <Row key={label} label={label} value={realisasi} />
        ))}
      </div>
      <div className={DIVIDER} />
      <TotalRow label="Jumlah Belanja" value={REALISASI_2025.totalBelanja} />

      <div className={DIVIDER} />

      <div className="flex flex-col gap-2">
        <Row label="Surplus / Defisit" value={REALISASI_2025.surplus} />
        <Row label="SILPA"             value={REALISASI_2025.silpa} />
      </div>
    </div>
  );
}

export default function APBDesSection() {
  return (
    <section className="px-5 md:px-[80px] py-[60px] flex flex-col gap-[30px] bg-surface" aria-label="APBDes">
      <h2 className="font-heading font-bold text-[26px] leading-[1.3] text-primary">
        Anggaran Pendapatan dan Belanja Desa
      </h2>
      <div className="flex flex-col md:flex-row gap-[30px] md:items-start">
        <Anggaran2026Card />
        <Realisasi2025Card />
      </div>
    </section>
  );
}
