"use client";

import React, { useState } from "react";
import { useLanguage } from "@/i18n/context";
import { Plus, Minus, HelpCircle, ShieldAlert } from "lucide-react";

export function Section7Faq() {
  const { t } = useLanguage();
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({
    "faq-apa-itu-bumiloka": true,
    "faq-marketplace-langganan": true,
    "faq-biaya-langganan": true,
    "faq-diagnosis-foto-biaya": true,
  });
  const [selectedCategoryKey, setSelectedCategoryKey] = useState<string>("Semua");

  const categoryKeys = Object.keys(t.faq.categories);

  const filteredFaqs =
    selectedCategoryKey === "Semua"
      ? t.faq.items
      : t.faq.items.filter((item) => item.category === selectedCategoryKey);

  const toggleItem = (id: string) => {
    setOpenItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const expandAll = () => {
    const allOpen: Record<string, boolean> = {};
    t.faq.items.forEach((f) => {
      allOpen[f.id] = true;
    });
    setOpenItems(allOpen);
  };

  const collapseAll = () => {
    setOpenItems({});
  };

  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="w-full relative py-14 sm:py-20 lg:py-28 bg-[#F7F8F3] dark:bg-[#07190F] border-b border-[#E2E6DC] dark:border-[#193826] overflow-hidden transition-colors duration-200"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12">
        {/* Section Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EFECE4] dark:bg-[#132A1C] border border-[#E2E6DC] dark:border-[#1F452E]">
            <span className="font-mono text-xs font-semibold text-[#1F6E43] dark:text-[#B6F084] tracking-wide uppercase">
              {t.faq.badge}
            </span>
          </div>
          <h2
            id="faq-heading"
            className="font-sans text-2xl sm:text-4xl lg:text-5xl font-bold text-[#121A15] dark:text-white tracking-tight leading-[1.18] sm:leading-[1.15]"
          >
            {t.faq.heading}
          </h2>
          <p className="text-base sm:text-lg text-[#4A554E] dark:text-[#A4B3A8] max-w-2xl mx-auto leading-relaxed">
            {t.faq.description}
          </p>
        </div>

        {/* Filter and Accordion Global Controls */}
        <div className="mb-6 sm:mb-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Category Tabs - smooth touch scrolling on mobile */}
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1 w-full sm:w-auto sm:flex-wrap sm:justify-center -mx-4 px-4 sm:mx-0 sm:px-0">
            {categoryKeys.map((key) => {
              const label = t.faq.categories[key] || key;
              return (
                <button
                  key={key}
                  type="button"
                  onClick={() => setSelectedCategoryKey(key)}
                  className={`px-3.5 sm:px-4 py-2 rounded-full text-xs font-medium transition-all shrink-0 min-h-[40px] touch-press ${
                    selectedCategoryKey === key
                      ? "bg-[#143323] text-[#B6F084] dark:bg-[#1F452E] dark:text-[#B6F084] font-semibold shadow-2xs"
                      : "bg-white dark:bg-[#0C1F15] border border-[#E2E6DC] dark:border-[#1F3D2B] text-[#4A554E] dark:text-[#A4B3A8] hover:bg-[#EFECE4] dark:hover:bg-[#132A1C]"
                  }`}
                >
                  {label}
                </button>
              );
            })}
          </div>

          {/* Expand/Collapse Actions */}
          <div className="flex items-center justify-between sm:justify-end gap-2 text-xs w-full sm:w-auto pt-1 sm:pt-0">
            <button
              type="button"
              onClick={expandAll}
              className="text-[#143323] dark:text-[#B6F084] font-semibold hover:underline px-2 py-1 min-h-[36px] flex items-center"
            >
              {t.faq.expandAll}
            </button>
            <span className="text-[#DCD8CE] dark:text-white/20">•</span>
            <button
              type="button"
              onClick={collapseAll}
              className="text-[#68736C] dark:text-[#8E9F93] hover:underline px-2 py-1 min-h-[36px] flex items-center"
            >
              {t.faq.collapseAll}
            </button>
          </div>
        </div>

        {/* Accordion List */}
        <div className="space-y-3" role="region" aria-label={t.faq.heading}>
          {filteredFaqs.map((faq) => {
            const isOpen = !!openItems[faq.id];
            const isDisclaimer = faq.id === "faq-batasan-ai-agronomi";

            return (
              <div
                key={faq.id}
                className={`rounded-2xl border transition-all ${
                  isDisclaimer
                    ? "bg-[#FAF9F5] dark:bg-[#1C140C] border-[#B85D2B]/40 dark:border-[#B85D2B]/50 shadow-2xs"
                    : "bg-white dark:bg-[#0C1F15] border-[#E2E6DC] dark:border-[#1F3D2B] hover:border-[#143323] dark:hover:border-[#38764B] shadow-xs"
                }`}
              >
                <h3>
                  <button
                    type="button"
                    onClick={() => toggleItem(faq.id)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${faq.id}`}
                    id={`faq-question-${faq.id}`}
                    className="w-full text-left p-4 sm:p-6 flex items-start justify-between gap-4 font-sans text-base font-bold text-[#121A15] dark:text-white focus-visible:outline-2 focus-visible:outline-[#143323] rounded-2xl min-h-[52px] active:bg-[#FAF9F5] dark:active:bg-[#132A1C] touch-press"
                  >
                    <span className="flex items-start gap-3">
                      {isDisclaimer ? (
                        <ShieldAlert
                          className="w-5 h-5 text-[#B85D2B] dark:text-[#FFA07A] shrink-0 mt-0.5"
                          aria-hidden="true"
                        />
                      ) : (
                        <HelpCircle
                          className="w-5 h-5 text-[#1E4A32] dark:text-[#B6F084] shrink-0 mt-0.5"
                          aria-hidden="true"
                        />
                      )}
                      <span className="leading-snug">{faq.question}</span>
                    </span>
                    <span className="w-7 h-7 rounded-full bg-[#F7F8F3] dark:bg-[#132A1C] text-[#143323] dark:text-[#B6F084] flex items-center justify-center shrink-0 mt-0.5 transition-transform">
                      {isOpen ? (
                        <Minus className="w-3.5 h-3.5" aria-hidden="true" />
                      ) : (
                        <Plus className="w-3.5 h-3.5" aria-hidden="true" />
                      )}
                    </span>
                  </button>
                </h3>

                {isOpen && (
                  <div
                    id={`faq-answer-${faq.id}`}
                    role="region"
                    aria-labelledby={`faq-question-${faq.id}`}
                    className="px-4 pb-5 sm:px-6 sm:pb-7 pt-1 text-sm text-[#4A554E] dark:text-[#A4B3A8] leading-relaxed border-t border-[#E2E6DC] dark:border-[#1F3D2B]"
                  >
                    <p className="pl-0 sm:pl-8">{faq.answer}</p>

                    {faq.highlightNote && (
                      <div className="mt-3 sm:ml-8 p-3 rounded-xl bg-[#FAF9F5] dark:bg-[#2A1E14] border border-[#E2E6DC] dark:border-[#3D2818] text-xs font-medium text-[#B85D2B] dark:text-[#FFA07A]">
                        {faq.highlightNote}
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
