"use client"

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, ArrowUpRight } from "lucide-react"

const caseStudies = [
  {
    id: "fintech",
    label: "Fintech App",
    client: "Leading Korean Fintech Platform",
    platform: "iOS & Android",
    duration: "Ongoing (2+ years)",
    challenge:
      "The app had 4,500+ strings with complex financial terminology, dynamic number formatting (Korean won currency), and strict regulatory language requirements. Previous translators caused 3 production crashes from malformed format specifiers.",
    solution:
      "Built a custom validation pipeline that catches format specifier mismatches before PR review. Implemented Korean number formatting (10,000-based grouping) and automated glossary enforcement for regulated financial terms.",
    results: [
      "Zero format-related crashes since engagement",
      "40% reduction in localization turnaround time",
      "Korean App Store rating improved from 3.8 to 4.6",
      "Consistent terminology across 4,500+ strings",
    ],
    tags: ["React Native", "Lokalise API", "Financial Terms", "Currency Formatting"],
  },
  {
    id: "saas",
    label: "SaaS Platform",
    client: "B2B SaaS Analytics Tool",
    platform: "Web (React)",
    duration: "8 months",
    challenge:
      "A rapidly iterating product with weekly releases. The i18n setup used react-intl with ICU message syntax. Dynamic pluralization in Korean (which lacks grammatical plurals) was causing confusion. Marketing also needed localized landing pages with SEO optimization.",
    solution:
      "Integrated directly into their GitHub workflow with automated string extraction. Created a Korean style guide for the ICU message format, optimized meta tags and content for Korean search engines (Naver SEO), and built a terminology database for consistent UX copy.",
    results: [
      "Korean market revenue grew 120% in 6 months",
      "Top 3 Naver search ranking for primary keywords",
      "Weekly release cadence maintained without delays",
      "Zero i18n-related Sentry errors in Korean locale",
    ],
    tags: ["React", "react-intl", "ICU Format", "Naver SEO", "GitHub Actions"],
  },
  {
    id: "gaming",
    label: "Mobile Game",
    client: "Indie Game Studio",
    platform: "Unity (iOS & Android)",
    duration: "4 months",
    challenge:
      "A narrative-driven RPG with 80,000+ words of dialogue, character voice tones (formal/casual Korean speech levels), and in-game UI with tight character limits. Unity's localization system required specific CSV formatting.",
    solution:
      "Developed a speech level consistency matrix mapping characters to appropriate Korean honorific tiers. Created a custom script to validate CSV encoding and escape sequences. Performed full device testing for text overflow in-game.",
    results: [
      "98% positive reviews on Korean localization quality",
      "Featured in Korean App Store 'Games We Love'",
      "All 6 speech levels properly implemented",
      "No text overflow issues reported post-launch",
    ],
    tags: ["Unity", "CSV Pipeline", "Speech Levels", "Narrative", "Device QA"],
  },
]

export function CaseStudiesSection() {
  return (
    <section id="case-studies" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-primary">
            Real results
          </p>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Case Studies
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground">
            {"See how developer-aware localization has driven real business outcomes for teams shipping to the Korean market."}
          </p>
        </div>

        <div className="mt-14">
          <Tabs defaultValue="fintech" className="w-full">
            <TabsList className="mx-auto flex w-full max-w-md rounded-xl bg-muted p-1">
              {caseStudies.map((study) => (
                <TabsTrigger
                  key={study.id}
                  value={study.id}
                  className="flex-1 rounded-lg text-xs data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm sm:text-sm"
                >
                  {study.label}
                </TabsTrigger>
              ))}
            </TabsList>

            {caseStudies.map((study) => (
              <TabsContent key={study.id} value={study.id} className="mt-8">
                <div className="rounded-xl border border-border bg-card">
                  {/* Header */}
                  <div className="border-b border-border p-6 md:p-8">
                    <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                      <div>
                        <h3 className="text-xl font-semibold text-foreground">
                          {study.client}
                        </h3>
                        <div className="mt-2 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                          <span>{study.platform}</span>
                          <span className="h-1 w-1 rounded-full bg-muted-foreground/40" />
                          <span>{study.duration}</span>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {study.tags.map((tag) => (
                          <Badge
                            key={tag}
                            variant="secondary"
                            className="rounded-md border border-border text-xs font-medium"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="grid gap-6 p-6 md:grid-cols-3 md:gap-8 md:p-8">
                    <div>
                      <h4 className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                        <ArrowUpRight className="h-3.5 w-3.5 text-primary" />
                        Challenge
                      </h4>
                      <p className="mt-3 text-sm leading-relaxed text-foreground/80">
                        {study.challenge}
                      </p>
                    </div>
                    <div>
                      <h4 className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                        <ArrowUpRight className="h-3.5 w-3.5 text-primary" />
                        Solution
                      </h4>
                      <p className="mt-3 text-sm leading-relaxed text-foreground/80">
                        {study.solution}
                      </p>
                    </div>
                    <div>
                      <h4 className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                        <ArrowUpRight className="h-3.5 w-3.5 text-primary" />
                        Results
                      </h4>
                      <ul className="mt-3 flex flex-col gap-2.5">
                        {study.results.map((result) => (
                          <li key={result} className="flex items-start gap-2 text-sm text-foreground/80">
                            <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" />
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  )
}
