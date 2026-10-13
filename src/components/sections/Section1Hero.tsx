import React from "react";
import Image from "next/image";
import { HERO_CONTENT } from "@/data/landing-content";
import { ArrowRight, ArrowDownRight, ArrowUpRight } from "lucide-react";

export function Section1Hero() {
  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="relative w-full h-[90vh] min-h-[640px] max-h-[880px] flex flex-col justify-between overflow-hidden bg-[#06180E]"
    >
      {/* ------------------------------------------------------------- */}
      {/* FULL-BLEED PHOTOGRAPHIC BACKGROUND                           */}
      {/* ------------------------------------------------------------- */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-greenhouse-fullbleed.jpg"
          alt="Kebun greenhouse hidroponik modern dengan instalasi talang pipa selada hijau di bawah cahaya alami"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[60%_center] lg:object-center"
        />

        {/* High-Contrast Editorial Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#06180E]/95 via-[#071F13]/85 md:via-[#071F13]/70 to-[#06180E]/35 lg:to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#06180E]/60 via-transparent to-[#06180E]/90 pointer-events-none" />
      </div>

      {/* ------------------------------------------------------------- */}
      {/* MAIN HERO CONTENT LAYER                                       */}
      {/* ------------------------------------------------------------- */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-32 lg:pt-36 pb-10 sm:pb-14 my-auto">
        <div className="max-w-3xl space-y-6 sm:space-y-7">
          {/* Subtle Clean Category Label */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/40 border border-white/20 backdrop-blur-xs">
            <span className="font-mono text-xs font-medium text-[#B6F084] tracking-wide">
              {HERO_CONTENT.label}
            </span>
          </div>

          {/* Primary Benefit-Driven Headline */}
          <h1
            id="hero-heading"
            className="font-sans text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.12] sm:leading-[1.08] text-balance"
          >
            {HERO_CONTENT.headline}
          </h1>

          {/* Concise Supporting Copy (1-2 sentences) */}
          <p className="text-base sm:text-lg lg:text-xl text-white/90 leading-relaxed font-normal max-w-2xl">
            {HERO_CONTENT.subheadline}
          </p>

          {/* Clean Focused CTA Buttons */}
          <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4">
            <a
              href={HERO_CONTENT.primaryCta.href}
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-[#B6F084] text-[#092215] font-bold text-base hover:bg-[#C7F69B] transition-all shadow-xl hover:shadow-2xl hover:scale-[1.01] group"
            >
              <span>{HERO_CONTENT.primaryCta.label}</span>
              <ArrowRight
                className="w-5 h-5 transition-transform group-hover:translate-x-1"
                aria-hidden="true"
              />
            </a>

            <a
              href={HERO_CONTENT.secondaryCta.href}
              className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-black/35 hover:bg-black/50 border border-white/25 text-white font-medium text-base transition-all backdrop-blur-xs"
            >
              <span>{HERO_CONTENT.secondaryCta.label}</span>
              <ArrowDownRight className="w-5 h-5 text-white/80" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>

      {/* ------------------------------------------------------------- */}
      {/* BOTTOM TRANSLUCENT STRIP: THREE FOCAL PILLARS                */}
      {/* ------------------------------------------------------------- */}
      <div className="relative z-10 w-full border-t border-white/15 bg-gradient-to-r from-[#06180E]/90 via-[#071F13]/80 to-[#06180E]/70 backdrop-blur-xs py-4 sm:py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4">
            {HERO_CONTENT.pillars.map((pillar) => (
              <a
                key={pillar.title}
                href={pillar.href}
                className="group flex items-center justify-between p-3.5 sm:p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all text-left"
              >
                <div>
                  <span className="block text-xs sm:text-sm font-bold text-white group-hover:text-[#B6F084] transition-colors">
                    {pillar.title}
                  </span>
                  <p className="text-[11px] text-white/70 line-clamp-1 mt-0.5">
                    {pillar.summary}
                  </p>
                </div>
                <ArrowUpRight className="w-4 h-4 text-white/60 group-hover:text-[#B6F084] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0 ml-3" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
