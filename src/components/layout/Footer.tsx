"use client";

import React from "react";
import { useLanguage } from "@/i18n/context";
import { SUBSCRIPTION_CONTACT } from "@/data/landing-content";
import { BumiLokaLogo } from "@/components/brand/BumiLokaLogo";
import { MessageCircle, Mail } from "lucide-react";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-[#F7F8F3] dark:bg-[#05130B] border-t border-[#E2E6DC] dark:border-[#193826] text-[#121A15] dark:text-[#E1EDE5] transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-14">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-10 pb-8 sm:pb-10 border-b border-[#E2E6DC] dark:border-[#193826]">
          {/* Brand & Mission Column */}
          <div className="md:col-span-5 space-y-3.5">
            <BumiLokaLogo variant="footer" />
            <p className="text-sm text-[#4A554E] dark:text-[#A4B3A8] leading-relaxed max-w-sm">
              {t.footer.tagline}
            </p>
            <div className="flex flex-wrap items-center gap-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#EFECE4] dark:bg-[#132A1C] border border-[#E2E6DC] dark:border-[#1F452E] text-xs text-[#143323] dark:text-[#B6F084] font-medium">
                <span>{t.footer.subscriptionBadge}</span>
              </div>
              {t.footer.marketplaceBadge && (
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-500/10 dark:bg-emerald-500/15 border border-emerald-500/30 text-xs text-emerald-800 dark:text-emerald-300 font-medium">
                  <span>{t.footer.marketplaceBadge}</span>
                </div>
              )}
            </div>
          </div>

          {/* Official Contact Column */}
          <div className="md:col-span-4 space-y-3">
            <h2 className="font-mono text-xs uppercase tracking-wider text-[#143323] dark:text-[#B6F084] font-semibold">
              {t.footer.contactHeading}
            </h2>
            <div className="space-y-3 text-sm">
              <div>
                <a
                  href={SUBSCRIPTION_CONTACT.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#121A15] dark:text-white hover:text-[#1F6E43] dark:hover:text-[#B6F084] font-semibold transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#143323] rounded-xs"
                >
                  <MessageCircle className="w-4 h-4 text-[#1F6E43] dark:text-[#B6F084] shrink-0" aria-hidden="true" />
                  <span>{SUBSCRIPTION_CONTACT.phoneDisplay}</span>
                </a>
                <p className="text-xs text-[#68736C] dark:text-[#8E9F93] pl-6 mt-0.5">
                  {t.footer.whatsappContactNote}
                </p>
              </div>

              <div>
                <a
                  href={SUBSCRIPTION_CONTACT.emailHref}
                  className="inline-flex items-center gap-2 text-[#121A15] dark:text-white hover:text-[#1F6E43] dark:hover:text-[#B6F084] font-semibold transition-colors break-all focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#143323] rounded-xs"
                >
                  <Mail className="w-4 h-4 text-[#1F6E43] dark:text-[#B6F084] shrink-0" aria-hidden="true" />
                  <span>{SUBSCRIPTION_CONTACT.email}</span>
                </a>
                <p className="text-xs text-[#68736C] dark:text-[#8E9F93] pl-6 mt-0.5">
                  {t.footer.emailContactNote}
                </p>
              </div>
            </div>
          </div>

          {/* Navigation Links Column */}
          <div className="md:col-span-3 space-y-3">
            <h2 className="font-mono text-xs uppercase tracking-wider text-[#143323] dark:text-[#B6F084] font-semibold">
              {t.footer.navHeading}
            </h2>
            <ul className="grid grid-cols-2 gap-1.5 text-sm">
              {t.nav.items.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-[#4A554E] dark:text-[#A4B3A8] hover:text-[#143323] dark:hover:text-white transition-colors py-1 inline-block focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#143323] rounded-xs"
                  >
                    <span>{item.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Editorial Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-[#68736C] dark:text-[#8E9F93]">
          <p>
            © {new Date().getFullYear()} {t.footer.copyrightNotice}
          </p>
          <p className="font-mono text-[11px] text-[#4A554E] dark:text-[#A4B3A8]">
            {t.footer.motto}
          </p>
        </div>
      </div>
    </footer>
  );
}
