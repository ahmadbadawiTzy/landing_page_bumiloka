"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { Locale, TranslationDictionary } from "./types";
import { DEFAULT_LOCALE, LOCALE_STORAGE_KEY, dictionaries } from "./config";

interface LanguageContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: TranslationDictionary;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(DEFAULT_LOCALE);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(LOCALE_STORAGE_KEY) as Locale | null;
      if (saved && (saved === "id" || saved === "en")) {
        setLocaleState(saved);
        document.documentElement.lang = saved;
      }
    } catch {
      // Fallback silently if localStorage is restricted
    }
  }, []);

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    try {
      localStorage.setItem(LOCALE_STORAGE_KEY, newLocale);
      document.documentElement.lang = newLocale;
    } catch {
      // Fallback silently if localStorage is restricted
    }
  };

  const value: LanguageContextValue = {
    locale,
    setLocale,
    t: dictionaries[locale],
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextValue {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
