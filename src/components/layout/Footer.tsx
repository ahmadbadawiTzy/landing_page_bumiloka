import React from "react";
import { NAV_ITEMS, SUBSCRIPTION_CONTACT } from "@/data/landing-content";
import { BumiLokaLogo } from "@/components/brand/BumiLokaLogo";
import { MessageCircle, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#F7F8F3] border-t border-[#E2E6DC] text-[#121A15]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-14">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-10 pb-8 sm:pb-10 border-b border-[#E2E6DC]">
          {/* Brand & Mission Column */}
          <div className="md:col-span-5 space-y-3.5">
            <BumiLokaLogo variant="footer" />
            <p className="text-sm text-[#4A554E] leading-relaxed max-w-sm">
              BumiLoka adalah platform pendukung budidaya hidroponik yang menggabungkan pemantauan nutrisi air tandon harian, marketplace pra-pesan panen, dan asisten AI penanganan gejala tanaman.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#EFECE4] border border-[#E2E6DC] text-xs text-[#143323] font-medium">
              <span>Paket Langganan: <strong>Rp45.000/bulan</strong> (akses seluruh modul)</span>
            </div>
          </div>

          {/* Official Contact Column */}
          <div className="md:col-span-4 space-y-3">
            <h2 className="font-mono text-xs uppercase tracking-wider text-[#143323] font-semibold">
              Kontak Langganan
            </h2>
            <div className="space-y-3 text-sm">
              <div>
                <a
                  href={SUBSCRIPTION_CONTACT.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#121A15] hover:text-[#1F6E43] font-semibold transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#143323] rounded-xs"
                >
                  <MessageCircle className="w-4 h-4 text-[#1F6E43] shrink-0" aria-hidden="true" />
                  <span>{SUBSCRIPTION_CONTACT.phoneDisplay}</span>
                </a>
                <p className="text-xs text-[#68736C] pl-6 mt-0.5">
                  WhatsApp: {SUBSCRIPTION_CONTACT.whatsappContactName}
                </p>
              </div>

              <div>
                <a
                  href={SUBSCRIPTION_CONTACT.emailHref}
                  className="inline-flex items-center gap-2 text-[#121A15] hover:text-[#1F6E43] font-semibold transition-colors break-all focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#143323] rounded-xs"
                >
                  <Mail className="w-4 h-4 text-[#1F6E43] shrink-0" aria-hidden="true" />
                  <span>{SUBSCRIPTION_CONTACT.email}</span>
                </a>
                <p className="text-xs text-[#68736C] pl-6 mt-0.5">
                  Email resmi pertanyaan &amp; pendaftaran
                </p>
              </div>
            </div>
          </div>

          {/* Navigation Links Column */}
          <div className="md:col-span-3 space-y-3">
            <h2 className="font-mono text-xs uppercase tracking-wider text-[#143323] font-semibold">
              Navigasi Halaman
            </h2>
            <ul className="grid grid-cols-2 gap-1.5 text-sm">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-[#4A554E] hover:text-[#143323] transition-colors py-1 inline-block focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#143323] rounded-xs"
                  >
                    <span>{item.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Editorial Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-[#68736C]">
          <p>
            © {new Date().getFullYear()} BumiLoka. Tampilan website adalah pratinjau konsep antarmuka.
          </p>
          <p className="font-mono text-[11px] text-[#4A554E]">
            Membangun Negeri dari Bumi dan Tani • Langganan Rp45.000/bulan
          </p>
        </div>
      </div>
    </footer>
  );
}
