type ProfileBlock = { id: string; eyebrow: string; heading: string; body?: string; list?: string[] };

export default function ProfileSection() {
  const blocks: ProfileBlock[] = [
    {
      id: "sejarah",
      eyebrow: "SEJARAH SINGKAT",
      heading: "Sejarah Singkat",
      body: process.env.NEXT_PUBLIC_SEJARAH_BODY
        ?? `Nama "Balerejo" berasal dari kata Bale (balai, tempat berkumpul) dan Rejo (ramai). Dahulu kawasan ini adalah kebun kopi yang dikenal sebagai Dukuh Thethelan, bagian dari Desa Sumberagung. Di bawah kepemimpinan Sotoredjo, warga membangun sebuah balai besar sebagai tempat musyawarah dan pagelaran kesenian yang selalu ramai dikunjungi, sehingga dukuh ini pun dikenal dengan nama Balerejo. Pada tahun 1914, Balerejo resmi berdiri sebagai desa mandiri yang terpisah dari Desa Sumberagung, dengan Sotoredjo sebagai Kepala Desa pertama.`,
    },
    {
      id: "visi",
      eyebrow: "VISI",
      heading: "Visi",
      body: process.env.NEXT_PUBLIC_VISI_BODY
        ?? `"Terwujudnya Desa Balerejo dan Aparatur Pemerintah Desa yang Berkualitas untuk Mendukung Pembangunan Desa dalam Mewujudkan Kesejahteraan Masyarakat yang Lebih Mandiri."`,
    },
    {
      id: "misi",
      eyebrow: "MISI",
      heading: "Misi",
      list: [
        process.env.NEXT_PUBLIC_MISI_1 ?? "Meningkatkan kualitas desa dan perangkat desa yang lebih berkompeten",
        process.env.NEXT_PUBLIC_MISI_2 ?? "Mewujudkan pembangunan desa yang merata",
        process.env.NEXT_PUBLIC_MISI_3 ?? "Meningkatkan pembangunan ekonomi pedesaan, pariwisata, dan kesejahteraan masyarakat",
      ],
    },
  ];

  return (
    <section
      className="bg-surface flex flex-col md:flex-row gap-[67px] items-start justify-center px-[40px] py-[67px]"
      aria-label="Profil desa"
    >
      {blocks.map(({ id, eyebrow, heading, body, list }) => (
        <div key={id} className="flex flex-col gap-[13px] p-[40px]">
          <p className="font-sans font-semibold text-[15px] leading-[1.6] text-accent">
            {eyebrow}
          </p>
          <h2 className="font-heading font-bold text-[27px] leading-[1.3] text-primary">
            {heading}
          </h2>
          <div className="h-[4px] w-[133px] bg-accent rounded-[2px]" aria-hidden="true" />
          {list ? (
            <ul className="flex flex-col gap-[11px] max-w-[665px]">
              {list.map((item) => (
                <li key={item} className="flex gap-2 font-sans text-[19px] leading-normal text-muted opacity-75">
                  <span className="text-accent shrink-0">•</span>
                  {item}
                </li>
              ))}
            </ul>
          ) : (
            <p className="font-sans text-[19px] leading-normal text-muted opacity-75 max-w-[665px]">
              {body}
            </p>
          )}
        </div>
      ))}
    </section>
  );
}
