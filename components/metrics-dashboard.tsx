"use client"

import { useEffect, useRef, useState, useCallback } from "react"
import { Calendar, ShieldCheck, Monitor, Smartphone } from "lucide-react"

interface CounterConfig {
  end: number
  suffix: string
  prefix: string
  displayOverride?: string
}

function useAnimatedCounter(config: CounterConfig, isVisible: boolean) {
  const [display, setDisplay] = useState(config.displayOverride ? "" : `${config.prefix}0${config.suffix}`)
  const hasAnimated = useRef(false)

  useEffect(() => {
    if (!isVisible || hasAnimated.current) return
    hasAnimated.current = true

    if (config.displayOverride) {
      const chars = config.displayOverride
      let currentIndex = 0
      const interval = setInterval(() => {
        currentIndex++
        setDisplay(chars.slice(0, currentIndex))
        if (currentIndex >= chars.length) clearInterval(interval)
      }, 80)
      return () => clearInterval(interval)
    }

    const duration = 2000
    const startTime = Date.now()
    const animate = () => {
      const elapsed = Date.now() - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      const current = Math.floor(eased * config.end)
      setDisplay(`${config.prefix}${current}${config.suffix}`)
      if (progress < 1) requestAnimationFrame(animate)
    }
    requestAnimationFrame(animate)
  }, [isVisible, config])

  return display
}

const metrics = [
  {
    counter: { end: 2, suffix: "+", prefix: "", displayOverride: "2+" },
    subtitle: "Continuous Collaboration",
    unit: "Years",
    icon: Calendar,
    description: "Long-term partnership with Tiimo ApS since 2023",
    gradient: "from-blue-500/20 via-blue-400/10 to-transparent",
    gradientDark: "dark:from-blue-500/15 dark:via-blue-400/5 dark:to-transparent",
    iconBg: "bg-blue-500/15 text-blue-600 dark:text-blue-400",
    borderHover: "hover:border-blue-500/40",
    accentColor: "text-blue-600 dark:text-blue-400",
  },
  {
    counter: { end: 0, suffix: "", prefix: "", displayOverride: "0" },
    subtitle: "Format-Related Errors",
    unit: "Crashes",
    icon: ShieldCheck,
    description: "Zero runtime errors from localization over 24+ months",
    gradient: "from-emerald-500/20 via-emerald-400/10 to-transparent",
    gradientDark: "dark:from-emerald-500/15 dark:via-emerald-400/5 dark:to-transparent",
    iconBg: "bg-emerald-500/15 text-emerald-600 dark:text-emerald-400",
    borderHover: "hover:border-emerald-500/40",
    accentColor: "text-emerald-600 dark:text-emerald-400",
  },
  {
    counter: { end: 3, suffix: "", prefix: "", displayOverride: "3" },
    subtitle: "iOS, Android, Web",
    unit: "Platforms",
    icon: Monitor,
    description: "Consistent quality across all user touchpoints",
    gradient: "from-amber-500/20 via-amber-400/10 to-transparent",
    gradientDark: "dark:from-amber-500/15 dark:via-amber-400/5 dark:to-transparent",
    iconBg: "bg-amber-500/15 text-amber-600 dark:text-amber-400",
    borderHover: "hover:border-amber-500/40",
    accentColor: "text-amber-600 dark:text-amber-400",
  },
  {
    counter: { end: 100, suffix: "%", prefix: "" },
    subtitle: "Real Device Testing",
    unit: "Validated",
    icon: Smartphone,
    description: "Every string tested in actual app UI before release",
    gradient: "from-rose-500/20 via-rose-400/10 to-transparent",
    gradientDark: "dark:from-rose-500/15 dark:via-rose-400/5 dark:to-transparent",
    iconBg: "bg-rose-500/15 text-rose-600 dark:text-rose-400",
    borderHover: "hover:border-rose-500/40",
    accentColor: "text-rose-600 dark:text-rose-400",
  },
]

function MetricCard({
  metric,
  isVisible,
  index,
}: {
  metric: (typeof metrics)[0]
  isVisible: boolean
  index: number
}) {
  const display = useAnimatedCounter(metric.counter, isVisible)
  const Icon = metric.icon

  return (
    <div
      className={`group relative overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 ${metric.borderHover} hover:-translate-y-1 hover:shadow-lg hover:shadow-black/5 dark:hover:shadow-black/20`}
      style={{
        animationDelay: `${index * 120}ms`,
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(20px)",
        transition: `opacity 0.5s ease ${index * 120}ms, transform 0.5s ease ${index * 120}ms`,
      }}
    >
      {/* Gradient background */}
      <div
        className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${metric.gradient} ${metric.gradientDark}`}
      />

      <div className="relative flex flex-col p-6">
        {/* Icon */}
        <div className={`mb-5 flex h-11 w-11 items-center justify-center rounded-xl ${metric.iconBg}`}>
          <Icon className="h-5 w-5" strokeWidth={1.8} />
        </div>

        {/* Counter */}
        <div className="mb-1 flex items-baseline gap-2">
          <span className={`font-mono text-4xl font-bold tracking-tight ${metric.accentColor} md:text-5xl`}>
            {display}
          </span>
          <span className="text-sm font-medium text-muted-foreground">{metric.unit}</span>
        </div>

        {/* Subtitle */}
        <p className="mb-3 text-sm font-semibold text-foreground">
          {metric.subtitle}
        </p>

        {/* Description */}
        <p className="text-sm leading-relaxed text-muted-foreground">
          {metric.description}
        </p>

        {/* Decorative bottom line */}
        <div
          className={`mt-5 h-0.5 w-0 rounded-full bg-gradient-to-r ${metric.gradient.replace("/20", "/40").replace("/10", "/30")} transition-all duration-500 group-hover:w-full`}
        />
      </div>
    </div>
  )
}

export function MetricsDashboard() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  const handleIntersection = useCallback(([entry]: IntersectionObserverEntry[]) => {
    if (entry.isIntersecting) {
      setIsVisible(true)
    }
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.15,
      rootMargin: "0px 0px -50px 0px",
    })

    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [handleIntersection])

  return (
    <section ref={sectionRef} id="metrics" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section header */}
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
            Track Record
          </p>
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Numbers That Speak for Themselves
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Measurable results from real production localization work, not estimates.
          </p>
        </div>

        {/* Metrics grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((metric, index) => (
            <MetricCard
              key={metric.subtitle}
              metric={metric}
              isVisible={isVisible}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
