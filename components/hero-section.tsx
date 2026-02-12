"use client"

import { AnimatedCounter } from "@/components/animated-counter"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, Shield, Smartphone, Workflow } from "lucide-react"

const stats = [
  {
    icon: <Workflow className="h-4 w-4" />,
    value: 2,
    suffix: "+",
    label: "Years Continuous Collaboration",
  },
  {
    icon: <Shield className="h-4 w-4" />,
    value: 0,
    suffix: "",
    label: "Format-Related Crashes",
    prefix: "",
    displayOverride: "Zero",
  },
  {
    icon: <Smartphone className="h-4 w-4" />,
    value: 3,
    suffix: "",
    label: "iOS, Android, Web Coverage",
    displayOverride: "3 Platforms",
  },
  {
    icon: <ArrowRight className="h-4 w-4" />,
    value: 100,
    suffix: "%",
    label: "API-Driven Workflow Automation",
  },
]

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pb-20 pt-32 md:pb-28 md:pt-40">
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-48 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute -bottom-24 right-0 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <Badge variant="secondary" className="mb-6 gap-1.5 rounded-lg border border-border px-3 py-1 text-xs font-medium text-muted-foreground">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary" />
            Available for new projects
          </Badge>

          <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground md:text-6xl lg:text-7xl">
            Korean Localization,{" "}
            <span className="text-primary">Developer-Grade</span>{" "}
            Precision
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
            I bridge the gap between your dev team and the Korean market. Not just translation{" "}
            {"— technical localization that ships without breaking your build."}
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button size="lg" className="w-full rounded-lg sm:w-auto" asChild>
              <a href="#case-studies">
                See Case Studies
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button variant="outline" size="lg" className="w-full rounded-lg sm:w-auto" asChild>
              <a href="#pricing">View Pricing</a>
            </Button>
          </div>
        </div>

        {/* Stats grid */}
        <div className="mx-auto mt-16 grid max-w-4xl grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="group rounded-xl border border-border bg-card p-5 text-center transition-colors hover:border-primary/30"
            >
              <div className="mx-auto mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                {stat.icon}
              </div>
              <div className="text-2xl font-bold text-foreground md:text-3xl">
                {stat.displayOverride ? (
                  <span className="font-mono">{stat.displayOverride}</span>
                ) : (
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} prefix={stat.prefix} />
                )}
              </div>
              <p className="mt-1 text-xs text-muted-foreground md:text-sm">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
