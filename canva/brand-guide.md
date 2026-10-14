# Panduan Merek & Desain BumiLoka (Canva Brand Guide)

Panduan ini mendokumentasikan sistem identitas visual, palet warna, tipografi, aset logo, dan spesifikasi antarmuka resmi BumiLoka untuk digunakan dalam pembuatan dan penyesuaian materi desain di **Canva** atau **Canva Website**.

---

## 1. Identitas Inti BumiLoka

BumiLoka adalah platform pendukung budidaya hidroponik yang menggabungkan tiga kebutuhan esensial petani dan pengelola kebun:

1. **Pengelolaan Budidaya**: Pencatatan log air tandon (pH, PPM, suhu harian) dan pemantauan umur tanaman (HST) per meja instalasi (NFT, DFT, Rakit Apung).
2. **Marketplace Hasil Panen**: Sistem pra-pesan (*pre-order*) sayuran segar sebelum hari potong tiba untuk menghubungkan kebun dengan pembeli lokal, rumah tangga, dan katering.
3. **Asisten AI Budidaya**: Panduan praktis bertahap untuk membantu petani menganalisis gejala kendala fisik (daun menguning, ujung kering / *tip burn*, dsb.) dengan batasan etika agronomi yang transparan.

**Motto Resmi**: *Membangun Negeri dari Bumi dan Tani*  
**Model Biaya**: Berlangganan transparan **Rp45.000 per bulan** (akses seluruh modul tanpa batasan instalasi).

---

## 2. Palet Warna Resmi (Brand Colors)

| Peran Warna | Nama Token | HEX | Nilai RGB | Penggunaan Utama |
| :--- | :--- | :--- | :--- | :--- |
| **Primary Brand** | Forest Deep | `#06180E` | `rgb(6, 24, 14)` | Header gelap, latar belakang dark mode, tombol utama, teks kontras tinggi |
| **Secondary Accent**| Deep Emerald | `#143323` | `rgb(20, 51, 35)`| Kartu solusi gelap, banner penawaran, footer background |
| **Accent Glow** | Lime Green | `#B6F084` | `rgb(182, 240, 132)`| Tombol CTA primer, teks aksen harga, pill badge aktif, ikon sorotan |
| **Canvas Background**| Warm Cream Light| `#F7F8F3` | `rgb(247, 248, 243)`| Latar belakang utama halaman (Light Theme) |
| **Card Surface** | Pure White | `#FFFFFF` | `rgb(255, 255, 255)`| Latar kartu fitur, modal dialog, formulir input |
| **Subtle Card Pill** | Warm Mineral | `#F2F4EC` | `rgb(242, 244, 236)`| Badge kategori, header tabel modul, pembungkus badge |
| **Border Neutral** | Muted Sage | `#E2E6DC` | `rgb(226, 230, 220)`| Garis tepi kartu, pemisah baris, bingkai modul |
| **Text Primary** | Deep Charcoal | `#121A15` | `rgb(18, 26, 21)` | Judul utama (H1/H2) dan teks badan di atas latar terang |
| **Text Muted** | Sage Slate | `#4A554E` | `rgb(74, 85, 78)` | Subjudul, deskripsi pendukung, metadata sekunder |
| **Text on Dark** | Soft White | `#F2F7F4` | `rgb(242, 247, 244)`| Teks badan di atas latar gelap `#06180E` atau `#143323` |
| **Alert / Caution** | Terracotta Red | `#C53929` | `rgb(197, 57, 41)` | Badge masalah, peringatan gejala kritis di kebun |
| **Warning / Status** | Warm Amber | `#B06000` | `rgb(176, 96, 0)` | Status tandon perlu penambahan nutrisi stok |

---

## 3. Tipografi (Typography Hierarchy)

Dalam implementasi web Next.js, BumiLoka menggunakan **Plus Jakarta Sans** dengan fallback sans-serif. Di Canva, gunakan font **Plus Jakarta Sans**, **Inter**, atau **Montserrat**.

### Hirarki Desktop (Artboard 1440px)
- **H1 (Hero Headline)**: 42–48px | Bold (800) | Line-height: 1.2 | Warna: `#121A15` (Light) / `#F7F8F3` (Dark)
- **H2 (Section Heading)**: 30–34px | ExtraBold (800) | Line-height: 1.25 | Warna: `#121A15`
- **H3 (Card Title / Subhead)**: 18–20px | Bold (700) | Line-height: 1.3 | Warna: `#121A15` / `#FFFFFF`
- **Body Regular**: 15–17px | Regular (400) / Medium (500) | Line-height: 1.6 | Warna: `#4A554E` / `#A8BCB0`
- **Pill / Badge Text**: 11–13px | Bold (700 / 800) | Letter-spacing: +0.05em | Uppercase

### Hirarki Mobile (Artboard 390px)
- **H1 (Hero Headline)**: 26–28px | Bold (800) | Line-height: 1.25
- **H2 (Section Heading)**: 22–24px | ExtraBold (800) | Line-height: 1.3
- **H3 (Card Title)**: 15–17px | Bold (700) | Line-height: 1.35
- **Body Text**: 12–14px | Regular (400) | Line-height: 1.5
- **Pill / Badge Text**: 10–11px | Bold (700) | Uppercase

---

## 4. Logo Resmi & Penggunaan (Logo Guidelines)

- **File Logo Resmi**: `canva/assets/bumiloka-logo.webp` (Dimensi asli: 1024 × 572 px).
- **Rasio Aspek**: ~1.79:1 (horizontal).
- **Integritas Bentuk**: Selalu pertahankan rasio aspek asli saat memperbesar atau memperkecil logo di Canva. Jangan pernah menarik salah satu sisi (distorsi horizontal/vertikal).
- **Ruang Bebas (Clear Space)**: Berikan ruang kosong minimal setara 16px di sekeliling logo agar tidak terhimpit elemen teks lain.
- **Ukuran Minimum Display**:
  - Desktop: Lebar minimum 110px.
  - Mobile: Lebar minimum 85px.
- **Kontras Latar Belakang**:
  - Di atas latar gelap (`#06180E` atau `#143323`): Gunakan logo asli dengan visibilitas penuh.
  - Di atas navbar putih/terang (`#FFFFFF` atau `#F7F8F3`): Logo memiliki kontras daun dan teks hijau tua yang sudah dioptimalkan untuk visibilitas bersih.

---

## 5. Komponen Antarmuka & Tombol (UI Components)

### Tombol Aksi (CTA Buttons)
1. **Primary Button (Aksen Terang / Dark on Lime)**:
   - Background: `#B6F084`
   - Text: `#06180E` (Font-weight: 800)
   - Bentuk: Kapsul (*pill-shaped*, radius 20–25px)
   - Digunakan pada: Tombol WhatsApp, banner langganan akhir, tombol pendaftaran.
2. **Primary Button (Forest Dark / Lime on Dark)**:
   - Background: `#06180E`
   - Text: `#B6F084` (Font-weight: 700)
   - Bentuk: Kapsul (radius 20–25px)
   - Digunakan pada: Hero primary CTA ("Lihat Layanan BumiLoka"), Navbar CTA.
3. **Secondary Button (Outline)**:
   - Background: `#FFFFFF`
   - Border: `#06180E` (tebal 1.5px)
   - Text: `#06180E` (Font-weight: 700)
   - Bentuk: Kapsul (radius 20–25px)
   - Digunakan pada: Hero secondary CTA ("Langganan Rp45.000/bln").

### Kartu & Kotak Konten (Cards & Modals)
- Radius Sudut: 14px – 20px.
- Border: 1px padat warna `#E2E6DC` (pada latar terang) atau `#1F4C32` (pada latar gelap).
- Bayangan (*Drop Shadow*): `0 4px 12px rgba(0, 0, 0, 0.05)` (lembut dan tidak mencolok).

### Mobile Navbar Minimalis
- Sisi Kiri: Logo resmi BumiLoka.
- Sisi Kanan: Satu ikon hamburger menu (3 baris rapi).
- Tidak menyertakan tautan teks horizontal atau tombol ganda yang memadati layar sempit.

---

## 6. Fakta Bisnis & Batasan Klaim Resmi

Semua materi desain di Canva wajib mematuhi ketentuan faktual proyek:

- **Biaya Langganan**: Wajib tertulis **Rp45.000 per bulan** atau **Rp45.000/bulan** (ditagihkan secara bulanan, bukan pembayaran sekali seumur hidup, dan tidak mencantumkan diskon tahunan yang tidak ada).
- **Kontak Resmi**:
  - WhatsApp: `+62 852-1054-2025` (Rayn Amannullah Tzulkifli)
  - Email: `bumiloka227@gmail.com`
- **Status Transaksi Web**: Website saat ini berstatus *pratinjau konsep antarmuka (frontend UI preview)*. Pendaftaran dan pembayaran langsung dilayani secara personal melalui WhatsApp dan Email.
- **Batasan Asisten AI**: Asisten AI Budidaya dirancang sebagai panduan pemeriksaan awal di kebun dan **bukan pengganti** konsultasi langsung dengan ahli agronomi atau uji laboratorium lapangan.
- **Kredibilitas Data**: Jangan membuat ulasan fiktif (*fake reviews*), rating bintang 5 buatan, atau klaim "terbesar di Indonesia" yang belum terbukti.

---

## 7. Rekomendasi Ukuran Kanvas di Canva

| Format Desain | Ukuran Kanvas Canva (W × H) | Jenis Template Canva yang Cocok |
| :--- | :--- | :--- |
| **Desktop Landing Page** | `1440 × 900 px` (per section) atau `1440 × 4300 px` (continuous) | *Website (Desktop)* / *Presentation (16:9)* |
| **Mobile Website** | `390 × 844 px` (per screen) atau `390 × 4200 px` (continuous) | *Mobile Website* / *Phone Wallpaper* |
| **Postingan Media Sosial (Feed)**| `1080 × 1080 px` | *Instagram Post (Square 1:1)* |
| **Story / Reels / Banner** | `1080 × 1920 px` | *Instagram Story / TikTok Vertical (9:16)* |
