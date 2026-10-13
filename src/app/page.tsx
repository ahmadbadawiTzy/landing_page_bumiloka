import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Section1Hero } from "@/components/sections/Section1Hero";
import { Section2Problems } from "@/components/sections/Section2Problems";
import { Section3Solutions } from "@/components/sections/Section3Solutions";
import { Section4Products } from "@/components/sections/Section4Products";
import { Section5SocialProof } from "@/components/sections/Section5SocialProof";
import { Section6Offer } from "@/components/sections/Section6Offer";
import { Section7Faq } from "@/components/sections/Section7Faq";
import { Section8FinalCta } from "@/components/sections/Section8FinalCta";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#F7F8F3]">
      {/* Sticky Accessible Navigation Bar */}
      <Navbar />

      {/* Main Content with Exactly Eight Required Sections of Task 2 */}
      <main id="main-content" className="flex-1">
        {/* Section 1 — Hero */}
        <Section1Hero />

        {/* Section 2 — Customer Problems */}
        <Section2Problems />

        {/* Section 3 — Solutions and Benefits */}
        <Section3Solutions />

        {/* Section 4 — Products and Services */}
        <Section4Products />

        {/* Section 5 — Social Proof (Honest Farmer User-Journey Demonstration) */}
        <Section5SocialProof />

        {/* Section 6 — Offer / Subscription (Single Rp45.000 Package) */}
        <Section6Offer />

        {/* Section 7 — FAQ (Accessible Client-Side Accordion) */}
        <Section7Faq />

        {/* Section 8 — Final CTA */}
        <Section8FinalCta />
      </main>

      {/* Global Directory and Transparency Footer */}
      <Footer />
    </div>
  );
}
