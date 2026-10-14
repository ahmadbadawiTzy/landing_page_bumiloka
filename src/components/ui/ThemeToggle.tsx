"use client";

import React from "react";
import { useTheme, ThemeMode } from "@/theme/ThemeContext";
import { useLanguage } from "@/i18n/context";
import { Sun, Moon, Monitor } from "lucide-react";

interface ThemeToggleProps {
  className?: string;
  variant?: "desktop" | "mobile";
}

export function ThemeToggle({
  className = "",
  variant = "desktop",
}: ThemeToggleProps) {
  const { theme, setTheme } = useTheme();
  const { t } = useLanguage();

  const options: Array<{ mode: ThemeMode; label: string; icon: React.ReactNode }> = [
    {
      mode: "light",
      label: t.common.themeNames.light,
      icon: <Sun className="w-3.5 h-3.5" aria-hidden="true" />,
    },
    {
      mode: "dark",
      label: t.common.themeNames.dark,
      icon: <Moon className="w-3.5 h-3.5" aria-hidden="true" />,
    },
    {
      mode: "system",
      label: t.common.themeNames.system,
      icon: <Monitor className="w-3.5 h-3.5" aria-hidden="true" />,
    },
  ];

  if (variant === "mobile") {
    return (
      <div className={`flex items-center justify-between p-2 rounded-xl bg-white/60 dark:bg-white/5 border border-[#E2E6DC] dark:border-white/10 ${className}`}>
        <span className="text-xs font-medium text-[#121A15] dark:text-white flex items-center gap-2">
          <Sun className="w-3.5 h-3.5 text-[#1F6E43] dark:text-[#B6F084]" aria-hidden="true" />
          <span>Tema / Theme</span>
        </span>
        <div className="flex items-center gap-1" role="group" aria-label="Pilih tema tampilan">
          {options.map((opt) => (
            <button
              key={opt.mode}
              type="button"
              onClick={() => setTheme(opt.mode)}
              aria-pressed={theme === opt.mode}
              aria-label={opt.label}
              title={opt.label}
              className={`p-2 rounded-lg transition-all min-h-[36px] min-w-[36px] flex items-center justify-center ${
                theme === opt.mode
                  ? "bg-[#143323] dark:bg-[#B6F084] text-[#B6F084] dark:text-[#092215] shadow-xs"
                  : "text-[#4A554E] dark:text-white/70 hover:bg-[#EFECE4] dark:hover:bg-white/10"
              }`}
            >
              {opt.icon}
            </button>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div
      role="group"
      aria-label="Pilih tema tampilan / Select theme"
      className={`inline-flex items-center p-0.5 rounded-full bg-white/80 dark:bg-white/10 border border-[#E2E6DC] dark:border-white/15 backdrop-blur-xs shadow-2xs ${className}`}
    >
      {options.map((opt) => {
        const isSelected = theme === opt.mode;
        return (
          <button
            key={opt.mode}
            type="button"
            onClick={() => setTheme(opt.mode)}
            aria-pressed={isSelected}
            aria-label={opt.label}
            title={opt.label}
            className={`w-7 h-7 flex items-center justify-center rounded-full transition-all focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#B6F084] ${
              isSelected
                ? "bg-[#143323] dark:bg-[#B6F084] text-[#B6F084] dark:text-[#092215] shadow-2xs"
                : "text-[#4A554E] dark:text-white/80 hover:text-[#121A15] dark:hover:text-white hover:bg-[#EFECE4] dark:hover:bg-white/10"
            }`}
          >
            {opt.icon}
          </button>
        );
      })}
    </div>
  );
}
