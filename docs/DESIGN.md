# DESIGN.md

> **Reference System:** Structured and authored following the [CruiseSL/design-md](https://github.com/CruiseSL/design-md) open template and writing system (`DESIGN.template.md`, `docs/writing-guide.md`, and `examples/marketing-website/DESIGN.md`).

## Scope

This file defines the visual language, interaction principles, page-type behavior, and UI consistency rules for the **BumiLoka** marketing landing page.

Use this file for:
- Page-level design direction and eight-section narrative flow
- Visual hierarchy and editorial composition
- Component styling and interactive states
- Layout behavior and responsive breakpoints
- Interaction tone and accessibility rules
- Module-specific UI guidance across all 8 required Tugas 2 sections
- Consistency constraints for engineers and AI coding agents

Do not use this file for:
- Backend architecture or database schemas (this project is strictly a frontend-only marketing landing page)
- Feature acceptance criteria for the full SaaS application
- Engineering workflow rules (see `README.md` and `docs/architecture.md`)

## Document Relationship

Use project documents by intent:

- `README.md`
  - Source of truth for project setup, business context, commands, deployment instructions, and implementation boundaries
- `docs/architecture.md`
  - Source of truth for Next.js App Router structure, component boundaries, static rendering strategy, and frontend-only constraints
- `DESIGN.md`
  - Source of truth for visual language, color tokens, typography scale, section-level rules, interaction design, and UI consistency
- `docs/landing-page-report.md` & `docs/qa-checklist.md`
  - Source of truth for Tugas 2 alignment analysis, buyer persona rationale, and QA verification results

If documents appear to conflict:
1. Assignment requirements (Task 2 eight-section structure and honesty constraints) win for product definition
2. `DESIGN.md` wins for visual and interaction guidance
3. `docs/architecture.md` wins for technical boundaries

---

## Product Intent

BumiLoka adalah konsep platform digital terpadu untuk petani hidroponik di Indonesia yang menggabungkan tiga kapabilitas inti: **Pasar Panen (Harvest Marketplace)**, **Manajemen Tanaman (Plant Management)**, dan **Asisten Budidaya AI (AI Cultivation Assistant)**. Halaman arahan (*landing page*) ini dirancang untuk menjelaskan nilai produk secara jernih dalam hitungan detik, membangun kredibilitas melalui transparansi konsep, dan mengarahkan pengunjung ke langkah eksplorasi yang nyata.

- **Product type:** Marketing landing page for an AgriTech digital platform concept (Frontend-only)
- **Primary users:** Petani hidroponik pemula (*urban/home growers*) hingga petani hidroponik berpengalaman (*komersial/greenhouse menengah*) di Indonesia
- **Primary jobs-to-be-done:**
  - Memahami fungsi utama BumiLoka dalam 5 detik pertama
  - Mengenali relevansi masalah operasional kebun dan pemasaran hasil panen yang mereka alami
  - Mempelajari bagaimana tiga modul inti (Pasar Panen, Manajemen Tanaman, Asisten AI) saling terhubung dalam alur kerja nyata
  - Mengambil tindakan terarah melalui navigasi eksplorasi modul dan paket berlangganan (`#langganan`) yang fungsional
- **Desired product feeling:** Kredibel, membumi (*grounded*), terstruktur secara agronomi, editorial, tenang, dan jujur
- **Brand traits:**
  - *Botanical Editorial Precision* (presisi teknis hidroponik dipadukan dengan ketenangan visual agraris)
  - Transparan (membedakan pratinjau konsep antarmuka dari klaim sistem produksi)
  - Fungsional (setiap angka dan ilustrasi merepresentasikan parameter nyata seperti pH, TDS/PPM, HST/Hari Setelah Tanam, dan batch panen)
- **Anti-traits:**
  - *Generic AI SaaS hype* (gradien neon menyala, efek *glow* berlebihan, *glassmorphism* berlapis)
  - Klaim fiktif (testimoni palsu, angka adopsi karangan, diskon semu, atau tombol pendaftaran kosong)
  - Dekorasi tanpa makna (grafik acak tanpa label agronomi atau ilustrasi 3D abstrak)

---

## Experience Principles

1. **Kejelasan Agronomi di Atas Slogan (*Agronomic Clarity Over Slogans*):** Gunakan istilah yang akrab bagi pelaku hidroponik (instalasi NFT/DFT, nutrisi AB Mix, pH 5.5–6.5, kepekatan PPM, jadwal pindah tanam, dan kepastian serapan panen) alih-alih jargon teknologi yang kabur.
2. **Pemisahan Visual Tiga Kapabilitas Inti (*Tri-Module Visual Distinction*):** Pasar Panen, Manajemen Tanaman, dan Asisten Budidaya AI harus memiliki penanda visual, struktur pratinjau antarmuka, dan penekanan informasi yang berbeda namun tetap berada dalam satu sistem desain yang utuh.
3. **Kejujuran Konsep sebagai Sinyal Kepercayaan (*Honest Concept Framing*):** Jangan memalsukan testimoni atau metrik bisnis. Bangun kepercayaan dengan mempresentasikan simulasi alur kerja petani (*user journey*) dari semai hingga distribusi panen secara realistis dan transparan.
4. **Komposisi Editorial dengan Ruang Napas (*Editorial Whitespace & Hairline Structure*):** Gunakan latar warna kertas mineral hangat (*warm limestone*), garis batas tipis (*1px structural hairlines*), dan kontras tipografi yang tegas untuk menghindari tumpukan kartu (*nested card clutter*).
5. **Interaksi Fungsional dan Terukur (*Zero Dead Controls*):** Setiap tautan navigasi, tombol CTA, pemilih skenario alur kerja, dan akordeon FAQ harus benar-benar bekerja dan membawa pengguna ke tujuan yang valid di dalam halaman.

---

## Visual Theme and Atmosphere

BumiLoka mengusung atmosfer **"Modern Greenhouse Editorial"**—memadukan kerapian jurnal botani dan catatan agronomi dengan antarmuka produk digital modern.

Target qualities:
- Premium namun tetap membumi dan relevan bagi petani lapangan maupun penghobi rumahan
- Ramah dan mudah dipahami tanpa terkesan kekanak-kanakan
- Modern secara struktural namun tidak terjebak tren sesaat (*trend-driven*)
- Terkendali (*restrained*) dengan fokus pada fotografi segar dan kejelasan informasi
- Tenang (*calm*) dan terorganisasi rapi seperti instalasi kebun hidroponik yang sehat

This visual system works consistently across:
- **Narrative & Framing Sections** (Hero, Masalah Petani, Penawaran/Proporsi Nilai, CTA Akhir)
- **Comparative & Analytical Sections** (Solusi & Manfaat, Simulasi Perjalanan Pengguna / Bukti Konsep)
- **Product Preview Showcases** (Produk & Layanan: Tiga Modul Inti BumiLoka)
- **Interactive Reference Sections** (FAQ Akordeon & Navigasi)

---

## Brand Identity & Logo System

### Official Brand Logo Asset (`/images/bumiloka-logo.webp` & Source Master `/images/bumiloka-logo.jpg`)
Identitas visual resmi BumiLoka menggunakan aset logo foto yang dioptimalkan secara presisi menjadi format modern WebP transparan:
1. **Emblem Botani Lingkaran:** Lambang matahari terbit di atas petak lahan berkontur hijau dan tanah subur, dengan tunas tanaman hidroponik muda di latar depan dan sulur dedaunan segar melingkar.
2. **Wordmark & Tagline:** Tipografi resmi *"bumiloka"* (kombinasi hijau tua dan cokelat tanah) disertai moto resmi *"Membangun Negeri dari Bumi dan Tani"*.
3. **Format & Transparansi Asli (`bumiloka-logo.webp`):**
   - Berkas WebP berkanal alpha (RGBA) dengan resolusi asli 1024 × 572 (rasio aspek 1.79:1).
   - Seluruh latar belakang putih telah diisolasi secara komputasional (*connected component background matting*) menghasilkan alpha transparan murni tanpa halo putih, sementara geometri lingkaran inti, sinar matahari, sulur daun, dan huruf terjaga 100% utuh tanpa artefak lubang.
   - Master JPEG asli tetap dipertahankan di `public/images/bumiloka-logo.jpg` sebagai arsip referensi.
4. **Penerapan Komponen (`BumiLokaLogo.tsx`):**
   - **Navigasi Bilah Atas (`Navbar`):** Ditampilkan dalam kontainer lencana adaptif (`h-10 sm:h-11 w-auto`) dengan latar frosted glass semi-transparan yang mulus pada tema transparan hero maupun bilah mengambang (*floating navbar*).
   - **Penutup Halaman (`Footer`):** Ditampilkan bersih langsung di atas latar mineral tanpa kotak kartu buatan (`h-12 sm:h-14 w-auto`), memberikan kehadiran merek yang berwibawa dan menyatu dengan permukaan halaman.

### Favicon Standards
- **Vector Source:** `public/icon.svg` (32 × 32 viewBox, squircle radius 7px, `#143323` background).
- **Metadata Integration:** Dideklarasikan pada `src/app/layout.tsx` melalui `icons: { icon: "/icon.svg", apple: "/icon.svg" }` untuk ketajaman retina display di seluruh platform.

---

## Full-Width Visual Redesign & Section Architecture

Seluruh 8 bagian landing page dibangun dengan strategi **Full-Width Section Rhythm (100vw)**:
- **Rentang Lebar Penuh (100vw Edge-to-Edge):** Setiap bagian membentang selebar viewport browser tanpa batasan lebar global di tingkat `<main>`, menciptakan pengalaman lanskap visual yang imersif dan berkesinambungan.
- **Ritme Kontras Bergantian (*Alternating Visual Rhythm*):**
  1. *Section 1 (Hero):* Kanvas botani gelap penuh (`#06180E`) berlatar fotografi greenhouse komersial dengan gradien pencahayaan natural.
  2. *Section 2 (Masalah Konsumen):* Kanvas mineral hangat (`#F7F8F3`) dengan 3 kolom kartu masalah tipis (*1px structural hairlines*).
  3. *Section 3 (Solusi & Manfaat):* Kanvas zamrud dalam (`#092215`) dengan fotografi akar netpot hidroponik autentik (`/images/hydroponic-netpot.jpg`) dan kartu frosted glass.
  4. *Section 4 (Produk & Layanan):* Kanvas mineral terang (`#FFFFFF` / `#F7F8F3`) menampilkan showcase editorial 3 modul dengan integrasi fotografi panen segar (`/images/hydroponic-harvest.jpg`).
  5. *Section 5 (Social Proof / Alur Kerja):* Kanvas hutan gelap (`#071F13`) dengan simulasi 4 fase perjalanan budidaya dan persona grower.
  6. *Section 6 (Penawaran & Langganan):* Kanvas mineral dengan latar siluet greenhouse transparan, paket tunggal Rp45.000 yang terpusat.
  7. *Section 7 (FAQ):* Kanvas mineral hangat (`#F7F8F3`) dengan akordeon bersih tanpa kartu pembungkus luar yang berlapis.
  8. *Section 8 (Final CTA):* Kanvas botani gelap penuh (`#06180E`) berlatar kanopi daun hidroponik segar (`/images/hydroponic-canopy.jpg`).
- **Kontainer Keterbacaan Terpusat (*Centered Readable Containers*):** Konten teks dan interaksi di dalam setiap bagian dibatasi dalam kontainer responsif (`max-w-7xl`, `max-w-6xl`, atau `max-w-5xl`) dengan padding horizontal `px-4 sm:px-6 lg:px-8` untuk menjamin keterbacaan optimal (*optimal reading measure*).
- **Eliminasi Penumpukan Kartu (*No Nested Card Clutter*):** Menghindari pembungkusan kartu di dalam kartu (*cards within cards*). Setiap modul disajikan melalui pembagian ruang, tipografi proporsional, dan garis struktural yang bersih.

---

## Page Types

Karena proyek ini adalah *single-page marketing landing page* dengan delapan bagian wajib (Tugas 2), kategori *Page Types* dari `CruiseSL/design-md` dipetakan ke empat zona arketipe halaman di dalam alur pendaratan:

### Page Type 1: High-Impact Editorial Hero Zone (Section 1 & Section 8)
- **Name:** Full-Bleed Editorial Photographic Hero & Conversion Zone
- **Purpose:** Menyampaikan proposisi nilai utama BumiLoka secara instan di awal halaman melalui visual kebun hidroponik skala komersial yang imersif dan nyata (*edge-to-edge full-bleed*), serta menutup halaman dengan ajakan bertindak yang terarah.
- **Composition rules:**
  - Hero membentang penuh selebar layar (*full-bleed edge-to-edge 100vw*) dengan tinggi `min-h-[92vh] lg:min-h-[96vh]`.
  - Latar belakang wajib menggunakan fotografi greenhouse hidroponik komersial nyata beresolusi tinggi dengan pencahayaan alami dan perspektif talang NFT yang tertata rapi.
  - Teks, headline, dan tombol CTA ditempatkan langsung di atas foto (*layered transparently*) tanpa kotak/panel putih pekat (*no opaque card*) dan tanpa tata letak terbelah berdampingan (*no split layout*).
  - Menggunakan gradien terarah hijau hutan gelap (`from-[#06180E]/95 via-[#071F13]/80 to-transparent`) yang pekat di sisi kiri untuk kontras baca AAA dan memudar transparan di sisi kanan agar keaslian foto greenhouse tetap terlihat jelas.
- **Primary action style:** Tombol pil lonjong penuh (*rounded-full*) berwarna hijau *vibrant lime* (`#B6F084`) dengan teks gelap (`#092215`), dipadukan dengan tombol sekunder pil transparan bergaris tepi tipis (`border-white/30`).
- **Should emphasize:** Keaslian visual agronomi, kedalaman perspektif instalasi, kontras keterbacaan teks, dan kemudahan aksi pengguna dalam 3–5 detik pertama.
- **Should avoid:** Kotak teks putih solid, kartu terbelah (*split panel*), efek *glassmorphism* berat, atau tanaman buatan/CGI yang merusak kredibilitas.

### Page Type 2: Problem-to-Solution Diagnostic Matrix (Section 2 & Section 3)
- **Name:** Diagnostic Narrative & Benefit Mapping Zone
- **Purpose:** Menghubungkan kendala nyata petani hidroponik di lapangan secara langsung dengan manfaat konkret dari tiga kapabilitas BumiLoka.
- **Typical content:** Tiga kartu masalah utama petani (pemasaran panen, pencatatan pemeliharaan tanaman, akses panduan budidaya) yang dipetakan secara terstruktur ke tiga solusi BumiLoka.
- **Density:** Sedang (*medium density*), menggunakan tata letak kisi (*grid*) berbatas garis tipis (*hairline grid*).
- **Primary action style:** Tautan terarah menuju rincian kapabilitas produk (`#produk-layanan`).
- **Should emphasize:** Hubungan sebab-akibat yang logis antara kendala di kebun dan dampak operasional yang diberikan platform.
- **Should avoid:** Mengulang kalimat yang sama persis dengan bagian Hero atau bagian Produk, serta menggunakan ikon generik tanpa konteks pertanian.

### Page Type 3: Conceptual Product & Workflow Showcase (Section 4 & Section 5)
- **Name:** Interactive Product Preview & User Journey Demonstration
- **Purpose:** Menampilkan tiga modul utama BumiLoka melalui pratinjau antarmuka konseptual yang jujur serta mendemonstrasikan alur kerja petani dari semai hingga panen terjual (sebagai pengganti testimoni fiktif pada bagian Bukti Sosial).
- **Typical content:** Pratinjau terstruktur untuk Pasar Panen, Manajemen Tanaman, dan Asisten Budidaya AI (dilengkapi label *"Pratinjau Konsep Antarmuka"*), diikuti simulasi interaktif 4 tahap perjalanan petani hidroponik.
- **Density:** Sedang hingga tinggi (*medium-to-high density*), menyerupai spesifikasi produk yang bersih dan terukur.
- **Primary action style:** Kontrol tab/langkah interaktif untuk menelusuri alur kerja dan tombol navigasi menuju paket langganan.
- **Should emphasize:** Perbedaan visual yang tegas antar ketiga modul dan kejujuran bahwa layar yang ditampilkan adalah ilustrasi konsep produk.
- **Should avoid:** Menampilkan *dashboard* dekoratif berisi angka acak tanpa arti, atau mengklaim bahwa transaksi/inferensi AI langsung berjalan di halaman promosi ini.

### Page Type 4: Subscription Package & Knowledge Base (Section 6 & Section 7)
- **Name:** Single Subscription Offer & Accessible FAQ Zone
- **Purpose:** Mengomunikasikan paket berlangganan tunggal Rp45.000 secara jujur dan transparan (Bagian 6) serta menjawab pertanyaan kritis petani dan batasan penggunaan AI (Bagian 7).
- **Typical content:** Satu kartu langganan terpusat seharga Rp45.000 dengan daftar manfaat terverifikasi, catatan konfirmasi periode penagihan, dan komponen akordeon FAQ yang mendukung aksesibilitas keyboard.
- **Density:** Terstruktur dan mudah dipindai (*scannable card & accordion layout*).
- **Primary action style:** Tombol konsultasi langganan dan kontrol buka-tutup (*expand/collapse*) akordeon.
- **Should emphasize:** Keterbukaan informasi paket tunggal Rp45.000, batasan etis Asisten AI (tidak menggantikan ahli agronomi/laboratorium pada kasus kritis), dan kemudahan pembacaan.
- **Should avoid:** Model paket ganda pemula/komersial lama, harga coret palsu, hitung mundur (*countdown timer*) buatan, atau klaim checkout live.

---

## Color System

### Core Roles
- **Primary:** Deep Chlorophyll Green — merepresentasikan dedaunan sehat, keteduhan *greenhouse*, dan otoritas agronomi.
- **Secondary:** Botanical Moss Slate — warna pendukung untuk elemen struktural sekunder, lencana modul, dan aksen permukaan.
- **Accent:** Harvest Terracotta — warna aksen hangat untuk penanda sorotan penting, indikator perhatian nutrisi, dan label alur panen.
- **Background:** Warm Mineral Limestone — latar utama halaman yang hangat, bersih, dan nyaman dibaca di bawah cahaya terang.
- **Surface:** Pure Greenhouse White — permukaan kartu utama dan panel pratinjau produk.
- **Surface muted:** Soft Oat Stone — latar belakang bagian berselang-seling (*alternating section background*) untuk memisahkan kedelapan bagian dengan jelas.
- **Border:** Dry Stalk Hairline — garis pembatas struktural 1px yang menjaga ketegasan tata letak tanpa bayangan berat.
- **Text primary:** Deep Peat Charcoal — warna teks utama dengan rasio kontras tinggi (AAA terhadap latar).
- **Text secondary:** Muted Foliage Gray — warna teks pendukung, keterangan gambar, dan deskripsi sekunder.
- **Success:** Healthy Leaf Green — status parameter optimal (mis. pH 5.8–6.2, stok siap panen).
- **Warning:** Nutrient Amber — pengingat kalibrasi nutrisi atau jadwal pengecekan.
- **Danger:** Blight Rust Red — indikator anomali kritis atau batas peringatan.
- **Info:** Hydro Water Blue — indikator parameter air, suhu larutan, dan panduan AI.

### Suggested Palette (CSS Custom Properties & Tailwind Tokens)
- **Primary / Forest Deep (`--color-primary`):** `#092215` (Deep Forest Canopy)
- **Primary hover (`--color-primary-hover`):** `#0E2F1F`
- **Secondary (`--color-secondary`):** `#1E4A32`
- **Vibrant Accent (`--color-lime`):** `#B6F084` (Fresh Botanical Lime Sprout — tombol CTA pill, lencana aktif, angka metrik)
- **Vibrant Accent Hover (`--color-lime-hover`):** `#C7F69B`
- **Terracotta Accent (`--color-accent`):** `#B85D2B` (peringatan agronomi & label dampak)
- **Background (`--color-bg`):** `#F7F8F3` (Warm Limestone)
- **Surface (`--color-surface`):** `#FFFFFF` (Pure Greenhouse White)
- **Surface dark (`--color-surface-dark`):** `#092215` (Enclosed Forest Container)
- **Border (`--color-border`):** `#E2E6DC` (Soft Botanical Hairline)
- **Border on dark:** `rgba(255, 255, 255, 0.12)`
- **Text primary (`--color-text-primary`):** `#121A15`
- **Text secondary (`--color-text-secondary`):** `#4A554E`
- **Text muted (`--color-text-muted`):** `#68736C`
- **Success (`--color-success`):** `#1F6E43`
- **Warning (`--color-warning`):** `#B4690E`
- **Danger (`--color-danger`):** `#B93829`
- **Info (`--color-info`):** `#1D5D7A`

### Color Usage Rules
- **Use the forest primary color (`#092215`) for:** Kontainer besar Hero, panel showcase Alur Kerja, kartu penutup Final CTA, kartu komersial, dan teks judul utama.
- **Use the vibrant lime accent (`#B6F084`) for:** Tombol aksi utama berbentuk pill (`rounded-full`), angka metrik besar (`35%`, `24/7`), indikator tab aktif, dan penanda status optimal.
- **Keep these areas mostly neutral:** Latar belakang utama halaman (`#F7F8F3`) dan kartu putih (`#FFFFFF`) untuk memastikan kenyamanan baca.
- **Reserve semantic colors for:** Status parameter agronomi (pH, PPM, suhu larutan tandon).

---

## Typography

### Font Direction
- **Primary font (Body & UI):** `Plus Jakarta Sans` — sans-serif humanis modern yang sangat terbaca dalam Bahasa Indonesia, bersih pada ukuran kecil maupun antarmuka.
- **Secondary font (Editorial Display & Headings):** `Fraunces` (atau serif editorial berkarakter tinggi) — memberikan sentuhan jurnal botani yang berwibawa dan membedakan BumiLoka dari *template* SaaS generik.
- **Monospace font (Agronomic Metrics & Badges):** `JetBrains Mono` — digunakan khusus untuk angka parameter teknis (`pH 5.8`, `850 PPM`, `28 HST`, nomor urut bagian `01–08`).
- **Number style:** `tabular-nums` wajib diterapkan pada semua metrik suhu, kepekatan nutrisi, umur tanaman, dan penomoran bagian.
- **Overall tone:** Terstruktur, berwibawa, jernih, dan ramah bagi pembaca Indonesia.

### Font Suggestions
- **Preferred:**
  - Heading / Display: `var(--font-fraunces), Georgia, serif`
  - Body / UI: `var(--font-jakarta), system-ui, -apple-system, sans-serif`
  - Technical / Metrics: `var(--font-mono), ui-monospace, monospace`
- **Fallback:** `Georgia, serif` untuk judul dan `system-ui, sans-serif` untuk teks isi.

### Type Scale
- **Display / Hero Headline:** `clamp(2.25rem, 4.2vw, 3.75rem)` (`36px` mobile hingga `60px` desktop), `line-height: 1.08`, `letter-spacing: -0.02em`, font `Fraunces` (`font-semibold`).
- **Section Title (H2):** `clamp(1.75rem, 3vw, 2.75rem)` (`28px` hingga `44px`), `line-height: 1.15`, `letter-spacing: -0.015em`, font `Fraunces` (`font-semibold`).
- **Subsection / Module Title (H3):** `1.25rem` hingga `1.5rem` (`20px–24px`), `line-height: 1.3`, font `Plus Jakarta Sans` (`font-semibold`).
- **Card Title (H4):** `1.125rem` (`18px`), `line-height: 1.35`, font `Plus Jakarta Sans` (`font-semibold`).
- **Body Large (Lead Copy):** `1.125rem` (`18px`), `line-height: 1.65`, font `Plus Jakarta Sans` (`font-normal`).
- **Body Default:** `1rem` (`16px`), `line-height: 1.65`, font `Plus Jakarta Sans` (`font-normal`).
- **Small Label / Eyebrow:** `0.75rem` hingga `0.8125rem` (`12px–13px`), `line-height: 1.4`, font `JetBrains Mono` (`font-semibold`), natural sentence case atau title case tenang (contoh: `01 / Tentang BumiLoka`). Hindari uppercase shouting.
- **Caption / Disclaimer:** `0.8125rem` (`13px`), `line-height: 1.5`, warna `#4A554E`.

### Editorial Label Conventions & Anti-Clutter Rules
Untuk menghilangkan *AI label clutter* (teks badge panjang yang terkesan dibuat otomatis oleh generator dengan metadata berlebihan), seluruh label seksi dan kartu diatur oleh standar berikut:
- **Format Penomoran Bagian:** `NN / Nama singkat` (misalnya: `01 / Tentang BumiLoka`, `02 / Tantangan petani`, `03 / Cara BumiLoka membantu`, `04 / Fitur utama`, `05 / Lihat cara kerjanya`, `06 / Orientasi platform`, `07 / Pertanyaan umum`).
- **Casing & Tipografi:** Gunakan *natural sentence case* atau *title case* tenang, bukan huruf kapital penuh (*ALL CAPS*). Menggunakan font mono `JetBrains Mono` ukuran `text-xs font-semibold` dengan warna `#143323` pada pil `#EFECE4`.
- **Tanpa Redundansi Metadata:** Dilarang menggabungkan kata "BAGIAN", nomor urut, strip panjang (*em-dash*), kategori, dan subjudul dalam satu pil badge.
- **Bagian Penutup (Section 8 Final CTA):** Tidak menggunakan pil *eyebrow* indeks agar langsung menonjolkan ajakan bertindak utama (*conversion focus*).
- **Penanda Kartu & Modul:** Gunakan indeks angka bersih (`01`, `02`, `03`) dan sub-label sederhana seperti `"Dampak di kebun:"` atau `"Solusi di kebun:"`.

### Typography Rules
- **Preferred weights:** `400` (normal) untuk paragraf, `500` (medium) untuk navigasi dan label data, `600` (semibold) untuk judul dan tombol CTA. Hindari `800/900` (black) yang terasa kasar.
- **Rules for KPIs and numbers:** Semua angka parameter hidroponik harus disertai satuan yang jelas (`pH`, `PPM`, `°C`, `HST`, `kg/siklus`) menggunakan `tabular-nums`.
- **Rules for explanatory copy:** Batasi panjang baris (*measure*) antara `60ch` hingga `72ch` untuk kenyamanan baca maksimal.

---

## Layout Principles

### Page Structure
- **Main shell pattern:** Bilah navigasi atas yang lengket (*sticky top header*) dengan latar semi-transparan buram halus (`backdrop-blur-md bg-[#F7F6F2]/90`), diikuti `<main>` yang memuat tepat 8 `<section>` berurutan, dan ditutup oleh `<footer>` informasi dokumen & navigasi.
- **Max width strategy:** Kontainer utama `max-w-7xl` (`1280px`) dengan `px-4 sm:px-6 lg:px-8` agar proporsional pada layar desktop `1440 × 900` maupun mobile `390 × 844`.
- **Grid approach:** Kisi 12 kolom pada desktop (`lg:grid-cols-12`), menyempit menjadi 2 kolom pada tablet (`md:grid-cols-2`), dan 1 kolom vertikal pada mobile (`grid-cols-1`).
- **Default spacing rhythm:** Menggunakan kelipatan `8px` (`0.5rem`). Jarak antar elemen dalam satu kelompok `16px–24px`, jarak antar kartu `24px–32px`.
- **Desktop behavior (`1440 × 900`):** Komposisi asimetris editorial pada Hero (7 kolom teks : 5 kolom visual pratinjau), matriks 3 kolom sejajar untuk Masalah & Solusi, serta panel pratinjau berdampingan untuk Produk & Layanan.
- **Mobile behavior (`390 × 844`):** Urutan baca vertikal yang dioptimalkan untuk ibu jari (*thumb-friendly*), tanpa *overflow* horizontal, gambar disesuaikan rasio aspeknya, dan navigasi utama dikemas dalam panel menu *mobile* yang mudah dijangkau.

### Spatial Rules
- **Use vertical zoning such as:** Pergantian latar belakang antara `#F7F6F2` (Warm Limestone), `#EFECE4` (Soft Oat Stone), dan `#0F261A` (Deep Canopy Dark) untuk menciptakan pemisahan alami antar bagian tanpa bergantung pada dekorasi berlebihan.
- **Section spacing:** `py-16 md:py-24 lg:py-28` (`64px` pada mobile, `96px–112px` pada desktop).
- **Card padding:** `p-6 sm:p-8` (`24px–32px`) dengan ruang internal yang lega.
- **Alignment expectations:** Rata kiri (*left-aligned*) untuk seluruh teks naratif, daftar masalah, solusi, dan FAQ demi keterbacaan optimal.
- **Avoid:** Kontainer di dalam kontainer lebih dari 2 tingkat (*excessive nested cards*), jarak antar bagian yang tidak konsisten, atau teks yang menempel terlalu dekat ke tepi layar mobile (minimal `16px` / `px-4`).

---

## Surfaces, Borders, and Elevation

- **Border radius:** Luwes, modern, dan berkontur lembut—`rounded-3xl` (`24px`) untuk kartu utama dan panel modul, `rounded-[2.5rem]` (`32px–40px`) untuk kontainer enclosed Hero dan Final CTA, `rounded-2xl` (`16px`) untuk kartu metrik dan pratinjau antarmuka, serta `rounded-full` untuk seluruh tombol CTA, chips, dan pil lencana.
- **Border style:** Garis solid `1px` dengan warna `#E2E6DC` pada latar terang, atau `rgba(255, 255, 255, 0.12)` pada kontainer gelap `#092215`.
- **Shadow style:** Bayangan sangat halus dan alami (`shadow-sm` hingga `shadow-xl`) dengan kedalaman terkendali.
- **Surface layering:** Kontainer gelap bertekstur botani -> Kartu putih / kaca transparan -> Elemen kontrol pil.
- **Hover elevation:** Pergeseran halus `-translate-y-1` pada kartu layanan dan transisi kecerahan tombol `150ms ease-out`.

---

## Component Styling

### Buttons & CTAs
- **Primary CTA:** Latar `#143323`, teks `#F7F6F2`, tinggi minimal `48px` (`py-3.5 px-6`), `rounded-lg`, `font-semibold`, dengan transisi ke `#1E4631` saat *hover* dan cincin fokus `focus-visible:ring-2 focus-visible:ring-[#143323] focus-visible:ring-offset-2`.
- **Secondary CTA:** Latar `#FFFFFF` atau transparan dengan garis batas `1px solid #143323`, teks `#143323`, tinggi minimal `48px` (`py-3.5 px-6`), `rounded-lg`, transisi ke latar `#EFECE4` saat *hover*.
- **On-Dark Primary CTA (untuk bagian berlatar gelap):** Latar `#E5E0D5` atau `#F7F6F2`, teks `#0F261A`, `hover:bg-white`.
- **Tertiary / Anchor Link:** Teks `#143323` (`font-semibold`) dengan garis bawah dekoratif `#2D5A43` dan ikon panah yang bergeser `2px` saat *hover*.

### Navigation
- **Top Bar:** Menampilkan identitas merek **BumiLoka**, tautan navigasi langsung menuju bagian-bagian kunci (`Masalah Petani`, `Solusi & Manfaat`, `Produk & Layanan`, `Alur Kerja`, `Langganan`, `FAQ`), serta tombol CTA terarah (`Paket Langganan` / `#langganan`).
- **Mobile Menu:** Tombol *toggle* berlabel aksesibel (`aria-expanded`, `aria-controls`, `aria-label`) yang membuka daftar tautan bagian secara vertikal dengan target sentuh minimal `44px × 44px` dan otomatis menutup ketika salah satu tautan dipilih.

### Cards & Previews
- **Problem & Solution Cards:** Kartu berbatas `1px solid #DCD8CE` dengan nomor indeks monospasi (`01`, `02`, `03`), judul spesifik, penjelasan kendala nyata di kebun, dan indikator keterkaitan langsung dengan kapabilitas BumiLoka.
- **Conceptual Product Preview Panels:** Setiap modul dari tiga kapabilitas inti harus menampilkan lencana eksplisit `"Pratinjau Konsep Antarmuka"` (*Conceptual UI Preview*) agar pengunjung memahami bahwa visual tersebut adalah ilustrasi cara kerja produk yang direncanakan, bukan sistem *backend* langsung.
- **Interactive Accordion (FAQ):** Menggunakan elemen `<button>` semantik dengan atribut `aria-expanded` dan `aria-controls`, indikator ikon `+`/`−` yang jelas, serta dukungan penuh navigasi papan ketik (*keyboard*).

---

## Module-Specific Rules (Eight Required Sections of Task 2)

Seluruh halaman wajib mengimplementasikan **tepat delapan bagian** berikut secara berurutan tanpa ada yang digabung atau dihilangkan:

### Module 1: Section 1 — Hero (`#hero`)
- **Role in the product:** Menyampaikan nilai utama BumiLoka secara instan dalam beberapa detik pertama.
- **UI emphasis:** Headline berorientasi manfaat nyata bagi petani hidroponik, subheadline ringkas yang merangkum tiga kapabilitas (Pasar Panen, Manajemen Tanaman, Asisten Budidaya AI), CTA primer & sekunder yang berfungsi nyata, serta komposisi visual fotografi kebun hidroponik segar yang dipadukan dengan kartu ringkasan konsep BumiLoka.
- **Allowed patterns:** Tata letak 2 kolom proporsional pada desktop, fotografi tanaman hidroponik asli yang tajam, indikator 3 pilar produk di bawah CTA.
- **Disallowed patterns:** Kalimat pembuka abstrak yang menyembunyikan fungsi produk, tombol "Daftar Sekarang" yang mengarah ke halaman 404/kosong.

### Module 2: Section 2 — Customer Problems (`#masalah-petani`)
- **Role in the product:** Mengidentifikasi tiga masalah utama yang dihadapi petani hidroponik pemula maupun berpengalaman.
- **UI emphasis:** Penjelasan spesifik, ringkas, dan kredibel mengenai:
  1. Kesulitan mempromosikan dan menjual hasil panen hidroponik secara konsisten dengan harga yang wajar.
  2. Kesulitan merawat tanaman serta mengorganisasi aktivitas budidaya harian (pencatatan nutrisi AB Mix, pemantauan pH/PPM, jadwal semai hingga panen).
  3. Kesulitan memperoleh panduan budidaya dan penanganan masalah tanaman yang praktis serta mudah dipahami saat kendala muncul di kebun.
- **Allowed patterns:** Tiga kolom diagnostik terstruktur dengan konteks lapangan nyata (*real-world cultivation context*).
- **Disallowed patterns:** Keluhan hiperbolis tanpa dasar atau menyalin kalimat yang sama dari bagian Hero.

### Module 3: Section 3 — Solutions and Benefits (`#solusi-manfaat`)
- **Role in the product:** Menghubungkan ketiga masalah petani pada Bagian 2 secara langsung dengan solusi dan manfaat kapabilitas BumiLoka.
- **UI emphasis:** Pemetaan manfaat yang jelas untuk Pasar Panen (memperluas jangkauan pembeli dan transparansi jadwal panen), Manajemen Tanaman (keteraturan jadwal pemeliharaan dan catatan parameter kebun), serta Asisten Budidaya AI (kemudahan berkonsultasi mengenai perawatan tanaman kapan saja).
- **Allowed patterns:** Matriks perbandingan *"Dari Kendala Lapangan -> Menuju Solusi BumiLoka"* dengan penekanan pada hasil operasional bagi petani.
- **Disallowed patterns:** Mengulang deskripsi fitur teknis yang sama persis dengan Bagian 4 (Produk & Layanan).

### Module 4: Section 4 — Products and Services (`#produk-layanan`)
- **Role in the product:** Mempresentasikan tiga kapabilitas inti BumiLoka secara mendalam beserta visual pratinjau antarmuka yang jelas dan terpisah.
- **UI emphasis:** Pemisahan visual yang tegas antara:
  1. **Pasar Panen (*Harvest Marketplace*):** Pratinjau katalog panen terjadwal (mis. Selada Romaine, Pakcoy Hidroponik, Kale Curly), informasi estimasi panen, metode tanam (NFT/DFT), dan kontak pemesanan terstruktur.
  2. **Manajemen Tanaman (*Plant Management*):** Pratinjau papan jadwal budidaya per *batch*/instalasi, pemantauan umur tanaman (HST), log pemeriksaan pH & kepekatan nutrisi (PPM), serta daftar tugas harian.
  3. **Asisten Budidaya AI (*AI Cultivation Assistant*):** Pratinjau antarmuka tanya-jawab terpandu untuk gejala tanaman (seperti *tip burn* pada selada atau daun menguning), rekomendasi langkah pemeriksaan awal, serta catatan pengingat keselamatan agronomi.
- **Allowed patterns:** Tiga blok produk bergantian (*editorial showcase blocks*) atau penjelajah modul terstruktur, dilengkapi label eksplisit `"Pratinjau Konsep Antarmuka"`.
- **Disallowed patterns:** Mengklaim bahwa formulir transaksi atau mesin inferensi AI sudah berjalan secara *live* di balik halaman promosi ini.

### Module 5: Section 5 — Social Proof / Honest User-Journey Demonstration (`#bukti-konsep`)
- **Role in the product:** Membangun kepercayaan pengunjung pada posisi bagian *Social Proof* tanpa memalsukan data pelanggan.
- **UI emphasis:** Karena proyek ini belum memiliki data testimoni terverifikasi, logo mitra, atau metrik adopsi riil dari pemilik proyek, bagian ini wajib menerapkan aturan kejujuran tugas: **mengganti testimoni konvensional dengan demonstrasi alur penggunaan produk (*Honest Product-Demonstration & Farmer User-Journey*)** yang memperlihatkan bagaimana seorang petani hidroponik menggunakan ketiga modul BumiLoka dari tahap persiapan tanam hingga panen dipasarkan.
- **Allowed patterns:** Simulasi interaktif 4 tahap perjalanan petani (*Tahap 1: Perencanaan & Semai*, *Tahap 2: Pemeliharaan & Log Nutrisi*, *Tahap 3: Penanganan Gejala bersama Asisten AI*, *Tahap 4: Publikasi Panen di Pasar Panen*) disertai pernyataan transparansi konsep.
- **Disallowed patterns:** Nama petani fiktif, kutipan testimoni karangan, rating bintang palsu (`4.9/5`), jumlah pengguna fiktif (`10.000+ petani`), atau klaim persentase kenaikan omzet tanpa bukti.

### Module 6: Section 6 — Offer or Promotion / Single Subscription Package (`#langganan`)
- **Role in the product:** Menyajikan penawaran paket berlangganan tunggal yang transparan dan terukur pada posisi bagian Penawaran/Promosi.
- **UI emphasis:** Bagian ini menyajikan **tepat satu paket berlangganan seharga Rp45.000** ("Paket berlangganan BumiLoka"). Komposisi kartu tunggal yang bersih, berorientasi editorial, memuat rincian nilai platform, cakupan modul terintegrasi, dan tombol aksi terarah, dengan catatan bahwa periode penagihan memerlukan konfirmasi lebih lanjut dari pemilik proyek.
- **Allowed patterns:** Satu kartu langganan terpusat dengan tipografi harga jelas (`Rp45.000`), label `Paket berlangganan`, daftar 5 cakupan modul nyata, catatan bahwa periode penagihan memerlukan konfirmasi, dan pengingat bahwa transaksi online belum diaktifkan.
- **Disallowed patterns:** Model dua paket (pemula vs komersial), harga gratis/0 Rp buatan, harga kemitraan, diskon palsu, hitung mundur (*countdown timer*), atau klaim *checkout* live.

### Module 7: Section 7 — FAQ (`#faq`)
- **Role in the product:** Menjawab pertanyaan penting calon pengguna secara transparan, fungsional, dan aksesibel.
- **UI emphasis:** Komponen akordeon interaktif sisi klien (*client-side accordion*) yang memuat topik mengenai platform, sasaran pengguna, modul, paket langganan Rp45.000, serta batasan AI:
  1. Apa itu BumiLoka dan bagaimana konsep kerjanya.
  2. Berapa biaya langganan BumiLoka dan apa saja yang diperoleh (paket tunggal Rp45.000).
  3. Siapa saja yang dapat menggunakan platform ini (petani pemula hingga berpengalaman).
  4. Bagaimana cara petani mempromosikan hasil panen mereka melalui Pasar Panen.
  5. Bagaimana fitur Manajemen Tanaman membantu aktivitas pemeliharaan dan jadwal tanam.
  6. Apa fungsi utama dari Asisten Budidaya AI di dalam BumiLoka.
  7. Mengapa panduan dari Asisten AI bersifat pendukung dan **tidak menggantikan penilaian ahli pertanian/agronomi** atau uji laboratorium ketika dibutuhkan penanganan kritis.
  8. Status implementasi frontend-only tanpa transaksi live.
- **Allowed patterns:** Akordeon aksesibel dengan dukungan tombol papan ketik (`Enter`, `Space`, `ArrowDown`, `ArrowUp`, `Home`, `End`), filter kategori (termasuk kategori Langganan), fitur buka/tutup per item, dan tombol bantu *"Buka Semua / Tutup Semua"*.
- **Disallowed patterns:** Daftar FAQ statis yang tidak bisa diklik atau akordeon tanpa atribut `aria-expanded`.

### Module 8: Section 8 — Final CTA (`#cta-akhir`)
- **Role in the product:** Memberikan ajakan bertindak penutup yang jelas, ringkas, dan benar-benar berfungsi.
- **UI emphasis:** Ringkasan nilai BumiLoka dengan tombol CTA nyata yang mengarahkan pengunjung untuk meninjau kembali pratinjau tiga kapabilitas produk (`#produk-layanan`) atau melihat paket langganan (`#langganan`), disertai keterangan transparan mengenai status konsep proyek.
- **Allowed patterns:** Komposisi kontras tinggi yang bersih dengan 1 CTA utama (`#produk-layanan`) dan 1 CTA sekunder (`#langganan`) yang merujuk ke bagian valid di halaman.
- **Disallowed patterns:** Tautan menuju seksi usang seperti `#orientasi`, tautan WhatsApp/Email dengan nomor atau alamat karangan, atau tombol pendaftaran menuju rute `/register` yang tidak ada.

---

## Interaction Model

- **Default interaction tone:** Tenang, responsif, dan memberikan umpan balik visual yang jelas.
- **Hover behavior:** Transisi warna latar dan garis batas selama `150ms–200ms ease-out`.
- **Focus behavior:** Seluruh elemen interaktif (`<a>`, `<button>`) wajib menampilkan indikator `:focus-visible` yang kontras (`2px solid #143323` dengan `offset 2px` pada latar terang, atau `2px solid #F7F6F2` pada latar gelap).
- **Selection behavior:** Tab atau pemilih tahap alur kerja menggunakan atribut `aria-selected` atau `aria-pressed` dengan perubahan warna latar yang tegas (`#143323` aktif vs `#FFFFFF` tidak aktif).
- **Motion philosophy:** Hanya gunakan transisi fungsional untuk perubahan status UI (buka/tutup menu mobile, akordeon FAQ, dan pergantian tab simulasi). Hormati preferensi sistem pengguna melalui `@media (prefers-reduced-motion: reduce)`.

---

## Responsive Behavior

### Desktop (`1440 × 900` and `>= 1024px`)
- **Layout expectations:** Kontainer `max-w-7xl` terpusat, kisi 12 kolom aktif, bagian Hero menampilkan teks di kiri dan komposisi fotografi + kartu pratinjau di kanan.
- **Navigation behavior:** Tautan bagian tampil horizontal di bilah atas bersama CTA utama.
- **Primary module behavior:** Tiga kapabilitas produk dan matriks masalah/solusi tampil sejajar atau dalam komposisi *split-screen* yang seimbang.

### Tablet (`768px – 1023px`)
- **Layout expectations:** Kisi beradaptasi menjadi 2 kolom atau tumpukan proporsional dengan `px-6`.
- **Card stacking rules:** Kartu masalah dan solusi disusun dengan jarak `24px` tanpa teks yang terpotong.

### Mobile (`390 × 844` and `< 768px`)
- **Navigation behavior:** Bilah navigasi ramping (`h-16 sm:h-18`) dengan logo mode responsif (`compactOnMobile`) yang menyembunyikan lencana kategori panjang agar menu *hamburger* dan tombol CTA tidak berdesakan. Menu ekspansi mobile dapat dioperasikan satu tangan tanpa menutupi layar secara permanen.
- **Fluid typography & wrapping:** Headline utama menggunakan penataan ukuran fluida (`text-[2rem] sm:text-4xl lg:text-5xl` dengan `leading-tight` dan `tracking-tight`) untuk mencegah pemenggalan kata janggal (*single-word orphan wrap*) pada layar 390px.
- **Button stacking & touch targets:** Seluruh tombol CTA utama dan sekunder membentang selebar kontainer pada ponsel (`w-full sm:w-auto`) dengan tinggi area sentuh minimal `44px–48px` untuk kemudahan ketukan ibu jari (*thumb accessibility*).
- **Priority content behavior:** Headline, subheadline, dan CTA Hero langsung terlihat jelas di atas lipatan layar (*above the fold*) tanpa scroll berlebih; komposisi visual diletakkan rapi di bawah tombol aksi.
- **Card spacing & padding:** Kartu menggunakan padding internal yang seimbang (`p-4 sm:p-6 lg:p-8`) untuk memaksimalkan ruang baca tanpa mengorbankan margin pelindung tepi layar.
- **Overflow constraint:** Pembatasan ketat `overflow-x: hidden` di tingkat halaman; semua kontainer memiliki `max-w-full` dengan padding sisi minimal `px-4` (`16px`) sehingga tidak ada pergeseran horizontal (*zero horizontal scrollbar*).

---

## Accessibility Expectations

- **Maintain strong contrast for:** Seluruh kombinasi teks dan latar belakang (minimal standar WCAG AA `4.5:1` untuk teks normal dan `> 7:1` untuk kombinasi utama `#161D19` di atas `#F7F6F2`).
- **Never communicate status through color alone for:** Indikator parameter hidroponik di pratinjau produk—selalu sertakan label teks eksplisit (mis. `"Optimal (pH 6.0)"`, `"Perlu Cek Nutrisi"`).
- **Keep keyboard focus visible across:** Navigasi atas, tombol CTA, pemilih tahap di Bagian 5 & 6, dan seluruh butir pertanyaan di Bagian 7 (FAQ).
- **Provide semantic HTML:** Gunakan `<header>`, `<nav aria-label="...">`, `<main>`, `<section aria-labelledby="...">`, `<footer>`, serta hierarki heading `<h1>` -> `<h2>` -> `<h3>` yang berurutan tanpa melompati level.
- **Support reduced motion by:** Menonaktifkan transisi transformasi dan *smooth scroll* paksa ketika `prefers-reduced-motion: reduce` aktif.

---

## Content and Copy Tone

- **Voice:** Profesional, komunikatif, membumi, menggunakan Bahasa Indonesia yang alami dan tepat sasaran bagi pegiat maupun petani hidroponik.
- **CTA style:** Kata kerja aktif dan jujur yang menggambarkan tindakan nyata di halaman, seperti *"Jelajahi Tiga Kapabilitas"*, *"Pelajari Alur Kerja Petani"*, atau *"Lihat Rincian Modul"*.
- **Guidance style:** Edukatif dan menghormati keahlian petani lapangan; menempatkan teknologi dan AI sebagai asisten pendukung, bukan pengganti pengalaman agronomi.

---

## Allowed Patterns

- Fotografi tanaman hidroponik segar (selada hidroponik, instalasi pipa/talang nutrisi, daun hijau bersih) dengan pemotongan (*cropping*) editorial yang rapi.
- Pratinjau antarmuka konseptual yang memuat parameter agronomi realistis (`pH`, `PPM/TDS`, `HST`, estimasi berat panen) disertai penanda `"Pratinjau Konsep Antarmuka"`.
- Matriks pemetaan langsung antara Masalah Petani (Bagian 2) dan Solusi BumiLoka (Bagian 3).
- Simulasi alur perjalanan pengguna (*User Journey*) 4 tahap yang interaktif pada Bagian 5 sebagai bukti konsep yang jujur.
- Komponen akordeon FAQ yang mendukung klik tetikus dan navigasi papan ketik secara penuh.
- Penomoran bagian `01` hingga `08` yang konsisten untuk memudahkan orientasi pembaca dan verifikasi Tugas 2.

## Forbidden Patterns

- Testimoni pelanggan fiktif, nama petani karangan, logo perusahaan palsu, atau angka klaim bisnis yang tidak terverifikasi.
- Harga langganan palsu, diskon buatan, atau pengatur waktu hitung mundur (*countdown timer*) semu pada bagian Penawaran.
- Tombol atau tautan mati (`href="#"` tanpa tujuan, tombol form yang mengklaim menyimpan data ke server, atau nomor WhatsApp/email karangan).
- Gradien neon mencolok, *glow* ungu/sian khas template AI generik, atau ilustrasi 3D yang tidak relevan dengan pertanian hidroponik.
- Grafik *dashboard* dekoratif tanpa label satuan pertanian yang jelas.
- Mengubah urutan atau menghilangkan salah satu dari delapan bagian wajib Tugas 2.

---

## Agent Guidance

When generating or modifying UI for BumiLoka:

- Start with the 8-section sequence defined in `Module-Specific Rules` before choosing layout patterns.
- Preserve one unified "Modern Greenhouse Editorial" design language across all sections (`#F7F6F2` warm stone, `#143323` deep chlorophyll, `#DCD8CE` hairlines, `Fraunces` + `Plus Jakarta Sans` + `JetBrains Mono`).
- Always distinguish conceptual product previews from live functionality using clear labels.
- Never introduce fabricated social proof, unverified contact links, or backend routes.
- Verify responsive composition at `1440 × 900` (desktop), `768 × 1024` (tablet), and `390 × 844` (mobile).

## Design Review Checklist

Before considering a UI change complete, verify:

- Does it match BumiLoka's product intent for beginner and experienced hydroponic farmers?
- Are all 8 required Tugas 2 sections present, distinct, and in the exact required order?
- Does it follow the `CruiseSL/design-md` structure and constraints defined in this document?
- Are all product screens clearly labeled as conceptual previews?
- Does Section 5 avoid fabricated testimonials and instead present an honest product workflow / user journey?
- Does Section 6 avoid fake prices/discounts and communicate a genuine onboarding value proposition?
- Does Section 7 (FAQ) include the AI agricultural judgment disclaimer and support keyboard interaction?
- Do all navigation links and CTAs point to valid, working destinations?
- Does it stay free of horizontal overflow and visual clipping at `1440×900` and `390×844`?

## Quick Prompt Snippet

"Build the BumiLoka landing page in the exact style described in DESIGN.md. Follow the Modern Greenhouse Editorial aesthetic, the eight required Tugas 2 module rules, the warm limestone and deep chlorophyll color tokens, the Fraunces + Plus Jakarta Sans + JetBrains Mono typography hierarchy, and strict content honesty constraints."
