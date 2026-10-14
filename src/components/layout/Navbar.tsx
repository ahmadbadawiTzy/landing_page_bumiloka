"use client";

import React, { useState, useEffect } from "react";
import { useLanguage } from "@/i18n/context";
import { BumiLokaLogo } from "@/components/brand/BumiLokaLogo";
import { LanguageToggle } from "@/components/ui/LanguageToggle";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { Menu, X, ArrowUpRight } from "lucide-react";

export function Navbar() {
  const { t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 28);
          ticking = false;
        });
        ticking = true;
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [mobileMenuOpen]);

  return (
    <>
      {/* Mobile Drawer Backdrop Overlay */}
      {mobileMenuOpen && (
        <div
          onClick={() => setMobileMenuOpen(false)}
          className="fixed inset-0 bg-black/60 backdrop-blur-xs z-40 lg:hidden transition-opacity motion-reduce:transition-none"
          aria-hidden="true"
        />
      )}

      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 motion-reduce:transition-none ${
          isScrolled
            ? "pt-2 sm:pt-3 px-4 sm:px-6 pointer-events-none"
            : "pt-3 sm:pt-5 pb-3 sm:pb-4 px-4 sm:px-6 lg:px-8 bg-transparent"
        }`}
      >
        <div
          className={`mx-auto flex items-center justify-between transition-all duration-300 motion-reduce:transition-none pointer-events-auto ${
            isScrolled
              ? "max-w-6xl px-3.5 sm:px-5 py-1.5 sm:py-2 rounded-2xl lg:rounded-full bg-white/95 dark:bg-[#071F13]/95 backdrop-blur-md border border-[#E2E6DC] dark:border-white/15 shadow-lg shadow-[#06180E]/5"
              : "max-w-7xl px-0 py-0 bg-transparent border-transparent"
          }`}
        >
          {/* Brand Identity with Official BumiLoka Logo */}
          <a
            href="#hero"
            className="flex items-center py-1 rounded-lg focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#B6F084]"
            aria-label={t.nav.homeAria}
          >
            <BumiLokaLogo />
          </a>

          {/* Desktop Navigation Links */}
          <nav
            aria-label="Navigasi utama"
            className="hidden lg:flex items-center gap-0.5 xl:gap-1"
          >
            {t.nav.items.slice(1, 7).map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`px-3 py-1.5 rounded-full text-xs xl:text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#B6F084] ${
                  isScrolled
                    ? "text-[#161D19] dark:text-white/90 hover:text-[#143323] dark:hover:text-[#B6F084] hover:bg-[#EFECE4] dark:hover:bg-white/10"
                    : "text-white/90 hover:text-white hover:bg-white/10"
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Desktop Controls Cluster: Language + Theme + CTA */}
          <div className="hidden lg:flex items-center gap-2 xl:gap-2.5">
            <LanguageToggle variant="desktop" />
            <ThemeToggle variant="desktop" />

            <a
              href="#langganan"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#B6F084] text-[#092215] text-xs xl:text-sm font-bold hover:bg-[#C7F69B] active:scale-[0.98] transition-all shadow-xs hover:shadow-sm focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#B6F084]"
            >
              <span>{t.nav.cta}</span>
              <ArrowUpRight
                className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                aria-hidden="true"
              />
            </a>
          </div>

          {/* Mobile Right Hamburger Button: Exactly ONE control, comfortable 44x44px touch target */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation-panel"
            aria-label={mobileMenuOpen ? t.nav.menuCloseAria : t.nav.menuOpenAria}
            className={`flex lg:hidden items-center justify-center w-11 h-11 min-w-[44px] min-h-[44px] rounded-xl transition-all active:scale-95 touch-press focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#B6F084] ${
              isScrolled
                ? "border border-[#DCD8CE] dark:border-white/15 bg-white/95 dark:bg-[#0C1F15] text-[#161D19] dark:text-white hover:bg-[#EFECE4] dark:hover:bg-white/10 shadow-2xs"
                : "border border-white/25 bg-black/40 text-white backdrop-blur-xs hover:bg-black/60 shadow-2xs"
            }`}
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5" aria-hidden="true" />
            ) : (
              <Menu className="w-5 h-5" aria-hidden="true" />
            )}
          </button>
        </div>

        {/* Mobile Navigation Panel */}
        {mobileMenuOpen && (
          <div className="pointer-events-auto max-w-6xl mx-auto mt-2 px-1">
            <nav
              id="mobile-navigation-panel"
              aria-label="Navigasi seluler"
              className="lg:hidden rounded-2xl border border-[#DCD8CE] dark:border-white/15 bg-white/98 dark:bg-[#071F13]/98 backdrop-blur-xl p-3 sm:p-4 shadow-2xl space-y-1 max-h-[calc(100dvh-5.5rem)] overflow-y-auto overscroll-contain no-scrollbar"
            >
              {/* Essential navigation links */}
              {t.nav.items.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between px-4 py-3 min-h-[44px] rounded-xl text-sm font-medium text-[#161D19] dark:text-white/90 hover:bg-[#F2F5ED] dark:hover:bg-white/10 active:bg-[#EAE6DC] dark:active:bg-white/15 active:scale-[0.99] touch-press transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#B6F084]"
                >
                  <div className="flex items-center gap-2.5">
                    <span className="font-mono text-xs text-[#1F6E43] dark:text-[#B6F084] font-semibold w-5">
                      {item.sectionIndex}
                    </span>
                    <span>{item.label}</span>
                  </div>
                  <ArrowUpRight
                    className="w-4 h-4 text-[#68736C] dark:text-white/50"
                    aria-hidden="true"
                  />
                </a>
              ))}
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
