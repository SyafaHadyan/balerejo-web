import Image from "next/image";

const ITEMS = [
  { id: 1, caption: "Wisata Gunung",          src: "/images/wisata-gunung.png" },
  { id: 2, caption: "Persawahan Desa",        src: "/images/persawahan-desa.jpg" },
  { id: 3, caption: "Wisata Alam",            src: "/images/wisata-alam.jpg" },
  { id: 4, caption: "Jalan Utama Desa",       src: "/images/jalan-utama-desa.jpg" },
  { id: 5, caption: "Pemandangan Pegunungan", src: "/images/pemandangan-pegunungan.jpg" },
  { id: 6, caption: "Candi",                  src: "/images/candi.jpg" },
  { id: 7, caption: "UMKM Desa",              src: "/images/umkm-desa.jpg" },
  { id: 8, caption: "Makanan Khas Desa",      src: "/images/makanan-khas-desa.jpg" },
];

function GalleryCard({ caption, src }: { caption: string; src: string }) {
  return (
    <div className="relative w-full aspect-[3/2] rounded-[8px] overflow-hidden bg-[#ccc]">
      {src && (
        <Image
          src={src}
          alt={caption}
          fill
          className="object-cover"
          sizes="(min-width: 1024px) 25vw, 50vw"
        />
      )}
      {caption && (
        <div className="absolute bottom-0 left-0 right-0 h-[40px] bg-primary rounded-[8px] flex items-center px-[10px]">
          <p className="font-sans font-semibold text-[11px] text-white leading-normal">
            {caption}
          </p>
        </div>
      )}
    </div>
  );
}

export default function GaleriSection() {
  return (
    <section className="p-[50px]" aria-label="Galeri kegiatan">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-[20px]">
        {ITEMS.map(({ id, caption, src }) => (
          <GalleryCard key={id} caption={caption} src={src} />
        ))}
      </div>
    </section>
  );
}
