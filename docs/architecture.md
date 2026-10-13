# Arsitektur Frontend BumiLoka

## 1. Ikhtisar Arsitektur

BumiLoka dibangun sebagai *marketing landing page* modern berbasis **Next.js App Router** dengan pendekatan *frontend-only* dan *static-first rendering*. Arsitektur ini dirancang untuk memprioritaskan performa muat tinggi, kejelasan informasi agronomi, aksesibilitas antarmuka, dan keterpeliharaan jangka panjang (*maintainability*).

Sistem desain diimplementasikan berdasarkan standar dan alur kerja dari repositori referensi **[CruiseSL/design-md](https://github.com/CruiseSL/design-md)**, mendefinisikan kontrak desain terpusat pada file `DESIGN.md` di *root* proyek.

---

## 2. Pilihan Teknologi (*Technology Choices*)

| Komponen Stack | Teknologi / Versi | Alasan Pemilihan |
| :--- | :--- | :--- |
| **Framework** | Next.js 15 (App Router) | Memberikan optimasi rute statis (*SSG/prerender*), pemuatan gambar otomatis via `next/image`, dan pemuatan font lokal tanpa layout shift via `next/font`. |
| **Bahasa** | TypeScript 5 | Memastikan keamanan tipe (*strict type-safety*) pada seluruh data konten, antarmuka komponen, dan status interaktif. |
| **Styling** | Tailwind CSS v4 + PostCSS | Kompatibel dengan sistem token kustom `DESIGN.md`, menghasilkan bundle CSS minimalis, serta mendukung `@media (prefers-reduced-motion: reduce)`. |
| **Ikonografi** | Lucide React | Ikon SVG berbobot ringan, konsisten secara geometris, dan mudah diintegrasikan dengan atribut aksesibilitas (`aria-hidden="true"`). |
| **Tipografi** | Google Fonts via `next/font` | Kombinasi *editorial botanical* berkarakter: `Fraunces` (judul editorial), `Plus Jakarta Sans` (antarmuka & paragraf bahasa Indonesia), dan `JetBrains Mono` (metrik parameter teknis). |

---

## 3. Struktur Direktori dan Komponen

```text
 bumiloka/
 ├── DESIGN.md                  # Kontrak sistem desain terpusat (CruiseSL/design-md)
 ├── README.md                  # Dokumentasi teknis & panduan instalasi lengkap
 ├── next.config.ts             # Konfigurasi Next.js (optimasi gambar & mode ketat)
 ├── package.json               # Dependensi & skrip eksekusi resmi
 ├── tsconfig.json              # Konfigurasi TypeScript compiler
 ├── postcss.config.mjs         # Konfigurasi PostCSS untuk Tailwind CSS v4
 ├── docs/                      # Dokumentasi teknis, standar AI, dan SEO
 │   ├── ai.md                  # Standar rekayasa & pengembangan AI (RFC 2119)
 │   ├── seo.md                 # Spesifikasi SEO teknis, sitemap, JSON-LD, & E-E-A-T
 │   ├── architecture.md        # Dokumen ini (arsitektur sistem frontend)
 │   ├── landing-page-report.md # Laporan komprehensif Tugas 2 (tujuan, persona, nilai bisnis)
 │   └── qa-checklist.md        # Matriks verifikasi QA komprehensif
 ├── public/                    # Aset statis publik
 │   ├── icon.svg               # Favicon vektor squircle 32x32
 │   └── images/                # Fotografi asli hidroponik & logo resmi
 │       ├── bumiloka-logo.webp # Logo resmi WebP transparan RGBA (1024x572)
 │       ├── bumiloka-logo.jpg  # Master logo sumber asli (arsip referensi)
 │       ├── hydroponic-greenhouse.jpg
 │       ├── hydroponic-harvest.jpg
 │       ├── hydroponic-netpot.jpg
 │       └── hydroponic-canopy.jpg
 └── src/
     ├── app/                   # App Router Next.js 15
     │   ├── globals.css        # Token desain CSS variables & Tailwind layer
     │   ├── layout.tsx         # Root layout (Metadata API, JSON-LD, font loader)
     │   ├── page.tsx           # Halaman utama menyusun tepat 8 bagian berurutan (100vw)
     │   ├── robots.ts          # Protokol robot dinamis Next.js 15
     │   └── sitemap.ts         # Peta situs XML dinamis Next.js 15
     ├── components/
     │   ├── brand/
     │   │   └── BumiLokaLogo.tsx # Komponen logo adaptif resmi (WebP transparan)
     │   ├── layout/
     │   │   ├── Navbar.tsx     # Bilah navigasi lengket transparan-ke-mengambang
     │   │   └── Footer.tsx     # Footer direktori 8 bagian & unboxed brand presentation
     │   └── sections/          # Delapan bagian wajib Tugas 2 (Full-Width 100vw)
     │       ├── Section1Hero.tsx        # Bagian 01 — Hero Full-Bleed Edge-to-Edge
     │       ├── Section2Problems.tsx    # Bagian 02 — Masalah Konsumen / Petani
     │       ├── Section3Solutions.tsx   # Bagian 03 — Solusi & Manfaat (Netpot photography)
     │       ├── Section4Products.tsx    # Bagian 04 — Produk & Layanan (Editorial showcase)
     │       ├── Section5SocialProof.tsx # Bagian 05 — Simulasi Alur Kerja Petani
     │       ├── Section6Offer.tsx       # Bagian 06 — Paket Langganan Tunggal Rp45.000
     │       ├── Section7Faq.tsx         # Bagian 07 — FAQ Akordeon Interaktif
     │       └── Section8FinalCta.tsx    # Bagian 08 — Tindakan Penutup Full-Bleed Canopy
     └── data/
         └── landing-content.ts # Sumber data statis terpusat & typed TypeScript
```

---

## 4. Pengorganisasian Konten dan Aset (*Content & Asset Strategy*)

1. **Sentralisasi Konten (`src/data/landing-content.ts`):** Seluruh salinan teks Bahasa Indonesia, butir masalah, matriks solusi, data pratinjau batch panen, studi kasus Asisten AI, serta pertanyaan FAQ didefinisikan dalam modul data bertipe kuat. Hal ini mempermudah pembaruan konten oleh tim pemasaran tanpa perlu menyentuh markup komponen.
2. **Fotografi Berlisensi Asli (`public/images/`):** Menggunakan aset foto dokumenter berkualitas tinggi yang menampilkan rumah kaca (*greenhouse*) hidroponik sistem NFT, sayuran berakar bersih di dalam netpot, hasil panen segar, dan kanopi tanaman, menghindari ketergantungan pada URL eksternal yang lambat atau tidak stabil.
3. **Aset Logo WebP Transparan Berkanal Alpha (`public/images/bumiloka-logo.webp`):** Dikonversi dan diisolasi secara presisi dari master asli (`bumiloka-logo.jpg`) untuk memberikan fleksibilitas penempatan pada latar belakang bertema gelap maupun terang tanpa kotak pembatas buatan (*unboxed presentation*).
4. **Struktur Full-Width 100vw:** Seluruh 8 bagian landing page merentang penuh selebar viewport dengan ritme kontras bergantian antara nuansa botani gelap dan mineral hangat, menggunakan kontainer pembaca terpusat (`max-w-7xl` / `max-w-6xl`).

---

## 5. Strategi Rendering (*Rendering Strategy*)

- **Prerendering Statis (SSG / Client Component Isolation):** Halaman dirender secara statis saat *build time* (`export const dynamic = 'auto'`).
- **Isolasi State Klien (`"use client"`):** Directive klien dibatasi hanya pada komponen yang membutuhkan manipulasi interaktif sisi peramban:
  - `Navbar.tsx`: untuk state buka/tutup menu navigasi mobile dan penanganan tombol *Escape*.
  - `Section4Products.tsx`: untuk tab pemilihan studi kasus konsultasi AI.
  - `Section5SocialProof.tsx`: untuk stepper 4 tahap alur kerja petani.
  - `Section7Faq.tsx`: untuk mekanisme akordeon buka-tutup dan filter kategori.
- Komponen sisanya (`Section1Hero`, `Section2Problems`, `Section3Solutions`, `Section6Offer`, `Section8FinalCta`, `Footer`) adalah komponen server murni yang menghasilkan HTML ringan tanpa penambahan bobot JavaScript yang tidak perlu.

---

## 6. Batasan Implementasi (*Implementation Boundaries*)

Sesuai instruksi penugasan, proyek ini berfokus murni pada *marketing landing page*:
1. **Tidak Ada Server Backend / Database:** Tidak menggunakan PostgreSQL, Prisma, Supabase, maupun API Route handler kustom.
2. **Tidak Ada Sistem Autentikasi:** Tidak menyertakan NextAuth, sesi login, atau form registrasi palsu.
3. **Tidak Ada Transaksi / Pembayaran Langsung:** Pratinjau Pasar Panen tidak melakukan *checkout* atau *payment gateway*.
4. **Tidak Ada Mesin Inferensi AI Live:** Pratinjau konsultasi budidaya menyajikan skenario terstruktur yang telah dirancang untuk merepresentasikan cara kerja modul yang direncanakan.
5. **Transparansi Integritas:** Setiap elemen visual yang menampilkan modul dilabeli secara eksplisit sebagai *"Pratinjau Konsep Antarmuka"*.
