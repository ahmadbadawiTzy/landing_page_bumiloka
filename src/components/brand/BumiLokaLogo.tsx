import React from "react";
import Image from "next/image";

interface BumiLokaLogoProps {
  className?: string;
  variant?: "default" | "light" | "footer";
  compactOnMobile?: boolean;
  showSubtitle?: boolean;
}

/**
 * BumiLoka Brand Identity Lockup
 * Uses the official transparent WebP brand logo asset directly from public/images/.
 * Preserves the original aspect ratio, typography, and brand colors without distortion.
 */
export function BumiLokaLogo({
  className = "",
  variant = "default",
}: BumiLokaLogoProps) {
  const isFooter = variant === "footer";

  return (
    <div className={`inline-flex items-center ${className}`}>
      <div
        className={`relative overflow-hidden shrink-0 flex items-center justify-center transition-all ${
          isFooter
            ? "h-12 sm:h-14 md:h-16"
            : "h-10 sm:h-11.5 md:h-[50px] rounded-xl bg-white/92 backdrop-blur-xs px-2.5 py-1 border border-white/30 shadow-2xs hover:shadow-xs"
        }`}
      >
        <Image
          src="/images/bumiloka-logo.webp"
          alt="BumiLoka — Membangun Negeri dari Bumi dan Tani"
          width={1024}
          height={572}
          priority
          className="h-full w-auto object-contain"
        />
      </div>
    </div>
  );
}

/**
 * BumiLoka Brand Mark helper
 * Compatible with components requesting a compact emblem representation.
 */
export function BumiLokaMark({
  className = "w-8 h-8",
}: {
  className?: string;
  size?: number;
  variant?: "emerald" | "light" | "monochrome";
}) {
  return (
    <div
      className={`relative inline-flex items-center justify-center overflow-hidden shrink-0 ${className}`}
    >
      <Image
        src="/images/bumiloka-logo.webp"
        alt="BumiLoka"
        width={1024}
        height={572}
        className="w-full h-full object-contain"
      />
    </div>
  );
}
