"use client"

import { useState } from "react"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { X, Check, AlertTriangle, ArrowRight, Ruler } from "lucide-react"

interface CaseStudy {
  id: string
  label: string
  title: string
  context: string
  english: string
  problem?: string
  before?: { text: string; explanation: string }
  after?: { text: string; explanation: string }
  solution?: { label: string; translation: string }[]
  codeBlock?: { source: string; target: string; label: string }
  whyItMatters: string
  impact: string
}

const caseStudies: CaseStudy[] = [
  {
    id: "precision",
    label: "Technical Precision",
    title: "Technical Precision",
    context: "iOS string formatting",
    english: "%@ at %@ \u00B7 %@",
    codeBlock: {
      source: '"s": "%@ at %@ \u00B7 %@",\n"t": "%@\uC5D0\uC11C %@ - %@"  // Changed separator breaks consistency',
      target: '"s": "%@ at %@ \u00B7 %@",\n"t": "%@ \uC2DC %@ \u00B7 %@"  // Preserved exact format markers',
      label: "Localizable.strings",
    },
    whyItMatters:
      "Every %@ placeholder preserved in exact order and separators kept consistent. One misplaced specifier would crash the app at runtime.",
    impact: "Maintained visual consistency across all iOS views. Zero format-related crashes.",
  },
  {
    id: "cultural",
    label: "Cultural Adaptation",
    title: "Cultural Adaptation",
    context: "Task template for routine planning",
    english: "Water plants",
    before: {
      text: "\uC218\uC0DD \uC2DD\uBB3C",
      explanation: "Aquatic plants \u2014 wrong meaning entirely!",
    },
    after: {
      text: "\uC2DD\uBB3C \uBB3C\uC8FC\uAE30",
      explanation: "Watering plants \u2014 correct user action",
    },
    whyItMatters:
      "Recognized verb vs. noun ambiguity. Neurodivergent users (Tiimo's audience) need clear action-oriented language.",
    impact: "Prevented task misclassification across all planning workflows",
  },
  {
    id: "disambiguation",
    label: "Disambiguation",
    title: "Disambiguation",
    context: '"Plan" used in two different contexts',
    english: "Plan",
    problem: "Same English word, different meanings \u2014 Pricing page: subscription tiers vs. App features: scheduling/planning",
    solution: [
      { label: "Subscription context", translation: "\uC694\uAE08\uC81C" },
      { label: "Planning context", translation: "\uACC4\uD68D" },
    ],
    whyItMatters:
      "A single word resolved to two different Korean terms depending on where it appeared in the UI, eliminating user confusion.",
    impact: "Reduced support inquiries about pricing confusion",
  },
  {
    id: "conciseness",
    label: "Conciseness",
    title: "Conciseness",
    context: "Button text with space constraints",
    english: "Access all features",
    before: {
      text: "\uBAA8\uB4E0 \uAE30\uB2A5\uC5D0 \uB300\uD55C \uC561\uC138\uC2A4",
      explanation: "Too long for button \u2014 overflows UI container",
    },
    after: {
      text: "\uBAA8\uB4E0 \uAE30\uB2A5 \uC774\uC6A9\uD558\uAE30",
      explanation: "Optimized for UI \u2014 natural Korean expression",
    },
    whyItMatters:
      "Korean text is typically 1.3\u20131.5x longer than English. Must test actual button rendering to ensure no overflow.",
    impact: "Eliminated all button text overflow issues across the app",
  },
]

function CodeBlock({ children, label }: { children: React.ReactNode; label?: string }) {
  return (
    <div className="overflow-hidden rounded-lg border border-border bg-muted/50">
      {label && (
        <div className="flex items-center gap-2 border-b border-border px-4 py-2">
          <div className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-destructive/60" />
            <span className="h-2.5 w-2.5 rounded-full bg-chart-4/60" />
            <span className="h-2.5 w-2.5 rounded-full bg-primary/40" />
          </div>
          <span className="font-mono text-xs text-muted-foreground">{label}</span>
        </div>
      )}
      <div className="p-4 font-mono text-sm leading-relaxed">{children}</div>
    </div>
  )
}

function ResultBadge({ variant, label }: { variant: "error" | "success"; label: string }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-md px-2.5 py-1 text-xs font-semibold ${
        variant === "error"
          ? "bg-destructive/10 text-destructive"
          : "bg-primary/10 text-primary"
      }`}
    >
      {variant === "error" ? <X className="h-3 w-3" /> : <Check className="h-3 w-3" />}
      {label}
    </span>
  )
}

function PrecisionContent({ study }: { study: CaseStudy }) {
  return (
    <div className="flex flex-col gap-6">
      <div className="grid gap-4 md:grid-cols-2">
        <CodeBlock label="Before">
          <div className="flex flex-col gap-1">
            <span className="text-xs text-amber-500 dark:text-amber-400">{"// Changed separator breaks consistency"}</span>
            {study.codeBlock?.source.split("\n").map((line, i) => (
              <span key={i} className={i === 1 ? "text-amber-600 dark:text-amber-400" : "text-foreground"}>
                {line}
              </span>
            ))}
          </div>
        </CodeBlock>
        <CodeBlock label="After">
          <div className="flex flex-col gap-1">
            <span className="text-xs text-emerald-500 dark:text-emerald-400">{"// Preserved exact format markers"}</span>
            {study.codeBlock?.target.split("\n").map((line, i) => (
              <span key={i} className={i === 1 ? "text-emerald-600 dark:text-emerald-400" : "text-foreground"}>
                {line}
              </span>
            ))}
          </div>
        </CodeBlock>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {["3/3 format specifiers preserved", "Separator character kept consistent", "Validated against NSString format rules"].map((item, i) => (
          <div key={i} className="flex items-center gap-3 rounded-lg border border-border bg-card p-4">
            <Check className="h-4 w-4 shrink-0 text-primary" />
            <span className="text-sm text-foreground">{item}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function CulturalContent({ study }: { study: CaseStudy }) {
  return (
    <div className="flex flex-col gap-6">
      <CodeBlock label="en.json">
        <div className="flex flex-col gap-1">
          <span className="text-muted-foreground">{"// Task template string"}</span>
          <span>
            <span className="text-muted-foreground">{'"task_name"'}: </span>
            <span className="text-primary">{`"${study.english}"`}</span>
          </span>
        </div>
      </CodeBlock>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-lg border border-destructive/20 bg-destructive/5 p-5">
          <div className="mb-3 flex items-center justify-between">
            <ResultBadge variant="error" label="Literal Translation" />
            <span className="text-xs text-muted-foreground">Machine output</span>
          </div>
          <p className="font-mono text-lg font-semibold text-foreground">
            {study.before?.text}
          </p>
          <p className="mt-2 text-sm text-muted-foreground">
            {study.before?.explanation}
          </p>
        </div>

        <div className="rounded-lg border border-primary/20 bg-primary/5 p-5">
          <div className="mb-3 flex items-center justify-between">
            <ResultBadge variant="success" label="Context-Aware" />
            <span className="text-xs text-muted-foreground">Human localization</span>
          </div>
          <p className="font-mono text-lg font-semibold text-foreground">
            {study.after?.text}
          </p>
          <p className="mt-2 text-sm text-muted-foreground">
            {study.after?.explanation}
          </p>
        </div>
      </div>
    </div>
  )
}

function DisambiguationContent({ study }: { study: CaseStudy }) {
  return (
    <div className="flex flex-col gap-6">
      <CodeBlock label="source string">
        <div className="flex flex-col gap-1">
          <span className="text-muted-foreground">{"// Used in multiple UI locations"}</span>
          <span>
            <span className="text-muted-foreground">{'"label"'}: </span>
            <span className="text-primary">{`"${study.english}"`}</span>
          </span>
        </div>
      </CodeBlock>

      <div className="flex items-center gap-3 rounded-lg border border-chart-4/30 bg-chart-4/5 px-4 py-3">
        <AlertTriangle className="h-4 w-4 shrink-0 text-chart-4" />
        <p className="text-sm text-foreground">
          <span className="font-semibold">Problem:</span>{" "}
          {study.problem}
        </p>
      </div>

      <div className="flex flex-col gap-3">
        <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
          Context-dependent resolution
        </p>
        {study.solution?.map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-4 rounded-lg border border-border bg-card p-4"
          >
            <span className="shrink-0 rounded-md bg-secondary px-2.5 py-1 text-xs font-medium text-secondary-foreground">
              {item.label}
            </span>
            <ArrowRight className="h-3.5 w-3.5 shrink-0 text-muted-foreground" />
            <span className="font-mono text-sm font-semibold text-foreground">
              {item.translation}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

function ConcisenessContent({ study }: { study: CaseStudy }) {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-3 rounded-lg border border-chart-4/30 bg-chart-4/5 px-4 py-3">
        <Ruler className="h-4 w-4 shrink-0 text-chart-4" />
        <p className="text-sm text-foreground">
          <span className="font-semibold">Challenge:</span>{" "}
          {"Korean text is typically 1.3\u20131.5x longer than English. Button text must fit the UI."}
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-lg border border-destructive/20 bg-destructive/5 p-5">
          <div className="mb-3">
            <ResultBadge variant="error" label="Before" />
          </div>
          <div className="rounded-md border border-destructive/20 bg-background px-4 py-3">
            <p className="font-mono text-base font-semibold text-foreground">
              {study.before?.text}
            </p>
          </div>
          <p className="mt-3 text-sm text-muted-foreground">
            {study.before?.explanation}
          </p>
          <div className="mt-3 flex items-center gap-2">
            <div className="h-2 flex-1 overflow-hidden rounded-full bg-muted">
              <div className="h-full w-full rounded-full bg-destructive/60" />
            </div>
            <span className="text-xs font-medium text-destructive">{"Overflow"}</span>
          </div>
        </div>

        <div className="rounded-lg border border-primary/20 bg-primary/5 p-5">
          <div className="mb-3">
            <ResultBadge variant="success" label="After" />
          </div>
          <div className="rounded-md border border-primary/20 bg-background px-4 py-3">
            <p className="font-mono text-base font-semibold text-foreground">
              {study.after?.text}
            </p>
          </div>
          <p className="mt-3 text-sm text-muted-foreground">
            {study.after?.explanation}
          </p>
          <div className="mt-3 flex items-center gap-2">
            <div className="h-2 flex-1 overflow-hidden rounded-full bg-muted">
              <div className="h-full w-3/4 rounded-full bg-primary/60" />
            </div>
            <span className="text-xs font-medium text-primary">{"Fits"}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export function CaseStudiesSection() {
  const [activeTab, setActiveTab] = useState("precision")

  return (
    <section id="case-studies" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-primary">
            Before / After examples
          </p>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Translation vs. Localization
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground">
            {"The difference between breaking your app and delighting Korean users comes down to understanding context, not just vocabulary."}
          </p>
        </div>

        <div className="mt-14">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="mx-auto grid w-full max-w-2xl grid-cols-4 rounded-xl bg-muted p-1">
              {caseStudies.map((study) => (
                <TabsTrigger
                  key={study.id}
                  value={study.id}
                  className="rounded-lg text-xs data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm sm:text-sm"
                >
                  {study.label}
                </TabsTrigger>
              ))}
            </TabsList>

            {caseStudies.map((study) => (
              <TabsContent key={study.id} value={study.id} className="mt-8">
                <div className="rounded-xl border border-border bg-card">
                  <div className="border-b border-border p-6 md:p-8">
                    <div className="flex flex-col gap-2">
                      <div className="flex flex-wrap items-center gap-3">
                        <h3 className="text-xl font-semibold text-foreground">
                          {study.title}
                        </h3>
                        <span className="rounded-md bg-secondary px-2.5 py-1 text-xs font-medium text-secondary-foreground">
                          {study.context}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        English source:{" "}
                        <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs text-foreground">
                          {study.english}
                        </code>
                      </p>
                    </div>
                  </div>

                  <div className="p-6 md:p-8">
                    {study.id === "precision" && <PrecisionContent study={study} />}
                    {study.id === "cultural" && <CulturalContent study={study} />}
                    {study.id === "disambiguation" && <DisambiguationContent study={study} />}
                    {study.id === "conciseness" && <ConcisenessContent study={study} />}
                  </div>

                  <div className="border-t border-border p-6 md:p-8">
                    <div className="grid gap-4 md:grid-cols-2">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                          Why it matters
                        </p>
                        <p className="mt-2 text-sm leading-relaxed text-foreground/80">
                          {study.whyItMatters}
                        </p>
                      </div>
                      <div className="flex items-center md:justify-end">
                        <div className="flex items-center gap-3 rounded-lg bg-primary/5 px-5 py-3">
                          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                            <Check className="h-4 w-4 text-primary" />
                          </div>
                          <div>
                            <p className="text-xs text-muted-foreground">Impact</p>
                            <p className="text-sm font-semibold text-foreground">
                              {study.impact}
                            </p>
                          </div>
                        </div>
                      </div>
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
