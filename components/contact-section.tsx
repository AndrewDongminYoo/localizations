"use client"

import { useState, type FormEvent } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Calendar, Mail, Send, CheckCircle2 } from "lucide-react"
import { useI18n } from "@/lib/i18n/context"

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false)
  const { t } = useI18n()

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-primary">
            {t.contact.tag}
          </p>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            {t.contact.title}
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground">
            {t.contact.description}
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-5">
          {/* Form */}
          <div className="rounded-xl border border-border bg-card p-6 md:p-8 lg:col-span-3">
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                  <CheckCircle2 className="h-7 w-7 text-primary" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-foreground">
                  {t.contact.success.title}
                </h3>
                <p className="mt-2 max-w-sm text-sm text-muted-foreground">
                  {t.contact.success.description}
                </p>
                <Button
                  variant="outline"
                  className="mt-6 rounded-lg"
                  onClick={() => setSubmitted(false)}
                >
                  {t.contact.success.sendAnother}
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="name" className="text-sm font-medium text-foreground">
                      {t.contact.form.name}
                    </Label>
                    <Input
                      id="name"
                      required
                      placeholder={t.contact.form.namePlaceholder}
                      className="rounded-lg"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="email" className="text-sm font-medium text-foreground">
                      {t.contact.form.email}
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      placeholder={t.contact.form.emailPlaceholder}
                      className="rounded-lg"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <Label htmlFor="company" className="text-sm font-medium text-foreground">
                    {t.contact.form.company}
                  </Label>
                  <Input
                    id="company"
                    placeholder={t.contact.form.companyPlaceholder}
                    className="rounded-lg"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <Label htmlFor="platform" className="text-sm font-medium text-foreground">
                    {t.contact.form.platform}
                  </Label>
                  <div className="flex flex-wrap gap-2">
                    {["iOS", "Android", "Web", "Unity", "Other"].map((p) => (
                      <label
                        key={p}
                        className="flex cursor-pointer items-center gap-2 rounded-lg border border-border px-3 py-2 text-sm text-foreground transition-colors hover:border-primary/50 has-[:checked]:border-primary has-[:checked]:bg-primary/5"
                      >
                        <input type="checkbox" name="platform" value={p} className="sr-only" />
                        {p}
                      </label>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <Label htmlFor="details" className="text-sm font-medium text-foreground">
                    {t.contact.form.details}
                  </Label>
                  <Textarea
                    id="details"
                    required
                    rows={4}
                    placeholder={t.contact.form.detailsPlaceholder}
                    className="rounded-lg resize-none"
                  />
                </div>

                <Button type="submit" className="w-full rounded-lg sm:w-auto sm:self-end">
                  <Send className="mr-2 h-4 w-4" />
                  {t.contact.form.submit}
                </Button>
              </form>
            )}
          </div>

          {/* Calendly + Info sidebar */}
          <div className="flex flex-col gap-6 lg:col-span-2">
            <div className="rounded-xl border border-border bg-card p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Calendar className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-base font-semibold text-foreground">
                {t.contact.calendly.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {t.contact.calendly.description}
              </p>
              <Button variant="outline" className="mt-4 w-full rounded-lg" asChild>
                <a
                  href="https://calendly.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Calendar className="mr-2 h-4 w-4" />
                  {t.contact.calendly.button}
                </a>
              </Button>
            </div>

            <div className="rounded-xl border border-border bg-card p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Mail className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-base font-semibold text-foreground">
                {t.contact.directContact.title}
              </h3>
              <div className="mt-3 flex flex-col gap-2 text-sm text-muted-foreground">
                <span>{t.contact.directContact.email}</span>
                <span>{t.contact.directContact.location}</span>
                <span>{t.contact.directContact.responseTime}</span>
              </div>
            </div>

            <div className="rounded-xl border border-border bg-card p-6">
              <h3 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                {t.contact.toolsTitle}
              </h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {[
                  "Lokalise", "Phrase", "Crowdin", "POEditor",
                  "GitHub", "GitLab", "Figma", "Xcode",
                  "Android Studio", "i18next", "react-intl",
                ].map((tool) => (
                  <span
                    key={tool}
                    className="rounded-md bg-secondary px-2.5 py-1 text-xs font-medium text-secondary-foreground"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
