"use client";

import React from "react";
import Image from "next/image";
import { useLanguage } from "@/i18n/context";
import { ArrowRight, ArrowDownRight, ArrowUpRight } from "lucide-react";

export function Section1Hero() {
  const { t } = useLanguage();
  const content = t.hero;

  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="relative w-full min-h-[100dvh] flex flex-col justify-between bg-[#06180E] text-white overflow-x-clip"
    >
      {/* ------------------------------------------------------------- */}
      {/* FULL-BLEED PHOTOGRAPHIC BACKGROUND                           */}
      {/* ------------------------------------------------------------- */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <Image
          src="/images/hero-greenhouse-fullbleed.jpg"
          alt="Kebun greenhouse hidroponik modern dengan instalasi talang pipa selada hijau di bawah cahaya alami"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[75%_center] sm:object-[65%_center] md:object-[60%_center] lg:object-center"
        />

        {/* High-Contrast Editorial Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#06180E]/95 via-[#071F13]/90 sm:via-[#071F13]/85 md:via-[#071F13]/75 to-[#06180E]/50 lg:to-[#06180E]/30" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#06180E]/70 via-transparent to-[#06180E]/95" />
      </div>

      {/* ------------------------------------------------------------- */}
      {/* MAIN HERO CONTENT LAYER                                       */}
      {/* ------------------------------------------------------------- */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 md:pt-32 lg:pt-36 pb-8 sm:pb-10 my-auto">
        <div className="max-w-3xl space-y-4 sm:space-y-6">
          {/* Subtle Clean Category Label */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/45 border border-white/20 backdrop-blur-xs">
            <span className="font-mono text-[11px] sm:text-xs font-semibold text-[#B6F084] tracking-wide uppercase">
              {content.label}
            </span>
          </div>

          {/* Primary Benefit-Driven Headline (Fluid scale for small screens) */}
          <h1
            id="hero-heading"
            className="font-sans text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.18] sm:leading-[1.12] lg:leading-[1.08] text-balance"
          >
            {content.headline}
          </h1>

          {/* Concise Supporting Copy */}
          <p className="text-sm sm:text-base lg:text-lg text-white/85 leading-relaxed font-normal max-w-2xl">
            {content.subheadline}
          </p>

          {/* Redesigned CTAs: Dominant primary action, restrained secondary action */}
          <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-3.5">
            <a
              href={content.primaryCta === t.hero.primaryCta ? "#produk-layanan" : "#produk-layanan"}
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 min-h-[46px] rounded-xl sm:rounded-full bg-[#B6F084] text-[#092215] font-bold text-sm sm:text-base hover:bg-[#C7F69B] active:scale-[0.98] transition-all shadow-md focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-white group"
            >
              <span>{content.primaryCta}</span>
              <ArrowRight
                className="w-4 h-4 transition-transform group-hover:translate-x-1"
                aria-hidden="true"
              />
            </a>

            <a
              href="#langganan"
              className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 min-h-[46px] rounded-xl sm:rounded-full bg-white/10 hover:bg-white/15 active:scale-[0.98] border border-white/20 text-white font-medium text-sm sm:text-base transition-all backdrop-blur-xs focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#B6F084]"
            >
              <span>{content.secondaryCta}</span>
              <ArrowDownRight className="w-4 h-4 text-white/80" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>

      {/* ------------------------------------------------------------- */}
      {/* BOTTOM TRANSLUCENT STRIP: THREE FOCAL PILLARS                */}
      {/* ------------------------------------------------------------- */}
      <div className="relative z-10 w-full border-t border-white/15 bg-[#06180E]/80 backdrop-blur-md py-3.5 sm:py-4 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex md:grid md:grid-cols-3 gap-2.5 sm:gap-4 overflow-x-auto no-scrollbar snap-x snap-mandatory -mx-4 px-4 sm:mx-0 sm:px-0">
            {content.pillars.map((pillar) => (
              <a
                key={pillar.title}
                href={pillar.href}
                className="snap-start shrink-0 w-[240px] sm:w-[270px] md:w-auto group flex items-center justify-between p-3 sm:p-3.5 rounded-xl bg-white/5 hover:bg-white/10 active:scale-[0.98] border border-white/10 transition-all text-left focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#B6F084]"
              >
                <div>
                  <span className="block text-xs sm:text-sm font-bold text-white group-hover:text-[#B6F084] transition-colors">
                    {pillar.title}
                  </span>
                  <p className="text-[11px] text-white/70 line-clamp-1 mt-0.5">
                    {pillar.summary}
                  </p>
                </div>
                <ArrowUpRight className="w-4 h-4 text-white/60 group-hover:text-[#B6F084] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0 ml-2" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
