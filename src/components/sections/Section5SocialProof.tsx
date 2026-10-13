"use client";

import React, { useState } from "react";
import Image from "next/image";
import { USER_JOURNEY_STAGES } from "@/data/landing-content";
import { ShieldCheck, CheckCircle2, UserCheck, Compass } from "lucide-react";

export function Section5SocialProof() {
  const [activeStageIdx, setActiveStageIdx] = useState(0);
  const currentStage = USER_JOURNEY_STAGES[activeStageIdx];

  const stageImages = [
    "/images/hydroponic-netpot.jpg",
    "/images/hydroponic-canopy.jpg",
    "/images/hydroponic-greenhouse.jpg",
    "/images/hydroponic-harvest.jpg",
  ];

  const farmerPersonas = [
    {
      role: "Petani Skala Rumahan (Urban Grower)",
      focus: "20–200 Lubang Tanam",
      challenge: "Tantangan utama:",
      insight:
        "Membutuhkan batas aman pH dan PPM yang mudah dipahami, serta pengingat rutin agar bibit di rockwool tidak terlambat dipindahkan ke talang pembesaran.",
    },
    {
      role: "Pengelola Kebun Produktif",
      focus: "500+ Lubang Tanam (Multi-Meja)",
      challenge: "Tantangan utama:",
      insight:
        "Memerlukan kerapian pencatatan jadwal tanam bergilir agar sayuran dapat dipromosikan ke pembeli rutin beberapa hari sebelum hari potong, menjaga perputaran meja.",
    },
  ];

  return (
    <section
      id="bukti-konsep"
      aria-labelledby="bukti-konsep-heading"
      className="w-full relative py-20 sm:py-28 lg:py-32 bg-[#071F13] text-white border-b border-white/10 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 backdrop-blur-xs">
            <span className="font-mono text-xs font-semibold text-[#B6F084] tracking-wide uppercase">
              Alur Kerja &amp; Bukti Konsep
            </span>
          </div>
          <h2
            id="bukti-konsep-heading"
            className="font-sans text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-[1.15]"
          >
            Bagaimana BumiLoka Bekerja di Kebun Anda
          </h2>
          <p className="text-base sm:text-lg text-white/80 leading-relaxed max-w-2xl">
            Alur terpadu yang mendampingi petani sejak penyemaian benih, pemantauan nutrisi harian, hingga penjualan sayuran siap petik.
          </p>
        </div>

        {/* Honesty Transparency Notice */}
        <div className="p-4 sm:p-5 rounded-2xl bg-white/10 border border-white/15 backdrop-blur-xs flex items-start gap-3.5 shadow-xs">
          <ShieldCheck className="w-5 h-5 text-[#B6F084] shrink-0 mt-0.5" aria-hidden="true" />
          <p className="text-xs sm:text-sm text-white/90 leading-relaxed">
            <strong className="text-white font-semibold">
              Transparansi konsep alur kerja:
            </strong>{" "}
            BumiLoka tidak menyajikan ulasan atau angka pengguna buatan. Bagian ini mendemonstrasikan bagaimana ketiga layanan saling terhubung dalam rutinitas kebun nyata.
          </p>
        </div>

        {/* 4-Stage Workflow Composition */}
        <div className="space-y-8">
          {/* 4-Stage Switcher */}
          <div
            role="tablist"
            aria-label="Tahapan alur kerja budidaya"
            className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-3.5"
          >
            {USER_JOURNEY_STAGES.map((stage, idx) => {
              const isSelected = activeStageIdx === idx;
              return (
                <button
                  key={stage.stepNumber}
                  role="tab"
                  aria-selected={isSelected}
                  aria-controls={`journey-panel-${idx}`}
                  id={`journey-tab-${idx}`}
                  type="button"
                  onClick={() => setActiveStageIdx(idx)}
                  className={`p-3.5 sm:p-4 rounded-2xl text-left transition-all flex flex-col justify-between ${
                    isSelected
                      ? "bg-[#B6F084] text-[#092215] font-bold shadow-md"
                      : "bg-white/10 text-white/90 border border-white/15 hover:bg-white/20"
                  }`}
                >
                  <div className="flex items-center justify-between w-full mb-2">
                    <span
                      className={`font-mono text-xs font-bold ${
                        isSelected ? "text-[#092215]" : "text-[#B6F084]"
                      }`}
                    >
                      {stage.stepNumber}
                    </span>
                    <span
                      className={`text-[10px] px-2 py-0.5 rounded-full font-mono font-medium ${
                        isSelected ? "bg-black/15 text-[#092215]" : "bg-white/10 text-white/70"
                      }`}
                    >
                      {stage.moduleUsed}
                    </span>
                  </div>
                  <p className="font-sans text-xs sm:text-sm font-bold leading-snug line-clamp-1">
                    {stage.stageTitle}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Selected Stage Content */}
          <div
            id={`journey-panel-${activeStageIdx}`}
            role="tabpanel"
            aria-labelledby={`journey-tab-${activeStageIdx}`}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pt-2"
          >
            {/* Left Context & Persona Perspectives */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-[#B6F084]">
                  <span>{currentStage.stepNumber}</span>
                  <span>•</span>
                  <span>{currentStage.durationContext}</span>
                  <span>•</span>
                  <span className="font-bold text-white">{currentStage.moduleUsed}</span>
                </div>
                <h3 className="font-sans text-2xl sm:text-3xl font-bold text-white mt-2 leading-tight">
                  {currentStage.scenarioTitle}
                </h3>
              </div>

              {/* Two Perspectives */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-1.5">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#B6F084]">
                    <Compass className="w-4 h-4 shrink-0" aria-hidden="true" />
                    <span>Petani Rumahan</span>
                  </div>
                  <p className="text-xs text-white/80 leading-relaxed">
                    {currentStage.beginnerExperience}
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-1.5">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#B6F084]">
                    <UserCheck className="w-4 h-4 shrink-0" aria-hidden="true" />
                    <span>Kebun Produktif</span>
                  </div>
                  <p className="text-xs text-white/80 leading-relaxed">
                    {currentStage.experiencedExperience}
                  </p>
                </div>
              </div>
            </div>

            {/* Right Checklist Panel */}
            <div className="lg:col-span-5 rounded-2xl bg-white/5 border border-white/10 p-5 sm:p-6 space-y-4">
              <div className="relative aspect-16/9 rounded-xl overflow-hidden border border-white/10 bg-[#06180E]">
                <Image
                  src={stageImages[activeStageIdx]}
                  alt={currentStage.stageTitle}
                  fill
                  sizes="(max-width: 1024px) 100vw, 35vw"
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-2.5 left-2.5 text-xs font-semibold text-white">
                  {currentStage.stageTitle}
                </div>
              </div>

              <div className="space-y-2">
                <span className="font-mono text-xs text-[#B6F084] font-semibold uppercase tracking-wider block">
                  Aktivitas di BumiLoka:
                </span>
                <ul className="space-y-2">
                  {currentStage.keyChecklist.map((checkItem, cIdx) => (
                    <li key={cIdx} className="flex items-start gap-2.5 text-xs text-white/85">
                      <CheckCircle2
                        className="w-4 h-4 text-[#B6F084] shrink-0 mt-0.5"
                        aria-hidden="true"
                      />
                      <span className="leading-relaxed">{checkItem}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Persona Comparison */}
        <div className="space-y-4 pt-4 border-t border-white/10">
          <h3 className="font-sans text-xl sm:text-2xl font-bold text-white">
            Disesuaikan dengan Skala Kebun Anda
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {farmerPersonas.map((persona, pIdx) => (
              <div
                key={pIdx}
                className="p-6 sm:p-8 rounded-3xl bg-white/5 border border-white/10 shadow-md space-y-3"
              >
                <div className="flex items-center justify-between pb-3 border-b border-white/10">
                  <span className="font-sans font-bold text-base text-white">
                    {persona.role}
                  </span>
                  <span className="font-mono text-xs text-[#B6F084] font-semibold bg-[#B6F084]/15 px-2.5 py-0.5 rounded-full border border-[#B6F084]/30">
                    {persona.focus}
                  </span>
                </div>
                <p className="text-sm text-white/80 leading-relaxed">
                  <strong className="text-white font-semibold">{persona.challenge} </strong>
                  {persona.insight}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
