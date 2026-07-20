import Image from "next/image";
import React from "react";

const CARD = "bg-white border border-[#e5e5e5] rounded-[16px] shadow-[0_2px_8px_rgba(0,0,0,0.06)]";

function IconBarat() {
  return (
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="22" cy="22" r="22" fill="#E3F2FD"/>
      <path d="M29 22H15M15 22l6-6M15 22l6 6" stroke="#1565C0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function IconTimur() {
  return (
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="22" cy="22" r="22" fill="#FFF3E0"/>
      <path d="M15 22h14M22 16l6 6-6 6" stroke="#E65100" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function IconSelatan() {
  return (
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="22" cy="22" r="22" fill="#E8F5E9"/>
      <path d="M22 15v14M16 22l6 6 6-6" stroke="#2E7D32" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function IconUtara() {
  return (
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="22" cy="22" r="22" fill="#F3E5F5"/>
      <path d="M22 29V15M16 22l6-6 6 6" stroke="#7B1FA2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

type BatasDesa = { arah: string; wilayah: string; langsung?: boolean; Icon: () => React.JSX.Element };

const BATAS_DESA: BatasDesa[] = [
  { arah: "Barat",   wilayah: "Desa Panggungrejo, Kaligambir Kec. Panggungrejo",                        Icon: IconBarat },
  { arah: "Timur",   wilayah: "Desa Sumberkembar Kec. Binangun; Desa Purworejo, Tulungrejo, Kec. Wates", Icon: IconTimur },
  { arah: "Selatan", wilayah: "Laut", langsung: true,                                                    Icon: IconSelatan },
  { arah: "Utara",   wilayah: "Desa Sumberagung",                                                        Icon: IconUtara },
];

function GeografisCard() {
  return (
    <div className={`${CARD} p-6 md:p-8 flex flex-col gap-4 w-full`}>
      <h3 className="font-heading font-bold text-[22px] leading-[1.3] text-primary">
        Kondisi Geografis Desa
      </h3>
      <p className="font-sans text-[15px] leading-[1.7] text-muted">
        Secara geografis Desa Balerejo terletak pada posisi 8°15&apos;–8°20&apos; Lintang Selatan
        dan 112°16&apos;–112°19&apos; Bujur Timur. Luas wilayah desa mencapai 1.720,93 hektar (17,21 km²).
        Desa Balerejo berada dalam wilayah Kecamatan Panggungrejo, Kabupaten Blitar,
        Provinsi Jawa Timur, berbatasan dengan desa-desa yang termasuk dalam
        Kecamatan Binangun dan Kecamatan Wates di sisi timur.
      </p>

      <div className="h-px bg-divider" />

      <div className="flex flex-col gap-4">
        {BATAS_DESA.map(({ arah, wilayah, langsung, Icon }) => (
          <div key={arah} className="flex items-start gap-3">
            <div className="shrink-0">
              <Icon />
            </div>
            <div className="flex flex-col gap-0.5 pt-1">
              <span className="font-sans font-semibold text-[14px] text-primary">Sebelah {arah}</span>
              <span className="font-sans text-[14px] text-muted">
                berbatasan {langsung && "langsung "}dengan {wilayah}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function MapSection() {
  return (
    <section className="flex flex-col items-center gap-[30px] py-[30px]" aria-label="Peta digital desa">
      <div className="flex flex-col items-center gap-[30px] text-center px-6">
        <h2 className="font-heading font-bold text-[28px] md:text-[36px] leading-[1.3] text-primary">
          Wilayah Desa
        </h2>
        <p className="font-sans text-[15px] leading-[1.6] text-muted">
          Jelajahi lokasi dan batas wilayah Desa Balerejo
        </p>
      </div>

      <div className="w-full max-w-[1200px] px-6 flex flex-col gap-8">
        <div className="w-full">
          <Image
            src="/images/map.png"
            alt="Peta Digital Desa Balerejo"
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-auto rounded-[16px]"
          />
        </div>
        <GeografisCard />
      </div>
    </section>
  );
}
