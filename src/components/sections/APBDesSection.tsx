const CARD = "bg-white border border-[#d1d1d1] rounded-[16px] flex-1 p-6 flex flex-col gap-4";
const SECTION_LABEL = "font-sans font-semibold text-[11px] tracking-[1px] uppercase text-accent";
const ROW_LABEL = "font-sans text-[13px] text-primary";
const ROW_VALUE = "font-sans font-semibold text-[13px] text-[#37644d] text-right shrink-0";
const TOTAL_LABEL = "font-sans font-semibold text-[13px] text-primary";
const TOTAL_VALUE = "font-sans font-semibold text-[13px] text-primary text-right shrink-0";
const DIVIDER = "h-px bg-divider";

const APBDES_2026 = {
  pendapatan: [
    { label: "Pendapatan Asli Desa",          amount: "Rp 9.000.000" },
    { label: "Dana Desa (DD)",                amount: "Rp 1.014.740.000" },
    { label: "Bagi Hasil Pajak dan Retribusi", amount: "Rp 89.573.382" },
    { label: "Alokasi Dana Desa (ADD)",       amount: "Rp 647.884.500" },
    { label: "Bunga Bank",                    amount: "Rp 2.500.000" },
  ],
  totalPendapatan: "Rp 1.763.697.882",
  belanja: [
    { label: "Penyelenggaraan Pemerintahan",  amount: "Rp 781.468.128" },
    { label: "Pelaksanaan Pembangunan",       amount: "Rp 674.055.000" },
    { label: "Pembinaan Kemasyarakatan",      amount: "Rp 135.764.000" },
    { label: "Pemberdayaan Kemasyarakatan",   amount: "Rp 77.730.000" },
    { label: "Penanggulangan Bencana",        amount: "Rp 201.815.510" },
  ],
  totalBelanja: "Rp 1.870.832.638",
  surplus: "Rp 107.134.756",
  silpa: "Rp 107.234.756",
};

const REALISASI_2025 = {
  pendapatan: [
    { label: "Pendapatan Asli Desa",          realisasi: "Rp 9.000.000" },
    { label: "Dana Desa (DD)",                realisasi: "Rp 1.014.740.000" },
    { label: "Bagi Hasil Pajak dan Retribusi", realisasi: "Rp 89.573.382" },
    { label: "Alokasi Dana Desa (ADD)",       realisasi: "Rp 647.884.500" },
    { label: "Pendapatan Lain-Lain",          realisasi: "Rp 3.281.245" },
  ],
  totalPendapatan: "Rp 1.764.479.127",
  belanja: [
    { label: "Penyelenggaraan Pemerintahan",  realisasi: "Rp 745.975.129" },
    { label: "Pelaksanaan Pembangunan",       realisasi: "Rp 499.697.600" },
    { label: "Pembinaan Kemasyarakatan",      realisasi: "Rp 93.711.346" },
    { label: "Pemberdayaan Kemasyarakatan",   realisasi: "Rp 82.400.000" },
    { label: "Penanggulangan Bencana Darurat", realisasi: "Rp 126.000.000" },
  ],
  totalBelanja: "Rp 1.547.784.075",
  surplus: "Rp 216.695.052",
  silpa: "Rp 108.311.878",
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
      <p className="font-heading font-bold text-[20px] leading-[1.3] text-primary">
        APBDes 2026
      </p>
      <p className="font-sans text-[13px] text-muted -mt-2">Anggaran Pendapatan dan Belanja Desa</p>

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
        <Row label="Surplus / (Defisit)" value={APBDES_2026.surplus} />
        <Row label="SILPA Tahun Sebelumnya" value={APBDES_2026.silpa} />
      </div>
    </div>
  );
}

function Realisasi2025Card() {
  return (
    <div className={CARD}>
      <p className="font-heading font-bold text-[20px] leading-[1.3] text-primary">
        Realisasi APBDes 2025
      </p>
      <p className="font-sans text-[13px] text-muted -mt-2">Realisasi Anggaran Pendapatan dan Belanja Desa</p>

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
        <Row label="Surplus / Devisit" value={REALISASI_2025.surplus} />
        <Row label="SILPA" value={REALISASI_2025.silpa} />
      </div>
    </div>
  );
}

export default function APBDesSection() {
  return (
    <section className="px-[80px] py-[60px] flex flex-col gap-[30px] bg-surface" aria-label="APBDes">
      <h2 className="font-heading font-bold text-[26px] leading-[1.3] text-primary">
        Anggaran Pendapatan dan Belanja Desa
      </h2>
      <div className="flex flex-col md:flex-row gap-[30px] items-start">
        <Anggaran2026Card />
        <Realisasi2025Card />
      </div>
    </section>
  );
}
