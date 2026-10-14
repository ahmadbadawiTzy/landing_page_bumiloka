import { TranslationDictionary } from "../types";

export const idDictionary: TranslationDictionary = {
  common: {
    skipToContent: "Lewati ke konten utama",
    previewNotice: "Pratinjau Konsep Antarmuka",
    contactPersonName: "Rayn Amannullah Tzulkifli",
    monthlyPrice: "Rp45.000",
    monthlyUnit: "/bulan",
    billedMonthlyNote: "Ditagihkan setiap bulan",
    themeNames: {
      light: "Tema Terang",
      dark: "Tema Gelap",
    },
    languageNames: {
      id: "Bahasa Indonesia",
      en: "English",
    },
  },
  nav: {
    items: [
      { label: "Beranda", href: "#hero", sectionIndex: "01" },
      { label: "Masalah", href: "#masalah-petani", sectionIndex: "02" },
      { label: "Solusi", href: "#solusi-manfaat", sectionIndex: "03" },
      { label: "Layanan", href: "#produk-layanan", sectionIndex: "04" },
      { label: "Alur Kerja", href: "#bukti-konsep", sectionIndex: "05" },
      { label: "Langganan", href: "#langganan", sectionIndex: "06" },
      { label: "FAQ", href: "#faq", sectionIndex: "07" },
      { label: "Mulai", href: "#cta-akhir", sectionIndex: "08" },
    ],
    cta: "Paket Langganan",
    mobileCta: "Paket Langganan (Rp45.000/bln)",
    menuOpenAria: "Buka menu navigasi",
    menuCloseAria: "Tutup menu navigasi",
    homeAria: "BumiLoka — Kembali ke Beranda",
  },
  hero: {
    label: "Platform Budidaya Hidroponik",
    headline: "Kelola Kebun Lebih Rapi, Tangani Gejala Daun, dan Pasarkan Panen Lebih Pasti",
    subheadline:
      "BumiLoka membantu petani hidroponik memantau kondisi air tandon harian, memahami penyebab kendala tanaman lewat asisten AI, serta mempertemukan hasil panen segar dengan calon pembeli sebelum hari potong.",
    primaryCta: "Lihat Layanan BumiLoka",
    secondaryCta: "Langganan Rp45.000/bln",
    pillars: [
      {
        title: "Pengelolaan Budidaya",
        summary: "Pantau pH, PPM, dan umur tanaman di setiap meja instalasi.",
        href: "#modul-manajemen-tanaman",
      },
      {
        title: "Marketplace Hasil Panen",
        summary: "Buka pra-pesan sayuran sebelum tanggal potong tiba.",
        href: "#modul-pasar-panen",
      },
      {
        title: "Asisten AI Budidaya",
        summary: "Panduan praktis saat menemukan daun kuning atau akar bermasalah.",
        href: "#modul-asisten-ai",
      },
    ],
  },
  problems: {
    badge: "Kendala Operasional",
    heading: "Kendala Nyata yang Dihadapi Petani Hidroponik",
    description:
      "Menjalankan kebun hidroponik menuntut kedisiplinan pemantauan air tandon dan kepastian penyaluran hasil panen. Tiga kendala operasional ini kerap menghambat produktivitas kebun sehari-hari.",
    fieldImpactLabel: "Dampak di kebun:",
    items: [
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
    ],
  },
  solutions: {
    badge: "Solusi & Manfaat",
    heading: "Tiga Solusi Terpadu untuk Menjawab Kendala Kebun",
    description:
      "BumiLoka menghubungkan pemantauan nutrisi harian di instalasi kebun dengan jalur penjualan langsung ke pembeli. Setiap modul dirancang untuk mengatasi satu titik kritis dalam siklus budidaya hidroponik.",
    keyPoints: [
      "Kepastian Pasar: Promosi jadwal panen sebelum hari potong tiba.",
      "Keteraturan Tandon: Pencatatan pH dan PPM mencegah tanaman kekurangan nutrisi.",
      "Asisten AI: Panduan langkah pemeriksaan awal saat daun menunjukkan gejala kendala.",
    ],
    mainCta: "Lihat Pratinjau Tiga Modul",
    photoCaptionTitle: "Dari Semai hingga Panen Terjual",
    photoCaptionText: "Menghubungkan ketertiban teknis budidaya dengan kepastian pembeli",
    outcomesLabel: "Manfaat bagi petani:",
    cardPreviewLink: "Lihat Pratinjau Modul",
    items: [
      {
        id: "solusi-pasar-panen",
        capabilityName: "Marketplace Hasil Panen",
        solvesProblem: "Kepastian Penjualan",
        headline: "Buka Pra-Pesan Sayuran Sebelum Hari Potong",
        benefitSummary:
          "Publikasikan jadwal panen dan perkiraan jumlah sayuran beberapa hari lebih awal agar calon pembeli di sekitar Anda dapat memesan sebelum sayuran dipetik.",
        concreteOutcomes: [
          "Tampilkan jenis sayuran, metode tanam (NFT, DFT, atau Rakit Apung), dan tanggal siap panen.",
          "Bantu pelanggan rumah tangga, katering, dan pedagang lokal memesan sayuran segar langsung dari kebun.",
          "Jaga ritme tanam tetap lancar karena hasil panen sudah memiliki pembeli yang jelas.",
        ],
        targetAnchor: "#modul-pasar-panen",
      },
      {
        id: "solusi-manajemen-tanaman",
        capabilityName: "Pengelolaan Budidaya",
        solvesProblem: "Keteraturan Pemantauan",
        headline: "Catat pH, PPM, dan Umur Tanaman dalam Satu Tempat",
        benefitSummary:
          "Gantikan buku catatan kertas dengan lembar pemantauan terstruktur per meja instalasi—mulai dari benih di rockwool hingga tanaman siap petik.",
        concreteOutcomes: [
          "Catat nilai pH, kepekatan PPM nutrisi, dan suhu air harian untuk mendeteksi anomali lebih awal.",
          "Jadwalkan rutinitas penting seperti kuras tandon, cek pompa, dan pemindahan bibit ke talang pembesaran.",
          "Simpan riwayat tiap siklus tanam sebagai bahan acuan untuk panen berikutnya.",
        ],
        targetAnchor: "#modul-manajemen-tanaman",
      },
      {
        id: "solusi-asisten-ai",
        capabilityName: "Asisten AI Budidaya",
        solvesProblem: "Panduan Penanganan",
        headline: "Pahami Gejala Daun dan Langkah Pengecekan Awal",
        benefitSummary:
          "Ruang tanya-jawab terarah untuk membantu Anda memeriksa faktor lingkungan dan nutrisi yang menyebabkan gangguan pada tanaman secara bertahap.",
        concreteOutcomes: [
          "Uraikan gejala fisik tanaman menjadi daftar periksa: suhu air, sirkulasi udara, pH, dan kepekatan larutan.",
          "Berikan rekomendasi takaran nutrisi dan batas aman yang sesuai untuk jenis sayuran daun.",
          "Sertakan pengingat jujur kapan suatu gejala membutuhkan bantuan langsung dari ahli agronomi.",
        ],
        targetAnchor: "#modul-asisten-ai",
      },
    ],
  },
  products: {
    heading: "Tiga Layanan Utama BumiLoka",
    description:
      "Dirancang sederhana agar mudah digunakan oleh petani rumahan maupun pengelola kebun produktif untuk mendukung pemantauan tanaman, penanganan kendala, dan pemasaran panen.",
    conceptNotice: {
      bold: "Pratinjau konsep antarmuka:",
      text: "Tampilan di bawah ini menyajikan rancangan visual dari alur kerja produk BumiLoka di sisi antarmuka depan.",
    },
    marketplace: {
      badge: "Marketplace Hasil Panen",
      title: "Buka Pra-Pesan Sayuran Sebelum Hari Potong",
      description:
        "Bantu pembeli memesan sayuran segar sebelum waktu panen tiba. Anda dapat membagikan profil komoditas, perkiraan tanggal petik, dan metode tanam secara transparan kepada calon pembeli.",
      photoCaption: "Sayuran segar berkualitas prima siap distribusi",
      checklist: [
        "Katalog komoditas sayuran (Selada, Pakcoy, Kale)",
        "Jadwal tanggal panen untuk pemesanan lebih awal (pre-order)",
        "Informasi metode tanam (NFT, DFT, Rakit Apung)",
      ],
      tableTitle: "Daftar Batch Panen Terjadwal",
      uiBadge: "Pratinjau UI",
      batches: [
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
      ],
    },
    management: {
      badge: "Pengelolaan Budidaya",
      title: "Pantau Kondisi Tandon dan Umur Tanaman Harian",
      description:
        "Ketahui umur tanaman (HST), nilai pH, kepekatan nutrisi PPM, dan jadwal pemeliharaan tandon dalam satu tempat kerja. Anda tidak perlu lagi mengandalkan ingatan atau catatan kertas yang mudah hilang.",
      photoCaption: "Pemantauan sirkulasi nutrisi di instalasi NFT",
      checklist: [
        "Log pH, PPM, dan suhu air tandon harian per meja pipa",
        "Perhitungan otomatis umur tanam dari semai hingga siap panen",
        "Pengingat jadwal kuras tandon dan kalibrasi alat ukur",
      ],
      tableTitle: "Pemantauan Meja Tanam & Tandon",
      uiBadge: "Pratinjau UI",
      actionLabel: "Tindakan:",
      phLabel: "pH Air",
      ppmLabel: "PPM Nutrisi",
      tempLabel: "Suhu Air",
      installations: [
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
      ],
    },
    aiAssistant: {
      badge: "Asisten AI Budidaya",
      title: "Pahami Gejala Tanaman dengan Panduan Praktis",
      description:
        "Asisten tanya-jawab terarah yang membantu petani mengurai penyebab daun menguning, pucuk mengering, atau pertumbuhan lambat melalui langkah pemeriksaan bertahap.",
      cautionBadge: "Batasan penting agronomi",
      cautionText:
        "Asisten AI memberikan panduan pemeriksaan awal. Jika terjadi serangan penyakit akar atau bakteri yang menyebar cepat, petani tetap perlu berkonsultasi langsung dengan ahli agronomi.",
      tableTitle: "Contoh Konsultasi Gejala Kebun",
      uiBadge: "Pratinjau UI",
      stepsLabel: "Langkah Pemeriksaan Awal:",
      scenarios: [
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
      ],
    },
  },
  proof: {
    badge: "Alur Kerja & Bukti Konsep",
    heading: "Bagaimana BumiLoka Bekerja di Kebun Anda",
    description:
      "Alur terpadu yang mendampingi petani sejak penyemaian benih, pemantauan nutrisi harian, hingga penjualan sayuran siap petik.",
    transparencyNotice: {
      bold: "Transparansi konsep alur kerja:",
      text: "BumiLoka tidak menyajikan ulasan atau angka pengguna buatan. Bagian ini mendemonstrasikan bagaimana ketiga layanan saling terhubung dalam rutinitas kebun nyata.",
    },
    activityLabel: "Aktivitas di BumiLoka:",
    personasHeading: "Disesuaikan dengan Skala Kebun Anda",
    stages: [
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
    ],
    personas: [
      {
        role: "Petani Skala Rumahan (Urban Grower)",
        focus: "20–200 Lubang Tanam",
        challenge: "Tantangan utama:",
        insight:
          "Membutuhkan batas aman pH dan PPM yang mudah dipahami, serta pengingat rutin agar bibit di rockwool tidak terlambat dipindahkan ke talang pembesaran.",
      },
      {
        role: "Pengelola Kebun Produktif",
        focus: "500+ Lubang Tanam (Multi-Meja)",
        challenge: "Tantangan utama:",
        insight:
          "Memerlukan kerapian pencatatan jadwal tanam bergilir agar sayuran dapat dipromosikan ke pembeli rutin beberapa hari sebelum hari potong, menjaga perputaran meja.",
      },
    ],
  },
  offer: {
    badge: "Penawaran & Biaya",
    heading: "Satu Paket Lengkap untuk Seluruh Kebutuhan Kebun",
    description:
      "BumiLoka dirancang sederhana tanpa skema berbelit. Seluruh layanan inti dapat diakses dalam satu paket bulanan transparan.",
    planBadge: "Paket Berlangganan",
    planName: "BumiLoka",
    price: "Rp45.000",
    priceDescriptor: "/bulan",
    priceBillingSub: "Ditagihkan setiap bulan",
    planDescription:
      "Akses terpadu ke seluruh layanan BumiLoka untuk membantu pemantauan nutrisi harian, konsultasi gejala tanaman lewat asisten AI, dan publikasi pra-pesan hasil panen.",
    featuresLabel: "Cakupan Layanan:",
    features: [
      "Marketplace Hasil Panen: publikasi jadwal dan kuota pra-pesan sayuran",
      "Pengelolaan Budidaya: pencatatan pH, PPM, suhu tandon, dan umur tanaman (HST)",
      "Asisten AI Budidaya: panduan bertahap untuk kendala daun dan nutrisi",
      "Pengingat tugas rutin: jadwal kuras tandon, cek pompa, dan kalibrasi alat",
      "Akses penuh tanpa pemisahan fitur atau batasan meja instalasi",
    ],
    howToSubscribeLabel: "Cara Mendaftar Langganan:",
    howToSubscribeText:
      "Hubungi kami secara langsung melalui WhatsApp atau Email untuk menanyakan atau mengaktifkan akses langganan:",
    whatsappCta: "Hubungi via WhatsApp",
    emailCtaPrefix: "Kirim Email",
    whatsappContactLabel: "Kontak WhatsApp:",
    billingIntervalNote:
      "Biaya langganan Rp45.000 per bulan (ditagihkan bulanan, bukan sekali bayar).",
    transparencyNote:
      "Untuk mendaftar atau menanyakan akses langganan Rp45.000/bulan, hubungi tim kami via WhatsApp atau Email. Pembayaran otomatis di website belum diaktifkan.",
  },
  faq: {
    badge: "Tanya Jawab & Bantuan",
    heading: "Pertanyaan yang Sering Diajukan",
    description:
      "Informasi mengenai layanan BumiLoka, paket langganan Rp45.000/bulan, batasan asisten AI, dan status pengembangan website.",
    expandAll: "Buka Semua",
    collapseAll: "Tutup Semua",
    categories: {
      Semua: "Semua",
      Umum: "Umum",
      Langganan: "Langganan",
      Marketplace: "Marketplace",
      "Pengelolaan Budidaya": "Pengelolaan Budidaya",
      "Asisten AI": "Asisten AI",
    },
    items: [
      {
        id: "faq-apa-itu-bumiloka",
        category: "Umum",
        question: "Apa itu BumiLoka dan apa fokus layanannya?",
        answer:
          "BumiLoka adalah platform pendukung budidaya hidroponik yang menggabungkan tiga kebutuhan utama: Pengelolaan Budidaya untuk mencatat kondisi tanaman dan tandon harian, Marketplace Hasil Panen untuk mempertemukan petani dengan pembeli sebelum hari potong, serta Asisten AI Budidaya untuk membantu memahami gejala tanaman dan panduan penanganannya.",
      },
      {
        id: "faq-biaya-langganan",
        category: "Langganan",
        question: "Berapa biaya langganan BumiLoka dan apa saja yang didapatkan?",
        answer:
          "BumiLoka menyediakan satu paket berlangganan seharga Rp45.000 per bulan (Rp45.000/bulan). Paket ini mencakup seluruh layanan inti: Pengelolaan Budidaya untuk log pH/PPM/suhu tandon, Marketplace Hasil Panen untuk membuka pra-pesan sayuran, dan Asisten AI Budidaya untuk panduan penanganan gejala tanaman. Pendaftaran dan pertanyaan langganan dapat dilakukan langsung dengan menghubungi kontak resmi WhatsApp atau Email BumiLoka.",
        highlightNote:
          "Biaya Berlangganan: Rp45.000 per bulan (ditagihkan bulanan, bukan sekali bayar). Untuk mulai berlangganan, hubungi WhatsApp (+62 852-1054-2025 - Rayn Amannullah Tzulkifli) atau Email (bumiloka227@gmail.com).",
      },
      {
        id: "faq-siapa-pengguna",
        category: "Umum",
        question: "Siapa saja yang dapat menggunakan BumiLoka?",
        answer:
          "BumiLoka dapat digunakan oleh petani hidroponik pemula skala rumahan yang membutuhkan panduan pemantauan nutrisi yang jelas, maupun pengelola kebun produktif yang ingin merapikan pencatatan jadwal tanam dan memperluas pembeli hasil panen.",
      },
      {
        id: "faq-cara-promosi-panen",
        category: "Marketplace",
        question: "Bagaimana cara kerja Marketplace Hasil Panen?",
        answer:
          "Petani dapat mendaftarkan jadwal panen, varietas sayuran (seperti selada, pakcoy, atau kale), metode budidaya, dan perkiraan jumlah panen beberapa hari sebelum waktu potong. Dengan demikian, calon pembeli atau pelanggan dapat memesan lebih awal tanpa menunggu sayuran menumpuk di kebun.",
      },
      {
        id: "faq-manajemen-tanaman",
        category: "Pengelolaan Budidaya",
        question: "Apa manfaat fitur Pengelolaan Budidaya bagi perawatan harian?",
        answer:
          "Fitur ini membantu Anda mencatat umur tanaman (HST), nilai pH air, kepekatan larutan (PPM), dan suhu tandon di setiap meja instalasi. Anda juga mendapatkan pengingat berkala untuk rutinitas penting seperti kuras tandon dan kalibrasi alat ukur.",
      },
      {
        id: "faq-fungsi-asisten-ai",
        category: "Asisten AI",
        question: "Bagaimana Asisten AI membantu saat tanaman mengalami masalah?",
        answer:
          "Asisten AI membantu mengurai gejala fisik pada tanaman—misalnya daun bawah menguning atau ujung daun terbakar—menjadi urutan pemeriksaan praktis meliputi pH, suhu air, kepekatan nutrisi, dan aliran udara di kebun.",
      },
      {
        id: "faq-batasan-ai-agronomi",
        category: "Asisten AI",
        question:
          "Mengapa panduan Asisten AI tidak menggantikan peran ahli agronomi?",
        answer:
          "Banyak gejala tanaman hidroponik memiliki tampilan luar yang serupa antara kekurangan nutrisi, stres suhu, dan serangan penyakit akar. Asisten AI memberikan panduan pemeriksaan awal berbasis pola umum, namun tidak dapat memeriksa langsung ke lapangan atau melakukan uji laboratorium. Untuk kasus serangan penyakit yang menyebar cepat atau keputusan produksi skala besar, petani tetap perlu berkonsultasi dengan ahli pertanian atau penyuluh lapangan.",
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
    ],
  },
  finalCta: {
    heading: "Mulai Kelola Kebun Hidroponik Anda Lebih Teratur dan Pasti",
    description:
      "BumiLoka hadir mendampingi seluruh tahapan budidaya—dari pemantauan nutrisi harian di tandon, diagnosa gejala daun bersama asisten AI, hingga kepastian penyaluran hasil panen.",
    button: "Informasi Langganan (Rp45.000/bulan)",
    notice:
      "Pratinjau konsep antarmuka • Pendaftaran langganan via kontak resmi WhatsApp & Email",
  },
  footer: {
    tagline:
      "BumiLoka adalah platform pendukung budidaya hidroponik yang menggabungkan pemantauan nutrisi air tandon harian, marketplace pra-pesan panen, dan asisten AI penanganan gejala tanaman.",
    subscriptionBadge: "Paket Langganan: Rp45.000/bulan (akses seluruh modul)",
    contactHeading: "Kontak Langganan",
    whatsappContactNote: "WhatsApp:",
    emailContactNote: "Email resmi pertanyaan & pendaftaran",
    navHeading: "Navigasi Halaman",
    copyrightNotice: "BumiLoka. Tampilan website adalah pratinjau konsep antarmuka.",
    motto: "Membangun Negeri dari Bumi dan Tani • Langganan Rp45.000/bulan",
  },
};
