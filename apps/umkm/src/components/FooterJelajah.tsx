"use client";

import Link from "next/link";
import { useMainSiteUrl } from "@/lib/useMainSiteUrl";

const NAV_LINKS = [
  { href: "/", label: "UMKM" },
  { href: "/wisata", label: "Wisata" },
  { href: "/peta-digital", label: "Peta Digital" },
] as const;

export default function FooterJelajah() {
  const phone = process.env.NEXT_PUBLIC_CONTACT_PHONE ?? "+62 812-3456-7891";
  const email = process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "hi@balerejo.desa.id";
  const telHref = `tel:${phone.replace(/[\s]/g, "")}`;
  const mainSiteUrl = useMainSiteUrl();

  return (
    <footer className="bg-primary p-5 flex flex-col gap-3 rounded-t-[8px]" aria-label="Footer">
      <div className="flex flex-col md:flex-row gap-10 xl:gap-[252px] items-start md:px-20">
        <div className="flex flex-col gap-[2px]">
          <p className="font-heading font-bold text-[22px] text-white leading-[1.3]">
            Jelajah Balerejo
          </p>
          <p className="font-sans text-[15px] text-[#bfbfbf] leading-[1.6]">
            Kecamatan Panggungrejo, Kabupaten Blitar
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <p className="font-sans text-[14px] text-accent leading-[1.6]">Navigasi</p>
          <ul className="flex flex-col leading-[1.6]">
            {NAV_LINKS.map(({ href, label }) => (
              <li key={label}>
                <Link
                  href={href}
                  className="font-sans text-[15px] text-[#bfbfbf] hover:text-white transition-colors duration-200"
                >
                  {label}
                </Link>
              </li>
            ))}
            <li>
              <a
                href={mainSiteUrl || "#"}
                className="font-sans text-[15px] text-[#bfbfbf] hover:text-white transition-colors duration-200"
              >
                Situs Utama Desa
              </a>
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-[7px]">
          <p className="font-sans text-[14px] text-accent leading-[1.6]">Kontak</p>
          <div className="flex flex-col leading-[1.6]">
            <a
              href={telHref}
              className="font-sans text-[15px] text-[#bfbfbf] hover:text-white transition-colors duration-200"
            >
              {phone}
            </a>
            <a
              href={`mailto:${email}`}
              className="font-sans text-[15px] text-[#bfbfbf] hover:text-white transition-colors duration-200"
            >
              {email}
            </a>
          </div>
        </div>
      </div>

      <div className="h-px w-full bg-white/[0.12]" aria-hidden="true" />

      <div className="flex items-center justify-between">
        <p className="font-sans text-[12px] text-[#bfbfbf] leading-[1.6]">
          © 2026 Pemerintah Desa Balerejo · MMD FILKOM Universitas Brawijaya
        </p>
        <span className="font-sans text-[12px] text-[#bfbfbf] leading-[1.6]">Versi 1.0</span>
      </div>
    </footer>
  );
}
