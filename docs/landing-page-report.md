# Laporan Desain dan Implementasi Landing Page BumiLoka (Tugas 2)

**Nama Proyek:** BumiLoka — Ekosistem Digital Petani Hidroponik  
**Kategori:** Platform AgriTech (Konsep Terpadu: Pasar Panen, Manajemen Tanaman, Asisten Budidaya AI)  
**Pendekatan Sistem Desain:** `CruiseSL/design-md` (*Modern Greenhouse Editorial*)

---

## 1. Tujuan Landing Page

Landing page BumiLoka dirancang dengan tiga tujuan strategis yang saling terhubung:

1. **Mengomunikasikan Nilai Produk Secara Instan:** Memastikan pengunjung memahami dalam waktu kurang dari lima detik bahwa BumiLoka adalah konsep platform digital untuk petani hidroponik yang menyatukan pemasaran hasil panen, pencatatan perawatan tanaman, dan pendampingan budidaya berbasis AI.
2. **Membangun Kredibilitas Melalui Kejelasan Agronomi dan Kejujuran Konsep:** Menghindari jargon kosong atau klaim bisnis fiktif. Sebaliknya, halaman ini menampilkan parameter nyata yang dihadapi petani sehari-hari—seperti nilai pH (5.5–6.5), kepekatan larutan nutrisi AB Mix (PPM/TDS), umur tanaman (HST), serta jendela panen sayuran daun—dan membedakan secara jujur antara pratinjau konsep antarmuka dan sistem produksi.
3. **Mengarahkan Pengunjung pada Eksplorasi Terstruktur (Konversi Pengetahuan):** Memandu pengunjung dari pengenalan masalah di kebun menuju eksplorasi tiga modul utama, simulasi alur kerja 35 hari, hingga penawaran paket berlangganan tunggal Rp45.000.

---

## 2. Buyer Persona (Sasaran Pengguna)

Halaman arahan ini dirancang secara spesifik untuk menjawab kebutuhan dua segmen utama pelaku hidroponik di Indonesia:

### A. Persona 1 — Petani Hidroponik Pemula & Pegiat *Urban Farming*
- **Profil:** Pemilik instalasi rumahan (20–200 lubang tanam sistem NFT, DFT, atau rakit apung) yang baru memulai 1–4 siklus tanam.
- **Kebutuhan & Titik Masalah (*Pain Points*):**
  - Sering lupa mencatat kapan terakhir kali menambahkan nutrisi AB Mix atau mengecek pH air tandon.
  - Mudah panik ketika mendapati gejala visual seperti ujung daun selada terbakar (*tip burn*) atau daun bawah menguning, namun bingung menyaring informasi yang saling bertentangan di media sosial.
  - Memiliki kelebihan panen sayuran bersih tetapi belum tahu cara menawarkannya ke lingkungan sekitar.
- **Bagaimana BumiLoka Membantu:** Menyediakan panduan rentang pH/PPM yang ramah pemula, pengingat jadwal pindah tanam, ruang tanya-jawab Asisten AI yang terstruktur, serta etalase Pasar Panen lokal.

### B. Persona 2 — Petani Hidroponik Berpengalaman & Pengelola *Greenhouse* Komersial
- **Profil:** Pengelola kebun skala menengah hingga komersial (500+ lubang tanam multi-meja) yang berfokus pada kontinuitas pasokan dan efisiensi operasional.
- **Kebutuhan & Titik Masalah (*Pain Points*):**
  - Kesulitan mengamankan pembeli tetap sebelum tanggal potong tiba, sehingga sayuran yang sudah memasuki umur panen optimal (HST) berisiko tertahan di talang atau dijual murah ke tengkulak.
  - Pencatatan harian parameter banyak tandon oleh operator kebun masih tercecer di buku tulis atau grup pesan singkat.
- **Bagaimana BumiLoka Membantu:** Menyediakan fitur publikasi jadwal panen lebih awal (*pra-pesan*) di Pasar Panen, standarisasi buku log multi-instalasi pada Manajemen Tanaman, serta rujukan diagnostik cepat bagi operator kebun.

---

## 3. Value Proposition (Proposisi Nilai)

> **"Kelola Kebun Hidroponik Lebih Terukur, Pasarkan Hasil Panen Lebih Pasti."**

Nilai utama BumiLoka terletak pada **integrasi hulu-ke-hilir dalam satu ruang kerja digital**. Selama ini, aplikasi pencatatan kebun, forum tanya-jawab budidaya, dan saluran penjualan sayuran berjalan sendiri-sendiri. BumiLoka menghubungkan ketiganya:
- Catatan pemeliharaan tanaman yang rapi pada modul **Manajemen Tanaman** menghasilkan estimasi tanggal dan volume panen yang akurat.
- Ketika muncul kendala di tengah siklus, **Asisten Budidaya AI** memberikan daftar periksa pemeriksaan awal agar kualitas tanaman tetap terjaga(dengan batasan tegas bahwa kasus kritis tetap memerlukan ahli agronomi).
- Saat tanaman mendekati usia panen, data ketersediaan batch tersebut dapat langsung dipromosikan melalui **Pasar Panen** agar serapan pembeli lebih terencana.

---

## 4. Alasan Pemilihan Call to Action (CTA)

Pemilihan teks dan tujuan tombol CTA pada halaman ini didasarkan pada prinsip **kejelasan tindakan dan integritas fungsional**:

1. **CTA Primer (`"Jelajahi Tiga Kapabilitas"` -> `#produk-layanan`):**
   Pengunjung yang baru mengenal konsep produk membutuhkan bukti visual tentang bagaimana produk bekerja sebelum mengambil keputusan. Mengarahkan CTA primer langsung ke bagian pratinjau tiga modul inti memberikan jawaban konkret tanpa memaksa pengguna mengisi formulir pendaftaran semu.
2. **CTA Sekunder (`"Lihat Paket Langganan"` -> `#langganan`):**
   Memberikan akses langsung ke penawaran paket berlangganan tunggal Rp45.000 bagi pengunjung yang ingin mengetahui rincian akses platform secara transparan.
3. **Tidak Menggunakan Tombol Palsu atau Kontak Tanpa Verifikasi:**
   Sesuai batasan arsitektur *frontend-only* dan ketiadaan nomor WhatsApp/email resmi terverifikasi dari pemilik proyek, seluruh CTA dirancang menavigasi ke bagian fungsional yang valid di dalam halaman. Hal ini mencegah pengalaman buruk berupa tautan rusak (`404`) atau klaim palsu.

---

## 5. Alasan Desain Responsif

Petani dan pegiat hidroponik mengakses informasi dalam dua konteks perangkat yang sangat berbeda:

1. **Penggunaan Seluler di Area Kebun / *Greenhouse* (`390 × 844`):**
   Saat berada di dekat instalasi pipa dan tandon nutrisi, petani menggunakan ponsel pintar dengan satu tangan di bawah pencahayaan matahari yang terang. Oleh karena itu, tata letak *mobile* dirancang menggunakan:
   - Kontras warna tinggi (`#161D19` di atas latar `#F7F6F2`) agar tetap terbaca di luar ruangan.
   - Ukuran tombol sentuh (*tap target*) minimal `44px–48px` dan menu navigasi seluler yang ringkas.
   - Penyusunan kartu vertikal tanpa *overflow* horizontal sehingga parameter pH, PPM, dan FAQ mudah dipindai.
2. **Penggunaan Desktop untuk Perencanaan & Evaluasi (`1440 × 900`):**
   Saat merencanakan rotasi tanam mingguan atau meninjau katalog pasar, pengguna di layar desktop mendapatkan keuntungan dari tata letak kisi 12 kolom (*split-screen hero*, perbandingan 3 kolom masalah-solusi, dan pratinjau antarmuka berdampingan).

---

## 6. Hubungan Landing Page dengan Konsep Bisnis BumiLoka

Landing page ini berfungsi sebagai **etalase validasi produk (*product concept showcase*)** sekaligus sarana edukasi pasar bagi BumiLoka. Dalam model bisnis platform dua sisi (*two-sided marketplace* yang didukung perangkat SaaS budidaya), keberhasilan bisnis bergantung pada kualitas dan konsistensi pasokan petani.

Melalui alur cerita di landing page ini, BumiLoka menunjukkan bahwa platform tidak hanya mengambil komisi dari penjualan panen, tetapi terlebih dahulu **memberdayakan petani melalui kerapian manajemen kebun dan pendampingan teknis AI** agar panen mereka layak jual dan tepat waktu.

---

## 7. Kesesuaian dengan Delapan Ketentuan Tugas 2

Implementasi halaman telah diverifikasi memenuhi kedelapan bagian wajib Tugas 2 secara berurutan:

| Urutan | Bagian Wajib Tugas 2 | ID Bagian (`#`) | Implementasi Nyata pada Halaman |
| :--- | :--- | :--- | :--- |
| **01** | **Hero** | `#hero` | Headline berorientasi manfaat, subheadline ringkas, CTA primer & sekunder aktif, foto asli *greenhouse* NFT, kartu pratinjau metrik tandon (`5.9 pH`, `850 PPM`), dan 3 pilar navigasi cepat. |
| **02** | **Customer Problems** | `#masalah-petani` | Tiga kartu diagnostik yang mengulas kesulitan promosi panen, kerumitan log pemeliharaan harian, dan sulitnya mencari panduan budidaya praktis beserta dampaknya di kebun. |
| **03** | **Solutions and Benefits** | `#solusi-manfaat` | Pemetaan langsung ketiga masalah petani ke manfaat operasional Pasar Panen, Manajemen Tanaman, dan Asisten Budidaya AI tanpa menduplikasi teks bagian lain. |
| **04** | **Products and Services** | `#produk-layanan` | Pratinjau konsep antarmuka terstruktur untuk Pasar Panen (katalog batch), Manajemen Tanaman (papan meja & tandon), dan Asisten AI (simulasi interaktif 3 kasus gejala tanaman) disertai label transparansi konsep. |
| **05** | **Social Proof** | `#bukti-konsep` | Menggantikan testimoni/angka fiktif dengan **Simulasi Interaktif 4 Tahap Perjalanan Petani** (Semai, Log Nutrisi, Konsultasi Gejala, Publikasi Panen) untuk perspektif petani pemula & berpengalaman. |
| **06** | **Offer or Promotion** | `#langganan` | Mengomunikasikan **Paket Berlangganan Tunggal Rp45.000** ("Paket berlangganan BumiLoka") secara transparan, lengkap dengan cakupan modul dan catatan konfirmasi periode penagihan. |
| **07** | **FAQ** | `#faq` | Akordeon interaktif aksesibel (*keyboard-compliant*) dengan filter kategori (termasuk Langganan), mencakup pertanyaan kunci termasuk biaya langganan Rp45.000 dan batasan AI dibanding ahli agronomi. |
| **08** | **Final CTA** | `#cta-akhir` | Ajakan bertindak penutup dengan kontras tinggi, tombol navigasi nyata menuju pratinjau modul & paket langganan, matriks akses cepat 3 modul, serta catatan transparansi operasional. |
