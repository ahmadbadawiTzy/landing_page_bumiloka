import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Fraunces, JetBrains_Mono } from "next/font/google";
import { FAQ_ITEMS } from "@/data/landing-content";
import { AppProviders } from "@/context/AppProviders";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#143323" },
    { media: "(prefers-color-scheme: dark)", color: "#06180E" },
  ],
};

const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://bumilokalandingpage.vercel.app"
).replace(/\/$/, "");

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "BumiLoka — Platform Budidaya Hidroponik (Pengelolaan Kebun, Marketplace Panen, Asisten AI)",
    template: "%s | BumiLoka",
  },
  description:
    "BumiLoka membantu petani hidroponik memantau kondisi air tandon harian, memahami kendala daun lewat asisten AI, serta mempertemukan hasil panen segar dengan calon pembeli sebelum hari potong.",
  keywords: [
    "hidroponik",
    "marketplace panen",
    "pengelolaan tanaman hidroponik",
    "asisten ai budidaya",
    "kebun hidroponik",
    "bumiloka",
    "pertanian presisi",
    "hydroponic farming app",
  ],
  authors: [{ name: "BumiLoka Team" }],
  alternates: {
    canonical: `${SITE_URL}/`,
    languages: {
      "id-ID": `${SITE_URL}/`,
      "en-US": `${SITE_URL}/?lang=en`,
      "x-default": `${SITE_URL}/`,
    },
  },
  openGraph: {
    title: "BumiLoka — Platform Budidaya Hidroponik Terpadu",
    description:
      "Bantu petani hidroponik merawat instalasi secara disiplin dan memasarkan hasil panen sebelum hari potong.",
    url: `${SITE_URL}/`,
    siteName: "BumiLoka",
    locale: "id_ID",
    alternateLocale: ["en_US"],
    type: "website",
    images: [
      {
        url: `${SITE_URL}/images/hero-greenhouse-fullbleed.jpg`,
        width: 1200,
        height: 630,
        alt: "Instalasi kebun hidroponik greenhouse komersial BumiLoka",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BumiLoka — Platform Budidaya Hidroponik Terpadu",
    description:
      "Pantau nutrisi tandon, atasi gejala tanaman dengan AI, dan buka pra-pesan panen sayuran segar.",
    images: [`${SITE_URL}/images/hero-greenhouse-fullbleed.jpg`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/icon.svg",
    apple: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // WebSite Schema
  const webSiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "BumiLoka",
    url: `${SITE_URL}/`,
    inLanguage: ["id", "en"],
  };

  // Organization Schema per docs/seo.md Section 5.1
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "BumiLoka",
    url: `${SITE_URL}/`,
    logo: `${SITE_URL}/images/bumiloka-logo.webp`,
    slogan: "Membangun Negeri dari Bumi dan Tani",
    description:
      "Platform digital pendukung budidaya hidroponik yang menggabungkan pengelolaan nutrisi tandon, marketplace hasil panen, dan asisten AI budidaya.",
  };

  // WebApplication Schema per docs/seo.md Section 5.2
  const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "BumiLoka",
    url: `${SITE_URL}/`,
    applicationCategory: "BusinessApplication",
    operatingSystem: "All modern web browsers",
    offers: {
      "@type": "Offer",
      price: "45000",
      priceCurrency: "IDR",
      availability: "https://schema.org/InStock",
      description: "Paket berlangganan akses penuh platform BumiLoka (Rp45.000/bulan)",
    },
  };

  // FAQPage Schema per docs/seo.md Section 5.3 based on actual visible FAQ items
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_ITEMS.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <html
      lang="id"
      suppressHydrationWarning
      className={`${plusJakartaSans.variable} ${fraunces.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        {/* Anti-FOUC theme & lang bootstrap script */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var t = localStorage.getItem('bumiloka-theme') || 'system';
                  var isDark = t === 'dark' || (t === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);
                  if (isDark) {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                  var l = localStorage.getItem('bumiloka-lang');
                  if (l === 'en' || l === 'id') {
                    document.documentElement.lang = l;
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </head>
      <body className="bg-[#F7F8F3] dark:bg-[#06180E] text-[#161D19] dark:text-[#F2F7F4] antialiased min-h-screen selection:bg-[#143323] selection:text-[#F7F8F3] dark:selection:bg-[#B6F084] dark:selection:text-[#092215] transition-colors duration-200">
        <AppProviders>
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#143323] dark:focus:bg-[#B6F084] focus:text-[#F7F8F3] dark:focus:text-[#092215] focus:rounded-md focus:shadow-lg focus:outline-hidden"
          >
            Lewati ke konten utama
          </a>
          {children}
        </AppProviders>
      </body>
    </html>
  );
}
