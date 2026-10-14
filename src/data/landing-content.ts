export interface NavItem {
  label: string;
  href: string;
  sectionIndex: string;
}

export interface CustomerProblem {
  id: string;
  category: string;
  title: string;
  description: string;
  fieldImpact: string;
  relatedCapability: string;
}

export interface SolutionBenefit {
  id: string;
  capabilityName: string;
  accessBadge: string;
  solvesProblem: string;
  headline: string;
  benefitSummary: string;
  concreteOutcomes: string[];
  targetAnchor: string;
}

export interface MarketplaceBatchPreview {
  batchCode: string;
  commodity: string;
  cultivationMethod: string;
  harvestEstimate: string;
  availableVolume: string;
  statusLabel: string;
  locationNote: string;
}

export interface PlantTaskPreview {
  installationName: string;
  cropName: string;
  daysAfterPlanting: string;
  phLevel: string;
  ppmLevel: string;
  waterTemp: string;
  status: string;
  nextAction: string;
}

export interface AiScenarioPreview {
  id: string;
  topicLabel: string;
  farmerQuestion: string;
  cropContext: string;
  diagnosticSteps: string[];
  agronomicCaution: string;
}

export interface JourneyStage {
  stepNumber: string;
  stageTitle: string;
  moduleUsed: string;
  durationContext: string;
  scenarioTitle: string;
  beginnerExperience: string;
  experiencedExperience: string;
  keyChecklist: string[];
}

export interface SubscriptionPlan {
  name: string;
  badge: string;
  price: string;
  priceNumeric: number;
  descriptor: string;
  billingIntervalNote: string;
  description: string;
  features: string[];
  marketplaceFreeNote?: {
    title: string;
    description: string;
  };
  cta: {
    label: string;
    href: string;
  };
  transparencyNote: string;
}

export interface FaqItem {
  id: string;
  category: "Semua" | "Umum" | "Marketplace" | "Pengelolaan Budidaya" | "Asisten AI" | "Langganan";
  question: string;
  answer: string;
  highlightNote?: string;
}

export const NAV_ITEMS: NavItem[] = [
  { label: "Beranda", href: "#hero", sectionIndex: "01" },
  { label: "Masalah", href: "#masalah-petani", sectionIndex: "02" },
  { label: "Solusi", href: "#solusi-manfaat", sectionIndex: "03" },
  { label: "Layanan", href: "#produk-layanan", sectionIndex: "04" },
  { label: "Alur Kerja", href: "#bukti-konsep", sectionIndex: "05" },
  { label: "Langganan", href: "#langganan", sectionIndex: "06" },
  { label: "FAQ", href: "#faq", sectionIndex: "07" },
  { label: "Mulai", href: "#cta-akhir", sectionIndex: "08" },
];

export interface SubscriptionContact {
  email: string;
  emailHref: string;
  phoneDisplay: string;
  phoneWhatsappDigits: string;
  whatsappContactName: string;
  whatsappHref: string;
}

export const SUBSCRIPTION_CONTACT: SubscriptionContact = {
  email: "bumiloka227@gmail.com",
  emailHref: "mailto:bumiloka227@gmail.com",
  phoneDisplay: "+62 852-1054-2025",
  phoneWhatsappDigits: "6285210542025",
  whatsappContactName: "Rayn Amannullah Tzulkifli",
  whatsappHref:
    "https://wa.me/6285210542025?text=Halo%20BumiLoka%2C%20saya%20tertarik%20untuk%20berlangganan%20layanan%20BumiLoka%20(Rp45.000%2Fbulan).%20Bisa%20dibantu%20informasinya%3F",
};

export const HERO_CONTENT = {
  label: "Platform Budidaya & Marketplace Hidroponik",
  headline: "Kelola Kebun Lebih Rapi, Tangani Gejala Daun, dan Pasarkan Panen Lebih Pasti",
  subheadline:
    "BumiLoka menyediakan Marketplace hasil panen yang dapat diakses gratis, serta paket terpadu Manajemen Tanaman dan AI Assistant untuk pemantauan nutrisi harian dan diagnosis kendala tanaman.",
  primaryCta: {
    label: "Lihat Layanan BumiLoka",
    href: "#produk-layanan",
  },
  secondaryCta: {
    label: "Paket Langganan Rp45.000/bln",
    href: "#langganan",
  },
  pillars: [
    {
      title: "Pengelolaan Budidaya",
      accessBadge: "Berlangganan",
      summary: "Pantau pH, PPM, dan umur tanaman di setiap meja instalasi.",
      href: "#modul-manajemen-tanaman",
    },
    {
      title: "Marketplace Hasil Panen",
      accessBadge: "Akses Gratis",
      summary: "Jelajahi dan buka pra-pesan sayuran tanpa biaya langganan.",
      href: "#modul-pasar-panen",
    },
    {
      title: "Asisten AI Budidaya",
      accessBadge: "Berlangganan",
      summary: "Panduan gejala daun dan diagnosis foto terintegrasi.",
      href: "#modul-asisten-ai",
    },
  ],
};

export const CUSTOMER_PROBLEMS: CustomerProblem[] = [
  {
    id: "masalah-pemasaran",
    category: "Pemasaran Panen",
    title: "Sayuran siap panen, tetapi pembeli belum pasti",
    description:
      "Sayuran hidroponik memiliki batas kesegaran yang singkat di instalasi. Ketika hari potong tiba tanpa ada pesanan yang pasti, petani terpaksa mengandalkan pesan siaran dadakan atau melepas hasil panen ke pengepul dengan harga yang rendah.",
    fieldImpact:
      "Tanaman terlanjur menua di talang pipa, tekstur daun mengeras, dan jadwal penyemaian berikutnya tertunda.",
    relatedCapability: "Solusi: Marketplace Hasil Panen",
  },
  {
    id: "masalah-pemeliharaan",
    category: "Pemantauan Kebun",
    title: "Pencatatan nutrisi dan kondisi air masih tercecer",
    description:
      "Mengelola banyak meja tanam menuntut pengecekan pH air, kepekatan nutrisi (PPM), dan suhu tandon setiap hari. Tanpa pencatatan yang teratur, perubahan kualitas air mudah terlewat dan sulit dievaluasi saat hasil panen menurun.",
    fieldImpact:
      "Pertumbuhan sayuran antar meja menjadi tidak seragam dan akar rentan stres akibat kepekatan larutan yang tidak stabil.",
    relatedCapability: "Solusi: Pengelolaan Budidaya",
  },
  {
    id: "masalah-panduan",
    category: "Diagnosis Gejala",
    title: "Bingung memastikan penyebab saat daun atau tanaman bermasalah",
    description:
      "Ketika muncul daun menguning, pucuk mengering, atau tanaman layu di siang hari, petani sering mencari jawaban di media sosial. Sayangnya, informasi yang didapat sering kali bertentangan dan tidak cocok dengan kondisi instalasi Anda.",
    fieldImpact:
      "Penanganan terlambat atau takaran pupuk ditambah berlebihan, sehingga kondisi tanaman justru semakin memburuk.",
    relatedCapability: "Solusi: Asisten AI Budidaya",
  },
];

export const SOLUTIONS_BENEFITS: SolutionBenefit[] = [
  {
    id: "solusi-pasar-panen",
    capabilityName: "Marketplace Hasil Panen",
    accessBadge: "Akses Gratis",
    solvesProblem: "Kepastian Penjualan",
    headline: "Buka Pra-Pesan Sayuran Tanpa Biaya Berlangganan",
    benefitSummary:
      "Jelajahi hasil panen segar atau buka jadwal pra-pesan beberapa hari sebelum panen. Layanan marketplace dapat diakses gratis tanpa perlu membeli paket langganan.",
    concreteOutcomes: [
      "Jelajahi jenis sayuran, metode tanam (NFT, DFT, atau Rakit Apung), dan tanggal siap panen tanpa biaya langganan.",
      "Hubungkan calon pembeli lokal, katering, dan pedagang langsung dengan kebun sayuran segar.",
      "Jaga ritme tanam tetap lancar dengan kepastian pemesanan sebelum hari potong tiba.",
    ],
    targetAnchor: "#modul-pasar-panen",
  },
  {
    id: "solusi-manajemen-tanaman",
    capabilityName: "Manajemen Tanaman",
    accessBadge: "Paket Berlangganan",
    solvesProblem: "Keteraturan Pemantauan",
    headline: "Catat pH, PPM, dan Umur Tanaman dalam Satu Tempat",
    benefitSummary:
      "Gantikan buku catatan tercecer dengan lembar kerja digital terstruktur per meja instalasi—mulai dari semai rockwool hingga siap panen.",
    concreteOutcomes: [
      "Catat nilai pH, kepekatan PPM nutrisi, dan suhu air harian untuk mendeteksi anomali lebih awal.",
      "Jadwalkan rutinitas penting seperti kuras tandon, cek pompa, dan pemindahan bibit ke talang pembesaran.",
      "Simpan riwayat tiap siklus tanam sebagai bahan evaluasi panen berikutnya.",
    ],
    targetAnchor: "#modul-manajemen-tanaman",
  },
  {
    id: "solusi-asisten-ai",
    capabilityName: "Asisten AI Budidaya",
    accessBadge: "Paket Berlangganan",
    solvesProblem: "Panduan & Diagnosis",
    headline: "Pahami Gejala Daun & Diagnosis Awal dari Foto",
    benefitSummary:
      "Konsultasi terarah mengurai kendala nutrisi serta diagnosis visual awal penyakit tanaman melalui unggahan foto, terintegrasi dalam paket langganan.",
    concreteOutcomes: [
      "Uraikan gejala fisik tanaman menjadi daftar periksa: suhu air, sirkulasi udara, pH, dan kepekatan pupuk.",
      "Diagnosis visual awal penyakit atau gangguan daun melalui foto dengan indikasi tingkat keyakinan.",
      "Sertakan pengingat jujur batasan agronomi dan saran konsultasi langsung saat diperlukan.",
    ],
    targetAnchor: "#modul-asisten-ai",
  },
];

export const MARKETPLACE_PREVIEWS: MarketplaceBatchPreview[] = [
  {
    batchCode: "BATCH #HL-104",
    commodity: "Selada Romaine Hijau",
    cultivationMethod: "Sistem NFT • Greenhouse Alami",
    harvestEstimate: "Siap Panen: 2 Hari Lagi (34 HST)",
    availableVolume: "Estimasi 18 kg (± 72 pak @ 250g)",
    statusLabel: "Buka Pra-Pesan",
    locationNote: "Kebun Lembang, Bandung Barat",
  },
  {
    batchCode: "BATCH #HL-108",
    commodity: "Pakcoy Hijau Segar",
    cultivationMethod: "Sistem DFT • Nutrisi Terpantau",
    harvestEstimate: "Tersedia Hari Ini (29 HST)",
    availableVolume: "Estimasi 12 kg (± 48 pak @ 250g)",
    statusLabel: "Siap Petik",
    locationNote: "Kebun Sleman, Yogyakarta",
  },
  {
    batchCode: "BATCH #HL-112",
    commodity: "Kale Curly (Keriting)",
    cultivationMethod: "Sistem NFT • Pantau PPM Harian",
    harvestEstimate: "Siap Panen: 5 Hari Lagi (42 HST)",
    availableVolume: "Estimasi 8 kg (± 40 pak @ 200g)",
    statusLabel: "Jadwal Terdaftar",
    locationNote: "Kebun Batu, Malang",
  },
];

export const PLANT_MANAGEMENT_PREVIEWS: PlantTaskPreview[] = [
  {
    installationName: "Meja Talang A1 (NFT 200 Lubang)",
    cropName: "Selada Butterhead",
    daysAfterPlanting: "26 HST (Fase Pembesaran)",
    phLevel: "5.9 pH",
    ppmLevel: "840 PPM",
    waterTemp: "25.2 °C",
    status: "Parameter Normal",
    nextAction: "Periksa ketinggian air tandon sore hari",
  },
  {
    installationName: "Meja Talang B2 (DFT 160 Lubang)",
    cropName: "Pakcoy Hijau",
    daysAfterPlanting: "14 HST (Fase Remaja)",
    phLevel: "6.4 pH",
    ppmLevel: "620 PPM",
    waterTemp: "27.8 °C",
    status: "Perlu Tambah Nutrisi",
    nextAction: "Tambahkan nutrisi stok hingga 800 PPM dan turunkan pH ke 6.0",
  },
  {
    installationName: "Rak Semai C1 (Baki Rockwool)",
    cropName: "Caisim & Kangkung",
    daysAfterPlanting: "4 HSS (Hari Setelah Semai)",
    phLevel: "5.8 pH",
    ppmLevel: "350 PPM",
    waterTemp: "24.8 °C",
    status: "Mulai Adaptasi Cahaya",
    nextAction: "Jaga kelembapan media dan siapkan jadwal pindah tanam pada 10 HSS",
  },
];

export const AI_SCENARIO_PREVIEWS: AiScenarioPreview[] = [
  {
    id: "tip-burn",
    topicLabel: "Ujung Daun Kering (Tip Burn)",
    farmerQuestion:
      "Mengapa ujung daun muda selada Romaine saya mengering kecokelatan padahal kepekatan nutrisi sudah 950 PPM?",
    cropContext: "Selada Romaine • 27 HST • NFT • Suhu siang 32°C",
    diagnosticSteps: [
      "Periksa aliran udara di sekitar tanaman: Tip burn sering dipicu oleh penguapan daun yang terhambat saat udara panas dan lembap, sehingga kalsium lambat sampai ke pucuk.",
      "Cek suhu air tandon dan kepekatan larutan: Saat suhu di atas 30°C, tanaman menyerap lebih banyak air dibanding nutrisi. Turunkan kepekatan ke 750–820 PPM agar akar tidak tertekan.",
      "Pastikan sirkulasi air di talang tidak tersumbat oleh akar yang terlalu padat.",
    ],
    agronomicCaution:
      "Catatan: Panduan ini merupakan langkah pemeriksaan awal. Jika daun membusuk basah dan berbau, konsultasikan langsung dengan ahli agronomi untuk memastikan bukan serangan bakteri.",
  },
  {
    id: "klorosis-daun",
    topicLabel: "Daun Bawah Menguning",
    farmerQuestion:
      "Daun bagian bawah pakcoy saya mulai menguning merata sejak umur 18 HST, sementara pucuk masih hijau. Apa yang perlu diperiksa?",
    cropContext: "Pakcoy Hijau • 18 HST • DFT • pH 6.7",
    diagnosticSteps: [
      "Periksa nilai pH air: Pada pH di atas 6.5, penyerapan unsur hara mulai terhambat. Turunkan pH secara bertahap ke rentang 5.8–6.2.",
      "Periksa kepekatan PPM: Di usia 18 HST, pakcoy membutuhkan nitrogen lebih tinggi (900–1.050 PPM). Jika nutrisi kurang, tanaman akan menarik nitrogen dari daun tua.",
      "Pastikan daun bagian bawah tetap mendapat cahaya yang cukup dan tidak saling menutupi.",
    ],
    agronomicCaution:
      "Catatan: Gunakan alat ukur pH dan TDS yang sudah dikalibrasi sebelum mengubah takaran nutrisi di tandon.",
  },
  {
    id: "jadwal-flushing",
    topicLabel: "Jadwal Kuras Tandon (Flushing)",
    farmerQuestion:
      "Berapa kali sebaiknya tandon nutrisi dikuras penuh agar tidak terjadi pengendapan garam pupuk?",
    cropContext: "Sirkulasi NFT/DFT • Siklus Sayuran Daun 30–35 Hari",
    diagnosticSteps: [
      "Kuras dan ganti air tandon setiap 10–14 hari sekali, atau minimal satu kali di tengah siklus tanam.",
      "Penambahan air dan pupuk harian tanpa kuras dapat menggeser keseimbangan hara karena tanaman menyerap tiap unsur dengan kecepatan berbeda.",
      "Bersihkan dinding tandon dan filter pompa dari lumut sebelum mengisi larutan nutrisi baru.",
    ],
    agronomicCaution:
      "Catatan: Kualitas air baku (PPM air sumur/PAM) memengaruhi kebersihan tandon. Jika TDS air baku di atas 200 PPM, lakukan pengurasan lebih teratur.",
  },
];

export const USER_JOURNEY_STAGES: JourneyStage[] = [
  {
    stepNumber: "Fase 1",
    stageTitle: "Perencanaan Semai & Jadwal Tanam",
    moduleUsed: "Pengelolaan Budidaya",
    durationContext: "Hari 1 – 10 (Semai)",
    scenarioTitle: "Mencatat Benih dan Menentukan Kalender Tanam",
    beginnerExperience:
      "Petani rumahan terbantu mengetahui kapan bibit di rockwool siap dipindahkan ke talang dan berapa PPM awal yang aman.",
    experiencedExperience:
      "Pengelola kebun dapat mengatur giliran semai antar meja agar panen sayuran tersedia setiap minggu tanpa jeda.",
    keyChecklist: [
      "Catat tanggal semai, varietas benih, dan kapasitas lubang tanam.",
      "Atur pengingat pemberian nutrisi awal (300–450 PPM).",
      "Tetapkan perkiraan tanggal panen sejak bibit masuk ke talang pembesaran.",
    ],
  },
  {
    stepNumber: "Fase 2",
    stageTitle: "Pemantauan Nutrisi Harian (pH & PPM)",
    moduleUsed: "Pengelolaan Budidaya",
    durationContext: "Hari 11 – 25 (Vegetatif)",
    scenarioTitle: "Menjaga Kestabilan Air Tandon Setiap Hari",
    beginnerExperience:
      "Membantu membiasakan pengecekan pH dan PPM secara teratur dengan panduan batas aman yang jelas.",
    experiencedExperience:
      "Memudahkan pengawasan catatan harian yang diisi oleh operator kebun secara rapi dan terstandar.",
    keyChecklist: [
      "Catat pH (5.5–6.5), PPM nutrisi, dan suhu air pagi serta sore.",
      "Jalankan rutinitas kebun: kalibrasi alat ukur, cek pompa, dan kuras tandon.",
      "Ketahui perubahan nutrisi lebih awal sebelum daun menunjukkan tanda stres.",
    ],
  },
  {
    stepNumber: "Fase 3",
    stageTitle: "Pemeriksaan Gejala & Panduan AI",
    moduleUsed: "Asisten AI Budidaya",
    durationContext: "Saat Terjadi Kendala",
    scenarioTitle: "Mencari Penyebab Masalah Tanaman Secara Tenang",
    beginnerExperience:
      "Ketika daun menguning atau tanaman layu, petani baru mendapat langkah pemeriksaan yang jelas tanpa perlu panik.",
    experiencedExperience:
      "Menjadi rujukan awal untuk memeriksa dugaan kekurangan hara sebelum berdiskusi lebih lanjut dengan agronomis.",
    keyChecklist: [
      "Analisis kaitan antara suhu, cahaya, pH, dan kepekatan pupuk terhadap gejala daun.",
      "Ikuti langkah penyesuaian dosis nutrisi yang aman bagi tanaman.",
      "Ketahui batas jelas kapan masalah membutuhkan penanganan langsung dari ahli.",
    ],
  },
  {
    stepNumber: "Fase 4",
    stageTitle: "Buka Pra-Pesan & Penyaluran Panen",
    moduleUsed: "Marketplace Hasil Panen",
    durationContext: "Hari 26 – 35 (Menjelang Panen)",
    scenarioTitle: "Mempertemukan Sayuran Segar dengan Pembeli Lebih Awal",
    beginnerExperience:
      "Petani rumahan yang memiliki kelebihan panen dapat menawarkan sayuran bersih ke tetangga dan komunitas sekitar.",
    experiencedExperience:
      "Kebun komersial dapat menampilkan kuota panen mingguan agar pelanggan katering atau reseller mengamankan pesanan.",
    keyChecklist: [
      "Tampilkan varietas sayuran, tanggal panen, dan perkiraan jumlah panen.",
      "Berikan profil kebun yang rapi untuk membangun kepercayaan pembeli.",
      "Komunikasi pesanan berjalan langsung tanpa perantara berlapis.",
    ],
  },
];

export const SUBSCRIPTION_PLAN: SubscriptionPlan = {
  name: "BumiLoka",
  badge: "Paket Berlangganan",
  price: "Rp45.000",
  priceNumeric: 45000,
  descriptor: "/bulan",
  billingIntervalNote: "Biaya langganan Rp45.000 per bulan (ditagihkan bulanan, bukan sekali bayar).",
  description:
    "Akses terpadu untuk pemantauan nutrisi harian di tandon, pencatatan siklus tanam, serta konsultasi dan diagnosis visual tanaman bersama Asisten AI.",
  features: [
    "Manajemen Tanaman: pencatatan pH, PPM, suhu tandon harian, dan umur tanaman (HST)",
    "Asisten AI Budidaya: panduan bertahap untuk kendala daun, akar, dan nutrisi",
    "Diagnosis Penyakit dari Foto: analisis visual awal gejala tanaman terintegrasi di AI Assistant",
    "Pengingat tugas rutin: jadwal kuras tandon, cek pompa, dan kalibrasi alat",
    "Akses penuh tanpa pemisahan fitur atau batasan meja instalasi",
  ],
  marketplaceFreeNote: {
    title: "Marketplace Hasil Panen: Akses Gratis",
    description:
      "Marketplace dapat dijelajahi secara gratis tanpa perlu berlangganan paket ini. Siapa pun dapat melihat komoditas panen dan profil kebun tanpa biaya langganan.",
  },
  cta: {
    label: "Hubungi via WhatsApp",
    href: "https://wa.me/6285210542025?text=Halo%20BumiLoka%2C%20saya%20tertarik%20untuk%20berlangganan%20layanan%20BumiLoka%20(Rp45.000%2Fbulan).%20Bisa%20dibantu%20informasinya%3F",
  },
  transparencyNote:
    "Untuk mendaftar atau menanyakan akses langganan Rp45.000/bulan, hubungi tim kami via WhatsApp atau Email. Pembayaran otomatis di website belum diaktifkan.",
};

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: "faq-apa-itu-bumiloka",
    category: "Umum",
    question: "Apa itu BumiLoka dan bagaimana struktur layanannya?",
    answer:
      "BumiLoka adalah platform pendukung budidaya hidroponik yang memiliki tiga layanan utama: Marketplace Hasil Panen yang dapat diakses gratis untuk menjelajahi dan menemukan sayuran segar langsung dari petani, serta Manajemen Tanaman dan Asisten AI yang tersedia dalam satu paket langganan Rp45.000 per bulan untuk pemantauan harian dan penanganan kendala kebun.",
  },
  {
    id: "faq-marketplace-gratis",
    category: "Marketplace",
    question: "Apakah untuk menjelajahi Marketplace Hasil Panen harus berlangganan?",
    answer:
      "Tidak. Marketplace Hasil Panen terbuka dan dapat diakses secara gratis tanpa perlu membeli paket berlangganan. Calon pembeli maupun pengunjung umum bebas menjelajahi katalog sayuran segar, perkiraan tanggal panen, dan profil kebun penjual. Jika fitur tertentu membutuhkan akun (misalnya bagi petani untuk mendaftarkan batch panen), kebutuhan akun tersebut terpisah dari kewajiban berlangganan. Transaksi dan pengiriman mengikuti kesepakatan riil antar pihak.",
    highlightNote:
      "Akses Bebas: Menjelajahi produk dan informasi penjual di marketplace tidak memerlukan biaya langganan.",
  },
  {
    id: "faq-biaya-langganan",
    category: "Langganan",
    question: "Berapa biaya langganan BumiLoka dan apa saja yang didapatkan?",
    answer:
      "BumiLoka menyediakan satu paket berlangganan seharga Rp45.000 per bulan (Rp45.000/bulan, ditagihkan bulanan, bukan sekali bayar). Paket ini mencakup seluruh fitur inti budidaya: Manajemen Tanaman (log pH/PPM/suhu tandon harian dan umur tanam) serta AI Assistant (konsultasi budidaya dan kemampuan diagnosis awal penyakit tanaman dari foto). Marketplace Hasil Panen tetap dapat digunakan tanpa membeli paket ini.",
    highlightNote:
      "Biaya Berlangganan: Rp45.000 per bulan (ditagihkan bulanan, bukan sekali bayar). Mencakup Manajemen Tanaman + AI Assistant (dengan diagnosis foto).",
  },
  {
    id: "faq-diagnosis-foto-biaya",
    category: "Asisten AI",
    question: "Apakah fitur diagnosis penyakit tanaman dari foto dikenakan biaya terpisah?",
    answer:
      "Tidak. Kemampuan diagnosis visual penyakit dan gangguan tanaman melalui foto merupakan bagian terintegrasi dari AI Assistant. Fitur ini mengikuti hak akses AI Assistant dan sudah termasuk penuh dalam paket langganan Rp45.000 per bulan, tanpa ada paket tersendiri, batasan berbayar per foto, atau biaya tambahan lainnya.",
    highlightNote:
      "Terintegrasi Penuh: Diagnosis foto termasuk dalam AI Assistant di paket langganan Rp45.000/bulan tanpa biaya ekstra.",
  },
  {
    id: "faq-cara-kerja-diagnosis-foto",
    category: "Asisten AI",
    question: "Bagaimana cara kerja diagnosis foto tanaman dan apa batasannya?",
    answer:
      "Pengguna mengunggah foto daun atau bagian tanaman yang bermasalah, lalu sistem AI menganalisis gejala visual untuk memperkirakan kemungkinan gangguan tanaman beserta tingkat keyakinan (confidence score), penjelasan penyebab, serta langkah penanganan dan pencegahan. Diagnosis ini merupakan pemeriksaan awal berbasis pola visual dan bukan pengganti diagnosa ahli agronomi atau uji laboratorium. Jika gambar buram, pencahayaan kurang, atau hasil model tidak meyakinkan, sistem akan menampilkan keterbatasan tersebut.",
  },
  {
    id: "faq-siapa-pengguna",
    category: "Umum",
    question: "Siapa saja yang dapat menggunakan BumiLoka?",
    answer:
      "BumiLoka dapat digunakan oleh petani hidroponik pemula skala rumahan yang membutuhkan panduan pemantauan nutrisi yang jelas, pengelola kebun produktif yang ingin merapikan pencatatan jadwal tanam, maupun calon pembeli dan bisnis katering yang ingin mencari sayuran segar langsung dari kebun melalui marketplace gratis.",
  },
  {
    id: "faq-cara-promosi-panen",
    category: "Marketplace",
    question: "Bagaimana cara kerja Marketplace Hasil Panen bagi petani dan pembeli?",
    answer:
      "Petani dapat mendaftarkan jadwal panen, varietas sayuran (seperti selada, pakcoy, atau kale), metode budidaya, dan estimasi kuota panen sebelum hari potong tiba. Calon pembeli dapat memesan lebih awal secara transparan, menjaga sayuran tetap segar tanpa menumpuk di instalasi.",
  },
  {
    id: "faq-manajemen-tanaman",
    category: "Pengelolaan Budidaya",
    question: "Apa manfaat fitur Manajemen Tanaman bagi perawatan kebun harian?",
    answer:
      "Fitur ini membantu Anda mencatat umur tanaman (HST), nilai pH air, kepekatan larutan (PPM), dan suhu tandon di setiap meja instalasi secara teratur. Anda juga mendapatkan pengingat berkala untuk rutinitas penting seperti kuras tandon, cek pompa, dan kalibrasi alat ukur.",
  },
  {
    id: "faq-fungsi-asisten-ai",
    category: "Asisten AI",
    question: "Bagaimana Asisten AI membantu saat tanaman mengalami masalah?",
    answer:
      "Asisten AI membantu mengurai gejala fisik pada tanaman—baik melalui konsultasi teks terarah maupun analisis foto daun—menjadi urutan pemeriksaan praktis meliputi pH, suhu air, kepekatan nutrisi, sirkulasi udara, dan langkah penyesuaian dosis yang aman.",
  },
  {
    id: "faq-batasan-ai-agronomi",
    category: "Asisten AI",
    question:
      "Mengapa panduan Asisten AI tidak menggantikan peran ahli agronomi?",
    answer:
      "Banyak gejala tanaman hidroponik memiliki tampilan luar yang serupa antara kekurangan hara spesifik, stres suhu, dan infeksi patogen akar. Asisten AI memberikan panduan pemeriksaan awal berbasis pola umum, namun tidak melakukan uji laboratorium langsung. Untuk serangan penyakit sistemik yang menyebar cepat, petani tetap perlu berkonsultasi langsung dengan ahli agronomi atau penyuluh lapangan.",
    highlightNote:
      "Prinsip Keamanan: Asisten AI berfungsi sebagai panduan awal, bukan pengganti pemeriksaan laboratorium atau diagnosa ahli agronomi.",
  },
  {
    id: "faq-status-implementasi",
    category: "Umum",
    question:
      "Apakah website ini sudah melayani transaksi jual-beli dan pendaftaran akun?",
    answer:
      "Website ini saat ini merupakan pratinjau konsep antarmuka (frontend preview) yang menyajikan alur kerja dan rancangan layanan BumiLoka. Sistem pemrosesan pembayaran dan pendaftaran akun pengguna belum diaktifkan.",
  },
];
