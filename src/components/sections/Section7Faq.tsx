"use client";

import React, { useState } from "react";
import { FAQ_ITEMS } from "@/data/landing-content";
import { Plus, Minus, HelpCircle, ShieldAlert } from "lucide-react";

export function Section7Faq() {
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({
    "faq-apa-itu-bumiloka": true,
    "faq-biaya-langganan": true,
    "faq-batasan-ai-agronomi": true,
  });
  const [selectedCategory, setSelectedCategory] = useState<string>("Semua");

  const categories = [
    "Semua",
    "Umum",
    "Langganan",
    "Marketplace",
    "Pengelolaan Budidaya",
    "Asisten AI",
  ];

  const filteredFaqs =
    selectedCategory === "Semua"
      ? FAQ_ITEMS
      : FAQ_ITEMS.filter((item) => item.category === selectedCategory);

  const toggleItem = (id: string) => {
    setOpenItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const expandAll = () => {
    const allOpen: Record<string, boolean> = {};
    FAQ_ITEMS.forEach((f) => {
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
      className="w-full relative py-14 sm:py-20 lg:py-28 bg-[#F7F8F3] border-b border-[#E2E6DC] overflow-hidden"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12">
        {/* Section Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EFECE4] border border-[#E2E6DC]">
            <span className="font-mono text-xs font-semibold text-[#1F6E43] tracking-wide uppercase">
              Tanya Jawab &amp; Bantuan
            </span>
          </div>
          <h2
            id="faq-heading"
            className="font-sans text-2xl sm:text-4xl lg:text-5xl font-bold text-[#121A15] tracking-tight leading-[1.18] sm:leading-[1.15]"
          >
            Pertanyaan yang Sering Diajukan
          </h2>
          <p className="text-base sm:text-lg text-[#4A554E] max-w-2xl mx-auto leading-relaxed">
            Informasi mengenai layanan BumiLoka, paket langganan Rp45.000/bulan, batasan asisten AI, dan status pengembangan website.
          </p>
        </div>

        {/* Filter and Accordion Global Controls */}
        <div className="mb-6 sm:mb-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Category Tabs - smooth touch scrolling on mobile */}
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1 w-full sm:w-auto sm:flex-wrap sm:justify-center -mx-4 px-4 sm:mx-0 sm:px-0">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 sm:px-4 py-2 rounded-full text-xs font-medium transition-all shrink-0 min-h-[40px] touch-press ${
                  selectedCategory === cat
                    ? "bg-[#143323] text-[#B6F084] font-semibold shadow-2xs"
                    : "bg-white border border-[#E2E6DC] text-[#4A554E] hover:bg-[#EFECE4]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Expand/Collapse Actions */}
          <div className="flex items-center justify-between sm:justify-end gap-2 text-xs w-full sm:w-auto pt-1 sm:pt-0">
            <button
              type="button"
              onClick={expandAll}
              className="text-[#143323] font-semibold hover:underline px-2 py-1 min-h-[36px] flex items-center"
            >
              Buka Semua
            </button>
            <span className="text-[#DCD8CE]">•</span>
            <button
              type="button"
              onClick={collapseAll}
              className="text-[#68736C] hover:underline px-2 py-1 min-h-[36px] flex items-center"
            >
              Tutup Semua
            </button>
          </div>
        </div>

        {/* Accordion List */}
        <div className="space-y-3" role="region" aria-label="Daftar Pertanyaan">
          {filteredFaqs.map((faq) => {
            const isOpen = !!openItems[faq.id];
            const isDisclaimer = faq.id === "faq-batasan-ai-agronomi";

            return (
              <div
                key={faq.id}
                className={`rounded-2xl border transition-all ${
                  isDisclaimer
                    ? "bg-[#FAF9F5] border-[#B85D2B]/40 shadow-2xs"
                    : "bg-white border-[#E2E6DC] hover:border-[#143323] shadow-xs"
                }`}
              >
                <h3>
                  <button
                    type="button"
                    onClick={() => toggleItem(faq.id)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${faq.id}`}
                    id={`faq-question-${faq.id}`}
                    className="w-full text-left p-4 sm:p-6 flex items-start justify-between gap-4 font-sans text-base font-bold text-[#121A15] focus-visible:outline-2 focus-visible:outline-[#143323] rounded-2xl min-h-[52px] active:bg-[#FAF9F5] touch-press"
                  >
                    <span className="flex items-start gap-3">
                      {isDisclaimer ? (
                        <ShieldAlert
                          className="w-5 h-5 text-[#B85D2B] shrink-0 mt-0.5"
                          aria-hidden="true"
                        />
                      ) : (
                        <HelpCircle
                          className="w-5 h-5 text-[#1E4A32] shrink-0 mt-0.5"
                          aria-hidden="true"
                        />
                      )}
                      <span className="leading-snug">{faq.question}</span>
                    </span>
                    <span className="w-7 h-7 rounded-full bg-[#F7F8F3] text-[#143323] flex items-center justify-center shrink-0 mt-0.5 transition-transform">
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
                    className="px-4 pb-5 sm:px-6 sm:pb-7 pt-1 text-sm text-[#4A554E] leading-relaxed border-t border-[#E2E6DC]"
                  >
                    <p className="pl-0 sm:pl-8">{faq.answer}</p>

                    {faq.highlightNote && (
                      <div className="mt-3 sm:ml-8 p-3 rounded-xl bg-[#FAF9F5] border border-[#E2E6DC] text-xs font-medium text-[#B85D2B]">
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
