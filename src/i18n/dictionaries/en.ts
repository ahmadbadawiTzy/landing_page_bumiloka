import { TranslationDictionary } from "../types";

export const enDictionary: TranslationDictionary = {
  common: {
    skipToContent: "Skip to main content",
    previewNotice: "Interface Concept Preview",
    contactPersonName: "Rayn Amannullah Tzulkifli",
    monthlyPrice: "Rp45,000",
    monthlyUnit: "/month",
    billedMonthlyNote: "Billed monthly",
    themeNames: {
      light: "Light Theme",
      dark: "Dark Theme",
    },
    languageNames: {
      id: "Bahasa Indonesia",
      en: "English",
    },
  },
  nav: {
    items: [
      { label: "Home", href: "#hero", sectionIndex: "01" },
      { label: "Challenges", href: "#masalah-petani", sectionIndex: "02" },
      { label: "Solutions", href: "#solusi-manfaat", sectionIndex: "03" },
      { label: "Services", href: "#produk-layanan", sectionIndex: "04" },
      { label: "Workflow", href: "#bukti-konsep", sectionIndex: "05" },
      { label: "Subscription", href: "#langganan", sectionIndex: "06" },
      { label: "FAQ", href: "#faq", sectionIndex: "07" },
      { label: "Get Started", href: "#cta-akhir", sectionIndex: "08" },
    ],
    cta: "Subscription Plan",
    mobileCta: "Subscription Plan (Rp45,000/mo)",
    menuOpenAria: "Open navigation menu",
    menuCloseAria: "Close navigation menu",
    homeAria: "BumiLoka — Back to Home",
  },
  hero: {
    label: "Hydroponic Cultivation Platform",
    headline: "Manage Farms with Order, Address Leaf Symptoms, and Secure Harvest Sales",
    subheadline:
      "BumiLoka helps hydroponic growers monitor daily reservoir water metrics, diagnose plant issues with an AI assistant, and connect fresh harvest yields with prospective buyers before cutting day.",
    primaryCta: "Explore BumiLoka Services",
    secondaryCta: "Subscribe Rp45,000/mo",
    pillars: [
      {
        title: "Cultivation Tracking",
        summary: "Track pH, PPM, and crop age across every installation bench.",
        href: "#modul-manajemen-tanaman",
      },
      {
        title: "Harvest Marketplace",
        summary: "Open vegetable pre-orders before harvest day arrives.",
        href: "#modul-pasar-panen",
      },
      {
        title: "AI Farm Assistant",
        summary: "Step-by-step guidance when discovering yellow leaves or root stress.",
        href: "#modul-asisten-ai",
      },
    ],
  },
  problems: {
    badge: "Operational Challenges",
    heading: "Real Obstacles Faced by Hydroponic Growers",
    description:
      "Managing a hydroponic greenhouse demands disciplined reservoir water monitoring and dependable distribution channels. These three operational challenges frequently hinder daily farm productivity.",
    fieldImpactLabel: "Farm impact:",
    items: [
      {
        id: "masalah-pemasaran",
        category: "Harvest Marketing",
        title: "Vegetables ready to harvest, but buyers remain uncertain",
        description:
          "Hydroponic greens have a short freshness window on the bench. When cutting day arrives without confirmed orders, growers are forced to send urgent broadcast messages or sell to middlemen at depressed prices.",
        fieldImpact:
          "Plants overstay on benches, leaves toughen, and the next seedling nursery cycle gets delayed.",
        relatedCapability: "Solution: Harvest Marketplace",
      },
      {
        id: "masalah-pemeliharaan",
        category: "Farm Monitoring",
        title: "Nutrient and water condition logs remain scattered",
        description:
          "Managing multiple growing benches requires daily checks for water pH, nutrient concentration (PPM), and reservoir temperatures. Without structured records, water shifts are easily missed and hard to evaluate when yield drops.",
        fieldImpact:
          "Uneven crop growth across benches and root stress caused by erratic nutrient concentrations.",
        relatedCapability: "Solution: Cultivation Tracking",
      },
      {
        id: "masalah-panduan",
        category: "Symptom Diagnosis",
        title: "Uncertainty in diagnosing crop stress or leaf disorders",
        description:
          "When yellowing foliage, burnt tips, or mid-day wilting appear, growers often look for quick fixes on social media. Unfortunately, advice is frequently conflicting and poorly suited to their specific bench setups.",
        fieldImpact:
          "Delayed intervention or excessive fertilizer dosing that worsens crop stress.",
        relatedCapability: "Solution: AI Farm Assistant",
      },
    ],
  },
  solutions: {
    badge: "Solutions & Benefits",
    heading: "Three Integrated Solutions Addressing Farm Bottlenecks",
    description:
      "BumiLoka connects daily nutrient monitoring on growing installations with direct sales channels to consumers. Each module is crafted to resolve one critical pain point in the hydroponic cultivation lifecycle.",
    keyPoints: [
      "Market Certainty: Promote harvest schedules before cutting day arrives.",
      "Reservoir Consistency: Regular pH and PPM logging prevents crop nutrient deficiencies.",
      "AI Assistant: Guided preliminary inspection when foliage exhibits symptoms."
    ],
    mainCta: "Preview Three Modules",
    photoCaptionTitle: "From Nursery to Sold Harvest",
    photoCaptionText: "Connecting disciplined technical farming with assured buyers",
    outcomesLabel: "Grower benefits:",
    cardPreviewLink: "View Module Preview",
    items: [
      {
        id: "solusi-pasar-panen",
        capabilityName: "Harvest Marketplace",
        solvesProblem: "Sales Certainty",
        headline: "Open Vegetable Pre-Orders Before Harvest Day",
        benefitSummary:
          "Publish harvest schedules and estimated crop yields days in advance so local consumers and businesses can order before produce is cut.",
        concreteOutcomes: [
          "Display vegetable commodities, growing systems (NFT, DFT, or Raft), and ready dates.",
          "Enable households, caterers, and local grocers to reserve fresh produce straight from the farm.",
          "Maintain steady nursery cycles backed by committed buyers."
        ],
        targetAnchor: "#modul-pasar-panen",
      },
      {
        id: "solusi-manajemen-tanaman",
        capabilityName: "Cultivation Tracking",
        solvesProblem: "Monitoring Discipline",
        headline: "Log pH, PPM, and Crop Age in One Central Workspace",
        benefitSummary:
          "Replace loose paper notebooks with structured tracking per bench—from rockwool seedlings to harvest-ready crops.",
        concreteOutcomes: [
          "Record daily pH, PPM nutrient levels, and water temperatures to detect anomalies early.",
          "Schedule vital routines including reservoir flushes, pump checks, and bench transfers.",
          "Retain cycle history as reliable benchmarks for upcoming planting runs."
        ],
        targetAnchor: "#modul-manajemen-tanaman",
      },
      {
        id: "solusi-asisten-ai",
        capabilityName: "AI Farm Assistant",
        solvesProblem: "Guidance & Diagnosis",
        headline: "Understand Foliage Symptoms with Practical Inspection Steps",
        benefitSummary:
          "A structured Q&A assistant helping growers review environmental and nutrient factors behind crop anomalies step by step.",
        concreteOutcomes: [
          "Break down physical symptoms into checklist items: water temp, airflow, pH, and concentration.",
          "Receive safe nutrient targets tailored to leafy green varieties.",
          "Include clear boundaries for when a symptom requires an accredited agronomist."
        ],
        targetAnchor: "#modul-asisten-ai",
      },
    ],
  },
  products: {
    heading: "Three Core BumiLoka Services",
    description:
      "Engineered with simplicity to serve urban home growers and commercial facilities alike in supporting crop tracking, troubleshooting, and harvest sales.",
    conceptNotice: {
      bold: "Interface concept preview:",
      text: "The screens below present visual workflows illustrating BumiLoka's frontend product architecture.",
    },
    marketplace: {
      badge: "Harvest Marketplace",
      title: "Open Vegetable Pre-Orders Before Harvest Day",
      description:
        "Help customers pre-order fresh greens ahead of harvest time. Share commodity profiles, estimated harvest dates, and growing methods transparently with prospective buyers.",
      photoCaption: "Fresh, premium quality produce ready for packaging and delivery",
      checklist: [
        "Commodity catalog (Romaine Lettuce, Pak Choi, Curly Kale)",
        "Harvest schedules for early pre-ordering",
        "Growing method details (NFT, DFT, Floating Raft)",
      ],
      tableTitle: "Scheduled Harvest Batch List",
      uiBadge: "UI Preview",
      batches: [
        {
          batchCode: "BATCH #HL-104",
          commodity: "Green Romaine Lettuce",
          cultivationMethod: "NFT System • Natural Greenhouse",
          harvestEstimate: "Ready to Harvest: In 2 Days (34 DAP)",
          availableVolume: "Estimated 18 kg (± 72 packs @ 250g)",
          statusLabel: "Pre-Order Open",
          locationNote: "Lembang Farm, West Bandung",
        },
        {
          batchCode: "BATCH #HL-108",
          commodity: "Fresh Green Pak Choi",
          cultivationMethod: "DFT System • Monitored Nutrients",
          harvestEstimate: "Available Today (29 DAP)",
          availableVolume: "Estimated 12 kg (± 48 packs @ 250g)",
          statusLabel: "Ready to Pick",
          locationNote: "Sleman Farm, Yogyakarta",
        },
        {
          batchCode: "BATCH #HL-112",
          commodity: "Curly Kale",
          cultivationMethod: "NFT System • Daily PPM Tracking",
          harvestEstimate: "Ready to Harvest: In 5 Days (42 DAP)",
          availableVolume: "Estimated 8 kg (± 40 packs @ 200g)",
          statusLabel: "Schedule Listed",
          locationNote: "Batu Farm, Malang",
        },
      ],
    },
    management: {
      badge: "Cultivation Tracking",
      title: "Monitor Reservoir Conditions and Daily Crop Age",
      description:
        "Track days after planting (DAP), pH values, nutrient PPM concentration, and reservoir maintenance schedules in one workspace. No more relying on memory or misplaced paper logs.",
      photoCaption: "Nutrient circulation monitoring along NFT channels",
      checklist: [
        "Log daily pH, PPM, and reservoir temperature per bench",
        "Automatic age calculation from rockwool nursery to harvest",
        "Reminders for reservoir flushes and meter calibration",
      ],
      tableTitle: "Bench & Reservoir Monitoring",
      uiBadge: "UI Preview",
      actionLabel: "Action:",
      phLabel: "Water pH",
      ppmLabel: "Nutrient PPM",
      tempLabel: "Water Temp",
      installations: [
        {
          installationName: "Channel Bench A1 (NFT 200 Holes)",
          cropName: "Butterhead Lettuce",
          daysAfterPlanting: "26 DAP (Growth Phase)",
          phLevel: "5.9 pH",
          ppmLevel: "840 PPM",
          waterTemp: "25.2 °C",
          status: "Normal Parameters",
          nextAction: "Check reservoir water level in the late afternoon",
        },
        {
          installationName: "Channel Bench B2 (DFT 160 Holes)",
          cropName: "Green Pak Choi",
          daysAfterPlanting: "14 DAP (Vegetative)",
          phLevel: "6.4 pH",
          ppmLevel: "620 PPM",
          waterTemp: "27.8 °C",
          status: "Nutrient Addition Needed",
          nextAction: "Add stock nutrients up to 800 PPM and adjust pH down to 6.0",
        },
        {
          installationName: "Nursery Rack C1 (Rockwool Tray)",
          cropName: "Choy Sum & Water Spinach",
          daysAfterPlanting: "4 DAS (Days After Sowing)",
          phLevel: "5.8 pH",
          ppmLevel: "350 PPM",
          waterTemp: "24.8 °C",
          status: "Light Adaptation",
          nextAction: "Maintain substrate moisture and prepare bench transfer at 10 DAS",
        },
      ],
    },
    aiAssistant: {
      badge: "AI Farm Assistant",
      title: "Understand Plant Symptoms with Practical Guidance",
      description:
        "A structured Q&A assistant helping growers review root causes of yellowing leaves, dried tips, or stunted growth through methodical inspection steps.",
      cautionBadge: "Important agronomic boundary",
      cautionText:
        "The AI assistant provides preliminary inspection guidance. In cases of fast-spreading root rot or bacterial blight, growers must consult directly with certified agronomists.",
      tableTitle: "Sample Field Symptom Consultations",
      uiBadge: "UI Preview",
      stepsLabel: "Initial Diagnostic Steps:",
      scenarios: [
        {
          id: "tip-burn",
          topicLabel: "Burnt Leaf Margins (Tip Burn)",
          farmerQuestion:
            "Why are the young inner leaves of my Romaine lettuce turning brown and crispy even though nutrient PPM is steady at 950?",
          cropContext: "Romaine Lettuce • 27 DAP • NFT • Midday Temp 32°C",
          diagnosticSteps: [
            "Check microclimate airflow: Tip burn is frequently triggered by restricted leaf transpiration in hot, humid conditions, hindering calcium transport to inner growing tips.",
            "Inspect reservoir temperature and concentration: In temperatures above 30°C, plants absorb more water than minerals. Lower nutrient strength to 750–820 PPM to relieve osmotic pressure.",
            "Ensure channel flow is unobstructed by dense root mats.",
          ],
          agronomicCaution:
            "Note: This guidance serves as an initial check. If tissue is soft and foul-smelling, consult an agronomist to rule out bacterial soft rot.",
        },
        {
          id: "klorosis-daun",
          topicLabel: "Lower Leaf Yellowing",
          farmerQuestion:
            "The lower leaves of my pak choi are yellowing evenly starting at 18 DAP, while upper leaves stay green. What should I check?",
          cropContext: "Green Pak Choi • 18 DAP • DFT • pH 6.7",
          diagnosticSteps: [
            "Check water pH: Above 6.5 pH, nutrient uptake becomes restricted. Gradually lower pH to the 5.8–6.2 range.",
            "Inspect PPM concentration: At 18 DAP, pak choi demands higher nitrogen (900–1,050 PPM). Underfed crops mobilize mobile nitrogen from older foliage.",
            "Verify adequate canopy lighting so lower leaves receive sufficient illumination.",
          ],
          agronomicCaution:
            "Note: Always use freshly calibrated pH and TDS meters before adjusting reservoir nutrients.",
        },
        {
          id: "jadwal-flushing",
          topicLabel: "Reservoir Flushing Schedule",
          farmerQuestion:
            "How often should nutrient reservoirs be completely flushed to prevent fertilizer salt accumulation?",
          cropContext: "NFT/DFT Recirculation • 30–35 Day Leafy Cycle",
          diagnosticSteps: [
            "Flush and replace reservoir solution every 10–14 days, or at least once mid-cycle.",
            "Continuous top-offs without full drain cycles shift ionic balance as plants absorb minerals at varying rates.",
            "Scrub reservoir walls and pump pre-filters clean of algae before refilling with fresh nutrient solution.",
          ],
          agronomicCaution:
            "Note: Source water quality impacts reservoir hygiene. If source TDS exceeds 200 PPM, perform flushes more frequently.",
        },
      ],
    },
  },
  proof: {
    badge: "Workflow & Proof of Concept",
    heading: "How BumiLoka Operates in Your Greenhouse",
    description:
      "An integrated workflow accompanying growers from seed nursery, daily nutrient management, through to fresh vegetable sales.",
    transparencyNotice: {
      bold: "Workflow transparency note:",
      text: "BumiLoka presents no artificial reviews or fabricated user counts. This section demonstrates how all three services interconnect during authentic greenhouse routines.",
    },
    activityLabel: "BumiLoka Activity:",
    personasHeading: "Tailored to Your Growing Scale",
    stages: [
      {
        stepNumber: "Phase 1",
        stageTitle: "Nursery Planning & Planting Calendar",
        moduleUsed: "Cultivation Tracking",
        durationContext: "Days 1 – 10 (Nursery)",
        scenarioTitle: "Recording Seeds and Scheduling Planting Cycles",
        beginnerExperience:
          "Home growers easily know when rockwool seedlings are ready for channel transfer and safe starter PPM levels.",
        experiencedExperience:
          "Commercial managers organize staggered seedings across benches so fresh produce is available every week without gaps.",
        keyChecklist: [
          "Log sowing dates, seed varieties, and nursery hole capacity.",
          "Set starter nutrient reminders (300–450 PPM).",
          "Establish projected harvest dates once seedlings move to growing channels.",
        ],
      },
      {
        stepNumber: "Phase 2",
        stageTitle: "Daily Nutrient Monitoring (pH & PPM)",
        moduleUsed: "Cultivation Tracking",
        durationContext: "Days 11 – 25 (Vegetative)",
        scenarioTitle: "Maintaining Reservoir Water Stability Every Day",
        beginnerExperience:
          "Builds disciplined habit of daily pH and PPM checks with clear safe-operating thresholds.",
        experiencedExperience:
          "Enables easy review of standardized daily records logged by greenhouse operators.",
        keyChecklist: [
          "Log pH (5.5–6.5), nutrient PPM, and morning/evening water temperatures.",
          "Execute farm routines: meter calibration, pump checks, and reservoir flushes.",
          "Detect nutrient shifts early before foliage displays stress signs.",
        ],
      },
      {
        stepNumber: "Phase 3",
        stageTitle: "Symptom Diagnosis & AI Guidance",
        moduleUsed: "AI Farm Assistant",
        durationContext: "When Issues Arise",
        scenarioTitle: "Troubleshooting Crop Stress Systematically",
        beginnerExperience:
          "When yellowing leaves or wilting appear, novice growers receive methodical checklists without panicking.",
        experiencedExperience:
          "Serves as a reliable first-line review to verify nutrient deficiencies before escalating to an agronomist.",
        keyChecklist: [
          "Analyze relationships between temperature, light, pH, and nutrient strength against leaf symptoms.",
          "Follow safe dosing adjustment steps suited for leafy crops.",
          "Recognize clear boundaries when an issue demands professional laboratory diagnosis.",
        ],
      },
      {
        stepNumber: "Phase 4",
        stageTitle: "Open Pre-Orders & Harvest Sales",
        moduleUsed: "Harvest Marketplace",
        durationContext: "Days 26 – 35 (Harvest Approaching)",
        scenarioTitle: "Connecting Fresh Produce with Buyers Early",
        beginnerExperience:
          "Home growers with surplus yield can offer clean vegetables to neighbors and community members.",
        experiencedExperience:
          "Commercial growers display weekly harvest quotas so caterers and resellers lock in early orders.",
        keyChecklist: [
          "Display vegetable varieties, harvest dates, and estimated yield volume.",
          "Present a clean greenhouse profile to build buyer trust.",
          "Communicate orders directly without multi-layered broker markups.",
        ],
      },
    ],
    personas: [
      {
        role: "Urban Home Grower",
        focus: "20–200 Planting Holes",
        challenge: "Key challenge:",
        insight:
          "Requires intuitive safe ranges for pH and PPM, plus reliable reminders so rockwool seedlings aren't transferred late to growing channels.",
      },
      {
        role: "Productive Farm Manager",
        focus: "500+ Holes (Multi-Bench)",
        challenge: "Key challenge:",
        insight:
          "Needs structured rotational planting logs so produce can be promoted to regular buyers days before cutting, keeping benches turning smoothly.",
      },
    ],
  },
  offer: {
    badge: "Offer & Pricing",
    heading: "One Complete Plan for All Farm Needs",
    description:
      "BumiLoka is designed transparently without complicated tiers. All core capabilities are unlocked within a single monthly plan.",
    planBadge: "Subscription Plan",
    planName: "BumiLoka",
    price: "Rp45,000",
    priceDescriptor: "/month",
    priceBillingSub: "Billed every month",
    planDescription:
      "Unified access to all BumiLoka capabilities to support daily nutrient tracking, AI symptom troubleshooting, and harvest pre-orders.",
    featuresLabel: "Included Capabilities:",
    features: [
      "Harvest Marketplace: publish pre-order dates and harvest quotas",
      "Cultivation Tracking: log pH, PPM, reservoir temperatures, and crop age (DAP)",
      "AI Farm Assistant: step-by-step diagnostic guidance for foliage and nutrient stress",
      "Routine Task Reminders: reservoir flushes, pump checks, and meter calibration",
      "Full access with no hidden feature gates or bench quantity limits",
    ],
    howToSubscribeLabel: "How to Subscribe:",
    howToSubscribeText:
      "Reach out directly via WhatsApp or Email to inquire about or activate your subscription access:",
    whatsappCta: "Contact via WhatsApp",
    emailCtaPrefix: "Send Email",
    whatsappContactLabel: "WhatsApp Contact:",
    billingIntervalNote:
      "Subscription fee is Rp45,000 per month (billed monthly, not a one-time fee).",
    transparencyNote:
      "To register or inquire about subscription access (Rp45,000/month), contact our team via WhatsApp or Email. Automated web payment is currently not enabled.",
  },
  faq: {
    badge: "Q&A & Assistance",
    heading: "Frequently Asked Questions",
    description:
      "Information regarding BumiLoka services, the Rp45,000/month subscription plan, AI assistant boundaries, and development status.",
    expandAll: "Expand All",
    collapseAll: "Collapse All",
    categories: {
      Semua: "All",
      Umum: "General",
      Langganan: "Subscription",
      Marketplace: "Marketplace",
      "Pengelolaan Budidaya": "Cultivation",
      "Asisten AI": "AI Assistant",
    },
    items: [
      {
        id: "faq-apa-itu-bumiloka",
        category: "Umum",
        question: "What is BumiLoka and what are its core capabilities?",
        answer:
          "BumiLoka is a digital companion for hydroponic cultivation combining three key pillars: Cultivation Tracking to log reservoir water and crop health daily, Harvest Marketplace to connect growers with buyers before harvest day, and AI Farm Assistant to explain foliage symptoms and guide preliminary treatment.",
      },
      {
        id: "faq-biaya-langganan",
        category: "Langganan",
        question: "How much is the BumiLoka subscription and what is included?",
        answer:
          "BumiLoka offers a single subscription package priced at Rp45,000 per month (Rp45,000/month). This plan covers all core modules: Cultivation Tracking for pH/PPM/water logs, Harvest Marketplace for vegetable pre-orders, and AI Farm Assistant for symptom guidance. Registration and inquiries are handled directly via official WhatsApp or Email.",
        highlightNote:
          "Subscription Pricing: Rp45,000 per month (billed monthly, not a one-time fee). To begin, contact WhatsApp (+62 852-1054-2025 - Rayn Amannullah Tzulkifli) or Email (bumiloka227@gmail.com).",
      },
      {
        id: "faq-siapa-pengguna",
        category: "Umum",
        question: "Who can use BumiLoka?",
        answer:
          "BumiLoka is suited for beginner home growers who need clear guidance on nutrient management, as well as commercial farm managers seeking to streamline planting schedules and expand buyer reach.",
      },
      {
        id: "faq-cara-promosi-panen",
        category: "Marketplace",
        question: "How does the Harvest Marketplace work?",
        answer:
          "Growers can list harvest dates, crop varieties (such as lettuce, pak choi, or kale), cultivation methods, and estimated yields several days before cutting. This allows consumers and businesses to pre-order fresh produce before crops accumulate on benches.",
      },
      {
        id: "faq-manajemen-tanaman",
        category: "Pengelolaan Budidaya",
        question: "How does Cultivation Tracking help daily maintenance?",
        answer:
          "This module helps you log days after planting (DAP), pH values, nutrient PPM, and reservoir water temperatures across benches. You also receive routine reminders for critical tasks such as reservoir flushes and sensor calibration.",
      },
      {
        id: "faq-fungsi-asisten-ai",
        category: "Asisten AI",
        question: "How does the AI Assistant assist when crops show problems?",
        answer:
          "The AI Assistant breaks down physical symptoms—such as yellowing lower foliage or burnt tip margins—into methodical inspection steps covering pH, water temperatures, nutrient concentrations, and greenhouse ventilation.",
      },
      {
        id: "faq-batasan-ai-agronomi",
        category: "Asisten AI",
        question:
          "Why does the AI Assistant not replace professional agronomists?",
        answer:
          "Many hydroponic crop symptoms share identical visual presentations between mineral deficiencies, heat stress, and fungal root pathogens. The AI Assistant provides initial diagnostic guidance based on standard cultivation patterns, but cannot inspect field conditions in person or perform lab assays. For fast-spreading outbreaks or large-scale commercial decisions, growers must consult certified agronomists.",
        highlightNote:
          "Safety Principle: The AI Assistant serves as preliminary guidance, not a replacement for laboratory testing or agronomist diagnoses.",
      },
      {
        id: "faq-status-implementasi",
        category: "Umum",
        question:
          "Does this website currently process live online payments or account signups?",
        answer:
          "This website currently serves as an interface concept preview showcasing BumiLoka's workflows and system design. Online automated payment gateways and self-service account signups are not yet active.",
      },
    ],
  },
  finalCta: {
    heading: "Start Managing Your Hydroponic Farm with Order and Certainty",
    description:
      "BumiLoka stands with you through every growing phase—from daily reservoir nutrient tracking, symptom diagnosis with our AI assistant, to assured harvest distribution.",
    button: "Subscription Information (Rp45,000/month)",
    notice:
      "Interface concept preview • Subscription inquiries via official WhatsApp & Email",
  },
  footer: {
    tagline:
      "BumiLoka is a hydroponic cultivation platform combining daily reservoir tracking, pre-harvest marketplace channels, and an AI assistant for crop symptom resolution.",
    subscriptionBadge: "Subscription Plan: Rp45,000/month (all modules included)",
    contactHeading: "Subscription Contact",
    whatsappContactNote: "WhatsApp:",
    emailContactNote: "Official email for inquiries & registration",
    navHeading: "Page Navigation",
    copyrightNotice: "BumiLoka. Website display is an interface concept preview.",
    motto: "Nurturing the Nation from Earth and Soil • Rp45,000/month",
  },
};
