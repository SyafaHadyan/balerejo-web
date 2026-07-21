import React from "react";

/* ─────────────────────── DATA ─────────────────────── */

const TOTAL_PENDUDUK = Number(process.env.NEXT_PUBLIC_STAT_PENDUDUK?.replace(/[^\d]/g, "") ?? "3531");
const TOTAL_KK        = process.env.NEXT_PUBLIC_STAT_KK
  ? Number(process.env.NEXT_PUBLIC_STAT_KK.replace(/[^\d]/g, ""))
  : null;

const MALE_PCT    = Math.min(100, Math.max(0, Number(process.env.NEXT_PUBLIC_GENDER_MALE_PCT ?? "49.14")));
const FEMALE_PCT  = parseFloat((100 - MALE_PCT).toFixed(2));
const MALE_COUNT  = Math.round((MALE_PCT / 100) * TOTAL_PENDUDUK);
const FEMALE_COUNT = TOTAL_PENDUDUK - MALE_COUNT;

const DUSUN = [
  { name: process.env.NEXT_PUBLIC_DUSUN_1_NAME ?? "Dusun Balerejo I",  value: Number(process.env.NEXT_PUBLIC_DUSUN_1_VALUE ?? "0") },
  { name: process.env.NEXT_PUBLIC_DUSUN_2_NAME ?? "Dusun Balerejo II", value: Number(process.env.NEXT_PUBLIC_DUSUN_2_VALUE ?? "0") },
];
const DUSUN_HAS_DATA = DUSUN.some((d) => d.value > 0);

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

const PERKAWINAN = [
  { label: process.env.NEXT_PUBLIC_KAWIN_1_LABEL ?? "Belum Kawin",  value: Number(process.env.NEXT_PUBLIC_KAWIN_1_VALUE ?? "980"),  pct: process.env.NEXT_PUBLIC_KAWIN_1_PCT ?? "30.08%" },
  { label: process.env.NEXT_PUBLIC_KAWIN_2_LABEL ?? "Kawin",        value: Number(process.env.NEXT_PUBLIC_KAWIN_2_VALUE ?? "1740"), pct: process.env.NEXT_PUBLIC_KAWIN_2_PCT ?? "53.41%" },
  { label: process.env.NEXT_PUBLIC_KAWIN_3_LABEL ?? "Cerai Hidup",  value: Number(process.env.NEXT_PUBLIC_KAWIN_3_VALUE ?? "98"),   pct: process.env.NEXT_PUBLIC_KAWIN_3_PCT ?? "3.01%"  },
  { label: process.env.NEXT_PUBLIC_KAWIN_4_LABEL ?? "Cerai Mati",   value: Number(process.env.NEXT_PUBLIC_KAWIN_4_VALUE ?? "440"),  pct: process.env.NEXT_PUBLIC_KAWIN_4_PCT ?? "13.50%" },
];
const PERKAWINAN_TOTAL = process.env.NEXT_PUBLIC_KAWIN_TOTAL ?? "3.258";

const MATA_PENCAHARIAN = [
  { label: process.env.NEXT_PUBLIC_MATPENG_1_LABEL ?? "Pertanian",        value: Number(process.env.NEXT_PUBLIC_MATPENG_1_VALUE ?? "2123"), pct: process.env.NEXT_PUBLIC_MATPENG_1_PCT ?? "85.32%" },
  { label: process.env.NEXT_PUBLIC_MATPENG_2_LABEL ?? "Jasa/Perdagangan", value: Number(process.env.NEXT_PUBLIC_MATPENG_2_VALUE ?? "71"),   pct: process.env.NEXT_PUBLIC_MATPENG_2_PCT ?? "2.86%"  },
  { label: process.env.NEXT_PUBLIC_MATPENG_3_LABEL ?? "Sektor Industri",  value: Number(process.env.NEXT_PUBLIC_MATPENG_3_VALUE ?? "4"),    pct: process.env.NEXT_PUBLIC_MATPENG_3_PCT ?? "0.16%"  },
  { label: process.env.NEXT_PUBLIC_MATPENG_4_LABEL ?? "Sektor Lain",      value: Number(process.env.NEXT_PUBLIC_MATPENG_4_VALUE ?? "290"),  pct: process.env.NEXT_PUBLIC_MATPENG_4_PCT ?? "11.66%" },
];
const MATPENG_TOTAL = process.env.NEXT_PUBLIC_MATPENG_TOTAL ?? "2.488";

/* ─────────────────────── ICONS: statistik ringkas ─────────────────────── */

function IconTotalPenduduk() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="24" cy="24" r="24" fill="#E8F5EE"/>
      <circle cx="20" cy="18" r="4.5" stroke="#1D392B" strokeWidth="1.8"/>
      <path d="M12 34c0-4.42 3.58-8 8-8h0c4.42 0 8 3.58 8 8" stroke="#1D392B" strokeWidth="1.8" strokeLinecap="round"/>
      <circle cx="30" cy="18" r="3.5" stroke="#1D392B" strokeWidth="1.5"/>
      <path d="M32 26c2.76 0 5 2.69 5 6" stroke="#1D392B" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

function IconKK() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="24" cy="24" r="24" fill="#FEF3E2"/>
      <rect x="13" y="15" width="22" height="18" rx="3" stroke="#B8860B" strokeWidth="1.8"/>
      <path d="M13 21h22" stroke="#B8860B" strokeWidth="1.8"/>
      <path d="M18 27h5" stroke="#B8860B" strokeWidth="1.8" strokeLinecap="round"/>
      <path d="M18 30h8" stroke="#B8860B" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

function IconLaki() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="24" cy="24" r="24" fill="#E3F2FD"/>
      <circle cx="22" cy="22" r="6" stroke="#1565C0" strokeWidth="1.8"/>
      <path d="M26.5 17.5L32 12M32 12h-4.5M32 12v4.5" stroke="#1565C0" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function IconPerempuan() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="24" cy="24" r="24" fill="#FCE4EC"/>
      <circle cx="24" cy="20" r="6" stroke="#C62828" strokeWidth="1.8"/>
      <path d="M24 26v8M20 31h8" stroke="#C62828" strokeWidth="1.8" strokeLinecap="round"/>
    </svg>
  );
}

function IconEmptyData() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="20" cy="20" r="20" fill="#F1F1EF"/>
      <rect x="12" y="11" width="16" height="20" rx="2" stroke="#9ca3af" strokeWidth="1.6"/>
      <path d="M15.5 17h9M15.5 21h9M15.5 25h5.5" stroke="#9ca3af" strokeWidth="1.4" strokeLinecap="round"/>
    </svg>
  );
}

function IconDusun() {
  return (
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="22" cy="22" r="22" fill="#E8F5EE"/>
      <path d="M22 33s9-8.3 9-15a9 9 0 1 0-18 0c0 6.7 9 15 9 15z" stroke="#1D392B" strokeWidth="1.8" fill="none" strokeLinejoin="round"/>
      <circle cx="22" cy="18" r="3.4" stroke="#1D392B" strokeWidth="1.6"/>
    </svg>
  );
}

/* Icon Perkawinan */
function IconBelumKawin() {
  return (
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="22" cy="22" r="22" fill="#F3E5F5"/>
      <circle cx="22" cy="17" r="5" stroke="#7B1FA2" strokeWidth="1.6"/>
      <path d="M14 33c0-4.42 3.58-8 8-8s8 3.58 8 8" stroke="#7B1FA2" strokeWidth="1.6" strokeLinecap="round"/>
    </svg>
  );
}

function IconKawin() {
  return (
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="22" cy="22" r="22" fill="#E8F5E9"/>
      <circle cx="17" cy="25" r="7" stroke="#2E7D32" strokeWidth="2"/>
      <circle cx="27" cy="25" r="7" stroke="#2E7D32" strokeWidth="2"/>
      <path d="M22 11l1.2 2.5 2.6.3-1.9 1.8.5 2.6-2.4-1.3-2.4 1.3.5-2.6-1.9-1.8 2.6-.3z" fill="#2E7D32"/>
    </svg>
  );
}

function IconCeraiHidup() {
  return (
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="22" cy="22" r="22" fill="#FFF3E0"/>
      <path d="M21 32s-9.5-6-9.5-13.5c0-4.14 3.13-6.9 6.5-6.9 1.2 0 2.37.36 3 .9" stroke="#E65100" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M23 32s9.5-6 9.5-13.5c0-4.14-3.13-6.9-6.5-6.9-1.2 0-2.37.36-3 .9" stroke="#E65100" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M22 12.7l-2.3 4.3 3.2 3-2.7 4 3.8 4.3" stroke="#E65100" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function IconCeraiMati() {
  return (
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="22" cy="22" r="22" fill="#EFEBE9"/>
      <circle cx="17" cy="18" r="5" stroke="#5D4037" strokeWidth="1.6"/>
      <path d="M9 33c0-4.42 3.58-8 8-8s8 3.58 8 8" stroke="#5D4037" strokeWidth="1.6" strokeLinecap="round"/>
      <path d="M30.5 14.5c0 3-2.5 5.5-2.5 5.5s-2.5-2.5-2.5-5.5S28 10 28 10s2.5 1.5 2.5 4.5z" fill="#5D4037" opacity="0.85"/>
      <path d="M28 20v5.5" stroke="#5D4037" strokeWidth="1.4" strokeLinecap="round"/>
    </svg>
  );
}

/* Icon Agama */
function IconIslam() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="20" cy="20" r="20" fill="#E8F5E9"/>
      <path d="M22 11c-5 0-9 4-9 9s4 9 9 9c-3.5-1-6-4.7-6-9s2.5-8 6-9z" fill="#2E7D32"/>
      <path d="M28.2 13.2l1 2.1 2.3.3-1.7 1.6.4 2.3-2-1.1-2 1.1.4-2.3-1.7-1.6 2.3-.3z" fill="#2E7D32"/>
    </svg>
  );
}

function IconKatholik() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="20" cy="20" r="20" fill="#E3F2FD"/>
      <circle cx="20" cy="11.5" r="2.6" stroke="#1565C0" strokeWidth="1.5" fill="none"/>
      <path d="M20 17v13M14.5 21h11" stroke="#1565C0" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );
}

function IconKristen() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="20" cy="20" r="20" fill="#FFF8E1"/>
      <path d="M20 9v22M13.5 16h13" stroke="#F57F17" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );
}

function IconHindu() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="20" cy="20" r="20" fill="#FFF3E0"/>
      <path d="M20 30V12" stroke="#E65100" strokeWidth="1.8" strokeLinecap="round"/>
      <path d="M20 16c-2.5-2.5-2.5-6 0-8" stroke="#E65100" strokeWidth="1.6" fill="none" strokeLinecap="round"/>
      <path d="M20 16c2.5-2.5 2.5-6 0-8" stroke="#E65100" strokeWidth="1.6" fill="none" strokeLinecap="round"/>
      <path d="M14 22h12" stroke="#E65100" strokeWidth="1.6" strokeLinecap="round"/>
    </svg>
  );
}

function IconBudha() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="20" cy="20" r="20" fill="#F3E5F5"/>
      <circle cx="20" cy="20" r="8" stroke="#7B1FA2" strokeWidth="1.6" fill="none"/>
      <circle cx="20" cy="20" r="2" fill="#7B1FA2"/>
      <path
        d="M22,20 L28,20 M21.41,21.41 L25.66,25.66 M20,22 L20,28 M18.59,21.41 L14.34,25.66 M18,20 L12,20 M18.59,18.59 L14.34,14.34 M20,18 L20,12 M21.41,18.59 L25.66,14.34"
        stroke="#7B1FA2"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

/* Icon Mata Pencaharian */
function IconPertanian() {
  return (
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="22" cy="22" r="22" fill="#E8F5E9"/>
      <path d="M22 32V18" stroke="#2E7D32" strokeWidth="1.8" strokeLinecap="round"/>
      <path d="M22 20c0-4.5 3.5-7 7-7 0 4.5-3.5 7-7 7z" fill="#2E7D32"/>
      <path d="M22 24c0-4.5-3.5-7-7-7 0 4.5 3.5 7 7 7z" fill="#5a9e75"/>
    </svg>
  );
}

function IconJasaPerdagangan() {
  return (
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="22" cy="22" r="22" fill="#E3F2FD"/>
      <rect x="12" y="18" width="20" height="13" rx="2" stroke="#1565C0" strokeWidth="1.6" fill="none"/>
      <path d="M17 18v-2a5 5 0 0 1 10 0v2" stroke="#1565C0" strokeWidth="1.6" fill="none"/>
      <path d="M12 23h20" stroke="#1565C0" strokeWidth="1.4"/>
    </svg>
  );
}

function IconIndustri() {
  return (
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="22" cy="22" r="22" fill="#FFF3E0"/>
      <path d="M11 32V20l6 4v-4l6 4v-4l6 4v8H11z" stroke="#E65100" strokeWidth="1.5" fill="none" strokeLinejoin="round"/>
      <path d="M15 20v-4M23 20v-4" stroke="#E65100" strokeWidth="1.4" strokeLinecap="round"/>
    </svg>
  );
}

function IconSektorLain() {
  return (
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="22" cy="22" r="22" fill="#F3E5F5"/>
      <circle cx="15" cy="22" r="2.6" fill="#7B1FA2"/>
      <circle cx="22" cy="22" r="2.6" fill="#7B1FA2"/>
      <circle cx="29" cy="22" r="2.6" fill="#7B1FA2"/>
    </svg>
  );
}

const AGAMA_ICONS: Record<string, React.ReactNode> = {
  "Islam": <IconIslam />,
  "Katholik": <IconKatholik />,
  "Kristen": <IconKristen />,
  "Hindu": <IconHindu />,
  "Budha": <IconBudha />,
};

const PERKAWINAN_ICONS: Record<string, React.ReactNode> = {
  "Belum Kawin": <IconBelumKawin />,
  "Kawin": <IconKawin />,
  "Cerai Hidup": <IconCeraiHidup />,
  "Cerai Mati": <IconCeraiMati />,
};

const MATPENG_ICONS: Record<string, React.ReactNode> = {
  "Pertanian": <IconPertanian />,
  "Jasa/Perdagangan": <IconJasaPerdagangan />,
  "Sektor Industri": <IconIndustri />,
  "Sektor Lain": <IconSektorLain />,
};

/* ─────────────────────── ICONS: judul subbagian ─────────────────────── */

function IconHeaderPenduduk() {
  return (
    <svg width="26" height="26" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="10" cy="9" r="4" stroke="#1D392B" strokeWidth="1.8" />
      <path d="M2 23c0-4 3.6-7 8-7" stroke="#1D392B" strokeWidth="1.8" strokeLinecap="round" />
      <circle cx="19" cy="9" r="4" stroke="#1D392B" strokeWidth="1.8" />
      <path d="M19 16c4.4 0 8 3 8 7" stroke="#1D392B" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function IconHeaderDusun() {
  return (
    <svg width="24" height="24" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M13 24s7-6.5 7-12a7 7 0 1 0-14 0c0 5.5 7 12 7 12z" stroke="#1D392B" strokeWidth="1.8" strokeLinejoin="round"/>
      <circle cx="13" cy="12" r="2.6" stroke="#1D392B" strokeWidth="1.6"/>
    </svg>
  );
}

function IconHeaderGender() {
  return (
    <svg width="24" height="24" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="13" cy="13" r="10" stroke="#1D392B" strokeWidth="1.8" fill="none"/>
      <path d="M13 3a10 10 0 0 1 8.66 15" stroke="#1D392B" strokeWidth="1.8" strokeLinecap="round" fill="none"/>
    </svg>
  );
}

function IconHeaderUsia() {
  return (
    <svg width="24" height="24" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="13" cy="13" r="10" stroke="#1D392B" strokeWidth="1.8" fill="none"/>
      <path d="M13 6v7l5 3" stroke="#1D392B" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    </svg>
  );
}

function IconHeaderPendidikan() {
  return (
    <svg width="26" height="24" viewBox="0 0 28 26" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M14 3L2 9l12 6 12-6-12-6z" stroke="#1D392B" strokeWidth="1.8" strokeLinejoin="round" fill="none"/>
      <path d="M7 12.5v6c0 1.5 3 3.5 7 3.5s7-2 7-3.5v-6" stroke="#1D392B" strokeWidth="1.6" fill="none" strokeLinejoin="round"/>
      <path d="M25 9v7" stroke="#1D392B" strokeWidth="1.6" strokeLinecap="round"/>
    </svg>
  );
}

/* ─────────────────────── UI COMPONENTS ─────────────────────── */

const CARD = "bg-white border border-[#e5e5e5] rounded-[16px] shadow-[0_2px_8px_rgba(0,0,0,0.06)]";

function SubSection({ id, title, icon, children }: { id: string; title: string; icon?: React.ReactNode; children: React.ReactNode }) {
  return (
    <section
      aria-labelledby={id}
      className="px-5 md:px-[80px] py-[40px] border-t border-divider flex flex-col gap-6"
    >
      <h3 id={id} className="font-heading font-bold text-[24px] leading-[1.3] text-primary flex items-center gap-3">
        <span className="w-[4px] h-[28px] bg-accent rounded-full inline-block" />
        {icon}
        {title}
      </h3>
      {children}
    </section>
  );
}

function PairedSection({
  id,
  left,
  right,
}: {
  id: string;
  left: { title: string; icon?: React.ReactNode; content: React.ReactNode };
  right: { title: string; icon?: React.ReactNode; content: React.ReactNode };
}) {
  return (
    <section aria-labelledby={id} className="px-5 md:px-[80px] py-[40px] border-t border-divider grid grid-cols-1 xl:grid-cols-2 gap-x-12 gap-y-10">
      <div className="flex flex-col gap-6">
        <h3 className="font-heading font-bold text-[24px] leading-[1.3] text-primary flex items-center gap-3">
          <span className="w-[4px] h-[28px] bg-accent rounded-full inline-block" />
          {left.icon}
          {left.title}
        </h3>
        {left.content}
      </div>
      <div className="flex flex-col gap-6 xl:border-l xl:border-divider xl:pl-12">
        <h3 id={id} className="font-heading font-bold text-[24px] leading-[1.3] text-primary flex items-center gap-3">
          <span className="w-[4px] h-[28px] bg-accent rounded-full inline-block" />
          {right.icon}
          {right.title}
        </h3>
        {right.content}
      </div>
    </section>
  );
}

function HorizBarChart({ data }: { data: { name: string; value: number }[] }) {
  const max   = Math.max(...data.map((d) => d.value), 1);
  const total = data.reduce((sum, d) => sum + d.value, 0) || 1;
  return (
    <div className={`${CARD} p-6 w-full`}>
      <div className="flex flex-col gap-[18px]">
        {data.map(({ name, value }) => {
          const pct = ((value / total) * 100).toFixed(2);
          return (
            <div key={name} className="flex flex-col gap-[7px]">
              <div className="flex items-center justify-between gap-4">
                <span className="font-sans text-[15px] text-primary">{name}</span>
                <span className="font-sans font-semibold text-[15px] text-[#37644d] shrink-0">
                  {value.toLocaleString("id-ID")} <span className="text-muted font-normal">({pct}%)</span>
                </span>
              </div>
              <div className="relative h-[9px] rounded-[4px] bg-[rgba(55,100,77,0.12)]">
                <div
                  className="absolute left-0 top-0 h-[9px] rounded-[4px] bg-gradient-to-r from-[#37644d] to-[#5a9e75] transition-all duration-700"
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
    <div className={`${CARD} p-6 w-full`}>
      <div className="flex flex-col gap-[18px]">
        {data.map(({ label, value, pct }) => (
          <div key={label} className="flex flex-col gap-[7px]">
            <div className="flex items-center justify-between gap-4">
              <span className="font-sans text-[15px] text-primary">{label}</span>
              <span className="font-sans font-semibold text-[15px] text-[#37644d] shrink-0">
                {value.toLocaleString("id-ID")} <span className="text-muted font-normal">({pct})</span>
              </span>
            </div>
            <div className="relative h-[9px] rounded-[4px] bg-[rgba(55,100,77,0.12)]">
              <div
                className="absolute left-0 top-0 h-[9px] rounded-[4px] bg-gradient-to-r from-[#37644d] to-[#5a9e75] transition-all duration-700"
                style={{ width: `${parseFloat(pct)}%` }}
              />
            </div>
          </div>
        ))}
        {total && (
          <>
            <div className="h-px bg-divider" />
            <div className="flex items-center justify-between">
              <span className="font-sans font-semibold text-[17px] text-primary">Total</span>
              <span className="font-sans font-bold text-[17px] text-primary">{total}</span>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

function UnitBarChart({ data, unit }: { data: { name: string; value: number }[]; unit: string }) {
  const max = Math.max(...data.map((d) => d.value), 1);
  return (
    <div className={`${CARD} p-6 w-full`}>
      <div className="flex flex-col gap-[18px]">
        {data.map(({ name, value }) => (
          <div key={name} className="flex flex-col gap-[7px]">
            <div className="flex items-center justify-between gap-4">
              <span className="font-sans text-[15px] text-primary">{name}</span>
              <span className="font-sans font-semibold text-[15px] text-[#37644d] shrink-0">
                {value.toLocaleString("id-ID")} <span className="text-muted font-normal">{unit}</span>
              </span>
            </div>
            <div className="relative h-[9px] rounded-[4px] bg-[rgba(55,100,77,0.12)]">
              <div
                className="absolute left-0 top-0 h-[9px] rounded-[4px] bg-gradient-to-r from-[#37644d] to-[#5a9e75] transition-all duration-700"
                style={{ width: `${(value / max) * 100}%` }}
              />
            </div>
          </div>
        ))}
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
    <div className={`${CARD} p-8 flex flex-col items-center w-full`}>
      <div className="flex items-center justify-center w-full py-4">
        <svg
          viewBox="0 0 180 180"
          width="220"
          height="220"
          aria-label={`Diagram jenis kelamin: Laki-laki ${MALE_PCT}%, Perempuan ${FEMALE_PCT}%`}
        >
          <path d={malePath}   fill="#37644d" />
          <path d={femalePath} fill="#DCBe82" />
          <circle cx="90" cy="90" r="52" fill="white" />
        </svg>
      </div>
      <div className="flex items-center gap-[30px] mt-2">
        <span className="font-sans text-[15px] text-[#37644d] flex items-center gap-1.5">
          <span className="w-3 h-3 rounded-full bg-[#37644d] inline-block" /> Laki-laki {MALE_PCT}%
        </span>
        <span className="font-sans text-[15px] text-accent flex items-center gap-1.5">
          <span className="w-3 h-3 rounded-full bg-accent inline-block" /> Perempuan {FEMALE_PCT}%
        </span>
      </div>
    </div>
  );
}

function IconCardGrid<T extends { label: string; value: number; pct: string }>({
  data,
  icons,
  fallback,
  cols,
}: {
  data: T[];
  icons: Record<string, React.ReactNode>;
  fallback: React.ReactNode;
  cols: string;
}) {
  return (
    <div className={`grid ${cols} gap-4 w-full`}>
      {data.map(({ label, value, pct }) => (
        <div key={label} className={`${CARD} p-5 flex flex-col items-center text-center gap-3 hover:shadow-md transition-shadow`}>
          {icons[label] ?? fallback}
          <div className="flex flex-col items-center">
            <span className="font-sans font-bold text-[20px] text-primary leading-none">{value.toLocaleString("id-ID")}</span>
            <span className="font-sans text-[13px] text-muted mt-1">{label}</span>
            <span className="font-sans text-[12px] text-accent font-semibold mt-0.5">{pct}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

/* ─────────────────────── MAIN SECTION ─────────────────────── */

export default function InfografisSection() {
  return (
    <section aria-label="Data kependudukan" className="flex flex-col bg-surface">

      {/* ══════ HERO: DEMOGRAFI PENDUDUK ══════ */}
      <div className="px-5 md:px-[80px] pt-[50px] pb-[30px]">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-14">
          <div className="flex-1 min-w-0">
            <h2 className="font-heading font-bold text-[32px] md:text-[42px] leading-[1.15] text-primary uppercase tracking-tight">
              Demografi<br />Penduduk
            </h2>
            <p className="mt-4 font-sans text-[17px] md:text-[18px] leading-[1.7] text-muted max-w-[520px]">
              Memberikan informasi lengkap mengenai karakteristik demografi penduduk suatu wilayah.
              Mulai dari jumlah penduduk, usia, jenis kelamin, tingkat pendidikan, pekerjaan, agama,
              dan aspek penting lainnya yang menggambarkan komposisi populasi secara rinci.
            </p>
          </div>
          {/* Decorative illustration */}
          <div className="shrink-0 hidden md:flex items-center justify-center">
            <svg width="200" height="180" viewBox="0 0 200 180" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <ellipse cx="100" cy="160" rx="80" ry="12" fill="#E8F5EE" opacity="0.6"/>
              {/* Person 1 */}
              <circle cx="70" cy="70" r="18" fill="#DCBe82" opacity="0.3"/>
              <circle cx="70" cy="60" r="12" stroke="#1D392B" strokeWidth="2" fill="none"/>
              <path d="M50 110c0-11.05 8.95-20 20-20s20 8.95 20 20" stroke="#1D392B" strokeWidth="2" fill="none" strokeLinecap="round"/>
              {/* Person 2 */}
              <circle cx="130" cy="70" r="18" fill="#37644d" opacity="0.15"/>
              <circle cx="130" cy="60" r="12" stroke="#1D392B" strokeWidth="2" fill="none"/>
              <path d="M110 110c0-11.05 8.95-20 20-20s20 8.95 20 20" stroke="#1D392B" strokeWidth="2" fill="none" strokeLinecap="round"/>
              {/* Chart bars */}
              <rect x="50" y="120" width="16" height="30" rx="3" fill="#37644d" opacity="0.3"/>
              <rect x="72" y="110" width="16" height="40" rx="3" fill="#37644d" opacity="0.5"/>
              <rect x="94" y="100" width="16" height="50" rx="3" fill="#37644d" opacity="0.7"/>
              <rect x="116" y="115" width="16" height="35" rx="3" fill="#DCBe82" opacity="0.5"/>
              <rect x="138" y="125" width="16" height="25" rx="3" fill="#DCBe82" opacity="0.3"/>
            </svg>
          </div>
        </div>
      </div>

      {/* ══════ JUMLAH PENDUDUK  +  JENIS KELAMIN ══════ */}
      <PairedSection
        id="jumlah-penduduk"
        left={{
          title: "Jumlah Penduduk",
          icon: <IconHeaderPenduduk />,
          content: (
            <div className="grid grid-cols-2 gap-4 w-full">
              {/* Total Penduduk */}
              <div className={`${CARD} p-5 flex items-center gap-4 hover:shadow-md transition-shadow`}>
                <IconTotalPenduduk />
                <div className="flex flex-col">
                  <span className="font-sans font-bold text-[24px] text-primary leading-none">{TOTAL_PENDUDUK.toLocaleString("id-ID")}</span>
                  <span className="font-sans text-[13px] text-muted mt-1">Total Penduduk</span>
                </div>
              </div>
              {/* Kepala Keluarga */}
              <div className={`${CARD} p-5 flex items-center gap-4 hover:shadow-md transition-shadow`}>
                <IconKK />
                <div className="flex flex-col">
                  {TOTAL_KK !== null ? (
                    <span className="font-sans font-bold text-[24px] text-primary leading-none">{TOTAL_KK.toLocaleString("id-ID")}</span>
                  ) : (
                    <span className="font-sans font-semibold text-[14px] text-muted/70 italic leading-none">Belum Ada Data</span>
                  )}
                  <span className="font-sans text-[13px] text-muted mt-1">Kepala Keluarga</span>
                </div>
              </div>
              {/* Laki-laki */}
              <div className={`${CARD} p-5 flex items-center gap-4 hover:shadow-md transition-shadow`}>
                <IconLaki />
                <div className="flex flex-col">
                  <span className="font-sans font-bold text-[24px] text-[#1565C0] leading-none">{MALE_COUNT.toLocaleString("id-ID")}</span>
                  <span className="font-sans text-[13px] text-muted mt-1">Laki-Laki</span>
                </div>
              </div>
              {/* Perempuan */}
              <div className={`${CARD} p-5 flex items-center gap-4 hover:shadow-md transition-shadow`}>
                <IconPerempuan />
                <div className="flex flex-col">
                  <span className="font-sans font-bold text-[24px] text-[#C62828] leading-none">{FEMALE_COUNT.toLocaleString("id-ID")}</span>
                  <span className="font-sans text-[13px] text-muted mt-1">Perempuan</span>
                </div>
              </div>
            </div>
          ),
        }}
        right={{
          title: "Jenis Kelamin",
          icon: <IconHeaderGender />,
          content: <DonutChart />,
        }}
      />

      {/* ══════ PENDUDUK PER DUSUN ══════ */}
      <SubSection id="penduduk-per-dusun" title="Penduduk per Dusun" icon={<IconHeaderDusun />}>
        {DUSUN_HAS_DATA ? (
          <HorizBarChart data={DUSUN} />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
            {DUSUN.map((d) => (
              <div key={d.name} className={`${CARD} p-6 flex items-center gap-4 hover:shadow-md transition-shadow`}>
                <IconDusun />
                <div className="flex flex-col">
                  <span className="font-sans font-bold text-[18px] text-primary leading-tight">{d.name}</span>
                  <span className="font-sans text-[13px] text-muted/70 italic mt-1">Belum Ada Data</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </SubSection>

      {/* ══════ STRUKTUR USIA  +  TINGKAT PENDIDIKAN ══════ */}
      <PairedSection
        id="struktur-usia"
        left={{ title: "Struktur Usia", icon: <IconHeaderUsia />, content: <HorizBarChart data={USIA} /> }}
        right={{ title: "Tingkat Pendidikan", icon: <IconHeaderPendidikan />, content: <HorizBarChart data={PENDIDIKAN} /> }}
      />

      {/* ══════ BERDASARKAN PERKAWINAN ══════ */}
      <SubSection id="status-perkawinan" title="Berdasarkan Status Perkawinan">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 w-full">
          <IconCardGrid data={PERKAWINAN} icons={PERKAWINAN_ICONS} fallback={<IconBelumKawin />} cols="grid-cols-2" />
          <PctBarChart data={PERKAWINAN} total={PERKAWINAN_TOTAL} />
        </div>
      </SubSection>

      {/* ══════ BERDASARKAN AGAMA ══════ */}
      <SubSection id="agama" title="Berdasarkan Agama">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 w-full">
          <IconCardGrid data={AGAMA} icons={AGAMA_ICONS} fallback={<IconIslam />} cols="grid-cols-3 sm:grid-cols-5 xl:grid-cols-3" />
          <PctBarChart data={AGAMA} total={AGAMA_TOTAL} />
        </div>
      </SubSection>

      {/* ══════ MATA PENCAHARIAN ══════ */}
      <SubSection id="mata-pencaharian" title="Mata Pencaharian">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 w-full">
          <IconCardGrid data={MATA_PENCAHARIAN} icons={MATPENG_ICONS} fallback={<IconSektorLain />} cols="grid-cols-2" />
          <PctBarChart data={MATA_PENCAHARIAN} total={MATPENG_TOTAL} />
        </div>
      </SubSection>

    </section>
  );
}
