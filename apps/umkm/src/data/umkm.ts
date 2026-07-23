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
  // ─── Balerejo 1 ───────────────────────────────────────────────────────────
  {
    slug: "bakso-berkah",
    name: "Bakso Berkah",
    price: "Rp 10.000",
    priceRange: "Rp 8.000 – Rp 15.000",
    category: "MAKANAN & MINUMAN",
    description:
      "Bakso sapi kenyal dengan kuah kaldu gurih buatan warga Desa Balerejo. Tersedia dalam porsi mangkuk dan bungkus, cocok untuk sarapan atau makan siang.",
    contactDisplay: "0812-xxxx-xxxx",
    contactWa: "6281200000001",
    address: "Dusun Krajan, Desa Balerejo, Kec. Panggungrejo, Kab. Blitar",
    image: "/images/umkm/bakso-berkah.jpg",
    lat: Number(process.env.NEXT_PUBLIC_UMKM_LOC_1_LAT ?? "-8.2892"),
    lng: Number(process.env.NEXT_PUBLIC_UMKM_LOC_1_LNG ?? "112.2998"),
  },
  {
    slug: "es-teh-kiya",
    name: "Es Teh Kiya",
    price: "Rp 5.000",
    priceRange: "Rp 3.000 – Rp 7.000",
    category: "MAKANAN & MINUMAN",
    description:
      "Minuman es teh segar dengan pilihan rasa original, manis, dan lemon. Dibuat dari teh pilihan, cocok untuk menemani aktivitas sehari-hari di desa.",
    contactDisplay: "0812-xxxx-xxxx",
    contactWa: "6281200000002",
    address: "Dusun Krajan, Desa Balerejo, Kec. Panggungrejo, Kab. Blitar",
    image: "/images/umkm/es-teh-kiya.jpg",
    lat: Number(process.env.NEXT_PUBLIC_UMKM_LOC_2_LAT ?? "-8.2883"),
    lng: Number(process.env.NEXT_PUBLIC_UMKM_LOC_2_LNG ?? "112.2985"),
  },
  {
    slug: "henik-salon",
    name: "Henik Salon",
    price: "Rp 25.000",
    priceRange: "Rp 15.000 – Rp 75.000",
    category: "JASA & KECANTIKAN",
    description:
      "Salon kecantikan yang menyediakan berbagai layanan perawatan rambut, make-up, dan perawatan wajah. Ditangani oleh tenaga terlatih berpengalaman.",
    contactDisplay: "0812-xxxx-xxxx",
    contactWa: "6281200000003",
    address: "Dusun Krajan, Desa Balerejo, Kec. Panggungrejo, Kab. Blitar",
    image: "/images/umkm/henik-salon.jpg",
    lat: Number(process.env.NEXT_PUBLIC_UMKM_LOC_3_LAT ?? "-8.2875"),
    lng: Number(process.env.NEXT_PUBLIC_UMKM_LOC_3_LNG ?? "112.2972"),
  },
  {
    slug: "pak-rudi-toko",
    name: "Toko Pak Rudi",
    price: "Rp 5.000",
    priceRange: "Rp 2.000 – Rp 50.000",
    category: "TOKO KELONTONG",
    description:
      "Toko kelontong lengkap menyediakan kebutuhan sehari-hari warga desa. Tersedia sembako, snack, minuman kemasan, dan berbagai kebutuhan rumah tangga.",
    contactDisplay: "0812-xxxx-xxxx",
    contactWa: "6281200000004",
    address: "Dusun Krajan, Desa Balerejo, Kec. Panggungrejo, Kab. Blitar",
    image: "/images/umkm/pak-rudi-toko.jpg",
    lat: Number(process.env.NEXT_PUBLIC_UMKM_LOC_4_LAT ?? "-8.2867"),
    lng: Number(process.env.NEXT_PUBLIC_UMKM_LOC_4_LNG ?? "112.2960"),
  },
  {
    slug: "seblak-md-tebu",
    name: "Seblak Prasmanan MD & Es Sari Tebu",
    price: "Rp 12.000",
    priceRange: "Rp 8.000 – Rp 20.000",
    category: "MAKANAN & MINUMAN",
    description:
      "Seblak prasmanan dengan pilihan topping lengkap dan es sari tebu murni yang menyegarkan. Racikan bumbu khas yang pedas gurih menjadi favorit warga sekitar.",
    contactDisplay: "0812-xxxx-xxxx",
    contactWa: "6281200000005",
    address: "Dusun Krajan, Desa Balerejo, Kec. Panggungrejo, Kab. Blitar",
    image: "/images/umkm/seblak-md-tebu.jpg",
    lat: Number(process.env.NEXT_PUBLIC_UMKM_LOC_5_LAT ?? "-8.2900"),
    lng: Number(process.env.NEXT_PUBLIC_UMKM_LOC_5_LNG ?? "112.3008"),
  },
  {
    slug: "toko-bu-lasiyem",
    name: "Toko Bu Lasiyem",
    price: "Rp 3.000",
    priceRange: "Rp 1.000 – Rp 30.000",
    category: "TOKO KELONTONG",
    description:
      "Toko kelontong milik Bu Lasiyem yang telah melayani warga Desa Balerejo sejak lama. Menyediakan kebutuhan pokok dan barang harian dengan harga terjangkau.",
    contactDisplay: "0812-xxxx-xxxx",
    contactWa: "6281200000006",
    address: "Dusun Krajan, Desa Balerejo, Kec. Panggungrejo, Kab. Blitar",
    image: "/images/umkm/toko-bu-lasiyem.jpg",
    lat: Number(process.env.NEXT_PUBLIC_UMKM_LOC_6_LAT ?? "-8.2858"),
    lng: Number(process.env.NEXT_PUBLIC_UMKM_LOC_6_LNG ?? "112.2950"),
  },
  {
    slug: "trisula-mart",
    name: "Trisula Mart",
    price: "Rp 5.000",
    priceRange: "Rp 2.000 – Rp 100.000",
    category: "TOKO KELONTONG",
    description:
      "Minimart desa yang menyediakan berbagai produk kebutuhan sehari-hari, mulai dari sembako, snack, obat-obatan, hingga alat tulis. Buka setiap hari.",
    contactDisplay: "0812-xxxx-xxxx",
    contactWa: "6281200000007",
    address: "Dusun Krajan, Desa Balerejo, Kec. Panggungrejo, Kab. Blitar",
    image: "/images/umkm/trisula-mart.jpg",
    lat: Number(process.env.NEXT_PUBLIC_UMKM_LOC_7_LAT ?? "-8.2848"),
    lng: Number(process.env.NEXT_PUBLIC_UMKM_LOC_7_LNG ?? "112.2942"),
  },
  {
    slug: "warmad",
    name: "Warmad",
    price: "Rp 10.000",
    priceRange: "Rp 8.000 – Rp 20.000",
    category: "MAKANAN & MINUMAN",
    description:
      "Warung makan desa yang menyajikan masakan rumahan dengan cita rasa khas Jawa Timur. Menu bervariasi setiap hari menggunakan bahan segar dari pasar lokal.",
    contactDisplay: "0812-xxxx-xxxx",
    contactWa: "6281200000008",
    address: "Dusun Krajan, Desa Balerejo, Kec. Panggungrejo, Kab. Blitar",
    image: "/images/umkm/warmad.jpg",
    lat: Number(process.env.NEXT_PUBLIC_UMKM_LOC_8_LAT ?? "-8.2838"),
    lng: Number(process.env.NEXT_PUBLIC_UMKM_LOC_8_LNG ?? "112.2933"),
  },
  {
    slug: "warmad-2",
    name: "Warmad 2",
    price: "Rp 10.000",
    priceRange: "Rp 8.000 – Rp 20.000",
    category: "MAKANAN & MINUMAN",
    description:
      "Cabang Warmad yang menyajikan menu masakan rumahan khas Jawa Timur. Pilihan lauk pauk lengkap dengan harga terjangkau untuk seluruh keluarga.",
    contactDisplay: "0812-xxxx-xxxx",
    contactWa: "6281200000009",
    address: "Dusun Krajan, Desa Balerejo, Kec. Panggungrejo, Kab. Blitar",
    image: "/images/umkm/warmad-2.jpg",
    lat: Number(process.env.NEXT_PUBLIC_UMKM_LOC_9_LAT ?? "-8.2828"),
    lng: Number(process.env.NEXT_PUBLIC_UMKM_LOC_9_LNG ?? "112.2920"),
  },
  {
    slug: "warung-bu-sayur",
    name: "Warung Bu Sayur",
    price: "Rp 8.000",
    priceRange: "Rp 5.000 – Rp 15.000",
    category: "MAKANAN & MINUMAN",
    description:
      "Warung sayur menyediakan berbagai macam sayuran segar hasil kebun warga sekitar. Tersedia juga bumbu dapur dan kebutuhan memasak sehari-hari.",
    contactDisplay: "0812-xxxx-xxxx",
    contactWa: "6281200000010",
    address: "Dusun Krajan, Desa Balerejo, Kec. Panggungrejo, Kab. Blitar",
    image: "/images/umkm-desa.jpg",
    lat: Number(process.env.NEXT_PUBLIC_UMKM_LOC_10_LAT ?? "-8.2820"),
    lng: Number(process.env.NEXT_PUBLIC_UMKM_LOC_10_LNG ?? "112.2910"),
  },
  {
    slug: "warung-buk-sri",
    name: "Warung Buk Sri",
    price: "Rp 10.000",
    priceRange: "Rp 8.000 – Rp 18.000",
    category: "MAKANAN & MINUMAN",
    description:
      "Warung makan legendaris Buk Sri yang telah berdiri sejak puluhan tahun. Sajian masakan rumahan dengan bumbu rahasia yang menjadi andalan warga desa.",
    contactDisplay: "0812-xxxx-xxxx",
    contactWa: "6281200000011",
    address: "Dusun Krajan, Desa Balerejo, Kec. Panggungrejo, Kab. Blitar",
    image: "/images/umkm/warung-buk-sri.jpg",
    lat: Number(process.env.NEXT_PUBLIC_UMKM_LOC_11_LAT ?? "-8.2812"),
    lng: Number(process.env.NEXT_PUBLIC_UMKM_LOC_11_LNG ?? "112.2902"),
  },

  // ─── Balerejo 2 (Dusun Sekargadung) ──────────────────────────────────────
  {
    slug: "bara-collection",
    name: "Bara Collection",
    price: "Rp 50.000",
    priceRange: "Rp 25.000 – Rp 150.000",
    category: "FASHION & PAKAIAN",
    description:
      "Toko fashion milik Mbak Heni yang menjual berbagai pilihan pakaian wanita dan perlengkapan busana. Koleksi terkini dengan harga bersahabat untuk warga sekitar.",
    contactDisplay: "0813-3488-8414",
    contactWa: "6281334888414",
    address: "Sekargadung Balerejo 2, RT 04/RW 03, Kec. Panggungrejo, Kab. Blitar",
    image: "/images/umkm/bara-collection.jpg",
    lat: Number(process.env.NEXT_PUBLIC_UMKM_LOC_12_LAT ?? "-8.2895"),
    lng: Number(process.env.NEXT_PUBLIC_UMKM_LOC_12_LNG ?? "112.3033"),
  },
  {
    slug: "dina-karya-tani",
    name: "Dina Karya Tani",
    price: "Rp 20.000",
    priceRange: "Rp 10.000 – Rp 50.000",
    category: "PERTANIAN",
    description:
      "Usaha tani Bu Umi yang menyediakan bibit unggul, pupuk, dan hasil panen segar. Melayani kebutuhan pertanian warga desa dengan harga petani langsung.",
    contactDisplay: "0823-3306-6447",
    contactWa: "6282333066447",
    address: "RT 02/RW 01, Balerejo 2, Kec. Panggungrejo, Kab. Blitar",
    image: "/images/umkm/dina-karya-tani.jpg",
    lat: Number(process.env.NEXT_PUBLIC_UMKM_LOC_13_LAT ?? "-8.2879"),
    lng: Number(process.env.NEXT_PUBLIC_UMKM_LOC_13_LNG ?? "112.3042"),
  },
  {
    slug: "rahayu-jus",
    name: "Rahayu Jus",
    price: "Rp 8.000",
    priceRange: "Rp 5.000 – Rp 12.000",
    category: "MAKANAN & MINUMAN",
    description:
      "Kedai jus segar milik Bu Pantes Sri Rahayu dengan berbagai pilihan buah tropis. Dibuat tanpa pengawet dan pemanis buatan, langsung dari buah-buahan segar lokal.",
    contactDisplay: "0858-1534-8578",
    contactWa: "6285815348578",
    address: "Desa Balerejo 2, RT 04/RW 03, Kec. Panggungrejo, Kab. Blitar",
    image: "/images/umkm/rahayu-jus.jpg",
    lat: Number(process.env.NEXT_PUBLIC_UMKM_LOC_14_LAT ?? "-8.2889"),
    lng: Number(process.env.NEXT_PUBLIC_UMKM_LOC_14_LNG ?? "112.3037"),
  },
  {
    slug: "toko-andini",
    name: "Toko Andini",
    price: "Rp 3.000",
    priceRange: "Rp 1.000 – Rp 50.000",
    category: "TOKO KELONTONG",
    description:
      "Toko kelontong yang menyediakan kebutuhan sehari-hari warga Balerejo 2. Lengkap dengan sembako, jajanan, dan kebutuhan rumah tangga dengan harga terjangkau.",
    contactDisplay: "0812-xxxx-xxxx",
    contactWa: "6281200000015",
    address: "Dusun Sekargadung, Desa Balerejo, Kec. Panggungrejo, Kab. Blitar",
    image: "/images/umkm-desa.jpg",
    lat: Number(process.env.NEXT_PUBLIC_UMKM_LOC_15_LAT ?? "-8.2882"),
    lng: Number(process.env.NEXT_PUBLIC_UMKM_LOC_15_LNG ?? "112.3048"),
  },
  {
    slug: "toko-lancar-jaya",
    name: "Toko Lancar Jaya",
    price: "Rp 5.000",
    priceRange: "Rp 2.000 – Rp 75.000",
    category: "TOKO KELONTONG",
    description:
      "Toko Lancar Jaya milik Pak Susilo melayani kebutuhan warga dengan koleksi barang yang lengkap. Dari sembako, kebutuhan dapur, hingga peralatan rumah tangga tersedia di sini.",
    contactDisplay: "0858-4373-8360",
    contactWa: "6285843738360",
    address: "RT 04/RW 03, Balerejo 2, Kec. Panggungrejo, Kab. Blitar",
    image: "/images/umkm/toko-lancar-jaya.jpg",
    lat: Number(process.env.NEXT_PUBLIC_UMKM_LOC_16_LAT ?? "-8.2892"),
    lng: Number(process.env.NEXT_PUBLIC_UMKM_LOC_16_LNG ?? "112.3037"),
  },
  {
    slug: "toko-sinar-abadi",
    name: "Toko Sinar Abadi",
    price: "Rp 5.000",
    priceRange: "Rp 2.000 – Rp 100.000",
    category: "TOKO KELONTONG",
    description:
      "Toko Sinar Abadi hadir di Dusun Sekargadung melayani kebutuhan sehari-hari masyarakat Balerejo 2. Tersedia berbagai produk sembako dan kebutuhan rumah tangga.",
    contactDisplay: "0823-3879-1814",
    contactWa: "6282338791814",
    address: "Dusun Sekargadung, Desa Balerejo 2, RT 01/RW 01, Kec. Panggungrejo, Kab. Blitar",
    image: "/images/umkm/toko-sinar-abadi.jpg",
    lat: Number(process.env.NEXT_PUBLIC_UMKM_LOC_17_LAT ?? "-8.2878"),
    lng: Number(process.env.NEXT_PUBLIC_UMKM_LOC_17_LNG ?? "112.3055"),
  },
];
