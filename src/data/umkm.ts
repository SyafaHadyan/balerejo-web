export interface Product {
  slug: string;
  name: string;
  /** Display price shown on catalog card, e.g. "Rp 15.000" */
  price: string;
  /** Price range shown on detail page, e.g. "Rp 12.000 – Rp 18.000" */
  priceRange: string;
  category: string;
  description: string;
  /** Display string for the contact number, e.g. "0812-xxxx-xxxx" */
  contactDisplay: string;
  /** WhatsApp number in international format without "+", e.g. "6281200000000" */
  contactWa: string;
  address: string;
  social?: string;
  image: string;
  /** Map coordinates — override with NEXT_PUBLIC_UMKM_LOC_<N>_LAT / _LNG */
  lat: number;
  lng: number;
}

export const PRODUCTS: Product[] = [
  {
    slug: "keripik-pisang-balerejo",
    name: "Keripik Pisang Balerejo",
    price: "Rp 15.000",
    priceRange: "Rp 12.000 – Rp 18.000",
    category: "PRODUK UMKM",
    description:
      "Keripik pisang renyah dengan bahan pisang pilihan hasil kebun warga Desa Balerejo. Diolah tanpa bahan pengawet, tersedia rasa original, manis, dan pedas.",
    contactDisplay: "0812-xxxx-xxxx",
    contactWa: "6281200000000",
    address: "Dusun Krajan, Desa Balerejo, Kec. Panggungrejo, Kab. Blitar",
    social: "Instagram: @keripikbalerejo.id",
    image: "/images/makanan-khas-desa.jpg",
    lat: Number(process.env.NEXT_PUBLIC_UMKM_LOC_1_LAT ?? "-8.2445"),
    lng: Number(process.env.NEXT_PUBLIC_UMKM_LOC_1_LNG ?? "112.2718"),
  },
  {
    slug: "madu-hutan-asli",
    name: "Madu Hutan Asli",
    price: "Rp 45.000",
    priceRange: "Rp 45.000",
    category: "PRODUK UMKM",
    description:
      "Madu hutan asli hasil lebah liar dari kawasan hutan sekitar Desa Balerejo. Kaya manfaat, tanpa campuran, langsung dari sarang.",
    contactDisplay: "0813-xxxx-xxxx",
    contactWa: "6281300000000",
    address: "Dusun Ngroto, Desa Balerejo, Kec. Panggungrejo, Kab. Blitar",
    image: "/images/wisata-alam.jpg",
    lat: Number(process.env.NEXT_PUBLIC_UMKM_LOC_2_LAT ?? "-8.2510"),
    lng: Number(process.env.NEXT_PUBLIC_UMKM_LOC_2_LNG ?? "112.2682"),
  },
  {
    slug: "kerajinan-anyaman-bambu",
    name: "Kerajinan Anyaman Bambu",
    price: "Rp 35.000",
    priceRange: "Rp 25.000 – Rp 75.000",
    category: "PRODUK UMKM",
    description:
      "Kerajinan anyaman bambu buatan tangan pengrajin lokal Desa Balerejo. Tersedia berbagai bentuk dan ukuran: tampah, besek, dan hiasan dinding.",
    contactDisplay: "0811-xxxx-xxxx",
    contactWa: "6281100000000",
    address: "Desa Balerejo, Kec. Panggungrejo, Kab. Blitar",
    image: "/images/umkm-desa.jpg",
    lat: Number(process.env.NEXT_PUBLIC_UMKM_LOC_3_LAT ?? "-8.2485"),
    lng: Number(process.env.NEXT_PUBLIC_UMKM_LOC_3_LNG ?? "112.2745"),
  },
  {
    slug: "kopi-robusta-panggungrejo",
    name: "Kopi Robusta Panggungrejo",
    price: "Rp 28.000",
    priceRange: "Rp 28.000 – Rp 50.000",
    category: "PRODUK UMKM",
    description:
      "Kopi robusta pilihan dari perkebunan warga Kecamatan Panggungrejo. Tersedia dalam bentuk biji dan bubuk, diproses secara tradisional untuk menjaga cita rasa.",
    contactDisplay: "0814-xxxx-xxxx",
    contactWa: "6281400000000",
    address: "Desa Balerejo, Kec. Panggungrejo, Kab. Blitar",
    image: "/images/persawahan-desa.jpg",
    lat: Number(process.env.NEXT_PUBLIC_UMKM_LOC_4_LAT ?? "-8.2432"),
    lng: Number(process.env.NEXT_PUBLIC_UMKM_LOC_4_LNG ?? "112.2698"),
  },
  {
    slug: "batik-tulis-balerejo",
    name: "Batik Tulis Balerejo",
    price: "Rp 150.000",
    priceRange: "Rp 150.000 – Rp 350.000",
    category: "PRODUK UMKM",
    description:
      "Batik tulis motif khas Balerejo yang menggambarkan kekayaan alam dan budaya desa. Dibuat dengan canting oleh pengrajin berpengalaman dari Desa Balerejo.",
    contactDisplay: "0815-xxxx-xxxx",
    contactWa: "6281500000000",
    address: "Desa Balerejo, Kec. Panggungrejo, Kab. Blitar",
    image: "/images/umkm-desa.jpg",
    lat: Number(process.env.NEXT_PUBLIC_UMKM_LOC_5_LAT ?? "-8.2503"),
    lng: Number(process.env.NEXT_PUBLIC_UMKM_LOC_5_LNG ?? "112.2731"),
  },
  {
    slug: "telur-asin-asap",
    name: "Telur Asin Asap",
    price: "Rp 20.000",
    priceRange: "Rp 20.000",
    category: "PRODUK UMKM",
    description:
      "Telur asin asap dengan teknik pengasapan tradisional yang memberikan aroma khas dan cita rasa gurih yang berbeda dari telur asin biasa.",
    contactDisplay: "0816-xxxx-xxxx",
    contactWa: "6281600000000",
    address: "Dusun Krajan, Desa Balerejo, Kec. Panggungrejo, Kab. Blitar",
    image: "/images/makanan-khas-desa.jpg",
    lat: Number(process.env.NEXT_PUBLIC_UMKM_LOC_6_LAT ?? "-8.2461"),
    lng: Number(process.env.NEXT_PUBLIC_UMKM_LOC_6_LNG ?? "112.2690"),
  },
];
