import React from "react";
import Image from "next/image";
import { SOLUTIONS_BENEFITS } from "@/data/landing-content";
import { ShoppingBag, Sprout, Bot, Check, ArrowRight } from "lucide-react";

export function Section3Solutions() {
  const capabilityIcons = [
    <ShoppingBag key="s1" className="w-5 h-5 text-[#092215]" aria-hidden="true" />,
    <Sprout key="s2" className="w-5 h-5 text-[#092215]" aria-hidden="true" />,
    <Bot key="s3" className="w-5 h-5 text-[#092215]" aria-hidden="true" />,
  ];

  return (
    <section
      id="solusi-manfaat"
      aria-labelledby="solusi-manfaat-heading"
      className="w-full relative py-20 sm:py-28 lg:py-32 bg-[#092215] text-white border-b border-white/10 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
        {/* Split Feature Introduction */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Left Narrative */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 backdrop-blur-xs">
                <span className="font-mono text-xs font-semibold text-[#B6F084] tracking-wide uppercase">
                  Solusi &amp; Manfaat
                </span>
              </div>

              <h2
                id="solusi-manfaat-heading"
                className="font-sans text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-[1.15]"
              >
                Tiga Solusi Terpadu untuk Menjawab Kendala Kebun
              </h2>

              <p className="text-base sm:text-lg text-white/80 leading-relaxed font-normal">
                BumiLoka menghubungkan pemantauan nutrisi harian di instalasi kebun dengan jalur penjualan langsung ke pembeli. Setiap modul dirancang untuk mengatasi satu titik kritis dalam siklus budidaya hidroponik.
              </p>
            </div>

            {/* Core Value Summary */}
            <div className="space-y-3.5 pt-4 border-t border-white/15 text-sm sm:text-base">
              <div className="flex items-start gap-3 text-white/90">
                <span className="font-mono text-xs text-[#B6F084] font-bold mt-1 px-1.5 py-0.5 rounded-sm bg-white/10">01</span>
                <span>Kepastian Pasar: Promosi jadwal panen sebelum hari potong tiba.</span>
              </div>
              <div className="flex items-start gap-3 text-white/90">
                <span className="font-mono text-xs text-[#B6F084] font-bold mt-1 px-1.5 py-0.5 rounded-sm bg-white/10">02</span>
                <span>Keteraturan Tandon: Pencatatan pH dan PPM mencegah tanaman kekurangan nutrisi.</span>
              </div>
              <div className="flex items-start gap-3 text-white/90">
                <span className="font-mono text-xs text-[#B6F084] font-bold mt-1 px-1.5 py-0.5 rounded-sm bg-white/10">03</span>
                <span>Asisten AI: Panduan langkah pemeriksaan awal saat daun menunjukkan gejala kendala.</span>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="#produk-layanan"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#B6F084] text-[#092215] font-bold text-sm hover:bg-[#C7F69B] transition-all shadow-md hover:scale-[1.01] group"
              >
                <span>Lihat Pratinjau Tiga Modul</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Right Visual Photo Card */}
          <div className="lg:col-span-5 rounded-3xl overflow-hidden relative min-h-[340px] lg:min-h-[420px] border border-white/15 shadow-xl bg-[#06180E]">
            <Image
              src="/images/hydroponic-netpot.jpg"
              alt="Akar tanaman selada hidroponik yang sehat dan bersih di dalam netpot instalasi NFT"
              fill
              sizes="(max-width: 1024px) 100vw, 42vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent pointer-events-none" />
            <div className="absolute bottom-6 left-6 right-6 text-white text-xs sm:text-sm">
              <span className="font-semibold block text-base sm:text-lg text-white">Dari Semai hingga Panen Terjual</span>
              <span className="text-white/80 text-xs sm:text-sm block mt-1">
                Menghubungkan ketertiban teknis budidaya dengan kepastian pembeli
              </span>
            </div>
          </div>
        </div>

        {/* 3 Detailed Benefit Mapping Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {SOLUTIONS_BENEFITS.map((solution, idx) => (
            <div
              key={solution.id}
              className="bg-white/5 backdrop-blur-xs rounded-3xl border border-white/15 p-6 sm:p-8 flex flex-col justify-between hover:bg-white/10 hover:border-white/30 shadow-md transition-all group"
            >
              <div>
                {/* Header with Icon and Focus */}
                <div className="flex items-center justify-between pb-4 border-b border-white/15">
                  <div className="w-11 h-11 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center text-[#B6F084] group-hover:bg-[#B6F084] group-hover:text-[#092215] transition-colors">
                    {capabilityIcons[idx]}
                  </div>
                  <span className="text-xs font-mono text-[#B6F084] font-semibold">
                    {solution.solvesProblem}
                  </span>
                </div>

                <div className="mt-5 space-y-1.5">
                  <span className="text-xs text-[#B6F084] font-semibold block">
                    {solution.capabilityName}
                  </span>
                  <h3 className="font-sans text-xl font-bold text-white leading-snug">
                    {solution.headline}
                  </h3>
                </div>

                <p className="mt-3 text-sm text-white/80 leading-relaxed">
                  {solution.benefitSummary}
                </p>

                {/* Outcomes Checklist */}
                <div className="mt-6 pt-4 border-t border-white/15">
                  <span className="font-mono text-[11px] font-semibold text-white/90 block mb-3 uppercase tracking-wide">
                    Manfaat bagi petani:
                  </span>
                  <ul className="space-y-2.5">
                    {solution.concreteOutcomes.map((outcome, oIdx) => (
                      <li key={oIdx} className="flex items-start gap-2.5 text-xs text-white/85">
                        <span className="w-4 h-4 rounded-full bg-[#B6F084]/20 text-[#B6F084] flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-2.5 h-2.5 stroke-[3]" aria-hidden="true" />
                        </span>
                        <span className="leading-relaxed">{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Navigation to Product Module */}
              <div className="mt-8 pt-4 border-t border-white/15">
                <a
                  href={solution.targetAnchor}
                  className="inline-flex items-center gap-2 text-xs font-semibold text-[#B6F084] hover:text-[#C7F69B] transition-colors group/link"
                >
                  <span>Lihat Pratinjau Modul</span>
                  <ArrowRight
                    className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-1"
                    aria-hidden="true"
                  />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
