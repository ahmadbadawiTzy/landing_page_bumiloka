export type Locale = "id" | "en";

export interface NavItemTranslation {
  label: string;
  href: string;
  sectionIndex: string;
}

export interface CustomerProblemTranslation {
  id: string;
  category: string;
  title: string;
  description: string;
  fieldImpact: string;
  relatedCapability: string;
}

export interface SolutionBenefitTranslation {
  id: string;
  capabilityName: string;
  accessBadge: string;
  solvesProblem: string;
  headline: string;
  benefitSummary: string;
  concreteOutcomes: string[];
  targetAnchor: string;
}

export interface MarketplaceBatchTranslation {
  batchCode: string;
  commodity: string;
  cultivationMethod: string;
  harvestEstimate: string;
  availableVolume: string;
  statusLabel: string;
  locationNote: string;
}

export interface PlantTaskTranslation {
  installationName: string;
  cropName: string;
  daysAfterPlanting: string;
  phLevel: string;
  ppmLevel: string;
  waterTemp: string;
  status: string;
  nextAction: string;
}

export interface AiScenarioTranslation {
  id: string;
  topicLabel: string;
  farmerQuestion: string;
  cropContext: string;
  diagnosticSteps: string[];
  agronomicCaution: string;
}

export interface JourneyStageTranslation {
  stepNumber: string;
  stageTitle: string;
  moduleUsed: string;
  durationContext: string;
  scenarioTitle: string;
  beginnerExperience: string;
  experiencedExperience: string;
  keyChecklist: string[];
}

export interface FarmerPersonaTranslation {
  role: string;
  focus: string;
  challenge: string;
  insight: string;
}

export interface FaqItemTranslation {
  id: string;
  category: "Semua" | "Umum" | "Marketplace" | "Pengelolaan Budidaya" | "Asisten AI" | "Langganan";
  question: string;
  answer: string;
  highlightNote?: string;
}

export interface TranslationDictionary {
  common: {
    skipToContent: string;
    previewNotice: string;
    contactPersonName: string;
    monthlyPrice: string;
    monthlyUnit: string;
    billedMonthlyNote: string;
    themeNames: {
      light: string;
      dark: string;
    };
    languageNames: {
      id: string;
      en: string;
    };
  };
  nav: {
    items: NavItemTranslation[];
    cta: string;
    mobileCta: string;
    menuOpenAria: string;
    menuCloseAria: string;
    homeAria: string;
  };
  hero: {
    label: string;
    headline: string;
    subheadline: string;
    primaryCta: string;
    secondaryCta: string;
    pillars: Array<{
      title: string;
      accessBadge?: string;
      summary: string;
      href: string;
    }>;
  };
  problems: {
    badge: string;
    heading: string;
    description: string;
    fieldImpactLabel: string;
    items: CustomerProblemTranslation[];
  };
  solutions: {
    badge: string;
    heading: string;
    description: string;
    keyPoints: string[];
    mainCta: string;
    photoCaptionTitle: string;
    photoCaptionText: string;
    outcomesLabel: string;
    cardPreviewLink: string;
    items: SolutionBenefitTranslation[];
  };
  products: {
    heading: string;
    description: string;
    conceptNotice: {
      bold: string;
      text: string;
    };
    accordionLabels: {
      expandService: string;
      collapseService: string;
      serviceCounter: string;
      previous: string;
      next: string;
      openBadge: string;
    };
    marketplace: {
      badge: string;
      accessBadge: string;
      title: string;
      description: string;
      freeNotice: string;
      photoCaption: string;
      checklist: string[];
      tableTitle: string;
      uiBadge: string;
      batches: MarketplaceBatchTranslation[];
    };
    management: {
      badge: string;
      accessBadge: string;
      title: string;
      description: string;
      photoCaption: string;
      checklist: string[];
      tableTitle: string;
      uiBadge: string;
      actionLabel: string;
      phLabel: string;
      ppmLabel: string;
      tempLabel: string;
      installations: PlantTaskTranslation[];
    };
    aiAssistant: {
      badge: string;
      accessBadge: string;
      title: string;
      description: string;
      photoFeature: {
        badge: string;
        includedTag: string;
        title: string;
        description: string;
        stepsHeading: string;
        steps: Array<{ step: string; title: string; desc: string }>;
        sampleAnalysis: {
          badge: string;
          crop: string;
          diagnosis: string;
          confidence: string;
          symptoms: string;
          recommendations: string[];
          limitationNote: string;
        };
      };
      cautionBadge: string;
      cautionText: string;
      tableTitle: string;
      uiBadge: string;
      stepsLabel: string;
      scenarios: AiScenarioTranslation[];
    };
  };
  proof: {
    badge: string;
    heading: string;
    description: string;
    transparencyNotice: {
      bold: string;
      text: string;
    };
    activityLabel: string;
    personasHeading: string;
    stages: JourneyStageTranslation[];
    personas: FarmerPersonaTranslation[];
  };
  offer: {
    badge: string;
    heading: string;
    description: string;
    planBadge: string;
    planName: string;
    price: string;
    priceDescriptor: string;
    priceBillingSub: string;
    planDescription: string;
    featuresLabel: string;
    features: string[];
    marketplaceFreeNote: {
      title: string;
      description: string;
    };
    howToSubscribeLabel: string;
    howToSubscribeText: string;
    whatsappCta: string;
    emailCtaPrefix: string;
    whatsappContactLabel: string;
    billingIntervalNote: string;
    transparencyNote: string;
  };
  faq: {
    badge: string;
    heading: string;
    description: string;
    categories: Record<string, string>;
    expandAll: string;
    collapseAll: string;
    items: FaqItemTranslation[];
  };
  finalCta: {
    heading: string;
    description: string;
    button: string;
    notice: string;
  };
  footer: {
    tagline: string;
    subscriptionBadge: string;
    marketplaceBadge: string;
    contactHeading: string;
    whatsappContactNote: string;
    emailContactNote: string;
    navHeading: string;
    copyrightNotice: string;
    motto: string;
  };
}
