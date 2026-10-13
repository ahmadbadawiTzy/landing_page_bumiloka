"use client";

import React, { useState, useEffect } from "react";
import { NAV_ITEMS } from "@/data/landing-content";
import { BumiLokaLogo } from "@/components/brand/BumiLokaLogo";
import { Menu, X, ArrowUpRight } from "lucide-react";

export function Navbar() {
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

    // Check on initial load
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

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 motion-reduce:transition-none ${
        isScrolled
          ? "pt-2 sm:pt-3 px-3 sm:px-6 pointer-events-none"
          : "pt-3.5 sm:pt-5 pb-3 sm:pb-4 px-4 sm:px-6 lg:px-8 bg-transparent"
      }`}
    >
      <div
        className={`mx-auto flex items-center justify-between transition-all duration-300 motion-reduce:transition-none pointer-events-auto ${
          isScrolled
            ? "max-w-6xl px-3.5 sm:px-6 py-1.5 sm:py-2 rounded-2xl lg:rounded-full bg-white/95 backdrop-blur-md border border-[#E2E6DC] shadow-lg shadow-[#06180E]/5"
            : "max-w-7xl px-0 py-0 bg-transparent border-transparent"
        }`}
      >
        {/* Brand Identity with Enriched BumiLoka Logo */}
        <a
          href="#hero"
          className="flex items-center py-1 rounded-lg focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#B6F084]"
          aria-label="BumiLoka — Kembali ke Beranda"
        >
          <BumiLokaLogo />
        </a>

        {/* Desktop Navigation Links */}
        <nav
          aria-label="Navigasi utama"
          className="hidden lg:flex items-center gap-1 xl:gap-1.5"
        >
          {NAV_ITEMS.slice(1, 7).map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`px-3.5 py-2 rounded-full text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#B6F084] ${
                isScrolled
                  ? "text-[#161D19] hover:text-[#143323] hover:bg-[#EFECE4]"
                  : "text-white/90 hover:text-white hover:bg-white/10"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Desktop Action Button */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href="#langganan"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#B6F084] text-[#092215] text-sm font-semibold hover:bg-[#C7F69B] transition-all shadow-xs hover:shadow-sm group focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#B6F084]"
          >
            <span>Paket Langganan</span>
            <ArrowUpRight
              className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              aria-hidden="true"
            />
          </a>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-navigation-panel"
          aria-label={mobileMenuOpen ? "Tutup menu navigasi" : "Buka menu navigasi"}
          className={`lg:hidden inline-flex items-center justify-center w-11 h-11 rounded-xl transition-all focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#B6F084] ${
            isScrolled
              ? "border border-[#DCD8CE] bg-white text-[#161D19] hover:bg-[#EFECE4]"
              : "border border-white/20 bg-black/40 text-white backdrop-blur-xs hover:bg-black/60"
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
        <div className="pointer-events-auto max-w-6xl mx-auto mt-2">
          <nav
            id="mobile-navigation-panel"
            aria-label="Navigasi seluler"
            className="lg:hidden rounded-2xl border border-[#DCD8CE] bg-[#F7F8F3] px-5 pt-4 pb-6 shadow-2xl space-y-3"
          >
            <div className="flex flex-col space-y-1">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between px-3 py-3 rounded-xl text-base font-medium text-[#161D19] hover:bg-[#EFECE4] transition-colors"
                >
                  <span>{item.label}</span>
                  <ArrowUpRight className="w-4 h-4 text-[#68736C]" aria-hidden="true" />
                </a>
              ))}
            </div>
            <div className="pt-3 border-t border-[#DCD8CE]">
              <a
                href="#langganan"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full bg-[#B6F084] text-[#092215] text-sm font-semibold hover:bg-[#C7F69B] transition-colors shadow-xs"
              >
                <span>Lihat Paket Langganan (Rp45.000)</span>
                <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
