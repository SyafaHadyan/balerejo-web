import SubdomainLink from "@/components/SubdomainLink";

/* ── Social media brand icons (inline SVG) ─────────────────────────── */

function InstagramIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <linearGradient id="ig-grad" x1="0" y1="24" x2="24" y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0%"   stopColor="#f09433"/>
          <stop offset="25%"  stopColor="#e6683c"/>
          <stop offset="50%"  stopColor="#dc2743"/>
          <stop offset="75%"  stopColor="#cc2366"/>
          <stop offset="100%" stopColor="#bc1888"/>
        </linearGradient>
      </defs>
      <rect x="2" y="2" width="20" height="20" rx="5.5" fill="url(#ig-grad)"/>
      <circle cx="12" cy="12" r="4.5" stroke="white" strokeWidth="1.8" fill="none"/>
      <circle cx="17" cy="7" r="1.2" fill="white"/>
    </svg>
  );
}

function TiktokIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect width="24" height="24" rx="6" fill="#010101"/>
      <path
        d="M16.5 5.5c.3 1.8 1.5 3 3 3.3v2.2c-1.1-.1-2.1-.5-3-1.1V15c0 2.5-2 4.5-4.5 4.5S7.5 17.5 7.5 15s2-4.5 4.5-4.5c.2 0 .4 0 .5.1v2.3c-.2-.1-.3-.1-.5-.1-1.2 0-2.2 1-2.2 2.2s1 2.2 2.2 2.2 2.2-1 2.2-2.2V5.5h2.3Z"
        fill="white"
      />
      <path
        d="M16.5 5.5c.3 1.8 1.5 3 3 3.3v2.2c-1.1-.1-2.1-.5-3-1.1"
        fill="#25F4EE"
      />
    </svg>
  );
}

function YoutubeIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect x="2" y="5" width="20" height="14" rx="4" fill="#FF0000"/>
      <path d="M10 9.5l5 2.5-5 2.5V9.5Z" fill="white"/>
    </svg>
  );
}

/* ── Social media links data ────────────────────────────────────────── */

const SOCIAL_LINKS = [
  {
    id: "instagram",
    label: "Instagram",
    handle: "@desabalerejo.official",
    href: "https://instagram.com/desabalerejo.official",
    icon: <InstagramIcon size={20} />,
  },
  {
    id: "tiktok",
    label: "TikTok",
    handle: "@desabalerejo",
    href: "https://tiktok.com/@desabalerejo",
    icon: <TiktokIcon size={20} />,
  },
  {
    id: "youtube",
    label: "YouTube",
    handle: "Desa Balerejo Official",
    href: "https://youtube.com/@DesaBalerejoPanggungrejo",
    icon: <YoutubeIcon size={20} />,
  },
] as const;

/* ── Component ──────────────────────────────────────────────────────── */

export default function InfoSection() {
  return (
    <section className="flex flex-col items-center gap-[30px] py-[30px]" aria-label="Info lainnya">
      <h2 className="font-heading font-bold text-[26px] leading-[1.3] text-primary">
        Info Lainnya
      </h2>

      <div className="flex flex-col md:flex-row md:items-start gap-[30px] w-full max-w-[1260px] px-5 md:px-0">

        {/* ── UMKM Card ── */}
        <article className="md:flex-1 flex flex-col gap-[30px] bg-surface border-[1.5px] border-solid border-divider rounded-[14px] px-6 py-[30px]">
          <div className="flex flex-col gap-3 text-primary">
            <p className="font-sans font-semibold text-[13px] leading-[1.6]">KATALOG UMKM</p>
            <h3 className="font-heading font-bold text-[20px] leading-[1.3]">
              Kunjungi Katalog UMKM Desa
            </h3>
            <p className="font-sans text-[13px] leading-[1.6] opacity-65">
              Usaha warga dan produk lokal ada di website terpisah.
            </p>
          </div>
          <SubdomainLink
            prefix="umkm"
            className="inline-flex items-center justify-center px-[30px] py-[13px] bg-accent rounded-[10px] font-sans font-bold text-[15px] leading-none text-primary hover:opacity-90 transition-opacity duration-200"
          >
            Buka Katalog
          </SubdomainLink>
        </article>

        {/* ── Social Media Card ── */}
        <article className="md:flex-1 flex flex-col gap-[30px] bg-surface border-[1.5px] border-solid border-divider rounded-[14px] px-6 py-[30px]">
          <div className="flex flex-col gap-3 text-primary">
            <p className="font-sans font-semibold text-[13px] leading-[1.6]">SOSIAL MEDIA</p>
            <h3 className="font-heading font-bold text-[20px] leading-[1.3]">
              Ikuti Media Sosial Desa
            </h3>
            <p className="font-sans text-[13px] leading-[1.6] opacity-65">
              Dapatkan info terkini seputar kegiatan dan pengumuman Desa Balerejo.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            {SOCIAL_LINKS.map(({ id, label, handle, href, icon }) => (
              <a
                key={id}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-4 py-3 bg-white border border-divider rounded-[10px] hover:border-accent hover:bg-accent/5 transition-colors duration-200"
              >
                <span className="shrink-0">{icon}</span>
                <span className="flex flex-col min-w-0">
                  <span className="font-sans font-semibold text-[13px] text-primary leading-none">{label}</span>
                  <span className="font-sans text-[12px] text-muted leading-none mt-[3px] truncate">{handle}</span>
                </span>
              </a>
            ))}
          </div>
        </article>

      </div>
    </section>
  );
}
