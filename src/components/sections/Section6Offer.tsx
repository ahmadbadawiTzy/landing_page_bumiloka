"use client";

import React from "react";
import Image from "next/image";
import { useLanguage } from "@/i18n/context";
import { SUBSCRIPTION_CONTACT } from "@/data/landing-content";
import { Check, MessageCircle, Mail, ShieldCheck } from "lucide-react";

export function Section6Offer() {
  const { t } = useLanguage();

  return (
    <section
      id="langganan"
      aria-labelledby="langganan-heading"
      className="w-full relative py-14 sm:py-20 lg:py-28 bg-[#06180E] dark:bg-[#030E07] text-white border-b border-white/10 dark:border-white/5 overflow-hidden transition-colors duration-200"
    >
      {/* Full-width subtle photographic background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src="/images/hydroponic-greenhouse.jpg"
          alt="Greenhouse hidroponik modern dengan talang tanaman sayur tertata rapi"
          fill
          sizes="100vw"
          className="object-cover object-center opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#06180E]/95 via-[#0A2617]/90 to-[#06180E]/95 dark:from-[#030E07]/95 dark:via-[#061A0F]/90 dark:to-[#030E07]/95" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 border border-white/15 backdrop-blur-xs">
            <span className="font-mono text-xs font-semibold text-[#B6F084] tracking-wide uppercase">
              {t.offer.badge}
            </span>
          </div>
          <h2
            id="langganan-heading"
            className="font-sans text-2xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-[1.18] sm:leading-[1.15]"
          >
            {t.offer.heading}
          </h2>
          <p className="text-base sm:text-lg text-white/80 leading-relaxed max-w-2xl mx-auto font-normal">
            {t.offer.description}
          </p>
        </div>

        {/* Minimalist Single Subscription Showcase */}
        <div className="max-w-xl mx-auto">
          <div className="rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 p-5 sm:p-8 lg:p-10 shadow-2xl space-y-6 sm:space-y-8">
            {/* Header / Identity */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/15">
              <div>
                <span className="font-mono text-xs font-bold text-[#B6F084] uppercase tracking-wider block">
                  {t.offer.planBadge}
                </span>
                <h3 className="font-sans text-2xl sm:text-3xl font-bold text-white mt-1">
                  {t.offer.planName}
                </h3>
              </div>
              <div className="text-left sm:text-right">
                <div className="flex items-baseline gap-1 sm:justify-end">
                  <span className="font-mono text-3xl sm:text-4xl font-bold text-[#B6F084] tracking-tight">
                    {t.offer.price}
                  </span>
                  <span className="font-mono text-sm sm:text-base text-white/80 font-medium">
                    {t.offer.priceDescriptor}
                  </span>
                </div>
                <span className="text-xs font-sans text-white/70 block mt-0.5">
                  {t.offer.priceBillingSub}
                </span>
              </div>
            </div>

            {/* Description */}
            <p className="text-sm sm:text-base text-white/85 leading-relaxed font-normal">
              {t.offer.planDescription}
            </p>

            {/* Included Capabilities */}
            <div className="space-y-3 pt-1">
              <span className="font-mono text-xs font-semibold text-white/95 block uppercase tracking-wide">
                {t.offer.featuresLabel}
              </span>
              <ul className="space-y-3">
                {t.offer.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-white/90">
                    <span className="w-5 h-5 rounded-full bg-[#B6F084]/20 text-[#B6F084] flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 stroke-[3]" aria-hidden="true" />
                    </span>
                    <span className="leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Subscription Contact Channel */}
            <div className="pt-2 border-t border-white/15 space-y-3.5">
              <div className="space-y-1">
                <span className="font-mono text-xs font-semibold text-[#B6F084] uppercase tracking-wider block">
                  {t.offer.howToSubscribeLabel}
                </span>
                <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
                  {t.offer.howToSubscribeText}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2.5 pt-1">
                <a
                  href={SUBSCRIPTION_CONTACT.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl sm:rounded-full bg-[#B6F084] text-[#092215] font-bold text-sm sm:text-base hover:bg-[#C7F69B] active:scale-[0.98] transition-all shadow-md min-h-[48px] focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-white"
                >
                  <MessageCircle className="w-4 h-4 shrink-0" aria-hidden="true" />
                  <span>{t.offer.whatsappCta}</span>
                </a>

                <a
                  href={SUBSCRIPTION_CONTACT.emailHref}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 min-h-[46px] rounded-xl sm:rounded-full bg-white/10 hover:bg-white/15 active:scale-[0.98] border border-white/20 text-white font-medium text-xs sm:text-sm transition-all backdrop-blur-xs focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#B6F084]"
                >
                  <Mail className="w-4 h-4 shrink-0 text-white/80" aria-hidden="true" />
                  <span className="break-all">{t.offer.emailCtaPrefix} ({SUBSCRIPTION_CONTACT.email})</span>
                </a>
              </div>

              {/* Contact Identity Confirmation */}
              <div className="bg-white/5 border border-white/10 rounded-xl p-3 text-xs text-white/80 space-y-1">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 text-[11px] font-mono">
                  <span>{t.offer.whatsappContactLabel}: <strong className="text-white">{SUBSCRIPTION_CONTACT.phoneDisplay}</strong></span>
                  <span className="text-white/60">({SUBSCRIPTION_CONTACT.whatsappContactName})</span>
                </div>
              </div>

              {/* Billing Interval Confirmation Note */}
              <p className="text-center font-mono text-[11px] text-white/70">
                *{t.offer.billingIntervalNote}
              </p>
            </div>

            {/* Marketplace Free Notice */}
            {t.offer.marketplaceFreeNote && (
              <div className="p-3.5 sm:p-4 rounded-2xl bg-[#092215]/80 border border-emerald-500/30 flex items-start gap-3">
                <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 shrink-0 mt-0.5">
                  MARKETPLACE
                </span>
                <div className="space-y-1">
                  <span className="text-xs font-bold text-[#B6F084] block">
                    {t.offer.marketplaceFreeNote.title}
                  </span>
                  <p className="text-xs text-white/90 leading-relaxed">
                    {t.offer.marketplaceFreeNote.description}
                  </p>
                </div>
              </div>
            )}

            {/* Honest Disclaimer */}
            <div className="pt-2">
              <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 flex items-start gap-3">
                <ShieldCheck className="w-4 h-4 text-[#B6F084] shrink-0 mt-0.5" aria-hidden="true" />
                <p className="text-xs text-white/80 leading-relaxed">
                  {t.offer.transparencyNote}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
