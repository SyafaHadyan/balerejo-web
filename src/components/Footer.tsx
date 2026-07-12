import Link from "next/link";

const NAV_LINKS = [
  { href: "/", label: "Beranda" },
  { href: "/profil-desa", label: "Profil Desa" },
  { href: "/infografis", label: "Infografis" },
  { href: "/galeri", label: "Galeri" },
] as const;

export default function Footer() {
  const phone = process.env.NEXT_PUBLIC_CONTACT_PHONE ?? "+62 812-3456-7891";
  const email = process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "hi@balerejo.desa.id";
  const telHref = `tel:${phone.replace(/[\s]/g, "")}`;

  return (
    <footer className="bg-primary p-5 flex flex-col gap-3 rounded-t-[8px]" aria-label="Footer">
      <div className="flex flex-col md:flex-row gap-10 xl:gap-[252px] items-start md:px-20">
        <div className="flex flex-col gap-[2px]">
          <p className="font-heading font-bold text-[20px] text-white leading-[1.3]">
            Desa Balerejo
          </p>
          <p className="font-sans text-[13px] text-[#bfbfbf] leading-[1.6]">
            Kecamatan Panggungrejo, Kabupaten Blitar
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <p className="font-sans text-[11px] text-accent leading-[1.6]">
            Navigasi
          </p>
          <ul className="flex flex-col leading-[1.6]">
            {NAV_LINKS.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="font-sans text-[13px] text-[#bfbfbf] hover:text-white transition-colors duration-200"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-[7px]">
          <p className="font-sans text-[11px] text-accent leading-[1.6]">
            Kontak
          </p>
          <div className="flex flex-col leading-[1.6]">
            <a
              href={telHref}
              className="font-sans text-[13px] text-[#bfbfbf] hover:text-white transition-colors duration-200"
            >
              {phone}
            </a>
            <a
              href={`mailto:${email}`}
              className="font-sans text-[13px] text-[#bfbfbf] hover:text-white transition-colors duration-200"
            >
              {email}
            </a>
          </div>
        </div>
      </div>

      <div className="h-px w-full bg-white/[0.12]" aria-hidden="true" />

      <div className="flex items-center justify-between">
        <p className="font-sans text-[11px] text-[#bfbfbf] leading-[1.6]">
          © 2026 Pemerintah Desa Balerejo · MMD FILKOM Universitas Brawijaya
        </p>
        <span className="font-sans text-[11px] text-[#bfbfbf] leading-[1.6]">
          Versi 1.0
        </span>
      </div>
    </footer>
  );
}
