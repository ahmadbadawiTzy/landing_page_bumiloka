"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useLanguage } from "@/i18n/context";
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
  const { t } = useLanguage();
  const [activeAiTab, setActiveAiTab] = useState<string>("tip-burn");
  const selectedAiScenario =
    t.products.aiAssistant.scenarios.find((s) => s.id === activeAiTab) ||
    t.products.aiAssistant.scenarios[0];

  return (
    <section
      id="produk-layanan"
      aria-labelledby="produk-layanan-heading"
      className="py-14 sm:py-20 md:py-24 bg-[#F7F8F3] dark:bg-[#07190F] border-b border-[#E2E6DC] dark:border-[#193826] transition-colors duration-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12">
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <h2
            id="produk-layanan-heading"
            className="font-sans text-2xl sm:text-4xl lg:text-5xl font-bold text-[#121A15] dark:text-white tracking-tight leading-[1.18] sm:leading-tight"
          >
            {t.products.heading}
          </h2>
          <p className="text-base text-[#4A554E] dark:text-[#A4B3A8] leading-relaxed">
            {t.products.description}
          </p>
        </div>

        {/* Conceptual Transparency Notice */}
        <div className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-[#0D2418] border border-[#E2E6DC] dark:border-[#1F452E] flex items-start gap-3.5 shadow-2xs">
          <Info className="w-5 h-5 text-[#1F6E43] dark:text-[#B6F084] shrink-0 mt-0.5" aria-hidden="true" />
          <p className="text-xs sm:text-sm text-[#4A554E] dark:text-[#A4B3A8] leading-relaxed">
            <strong className="text-[#121A15] dark:text-white font-semibold">
              {t.products.conceptNotice.bold}
            </strong>{" "}
            {t.products.conceptNotice.text}
          </p>
        </div>

        {/* ------------------------------------------------------------- */}
        {/* MODUL 01: MARKETPLACE HASIL PANEN                            */}
        {/* ------------------------------------------------------------- */}
        <div
          id="modul-pasar-panen"
          className="p-4 sm:p-8 lg:p-12 rounded-3xl bg-white dark:bg-[#0C1F15] border border-[#E2E6DC] dark:border-[#1F3D2B] shadow-sm scroll-mt-24 space-y-6 sm:space-y-8"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left Explanation */}
            <div className="lg:col-span-5 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F7F8F3] dark:bg-[#132A1C] border border-[#E2E6DC] dark:border-[#1F452E]">
                <ShoppingBag className="w-4 h-4 text-[#143323] dark:text-[#B6F084]" aria-hidden="true" />
                <span className="font-mono text-xs font-semibold text-[#143323] dark:text-[#B6F084]">
                  {t.products.marketplace.badge}
                </span>
              </div>

              <h3 className="font-sans text-2xl sm:text-3xl font-bold text-[#121A15] dark:text-white leading-tight">
                {t.products.marketplace.title}
              </h3>

              <p className="text-sm sm:text-base text-[#4A554E] dark:text-[#A4B3A8] leading-relaxed">
                {t.products.marketplace.description}
              </p>

              {/* Photo preview of authentic harvest */}
              <div className="relative w-full h-44 sm:h-52 rounded-2xl overflow-hidden border border-[#E2E6DC] dark:border-[#1F452E] shadow-2xs">
                <Image
                  src="/images/hydroponic-harvest.jpg"
                  alt="Hasil panen sayuran hidroponik segar dan bersih siap dikemas"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
                <span className="absolute bottom-3 left-3 text-white text-xs font-medium">
                  {t.products.marketplace.photoCaption}
                </span>
              </div>

              <ul className="pt-2 space-y-2.5 text-xs sm:text-sm text-[#4A554E] dark:text-[#A4B3A8]">
                {t.products.marketplace.checklist.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#1F6E43] dark:text-[#B6F084] shrink-0" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Structured Table Preview */}
            <div className="lg:col-span-7 bg-[#F7F8F3] dark:bg-[#07190F] rounded-2xl border border-[#E2E6DC] dark:border-[#193826] p-5 sm:p-6 space-y-3">
              <div className="flex items-center justify-between pb-3 border-b border-[#E2E6DC] dark:border-[#193826]">
                <span className="font-sans text-sm font-bold text-[#121A15] dark:text-white">
                  {t.products.marketplace.tableTitle}
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-[#143323] text-[#B6F084] text-[11px] font-mono font-semibold">
                  {t.products.marketplace.uiBadge}
                </span>
              </div>

              <div className="space-y-3">
                {t.products.marketplace.batches.map((item) => (
                  <div
                    key={item.batchCode}
                    className="p-4 rounded-xl bg-white dark:bg-[#0C1F15] border border-[#E2E6DC] dark:border-[#1F3D2B] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs"
                  >
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="font-mono font-bold text-[#143323] dark:text-[#B6F084] px-2 py-0.5 rounded bg-[#B6F084]/25 dark:bg-[#B6F084]/15">
                          {item.batchCode}
                        </span>
                        <span className="font-bold text-[#121A15] dark:text-white">{item.commodity}</span>
                      </div>
                      <p className="text-[#68736C] dark:text-[#8E9F93] text-[11px]">
                        {item.cultivationMethod} • {item.locationNote}
                      </p>
                    </div>

                    <div className="flex sm:flex-col items-end justify-between sm:justify-center gap-1 border-t sm:border-t-0 pt-2 sm:pt-0 border-[#E2E6DC] dark:border-[#1F3D2B]">
                      <span className="font-semibold text-[#1F6E43] dark:text-[#B6F084] bg-[#EFECE4] dark:bg-[#132A1C] px-2.5 py-0.5 rounded-full border border-[#E2E6DC] dark:border-[#1F452E]">
                        {item.statusLabel}
                      </span>
                      <span className="font-mono text-[11px] text-[#4A554E] dark:text-[#A4B3A8]">
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
        {/* ------------------------------------------------------------- */}
        {/* MODUL 02: PENGELOLAAN BUDIDAYA                               */}
        {/* ------------------------------------------------------------- */}
        <div
          id="modul-manajemen-tanaman"
          className="p-4 sm:p-8 lg:p-12 rounded-3xl bg-white dark:bg-[#0C1F15] border border-[#E2E6DC] dark:border-[#1F3D2B] shadow-sm scroll-mt-24 space-y-6 sm:space-y-8"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left Parameter Preview */}
            <div className="lg:col-span-7 order-2 lg:order-1 bg-[#F7F8F3] dark:bg-[#07190F] rounded-2xl border border-[#E2E6DC] dark:border-[#193826] p-4 sm:p-6 space-y-3">
              <div className="flex items-center justify-between pb-3 border-b border-[#E2E6DC] dark:border-[#193826]">
                <span className="font-sans text-sm font-bold text-[#121A15] dark:text-white">
                  {t.products.management.tableTitle}
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-[#143323] text-[#B6F084] text-[11px] font-mono font-semibold">
                  {t.products.management.uiBadge}
                </span>
              </div>

              <div className="space-y-3">
                {t.products.management.installations.map((inst, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 sm:p-4 rounded-xl bg-white dark:bg-[#0C1F15] border border-[#E2E6DC] dark:border-[#1F3D2B] space-y-2.5"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="font-bold text-xs sm:text-sm text-[#121A15] dark:text-white block">
                          {inst.installationName}
                        </span>
                        <span className="text-xs text-[#1E4A32] dark:text-[#7ED957] font-semibold">
                          {inst.cropName} • {inst.daysAfterPlanting}
                        </span>
                      </div>
                      <span
                        className={`text-[10px] sm:text-[11px] font-semibold px-2 sm:px-2.5 py-0.5 rounded-full border ${
                          inst.status.includes("Normal")
                            ? "bg-[#EFECE4] dark:bg-[#132A1C] text-[#1F6E43] dark:text-[#B6F084] border-[#E2E6DC] dark:border-[#1F452E]"
                            : "bg-[#FAF9F5] dark:bg-[#2A1E14] text-[#B85D2B] dark:text-[#FFA07A] border-[#E2E6DC] dark:border-[#3D2818]"
                        }`}
                      >
                        {inst.status}
                      </span>
                    </div>

                    {/* Parameters Grid */}
                    <div className="grid grid-cols-3 gap-2 pt-2 border-t border-[#E2E6DC] dark:border-[#1F3D2B] text-xs">
                      <div>
                        <span className="text-[10px] text-[#68736C] dark:text-[#8E9F93] uppercase font-mono block">
                          {t.products.management.phLabel}
                        </span>
                        <span className="font-mono font-bold text-[#143323] dark:text-[#B6F084]">
                          {inst.phLevel}
                        </span>
                      </div>
                      <div>
                        <span className="text-[10px] text-[#68736C] dark:text-[#8E9F93] uppercase font-mono block">
                          {t.products.management.ppmLabel}
                        </span>
                        <span className="font-mono font-bold text-[#143323] dark:text-[#B6F084]">
                          {inst.ppmLevel}
                        </span>
                      </div>
                      <div>
                        <span className="text-[10px] text-[#68736C] dark:text-[#8E9F93] uppercase font-mono block">
                          {t.products.management.tempLabel}
                        </span>
                        <span className="font-mono font-bold text-[#143323] dark:text-[#B6F084]">
                          {inst.waterTemp}
                        </span>
                      </div>
                    </div>

                    <div className="pt-2 border-t border-[#E2E6DC] dark:border-[#1F3D2B] text-[11px] text-[#4A554E] dark:text-[#A4B3A8] flex items-start gap-1">
                      <span className="font-medium text-[#121A15] dark:text-white shrink-0">
                        {t.products.management.actionLabel}
                      </span>
                      <span>{inst.nextAction}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Explanation */}
            <div className="lg:col-span-5 order-1 lg:order-2 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F7F8F3] dark:bg-[#132A1C] border border-[#E2E6DC] dark:border-[#1F452E]">
                <Sprout className="w-4 h-4 text-[#143323] dark:text-[#B6F084]" aria-hidden="true" />
                <span className="font-mono text-xs font-semibold text-[#143323] dark:text-[#B6F084]">
                  {t.products.management.badge}
                </span>
              </div>

              <h3 className="font-sans text-2xl sm:text-3xl font-bold text-[#121A15] dark:text-white leading-tight">
                {t.products.management.title}
              </h3>

              <p className="text-sm sm:text-base text-[#4A554E] dark:text-[#A4B3A8] leading-relaxed">
                {t.products.management.description}
              </p>

              {/* Photo preview of commercial greenhouse troughs */}
              <div className="relative w-full h-44 sm:h-52 rounded-2xl overflow-hidden border border-[#E2E6DC] dark:border-[#1F452E] shadow-2xs">
                <Image
                  src="/images/hydroponic-greenhouse.jpg"
                  alt="Instalasi talang pipa hidroponik komersial di dalam greenhouse modern"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
                <span className="absolute bottom-3 left-3 text-white text-xs font-medium">
                  {t.products.management.photoCaption}
                </span>
              </div>

              <ul className="pt-2 space-y-2.5 text-xs sm:text-sm text-[#4A554E] dark:text-[#A4B3A8]">
                {t.products.management.checklist.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#1F6E43] dark:text-[#B6F084] shrink-0" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* ------------------------------------------------------------- */}
        {/* MODUL 03: ASISTEN AI BUDIDAYA                                */}
        {/* ------------------------------------------------------------- */}
        <div
          id="modul-asisten-ai"
          className="p-4 sm:p-8 lg:p-12 rounded-3xl bg-white dark:bg-[#0C1F15] border border-[#E2E6DC] dark:border-[#1F3D2B] shadow-xs scroll-mt-24 space-y-6 sm:space-y-8"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left Explanation */}
            <div className="lg:col-span-5 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F7F8F3] dark:bg-[#132A1C] border border-[#E2E6DC] dark:border-[#1F452E]">
                <Bot className="w-4 h-4 text-[#143323] dark:text-[#B6F084]" aria-hidden="true" />
                <span className="font-mono text-xs font-semibold text-[#143323] dark:text-[#B6F084]">
                  {t.products.aiAssistant.badge}
                </span>
              </div>

              <h3 className="font-sans text-2xl sm:text-3xl font-bold text-[#121A15] dark:text-white leading-tight">
                {t.products.aiAssistant.title}
              </h3>

              <p className="text-sm sm:text-base text-[#4A554E] dark:text-[#A4B3A8] leading-relaxed">
                {t.products.aiAssistant.description}
              </p>

              {/* Agronomic Disclaimer */}
              <div className="p-4 rounded-2xl bg-[#F7F8F3] dark:bg-[#132A1C] border border-[#E2E6DC] dark:border-[#1F452E] space-y-1.5">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#B85D2B] dark:text-[#FFA07A]">
                  <ShieldAlert className="w-4 h-4 shrink-0" aria-hidden="true" />
                  <span>{t.products.aiAssistant.cautionBadge}</span>
                </div>
                <p className="text-xs text-[#4A554E] dark:text-[#A4B3A8] leading-relaxed">
                  {t.products.aiAssistant.cautionText}
                </p>
              </div>
            </div>

            {/* Right Interactive Q&A Tabs Preview */}
            <div className="lg:col-span-7 bg-[#F7F8F3] dark:bg-[#07190F] rounded-2xl border border-[#E2E6DC] dark:border-[#193826] p-4 sm:p-6 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-[#E2E6DC] dark:border-[#193826]">
                <span className="font-sans text-sm font-bold text-[#121A15] dark:text-white">
                  {t.products.aiAssistant.tableTitle}
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-[#143323] text-[#B6F084] text-[11px] font-mono font-semibold">
                  {t.products.aiAssistant.uiBadge}
                </span>
              </div>

              {/* Case Selectors - horizontal touch scrolling on mobile */}
              <div className="flex gap-2 overflow-x-auto no-scrollbar sm:flex-wrap pb-1 -mx-1 px-1">
                {t.products.aiAssistant.scenarios.map((scenario) => (
                  <button
                    key={scenario.id}
                    type="button"
                    onClick={() => setActiveAiTab(scenario.id)}
                    className={`px-3 py-2 rounded-full text-xs font-medium transition-all shrink-0 min-h-[40px] touch-press ${
                      activeAiTab === scenario.id
                        ? "bg-[#143323] text-[#B6F084] dark:bg-[#1F452E] dark:text-[#B6F084] font-semibold shadow-2xs"
                        : "bg-white dark:bg-[#0C1F15] border border-[#E2E6DC] dark:border-[#1F3D2B] text-[#4A554E] dark:text-[#A4B3A8] hover:bg-[#EFECE4] dark:hover:bg-[#132A1C]"
                    }`}
                  >
                    {scenario.topicLabel}
                  </button>
                ))}
              </div>

              {/* Dialogue Box */}
              <div className="bg-white dark:bg-[#0C1F15] rounded-2xl border border-[#E2E6DC] dark:border-[#1F3D2B] p-4 sm:p-5 space-y-3.5">
                {/* Farmer Question */}
                <div className="bg-[#F7F8F3] dark:bg-[#07190F] p-3.5 rounded-xl border border-[#E2E6DC] dark:border-[#193826] text-xs text-[#121A15] dark:text-white space-y-1">
                  <span className="font-mono text-[10px] text-[#68736C] dark:text-[#8E9F93] block">
                    {selectedAiScenario.cropContext}
                  </span>
                  <p className="font-medium leading-relaxed">
                    &quot;{selectedAiScenario.farmerQuestion}&quot;
                  </p>
                </div>

                {/* AI Guidance */}
                <div className="space-y-2.5 pt-1">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-[#143323] dark:text-[#B6F084]">
                    <Sparkles className="w-3.5 h-3.5 text-[#1F6E43] dark:text-[#B6F084]" aria-hidden="true" />
                    <span>{t.products.aiAssistant.stepsLabel}</span>
                  </div>

                  <ol className="space-y-2 list-decimal list-inside text-xs text-[#4A554E] dark:text-[#A4B3A8] leading-relaxed">
                    {selectedAiScenario.diagnosticSteps.map((step, sIdx) => (
                      <li key={sIdx}>{step}</li>
                    ))}
                  </ol>

                  <div className="pt-2 border-t border-[#E2E6DC] dark:border-[#1F3D2B] text-[11px] text-[#B85D2B] dark:text-[#FFA07A] bg-[#FAF9F5] dark:bg-[#2A1E14] p-2.5 rounded-lg border dark:border-[#3D2818]">
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
