import React from "react";

const DUSUN = [
  { name: process.env.NEXT_PUBLIC_DUSUN_1_NAME ?? "Dusun Krajan",     value: Number(process.env.NEXT_PUBLIC_DUSUN_1_VALUE ?? "812") },
  { name: process.env.NEXT_PUBLIC_DUSUN_2_NAME ?? "Dusun Ngroto",     value: Number(process.env.NEXT_PUBLIC_DUSUN_2_VALUE ?? "654") },
  { name: process.env.NEXT_PUBLIC_DUSUN_3_NAME ?? "Dusun Sumberjo",   value: Number(process.env.NEXT_PUBLIC_DUSUN_3_VALUE ?? "590") },
  { name: process.env.NEXT_PUBLIC_DUSUN_4_NAME ?? "Dusun Karangrejo", value: Number(process.env.NEXT_PUBLIC_DUSUN_4_VALUE ?? "425") },
];

const USIA = [
  { name: process.env.NEXT_PUBLIC_USIA_1_LABEL  ?? "0 – 4",   value: Number(process.env.NEXT_PUBLIC_USIA_1_VALUE  ?? "213") },
  { name: process.env.NEXT_PUBLIC_USIA_2_LABEL  ?? "5 – 9",   value: Number(process.env.NEXT_PUBLIC_USIA_2_VALUE  ?? "219") },
  { name: process.env.NEXT_PUBLIC_USIA_3_LABEL  ?? "10 – 14", value: Number(process.env.NEXT_PUBLIC_USIA_3_VALUE  ?? "234") },
  { name: process.env.NEXT_PUBLIC_USIA_4_LABEL  ?? "15 – 19", value: Number(process.env.NEXT_PUBLIC_USIA_4_VALUE  ?? "208") },
  { name: process.env.NEXT_PUBLIC_USIA_5_LABEL  ?? "20 – 24", value: Number(process.env.NEXT_PUBLIC_USIA_5_VALUE  ?? "236") },
  { name: process.env.NEXT_PUBLIC_USIA_6_LABEL  ?? "25 – 29", value: Number(process.env.NEXT_PUBLIC_USIA_6_VALUE  ?? "251") },
  { name: process.env.NEXT_PUBLIC_USIA_7_LABEL  ?? "30 – 34", value: Number(process.env.NEXT_PUBLIC_USIA_7_VALUE  ?? "247") },
  { name: process.env.NEXT_PUBLIC_USIA_8_LABEL  ?? "35 – 39", value: Number(process.env.NEXT_PUBLIC_USIA_8_VALUE  ?? "239") },
  { name: process.env.NEXT_PUBLIC_USIA_9_LABEL  ?? "40 – 44", value: Number(process.env.NEXT_PUBLIC_USIA_9_VALUE  ?? "274") },
  { name: process.env.NEXT_PUBLIC_USIA_10_LABEL ?? "45 – 49", value: Number(process.env.NEXT_PUBLIC_USIA_10_VALUE ?? "197") },
  { name: process.env.NEXT_PUBLIC_USIA_11_LABEL ?? "50 – 54", value: Number(process.env.NEXT_PUBLIC_USIA_11_VALUE ?? "240") },
  { name: process.env.NEXT_PUBLIC_USIA_12_LABEL ?? "55 – 59", value: Number(process.env.NEXT_PUBLIC_USIA_12_VALUE ?? "292") },
  { name: process.env.NEXT_PUBLIC_USIA_13_LABEL ?? ">60",     value: Number(process.env.NEXT_PUBLIC_USIA_13_VALUE ?? "681") },
];

const PENDIDIKAN = [
  { name: process.env.NEXT_PUBLIC_DIDIK_1_LABEL  ?? "Tidak/Belum Sekolah", value: Number(process.env.NEXT_PUBLIC_DIDIK_1_VALUE  ?? "798")  },
  { name: process.env.NEXT_PUBLIC_DIDIK_2_LABEL  ?? "Belum Tamat SD",      value: Number(process.env.NEXT_PUBLIC_DIDIK_2_VALUE  ?? "254")  },
  { name: process.env.NEXT_PUBLIC_DIDIK_3_LABEL  ?? "Tamat SD/Sederajat",  value: Number(process.env.NEXT_PUBLIC_DIDIK_3_VALUE  ?? "1230") },
  { name: process.env.NEXT_PUBLIC_DIDIK_4_LABEL  ?? "SLTP/Sederajat",      value: Number(process.env.NEXT_PUBLIC_DIDIK_4_VALUE  ?? "702")  },
  { name: process.env.NEXT_PUBLIC_DIDIK_5_LABEL  ?? "SLTA/Sederajat",      value: Number(process.env.NEXT_PUBLIC_DIDIK_5_VALUE  ?? "246")  },
  { name: process.env.NEXT_PUBLIC_DIDIK_6_LABEL  ?? "Diploma I/II",        value: Number(process.env.NEXT_PUBLIC_DIDIK_6_VALUE  ?? "5")    },
  { name: process.env.NEXT_PUBLIC_DIDIK_7_LABEL  ?? "Diploma III",         value: Number(process.env.NEXT_PUBLIC_DIDIK_7_VALUE  ?? "4")    },
  { name: process.env.NEXT_PUBLIC_DIDIK_8_LABEL  ?? "Diploma IV/Strata I", value: Number(process.env.NEXT_PUBLIC_DIDIK_8_VALUE  ?? "19")   },
  { name: process.env.NEXT_PUBLIC_DIDIK_9_LABEL  ?? "Strata II",           value: Number(process.env.NEXT_PUBLIC_DIDIK_9_VALUE  ?? "0")    },
  { name: process.env.NEXT_PUBLIC_DIDIK_10_LABEL ?? "Strata III",          value: Number(process.env.NEXT_PUBLIC_DIDIK_10_VALUE ?? "0")    },
];

const AGAMA = [
  { label: process.env.NEXT_PUBLIC_AGAMA_1_LABEL ?? "Islam",    value: Number(process.env.NEXT_PUBLIC_AGAMA_1_VALUE ?? "2971"), pct: process.env.NEXT_PUBLIC_AGAMA_1_PCT ?? "91.19%" },
  { label: process.env.NEXT_PUBLIC_AGAMA_2_LABEL ?? "Katholik", value: Number(process.env.NEXT_PUBLIC_AGAMA_2_VALUE ?? "216"),  pct: process.env.NEXT_PUBLIC_AGAMA_2_PCT ?? "6.63%"  },
  { label: process.env.NEXT_PUBLIC_AGAMA_3_LABEL ?? "Kristen",  value: Number(process.env.NEXT_PUBLIC_AGAMA_3_VALUE ?? "59"),   pct: process.env.NEXT_PUBLIC_AGAMA_3_PCT ?? "1.81%"  },
  { label: process.env.NEXT_PUBLIC_AGAMA_4_LABEL ?? "Hindu",    value: Number(process.env.NEXT_PUBLIC_AGAMA_4_VALUE ?? "0"),    pct: process.env.NEXT_PUBLIC_AGAMA_4_PCT ?? "0.00%"  },
  { label: process.env.NEXT_PUBLIC_AGAMA_5_LABEL ?? "Budha",    value: Number(process.env.NEXT_PUBLIC_AGAMA_5_VALUE ?? "12"),   pct: process.env.NEXT_PUBLIC_AGAMA_5_PCT ?? "0.37%"  },
];
const AGAMA_TOTAL = process.env.NEXT_PUBLIC_AGAMA_TOTAL ?? "3.258";

const MATA_PENCAHARIAN = [
  { label: process.env.NEXT_PUBLIC_MATPENG_1_LABEL ?? "Pertanian",        value: Number(process.env.NEXT_PUBLIC_MATPENG_1_VALUE ?? "2123"), pct: process.env.NEXT_PUBLIC_MATPENG_1_PCT ?? "85.32%" },
  { label: process.env.NEXT_PUBLIC_MATPENG_2_LABEL ?? "Jasa/Perdagangan", value: Number(process.env.NEXT_PUBLIC_MATPENG_2_VALUE ?? "71"),   pct: process.env.NEXT_PUBLIC_MATPENG_2_PCT ?? "2.86%"  },
  { label: process.env.NEXT_PUBLIC_MATPENG_3_LABEL ?? "Sektor Industri",  value: Number(process.env.NEXT_PUBLIC_MATPENG_3_VALUE ?? "4"),    pct: process.env.NEXT_PUBLIC_MATPENG_3_PCT ?? "0.16%"  },
  { label: process.env.NEXT_PUBLIC_MATPENG_4_LABEL ?? "Sektor Lain",      value: Number(process.env.NEXT_PUBLIC_MATPENG_4_VALUE ?? "290"),  pct: process.env.NEXT_PUBLIC_MATPENG_4_PCT ?? "11.66%" },
];
const MATPENG_TOTAL = process.env.NEXT_PUBLIC_MATPENG_TOTAL ?? "2.488";

const MALE_PCT = Math.min(100, Math.max(0, Number(process.env.NEXT_PUBLIC_GENDER_MALE_PCT ?? "49.14")));

const CARD = "bg-white border border-[#d1d1d1] rounded-[16px]";

function SubSection({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section
      aria-labelledby={id}
      className="px-5 md:px-[80px] py-[50px] border-t border-divider flex flex-col gap-6"
    >
      <h3 id={id} className="font-heading font-bold text-[20px] leading-[1.3] text-primary">
        {title}
      </h3>
      {children}
    </section>
  );
}

function HorizBarChart({ data }: { data: { name: string; value: number }[] }) {
  const max   = Math.max(...data.map((d) => d.value), 1);
  const total = data.reduce((sum, d) => sum + d.value, 0) || 1;
  return (
    <div className={`${CARD} p-6 w-full max-w-[600px]`}>
      <div className="flex flex-col gap-[16px]">
        {data.map(({ name, value }) => {
          const pct = ((value / total) * 100).toFixed(2);
          return (
            <div key={name} className="flex flex-col gap-[6px]">
              <div className="flex items-center justify-between gap-4">
                <span className="font-sans text-[13px] text-primary">{name}</span>
                <span className="font-sans font-semibold text-[13px] text-[#37644d] shrink-0">
                  {value.toLocaleString("id-ID")} <span className="text-muted font-normal">({pct}%)</span>
                </span>
              </div>
              <div className="relative h-[8px] rounded-[4px] bg-[rgba(55,100,77,0.15)]">
                <div
                  className="absolute left-0 top-0 h-[8px] rounded-[4px] bg-[#37644d]"
                  style={{ width: `${(value / max) * 100}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function PctBarChart({ data, total }: { data: { label: string; value: number; pct: string }[]; total?: string }) {
  return (
    <div className={`${CARD} p-6 w-full max-w-[600px]`}>
      <div className="flex flex-col gap-[16px]">
        {data.map(({ label, value, pct }) => (
          <div key={label} className="flex flex-col gap-[6px]">
            <div className="flex items-center justify-between gap-4">
              <span className="font-sans text-[13px] text-primary">{label}</span>
              <span className="font-sans font-semibold text-[13px] text-[#37644d] shrink-0">
                {value.toLocaleString("id-ID")} <span className="text-muted font-normal">({pct})</span>
              </span>
            </div>
            <div className="relative h-[8px] rounded-[4px] bg-[rgba(55,100,77,0.15)]">
              <div
                className="absolute left-0 top-0 h-[8px] rounded-[4px] bg-[#37644d]"
                style={{ width: `${parseFloat(pct)}%` }}
              />
            </div>
          </div>
        ))}
        {total && (
          <>
            <div className="h-px bg-divider" />
            <div className="flex items-center justify-between">
              <span className="font-sans font-semibold text-[13px] text-primary">Total</span>
              <span className="font-sans font-semibold text-[13px] text-primary">{total}</span>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

function DonutChart() {
  const maleFraction   = MALE_PCT / 100;
  const femaleFraction = 1 - maleFraction;

  const angle          = maleFraction * 2 * Math.PI;
  const endX           = parseFloat((90 + 85 * Math.sin(angle)).toFixed(3));
  const endY           = parseFloat((90 - 85 * Math.cos(angle)).toFixed(3));
  const maleLargeArc   = maleFraction   > 0.5 ? 1 : 0;
  const femaleLargeArc = femaleFraction > 0.5 ? 1 : 0;

  const malePath   = `M 90,90 L 90,5 A 85,85 0 ${maleLargeArc},1 ${endX},${endY} Z`;
  const femalePath = `M 90,90 L ${endX},${endY} A 85,85 0 ${femaleLargeArc},1 90,5 Z`;

  return (
    <div className={`${CARD} p-6 flex flex-col items-start w-full max-w-[400px]`}>
      <div className="flex items-center justify-center w-full py-4">
        <svg
          viewBox="0 0 180 180"
          width="180"
          height="180"
          aria-label={`Diagram jenis kelamin: Laki-laki ${MALE_PCT}%, Perempuan ${100 - MALE_PCT}%`}
        >
          <path d={malePath}   fill="#37644d" />
          <path d={femalePath} fill="#DCBe82" />
          <circle cx="90" cy="90" r="52" fill="white" />
        </svg>
      </div>
      <div className="flex items-center gap-[30px] mt-2">
        <span className="font-sans text-[12px] text-[#37644d]">● Laki-laki {MALE_PCT}%</span>
        <span className="font-sans text-[12px] text-accent">● Perempuan {(100 - MALE_PCT).toFixed(2)}%</span>
      </div>
    </div>
  );
}

export default function InfografisSection() {
  return (
    <section aria-label="Data kependudukan" className="flex flex-col bg-surface">
      <div className="px-5 md:px-[80px] pt-[60px] pb-0">
        <h2 className="font-heading font-bold text-[26px] leading-[1.3] text-primary">
          Kependudukan
        </h2>
      </div>

      <SubSection id="jumlah-penduduk" title="Jumlah Penduduk per Dusun">
        <HorizBarChart data={DUSUN} />
      </SubSection>

      <SubSection id="struktur-usia" title="Struktur Usia">
        <HorizBarChart data={USIA} />
      </SubSection>

      <SubSection id="jenis-kelamin" title="Jenis Kelamin">
        <DonutChart />
      </SubSection>

      <SubSection id="tingkat-pendidikan" title="Tingkat Pendidikan">
        <HorizBarChart data={PENDIDIKAN} />
      </SubSection>

      <SubSection id="mata-pencaharian" title="Mata Pencaharian">
        <PctBarChart data={MATA_PENCAHARIAN} total={MATPENG_TOTAL} />
      </SubSection>

      <SubSection id="agama" title="Agama">
        <PctBarChart data={AGAMA} total={AGAMA_TOTAL} />
      </SubSection>
    </section>
  );
}
