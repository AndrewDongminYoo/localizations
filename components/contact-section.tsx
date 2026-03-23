"use client";

import { Calendar, CheckCircle2, Mail, Send } from "lucide-react";
import { type FormEvent, useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useI18n } from "@/lib/i18n/context";

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const { t } = useI18n();

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section className="py-20 md:py-28" id="contact">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium tracking-widest text-primary uppercase">
            {t.contact.tag}
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-balance text-foreground md:text-4xl">
            {t.contact.title}
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground">{t.contact.description}</p>
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
                  className="mt-6 rounded-lg"
                  onClick={() => setSubmitted(false)}
                  variant="outline"
                >
                  {t.contact.success.sendAnother}
                </Button>
              </div>
            ) : (
              <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="flex flex-col gap-2">
                    <Label className="text-sm font-medium text-foreground" htmlFor="name">
                      {t.contact.form.name}
                    </Label>
                    <Input
                      className="rounded-lg"
                      id="name"
                      placeholder={t.contact.form.namePlaceholder}
                      required
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <Label className="text-sm font-medium text-foreground" htmlFor="email">
                      {t.contact.form.email}
                    </Label>
                    <Input
                      className="rounded-lg"
                      id="email"
                      placeholder={t.contact.form.emailPlaceholder}
                      required
                      type="email"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <Label className="text-sm font-medium text-foreground" htmlFor="company">
                    {t.contact.form.company}
                  </Label>
                  <Input
                    className="rounded-lg"
                    id="company"
                    placeholder={t.contact.form.companyPlaceholder}
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <Label className="text-sm font-medium text-foreground" htmlFor="platform">
                    {t.contact.form.platform}
                  </Label>
                  <div className="flex flex-wrap gap-2">
                    {["iOS", "Android", "Web", "Unity", "Other"].map((p) => (
                      <label
                        className="flex cursor-pointer items-center gap-2 rounded-lg border border-border px-3 py-2 text-sm text-foreground transition-colors hover:border-primary/50 has-[:checked]:border-primary has-[:checked]:bg-primary/5"
                        key={p}
                      >
                        <input className="sr-only" name="platform" type="checkbox" value={p} />
                        {p}
                      </label>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <Label className="text-sm font-medium text-foreground" htmlFor="details">
                    {t.contact.form.details}
                  </Label>
                  <Textarea
                    className="resize-none rounded-lg"
                    id="details"
                    placeholder={t.contact.form.detailsPlaceholder}
                    required
                    rows={4}
                  />
                </div>

                <Button className="w-full rounded-lg sm:w-auto sm:self-end" type="submit">
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
              <p className="mt-2 text-sm text-muted-foreground">{t.contact.calendly.description}</p>
              <Button asChild className="mt-4 w-full rounded-lg" variant="outline">
                <a href="https://calendly.com" rel="noopener noreferrer" target="_blank">
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
              <h3 className="text-xs font-semibold tracking-widest text-muted-foreground uppercase">
                {t.contact.toolsTitle}
              </h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {[
                  "Lokalise",
                  "Phrase",
                  "Crowdin",
                  "POEditor",
                  "GitHub",
                  "GitLab",
                  "Figma",
                  "Xcode",
                  "Android Studio",
                  "i18next",
                  "react-intl",
                ].map((tool) => (
                  <span
                    className="rounded-md bg-secondary px-2.5 py-1 text-xs font-medium text-secondary-foreground"
                    key={tool}
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
  );
}
