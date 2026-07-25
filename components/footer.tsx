"use client";

import { Github, Linkedin, Mail } from "lucide-react";

import { useI18n } from "@/lib/i18n/context";

export function Footer() {
  const { t } = useI18n();

  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 md:flex-row md:justify-between">
        <div className="flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-md bg-primary">
            <span className="text-xs font-bold text-primary-foreground">AY</span>
          </div>
          <span className="text-sm font-medium text-foreground">Andrew, Yu</span>
        </div>

        <p className="text-center text-xs text-muted-foreground">{t.footer.tagline}</p>

        <div className="flex items-center gap-4">
          <a
            aria-label="GitHub"
            className="text-muted-foreground transition-colors hover:text-foreground"
            href="https://github.com/AndrewDongminYoo"
            rel="noopener noreferrer"
            target="_blank"
          >
            <Github className="h-4 w-4" />
          </a>
          <a
            aria-label="LinkedIn"
            className="text-muted-foreground transition-colors hover:text-foreground"
            href="https://www.linkedin.com/in/dongmin-yu-0394a5223/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <a
            aria-label="Email"
            className="text-muted-foreground transition-colors hover:text-foreground"
            href="mailto:ydm2790@gmail.com"
          >
            <Mail className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
