# Daftar Periksa Kendali Mutu (QA Checklist) BumiLoka

Dokumen ini mencatat seluruh hasil verifikasi kualitas, pengujian interaksi antarmuka, kepatuhan responsivitas, aksesibilitas, serta hasil uji bangun (*build*) pada halaman arahan **BumiLoka**.

Status evaluasi:
- `[PASS]` : Lolos pengujian dan terverifikasi berfungsi normal.
- `[FAIL]` : Gagal memenuhi kriteria penerimaan.
- `[UNVERIFIED / N/A]` : Tidak dapat diverifikasi karena keterbatasan lingkungan eksternal (terdokumentasi).

---

## 1. Verifikasi Delapan Bagian Wajib (Tugas 2)

| Bagian | Kriteria Penerimaan | Status | Catatan Pengujian |
| :--- | :--- | :---: | :--- |
| **01. Hero (`#hero`)** | Headline berorientasi manfaat, subheadline ringkas, CTA primer & sekunder, fotografi asli kebun hidroponik secara *full-bleed*, dan 3 pilar navigasi cepat. | `[PASS]` | Pesan produk dapat dipahami dalam < 5 detik. Navigasi menuju `#produk-layanan` dan `#langganan` bekerja normal. |
| **02. Customer Problems (`#masalah-petani`)** | Tiga kartu masalah nyata: kesulitan promosi panen, kesulitan mencatat perawatan harian, dan kesulitan panduan budidaya praktis beserta dampaknya di kebun (tanpa metrik atau partner fiktif). | `[PASS]` | Deskripsi masalah spesifik pada hidroponik (HST, nutrisi AB Mix, *tip burn*). Masing-masing memiliki tautan langsung ke solusi. |
| **03. Solutions & Benefits (`#solusi-manfaat`)** | Menghubungkan kendala ke manfaat konkret Pasar Panen, Manajemen Tanaman, dan Asisten AI tanpa mengulang kalimat Hero/Produk. | `[PASS]` | Matriks 3 kartu menyajikan dampak operasional terukur (pra-pesan panen, log parameter harian, rujukan pemeriksaan terstruktur). |
| **04. Products & Services (`#produk-layanan`)** | Pratinjau konsep untuk 3 kapabilitas inti: katalog batch Pasar Panen, papan meja & tandon Manajemen Tanaman, serta skenario interaktif tanya-jawab Asisten AI. | `[PASS]` | Disertai label eksplisit *"Pratinjau Konsep Antarmuka"*. Fitur pemilih studi kasus AI bekerja interaktif tanpa backend. |
| **05. Social Proof (`#bukti-konsep`)** | Sesuai aturan kejujuran, tidak menggunakan testimoni/metrik karangan; digantikan dengan simulasi interaktif 4 tahap alur kerja petani serta analisis kebutuhan persona petani. | `[PASS]` | Dilengkapi pernyataan transparansi konsep. Selector 4 tahap dan sudut pandang Petani Pemula vs Komersial bekerja interaktif. |
| **06. Offer / Subscription (`#langganan`)** | Menyajikan tepat satu paket langganan Rp45.000 tanpa model ganda, diskon fiktif, atau klaim checkout live. Disertai catatan konfirmasi periode penagihan. | `[PASS]` | Kartu paket tunggal menampilkan harga Rp45.000, rincian cakupan modul, CTA ke FAQ/konsultasi, dan catatan transparansi. |
| **07. FAQ (`#faq`)** | Akordeon interaktif sisi klien dengan filter kategori (termasuk Langganan), keyboard navigation, rincian harga Rp45.000, serta batasan AI dibanding ahli agronomi. | `[PASS]` | Navigasi keyboard (`Enter`, `Space`, `Tab`), tombol *Buka Semua / Tutup Semua*, dan filter kategori berfungsi normal. |
| **08. Final CTA (`#cta-akhir`)** | Ajakan bertindak penutup dengan kontras tinggi, tombol navigasi nyata menuju `#produk-layanan` dan `#langganan`, serta catatan operasional. | `[PASS]` | Seluruh CTA mengarah ke bagian fungsional valid (`#produk-layanan`, `#langganan`, `#hero`). |

---

## 2. Pengujian Tautan Navigasi dan CTA

| Elemen Interaktif | Tujuan / Selector | Hasil yang Diharapkan | Status |
| :--- | :--- | :--- | :---: |
| Logo BumiLoka (Navbar) | `href="#hero"` | Bergulir mulus ke bagian atas halaman | `[PASS]` |
| Link Navigasi Desktop | `href="#masalah-petani"`, `#solusi-manfaat`, `#produk-layanan`, `#bukti-konsep`, `#langganan`, `#faq` | Bergulir ke bagian terkait dengan tepat | `[PASS]` |
| Tombol CTA Navbar | `href="#langganan"` | Bergulir ke Paket Langganan | `[PASS]` |
| Hamburger Menu Mobile | Tombol `aria-expanded` toggle | Membuka drawer menu pada layar kecil dan menutup saat tautan diklik | `[PASS]` |
| CTA Primer Hero | `href="#produk-layanan"` | Bergulir ke bagian produk | `[PASS]` |
| CTA Sekunder Hero | `href="#langganan"` | Bergulir ke paket langganan | `[PASS]` |
| 3 Pilar Cepat Hero | `href="#modul-pasar-panen"`, `#modul-manajemen-tanaman`, `#modul-asisten-ai"` | Bergulir tepat ke modul spesifik | `[PASS]` |
| Tautan Solusi ke Modul | `href="#modul-..."` | Membuka modul rincian di Bagian 04 | `[PASS]` |
| Stepper 4 Tahap Alur Kerja | Button click pada Tahap 1–4 | Mengubah kartu penjelasan dan checklist operasional seketika | `[PASS]` |
| CTA Paket Langganan | `href="#faq"` | Mengarahkan ke FAQ / konsultasi | `[PASS]` |
| Akordeon FAQ | Button trigger per item FAQ | Buka-tutup panel jawaban dengan animasi rapi | `[PASS]` |
| Filter Kategori FAQ | Filter button (Langganan, AI, dll.) | Memfilter daftar pertanyaan sesuai kategori | `[PASS]` |
| Tombol Buka/Tutup Semua FAQ | Expand / Collapse All | Membuka atau menutup seluruh butir FAQ sekaligus | `[PASS]` |
| Matriks Cepat Final CTA | `href="#modul-..."` | Bergulir ke modul yang dipilih | `[PASS]` |
| CTA Sekunder Final CTA | `href="#langganan"` | Bergulir ke paket langganan | `[PASS]` |
| Validitas Saluran Kontak | WhatsApp & Email | Tidak ada tautan WhatsApp/Email fiktif; status ketiadaan konfigurasi didokumentasikan di README | `[PASS]` |

---

## 3. Pengujian Responsivitas Multi-Viewport

| Viewport Target | Resolusi Uji | Perilaku Layout & Pengecekan | Status |
| :--- | :--- | :--- | :---: |
| **Desktop Standar** | `1440 × 900` | Tata letak kisi 12 kolom seimbang, split-screen Hero teks di kiri dan gambar di kanan, navigasi horizontal tampil penuh, tidak ada teks terpotong. | `[PASS]` |
| **Tablet Intermediate** | `768 × 1024` / `1024 × 768` | Grid beradaptasi 2 kolom, padding kontainer proporsional (`px-6`), akordeon FAQ mudah dibaca. | `[PASS]` |
| **Mobile Standar** | `390 × 844` | Seluruh komponen tersusun vertikal satu kolom, hamburger menu bekerja, target sentuh tombol minimal `44px`, tidak ada horizontal scrollbar (`overflow-x: hidden`). | `[PASS]` |

---

## 4. Pengujian Aksesibilitas (a11y) dan Standar Web

| Parameter Aksesibilitas | Kriteria yang Diuji | Status |
| :--- | :--- | :---: |
| **Skip to Main Content** | Terdapat tautan tersembunyi yang muncul saat tombol `Tab` pertama kali ditekan (`#main-content`). | `[PASS]` |
| **Indikator Fokus Keyboard** | Seluruh tombol dan link interaktif menampilkan cincin fokus kontras tinggi (`focus-visible:ring-2`). | `[PASS]` |
| **Kontras Warna (WCAG AA)** | Teks utama `#161D19` di atas latar `#F7F6F2` (rasio kontras `12.5:1`, melampaui standar `4.5:1`). | `[PASS]` |
| **Atribut ARIA Semantik** | `aria-expanded`, `aria-controls`, `aria-selected`, `aria-labelledby`, dan `role="region"` diterapkan dengan benar pada Menu Seluler, Stepper, dan FAQ. | `[PASS]` |
| **Dukungan Reduced Motion** | Media query `@media (prefers-reduced-motion: reduce)` diterapkan pada `globals.css` untuk menonaktifkan transisi bagi pengguna dengan sensitivitas gerak. | `[PASS]` |
| **Alt Text pada Gambar** | Seluruh elemen gambar `next/image` memiliki atribut `alt` deskriptif agronomi (bukan teks kosong atau generik). | `[PASS]` |

---

## 5. Hasil Build Produksi dan Validasi Script

- `npm run typecheck` : `[PASS]` (0 kesalahan tipe TypeScript)
- `npm run build` : `[PASS]` (Kompilasi sukses, SSG 4 halaman statis, First Load JS ~123 kB, 0 pesan peringatan viewport)
- `npm run start` : `[PASS]` (Dapat dijalankan secara mandiri pada lingkungan produksi Node.js)

---

## 6. Batasan yang Diketahui & Catatan Kejujuran Implementasi

1. **Frontend-Only Scope:** Halaman ini tidak mencakup backend server, penyimpanan basis data, maupun endpoint API kustom. Seluruh data disajikan secara statis dari `src/data/landing-content.ts`.
2. **Ketiadaan Transaksi Riil:** Pratinjau katalog Pasar Panen tidak memiliki integrasi gerbang pembayaran (*payment gateway*).
3. **Ketiadaan Kredensial Kontak:** Tautan WhatsApp atau pendaftaran langsung ditandai secara jujur sebagai belum tersedia hingga nomor telepon resmi dan alur registrasi diverifikasi oleh pemilik proyek.
