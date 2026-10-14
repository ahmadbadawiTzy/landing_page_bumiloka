# BumiLoka — Landing Page Platform Digital Petani Hidroponik

BumiLoka adalah proyek **halaman arahan pemasaran (*marketing landing page*)** untuk konsep platform teknologi pertanian (*AgriTech*) yang berfokus pada pemberdayaan pembudidaya hidroponik di Indonesia. Aplikasi web ini dibangun menggunakan **Next.js 15 (App Router)**, **TypeScript 5**, dan **Tailwind CSS v4**, serta menerapkan arsitektur selebar layar (*full-width 100vw*) dan sistem desain terstruktur berbasis **[CruiseSL/design-md](https://github.com/CruiseSL/design-md)**.

---

## 1. Konteks Bisnis dan Tujuan BumiLoka

Petani hidroponik—baik pemula skala rumahan (*urban farming*, 20–200 lubang) maupun pengelola *greenhouse* berpengalaman (500+ lubang)—menghadapi tiga kendala utama yang saling berkaitan:
1. **Ketidakpastian Serapan Panen:** Sayuran hidroponik memiliki jendela kesegaran yang singkat setelah mencapai umur panen optimal (HST). Promosi sering baru dilakukan saat sayuran siap potong sehingga berisiko layu di talang atau dijual murah.
2. **Kerumitan Pencatatan Pemeliharaan:** Parameter harian krusial seperti derajat keasaman air (`pH 5.5–6.5`), kepekatan nutrisi AB Mix (`PPM/TDS`), suhu air tandon, dan rotasi meja tanam sering tercecer di buku tulis atau catatan manual.
3. **Keterbatasan Akses Panduan Diagnostik Cepat:** Saat muncul kendala visual seperti ujung daun terbakar (*tip burn*) atau klorosis, petani kesulitan mendapatkan rujukan pemeriksaan awal yang terstruktur dan terpercaya.

**BumiLoka** hadir sebagai konsep ekosistem digital yang menyatukan tiga kapabilitas inti:
- **Pasar Panen (*Harvest Marketplace*):** Membantu petani mempublikasikan jadwal panen dan membuka pra-pesan (*pre-order*) sayuran segar sebelum tanggal potong tiba.
- **Pengelolaan Budidaya (*Plant Management*):** Menstandarisasi buku log parameter harian (pH, PPM, suhu tandon) dan siklus rotasi tanam per instalasi meja.
- **Asisten AI Budidaya (*AI Cultivation Assistant*):** Menyediakan rujukan pemeriksaan awal gejala visual daun dan akar dengan batasan etis tegas (membantu deteksi dini, bukan menggantikan laboratorium patologi atau konsultan agronomi bersertifikasi).

---

## 2. Bagian Utama dan Fitur Landing Page (8 Bagian Wajib)

Halaman arahan ini menyusun tepat **delapan bagian berurutan** yang membentang selebar layar (*100vw full-width*) dengan ritme kontras bergantian antara nuansa botani gelap dan mineral hangat:

1. **Bagian 01 — Hero (`#hero`):** Foto komersial greenhouse hidroponik nyata secara *full-bleed*, headline berorientasi manfaat nyata, subheadline ringkas, navigasi atas adaptif (transparan ke mengambang), dan 3 pilar navigasi cepat.
2. **Bagian 02 — Masalah Konsumen (`#masalah-petani`):** Tiga kendala nyata petani tanpa dramatisasi: kepastian pembeli sebelum panen, buku log nutrisi yang tercecer, dan kesulitan mendiagnosa gejala daun/akar.
3. **Bagian 03 — Solusi & Manfaat (`#solusi-manfaat`):** Pemetaan langsung ketiga kendala ke manfaat konkret tiga modul BumiLoka, dilengkapi integrasi fotografi akar bersih di dalam netpot autentik (`/images/hydroponic-netpot.jpg`).
4. **Bagian 04 — Produk & Layanan (`#produk-layanan`):** Showcase editorial tiga modul utama tanpa penumpukan kartu berlebih (*no card nesting*), tabel batch pra-pesan Pasar Panen, papan meja tandon, dan tab simulasi tanya-jawab Asisten AI interaktif.
5. **Bagian 05 — Alur Kerja & Kredibilitas (`#bukti-konsep`):** Menggantikan testimoni fiktif dengan simulasi interaktif alur kerja 4 fase budidaya 35 hari serta analisis perbandingan petani pemula vs kebun produktif.
6. **Bagian 06 — Penawaran & Langganan (`#langganan`):** Satu paket langganan tunggal transparan seharga **Rp45.000** ("BumiLoka") mencakup seluruh modul, dengan penegasan bahwa periode penagihan belum dikonfirmasi pemilik proyek.
7. **Bagian 07 — Pertanyaan Umum / FAQ (`#faq`):** Akordeon interaktif ramah keyboard (*ARIA-compliant*) dengan filter kategori, jawaban lugas, dan batasan tanggung jawab AI dibanding ahli agronomi.
8. **Bagian 08 — Final CTA (`#cta-akhir`):** Penutup berlatar kanopi daun rimbun selebar layar (`/images/hydroponic-canopy.jpg`), tombol eksplorasi terarah, dan penegasan status pratinjau konsep.
9. **Identitas Merek Resmi (Logo):** Menggunakan berkas logo WebP transparan RGBA (`/images/bumiloka-logo.webp`) beresolusi 1024 × 572 (1.79:1) tanpa halo putih, dengan master arsip tersimpan di `/images/bumiloka-logo.jpg`.

---

## 3. Tumpukan Teknologi (*Technology Stack*)

- **Framework:** [Next.js](https://nextjs.org/) `15.5.27` (App Router, Prerendered Static Content)
- **Bahasa Pemrograman:** [TypeScript](https://www.typescriptlang.org/) `^5.7.0` (Strict Type-Safety)
- **Library UI:** [React](https://react.dev/) `^19.0.0` & React DOM `^19.0.0`
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) `^4.0.0` + `@tailwindcss/postcss`
- **Linter & Code Quality:** [ESLint](https://eslint.org/) `^8.57.1` + `eslint-config-next` `^15.2.0`
- **Ikonografi:** [Lucide React](https://lucide.dev/) `^0.475.0`
- **Tipografi:** Google Fonts via `next/font/google`: `Fraunces` (Editorial Display), `Plus Jakarta Sans` (Antarmuka & Paragraf), dan `JetBrains Mono` (Parameter Teknis Agronomi).
- **Sistem Desain:** Mengikuti kerangka kerja [`CruiseSL/design-md`](https://github.com/CruiseSL/design-md) pada file [`DESIGN.md`](./DESIGN.md).

---

## 4. Prasyarat Lingkungan (*Prerequisites*)

Pastikan lingkungan lokal atau CI Anda telah memasang:
- **Node.js** versi `18.18.0` atau lebih baru (direkomendasikan Node.js `20.x` LTS).
- **npm** versi `9.x` atau lebih baru (mengikuti `package-lock.json` bawaan proyek).

---

## 5. Instruksi Instalasi

1. Clone repositori ke direktori lokal:
   ```bash
   git clone https://github.com/<username>/bumiloka.git
   cd bumiloka
   ```
2. Pasang dependensi secara reproduktif menggunakan `npm ci` (atau `npm install`):
   ```bash
   npm ci
   ```

---

## 6. Konfigurasi Lingkungan (*Environment Configuration*)

Proyek ini adalah aplikasi **frontend-only statis** dan **tidak memerlukan rahasia server (database password, secret API keys)**. 

Variabel lingkungan yang didukung telah didokumentasikan pada [`.env.example`](./.env.example):

| Variabel | Sifat | Default | Penjelasan |
| :--- | :---: | :--- | :--- |
| `NEXT_PUBLIC_SITE_URL` | Opsional (Publik) | `https://bumilokalandingpage.vercel.app` | Domain asal produksi untuk canonical URL, OpenGraph metadata, `sitemap.xml`, dan `robots.txt`. |

> **Catatan Pemulihan SEO (SEO Recovery):**  
> Sebelumnya, canonical tag mengarah ke `https://bumiloka.id` yang belum memiliki domain/DNS aktif, sehingga perayap Google Search menolak mengindeks deployment Vercel. Default `SITE_URL` kini diarahkan ke domain preview terverifikasi (`https://bumilokalandingpage.vercel.app`). Jika domain kustom pribadi telah aktif, Anda dapat memperbaruinya via variabel ini di dashboard Vercel.

Untuk pengujian lokal dengan domain berbeda:
```bash
cp .env.example .env.local
```

---

## 7. Menjalankan Server Pengembangan (*Development Server*)

Jalankan perintah berikut untuk memulai server pengembangan lokal:

```bash
npm run dev
```

Buka peramban dan akses: [http://localhost:3000](http://localhost:3000).

---

## 8. Verifikasi Kualitas Kode & Build Produksi

Seluruh skrip berikut terdaftar resmi di `package.json` dan wajib lolos pengujian:

- **Pemeriksaan Tipe TypeScript (*Type-Check*):**
  ```bash
  npm run typecheck
  ```
- **Pemeriksaan Linting (*ESLint*):**
  ```bash
  npm run lint
  ```
- **Pembersihan Cache Build (*Clean Cache*):**
  ```bash
  npm run clean
  ```
- **Kompilasi Build Produksi (*Production Build*):**
  ```bash
  npm run build
  ```
- **Menjalankan Hasil Build Produksi Secara Lokal:**
  ```bash
  npm run start
  ```

---

## 9. Struktur Direktori Proyek

```text
bumiloka/
├── .github/
│   └── workflows/
│       └── ci.yml             # Workflow GitHub Actions CI (Typecheck, Lint, Build)
├── .env.example               # Template variabel lingkungan publik
├── .eslintrc.json             # Konfigurasi ESLint resmi Next.js Core Web Vitals
├── .gitignore                 # Aturan pengabaian file build, cache, dan OS
├── DESIGN.md                  # Kontrak sistem desain resmi (CruiseSL/design-md)
├── README.md                  # Dokumentasi teknis utama proyek ini
├── Laporan-Landing-Page-BumiLoka.docx # Laporan evaluasi & analisis landing page (Word)
├── next.config.ts             # Konfigurasi Next.js 15
├── package.json               # Dependensi & skrip eksekusi resmi
├── package-lock.json          # Lockfile dependensi npm
├── postcss.config.mjs         # Konfigurasi PostCSS untuk Tailwind CSS v4
├── tsconfig.json              # Konfigurasi TypeScript compiler
├── docs/                      # Dokumentasi teknis, standar arsitektur, dan SEO
│   ├── ai.md                  # Standar rekayasa & pengembangan AI (RFC 2119)
│   ├── seo.md                 # Otoritas SEO teknis, sitemap, JSON-LD, & E-E-A-T
│   ├── architecture.md        # Arsitektur sistem frontend & batasan implementasi
│   ├── landing-page-report.md # Laporan komprehensif Tugas 2 (Bahasa Indonesia)
│   ├── Laporan-Landing-Page-BumiLoka.docx # Salinan laporan evaluasi format Word
│   └── qa-checklist.md        # Matriks verifikasi QA, responsivitas, & aksesibilitas
├── public/                    # Aset statis publik
│   ├── icon.svg               # Favicon squircle 32x32
│   └── images/                # Logo WebP & fotografi resolusi tinggi
│       ├── bumiloka-logo.webp # Logo resmi WebP transparan RGBA (1024x572)
│       ├── bumiloka-logo.jpg  # Master sumber logo asli (arsip referensi)
│       ├── hero-greenhouse-fullbleed.jpg # Foto utama Hero komersial
│       ├── hydroponic-greenhouse.jpg     # Foto greenhouse pendukung
│       ├── hydroponic-netpot.jpg         # Foto akar sehat dalam netpot (Solusi)
│       ├── hydroponic-harvest.jpg        # Foto hasil panen segar (Produk)
│       └── hydroponic-canopy.jpg         # Foto kanopi daun rimbun (Final CTA)
├── screenshots/               # Bukti tangkapan layar antarmuka nyata
│   ├── desktop.png            # Tangkapan layar antarmuka Desktop
│   └── mobile.png             # Tangkapan layar antarmuka Mobile
└── src/
    ├── app/                   # Next.js App Router
    │   ├── globals.css        # Variabel token CSS & Tailwind layers
    │   ├── layout.tsx         # Root layout (Metadata API, JSON-LD, font loader)
    │   ├── page.tsx           # Halaman landing page menyusun 8 bagian (100vw)
    │   ├── robots.ts          # Protokol robot dinamis (/robots.txt)
    │   └── sitemap.ts         # Peta situs dinamis (/sitemap.xml)
    ├── components/
    │   ├── brand/
    │   │   └── BumiLokaLogo.tsx # Komponen logo adaptif resmi (WebP transparan)
    │   ├── layout/
    │   │   ├── Navbar.tsx     # Bilah navigasi lengket & menu seluler responsif
    │   │   └── Footer.tsx     # Footer direktori 8 bagian & unboxed brand
    │   └── sections/          # Delapan bagian wajib Tugas 2
    │       ├── Section1Hero.tsx
    │       ├── Section2Problems.tsx
    │       ├── Section3Solutions.tsx
    │       ├── Section4Products.tsx
    │       ├── Section5SocialProof.tsx
    │       ├── Section6Offer.tsx
    │       ├── Section7Faq.tsx
    │       └── Section8FinalCta.tsx
    └── data/
        └── landing-content.ts # Sumber data statis terpusat & typed TypeScript
```

---

## 10. Implementasi SEO Teknis & Pemulihan Mesin Pencari (*Technical SEO Recovery*)

Sesuai dokumen otoritatif [`docs/seo.md`](./docs/seo.md) dan audit diagnostik penelusuran Google Search:

1. **Pemulihan Origin & Canonical Tag (SEO Recovery):**
   - Diagnosis mengungkap domain default lama (`bumiloka.id`) tidak memiliki data DNS yang aktif, menyebabkan perayap Google Search pada `https://bumilokalandingpage.vercel.app` membatalkan pengindeksan akibat canonical tag mengarah ke domain mati.
   - Solusi: `SITE_URL` diset secara aman dan terverifikasi ke `https://bumilokalandingpage.vercel.app` dengan trailing slash terstandarisasi.
   - Alternates hreflang disediakan secara eksplisit: `id-ID` (`/`), `en-US` (`/?lang=en`), dan `x-default` (`/`).
2. **Metadata Open Graph & Twitter:**
   - Menyertakan gambar pratinjau sosial beresolusi tinggi 1200 × 630 (`/images/hero-greenhouse-fullbleed.jpg`) dengan kartu Twitter tipe `summary_large_image`.
3. **Data Terstruktur Schema.org (JSON-LD):**
   - Skema `WebSite`: Entitas situs web utama dengan dukungan dwibahasa `id` dan `en`.
   - Skema `Organization`: Entitas resmi BumiLoka, slogan, dan logo WebP transparan.
   - Skema `WebApplication`: Kategori aplikasi bisnis dan harga paket langganan Rp45.000/bulan.
   - Skema `FAQPage`: Pemetaan otomatis seluruh pertanyaan dan jawaban nyata dari komponen FAQ.
4. **Endpoint Dinamis Mesin Pencari:**
   - `/sitemap.xml` dihasilkan melalui `src/app/sitemap.ts` menyertakan language alternates (`id` & `en`) dan prioritas 1.0.
   - `/robots.txt` dihasilkan melalui `src/app/robots.ts` mengizinkan perayapan publik dan mereferensikan sitemap yang valid.

---

## 11. Internasionalisasi Dwibahasa (*Indonesian & English i18n*)

BumiLoka mengimplementasikan arsitektur i18n bertipe penuh (*type-safe dictionary*) tanpa ketergantungan library eksternal yang membengkakkan bundle:

- **Bahasa yang Didukung:** Bahasa Indonesia (`id`, default nasional) dan English (`en`, terjemahan alami & profesional).
- **Struktur Tipe:** `src/i18n/types.ts` mendefinisikan kontrak lengkap `TranslationDictionary`.
- **Kamus:** `src/i18n/dictionaries/id.ts` dan `src/i18n/dictionaries/en.ts`.
- **Konteks & Hook:** `src/i18n/context.tsx` menyediakan `LanguageProvider` dan `useLanguage()`.
- **Deteksi & Persistensi:** Memeriksa parameter URL (`?lang=en` atau `?lang=id`), menyinkronkan ke `localStorage`, dan otomatis memperbarui atribut `document.documentElement.lang`.
- **Kontrol UI:** Tombol toggle dwibahasa terintegrasi pada bilah navigasi desktop dan laci navigasi mobile.

---

## 12. Sistem Tema Terang / Gelap (*Dark & Light Theme System*)

Sistem tema dirancang untuk kenyamanan visual pembudidaya baik di terik greenhouse (mode terang) maupun malam hari (mode gelap):

- **Mode yang Didukung:** `light`, `dark`, dan `system` (otomatis mengikuti preferensi OS via `prefers-color-scheme`).
- **Tailwind CSS v4 Integration:** Menggunakan varian `@custom-variant dark (&:where(.dark, .dark *));` pada `globals.css` dengan basis kelas `.dark` pada elemen `<html>`.
- **Pencegahan Kedipan (*Anti-FOUC*):** Skrip inline sinkron di `<head>` membaca `localStorage` sebelum rendering pertama dimulai (0ms flash).
- **Persistensi:** Tersimpan pada key `bumiloka-theme` di `localStorage`.
- **Kontrol UI:** Tombol segmented 3 mode (Matahari, Bulan, Monitor) terpasang rapi di desktop dan mobile drawer.

---

## 11. Bukti Visual Antarmuka (*Screenshots*)

Repositori menyertakan tangkapan layar asli hasil render antarmuka:
- **Tampilan Desktop (1440 × 900):** Terlampir pada [`screenshots/desktop.png`](./screenshots/desktop.png).
- **Tampilan Seluler / Mobile (390 × 844):** Terlampir pada [`screenshots/mobile.png`](./screenshots/mobile.png).

---

## 12. Integrasi Berkelanjutan (*Continuous Integration*)

Repositori dilengkapi alur kerja otomatis GitHub Actions pada [`.github/workflows/ci.yml`](./.github/workflows/ci.yml) yang memverifikasi:
- Pemasangan dependensi secara reproduktif via `npm ci`.
- Pengecekan tipe TypeScript (`npm run typecheck`).
- Pengecekan standar kode ESLint (`npm run lint`).
- Kompilasi build produksi Next.js (`npm run build`).

Workflow ini otomatis dieksekusi pada setiap `push` dan `pull_request` ke cabang `main` atau `master`.

---

## 13. Panduan Deployment Produksi

### Opsi A: Deployment ke Vercel (Rekomendasi)
1. Hubungkan akun GitHub Anda ke [Vercel Dashboard](https://vercel.com/new).
2. Pilih repositori `bumiloka`. Vercel akan otomatis mendeteksi framework `Next.js`.
3. Pada bagian **Environment Variables**, tambahkan:
   - `NEXT_PUBLIC_SITE_URL`: Domain produksi kustom Anda (misal: `https://bumiloka.id`).
4. Klik **Deploy**. Build statis akan selesai dalam hitungan detik.

### Opsi B: Self-Hosted Server (Node.js / Docker)
1. Bangun aplikasi di lingkungan server:
   ```bash
   npm ci
   npm run build
   ```
2. Jalankan aplikasi menggunakan manajer proses (seperti PM2 atau Systemd):
   ```bash
   NODE_ENV=production npm run start
   ```

---

## 14. Batasan Saat Ini (*Known Limitations*) & Kejujuran Produk

1. **Arsitektur Frontend-Only (Tanpa Backend):**
   Proyek ini murni merupakan halaman arahan pemasaran (*marketing landing page*). Tidak ada database, sesi login pengguna, atau payment gateway live yang aktif di server.
2. **Paket Berlangganan Tunggal Rp45.000:**
   Ditampilkan tepat satu paket seharga Rp45.000. Periode penagihan definitif (apakah bulanan atau tahunan) menunggu konfirmasi lebih lanjut dari pemilik produk. Tidak ada tombol transaksi palsu (*fake checkout*).
3. **Pratinjau Konsep Antarmuka:**
   Tabel batch panen, parameter meja tandon, dan simulasi konsultasi AI disajikan sebagai representasi konsep produk (*conceptual previews*) yang jujur untuk mendemonstrasikan nilai produk kepada pengguna.
4. **Kepemilikan & Lisensi:**
   Hak cipta konsep merek dan aset visual BumiLoka dimiliki oleh pemilik proyek. Lisensi kode sumber disesuaikan dengan kebijakan repositori pemilik.
