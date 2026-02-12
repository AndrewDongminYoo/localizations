"use client"

import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

const tiers = [
  {
    name: "Starter",
    description: "For indie devs and small teams shipping their first Korean release.",
    price: "$0.08",
    unit: "per word",
    highlight: false,
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
    description: "For teams that ship weekly and need a localization partner embedded in their workflow.",
    price: "$0.12",
    unit: "per word",
    highlight: true,
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
    description: "For organizations with complex, regulated, or high-volume localization needs.",
    price: "Custom",
    unit: "",
    highlight: false,
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
]

export function PricingSection() {
  return (
    <section id="pricing" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-primary">
            Pricing
          </p>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Transparent, Scalable Pricing
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground">
            {"Choose the tier that matches your release cadence and team size. All plans include format validation and technical QA."}
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative flex flex-col rounded-xl border p-6 transition-all md:p-8 ${
                tier.highlight
                  ? "border-primary bg-card shadow-lg shadow-primary/5"
                  : "border-border bg-card"
              }`}
            >
              {tier.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                    Most Popular
                  </span>
                </div>
              )}

              <div>
                <h3 className="text-lg font-semibold text-foreground">{tier.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{tier.description}</p>
              </div>

              <div className="mt-6">
                <span className="text-3xl font-bold text-foreground md:text-4xl">
                  {tier.price}
                </span>
                {tier.unit && (
                  <span className="ml-1 text-sm text-muted-foreground">{tier.unit}</span>
                )}
              </div>

              <ul className="mt-6 flex flex-1 flex-col gap-3">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5 text-sm text-foreground/80">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Button
                className="mt-8 w-full rounded-lg"
                variant={tier.highlight ? "default" : "outline"}
                asChild
              >
                <a href="#contact">
                  {tier.name === "Enterprise" ? "Contact Me" : "Get Started"}
                </a>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
