"use client";

import React from "react";
import { useLanguage } from "@/i18n/context";
import { TrendingDown, ClipboardX, HelpCircle, ArrowRight } from "lucide-react";

export function Section2Problems() {
  const { t } = useLanguage();
  const content = t.problems;

  const problemIcons = [
    <TrendingDown key="p1" className="w-5 h-5 text-[#B85D2B] dark:text-[#E27D42]" aria-hidden="true" />,
    <ClipboardX key="p2" className="w-5 h-5 text-[#B85D2B] dark:text-[#E27D42]" aria-hidden="true" />,
    <HelpCircle key="p3" className="w-5 h-5 text-[#B85D2B] dark:text-[#E27D42]" aria-hidden="true" />,
  ];

  return (
    <section
      id="masalah-petani"
      aria-labelledby="masalah-petani-heading"
      className="w-full relative py-14 sm:py-20 lg:py-28 bg-[#F7F8F3] dark:bg-[#06180E] border-b border-[#E2E6DC] dark:border-white/10 overflow-hidden transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-16">
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EFECE4] dark:bg-white/10 border border-[#E2E6DC] dark:border-white/15">
            <span className="font-mono text-xs font-semibold text-[#B85D2B] dark:text-[#E27D42] tracking-wide uppercase">
              {content.badge}
            </span>
          </div>
          <h2
            id="masalah-petani-heading"
            className="font-sans text-2xl sm:text-4xl lg:text-5xl font-bold text-[#121A15] dark:text-white tracking-tight leading-[1.18] sm:leading-[1.15]"
          >
            {content.heading}
          </h2>
          <p className="text-base sm:text-lg text-[#4A554E] dark:text-white/80 leading-relaxed max-w-2xl">
            {content.description}
          </p>
        </div>

        {/* 3 Focused Problem Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
          {content.items.map((problem, idx) => (
            <article
              key={problem.id}
              className="bg-white dark:bg-[#0A2617] rounded-3xl border border-[#E2E6DC] dark:border-white/15 p-5 sm:p-8 flex flex-col justify-between hover:border-[#143323] dark:hover:border-[#B6F084] shadow-xs hover:shadow-md transition-all group"
            >
              <div className="space-y-4">
                {/* Header row with Icon and Category */}
                <div className="flex items-center justify-between pb-4 border-b border-[#E2E6DC] dark:border-white/10">
                  <div className="w-10 h-10 rounded-2xl bg-[#F7F8F3] dark:bg-white/10 border border-[#E2E6DC] dark:border-white/10 flex items-center justify-center group-hover:bg-[#143323] dark:group-hover:bg-[#B6F084] group-hover:text-white dark:group-hover:text-[#092215] transition-colors">
                    {problemIcons[idx]}
                  </div>
                  <span className="font-mono text-xs text-[#B85D2B] dark:text-[#E27D42] font-semibold">
                    {problem.category}
                  </span>
                </div>

                <h3 className="font-sans text-lg sm:text-xl font-bold text-[#121A15] dark:text-white leading-snug">
                  {problem.title}
                </h3>

                <p className="text-sm text-[#4A554E] dark:text-white/80 leading-relaxed">
                  {problem.description}
                </p>
              </div>

              {/* Concrete Field Impact & Direct Solution Link */}
              <div className="mt-6 pt-5 border-t border-[#E2E6DC] dark:border-white/10 space-y-3">
                <div className="text-xs text-[#4A554E] dark:text-white/85 bg-[#F7F8F3] dark:bg-white/5 p-3.5 rounded-2xl border border-[#E2E6DC] dark:border-white/10">
                  <span className="font-medium text-[#121A15] dark:text-white block">
                    {content.fieldImpactLabel}
                  </span>
                  <span className="text-[#68736C] dark:text-white/70 block mt-1">
                    {problem.fieldImpact}
                  </span>
                </div>

                <a
                  href="#solusi-manfaat"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#143323] dark:text-[#B6F084] hover:text-[#1F6E43] dark:hover:text-[#C7F69B] transition-colors group/link pt-1 min-h-[44px] touch-press"
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
