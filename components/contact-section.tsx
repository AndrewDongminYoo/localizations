"use client"

import { useState, type FormEvent } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Calendar, Mail, Send, CheckCircle2 } from "lucide-react"

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-primary">
            Get in touch
          </p>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            {"Let's Ship Korean Together"}
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground">
            {"Tell me about your project and I'll get back to you within 24 hours with a tailored proposal."}
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
                  Message Sent
                </h3>
                <p className="mt-2 max-w-sm text-sm text-muted-foreground">
                  {"Thanks for reaching out! I'll review your project details and get back to you within 24 hours."}
                </p>
                <Button
                  variant="outline"
                  className="mt-6 rounded-lg"
                  onClick={() => setSubmitted(false)}
                >
                  Send Another
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="name" className="text-sm font-medium text-foreground">
                      Name
                    </Label>
                    <Input
                      id="name"
                      required
                      placeholder="Your name"
                      className="rounded-lg"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="email" className="text-sm font-medium text-foreground">
                      Email
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      placeholder="you@company.com"
                      className="rounded-lg"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <Label htmlFor="company" className="text-sm font-medium text-foreground">
                    Company / App Name
                  </Label>
                  <Input
                    id="company"
                    placeholder="Acme Inc."
                    className="rounded-lg"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <Label htmlFor="platform" className="text-sm font-medium text-foreground">
                    Platform
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
                    Project Details
                  </Label>
                  <Textarea
                    id="details"
                    required
                    rows={4}
                    placeholder="Tell me about your app, word count estimate, timeline, and any specific technical requirements..."
                    className="rounded-lg resize-none"
                  />
                </div>

                <Button type="submit" className="w-full rounded-lg sm:w-auto sm:self-end">
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
              </form>
            )}
          </div>

          {/* Calendly + Info sidebar */}
          <div className="flex flex-col gap-6 lg:col-span-2">
            {/* Calendly card */}
            <div className="rounded-xl border border-border bg-card p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Calendar className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-base font-semibold text-foreground">
                Book a Discovery Call
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {"Prefer to talk live? Schedule a 30-minute call to discuss your project requirements and workflow."}
              </p>
              <Button variant="outline" className="mt-4 w-full rounded-lg" asChild>
                <a
                  href="https://calendly.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Calendar className="mr-2 h-4 w-4" />
                  Schedule on Calendly
                </a>
              </Button>
            </div>

            {/* Quick info */}
            <div className="rounded-xl border border-border bg-card p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Mail className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-base font-semibold text-foreground">
                Direct Contact
              </h3>
              <div className="mt-3 flex flex-col gap-2 text-sm text-muted-foreground">
                <span>hello@koreanlocalize.dev</span>
                <span>{"Seoul, South Korea (KST / UTC+9)"}</span>
                <span>{"Response within 24 hours"}</span>
              </div>
            </div>

            {/* Tech stack */}
            <div className="rounded-xl border border-border bg-card p-6">
              <h3 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                Tools I Work With
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
