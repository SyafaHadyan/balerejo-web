const DUSUN = [
  { name: "Dusun Krajan",     value: 812 },
  { name: "Dusun Ngroto",     value: 654 },
  { name: "Dusun Sumberjo",   value: 590 },
  { name: "Dusun Karangrejo", value: 425 },
] as const;

const MATA_PENCAHARIAN = [
  { label: "Petani",          pct: "61%" },
  { label: "Pelaku UMKM",     pct: "22%" },
  { label: "Buruh / Lainnya", pct: "17%" },
] as const;

const MAX_VALUE = Math.max(...DUSUN.map((d) => d.value));

const CARD = "bg-white border border-[#d1d1d1] rounded-[16px]";

function SubSection({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section
      aria-labelledby={id}
      className="px-[80px] py-[50px] border-t border-divider flex flex-col gap-6"
    >
      <h3
        id={id}
        className="font-heading font-bold text-[20px] leading-[1.3] text-primary"
      >
        {title}
      </h3>
      {children}
    </section>
  );
}

function BarChart() {
  return (
    <div className={`${CARD} p-6 flex flex-col gap-0 max-w-[600px]`}>
      <div className="flex flex-col gap-[28px]">
        {DUSUN.map(({ name, value }) => (
          <div key={name} className="flex flex-col gap-[8px]">
            <div className="flex items-center justify-between">
              <span className="font-sans text-[13px] text-primary">{name}</span>
              <span className="font-sans font-semibold text-[13px] text-[#37644d]">{value}</span>
            </div>
            <div className="relative h-[8px] rounded-[4px] bg-[rgba(55,100,77,0.15)]">
              <div
                className="absolute left-0 top-0 h-[8px] rounded-[4px] bg-[#37644d]"
                style={{ width: `${(value / MAX_VALUE) * 80}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function DonutChart() {
  return (
    <div className={`${CARD} p-6 flex flex-col items-start max-w-[400px]`}>
      <div className="flex items-center justify-center w-full py-4">
        <svg
          viewBox="0 0 180 180"
          width="180"
          height="180"
          aria-label="Diagram jenis kelamin: Laki-laki 50%, Perempuan 50%"
        >
          <path d="M 90,90 L 90,5 A 85,85 0 0,1 90,175 Z" fill="#37644d" />
          <path d="M 90,90 L 90,5 A 85,85 0 0,0 90,175 Z" fill="#DCBe82" />
          <circle cx="90" cy="90" r="52" fill="white" />
        </svg>
      </div>
      <div className="flex items-center gap-[30px] mt-2">
        <span className="font-sans text-[12px] text-[#37644d]">● Laki-laki 50%</span>
        <span className="font-sans text-[12px] text-accent">● Perempuan 50%</span>
      </div>
    </div>
  );
}

function ListChart() {
  return (
    <div className={`${CARD} p-6 flex flex-col max-w-[400px]`}>
      <div className="flex flex-col gap-[50px]">
        {MATA_PENCAHARIAN.map(({ label, pct }) => (
          <div key={label} className="flex items-center justify-between">
            <span className="font-sans text-[14px] text-primary">{label}</span>
            <span className="font-sans font-semibold text-[14px] text-[#37644d]">{pct}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function InfografisSection() {
  return (
    <section aria-label="Data kependudukan" className="flex flex-col">
      <div className="px-[80px] pt-[60px] pb-0">
        <h2 className="font-heading font-bold text-[26px] leading-[1.3] text-primary">
          Kependudukan
        </h2>
      </div>

      <SubSection id="jumlah-penduduk" title="Jumlah Penduduk per Dusun">
        <BarChart />
      </SubSection>

      <SubSection id="jenis-kelamin" title="Jenis Kelamin">
        <DonutChart />
      </SubSection>

      <SubSection id="mata-pencaharian" title="Mata Pencaharian">
        <ListChart />
      </SubSection>
    </section>
  );
}
