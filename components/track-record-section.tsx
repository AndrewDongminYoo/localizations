"use client"

import {
  Shield,
  Star,
  AlertCircle,
  Rocket,
  FileText,
  Building2,
  MapPin,
  Calendar,
  Layers,
  Lock,
  Check,
} from "lucide-react"
import { useI18n } from "@/lib/i18n/context"

const achievementIcons = [
  <Shield key="shield" className="h-4 w-4" />,
  <Star key="star" className="h-4 w-4" />,
  <AlertCircle key="alert" className="h-4 w-4" />,
  <Rocket key="rocket" className="h-4 w-4" />,
  <FileText key="file" className="h-4 w-4" />,
]

export function TrackRecordSection() {
  const { t } = useI18n()

  const scopeItems = [
    { label: t.trackRecord.scopeLabels.platforms, value: t.trackRecord.scopeValues.platforms },
    { label: t.trackRecord.scopeLabels.duration, value: t.trackRecord.scopeValues.duration },
    { label: t.trackRecord.scopeLabels.crashes, value: t.trackRecord.scopeValues.crashes },
    { label: t.trackRecord.scopeLabels.rating, value: t.trackRecord.scopeValues.rating },
  ]

  return (
    <section id="track-record" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-primary">
            {t.trackRecord.tag}
          </p>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            {t.trackRecord.title}
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground">
            {t.trackRecord.description}
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-5">
          {/* Client info card */}
          <div className="rounded-xl border border-border bg-card p-6 md:p-8 lg:col-span-2">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                <Building2 className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground">Tiimo ApS</h3>
                <p className="text-sm text-muted-foreground">Copenhagen, Denmark</p>
              </div>
            </div>

            <div className="mt-6 flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm text-foreground">Copenhagen, Denmark</span>
              </div>
              <div className="flex items-center gap-3">
                <Calendar className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm text-foreground">{"2024 \u2013 Present (Ongoing)"}</span>
              </div>
              <div className="flex items-center gap-3">
                <Layers className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm text-foreground">iOS app, Android app (deprecated), Web platform, CMS content</span>
              </div>
            </div>

            {/* Platforms managed */}
            <div className="mt-6 border-t border-border pt-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                {t.trackRecord.platformsManaged}
              </p>
              <div className="mt-3 flex flex-col gap-2">
                {t.trackRecord.platforms.map((platform) => (
                  <div
                    key={platform.name}
                    className="flex items-center justify-between rounded-lg bg-secondary/50 px-3 py-2"
                  >
                    <span className="text-sm font-medium text-foreground">{platform.name}</span>
                    <span className="rounded-md bg-secondary px-2 py-0.5 text-xs text-muted-foreground">
                      {platform.role}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* NDA notice */}
            <div className="mt-6 flex items-start gap-3 rounded-lg border border-border bg-muted/50 p-4">
              <Lock className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" />
              <p className="text-xs leading-relaxed text-muted-foreground">
                {t.trackRecord.ndaNotice}
              </p>
            </div>
          </div>

          {/* Achievements */}
          <div className="rounded-xl border border-border bg-card p-6 md:p-8 lg:col-span-3">
            <h3 className="text-lg font-semibold text-foreground">{t.trackRecord.keyAchievements}</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              {t.trackRecord.achievementsSubtitle}
            </p>

            <div className="mt-6 flex flex-col gap-3">
              {t.trackRecord.achievements.map((text, i) => (
                <div
                  key={i}
                  className="group flex items-start gap-4 rounded-lg border border-border bg-background p-4 transition-colors hover:border-primary/30"
                >
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    {achievementIcons[i]}
                  </div>
                  <div className="flex items-center gap-2 pt-1">
                    <Check className="h-3.5 w-3.5 shrink-0 text-primary" />
                    <span className="text-sm leading-relaxed text-foreground">{text}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Scope summary */}
            <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-4">
              {scopeItems.map((stat) => (
                <div
                  key={stat.label}
                  className="flex flex-col items-center rounded-lg border border-border bg-muted/30 px-4 py-3"
                >
                  <span className="text-xl font-bold text-primary">{stat.value}</span>
                  <span className="mt-0.5 text-xs text-muted-foreground">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
