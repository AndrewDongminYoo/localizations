"use client"

import { useState } from "react"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { X, Check, AlertTriangle, ArrowRight } from "lucide-react"

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
    id: "literal",
    label: "Literal Trap",
    title: "Literal Translation Trap",
    context: "Task template in planning app",
    english: "Water plants",
    before: {
      text: "\uC218\uC0DD \uC2DD\uBB3C",
      explanation: "Aquatic plants \u2014 wrong semantic category",
    },
    after: {
      text: "\uC2DD\uBB3C \uBB3C\uC8FC\uAE30",
      explanation: "Watering plants \u2014 correct user action",
    },
    whyItMatters:
      "Recognized verb vs. noun ambiguity in English and understood the user intent within a task-management context.",
    impact: "Prevented misclassification in task templates across 200+ planning workflows",
  },
  {
    id: "context",
    label: "Disambiguation",
    title: "Context Disambiguation",
    context: "Mixed usage across pricing and features",
    english: "Plan",
    problem: 'Same English word, two distinct meanings within one app',
    solution: [
      { label: "Pricing page", translation: "\uC694\uAE08\uC81C (subscription tier)" },
      { label: "Planning features", translation: "\uACC4\uD68D (schedule / plan)" },
    ],
    whyItMatters:
      "A single word resolved to two different Korean terms depending on where it appeared in the UI, eliminating user confusion.",
    impact: "Eliminated support ticket category for \u201Cwrong plan displayed\u201D entirely",
  },
  {
    id: "format",
    label: "Format Safety",
    title: "Format Preservation",
    context: "iOS string placeholder format",
    english: "%@ at %@ \u00B7 %@",
    codeBlock: {
      label: "Localizable.strings",
      source: '"event_detail" = "%@ at %@ \u00B7 %@";',
      target: '"event_detail" = "%@ \uC2DC %@ \u00B7 %@";',
    },
    whyItMatters:
      "Every %@ placeholder preserved in exact order. One misplaced or removed specifier would crash the app at runtime.",
    impact: "Zero crashes from format string errors over 2+ years of continuous delivery",
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

function LiteralTrapContent({ study }: { study: CaseStudy }) {
  return (
    <div className="flex flex-col gap-6">
      {/* English source */}
      <CodeBlock label="en.json">
        <div className="flex flex-col gap-1">
          <span className="text-muted-foreground">{"// Task template string"}</span>
          <span>
            <span className="text-muted-foreground">{'"task_name"'}: </span>
            <span className="text-primary">{`"${study.english}"`}</span>
          </span>
        </div>
      </CodeBlock>

      {/* Before / After */}
      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-lg border border-destructive/20 bg-destructive/5 p-5">
          <div className="mb-3 flex items-center justify-between">
            <ResultBadge variant="error" label="Before" />
            <span className="text-xs text-muted-foreground">Literal machine output</span>
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
            <ResultBadge variant="success" label="After" />
            <span className="text-xs text-muted-foreground">Context-aware</span>
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
      {/* Problem statement */}
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

      {/* Solution mapping */}
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

function FormatContent({ study }: { study: CaseStudy }) {
  return (
    <div className="flex flex-col gap-6">
      <CodeBlock label={study.codeBlock?.label}>
        <div className="flex flex-col gap-3">
          <div>
            <span className="text-xs text-muted-foreground">{"// Source (English)"}</span>
            <div className="mt-1">
              <span className="text-foreground">{study.codeBlock?.source}</span>
            </div>
          </div>
          <div className="border-t border-border pt-3">
            <span className="text-xs text-muted-foreground">{"// Target (Korean)"}</span>
            <div className="mt-1">
              <span className="text-primary">{study.codeBlock?.target}</span>
            </div>
          </div>
        </div>
      </CodeBlock>

      <div className="grid gap-4 md:grid-cols-3">
        <div className="flex items-center gap-3 rounded-lg border border-border bg-card p-4">
          <Check className="h-4 w-4 shrink-0 text-primary" />
          <span className="text-sm text-foreground">
            3/3 format specifiers preserved
          </span>
        </div>
        <div className="flex items-center gap-3 rounded-lg border border-border bg-card p-4">
          <Check className="h-4 w-4 shrink-0 text-primary" />
          <span className="text-sm text-foreground">
            Correct placeholder order maintained
          </span>
        </div>
        <div className="flex items-center gap-3 rounded-lg border border-border bg-card p-4">
          <Check className="h-4 w-4 shrink-0 text-primary" />
          <span className="text-sm text-foreground">
            Validated against NSString format rules
          </span>
        </div>
      </div>
    </div>
  )
}

export function CaseStudiesSection() {
  const [activeTab, setActiveTab] = useState("literal")

  return (
    <section id="case-studies" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-primary">
            Real examples
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
            <TabsList className="mx-auto flex w-full max-w-lg rounded-xl bg-muted p-1">
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

                  {/* Content */}
                  <div className="p-6 md:p-8">
                    {study.id === "literal" && <LiteralTrapContent study={study} />}
                    {study.id === "context" && <DisambiguationContent study={study} />}
                    {study.id === "format" && <FormatContent study={study} />}
                  </div>

                  {/* Footer */}
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
