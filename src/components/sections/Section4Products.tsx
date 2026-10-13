"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  MARKETPLACE_PREVIEWS,
  PLANT_MANAGEMENT_PREVIEWS,
  AI_SCENARIO_PREVIEWS,
} from "@/data/landing-content";
import {
  ShoppingBag,
  Sprout,
  Bot,
  Info,
  CheckCircle2,
  ShieldAlert,
  Sparkles,
} from "lucide-react";

export function Section4Products() {
  const [activeAiTab, setActiveAiTab] = useState<string>("tip-burn");
  const selectedAiScenario =
    AI_SCENARIO_PREVIEWS.find((s) => s.id === activeAiTab) || AI_SCENARIO_PREVIEWS[0];

  return (
    <section
      id="produk-layanan"
      aria-labelledby="produk-layanan-heading"
      className="py-16 md:py-24 bg-[#F7F8F3] border-b border-[#E2E6DC]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <h2
            id="produk-layanan-heading"
            className="font-sans text-3xl sm:text-4xl lg:text-5xl font-bold text-[#121A15] tracking-tight leading-tight"
          >
            Tiga Layanan Utama BumiLoka
          </h2>
          <p className="text-base text-[#4A554E] leading-relaxed">
            Dirancang sederhana agar mudah digunakan oleh petani rumahan maupun pengelola kebun produktif untuk mendukung pemantauan tanaman, penanganan kendala, dan pemasaran panen.
          </p>
        </div>

        {/* Conceptual Transparency Notice */}
        <div className="p-4 sm:p-5 rounded-2xl bg-white border border-[#E2E6DC] flex items-start gap-3.5 shadow-2xs">
          <Info className="w-5 h-5 text-[#1F6E43] shrink-0 mt-0.5" aria-hidden="true" />
          <p className="text-xs sm:text-sm text-[#4A554E] leading-relaxed">
            <strong className="text-[#121A15] font-semibold">
              Pratinjau konsep antarmuka:
            </strong>{" "}
            Tampilan di bawah ini menyajikan rancangan visual dari alur kerja produk BumiLoka di sisi antarmuka depan.
          </p>
        </div>

        {/* ------------------------------------------------------------- */}
        {/* MODUL 01: MARKETPLACE HASIL PANEN                            */}
        {/* ------------------------------------------------------------- */}
        <div
          id="modul-pasar-panen"
          className="p-6 sm:p-10 lg:p-12 rounded-3xl bg-white border border-[#E2E6DC] shadow-sm scroll-mt-24 space-y-8"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left Explanation */}
            <div className="lg:col-span-5 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F7F8F3] border border-[#E2E6DC]">
                <ShoppingBag className="w-4 h-4 text-[#143323]" aria-hidden="true" />
                <span className="font-mono text-xs font-semibold text-[#143323]">
                  Marketplace Hasil Panen
                </span>
              </div>

              <h3 className="font-sans text-2xl sm:text-3xl font-bold text-[#121A15] leading-tight">
                Buka Pra-Pesan Sayuran Sebelum Hari Potong
              </h3>

              <p className="text-sm sm:text-base text-[#4A554E] leading-relaxed">
                Bantu pembeli memesan sayuran segar sebelum waktu panen tiba. Anda dapat membagikan profil komoditas, perkiraan tanggal petik, dan metode tanam secara transparan kepada calon pembeli.
              </p>

              {/* Photo preview of authentic harvest */}
              <div className="relative w-full h-44 sm:h-52 rounded-2xl overflow-hidden border border-[#E2E6DC] shadow-2xs">
                <Image
                  src="/images/hydroponic-harvest.jpg"
                  alt="Hasil panen sayuran hidroponik segar dan bersih siap dikemas"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
                <span className="absolute bottom-3 left-3 text-white text-xs font-medium">
                  Sayuran segar berkualitas prima siap distribusi
                </span>
              </div>

              <ul className="pt-2 space-y-2.5 text-xs sm:text-sm text-[#4A554E]">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1F6E43] shrink-0" aria-hidden="true" />
                  <span>Katalog komoditas sayuran (Selada, Pakcoy, Kale)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1F6E43] shrink-0" aria-hidden="true" />
                  <span>Jadwal tanggal panen untuk pemesanan lebih awal (pre-order)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1F6E43] shrink-0" aria-hidden="true" />
                  <span>Informasi metode tanam (NFT, DFT, Rakit Apung)</span>
                </li>
              </ul>
            </div>

            {/* Right Structured Table Preview */}
            <div className="lg:col-span-7 bg-[#F7F8F3] rounded-2xl border border-[#E2E6DC] p-5 sm:p-6 space-y-3">
              <div className="flex items-center justify-between pb-3 border-b border-[#E2E6DC]">
                <span className="font-sans text-sm font-bold text-[#121A15]">
                  Daftar Batch Panen Terjadwal
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-[#143323] text-[#B6F084] text-[11px] font-mono font-semibold">
                  Pratinjau UI
                </span>
              </div>

              <div className="space-y-3">
                {MARKETPLACE_PREVIEWS.map((item) => (
                  <div
                    key={item.batchCode}
                    className="p-4 rounded-xl bg-white border border-[#E2E6DC] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs"
                  >
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="font-mono font-bold text-[#143323] px-2 py-0.5 rounded bg-[#B6F084]/25">
                          {item.batchCode}
                        </span>
                        <span className="font-bold text-[#121A15]">{item.commodity}</span>
                      </div>
                      <p className="text-[#68736C] text-[11px]">
                        {item.cultivationMethod} • {item.locationNote}
                      </p>
                    </div>

                    <div className="flex sm:flex-col items-end justify-between sm:justify-center gap-1 border-t sm:border-t-0 pt-2 sm:pt-0 border-[#E2E6DC]">
                      <span className="font-semibold text-[#1F6E43] bg-[#EFECE4] px-2.5 py-0.5 rounded-full border border-[#E2E6DC]">
                        {item.statusLabel}
                      </span>
                      <span className="font-mono text-[11px] text-[#4A554E]">
                        {item.harvestEstimate}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ------------------------------------------------------------- */}
        {/* MODUL 02: PENGELOLAAN BUDIDAYA                               */}
        {/* ------------------------------------------------------------- */}
        <div
          id="modul-manajemen-tanaman"
          className="p-6 sm:p-10 lg:p-12 rounded-3xl bg-white border border-[#E2E6DC] shadow-sm scroll-mt-24 space-y-8"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left Parameter Preview */}
            <div className="lg:col-span-7 order-2 lg:order-1 bg-[#F7F8F3] rounded-2xl border border-[#E2E6DC] p-5 sm:p-6 space-y-3">
              <div className="flex items-center justify-between pb-3 border-b border-[#E2E6DC]">
                <span className="font-sans text-sm font-bold text-[#121A15]">
                  Pemantauan Meja Tanam &amp; Tandon
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-[#143323] text-[#B6F084] text-[11px] font-mono font-semibold">
                  Pratinjau UI
                </span>
              </div>

              <div className="space-y-3">
                {PLANT_MANAGEMENT_PREVIEWS.map((inst, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-white border border-[#E2E6DC] space-y-2.5"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="font-bold text-xs sm:text-sm text-[#121A15] block">
                          {inst.installationName}
                        </span>
                        <span className="text-xs text-[#1E4A32] font-semibold">
                          {inst.cropName} • {inst.daysAfterPlanting}
                        </span>
                      </div>
                      <span
                        className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full border ${
                          inst.status.includes("Normal")
                            ? "bg-[#EFECE4] text-[#1F6E43] border-[#E2E6DC]"
                            : "bg-[#FAF9F5] text-[#B85D2B] border-[#E2E6DC]"
                        }`}
                      >
                        {inst.status}
                      </span>
                    </div>

                    {/* Parameters Grid */}
                    <div className="grid grid-cols-3 gap-2 pt-2 border-t border-[#E2E6DC] text-xs">
                      <div>
                        <span className="text-[10px] text-[#68736C] uppercase font-mono block">
                          pH Air
                        </span>
                        <span className="font-mono font-bold text-[#143323]">
                          {inst.phLevel}
                        </span>
                      </div>
                      <div>
                        <span className="text-[10px] text-[#68736C] uppercase font-mono block">
                          PPM Nutrisi
                        </span>
                        <span className="font-mono font-bold text-[#143323]">
                          {inst.ppmLevel}
                        </span>
                      </div>
                      <div>
                        <span className="text-[10px] text-[#68736C] uppercase font-mono block">
                          Suhu Air
                        </span>
                        <span className="font-mono font-bold text-[#143323]">
                          {inst.waterTemp}
                        </span>
                      </div>
                    </div>

                    <div className="pt-2 border-t border-[#E2E6DC] text-[11px] text-[#4A554E] flex items-start gap-1">
                      <span className="font-medium text-[#121A15] shrink-0">Tindakan:</span>
                      <span>{inst.nextAction}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Explanation */}
            <div className="lg:col-span-5 order-1 lg:order-2 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F7F8F3] border border-[#E2E6DC]">
                <Sprout className="w-4 h-4 text-[#143323]" aria-hidden="true" />
                <span className="font-mono text-xs font-semibold text-[#143323]">
                  Pengelolaan Budidaya
                </span>
              </div>

              <h3 className="font-sans text-2xl sm:text-3xl font-bold text-[#121A15] leading-tight">
                Pantau Kondisi Tandon dan Umur Tanaman Harian
              </h3>

              <p className="text-sm sm:text-base text-[#4A554E] leading-relaxed">
                Ketahui umur tanaman (HST), nilai pH, kepekatan nutrisi PPM, dan jadwal pemeliharaan tandon dalam satu tempat kerja. Anda tidak perlu lagi mengandalkan ingatan atau catatan kertas yang mudah hilang.
              </p>

              {/* Photo preview of commercial greenhouse troughs */}
              <div className="relative w-full h-44 sm:h-52 rounded-2xl overflow-hidden border border-[#E2E6DC] shadow-2xs">
                <Image
                  src="/images/hydroponic-greenhouse.jpg"
                  alt="Instalasi talang pipa hidroponik komersial di dalam greenhouse modern"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
                <span className="absolute bottom-3 left-3 text-white text-xs font-medium">
                  Pemantauan sirkulasi nutrisi di instalasi NFT
                </span>
              </div>

              <ul className="pt-2 space-y-2.5 text-xs sm:text-sm text-[#4A554E]">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1F6E43] shrink-0" aria-hidden="true" />
                  <span>Log pH, PPM, dan suhu air tandon harian per meja pipa</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1F6E43] shrink-0" aria-hidden="true" />
                  <span>Perhitungan otomatis umur tanam dari semai hingga siap panen</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1F6E43] shrink-0" aria-hidden="true" />
                  <span>Pengingat jadwal kuras tandon dan kalibrasi alat ukur</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* ------------------------------------------------------------- */}
        {/* MODUL 03: ASISTEN AI BUDIDAYA                                */}
        {/* ------------------------------------------------------------- */}
        <div
          id="modul-asisten-ai"
          className="p-6 sm:p-10 lg:p-12 rounded-3xl bg-white border border-[#E2E6DC] shadow-xs scroll-mt-24 space-y-8"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left Explanation */}
            <div className="lg:col-span-5 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F7F8F3] border border-[#E2E6DC]">
                <Bot className="w-4 h-4 text-[#143323]" aria-hidden="true" />
                <span className="font-mono text-xs font-semibold text-[#143323]">
                  Asisten AI Budidaya
                </span>
              </div>

              <h3 className="font-sans text-2xl sm:text-3xl font-bold text-[#121A15] leading-tight">
                Pahami Gejala Tanaman dengan Panduan Praktis
              </h3>

              <p className="text-sm sm:text-base text-[#4A554E] leading-relaxed">
                Asisten tanya-jawab terarah yang membantu petani mengurai penyebab daun menguning, pucuk mengering, atau pertumbuhan lambat melalui langkah pemeriksaan bertahap.
              </p>

              {/* Agronomic Disclaimer */}
              <div className="p-4 rounded-2xl bg-[#F7F8F3] border border-[#E2E6DC] space-y-1.5">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#B85D2B]">
                  <ShieldAlert className="w-4 h-4 shrink-0" aria-hidden="true" />
                  <span>Batasan penting agronomi</span>
                </div>
                <p className="text-xs text-[#4A554E] leading-relaxed">
                  Asisten AI memberikan panduan pemeriksaan awal. Jika terjadi serangan penyakit akar atau bakteri yang menyebar cepat, petani tetap perlu berkonsultasi langsung dengan ahli agronomi.
                </p>
              </div>
            </div>

            {/* Right Interactive Q&A Tabs Preview */}
            <div className="lg:col-span-7 bg-[#F7F8F3] rounded-2xl border border-[#E2E6DC] p-5 sm:p-6 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-[#E2E6DC]">
                <span className="font-sans text-sm font-bold text-[#121A15]">
                  Contoh Konsultasi Gejala Kebun
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-[#143323] text-[#B6F084] text-[11px] font-mono font-semibold">
                  Pratinjau UI
                </span>
              </div>

              {/* Case Selectors */}
              <div className="flex flex-wrap gap-2">
                {AI_SCENARIO_PREVIEWS.map((scenario) => (
                  <button
                    key={scenario.id}
                    type="button"
                    onClick={() => setActiveAiTab(scenario.id)}
                    className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                      activeAiTab === scenario.id
                        ? "bg-[#143323] text-[#B6F084] font-semibold"
                        : "bg-white border border-[#E2E6DC] text-[#4A554E] hover:bg-[#EFECE4]"
                    }`}
                  >
                    {scenario.topicLabel}
                  </button>
                ))}
              </div>

              {/* Dialogue Box */}
              <div className="bg-white rounded-2xl border border-[#E2E6DC] p-4 sm:p-5 space-y-3.5">
                {/* Farmer Question */}
                <div className="bg-[#F7F8F3] p-3.5 rounded-xl border border-[#E2E6DC] text-xs text-[#121A15] space-y-1">
                  <span className="font-mono text-[10px] text-[#68736C] block">
                    {selectedAiScenario.cropContext}
                  </span>
                  <p className="font-medium leading-relaxed">
                    &quot;{selectedAiScenario.farmerQuestion}&quot;
                  </p>
                </div>

                {/* AI Guidance */}
                <div className="space-y-2.5 pt-1">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-[#143323]">
                    <Sparkles className="w-3.5 h-3.5 text-[#1F6E43]" aria-hidden="true" />
                    <span>Langkah Pemeriksaan Awal:</span>
                  </div>

                  <ol className="space-y-2 list-decimal list-inside text-xs text-[#4A554E] leading-relaxed">
                    {selectedAiScenario.diagnosticSteps.map((step, sIdx) => (
                      <li key={sIdx}>{step}</li>
                    ))}
                  </ol>

                  <div className="pt-2 border-t border-[#E2E6DC] text-[11px] text-[#B85D2B] bg-[#FAF9F5] p-2.5 rounded-lg">
                    {selectedAiScenario.agronomicCaution}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
