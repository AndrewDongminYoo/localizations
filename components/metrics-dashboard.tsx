"use client";

import { Calendar, Monitor, ShieldCheck, Smartphone } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";

import { useI18n } from "@/lib/i18n/context";

interface CounterConfig {
  end: number;
  suffix: string;
  prefix: string;
  displayOverride?: string;
}

function useAnimatedCounter(config: CounterConfig, isVisible: boolean) {
  const [display, setDisplay] = useState(
    config.displayOverride ? "" : `${config.prefix}0${config.suffix}`
  );
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!isVisible || hasAnimated.current) return;
    hasAnimated.current = true;

    if (config.displayOverride) {
      const chars = config.displayOverride;
      let currentIndex = 0;
      const interval = setInterval(() => {
        currentIndex++;
        setDisplay(chars.slice(0, currentIndex));
        if (currentIndex >= chars.length) clearInterval(interval);
      }, 80);
      return () => clearInterval(interval);
    }

    const duration = 2000;
    const startTime = Date.now();
    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(eased * config.end);
      setDisplay(`${config.prefix}${current}${config.suffix}`);
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [isVisible, config]);

  return display;
}

const metricConfigs = [
  {
    counter: { end: 2, suffix: "+", prefix: "", displayOverride: "2+" },
    icon: Calendar,
    gradient: "from-blue-500/20 via-blue-400/10 to-transparent",
    gradientDark: "dark:from-blue-500/15 dark:via-blue-400/5 dark:to-transparent",
    iconBg: "bg-blue-500/15 text-blue-600 dark:text-blue-400",
    borderHover: "hover:border-blue-500/40",
    accentColor: "text-blue-600 dark:text-blue-400",
  },
  {
    counter: { end: 0, suffix: "", prefix: "", displayOverride: "0" },
    icon: ShieldCheck,
    gradient: "from-emerald-500/20 via-emerald-400/10 to-transparent",
    gradientDark: "dark:from-emerald-500/15 dark:via-emerald-400/5 dark:to-transparent",
    iconBg: "bg-emerald-500/15 text-emerald-600 dark:text-emerald-400",
    borderHover: "hover:border-emerald-500/40",
    accentColor: "text-emerald-600 dark:text-emerald-400",
  },
  {
    counter: { end: 3, suffix: "", prefix: "", displayOverride: "3" },
    icon: Monitor,
    gradient: "from-amber-500/20 via-amber-400/10 to-transparent",
    gradientDark: "dark:from-amber-500/15 dark:via-amber-400/5 dark:to-transparent",
    iconBg: "bg-amber-500/15 text-amber-600 dark:text-amber-400",
    borderHover: "hover:border-amber-500/40",
    accentColor: "text-amber-600 dark:text-amber-400",
  },
  {
    counter: { end: 100, suffix: "%", prefix: "" },
    icon: Smartphone,
    gradient: "from-rose-500/20 via-rose-400/10 to-transparent",
    gradientDark: "dark:from-rose-500/15 dark:via-rose-400/5 dark:to-transparent",
    iconBg: "bg-rose-500/15 text-rose-600 dark:text-rose-400",
    borderHover: "hover:border-rose-500/40",
    accentColor: "text-rose-600 dark:text-rose-400",
  },
];

function MetricCard({
  config,
  cardText,
  isVisible,
  index,
}: {
  config: (typeof metricConfigs)[0];
  cardText: { unit: string; subtitle: string; description: string };
  isVisible: boolean;
  index: number;
}) {
  const display = useAnimatedCounter(config.counter, isVisible);
  const Icon = config.icon;

  return (
    <div
      className={`group relative overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 ${config.borderHover} hover:-translate-y-1 hover:shadow-lg hover:shadow-black/5 dark:hover:shadow-black/20`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(20px)",
        transition: `opacity 0.5s ease ${index * 120}ms, transform 0.5s ease ${index * 120}ms`,
      }}
    >
      <div
        className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${config.gradient} ${config.gradientDark}`}
      />

      <div className="relative flex flex-col p-6">
        <div
          className={`mb-5 flex h-11 w-11 items-center justify-center rounded-xl ${config.iconBg}`}
        >
          <Icon className="h-5 w-5" strokeWidth={1.8} />
        </div>

        <div className="mb-1 flex items-baseline gap-2">
          <span
            className={`font-mono text-4xl font-bold tracking-tight ${config.accentColor} md:text-5xl`}
          >
            {display}
          </span>
          <span className="text-sm font-medium text-muted-foreground">{cardText.unit}</span>
        </div>

        <p className="mb-3 text-sm font-semibold text-foreground">{cardText.subtitle}</p>

        <p className="text-sm leading-relaxed text-muted-foreground">{cardText.description}</p>

        <div
          className={`mt-5 h-0.5 w-0 rounded-full bg-gradient-to-r ${config.gradient.replace("/20", "/40").replace("/10", "/30")} transition-all duration-500 group-hover:w-full`}
        />
      </div>
    </div>
  );
}

export function MetricsDashboard() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const { t } = useI18n();

  const handleIntersection = useCallback(([entry]: IntersectionObserverEntry[]) => {
    if (entry.isIntersecting) {
      setIsVisible(true);
    }
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.15,
      rootMargin: "0px 0px -50px 0px",
    });

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [handleIntersection]);

  return (
    <section className="py-20 md:py-28" id="metrics" ref={sectionRef}>
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold tracking-widest text-primary uppercase">
            {t.metrics.tag}
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-balance text-foreground md:text-4xl">
            {t.metrics.title}
          </h2>
          <p className="mt-4 leading-relaxed text-pretty text-muted-foreground">
            {t.metrics.description}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {metricConfigs.map((config, index) => (
            <MetricCard
              cardText={t.metrics.cards[index]}
              config={config}
              index={index}
              isVisible={isVisible}
              key={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
