"use client"

import { useState } from "react"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { X, Check, AlertTriangle, ArrowRight, Ruler } from "lucide-react"
import { useI18n } from "@/lib/i18n/context"

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

function PrecisionContent() {
  const { t } = useI18n()
  const s = t.caseStudies.studies.precision

  return (
    <div className="flex flex-col gap-6">
      <div className="grid gap-4 md:grid-cols-2">
        <CodeBlock label={s.commentBefore}>
          <div className="flex flex-col gap-1">
            <span className="text-xs text-amber-500 dark:text-amber-400">{s.commentBefore}</span>
            <span className="text-amber-600 dark:text-amber-400">
              {'"s": "%@ at %@ \u00B7 %@"'}
            </span>
            <span className="text-amber-600 dark:text-amber-400">
              {'"t": "%@\uC5D0\uC11C %@ - %@"'}
            </span>
          </div>
        </CodeBlock>
        <CodeBlock label={s.commentAfter}>
          <div className="flex flex-col gap-1">
            <span className="text-xs text-emerald-500 dark:text-emerald-400">{s.commentAfter}</span>
            <span className="text-emerald-600 dark:text-emerald-400">
              {'"s": "%@ at %@ \u00B7 %@"'}
            </span>
            <span className="text-emerald-600 dark:text-emerald-400">
              {'"t": "%@ \uC2DC %@ \u00B7 %@"'}
            </span>
          </div>
        </CodeBlock>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {s.checks.map((item, i) => (
          <div key={i} className="flex items-center gap-3 rounded-lg border border-border bg-card p-4">
            <Check className="h-4 w-4 shrink-0 text-primary" />
            <span className="text-sm text-foreground">{item}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function CulturalContent() {
  const { t } = useI18n()
  const s = t.caseStudies.studies.cultural

  return (
    <div className="flex flex-col gap-6">
      <CodeBlock label="en.json">
        <div className="flex flex-col gap-1">
          <span className="text-muted-foreground">{s.codeComment}</span>
          <span>
            <span className="text-muted-foreground">{'"task_name"'}: </span>
            <span className="text-primary">{'"Water plants"'}</span>
          </span>
        </div>
      </CodeBlock>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-lg border border-destructive/20 bg-destructive/5 p-5">
          <div className="mb-3 flex items-center justify-between">
            <ResultBadge variant="error" label={s.literalTranslation} />
            <span className="text-xs text-muted-foreground">{s.machineOutput}</span>
          </div>
          <p className="font-mono text-lg font-semibold text-foreground">
            {"\uC218\uC0DD \uC2DD\uBB3C"}
          </p>
          <p className="mt-2 text-sm text-muted-foreground">
            {"Aquatic plants \u2014 wrong meaning entirely!"}
          </p>
        </div>

        <div className="rounded-lg border border-primary/20 bg-primary/5 p-5">
          <div className="mb-3 flex items-center justify-between">
            <ResultBadge variant="success" label={s.contextAware} />
            <span className="text-xs text-muted-foreground">{s.humanLocalization}</span>
          </div>
          <p className="font-mono text-lg font-semibold text-foreground">
            {"\uC2DD\uBB3C \uBB3C\uC8FC\uAE30"}
          </p>
          <p className="mt-2 text-sm text-muted-foreground">
            {"Watering plants \u2014 correct user action"}
          </p>
        </div>
      </div>
    </div>
  )
}

function DisambiguationContent() {
  const { t } = useI18n()
  const s = t.caseStudies.studies.disambiguation

  return (
    <div className="flex flex-col gap-6">
      <CodeBlock label="source string">
        <div className="flex flex-col gap-1">
          <span className="text-muted-foreground">{s.codeComment}</span>
          <span>
            <span className="text-muted-foreground">{'"label"'}: </span>
            <span className="text-primary">{'"Plan"'}</span>
          </span>
        </div>
      </CodeBlock>

      <div className="flex items-center gap-3 rounded-lg border border-chart-4/30 bg-chart-4/5 px-4 py-3">
        <AlertTriangle className="h-4 w-4 shrink-0 text-chart-4" />
        <p className="text-sm text-foreground">
          <span className="font-semibold">{"Problem:"}</span>{" "}
          {s.problem}
        </p>
      </div>

      <div className="flex flex-col gap-3">
        <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
          {s.contextDependent}
        </p>
        {[
          { label: s.subscriptionContext, translation: "\uC694\uAE08\uC81C" },
          { label: s.planningContext, translation: "\uACC4\uD68D" },
        ].map((item, i) => (
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

function ConcisenessContent() {
  const { t } = useI18n()
  const s = t.caseStudies.studies.conciseness

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-3 rounded-lg border border-chart-4/30 bg-chart-4/5 px-4 py-3">
        <Ruler className="h-4 w-4 shrink-0 text-chart-4" />
        <p className="text-sm text-foreground">
          <span className="font-semibold">{"Challenge:"}</span>{" "}
          {s.challenge}
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-lg border border-destructive/20 bg-destructive/5 p-5">
          <div className="mb-3">
            <ResultBadge variant="error" label={s.before} />
          </div>
          <div className="rounded-md border border-destructive/20 bg-background px-4 py-3">
            <p className="font-mono text-base font-semibold text-foreground">
              {"\uBAA8\uB4E0 \uAE30\uB2A5\uC5D0 \uB300\uD55C \uC561\uC138\uC2A4"}
            </p>
          </div>
          <p className="mt-3 text-sm text-muted-foreground">
            {"Too long for button \u2014 overflows UI container"}
          </p>
          <div className="mt-3 flex items-center gap-2">
            <div className="h-2 flex-1 overflow-hidden rounded-full bg-muted">
              <div className="h-full w-full rounded-full bg-destructive/60" />
            </div>
            <span className="text-xs font-medium text-destructive">{s.overflow}</span>
          </div>
        </div>

        <div className="rounded-lg border border-primary/20 bg-primary/5 p-5">
          <div className="mb-3">
            <ResultBadge variant="success" label={s.after} />
          </div>
          <div className="rounded-md border border-primary/20 bg-background px-4 py-3">
            <p className="font-mono text-base font-semibold text-foreground">
              {"\uBAA8\uB4E0 \uAE30\uB2A5 \uC774\uC6A9\uD558\uAE30"}
            </p>
          </div>
          <p className="mt-3 text-sm text-muted-foreground">
            {"Optimized for UI \u2014 natural Korean expression"}
          </p>
          <div className="mt-3 flex items-center gap-2">
            <div className="h-2 flex-1 overflow-hidden rounded-full bg-muted">
              <div className="h-full w-3/4 rounded-full bg-primary/60" />
            </div>
            <span className="text-xs font-medium text-primary">{s.fits}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

// Static data for studies that don't change per locale
const studyKeys = ["precision", "cultural", "disambiguation", "conciseness"] as const

const studyEnglish: Record<string, string> = {
  precision: "%@ at %@ \u00B7 %@",
  cultural: "Water plants",
  disambiguation: "Plan",
  conciseness: "Access all features",
}

const studyWhyItMatters: Record<string, string> = {
  precision:
    "Every %@ placeholder preserved in exact order and separators kept consistent. One misplaced specifier would crash the app at runtime.",
  cultural:
    "Recognized verb vs. noun ambiguity. Neurodivergent users (Tiimo's audience) need clear action-oriented language.",
  disambiguation:
    "A single word resolved to two different Korean terms depending on where it appeared in the UI, eliminating user confusion.",
  conciseness:
    "Korean text is typically 1.3\u20131.5x longer than English. Must test actual button rendering to ensure no overflow.",
}

const studyImpact: Record<string, string> = {
  precision: "Maintained visual consistency across all iOS views. Zero format-related crashes.",
  cultural: "Prevented task misclassification across all planning workflows",
  disambiguation: "Reduced support inquiries about pricing confusion",
  conciseness: "Eliminated all button text overflow issues across the app",
}

export function CaseStudiesSection() {
  const [activeTab, setActiveTab] = useState("precision")
  const { t } = useI18n()

  return (
    <section id="case-studies" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-primary">
            {t.caseStudies.tag}
          </p>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            {t.caseStudies.title}
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground">
            {t.caseStudies.description}
          </p>
        </div>

        <div className="mt-14">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="mx-auto grid w-full max-w-2xl grid-cols-4 rounded-xl bg-muted p-1">
              {studyKeys.map((key) => (
                <TabsTrigger
                  key={key}
                  value={key}
                  className="rounded-lg text-xs data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm sm:text-sm"
                >
                  {t.caseStudies.tabs[key]}
                </TabsTrigger>
              ))}
            </TabsList>

            {studyKeys.map((key) => {
              const studyT = t.caseStudies.studies[key]
              return (
                <TabsContent key={key} value={key} className="mt-8">
                  <div className="rounded-xl border border-border bg-card">
                    <div className="border-b border-border p-6 md:p-8">
                      <div className="flex flex-col gap-2">
                        <div className="flex flex-wrap items-center gap-3">
                          <h3 className="text-xl font-semibold text-foreground">
                            {studyT.title}
                          </h3>
                          <span className="rounded-md bg-secondary px-2.5 py-1 text-xs font-medium text-secondary-foreground">
                            {studyT.context}
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {t.caseStudies.englishSource}{" "}
                          <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs text-foreground">
                            {studyEnglish[key]}
                          </code>
                        </p>
                      </div>
                    </div>

                    <div className="p-6 md:p-8">
                      {key === "precision" && <PrecisionContent />}
                      {key === "cultural" && <CulturalContent />}
                      {key === "disambiguation" && <DisambiguationContent />}
                      {key === "conciseness" && <ConcisenessContent />}
                    </div>

                    <div className="border-t border-border p-6 md:p-8">
                      <div className="grid gap-4 md:grid-cols-2">
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                            {t.caseStudies.whyItMatters}
                          </p>
                          <p className="mt-2 text-sm leading-relaxed text-foreground/80">
                            {studyWhyItMatters[key]}
                          </p>
                        </div>
                        <div className="flex items-center md:justify-end">
                          <div className="flex items-center gap-3 rounded-lg bg-primary/5 px-5 py-3">
                            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                              <Check className="h-4 w-4 text-primary" />
                            </div>
                            <div>
                              <p className="text-xs text-muted-foreground">{t.caseStudies.impact}</p>
                              <p className="text-sm font-semibold text-foreground">
                                {studyImpact[key]}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              )
            })}
          </Tabs>
        </div>
      </div>
    </section>
  )
}
