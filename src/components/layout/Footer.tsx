import React from "react";
import { NAV_ITEMS } from "@/data/landing-content";
import { BumiLokaLogo } from "@/components/brand/BumiLokaLogo";
import { ShieldCheck } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#F7F8F3] border-t border-[#E2E6DC] text-[#121A15]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#E2E6DC]">
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-4">
            <BumiLokaLogo variant="footer" />
            <p className="text-sm text-[#4A554E] leading-relaxed max-w-md">
              BumiLoka adalah platform pendukung budidaya hidroponik yang menggabungkan pengelolaan kondisi kebun, marketplace hasil panen, dan asisten AI untuk penanganan gejala tanaman.
            </p>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E2E6DC] text-xs text-[#092215] font-semibold">
              <ShieldCheck className="w-4 h-4 shrink-0 text-[#1F6E43]" aria-hidden="true" />
              <span>Pratinjau Konsep Antarmuka • Paket Langganan Rp45.000</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-4 space-y-3">
            <h2 className="font-mono text-xs uppercase tracking-wider text-[#143323] font-semibold">
              Navigasi Halaman
            </h2>
            <ul className="grid grid-cols-2 gap-2 text-sm">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-[#4A554E] hover:text-[#143323] transition-colors inline-flex items-center gap-1.5 py-0.5"
                  >
                    <span>{item.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Three Core Focuses */}
          <div className="md:col-span-3 space-y-3">
            <h2 className="font-mono text-xs uppercase tracking-wider text-[#143323] font-semibold">
              Tiga Fokus Layanan
            </h2>
            <ul className="space-y-3 text-sm text-[#4A554E]">
              <li>
                <a
                  href="#modul-manajemen-tanaman"
                  className="font-medium text-[#161D19] hover:text-[#143323] block"
                >
                  Pengelolaan Budidaya
                </a>
                <span className="text-xs text-[#68736C]">
                  Log nutrisi (pH/PPM) dan umur tanaman harian
                </span>
              </li>
              <li>
                <a
                  href="#modul-pasar-panen"
                  className="font-medium text-[#161D19] hover:text-[#143323] block"
                >
                  Marketplace Hasil Panen
                </a>
                <span className="text-xs text-[#68736C]">
                  Pra-pesan sayuran sebelum hari potong tiba
                </span>
              </li>
              <li>
                <a
                  href="#modul-asisten-ai"
                  className="font-medium text-[#161D19] hover:text-[#143323] block"
                >
                  Asisten AI Budidaya
                </a>
                <span className="text-xs text-[#68736C]">
                  Panduan langkah pemeriksaan gejala daun
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Honesty & Copyright Notice */}
        <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-[#4A554E]">
          <p>
            © {new Date().getFullYear()} BumiLoka. Seluruh tampilan aplikasi pada halaman ini adalah pratinjau konsep antarmuka.
          </p>
          <p className="font-mono text-[11px] text-[#68736C]">
            Membangun Negeri dari Bumi dan Tani • Paket Tunggal Rp45.000
          </p>
        </div>
      </div>
    </footer>
  );
}
