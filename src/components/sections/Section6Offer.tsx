import React from "react";
import Image from "next/image";
import { SUBSCRIPTION_PLAN } from "@/data/landing-content";
import { Check, ArrowRight, ShieldCheck } from "lucide-react";

export function Section6Offer() {
  return (
    <section
      id="langganan"
      aria-labelledby="langganan-heading"
      className="w-full relative py-20 sm:py-28 lg:py-32 bg-[#06180E] text-white border-b border-white/10 overflow-hidden"
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
        <div className="absolute inset-0 bg-gradient-to-b from-[#06180E]/95 via-[#0A2617]/90 to-[#06180E]/95" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 border border-white/15 backdrop-blur-xs">
            <span className="font-mono text-xs font-semibold text-[#B6F084] tracking-wide uppercase">
              Penawaran &amp; Biaya
            </span>
          </div>
          <h2
            id="langganan-heading"
            className="font-sans text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-[1.15]"
          >
            Satu Paket Lengkap untuk Seluruh Kebutuhan Kebun
          </h2>
          <p className="text-base sm:text-lg text-white/80 leading-relaxed max-w-2xl mx-auto font-normal">
            BumiLoka dirancang sederhana tanpa skema berbelit. Seluruh layanan inti dapat diakses dalam satu paket transparan.
          </p>
        </div>

        {/* Minimalist Single Subscription Showcase */}
        <div className="max-w-xl mx-auto">
          <div className="rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 p-8 sm:p-12 shadow-2xl space-y-8">
            {/* Header / Identity */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/15">
              <div>
                <span className="font-mono text-xs font-bold text-[#B6F084] uppercase tracking-wider block">
                  {SUBSCRIPTION_PLAN.badge}
                </span>
                <h3 className="font-sans text-2xl sm:text-3xl font-bold text-white mt-1">
                  {SUBSCRIPTION_PLAN.name}
                </h3>
              </div>
              <div className="text-left sm:text-right">
                <div className="font-mono text-3xl sm:text-4xl font-bold text-[#B6F084] tracking-tight">
                  {SUBSCRIPTION_PLAN.price}
                </div>
                <span className="text-xs font-mono text-white/70 block mt-0.5">
                  {SUBSCRIPTION_PLAN.descriptor}
                </span>
              </div>
            </div>

            {/* Description */}
            <p className="text-sm sm:text-base text-white/85 leading-relaxed font-normal">
              {SUBSCRIPTION_PLAN.description}
            </p>

            {/* Included Capabilities */}
            <div className="space-y-3 pt-1">
              <span className="font-mono text-xs font-semibold text-white/95 block uppercase tracking-wide">
                Cakupan Layanan:
              </span>
              <ul className="space-y-3">
                {SUBSCRIPTION_PLAN.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-white/90">
                    <span className="w-5 h-5 rounded-full bg-[#B6F084]/20 text-[#B6F084] flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 stroke-[3]" aria-hidden="true" />
                    </span>
                    <span className="leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Action CTA */}
            <div className="pt-2 space-y-3">
              <a
                href={SUBSCRIPTION_PLAN.cta.href}
                className="w-full inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-[#B6F084] text-[#092215] font-bold text-base hover:bg-[#C7F69B] transition-all shadow-lg hover:shadow-xl hover:scale-[1.01]"
              >
                <span>{SUBSCRIPTION_PLAN.cta.label}</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </a>

              {/* Billing Interval Confirmation Note */}
              <p className="text-center font-mono text-[11px] text-white/70">
                *{SUBSCRIPTION_PLAN.billingIntervalNote}
              </p>
            </div>

            {/* Honest Disclaimer */}
            <div className="pt-5 border-t border-white/15">
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-start gap-3">
                <ShieldCheck className="w-4 h-4 text-[#B6F084] shrink-0 mt-0.5" aria-hidden="true" />
                <p className="text-xs text-white/80 leading-relaxed">
                  {SUBSCRIPTION_PLAN.transparencyNote}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
