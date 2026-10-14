"use client";

import React from "react";
import { useLanguage } from "@/i18n/context";
import { Globe } from "lucide-react";

interface LanguageToggleProps {
  className?: string;
  variant?: "desktop" | "mobile";
}

export function LanguageToggle({
  className = "",
  variant = "desktop",
}: LanguageToggleProps) {
  const { locale, setLocale, t } = useLanguage();

  if (variant === "mobile") {
    return (
      <div className={`flex items-center justify-between p-2 rounded-xl bg-white/60 dark:bg-white/5 border border-[#E2E6DC] dark:border-white/10 ${className}`}>
        <span className="text-xs font-medium text-[#121A15] dark:text-white flex items-center gap-2">
          <Globe className="w-3.5 h-3.5 text-[#1F6E43] dark:text-[#B6F084]" aria-hidden="true" />
          <span>Bahasa / Language</span>
        </span>
        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={() => setLocale("id")}
            aria-pressed={locale === "id"}
            aria-label={t.common.languageNames.id}
            className={`px-2.5 py-1 text-xs font-semibold rounded-lg transition-all min-h-[36px] ${
              locale === "id"
                ? "bg-[#143323] dark:bg-[#B6F084] text-[#B6F084] dark:text-[#092215] shadow-xs"
                : "text-[#4A554E] dark:text-white/70 hover:bg-[#EFECE4] dark:hover:bg-white/10"
            }`}
          >
            ID
          </button>
          <button
            type="button"
            onClick={() => setLocale("en")}
            aria-pressed={locale === "en"}
            aria-label={t.common.languageNames.en}
            className={`px-2.5 py-1 text-xs font-semibold rounded-lg transition-all min-h-[36px] ${
              locale === "en"
                ? "bg-[#143323] dark:bg-[#B6F084] text-[#B6F084] dark:text-[#092215] shadow-xs"
                : "text-[#4A554E] dark:text-white/70 hover:bg-[#EFECE4] dark:hover:bg-white/10"
            }`}
          >
            EN
          </button>
        </div>
      </div>
    );
  }

  return (
    <div
      role="group"
      aria-label="Pilih bahasa / Select language"
      className={`inline-flex items-center p-0.5 rounded-full bg-white/80 dark:bg-white/10 border border-[#E2E6DC] dark:border-white/15 backdrop-blur-xs shadow-2xs ${className}`}
    >
      <button
        type="button"
        onClick={() => setLocale("id")}
        aria-pressed={locale === "id"}
        aria-label={t.common.languageNames.id}
        className={`px-2.5 py-1 text-xs font-semibold rounded-full transition-all focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#B6F084] ${
          locale === "id"
            ? "bg-[#143323] dark:bg-[#B6F084] text-[#B6F084] dark:text-[#092215] shadow-2xs"
            : "text-[#4A554E] dark:text-white/80 hover:text-[#121A15] dark:hover:text-white hover:bg-[#EFECE4] dark:hover:bg-white/10"
        }`}
      >
        ID
      </button>
      <button
        type="button"
        onClick={() => setLocale("en")}
        aria-pressed={locale === "en"}
        aria-label={t.common.languageNames.en}
        className={`px-2.5 py-1 text-xs font-semibold rounded-full transition-all focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#B6F084] ${
          locale === "en"
            ? "bg-[#143323] dark:bg-[#B6F084] text-[#B6F084] dark:text-[#092215] shadow-2xs"
            : "text-[#4A554E] dark:text-white/80 hover:text-[#121A15] dark:hover:text-white hover:bg-[#EFECE4] dark:hover:bg-white/10"
        }`}
      >
        EN
      </button>
    </div>
  );
}
