"use client";

import React from "react";
import Image from "next/image";
import { useLanguage } from "@/i18n/context";
import { ArrowRight, ShieldCheck } from "lucide-react";

export function Section8FinalCta() {
  const { t } = useLanguage();

  return (
    <section
      id="cta-akhir"
      aria-labelledby="cta-akhir-heading"
      className="relative w-full py-16 sm:py-28 lg:py-36 overflow-hidden bg-[#06180E] dark:bg-[#030E07] text-white transition-colors duration-200"
    >
      {/* ------------------------------------------------------------- */}
      {/* FULL-BLEED PHOTOGRAPHIC BACKGROUND (100vw Edge-to-Edge)       */}
      {/* ------------------------------------------------------------- */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hydroponic-canopy.jpg"
          alt="Instalasi kebun hidroponik berkanopi dengan barisan sayuran hijau subur"
          fill
          sizes="100vw"
          className="object-cover object-center"
        />

        {/* Restrained dark/emerald overlay with subtle atmospheric blur */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#06180E]/92 via-[#071F13]/85 to-[#06180E]/95 dark:from-[#030E07]/94 dark:via-[#05160C]/90 dark:to-[#030E07]/96 pointer-events-none" />
        <div className="absolute inset-0 backdrop-blur-[2px] pointer-events-none" />
      </div>

      {/* ------------------------------------------------------------- */}
      {/* THREE CORE ELEMENTS COMPOSITION                               */}
      {/* ------------------------------------------------------------- */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 sm:space-y-8">
        {/* Core Element 1: Strong Benefit-Driven Headline */}
        <h2
          id="cta-akhir-heading"
          className="font-sans text-2xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-[1.18] sm:leading-[1.15] text-balance"
        >
          {t.finalCta.heading}
        </h2>

        {/* Core Element 2: Short Benefit Description */}
        <p className="text-base sm:text-lg lg:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed font-normal">
          {t.finalCta.description}
        </p>

        {/* Core Element 3: ONE Primary CTA Button */}
        <div className="pt-2 flex justify-center w-full">
          <a
            href="#langganan"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 sm:py-4 rounded-xl sm:rounded-full bg-[#B6F084] text-[#092215] font-bold text-sm sm:text-base hover:bg-[#C7F69B] active:scale-[0.98] transition-all shadow-md min-h-[48px] focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-white group"
          >
            <span>{t.finalCta.button}</span>
            <ArrowRight
              className="w-4 h-4 transition-transform group-hover:translate-x-1"
              aria-hidden="true"
            />
          </a>
        </div>

        {/* Honest Operational Notice per docs/ai.md */}
        <div className="pt-4 text-xs text-white/60 flex items-center justify-center gap-2 max-w-md mx-auto text-center">
          <ShieldCheck className="w-4 h-4 shrink-0 text-[#B6F084]" aria-hidden="true" />
          <span>{t.finalCta.notice}</span>
        </div>
      </div>
    </section>
  );
}
