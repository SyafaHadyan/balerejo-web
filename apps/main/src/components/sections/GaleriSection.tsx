import Image from "next/image";

const ITEMS = [
  {
    id: 1,
    caption: "Panorama Pagi Desa",
    description:
      "Pemandangan pagi dari ketinggian memperlihatkan hamparan lembah hijau Desa Balerejo dengan siluet gunung di kejauhan dan langit fajar yang memukau.",
    src: "/images/panorama-pagi.jpg",
  },
  {
    id: 2,
    caption: "Pantai Selatan Balerejo",
    description:
      "Garis pantai berbatu di pesisir selatan Balerejo dengan deburan ombak Samudra Hindia dan tebing hijau yang menjadi ciri khas keindahan alam kawasan ini.",
    src: "/images/pantai-selatan.jpg",
  },
  {
    id: 3,
    caption: "Kebun Tomat Desa",
    description:
      "Hamparan kebun tomat warga Balerejo yang dikelola dengan teknik mulsa plastik. Pertanian hortikultura menjadi salah satu mata pencaharian utama warga desa.",
    src: "/images/kebun-tomat.jpg",
  },
  {
    id: 4,
    caption: "Panen Tomat",
    description:
      "Buah tomat hijau yang tumbuh lebat di kebun warga menandakan musim panen yang menjanjikan. Tomat menjadi komoditas unggulan pertanian Desa Balerejo.",
    src: "/images/panen-tomat.jpg",
  },
  {
    id: 5,
    caption: "Gerbang Desa Balerejo",
    description:
      "Gerbang selamat datang Desa Balerejo yang kokoh menjadi penanda batas wilayah sekaligus identitas kebanggaan warga yang menandai pintu masuk desa.",
    src: "/images/gerbang-desa.jpg",
  },
  {
    id: 6,
    caption: "Jalan Utama Desa",
    description:
      "Jalan utama Desa Balerejo yang menghubungkan berbagai dusun dengan deretan rumah warga di kanan kiri, menjadi urat nadi mobilitas sehari-hari.",
    src: "/images/jalan-desa.jpg",
  },
  {
    id: 7,
    caption: "Taman Belik Gedhe",
    description:
      "Papan nama Taman Belik Gedhe, destinasi wisata alam unggulan Desa Balerejo yang menampilkan sumber mata air besar sebagai daya tarik utamanya.",
    src: "/images/taman-belik-gedhe-galeri.jpg",
  },
  {
    id: 8,
    caption: "Candi Balerejo",
    description:
      "Struktur candi batu bersejarah yang berdiri kokoh di bawah naungan pohon rindang, menjadi bukti kekayaan warisan budaya dan sejarah Desa Balerejo.",
    src: "/images/candi-balerejo.jpg",
  },
  {
    id: 9,
    caption: "Panen Bawang Merah",
    description:
      "Bawang merah hasil panen warga Balerejo yang dijemur di bawah sinar matahari. Komoditas ini menjadi salah satu hasil bumi andalan pertanian desa.",
    src: "/images/panen-bawang-merah.jpg",
  },
  {
    id: 10,
    caption: "Budidaya Cabai",
    description:
      "Tanaman cabai muda yang tumbuh pada lahan dengan sistem tanam teratur. Budidaya cabai menjadi usaha pertanian yang banyak digeluti warga Balerejo.",
    src: "/images/budidaya-cabai.jpg",
  },
  {
    id: 11,
    caption: "Batuan Pantai Selatan",
    description:
      "Hamparan batu andesit alami di pantai selatan dengan air jernih di sela-selanya, membentuk lanskap unik pesisir Balerejo yang belum banyak dikenal.",
    src: "/images/batuan-pantai.jpg",
  },
  {
    id: 12,
    caption: "Gereja Stasi St. Petrus",
    description:
      "Gereja Katolik Stasi St. Petrus Sekargadung, salah satu fasilitas ibadah warga Desa Balerejo yang mencerminkan kerukunan umat beragama di desa ini.",
    src: "/images/gereja-stasi.jpg",
  },
];

function GalleryCard({ caption, description, src }: { caption: string; description: string; src: string }) {
  return (
    <div className="group flex flex-col rounded-[12px] overflow-hidden border-[1.5px] border-[#e1dfd9] bg-white hover:shadow-lg transition-shadow duration-300">
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
