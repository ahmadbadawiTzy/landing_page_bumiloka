import React from "react";
import { CUSTOMER_PROBLEMS } from "@/data/landing-content";
import { TrendingDown, ClipboardX, HelpCircle, ArrowRight } from "lucide-react";

export function Section2Problems() {
  const problemIcons = [
    <TrendingDown key="p1" className="w-5 h-5 text-[#B85D2B]" aria-hidden="true" />,
    <ClipboardX key="p2" className="w-5 h-5 text-[#B85D2B]" aria-hidden="true" />,
    <HelpCircle key="p3" className="w-5 h-5 text-[#B85D2B]" aria-hidden="true" />,
  ];

  return (
    <section
      id="masalah-petani"
      aria-labelledby="masalah-petani-heading"
      className="w-full relative py-20 sm:py-28 bg-[#F7F8F3] border-b border-[#E2E6DC] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EFECE4] border border-[#E2E6DC]">
            <span className="font-mono text-xs font-semibold text-[#B85D2B] tracking-wide uppercase">
              Kendala Operasional
            </span>
          </div>
          <h2
            id="masalah-petani-heading"
            className="font-sans text-3xl sm:text-4xl lg:text-5xl font-bold text-[#121A15] tracking-tight leading-[1.15]"
          >
            Kendala Nyata yang Dihadapi Petani Hidroponik
          </h2>
          <p className="text-base sm:text-lg text-[#4A554E] leading-relaxed max-w-2xl">
            Menjalankan kebun hidroponik menuntut kedisiplinan pemantauan air tandon dan kepastian penyaluran hasil panen. Tiga kendala operasional ini kerap menghambat produktivitas kebun sehari-hari.
          </p>
        </div>

        {/* 3 Focused Problem Cards in deliberate full-width grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {CUSTOMER_PROBLEMS.map((problem, idx) => (
            <article
              key={problem.id}
              className="bg-white rounded-3xl border border-[#E2E6DC] p-6 sm:p-8 flex flex-col justify-between hover:border-[#143323] shadow-xs hover:shadow-md transition-all group"
            >
              <div className="space-y-4">
                {/* Header row with Icon and Category */}
                <div className="flex items-center justify-between pb-4 border-b border-[#E2E6DC]">
                  <div className="w-10 h-10 rounded-2xl bg-[#F7F8F3] border border-[#E2E6DC] flex items-center justify-center group-hover:bg-[#143323] group-hover:text-white transition-colors">
                    {problemIcons[idx]}
                  </div>
                  <span className="font-mono text-xs text-[#B85D2B] font-semibold">
                    {problem.category}
                  </span>
                </div>

                <h3 className="font-sans text-lg sm:text-xl font-bold text-[#121A15] leading-snug">
                  {problem.title}
                </h3>

                <p className="text-sm text-[#4A554E] leading-relaxed">
                  {problem.description}
                </p>
              </div>

              {/* Concrete Field Impact & Direct Solution Link */}
              <div className="mt-6 pt-5 border-t border-[#E2E6DC] space-y-3">
                <div className="text-xs text-[#4A554E] bg-[#F7F8F3] p-3.5 rounded-2xl border border-[#E2E6DC]">
                  <span className="font-medium text-[#121A15] block">
                    Dampak di kebun:
                  </span>
                  <span className="text-[#68736C] block mt-1">
                    {problem.fieldImpact}
                  </span>
                </div>

                <a
                  href="#solusi-manfaat"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#143323] hover:text-[#1F6E43] transition-colors group/link pt-1"
                >
                  <span>{problem.relatedCapability}</span>
                  <ArrowRight
                    className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-1"
                    aria-hidden="true"
                  />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
