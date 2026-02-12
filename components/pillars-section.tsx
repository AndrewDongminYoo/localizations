"use client"

import { Code2, Brain, Smartphone, GitBranch } from "lucide-react"

const pillars = [
  {
    icon: <Code2 className="h-5 w-5" />,
    title: "Technical Understanding",
    description:
      "I read your codebase, not just your strings. Understanding format specifiers, pluralization rules, and platform-specific constraints means zero localization-induced crashes.",
    tags: ["String Interpolation", "Plural Rules", "Format Specifiers"],
  },
  {
    icon: <Brain className="h-5 w-5" />,
    title: "Context-Aware Localization",
    description:
      "Korean honorifics, text length expansion, and cultural nuance handled with precision. I consider the UI context, not just the dictionary definition.",
    tags: ["Honorifics", "Cultural Nuance", "Length Constraints"],
  },
  {
    icon: <Smartphone className="h-5 w-5" />,
    title: "UI/UX Testing",
    description:
      "Every translation is verified in-context on real devices. Text truncation, layout overflow, and right-to-left edge cases are caught before your users see them.",
    tags: ["Device Testing", "Layout QA", "Screenshot Review"],
  },
  {
    icon: <GitBranch className="h-5 w-5" />,
    title: "Developer Workflow",
    description:
      "I integrate directly into your CI/CD pipeline. Pull requests, branch-based workflows, and automation-first delivery mean no manual file juggling.",
    tags: ["CI/CD", "Git Workflow", "API Integration"],
  },
]

export function PillarsSection() {
  return (
    <section id="services" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-primary">
            What sets me apart
          </p>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            More Than Translation
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground">
            {"Traditional translators deliver text. I deliver production-ready localized assets that integrate seamlessly with your development workflow."}
          </p>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:gap-6">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="group rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/30 md:p-8"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                {pillar.icon}
              </div>
              <h3 className="mt-4 text-lg font-semibold text-foreground">
                {pillar.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {pillar.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {pillar.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md bg-secondary px-2.5 py-1 text-xs font-medium text-secondary-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
