const en = {
  // Navbar
  nav: {
    metrics: "Metrics",
    services: "Services",
    workflow: "Workflow",
    caseStudies: "Case Studies",
    skills: "Skills",
    trackRecord: "Track Record",
    pricing: "Pricing",
    contact: "Contact",
    getQuote: "Get a Quote",
  },

  // Hero
  hero: {
    badge: "Available for new projects",
    name: "Andrew, Yu",
    subtitle: "Korean Localization,",
    subtitleHighlight: "Developer-Grade",
    subtitleEnd: "Precision",
    description:
      "I bridge the gap between your dev team and the Korean market. Not just translation \u2014 technical localization that ships without breaking your build.",
    ctaCaseStudies: "See Case Studies",
    ctaPricing: "View Pricing",
  },

  // Metrics
  metrics: {
    tag: "Track Record",
    title: "Numbers That Speak for Themselves",
    description: "Measurable results from real production localization work, not estimates.",
    cards: [
      {
        unit: "Years",
        subtitle: "Continuous Collaboration",
        description: "Long-term partnership with Tiimo ApS since 2023",
      },
      {
        unit: "Crashes",
        subtitle: "Format-Related Errors",
        description: "Zero runtime errors from localization over 24+ months",
      },
      {
        unit: "Platforms",
        subtitle: "iOS, Android, Web",
        description: "Consistent quality across all user touchpoints",
      },
      {
        unit: "Validated",
        subtitle: "Real Device Testing",
        description: "Every string tested in actual app UI before release",
      },
    ],
  },

  // Pillars
  pillars: {
    tag: "What sets me apart",
    title: "More Than Translation",
    description:
      "Traditional translators deliver text. I deliver production-ready localized assets that integrate seamlessly with your development workflow.",
    items: [
      {
        title: "Technical Understanding",
        description:
          "I read your codebase, not just your strings. Understanding format specifiers, pluralization rules, and platform-specific constraints means zero localization-induced crashes.",
        checklist: [
          "Platform-specific placeholder management (iOS: %@, Android: %1$s)",
          "ICU MessageFormat handling",
          "API integration (Lokalise, Localazy, Localizely)",
          "Version control with meaningful commits",
        ],
        tags: ["String Interpolation", "Plural Rules", "Format Specifiers"],
      },
      {
        title: "Context-Aware Localization",
        description:
          "Korean honorifics, text length expansion, and cultural nuance handled with precision. I consider the UI context, not just the dictionary definition.",
        checklist: [
          "Investigated UI context before translating",
          'Disambiguated dual-meaning words ("Plan" example)',
          "Natural Korean expression vs. literal translation",
          "Tracked product changes (Plan tab \u2192 Today tab)",
        ],
        tags: ["Honorifics", "Cultural Nuance", "Length Constraints"],
      },
      {
        title: "UI/UX Testing",
        description:
          "Every translation is verified in-context on real devices. Text truncation, layout overflow, and edge cases are caught before your users see them.",
        checklist: [
          "Tested every string in actual app (not just platform)",
          "Verified layout on real iOS devices",
          "Multi-context string validation",
          "Length optimization for Korean text expansion",
        ],
        tags: ["Device Testing", "Layout QA", "Screenshot Review"],
      },
      {
        title: "Developer Workflow",
        description:
          "I integrate directly into your CI/CD pipeline. Pull requests, branch-based workflows, and automation-first delivery mean no manual file juggling.",
        checklist: [
          "Git-based workflow with structured commits",
          "Project-specific glossaries and context docs",
          "Automated format validation",
          "Translation platform API scripting",
        ],
        tags: ["CI/CD", "Git Workflow", "API Integration"],
      },
    ],
  },

  // Workflow
  workflow: {
    tag: "How I work",
    title: "Localization Workflow",
    description:
      "A structured, repeatable process that integrates directly into your development cycle. Click any step to see the details.",
    steps: [
      {
        title: "Context Discovery",
        details: [
          "Install and use app in English",
          "Document user journeys",
          "Identify ambiguous terms",
          "Review existing translations",
        ],
      },
      {
        title: "Technical Validation",
        details: [
          "Check platform-specific formats (iOS/Android)",
          "Verify ICU MessageFormat syntax",
          "Test placeholder preservation",
          "Review API documentation",
        ],
      },
      {
        title: "Translation + Testing",
        details: [
          "Translate in localization platform",
          "Test in TestFlight build",
          "Verify UI layout on real devices",
          "Check multi-context string reuse",
        ],
      },
      {
        title: "Developer Collaboration",
        details: [
          "Commit with structured messages",
          "Document changes in glossary",
          "Flag deprecated strings",
          "Proactive feature updates",
        ],
      },
      {
        title: "Continuous Maintenance",
        details: [
          'Track product changes (e.g., "Plan" \u2192 "Today" tab)',
          "Update FAQ/documentation",
          "Monitor user feedback",
          "Quarterly quality audits",
        ],
      },
    ],
  },

  // Case Studies
  caseStudies: {
    tag: "Before / After examples",
    title: "Translation vs. Localization",
    description:
      "The difference between breaking your app and delighting Korean users comes down to understanding context, not just vocabulary.",
    tabs: {
      precision: "Technical Precision",
      cultural: "Cultural Adaptation",
      disambiguation: "Disambiguation",
      conciseness: "Conciseness",
    },
    englishSource: "English source:",
    whyItMatters: "Why it matters",
    impact: "Impact",
    studies: {
      precision: {
        title: "Technical Precision",
        context: "iOS string formatting",
        commentBefore: "// Changed separator breaks consistency",
        commentAfter: "// Preserved exact format markers",
        checks: [
          "3/3 format specifiers preserved",
          "Separator character kept consistent",
          "Validated against NSString format rules",
        ],
      },
      cultural: {
        title: "Cultural Adaptation",
        context: "Task template for routine planning",
        codeComment: "// Task template string",
        literalTranslation: "Literal Translation",
        machineOutput: "Machine output",
        contextAware: "Context-Aware",
        humanLocalization: "Human localization",
      },
      disambiguation: {
        title: "Disambiguation",
        context: '"Plan" used in two different contexts',
        codeComment: "// Used in multiple UI locations",
        problem:
          "Same English word, different meanings \u2014 Pricing page: subscription tiers vs. App features: scheduling/planning",
        contextDependent: "Context-dependent resolution",
        subscriptionContext: "Subscription context",
        planningContext: "Planning context",
      },
      conciseness: {
        title: "Conciseness",
        context: "Button text with space constraints",
        challenge:
          "Korean text is typically 1.3\u20131.5x longer than English. Button text must fit the UI.",
        overflow: "Overflow",
        fits: "Fits",
        before: "Before",
        after: "After",
      },
    },
  },

  // Skills
  skills: {
    tag: "Technical toolkit",
    title: "Skills & Tools",
    description:
      "The platforms, formats, and workflows I use daily to deliver production-ready Korean localization. Hover over any skill to learn more.",
    categories: {
      localizationPlatforms: "Localization Platforms",
      technicalFormats: "Technical Formats",
      developerTools: "Developer Tools",
      qualityAssurance: "Quality Assurance",
    },
  },

  // Track Record
  trackRecord: {
    tag: "Proven results",
    title: "Proven Track Record",
    description:
      "Long-term partnership delivering production-grade Korean localization for a neurodivergent-focused productivity app.",
    keyAchievements: "Key Achievements",
    achievementsSubtitle: "Measurable outcomes from an ongoing production partnership",
    achievements: [
      "Zero format-related crashes across 2+ years",
      "4.5+ star rating with positive localization feedback",
      "Proactive quality: flagged Android strings after deprecation",
      "Team efficiency: deployments without Korean re-review",
      "Documentation: maintained glossaries and context guidelines",
    ],
    platformsManaged: "Platforms managed",
    platforms: [
      { name: "Localise.biz", role: "Primary" },
      { name: "Localazy", role: "Secondary" },
      { name: "Contentful CMS", role: "Web content" },
    ],
    ndaNotice:
      "Work involves NDA-protected codebase. Methodologies and quality standards demonstrated here are applicable to any engagement.",
    scopeLabels: {
      platforms: "Platforms",
      duration: "Duration",
      crashes: "Crashes",
      rating: "Rating",
    },
    scopeValues: {
      platforms: "3",
      duration: "2+ yrs",
      crashes: "0",
      rating: "4.5+",
    },
  },

  // Pricing
  pricing: {
    tag: "Pricing",
    title: "Transparent, Scalable Pricing",
    description:
      "Choose the tier that matches your release cadence and team size. All plans include format validation and technical QA.",
    mostPopular: "Most Popular",
    getStarted: "Get Started",
    contactMe: "Contact Me",
    tiers: [
      {
        name: "Starter",
        description: "For indie devs and small teams shipping their first Korean release.",
        price: "$0.08",
        unit: "per word",
        features: [
          "Korean translation with technical review",
          "Format specifier validation",
          "Up to 5,000 words per month",
          "7-day turnaround",
          "One revision round",
          "Email support",
        ],
      },
      {
        name: "Pro",
        description:
          "For teams that ship weekly and need a localization partner embedded in their workflow.",
        price: "$0.12",
        unit: "per word",
        features: [
          "Everything in Starter, plus:",
          "Git/CI pipeline integration",
          "In-context UI/UX review",
          "48-hour turnaround",
          "Unlimited revisions",
          "Priority Slack/Teams support",
          "Monthly terminology reports",
          "Naver SEO optimization",
        ],
      },
      {
        name: "Enterprise",
        description:
          "For organizations with complex, regulated, or high-volume localization needs.",
        price: "Custom",
        unit: "",
        features: [
          "Everything in Pro, plus:",
          "Dedicated account manager",
          "Custom API integrations",
          "Regulatory compliance review",
          "On-call availability",
          "SLA guarantees",
          "Quarterly business reviews",
          "Multi-language coordination",
        ],
      },
    ],
  },

  // Contact
  contact: {
    tag: "Get in touch",
    title: "Let's Ship Korean Together",
    description:
      "Tell me about your project and I'll get back to you within 24 hours with a tailored proposal.",
    form: {
      name: "Name",
      namePlaceholder: "Your name",
      email: "Email",
      emailPlaceholder: "you@company.com",
      company: "Company / App Name",
      companyPlaceholder: "Acme Inc.",
      platform: "Platform",
      details: "Project Details",
      detailsPlaceholder:
        "Tell me about your app, word count estimate, timeline, and any specific technical requirements...",
      submit: "Send Message",
    },
    success: {
      title: "Message Sent",
      description:
        "Thanks for reaching out! I'll review your project details and get back to you within 24 hours.",
      sendAnother: "Send Another",
    },
    calendly: {
      title: "Book a Discovery Call",
      description:
        "Prefer to talk live? Schedule a 30-minute call to discuss your project requirements and workflow.",
      button: "Schedule on Calendly",
    },
    directContact: {
      title: "Direct Contact",
      email: "hello@koreanlocalize.dev",
      location: "Seoul, South Korea (KST / UTC+9)",
      responseTime: "Response within 24 hours",
    },
    toolsTitle: "Tools I Work With",
  },

  // Footer
  footer: {
    tagline: "Built with Next.js. Localized with care.",
  },
};

export type Dictionary = typeof en;
export default en;
