"use client"

import { Code2, Brain, Smartphone, GitBranch, Check } from "lucide-react"
import { useI18n } from "@/lib/i18n/context"

const pillarIcons = [
  <Code2 key="code" className="h-5 w-5" />,
  <Brain key="brain" className="h-5 w-5" />,
  <Smartphone key="phone" className="h-5 w-5" />,
  <GitBranch key="git" className="h-5 w-5" />,
]

export function PillarsSection() {
  const { t } = useI18n()

  return (
    <section id="services" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-primary">
            {t.pillars.tag}
          </p>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            {t.pillars.title}
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground">
            {t.pillars.description}
          </p>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:gap-6">
          {t.pillars.items.map((pillar, index) => (
            <div
              key={pillar.title}
              className="group rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/30 hover:shadow-lg md:p-8"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                {pillarIcons[index]}
              </div>
              <h3 className="mt-4 text-lg font-semibold text-foreground">
                {pillar.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {pillar.description}
              </p>

              <ul className="mt-4 flex flex-col gap-2">
                {pillar.checklist.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" />
                    <span className="text-sm leading-relaxed text-foreground/80">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-5 flex flex-wrap gap-2">
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
