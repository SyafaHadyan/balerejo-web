import Image from "next/image";

const ITEMS = [
  {
    id: 1,
    caption: "Wisata Gunung",
    description: "Pemandangan alam pegunungan yang megah di sekitar wilayah Desa Balerejo, menjadi latar belakang kehidupan warga sehari-hari.",
    src: "/images/wisata-gunung.png",
  },
  {
    id: 2,
    caption: "Persawahan Desa",
    description: "Hamparan sawah hijau yang subur menjadi salah satu potensi pertanian utama Desa Balerejo, dikelola turun-temurun oleh warga.",
    src: "/images/persawahan-desa.jpg",
  },
  {
    id: 3,
    caption: "Wisata Alam",
    description: "Keindahan alam yang masih asri di sekitar Balerejo menawarkan suasana segar dan menenangkan bagi warga maupun pengunjung.",
    src: "/images/wisata-alam.jpg",
  },
  {
    id: 4,
    caption: "Jalan Utama Desa",
    description: "Jalan utama Desa Balerejo yang menghubungkan berbagai dusun, menjadi urat nadi mobilitas warga setiap harinya.",
    src: "/images/jalan-utama-desa.jpg",
  },
  {
    id: 5,
    caption: "Pemandangan Pegunungan",
    description: "Panorama pegunungan yang memukau mengelilingi Desa Balerejo, menciptakan suasana sejuk dan pemandangan yang indah sepanjang tahun.",
    src: "/images/pemandangan-pegunungan.jpg",
  },
  {
    id: 6,
    caption: "Candi",
    description: "Warisan budaya dan situs bersejarah yang berada di kawasan sekitar Desa Balerejo, menjadi bagian dari kekayaan budaya lokal.",
    src: "/images/candi.jpg",
  },
  {
    id: 7,
    caption: "UMKM Desa",
    description: "Kegiatan usaha mikro, kecil, dan menengah warga Balerejo yang terus berkembang, menjadi penggerak ekonomi desa.",
    src: "/images/umkm-desa.jpg",
  },
  {
    id: 8,
    caption: "Makanan Khas Desa",
    description: "Ragam kuliner dan makanan khas yang dibuat oleh warga Balerejo, mencerminkan kekayaan cita rasa dan tradisi lokal yang terjaga.",
    src: "/images/makanan-khas-desa.jpg",
  },
];

function GalleryCard({ caption, description, src }: { caption: string; description: string; src: string }) {
  return (
    <div className="group flex flex-col rounded-[12px] overflow-hidden border-[1.5px] border-[#e1dfd9] bg-white hover:shadow-lg transition-shadow duration-300">
      {/* Image */}
      <div className="relative w-full aspect-[16/10] bg-[#c9c8ba] overflow-hidden">
        {src && (
          <Image
            src={src}
            alt={caption}
            fill
            className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
            sizes="(min-width: 1024px) 50vw, 100vw"
          />
        )}
      </div>

      {/* Body */}
      <div className="flex flex-col gap-2 px-6 py-5">
        <h3 className="font-heading font-bold text-[20px] text-primary leading-[1.3]">
          {caption}
        </h3>
        <p className="font-sans text-[14px] text-muted leading-[1.7]">
          {description}
        </p>
      </div>
    </div>
  );
}

export default function GaleriSection() {
  return (
    <section className="bg-white py-[60px] px-[50px]" aria-label="Galeri kegiatan">
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {ITEMS.map(({ id, caption, description, src }) => (
          <GalleryCard key={id} caption={caption} description={description} src={src} />
        ))}
      </div>
    </section>
  );
}
