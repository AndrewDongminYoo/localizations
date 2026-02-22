"use client"

import { useState, useEffect, useRef } from "react"
import {
  Search,
  ShieldCheck,
  TestTubeDiagonal,
  GitPullRequest,
  RefreshCw,
  ChevronDown,
  Check,
} from "lucide-react"

const steps = [
  {
    id: 1,
    title: "Context Discovery",
    icon: <Search className="h-5 w-5" />,
    color: "bg-primary",
    details: [
      "Install and use app in English",
      "Document user journeys",
      "Identify ambiguous terms",
      "Review existing translations",
    ],
  },
  {
    id: 2,
    title: "Technical Validation",
    icon: <ShieldCheck className="h-5 w-5" />,
    color: "bg-chart-2",
    details: [
      "Check platform-specific formats (iOS/Android)",
      "Verify ICU MessageFormat syntax",
      "Test placeholder preservation",
      "Review API documentation",
    ],
  },
  {
    id: 3,
    title: "Translation + Testing",
    icon: <TestTubeDiagonal className="h-5 w-5" />,
    color: "bg-chart-4",
    details: [
      "Translate in localization platform",
      "Test in TestFlight build",
      "Verify UI layout on real devices",
      "Check multi-context string reuse",
    ],
  },
  {
    id: 4,
    title: "Developer Collaboration",
    icon: <GitPullRequest className="h-5 w-5" />,
    color: "bg-chart-5",
    details: [
      "Commit with structured messages",
      "Document changes in glossary",
      "Flag deprecated strings",
      "Proactive feature updates",
    ],
  },
  {
    id: 5,
    title: "Continuous Maintenance",
    icon: <RefreshCw className="h-5 w-5" />,
    color: "bg-primary",
    details: [
      'Track product changes (e.g., "Plan" \u2192 "Today" tab)',
      "Update FAQ/documentation",
      "Monitor user feedback",
      "Quarterly quality audits",
    ],
  },
]

function ProgressLine({ active, orientation }: { active: boolean; orientation: "horizontal" | "vertical" }) {
  if (orientation === "horizontal") {
    return (
      <div className="relative ml-1.5 hidden h-0.5 flex-1 overflow-hidden rounded-full bg-border lg:block" style={{ marginRight: "-0.75rem" }}>
        <div
          className="absolute inset-y-0 left-0 rounded-full bg-primary transition-all duration-700 ease-out"
          style={{ width: active ? "100%" : "0%" }}
        />
      </div>
    )
  }

  return (
    <div className="relative ml-5 h-8 w-0.5 overflow-hidden rounded-full bg-border lg:hidden">
      <div
        className="absolute inset-x-0 top-0 rounded-full bg-primary transition-all duration-700 ease-out"
        style={{ height: active ? "100%" : "0%" }}
      />
    </div>
  )
}

function StepCard({
  step,
  index,
  isActive,
  isExpanded,
  onToggle,
}: {
  step: (typeof steps)[0]
  index: number
  isActive: boolean
  isExpanded: boolean
  onToggle: () => void
}) {
  const contentRef = useRef<HTMLDivElement>(null)
  const [contentHeight, setContentHeight] = useState(0)

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(contentRef.current.scrollHeight)
    }
  }, [isExpanded])

  return (
    <div className="flex-1 lg:min-w-0">
      <button
        onClick={onToggle}
        className={`group w-full text-left transition-all duration-300 ${
          isExpanded
            ? "rounded-xl border border-primary/30 bg-card shadow-sm"
            : "rounded-xl border border-border bg-card hover:border-primary/20"
        }`}
      >
        {/* Header */}
        <div className="flex items-center gap-3 p-4">
          <div
            className={`relative flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-primary-foreground transition-all duration-300 ${
              isActive || isExpanded ? step.color : "bg-muted text-muted-foreground"
            }`}
          >
            {isActive && !isExpanded ? (
              <div className="absolute inset-0 animate-ping rounded-lg bg-primary/30" />
            ) : null}
            <span className="relative">{step.icon}</span>
          </div>

          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs text-muted-foreground">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="truncate text-sm font-semibold text-foreground">
                {step.title}
              </h3>
            </div>
          </div>

          <ChevronDown
            className={`h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-300 ${
              isExpanded ? "rotate-180" : ""
            }`}
          />
        </div>

        {/* Expandable details */}
        <div
          className="overflow-hidden transition-all duration-300 ease-out"
          style={{ maxHeight: isExpanded ? `${contentHeight}px` : "0px" }}
        >
          <div ref={contentRef} className="border-t border-border px-4 pb-4 pt-3">
            <ul className="flex flex-col gap-2.5">
              {step.details.map((detail) => (
                <li key={detail} className="flex items-start gap-2.5">
                  <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" />
                  <span className="text-sm leading-relaxed text-muted-foreground">
                    {detail}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </button>
    </div>
  )
}

export function WorkflowTimeline() {
  const [activeStep, setActiveStep] = useState(0)
  const [expandedStep, setExpandedStep] = useState<number | null>(null)
  const [hasStarted, setHasStarted] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  // Intersection observer to trigger the animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true)
        }
      },
      { threshold: 0.2 }
    )

    const el = sectionRef.current
    if (el) observer.observe(el)
    return () => {
      if (el) observer.unobserve(el)
    }
  }, [hasStarted])

  // Animated progress through steps
  useEffect(() => {
    if (!hasStarted) return
    if (activeStep >= steps.length) return

    const timer = setTimeout(
      () => {
        setActiveStep((prev) => prev + 1)
      },
      activeStep === 0 ? 300 : 600
    )

    return () => clearTimeout(timer)
  }, [hasStarted, activeStep])

  const handleToggle = (index: number) => {
    setExpandedStep(expandedStep === index ? null : index)
  }

  return (
    <section id="workflow" className="py-20 md:py-28" ref={sectionRef}>
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-primary">
            How I work
          </p>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Localization Workflow
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground">
            A structured, repeatable process that integrates directly into your development cycle. Click any step to see the details.
          </p>
        </div>

        {/* Desktop horizontal timeline */}
        <div className="mt-14 hidden lg:block">
          <div className="grid grid-cols-5 gap-3">
            {steps.map((step, index) => (
              <div key={step.id} className="flex flex-col">
                {/* Progress node + line per card column */}
                <div className="mb-4 flex items-center">
                  <div className="flex flex-1 items-center">
                    <div
                      className={`relative flex h-3 w-3 shrink-0 items-center justify-center rounded-full transition-all duration-500 ${
                        index < activeStep
                          ? "bg-primary shadow-[0_0_8px_rgba(59,130,246,0.5)]"
                          : "border-2 border-border bg-card"
                      }`}
                    >
                      {index < activeStep && (
                        <div className="absolute h-1.5 w-1.5 rounded-full bg-primary-foreground" />
                      )}
                    </div>
                    {index < steps.length - 1 && (
                      <ProgressLine active={index + 1 < activeStep} orientation="horizontal" />
                    )}
                  </div>
                </div>

                {/* Card */}
                <StepCard
                  step={step}
                  index={index}
                  isActive={index < activeStep}
                  isExpanded={expandedStep === index}
                  onToggle={() => handleToggle(index)}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Mobile vertical timeline */}
        <div className="mt-14 lg:hidden">
          {steps.map((step, index) => (
            <div key={step.id}>
              <div className="flex items-start gap-4">
                {/* Vertical line and node */}
                <div className="flex flex-col items-center">
                  <div
                    className={`relative flex h-10 w-10 shrink-0 items-center justify-center rounded-lg transition-all duration-500 ${
                      index < activeStep
                        ? `${step.color} text-primary-foreground shadow-sm`
                        : "border border-border bg-card text-muted-foreground"
                    }`}
                  >
                    {step.icon}
                  </div>
                </div>

                {/* Card */}
                <div className="flex-1 pb-2">
                  <button
                    onClick={() => handleToggle(index)}
                    className={`w-full text-left transition-all duration-300 ${
                      expandedStep === index
                        ? "rounded-xl border border-primary/30 bg-card shadow-sm"
                        : "rounded-xl border border-border bg-card hover:border-primary/20"
                    }`}
                  >
                    <div className="flex items-center justify-between p-4">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-xs text-muted-foreground">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <h3 className="text-sm font-semibold text-foreground">
                          {step.title}
                        </h3>
                      </div>
                      <ChevronDown
                        className={`h-4 w-4 text-muted-foreground transition-transform duration-300 ${
                          expandedStep === index ? "rotate-180" : ""
                        }`}
                      />
                    </div>

                    {expandedStep === index && (
                      <div className="border-t border-border px-4 pb-4 pt-3">
                        <ul className="flex flex-col gap-2.5">
                          {step.details.map((detail) => (
                            <li key={detail} className="flex items-start gap-2.5">
                              <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" />
                              <span className="text-sm leading-relaxed text-muted-foreground">
                                {detail}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </button>
                </div>
              </div>

              {/* Vertical connecting line */}
              {index < steps.length - 1 && (
                <ProgressLine active={index + 1 < activeStep} orientation="vertical" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
