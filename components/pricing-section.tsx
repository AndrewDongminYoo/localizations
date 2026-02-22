"use client"

import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import { useI18n } from "@/lib/i18n/context"

const tierHighlightIndex = 1 // Pro tier

export function PricingSection() {
  const { t } = useI18n()

  return (
    <section id="pricing" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-primary">
            {t.pricing.tag}
          </p>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            {t.pricing.title}
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground">
            {t.pricing.description}
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {t.pricing.tiers.map((tier, index) => {
            const isHighlighted = index === tierHighlightIndex
            return (
              <div
                key={tier.name}
                className={`relative flex flex-col rounded-xl border p-6 transition-all md:p-8 ${
                  isHighlighted
                    ? "border-primary bg-card shadow-lg shadow-primary/5"
                    : "border-border bg-card"
                }`}
              >
                {isHighlighted && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                      {t.pricing.mostPopular}
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
                  variant={isHighlighted ? "default" : "outline"}
                  asChild
                >
                  <a href="#contact">
                    {tier.name === "Enterprise" ? t.pricing.contactMe : t.pricing.getStarted}
                  </a>
                </Button>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
