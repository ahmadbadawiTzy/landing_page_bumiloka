"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { resolveThemePreference, type ResolvedTheme } from "./timeTheme";

export type ThemeMode = ResolvedTheme;
export type { ResolvedTheme };

interface ThemeContextValue {
  theme: ThemeMode;
  setTheme: (theme: ThemeMode) => void;
}

const THEME_STORAGE_KEY = "bumiloka-theme";

const ThemeContext = createContext<ThemeContextValue | null>(null);

function applyThemeClass(theme: ThemeMode) {
  if (typeof document === "undefined") return;
  document.documentElement.classList.toggle("dark", theme === "dark");
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  // "light" is the SSR-safe placeholder so server and client render the same
  // markup. The inline anti-FOUC script in `src/app/layout.tsx` already
  // applied the correct `.dark` class before first paint, so there is no
  // flash. The mount effect below syncs state with the stored/time-based
  // theme (legacy stored "system" values resolve to the time-based default).
  const [theme, setThemeState] = useState<ThemeMode>("light");

  useEffect(() => {
    let stored: string | null = null;
    try {
      stored = localStorage.getItem(THEME_STORAGE_KEY);
    } catch {
      // localStorage unavailable — fall through to the time-based default
    }
    const initialTheme = resolveThemePreference(stored);
    setThemeState(initialTheme);
    applyThemeClass(initialTheme);
  }, []);

  const setTheme = (newTheme: ThemeMode) => {
    setThemeState(newTheme);
    try {
      localStorage.setItem(THEME_STORAGE_KEY, newTheme);
    } catch {
      // ignore — the theme still applies for this session
    }
    applyThemeClass(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme(): ThemeContextValue {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
