"use client";

import React from "react";
import { ThemeProvider } from "@/theme/ThemeContext";
import { LanguageProvider } from "@/i18n/context";

export function AppProviders({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <LanguageProvider>{children}</LanguageProvider>
    </ThemeProvider>
  );
}
