export interface HasilBumiItem {
  name: string;
  category: string;
  luas: string;
  hasil: string;
  description: string;
}

export const HASIL_BUMI: HasilBumiItem[] = [
  // ─── Tanaman Pangan ───────────────────────────────────────────────────────
  {
    name: "Kacang Kedelai",
    category: "Tanaman Pangan",
    luas: "567 Ha",
    hasil: "5 Ton/Ha",
    description:
      "Komoditas tanaman pangan terluas di Desa Balerejo. Kacang kedelai menjadi andalan petani sebagai sumber protein nabati dan bahan baku industri rumahan.",
  },
  {
    name: "Kacang Tanah",
    category: "Tanaman Pangan",
    luas: "502 Ha",
    hasil: "3 Ton/Ha",
    description:
      "Tanaman palawija yang banyak dibudidayakan warga. Kacang tanah diolah menjadi berbagai produk camilan dan menjadi komoditas perdagangan lokal.",
  },
  {
    name: "Kubis",
    category: "Tanaman Pangan",
    luas: "352 Ha",
    hasil: "6 Ton/Ha",
    description:
      "Sayuran kubis tumbuh subur di lahan pertanian Balerejo. Hasil panennya dipasarkan ke pasar-pasar sekitar dan menjadi konsumsi sehari-hari warga.",
  },
  {
    name: "Cabe",
    category: "Tanaman Pangan",
    luas: "52 Ha",
    hasil: "4 Ton/Ha",
    description:
      "Cabai dibudidayakan dengan sistem ajir bambu dan mulsa plastik. Komoditas ini menjadi salah satu sumber penghasilan utama petani hortikultura Balerejo.",
  },
  {
    name: "Bawang Merah",
    category: "Tanaman Pangan",
    luas: "28 Ha",
    hasil: "6 Ton/Ha",
    description:
      "Bawang merah hasil panen warga dijemur di bawah sinar matahari sebelum dipasarkan. Komoditas ini bernilai ekonomi tinggi di pasar lokal.",
  },
  {
    name: "Tomat",
    category: "Tanaman Pangan",
    luas: "22 Ha",
    hasil: "8 Ton/Ha",
    description:
      "Tanaman tomat dibudidayakan intensif dengan sistem lanjaran. Buah tomat dipanen dan dipasarkan segar ke pasar lokal maupun pengepul regional.",
  },
  {
    name: "Jagung",
    category: "Tanaman Pangan",
    luas: "120 Ha",
    hasil: "4 Ton/Ha",
    description:
      "Jagung ditanam sebagai tanaman pangan dan pakan ternak. Menjadi komoditas penting yang mendukung kebutuhan pangan warga Desa Balerejo.",
  },
  {
    name: "Singkong",
    category: "Tanaman Pangan",
    luas: "45 Ha",
    hasil: "12 Ton/Ha",
    description:
      "Singkong tumbuh subur dengan produktivitas tinggi. Umbi-umbian ini diolah menjadi berbagai makanan tradisional dan camilan khas desa.",
  },
  {
    name: "Padi",
    category: "Tanaman Pangan",
    luas: "35 Ha",
    hasil: "1,4 Ton/Ha",
    description:
      "Padi ditanam di lahan sawah warga Balerejo sebagai tanaman pangan pokok. Hasil panen digunakan untuk konsumsi sendiri maupun dijual ke pasar.",
  },

  // ─── Buah-buahan ──────────────────────────────────────────────────────────
  {
    name: "Mangga",
    category: "Buah-buahan",
    luas: "20 Ha",
    hasil: "5 Ton/Ha",
    description:
      "Berbagai varietas mangga tumbuh di kebun warga. Buah mangga dipanen musiman dan dipasarkan segar ke konsumen lokal maupun pedagang buah.",
  },
  {
    name: "Melon",
    category: "Buah-buahan",
    luas: "15 Ha",
    hasil: "8 Ton/Ha",
    description:
      "Melon dibudidayakan sebagai tanaman hortikultura unggulan dengan nilai jual tinggi. Hasilnya dipasarkan ke pasar lokal dan kota-kota terdekat.",
  },
  {
    name: "Pepaya",
    category: "Buah-buahan",
    luas: "10 Ha",
    hasil: "10 Ton/Ha",
    description:
      "Pepaya tumbuh subur dengan produktivitas tinggi. Buahnya tersedia sepanjang tahun dan menjadi konsumsi rutin warga serta sumber pendapatan petani.",
  },
  {
    name: "Durian",
    category: "Buah-buahan",
    luas: "5 Ha",
    hasil: "5 Ton/Ha",
    description:
      "Durian lokal Balerejo dipanen musiman dan dinantikan oleh penikmat buah dari sekitar wilayah. Menjadi komoditas bernilai tinggi saat musim panen tiba.",
  },

  // ─── Perkebunan Rakyat ────────────────────────────────────────────────────
  {
    name: "Kelapa",
    category: "Perkebunan",
    luas: "30 Ha",
    hasil: "15 Ton/Ha",
    description:
      "Pohon kelapa tersebar luas di desa menghasilkan santan, kopra, dan sabut kelapa. Menjadi sumber penghasilan tambahan bagi banyak keluarga petani.",
  },
  {
    name: "Tebu",
    category: "Perkebunan",
    luas: "20 Ha",
    hasil: "1,5 Ton/Ha",
    description:
      "Tebu dibudidayakan sebagai tanaman perkebunan rakyat. Hasilnya diolah menjadi gula merah tradisional dan dijual ke pengepul industri gula sekitar.",
  },
];
