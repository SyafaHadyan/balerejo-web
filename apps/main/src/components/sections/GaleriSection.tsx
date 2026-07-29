import Image from "next/image";

const ITEMS = [
  {
    id: 1,
    caption: "Suasana Desa Balerejo di Sore Hari",
    description:
      "Panorama sore dari ketinggian memperlihatkan hamparan lembah hijau Desa Balerejo dengan siluet gunung di kejauhan dan langit senja yang memukau.",
    src: "/images/panorama-pagi.jpg",
  },
  {
    id: 2,
    caption: "Pantai Sekargadung",
    description:
      "Garis pantai berbatu Pantai Sekargadung dengan deburan ombak Samudra Hindia dan tebing hijau yang menjadi ciri khas keindahan alam pesisir selatan Balerejo.",
    src: "/images/pantai-sekargadung.jpg",
  },
  {
    id: 3,
    caption: "Kebun Cabai Desa",
    description:
      "Hamparan kebun cabai warga Balerejo yang dikelola dengan teknik mulsa plastik. Budidaya cabai menjadi salah satu mata pencaharian hortikultura utama warga desa.",
    src: "/images/kebun-cabe.jpg",
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
    caption: "Masuk Desa Balerejo",
    description:
      "Gerbang masuk Desa Balerejo yang kokoh menjadi penanda batas wilayah sekaligus identitas kebanggaan warga yang menyambut setiap pengunjung yang datang.",
    src: "/images/gerbang-desa.jpg",
  },
  {
    id: 6,
    caption: "Pemukiman Desa Balerejo",
    description:
      "Deretan rumah warga Desa Balerejo yang tertata di sepanjang jalan desa, mencerminkan kehidupan masyarakat yang rukun dan lingkungan yang asri.",
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
    caption: "Pendanyangan Kucur Lamtaran",
    description:
      "Situs candi batu bersejarah di Desa Balerejo yang berdiri kokoh di bawah naungan pohon rindang, menjadi destinasi wisata sejarah dan budaya yang berharga.",
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
      "Bibit cabai muda yang ditopang ajir bambu pada lahan dengan sistem tanam teratur. Budidaya cabai menjadi usaha pertanian yang banyak digeluti warga Balerejo.",
    src: "/images/budidaya-cabai.jpg",
  },
  {
    id: 11,
    caption: "Air Pantai Sekargadung",
    description:
      "Hamparan batuan alami di bibir pantai Sekargadung dengan air jernih yang menggenang di sela-selanya, membentuk lanskap unik pesisir selatan Balerejo.",
    src: "/images/batuan-pantai.jpg",
  },
  {
    id: 12,
    caption: "Gereja Stasi St. Petrus",
    description:
      "Gereja Katolik Stasi St. Petrus Sekargadung, salah satu fasilitas ibadah warga Desa Balerejo yang mencerminkan kerukunan umat beragama di desa ini.",
    src: "/images/gereja-stasi.jpg",
  },
  {
    id: 13,
    caption: "Air Terjun Grenjeng",
    description:
      "Air terjun tersembunyi di antara lebatnya hutan sekitar Desa Balerejo. Suasana sejuk dan alami menjadikannya destinasi wisata alam yang menyegarkan.",
    src: "/images/air-terjun-grenjeng.jpg",
  },
  {
    id: 14,
    caption: "Perbukitan Desa Balerejo",
    description:
      "Hamparan perbukitan hijau Desa Balerejo dengan cakrawala laut selatan yang membentang di kejauhan, memperlihatkan keindahan alam yang memukau.",
    src: "/images/perbukitan-desa.jpg",
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
            className="object-cover scale-[1.12] group-hover:scale-[1.15] transition-transform duration-500"
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
