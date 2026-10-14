"use client";

import React, { useState, useEffect, useId } from "react";
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
  Camera,
  ChevronDown,
  X,
} from "lucide-react";

const GRAIN_TEXTURE = `url("data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='.55'/%3E%3C/svg%3E")`;

function ArrowIcon({
  direction = "right",
  size = 14,
}: {
  direction?: "left" | "right";
  size?: number;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      style={{
        display: "block",
        transform: direction === "left" ? "rotate(180deg)" : "none",
      }}
    >
      <path
        d="M3 8H13"
        stroke="currentColor"
        strokeWidth="1.35"
        strokeLinecap="round"
      />
      <path
        d="M9.25 4.25L13 8L9.25 11.75"
        stroke="currentColor"
        strokeWidth="1.35"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Section4Products() {
  const { t, locale } = useLanguage();
  const componentId = useId();

  // Active tab index: 0 = Manajemen Tanaman, 1 = AI Assistant, 2 = Marketplace
  const [activeIndex, setActiveIndex] = useState<number>(0);

  // Inspector drawer toggle for deep-dive telemetry / photo workflow
  const [isInspectorOpen, setIsInspectorOpen] = useState<boolean>(false);

  // Inner tab for AI Assistant Q&A scenarios
  const [activeAiTab, setActiveAiTab] = useState<string>("tip-burn");
  const selectedAiScenario =
    t.products.aiAssistant.scenarios.find((s) => s.id === activeAiTab) ||
    t.products.aiAssistant.scenarios[0];

  const items = [
    {
      id: "modul-manajemen-tanaman",
      tab: t.products.management.badge,
      eyebrow: `${t.products.management.accessBadge}`,
      title: t.products.management.title,
      description: t.products.management.description,
      image: {
        src: "/images/hydroponic-greenhouse.jpg",
        alt: t.products.management.photoCaption,
      },
      badge: t.products.management.badge,
      accessBadge: t.products.management.accessBadge,
      isFree: false,
      icon: Sprout,
      primaryLabel: t.hero.secondaryCta,
      primaryLink: "#langganan",
      secondaryLabel:
        locale === "id" ? "Buka Parameter Instalasi" : "View System Telemetry",
      checklist: t.products.management.checklist,
    },
    {
      id: "modul-asisten-ai",
      tab: t.products.aiAssistant.badge,
      eyebrow: `${t.products.aiAssistant.accessBadge}`,
      title: t.products.aiAssistant.title,
      description: t.products.aiAssistant.description,
      image: {
        src: "/images/hydroponic-netpot.jpg",
        alt: "Diagnosis visual dan pemantauan daun hidroponik",
      },
      badge: t.products.aiAssistant.badge,
      accessBadge: t.products.aiAssistant.accessBadge,
      isFree: false,
      icon: Bot,
      primaryLabel: t.hero.secondaryCta,
      primaryLink: "#langganan",
      secondaryLabel:
        locale === "id" ? "Buka Simulasi & Alur Foto" : "View AI & Photo Workflow",
      checklist: [
        locale === "id"
          ? "Konsultasi kendala harian & rekomendasi nutrisi bertahap"
          : "Daily troubleshooting & gradual nutrient advice",
        locale === "id"
          ? "Diagnosis visual awal penyakit dari foto daun terintegrasi"
          : "Integrated visual preliminary diagnosis from leaf photos",
        locale === "id"
          ? "Batasan jujur jika membutuhkan tindakan langsung ahli agronomi"
          : "Honest boundaries when an accredited agronomist is required",
      ],
    },
    {
      id: "modul-pasar-panen",
      tab: t.products.marketplace.badge,
      eyebrow: `${t.products.marketplace.accessBadge}`,
      title: t.products.marketplace.title,
      description: t.products.marketplace.description,
      image: {
        src: "/images/hydroponic-harvest.jpg",
        alt: t.products.marketplace.photoCaption,
      },
      badge: t.products.marketplace.badge,
      accessBadge: t.products.marketplace.accessBadge,
      isFree: true,
      icon: ShoppingBag,
      primaryLabel:
        locale === "id" ? "Lihat Hasil Panen" : "Explore Harvest",
      primaryLink: "#langganan",
      secondaryLabel:
        locale === "id" ? "Buka Batch Pra-Pesan" : "View Pre-Order Batches",
      checklist: t.products.marketplace.checklist,
    },
  ];

  const activeItem = items[activeIndex] || items[0];

  // Sync with URL hash if navigated from hero or solution anchors
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === "#modul-manajemen-tanaman") {
        setActiveIndex(0);
      } else if (hash === "#modul-asisten-ai") {
        setActiveIndex(1);
      } else if (hash === "#modul-pasar-panen") {
        setActiveIndex(2);
      }
    };

    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const goTo = (index: number) => {
    setActiveIndex(Math.min(Math.max(index, 0), items.length - 1));
  };

  const next = () => {
    setActiveIndex((current) => (current >= items.length - 1 ? 0 : current + 1));
  };

  const previous = () => {
    setActiveIndex((current) => (current <= 0 ? items.length - 1 : current - 1));
  };

  return (
    <section
      id="produk-layanan"
      aria-labelledby="produk-layanan-heading"
      className="py-14 sm:py-20 md:py-24 bg-[#F7F8F3] dark:bg-[#07190F] border-b border-[#E2E6DC] dark:border-[#193826] transition-colors duration-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-10">
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
          <Info
            className="w-5 h-5 text-[#1F6E43] dark:text-[#B6F084] shrink-0 mt-0.5"
            aria-hidden="true"
          />
          <p className="text-xs sm:text-sm text-[#4A554E] dark:text-[#A4B3A8] leading-relaxed">
            <strong className="text-[#121A15] dark:text-white font-semibold">
              {t.products.conceptNotice.bold}
            </strong>{" "}
            {t.products.conceptNotice.text}
          </p>
        </div>

        {/* Hidden Anchor Targets to preserve backward-compatible hash navigation */}
        <div aria-hidden="true" className="sr-only">
          <div id="modul-manajemen-tanaman" />
          <div id="modul-asisten-ai" />
          <div id="modul-pasar-panen" />
        </div>

        {/* ============================================================= */}
        {/* ASYMMETRIC TABS / FLEXIBLE ACCORDION HERO STAGE (Framer Spec) */}
        {/* ============================================================= */}
        <div className="relative w-full min-h-[580px] sm:min-h-[620px] lg:min-h-[660px] flex flex-col justify-between">
          {/* DESKTOP & TABLET VIEWPORT (Asymmetric Overlapping Composition) */}
          <div className="hidden md:block relative w-full h-[620px] lg:h-[660px]">
            {/* Visual Panel (Positioned on the Right) */}
            <div
              className="absolute right-0 top-[6%] w-[68%] lg:w-[66%] h-[84%] lg:h-[86%] overflow-hidden rounded-[22px] lg:rounded-[24px] bg-[#C8C3BA] dark:bg-[#132A1C] shadow-lg border border-[#E2E6DC]/80 dark:border-white/10"
              style={{
                borderRadius: 22,
              }}
            >
              <Image
                key={activeItem.image.src}
                src={activeItem.image.src}
                alt={activeItem.image.alt}
                fill
                priority
                sizes="(max-width: 1024px) 70vw, 66vw"
                className="object-cover object-center transition-transform duration-700 ease-out motion-reduce:transition-none"
                style={{
                  transform: "scale(1.02)",
                }}
              />

              {/* High-Contrast Editorial Overlay */}
              <div className="absolute inset-0 bg-black/15 dark:bg-black/40 pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

              {/* Grain Texture Overlay */}
              <div
                className="absolute inset-[-20%] w-[140%] h-[140%] pointer-events-none opacity-60 mix-blend-soft-light"
                style={{
                  backgroundImage: GRAIN_TEXTURE,
                  backgroundRepeat: "repeat",
                  backgroundSize: "180px 180px",
                }}
              />

              {/* Corner Photographic Badge */}
              <div className="absolute bottom-6 right-6 z-10 hidden lg:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/50 backdrop-blur-md border border-white/20 text-white text-xs font-mono">
                <span className="w-2 h-2 rounded-full bg-[#B6F084]" />
                <span>{activeItem.image.alt}</span>
              </div>
            </div>

            {/* Overlapping Content Card (Positioned on the Left) */}
            <div
              className="absolute left-0 top-[14%] lg:top-[16%] w-[58%] lg:w-[50%] h-[74%] lg:h-[72%] p-7 lg:p-9 rounded-[22px] lg:rounded-[24px] bg-[#F7F5F1] dark:bg-[#0C1F15] border border-[#E2E6DC] dark:border-white/15 shadow-2xl z-10 flex flex-col justify-between"
              style={{
                borderRadius: 22,
              }}
            >
              {/* TOP: Tab Headers Strip */}
              <div
                role="tablist"
                aria-label={t.products.heading}
                className="w-full flex items-center gap-5 lg:gap-7 overflow-x-auto no-scrollbar shrink-0 border-b border-[#E2E6DC]/80 dark:border-white/10"
              >
                {items.map((item, idx) => {
                  const active = idx === activeIndex;
                  return (
                    <button
                      key={item.id}
                      role="tab"
                      id={`tab-${componentId}-${item.id}`}
                      aria-selected={active}
                      type="button"
                      onClick={() => goTo(idx)}
                      className={`pb-2.5 font-sans text-xs lg:text-sm font-semibold transition-all shrink-0 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#B6F084] ${
                        active
                          ? "text-[#143323] dark:text-[#B6F084] border-b-2 border-[#143323] dark:border-[#B6F084]"
                          : "text-[#68736C] dark:text-white/50 border-b-2 border-transparent hover:text-[#121A15] dark:hover:text-white"
                      }`}
                    >
                      <span>
                        <strong className="font-mono text-xs opacity-75 mr-1">
                          0{idx + 1}.
                        </strong>
                        {item.tab}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* MIDDLE: Active Content Narrative */}
              <div className="py-5 lg:py-6 flex flex-col items-start justify-center overflow-hidden">
                {/* Eyebrow Label with Access Pill */}
                <div className="flex items-center gap-2 mb-2.5 flex-wrap">
                  <span className="font-mono text-[10px] lg:text-[11px] font-semibold text-[#1F6E43] dark:text-[#B6F084] tracking-[0.12em] uppercase">
                    {activeItem.eyebrow}
                  </span>
                  {activeItem.isFree ? (
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-emerald-500/15 text-emerald-800 dark:text-emerald-300 border border-emerald-500/30">
                      GRATIS
                    </span>
                  ) : (
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono font-medium bg-[#143323]/10 dark:bg-white/10 text-[#143323] dark:text-[#B6F084] border border-[#143323]/20 dark:border-white/20">
                      SUBSCRIPTION
                    </span>
                  )}
                </div>

                {/* Editorial Title */}
                <h3 className="font-sans text-2xl lg:text-3xl xl:text-4xl font-bold text-[#121A15] dark:text-white tracking-tight leading-[1.12] max-w-xl text-balance">
                  {activeItem.title}
                </h3>

                {/* Body Text */}
                <p className="mt-3 text-xs lg:text-sm text-[#4A554E] dark:text-[#A4B3A8] leading-relaxed max-w-lg">
                  {activeItem.description}
                </p>

                {/* Key Bullet Checklist */}
                <ul className="mt-4 space-y-1.5 text-xs text-[#4A554E] dark:text-[#A4B3A8]">
                  {activeItem.checklist.slice(0, 3).map((pt, pIdx) => (
                    <li key={pIdx} className="flex items-center gap-2">
                      <CheckCircle2
                        className="w-3.5 h-3.5 text-[#1F6E43] dark:text-[#B6F084] shrink-0"
                        aria-hidden="true"
                      />
                      <span className="line-clamp-1">{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* BOTTOM: CTAs */}
              <div className="flex items-center flex-wrap gap-4 pt-3 border-t border-[#E2E6DC]/80 dark:border-white/10 shrink-0">
                <a
                  href={activeItem.primaryLink}
                  className="inline-flex items-center gap-3 px-5 lg:px-6 py-2.5 min-h-[44px] rounded-full bg-[#143323] dark:bg-[#B6F084] text-[#FFFFFF] dark:text-[#092215] font-bold text-xs lg:text-sm hover:opacity-95 active:scale-[0.98] transition-all shadow-xs focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#B6F084] group"
                >
                  <span>{activeItem.primaryLabel}</span>
                  <ArrowIcon size={13} />
                </a>

                <button
                  type="button"
                  onClick={() => setIsInspectorOpen((prev) => !prev)}
                  className="text-xs lg:text-sm font-semibold text-[#143323] dark:text-[#B6F084] border-b border-current pb-0.5 hover:opacity-80 transition-all flex items-center gap-1.5 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#B6F084]"
                >
                  <span>{activeItem.secondaryLabel}</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform ${
                      isInspectorOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
              </div>
            </div>

            {/* BOTTOM NAVIGATION: Counter & Prev/Next Arrows (Matching Framer Spec) */}
            <div className="absolute left-0 bottom-2 flex items-center gap-5 z-20">
              <div className="min-w-[44px] font-mono text-xs font-semibold text-[#68736C] dark:text-[#8E9F93]">
                {String(activeIndex + 1).padStart(2, "0")} /{" "}
                {String(items.length).padStart(2, "0")}
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={previous}
                  aria-label={
                    t.products.accordionLabels?.previous || "Layanan Sebelumnya"
                  }
                  className="w-[38px] h-[38px] rounded-full border border-black/20 dark:border-white/20 bg-white/80 dark:bg-[#0C1F15]/80 backdrop-blur-xs text-[#121A15] dark:text-white flex items-center justify-center hover:bg-white dark:hover:bg-white/10 active:scale-95 transition-all focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#B6F084]"
                >
                  <ArrowIcon direction="left" size={13} />
                </button>
                <button
                  type="button"
                  onClick={next}
                  aria-label={
                    t.products.accordionLabels?.next || "Layanan Berikutnya"
                  }
                  className="w-[38px] h-[38px] rounded-full bg-[#143323] dark:bg-[#B6F084] text-white dark:text-[#092215] flex items-center justify-center hover:opacity-90 active:scale-95 transition-all shadow-xs focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#B6F084]"
                >
                  <ArrowIcon direction="right" size={13} />
                </button>
              </div>
            </div>
          </div>

          {/* MOBILE VIEWPORT (Stacked Responsive Composition) */}
          <div className="md:hidden flex flex-col space-y-4">
            {/* Visual Photo Card */}
            <div className="relative w-full h-[220px] sm:h-[260px] rounded-[20px] overflow-hidden bg-[#C8C3BA] dark:bg-[#132A1C] shadow-md border border-[#E2E6DC] dark:border-white/10">
              <Image
                key={activeItem.image.src}
                src={activeItem.image.src}
                alt={activeItem.image.alt}
                fill
                priority
                sizes="100vw"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-black/20 pointer-events-none" />
            </div>

            {/* Overlapping Content Card */}
            <div className="w-full -mt-10 relative z-10 p-5 rounded-[22px] bg-[#F7F5F1] dark:bg-[#0C1F15] border border-[#E2E6DC] dark:border-white/15 shadow-xl space-y-4">
              {/* Tabs */}
              <div
                role="tablist"
                aria-label={t.products.heading}
                className="w-full flex items-center gap-3 overflow-x-auto no-scrollbar pb-2 border-b border-[#E2E6DC]/80 dark:border-white/10"
              >
                {items.map((item, idx) => {
                  const active = idx === activeIndex;
                  return (
                    <button
                      key={item.id}
                      role="tab"
                      aria-selected={active}
                      type="button"
                      onClick={() => goTo(idx)}
                      className={`pb-1.5 font-sans text-xs font-semibold shrink-0 transition-all ${
                        active
                          ? "text-[#143323] dark:text-[#B6F084] border-b-2 border-[#143323] dark:border-[#B6F084]"
                          : "text-[#68736C] dark:text-white/50 border-b-2 border-transparent"
                      }`}
                    >
                      0{idx + 1}. {item.tab}
                    </button>
                  );
                })}
              </div>

              {/* Eyebrow & Title */}
              <div className="space-y-1.5">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="font-mono text-[10px] font-semibold text-[#1F6E43] dark:text-[#B6F084] tracking-[0.1em] uppercase">
                    {activeItem.eyebrow}
                  </span>
                </div>
                <h3 className="font-sans text-xl font-bold text-[#121A15] dark:text-white leading-tight">
                  {activeItem.title}
                </h3>
                <p className="text-xs text-[#4A554E] dark:text-[#A4B3A8] leading-relaxed pt-1">
                  {activeItem.description}
                </p>
              </div>

              {/* Bullet checklist */}
              <ul className="space-y-1.5 text-xs text-[#4A554E] dark:text-[#A4B3A8] pt-1">
                {activeItem.checklist.slice(0, 3).map((pt, pIdx) => (
                  <li key={pIdx} className="flex items-center gap-2">
                    <CheckCircle2
                      className="w-3.5 h-3.5 text-[#1F6E43] dark:text-[#B6F084] shrink-0"
                      aria-hidden="true"
                    />
                    <span className="line-clamp-1">{pt}</span>
                  </li>
                ))}
              </ul>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col gap-2.5">
                <a
                  href={activeItem.primaryLink}
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-[#143323] dark:bg-[#B6F084] text-white dark:text-[#092215] font-bold text-xs shadow-xs"
                >
                  <span>{activeItem.primaryLabel}</span>
                  <ArrowIcon size={12} />
                </a>

                <button
                  type="button"
                  onClick={() => setIsInspectorOpen((prev) => !prev)}
                  className="w-full text-center text-xs font-semibold text-[#143323] dark:text-[#B6F084] py-1 border-b border-current inline-flex items-center justify-center gap-1.5"
                >
                  <span>{activeItem.secondaryLabel}</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform ${
                      isInspectorOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
              </div>

              {/* Bottom Mobile Navigation Counter */}
              <div className="flex items-center justify-between pt-3 border-t border-black/10 dark:border-white/10 text-xs">
                <span className="font-mono text-[#68736C] dark:text-[#8E9F93]">
                  {String(activeIndex + 1).padStart(2, "0")} /{" "}
                  {String(items.length).padStart(2, "0")}
                </span>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={previous}
                    aria-label="Previous"
                    className="w-8 h-8 rounded-full border border-black/20 dark:border-white/20 flex items-center justify-center"
                  >
                    <ArrowIcon direction="left" size={12} />
                  </button>
                  <button
                    type="button"
                    onClick={next}
                    aria-label="Next"
                    className="w-8 h-8 rounded-full bg-[#143323] dark:bg-[#B6F084] text-white dark:text-[#092215] flex items-center justify-center"
                  >
                    <ArrowIcon direction="right" size={12} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ============================================================= */}
        {/* INTERACTIVE TECHNICAL INSPECTOR DRAWER                        */}
        {/* ============================================================= */}
        {isInspectorOpen && (
          <div className="p-5 sm:p-8 lg:p-10 rounded-3xl bg-white dark:bg-[#0C1F15] border border-[#E2E6DC] dark:border-[#1F3D2B] shadow-xl space-y-6 sm:space-y-8 animate-in fade-in slide-in-from-top-4 duration-300">
            <div className="flex items-center justify-between pb-4 border-b border-[#E2E6DC] dark:border-[#1F3D2B]">
              <div className="flex items-center gap-2.5">
                <span className="font-mono text-xs font-bold text-[#143323] dark:text-[#B6F084] px-2.5 py-1 rounded bg-[#B6F084]/20">
                  0{activeIndex + 1}
                </span>
                <span className="font-sans text-base sm:text-lg font-bold text-[#121A15] dark:text-white">
                  {locale === "id"
                    ? "Panel Interaktif & Rincian Teknis"
                    : "Interactive System Inspector"}
                  : {activeItem.tab}
                </span>
              </div>
              <button
                type="button"
                onClick={() => setIsInspectorOpen(false)}
                className="w-8 h-8 rounded-full border border-[#DCD8CE] dark:border-white/15 flex items-center justify-center text-[#4A554E] dark:text-white hover:bg-[#EFECE4] dark:hover:bg-white/10 transition-colors"
                aria-label="Tutup Panel"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* SERVICE 01: MANAJEMEN TANAMAN INSPECTOR */}
            {activeIndex === 0 && (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-sans text-sm font-bold text-[#121A15] dark:text-white">
                    {t.products.management.tableTitle}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-[#143323] text-[#B6F084] text-[11px] font-mono font-semibold">
                    {t.products.management.uiBadge}
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {t.products.management.installations.map((inst, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-2xl bg-[#F7F8F3] dark:bg-[#07190F] border border-[#E2E6DC] dark:border-[#193826] space-y-3"
                    >
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <span className="font-bold text-xs sm:text-sm text-[#121A15] dark:text-white block">
                            {inst.installationName}
                          </span>
                          <span className="text-xs text-[#1E4A32] dark:text-[#7ED957] font-semibold">
                            {inst.cropName} • {inst.daysAfterPlanting}
                          </span>
                        </div>
                        <span
                          className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border shrink-0 ${
                            inst.status.includes("Normal")
                              ? "bg-[#EFECE4] dark:bg-[#132A1C] text-[#1F6E43] dark:text-[#B6F084] border-[#E2E6DC] dark:border-[#1F452E]"
                              : "bg-[#FAF9F5] dark:bg-[#2A1E14] text-[#B85D2B] dark:text-[#FFA07A] border-[#E2E6DC] dark:border-[#3D2818]"
                          }`}
                        >
                          {inst.status}
                        </span>
                      </div>

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

                      <div className="pt-2 border-t border-[#E2E6DC] dark:border-[#1F3D2B] text-[11px] text-[#4A554E] dark:text-[#A4B3A8]">
                        <strong className="text-[#121A15] dark:text-white">
                          {t.products.management.actionLabel}
                        </strong>{" "}
                        {inst.nextAction}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* SERVICE 02: ASISTEN AI & PHOTO DIAGNOSIS INSPECTOR */}
            {activeIndex === 1 && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                  {/* Left: Agronomic Caution */}
                  <div className="lg:col-span-5 p-4 rounded-2xl bg-[#F7F8F3] dark:bg-[#132A1C] border border-[#E2E6DC] dark:border-[#1F452E] space-y-2">
                    <div className="flex items-center gap-2 text-xs font-semibold text-[#B85D2B] dark:text-[#FFA07A]">
                      <ShieldAlert className="w-4 h-4 shrink-0" aria-hidden="true" />
                      <span>{t.products.aiAssistant.cautionBadge}</span>
                    </div>
                    <p className="text-xs text-[#4A554E] dark:text-[#A4B3A8] leading-relaxed">
                      {t.products.aiAssistant.cautionText}
                    </p>
                  </div>

                  {/* Right: Interactive Q&A tabs */}
                  <div className="lg:col-span-7 space-y-3">
                    <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1">
                      {t.products.aiAssistant.scenarios.map((scenario) => (
                        <button
                          key={scenario.id}
                          type="button"
                          onClick={() => setActiveAiTab(scenario.id)}
                          className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all shrink-0 ${
                            activeAiTab === scenario.id
                              ? "bg-[#143323] text-[#B6F084] dark:bg-[#1F452E] dark:text-[#B6F084] font-semibold"
                              : "bg-[#F7F8F3] dark:bg-[#0C1F15] border border-[#E2E6DC] dark:border-[#1F3D2B] text-[#4A554E] dark:text-[#A4B3A8]"
                          }`}
                        >
                          {scenario.topicLabel}
                        </button>
                      ))}
                    </div>

                    <div className="bg-[#F7F8F3] dark:bg-[#07190F] rounded-2xl border border-[#E2E6DC] dark:border-[#193826] p-4 space-y-3 text-xs">
                      <div className="font-medium text-[#121A15] dark:text-white">
                        &quot;{selectedAiScenario.farmerQuestion}&quot;
                      </div>
                      <ol className="space-y-1.5 list-decimal list-inside text-[#4A554E] dark:text-[#A4B3A8]">
                        {selectedAiScenario.diagnosticSteps.map((step, sIdx) => (
                          <li key={sIdx}>{step}</li>
                        ))}
                      </ol>
                      <div className="text-[11px] text-[#B85D2B] dark:text-[#FFA07A] bg-[#FAF9F5] dark:bg-[#2A1E14] p-2.5 rounded-lg border dark:border-[#3D2818]">
                        {selectedAiScenario.agronomicCaution}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Integrated Visual Photo Diagnosis Feature */}
                {t.products.aiAssistant.photoFeature && (
                  <div className="pt-6 border-t border-[#E2E6DC] dark:border-[#1F3D2B] space-y-4">
                    <div className="flex items-center gap-2">
                      <Camera className="w-4 h-4 text-[#1F6E43] dark:text-[#B6F084]" />
                      <span className="font-sans text-sm font-bold text-[#121A15] dark:text-white">
                        {t.products.aiAssistant.photoFeature.title}
                      </span>
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono font-medium bg-[#143323]/10 dark:bg-white/10 text-[#143323] dark:text-[#B6F084] border border-[#143323]/20 dark:border-white/20">
                        {t.products.aiAssistant.photoFeature.includedTag}
                      </span>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                      <div className="lg:col-span-7 space-y-2.5">
                        {t.products.aiAssistant.photoFeature.steps.map((st) => (
                          <div
                            key={st.step}
                            className="flex items-start gap-3 p-3 rounded-xl bg-[#F7F8F3] dark:bg-[#07190F] border border-[#E2E6DC] dark:border-[#193826] text-xs"
                          >
                            <span className="font-mono text-xs font-bold text-[#143323] dark:text-[#B6F084] px-2 py-0.5 rounded bg-[#B6F084]/20 shrink-0">
                              {st.step}
                            </span>
                            <div>
                              <strong className="text-[#121A15] dark:text-white block">
                                {st.title}
                              </strong>
                              <span className="text-[#4A554E] dark:text-[#A4B3A8]">
                                {st.desc}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="lg:col-span-5 p-4 rounded-2xl bg-[#F7F8F3] dark:bg-[#07190F] border border-[#E2E6DC] dark:border-[#193826] space-y-2 text-xs">
                        <div className="flex items-center justify-between pb-2 border-b border-[#E2E6DC] dark:border-[#193826]">
                          <span className="font-bold text-[#121A15] dark:text-white flex items-center gap-1.5">
                            <Sparkles className="w-3.5 h-3.5 text-[#1F6E43] dark:text-[#B6F084]" />
                            {t.products.aiAssistant.photoFeature.sampleAnalysis.badge}
                          </span>
                          <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-emerald-500/15 text-emerald-800 dark:text-emerald-300">
                            {t.products.aiAssistant.photoFeature.sampleAnalysis.confidence}
                          </span>
                        </div>
                        <div className="font-bold text-[#121A15] dark:text-white">
                          {t.products.aiAssistant.photoFeature.sampleAnalysis.crop}
                        </div>
                        <div className="text-[#B85D2B] dark:text-[#FFA07A] font-semibold">
                          {t.products.aiAssistant.photoFeature.sampleAnalysis.diagnosis}
                        </div>
                        <p className="text-[11px] text-[#4A554E] dark:text-[#A4B3A8]">
                          {t.products.aiAssistant.photoFeature.sampleAnalysis.symptoms}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* SERVICE 03: MARKETPLACE INSPECTOR */}
            {activeIndex === 2 && (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-sans text-sm font-bold text-[#121A15] dark:text-white">
                    {t.products.marketplace.tableTitle}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/15 text-emerald-800 dark:text-emerald-300 text-[11px] font-mono font-semibold">
                    Akses Terbuka Tanpa Berlangganan
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {t.products.marketplace.batches.map((item) => (
                    <div
                      key={item.batchCode}
                      className="p-4 rounded-2xl bg-[#F7F8F3] dark:bg-[#07190F] border border-[#E2E6DC] dark:border-[#193826] space-y-2 text-xs"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-mono font-bold text-[#143323] dark:text-[#B6F084] px-2 py-0.5 rounded bg-[#B6F084]/20">
                          {item.batchCode}
                        </span>
                        <span className="font-semibold text-[#1F6E43] dark:text-[#B6F084] bg-[#EFECE4] dark:bg-[#132A1C] px-2 py-0.5 rounded-full">
                          {item.statusLabel}
                        </span>
                      </div>
                      <div className="font-bold text-sm text-[#121A15] dark:text-white">
                        {item.commodity}
                      </div>
                      <p className="text-[#68736C] dark:text-[#8E9F93] text-[11px]">
                        {item.cultivationMethod} • {item.locationNote}
                      </p>
                      <div className="font-mono text-[11px] text-[#4A554E] dark:text-[#A4B3A8] pt-2 border-t border-[#E2E6DC] dark:border-[#1F3D2B]">
                        {item.harvestEstimate} • {item.availableVolume}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
