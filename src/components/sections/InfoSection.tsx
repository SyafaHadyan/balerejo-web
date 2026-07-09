import SubdomainLink from "@/components/SubdomainLink";

const INFO_CARDS = [
  {
    id: "umkm",
    eyebrow: "KATALOG UMKM",
    title: "Kunjungi Katalog UMKM Desa",
    description: "Usaha warga dan produk lokal ada di website terpisah.",
    cta: "Buka website UMKM",
    prefix: "umkm",
  },
  {
    id: "wisata",
    eyebrow: "PETA WISATA",
    title: "Kunjungi Peta Wisata Desa",
    description: "Titik wisata & lokasi UMKM ada di peta interaktif terpisah.",
    cta: "Buka peta wisata",
    prefix: "wisata",
  },
] as const;

export default function InfoSection() {
  return (
    <section className="flex flex-col items-center py-[30px] px-5" aria-label="Info lainnya">
      <h2 className="font-heading font-bold text-[26px] leading-normal text-primary mb-0">
        Info Lainnya
      </h2>

      <div className="flex flex-col md:flex-row gap-[30px] w-full max-w-[1260px] p-5">
        {INFO_CARDS.map(({ id, eyebrow, title, description, cta, prefix }) => (
          <article
            key={id}
            className="flex-1 flex flex-col gap-[30px] bg-surface border-[1.5px] border-solid border-[#dbdbd1] rounded-[14px] px-6 py-[30px]"
          >
            <div className="flex flex-col gap-3">
              <p className="font-sans font-semibold text-[12px] text-[#37644d]">
                {eyebrow}
              </p>
              <h3 className="font-heading font-bold text-[22px] text-primary">
                {title}
              </h3>
              <p className="font-sans text-[13px] text-primary/65">
                {description}
              </p>
            </div>

            <SubdomainLink
              prefix={prefix}
              className="inline-flex items-center justify-center h-[28px] w-[150px] bg-accent rounded-[10px] font-sans font-semibold text-[15px] leading-none text-primary hover:opacity-90 transition-opacity duration-200"
            >
              {cta}
            </SubdomainLink>
          </article>
        ))}
      </div>
    </section>
  );
}
