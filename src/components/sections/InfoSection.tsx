import SubdomainLink from "@/components/SubdomainLink";

const INFO_CARDS = [
  {
    id: "umkm",
    eyebrow: "KATALOG UMKM",
    title: "Kunjungi Katalog UMKM Desa",
    description: "Usaha warga dan produk lokal ada di website terpisah.",
    cta: "Buka Katalog",
    prefix: "umkm",
  },
  {
    id: "wisata",
    eyebrow: "PETA WISATA",
    title: "Kunjungi Peta Wisata Desa",
    description: "Titik wisata & lokasi UMKM ada di peta interaktif terpisah.",
    cta: "Buka Peta",
    prefix: "wisata",
  },
] as const;

export default function InfoSection() {
  return (
    <section className="flex flex-col items-center gap-[30px] py-[30px]" aria-label="Info lainnya">
      <h2 className="font-heading font-bold text-[26px] leading-[1.3] text-primary">
        Info Lainnya
      </h2>

      <div className="flex flex-col md:flex-row gap-[30px] w-full max-w-[1260px] px-5 md:px-0">
        {INFO_CARDS.map(({ id, eyebrow, title, description, cta, prefix }) => (
          <article
            key={id}
            className="flex-1 flex flex-col gap-[30px] bg-surface border-[1.5px] border-solid border-divider rounded-[14px] px-6 py-[30px]"
          >
            <div className="flex flex-col gap-3 text-primary">
              <p className="font-sans font-semibold text-[13px] leading-[1.6]">
                {eyebrow}
              </p>
              <h3 className="font-heading font-bold text-[20px] leading-[1.3]">
                {title}
              </h3>
              <p className="font-sans text-[13px] leading-[1.6] opacity-65">
                {description}
              </p>
            </div>

            <SubdomainLink
              prefix={prefix}
              className="inline-flex items-center justify-center px-[30px] py-[10px] bg-accent rounded-[10px] font-sans font-bold text-[15px] leading-[1.6] text-primary hover:opacity-90 transition-opacity duration-200"
            >
              {cta}
            </SubdomainLink>
          </article>
        ))}
      </div>
    </section>
  );
}
