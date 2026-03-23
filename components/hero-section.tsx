"use client";

import { ArrowRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/lib/i18n/context";

export function HeroSection() {
  const { t } = useI18n();

  return (
    <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-48 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute right-0 -bottom-24 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <Badge
            className="mb-6 gap-1.5 rounded-lg border border-border px-3 py-1 text-xs font-medium text-muted-foreground"
            variant="secondary"
          >
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary" />
            {t.hero.badge}
          </Badge>

          <h1 className="text-4xl font-bold tracking-tight text-balance text-foreground md:text-6xl lg:text-7xl">
            {t.hero.name}
          </h1>

          <p className="mx-auto mt-4 text-lg text-pretty text-muted-foreground md:text-xl">
            {t.hero.subtitle}{" "}
            <span className="font-semibold text-primary">{t.hero.subtitleHighlight}</span>{" "}
            {t.hero.subtitleEnd}
          </p>

          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-pretty text-muted-foreground">
            {t.hero.description}
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button asChild className="w-full rounded-lg sm:w-auto" size="lg">
              <a href="#case-studies">
                {t.hero.ctaCaseStudies}
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button asChild className="w-full rounded-lg sm:w-auto" size="lg" variant="outline">
              <a href="#pricing">{t.hero.ctaPricing}</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
