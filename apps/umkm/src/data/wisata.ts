export interface WisataSpot {
  slug: string;
  name: string;
  type: "pantai" | "dam" | "taman" | "candi";
  description: string;
  address: string;
  /** Rp-formatted string or "Gratis". null = unknown */
  htm: string | null;
  image: string;
  lat: number;
  lng: number;
}

export const WISATA: WisataSpot[] = [
  {
    slug: "pendanyangan-kucur-lamtaran",
    name: "Pendanyangan Kucur Lamtaran",
    type: "candi",
    description:
      "Situs candi batu bersejarah yang berdiri kokoh di bawah naungan pohon rindang di Desa Balerejo. Menjadi destinasi wisata budaya yang menyimpan kekayaan sejarah lokal.",
    address: "Desa Balerejo, Kec. Panggungrejo, Kab. Blitar",
    htm: null,
    image: "/images/wisata/pendanyangan-kucur-lamtaran.jpg",
    lat: -8.3004061,
    lng: 112.3009006,
  },
  {
    slug: "dam-kehidupan",
    name: "DAM Kehidupan",
    type: "dam",
    description:
      "Aliran air kecil yang mengalir tenang di antara hamparan hijau pedesaan. Tempat yang sederhana namun menenangkan, cocok untuk sejenak melepas penat dari kesibukan sehari-hari.",
    address: "Desa Balerejo, Kec. Panggungrejo, Kab. Blitar",
    htm: null,
    image: "/images/wisata/dam-kehidupan.jpg",
    lat: -8.2990764,
    lng: 112.3012041,
  },
  {
    slug: "sabuk-dam-balongrejo",
    name: "Sabuk DAM Balongrejo",
    type: "dam",
    description:
      "Area dam dengan hamparan air dan perbukitan hijau di sekitar Balongrejo. Spot alami yang cocok untuk bersantai menikmati ketenangan alam pedesaan.",
    address: "Desa Balerejo, Kec. Panggungrejo, Kab. Blitar",
    htm: null,
    image: "/images/wisata/sabuk-dam-balongrejo.jpg",
    lat: -8.2717589,
    lng: 112.2920762,
  },
  {
    slug: "taman-belik-gedhe",
    name: "Taman Belik Gedhe",
    type: "taman",
    description:
      "Taman alam dengan sumber mata air besar yang menjadi ciri khasnya. Belik Gedhe dalam bahasa Jawa berarti mata air besar, mengalirkan air jernih yang menyegarkan.",
    address: "Desa Balerejo, Kec. Panggungrejo, Kab. Blitar",
    htm: null,
    image: "/images/wisata/taman-belik-gedhe.jpg",
    lat: -8.251522,
    lng: 112.2999297,
  },
  {
    slug: "pantai-sekar-gadung",
    name: "Pantai Sekar Gadung",
    type: "pantai",
    description:
      "Pantai di pesisir selatan Blitar dengan ombak khas Samudra Hindia. Suasana alami yang masih sepi menjadikannya destinasi yang tenang dan cocok untuk menikmati keindahan pantai selatan.",
    address: "Kec. Panggungrejo, Kab. Blitar",
    htm: null,
    image: "/images/wisata/pantai-sekar-gadung.jpg",
    lat: -8.3351642,
    lng: 112.2984535,
  },
];
