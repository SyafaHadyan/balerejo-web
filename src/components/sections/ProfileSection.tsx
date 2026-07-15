const BLOCKS = [
  {
    id: "sejarah",
    eyebrow: "SEJARAH SINGKAT",
    heading: "Sejarah Singkat",
    body: process.env.NEXT_PUBLIC_SEJARAH_BODY
      ?? `Nama Balerejo dipercaya berasal dari "bale" (tempat berkumpul) dan "rejo" (ramai, makmur) - cita-cita warga sejak desa dirintis puluhan tahun lalu.`,
  },
  {
    id: "visi-misi",
    eyebrow: "VISI & MISI",
    heading: "Visi & Misi",
    body: process.env.NEXT_PUBLIC_VISI_MISI_BODY
      ?? "Visi: mewujudkan desa mandiri berbasis pertanian dan UMKM. Misi mencakup penguatan ekonomi lokal, tata kelola desa yang transparan, dan pelestarian lingkungan.",
  },
];

export default function ProfileSection() {
  return (
    <section
      className="bg-surface flex flex-col md:flex-row gap-[50px] items-start justify-center px-[30px] py-[50px]"
      aria-label="Profil desa"
    >
      {BLOCKS.map(({ id, eyebrow, heading, body }) => (
        <div key={id} className="flex flex-col gap-[10px] p-[30px]">
          <p className="font-sans font-semibold text-[11px] leading-[1.6] text-accent">
            {eyebrow}
          </p>
          <h2 className="font-heading font-bold text-[20px] leading-[1.3] text-primary">
            {heading}
          </h2>
          <div className="h-[3px] w-[100px] bg-accent rounded-[2px]" aria-hidden="true" />
          <p className="font-sans text-[14px] leading-normal text-muted opacity-75 max-w-[500px]">
            {body}
          </p>
        </div>
      ))}
    </section>
  );
}
