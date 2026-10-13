# Standar Rekayasa & Pengembangan Berbasis AI (AI Development Standards)

Dokumen ini adalah **pedoman rekayasa perangkat lunak resmi (*software engineering standard*)** yang **WAJIB** dipatuhi oleh seluruh asisten kecerdasan buatan (*AI coding agents*, seperti Claude, Antigravity, dsb.) dan pengembang perangkat lunak yang berkontribusi pada repositori **BumiLoka**.

Dokumen ini mendefinisikan batasan arsitektur, disiplin implementasi, rekayasa performa, aksesibilitas, keamanan, serta protokol verifikasi hasil kerja.

---

## 1. Konvensi Tingkat Kepatuhan (RFC 2119)

Setiap aturan dalam dokumen ini menggunakan kata kunci normatif berikut:
- **`MUST` / `WAJIB`**: Kepatuhan mutlak tanpa pengecualian. Pelanggaran terhadap aturan ini membatalkan status kelulusan tugas (*task failure*).
- **`MUST NOT` / `DILARANG`**: Larangan mutlak. Tindakan ini tidak boleh dilakukan dalam kondisi apa pun.
- **`SHOULD` / `DIANJURKAN`**: Rekomendasi teknis yang kuat. Jika tidak diikuti, agen wajib menyertakan alasan teknis yang valid.
- **`MAY` / `DIPERBOLEHKAN`**: Opsi implementasi yang diizinkan sesuai konteks permasalahan.

---

## 2. Arsitektur dan Disiplin Implementasi

### 2.1. Preservasi Arsitektur Next.js 15 App Router
1. **Server Components by Default (`MUST`)**:
   - Seluruh komponen React di dalam `src/app/` dan `src/components/` secara bawaan adalah React Server Components (RSC).
   - Agen **DILARANG** menambahkan direktif `"use client"` di tingkat teratas komponen kecuali komponen tersebut secara eksplisit membutuhkan:
     - React state (`useState`, `useReducer`).
     - React lifecycle hooks (`useEffect`, `useCallback`, `useMemo`).
     - Event listener browser (`onClick`, `onChange`, `onKeyDown`, `window.addEventListener`).
     - Akses langsung ke Web API browser (`localStorage`, `navigator`, dsb.).
2. **Isolasi Batas Klien (*Client Boundary Isolation*) (`SHOULD`)**:
   - Pindahkan logika interaktif ke komponen sekecil mungkin (*leaf components*).
   - Jangan menjadikan seluruh section halaman sebagai Client Component jika hanya ada satu tombol akordeon atau tab yang interaktif.
3. **Pemisahan Lapisan Kode (`MUST`)**:
   - **Komponen Presentasi:** Ditempatkan di `src/components/sections/` dan `src/components/layout/`.
   - **Data Konten Statis:** Terpusat dan bertipe ketat di `src/data/landing-content.ts`. Agen **DILARANG** menulis ulang data mentah yang sama berulang kali di berbagai komponen.
   - **Gaya Desain & Token:** Didefinisikan di `DESIGN.md` dan dihubungkan melalui `src/app/globals.css`.
4. **Disiplin Tipe TypeScript (`MUST`)**:
   - Seluruh kode baru dan modifikasi **WAJIB** lulus kompilasi `npm run typecheck` (`tsc --noEmit`).
   - Agen **DILARANG** menggunakan tipe `any`, *type casting* tidak aman (`as unknown as T`), atau menonaktifkan pengecekan tipe dengan `@ts-ignore` / `@ts-nocheck` tanpa alasan teknis yang didokumentasikan secara rinci.
5. **Integritas Dependensi dan Package Manager (`MUST`)**:
   - Agen **WAJIB** menggunakan `npm` sebagai pengelola paket sesuai dengan keberadaan `package-lock.json`.
   - Agen **DILARANG** memasang pustaka baru (*third-party packages*) jika kebutuhan teknis dapat dipenuhi secara efisien menggunakan API bawaan Next.js, React, atau pustaka yang sudah terpasang (`lucide-react`, `tailwindcss`).
   - Agen **DILARANG** menghapus atau meregenerasi `package-lock.json` kecuali terdapat bukti nyata kerusakan metadata dependensi.
6. **Batas Ruang Lingkup Kerja (`MUST`)**:
   - Kerjakan hanya apa yang diminta oleh pengguna (*strict scope adherence*).
   - Agen **DILARANG** melakukan *refactoring* massal yang tidak berkaitan, mengubah gaya visual di luar instruksi, atau menghapus fitur yang sedang berfungsi normal.

---

## 3. Kebijakan Bebas Hardcoding Berlebih (*Zero-Unnecessary-Hardcoding Policy*)

### 3.1. Nilai yang Wajib Diterpusatkan (*Single Source of Truth*)
Nilai-nilai global berikut **WAJIB** diambil dari sumber data terpusat (`src/data/landing-content.ts` atau variabel lingkungan):
1. **Asal Situs Produksi (*Production Site Origin*):** Referensi URL canonical, metadata sitemap, dan Open Graph (default: `https://bumiloka.id` atau `process.env.NEXT_PUBLIC_SITE_URL`).
2. **Identitas Merek:** Nama platform ("BumiLoka"), moto ("Membangun Negeri dari Bumi dan Tani"), serta deskripsi produk utama.
3. **Daftar Navigasi:** Konstanta `NAV_ITEMS` yang menyusun link navbar, mobile drawer, dan footer.
4. **Informasi Paket Langganan:**
   - **Harga:** Wajib konsisten pada **Rp45.000** (`price: "Rp45.000"`, `priceNumeric: 45000`).
   - **Status Interval Penagihan:** Belum dikonfirmasi oleh pemilik proyek (menunggu validasi operasional). Agen **DILARANG** mengarang interval bulanan/tahunan, diskon palsu, atau tier langganan tambahan.
5. **Pertanyaan Umum:** Konstanta `FAQ_ITEMS`.

### 3.2. Larangan dan Ketentuan Khusus Hardcoding
1. **Kredensial dan Kunci Rahasia (`MUST NOT`)**:
   - Agen **DILARANG KERAS** menyematkan API key, token autentikasi, kata sandi, atau rahasia apa pun langsung di dalam kode sumber (`hardcoded secrets`).
2. **Variabel Lingkungan Publik (`MUST`)**:
   - Variabel yang diekspos ke browser wajib menggunakan awalan `NEXT_PUBLIC_`.
   - Agen **DILARANG** menaruh data rahasia pada variabel berawalan `NEXT_PUBLIC_`.
3. **Anti-Abstraksi Berlebihan (`SHOULD`)**:
   - Teks atau atribut yang bersifat lokal murni pada satu komponen (misalnya label aria spesifik, nama kelas styling Tailwind) tidak perlu dipindahkan ke file konfigurasi terpisah jika tidak digunakan kembali. Hindari *over-engineering* konfigurasi.

---

## 4. Rekayasa Performa Web (*Performance Engineering*)

BumiLoka menargetkan pengalaman pengguna yang instan, ringan, dan stabil di seluruh kondisi jaringan di Indonesia (termasuk jaringan seluler 4G menengah).

### 4.1. Strategi Rendering & Komputasi
1. **Static-First Generation (`MUST`)**:
   - Landing page BumiLoka wajib terkompilasi sebagai halaman statis murni (`○ (Static) prerendered as static content`).
   - Hindari pemanggilan fungsi dinamis seperti `headers()` atau `cookies()` pada root page yang dapat membatalkan prerendering statis kecuali ada kebutuhan autentikasi yang diinstruksikan.
2. **Pencegahan Waterfalls & Rerenders (`SHOULD`)**:
   - Hindari operasi komputasi berat di dalam siklus render klien.
   - Gunakan fungsi murni (*pure functions*) untuk transformasi data konten.

### 4.2. Pengelolaan Aset Gambar
1. **Penggunaan `next/image` (`MUST`)**:
   - Seluruh gambar raster (`.jpg`, `.png`, `.webp`) wajib dimuat menggunakan komponen `Image` dari `next/image`.
   - Setiap elemen gambar wajib memiliki atribut `alt` yang deskriptif dan akurat secara agronomis.
2. **Prioritas Largest Contentful Paint (LCP) (`MUST`)**:
   - Gambar latar belakang Hero (`/images/hero-greenhouse-fullbleed.jpg`) adalah elemen LCP utama halaman. Gambar ini **WAJIB** memiliki properti `priority` dan **DILARANG** menggunakan `loading="lazy"`.
3. **Pemuatan Bertahap (*Lazy Loading*) Gambar di Bawah Lipatan (`MUST`)**:
   - Seluruh gambar selain LCP Hero wajib dimuat secara *lazy* untuk menghemat bandwidth awal.
4. **Pemberian Atribut Ukuran Responsif (`MUST`)**:
   - Gambar yang menggunakan properti `fill` wajib menyertakan atribut `sizes` yang akurat sesuai *breakpoint* viewport (misal: `sizes="(max-width: 1024px) 100vw, 42vw"`).
5. **Preservasi & Optimasi Logo Resmi (`MUST`)**:
   - Aset logo resmi BumiLoka menggunakan format WebP transparan RGBA (`/images/bumiloka-logo.webp`) beresolusi 1024 × 572 (rasio aspek 1.79:1).
   - Bentuk emblem matahari terbit, kontur lahan, tunas, daun melingkar, dan tipografi wajib dijaga tanpa distorsi, tanpa halo artefak putih, dan tanpa pemotongan margin esensial.
   - Master gambar asli tersimpan di `/images/bumiloka-logo.jpg` sebagai arsip referensi.

### 4.3. Optimalisasi Font dan CSS
1. **Pemuatan Font Terisolasi (`MUST`)**:
   - Font wajib dimuat menggunakan `next/font/google` dengan deklarasi `display: "swap"` dan `subsets: ["latin"]`.
   - Menggunakan CSS variables (`--font-jakarta`, `--font-fraunces`, `--font-jetbrains`) untuk mencegah *Cumulative Layout Shift* (CLS).
2. **CSS Ringan & Bebas Animasi Berlebih (`SHOULD`)**:
   - Hindari efek grafis berat seperti *backdrop-blur* berlebihan bertingkat di mobile yang menyebabkan *frame drop*.
   - Hormati preferensi pengguna terhadap pengurangan gerakan (`@media (prefers-reduced-motion: reduce)`).

### 4.4. Anggaran Metrik Kinerja (Target Core Web Vitals)
Seluruh perubahan wajib dievaluasi berdasarkan ambang batas Core Web Vitals pada persentil ke-75:
- **Largest Contentful Paint (LCP):** `≤ 2.5 detik`
- **Interaction to Next Paint (INP):** `≤ 200 milidetik`
- **Cumulative Layout Shift (CLS):** `≤ 0.1`
- **Skor Kinerja Lighthouse (Produksi):** Ditargetkan `≥ 90` pada perangkat desktop dan mobile representatif.

> *Catatan Pengujian:* Agen wajib mencatat hasil pengukuran secara jujur menggunakan data yang benar-benar diuji. Agen **DILARANG** mengarang angka skor performa.

---

## 5. Standar Aksesibilitas (a11y) dan Mutu Responsif

1. **Hierarki Judul Semantis (`MUST`)**:
   - Tepat satu elemen `<h1>` per halaman yang berada di dalam Hero section.
   - Seluruh judul section wajib menggunakan `<h2>`, dan sub-bagian di dalamnya menggunakan `<h3>`.
2. **Aksesibilitas Papan Ketik & Kontras (`MUST`)**:
   - Seluruh elemen interaktif (`<a>`, `<button>`, input akordeon) wajib dapat diakses penuh melalui tombol `Tab`, `Enter`, dan `Space`.
   - Fokus keyboard wajib memiliki indikator visual yang jelas (`focus-visible:outline-2 focus-visible:outline-[#143323]`).
   - Rasio kontras teks terhadap latar belakang minimal `4.5:1` untuk teks normal dan `3:1` untuk teks besar/bold (WCAG Level AA).
3. **Target Sentuh Seluler (*Touch Target Size*) (`MUST`)**:
   - Tombol, tab, dan tautan navigasi pada tampilan seluler wajib memiliki area sentuh minimal `44 × 44 piksel`.
4. **Verifikasi Tiga Viewport Wajib (`MUST`)**:
   - **Desktop Standar:** `1440 × 900`
   - **Tablet Menengah:** `768 × 1024`
   - **Ponsel Standar:** `390 × 844`
   - Halaman **DILARANG** memiliki *horizontal scrollbar* yang tidak diinginkan (`overflow-x: hidden` teruji).

---

## 6. Batasan dan Rujukan SEO

Segala bentuk strategi pencarian organik, penataan metadata, data terstruktur (JSON-LD), sitemap, dan indeksasi mesin pencari **WAJIB** merujuk secara eksklusif pada dokumen:
👉 **[`docs/seo.md`](file:///home/ahmadbadawi/Documents/CodinganKu/WebsiteNonprofit/bumiloka/docs/seo.md)**

Agen **DILARANG** membuat aturan SEO tandingan atau mengimplementasikan metadata yang bertentangan dengan `docs/seo.md`.

---

## 7. Keamanan dan Keandalan Perangkat Lunak

1. **Pencegahan Injeksi Kode (`MUST`)**:
   - Agen **DILARANG** menggunakan `dangerouslySetInnerHTML` kecuali untuk menyematkan skrip JSON-LD data terstruktur yang telah divalidasi dan di-escape secara aman.
2. **Tautan Eksternal Aman (`MUST`)**:
   - Seluruh tautan ke domain luar wajib menyertakan atribut `target="_blank"` dan `rel="noopener noreferrer"`.
3. **Batas Arsitektur Tanpa Backend (`MUST`)**:
   - BumiLoka saat ini adalah proyek *frontend-only marketing landing page*. Agen **DILARANG** menambahkan database (Prisma, Mongoose, Supabase), API server dinamis, atau sistem otentikasi kecuali diminta secara eksplisit oleh pemilik proyek.

---

## 8. Daftar Periksa Penyelesaian Tugas (Mandatory AI Completion Checklist)

Sebelum menyatakan tugas selesai, setiap agen AI **WAJIB** mengeksekusi dan memverifikasi langkah-langkah berikut:

- [ ] **1. Inspeksi Pra-Edit:** Memeriksa berkas yang ada sebelum mengubah kode (`view_file`, `run_command`).
- [ ] **2. Preservasi Arsitektur:** Tidak merusak Next.js App Router, Tailwind v4, dan struktur 8 section.
- [ ] **3. Tanpa Halusinasi Komersial:** Menjaga paket langganan tunggal Rp45.000 dan tidak mengarang periode penagihan atau fitur backend yang belum ada.
- [ ] **4. Uji Typecheck TypeScript:** Menjalankan `npm run typecheck` dan memastikan **0 error**.
- [ ] **5. Uji Build Produksi:** Menjalankan `npm run build` dan memastikan kompilasi sukses dengan status prerender statis.
- [ ] **6. Verifikasi Responsif Multi-Viewport:** Menguji tampilan desktop (1440px), tablet (768px), dan mobile (390px).
- [ ] **7. Tidak Ada Regresi Tautan:** Memastikan seluruh anchor link (`#hero`, `#masalah-petani`, `#solusi-manfaat`, `#produk-layanan`, `#bukti-konsep`, `#langganan`, `#faq`, `#cta-akhir`) mengarah ke elemen yang valid.
- [ ] **8. Tanpa Aset Rusak:** Seluruh gambar lokal (`/images/...`) dan favicon (`/icon.svg`) disajikan dengan status HTTP 200.
- [ ] **9. Laporan Berbasis Bukti:** Menyampaikan laporan jujur dan eksplisit mengenai apa yang sudah diuji dan apa yang belum dapat diverifikasi.
- [ ] **10. Disiplin Git:** **DILARANG** menjalankan perintah `git commit` atau `git push` tanpa instruksi eksplisit pengguna.
