"use client";

import { Languages, Menu, Moon, Sun, X } from "lucide-react";
import { useTheme } from "next-themes";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { useI18n } from "@/lib/i18n/context";

export function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);
  const { locale, setLocale, t } = useI18n();

  const navLinks = [
    { label: t.nav.metrics, href: "#metrics" },
    { label: t.nav.services, href: "#services" },
    { label: t.nav.workflow, href: "#workflow" },
    { label: t.nav.caseStudies, href: "#case-studies" },
    { label: t.nav.skills, href: "#skills" },
    { label: t.nav.trackRecord, href: "#track-record" },
    { label: t.nav.pricing, href: "#pricing" },
    { label: t.nav.contact, href: "#contact" },
  ];

  return (
    <header className="fixed top-0 right-0 left-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a className="flex items-center gap-2" href="#">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
            <span className="text-sm font-bold text-primary-foreground">AY</span>
          </div>
          <span className="text-sm font-semibold text-foreground">{"Andrew, Yu"}</span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <a
              className="rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
              href={link.href}
              key={link.href}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          {/* Locale toggle */}
          <Button
            aria-label="Toggle language"
            className="h-9 w-9 rounded-lg"
            onClick={() => setLocale(locale === "en" ? "ko" : "en")}
            size="icon"
            variant="ghost"
          >
            <Languages className="h-4 w-4" />
            <span className="absolute -right-0.5 -bottom-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[9px] font-bold text-primary-foreground">
              {locale === "en" ? "KO" : "EN"}
            </span>
          </Button>

          {/* Theme toggle */}
          <Button
            aria-label="Toggle theme"
            className="h-9 w-9 rounded-lg"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            size="icon"
            variant="ghost"
          >
            <Sun className="h-4 w-4 scale-100 rotate-0 transition-transform dark:scale-0 dark:-rotate-90" />
            <Moon className="absolute h-4 w-4 scale-0 rotate-90 transition-transform dark:scale-100 dark:rotate-0" />
          </Button>

          <Button
            aria-label="Toggle menu"
            className="h-9 w-9 rounded-lg md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            size="icon"
            variant="ghost"
          >
            {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </Button>

          <Button asChild className="hidden rounded-lg md:inline-flex" size="sm">
            <a href="#contact">{t.nav.getQuote}</a>
          </Button>
        </div>
      </nav>

      {mobileOpen && (
        <div className="border-t border-border/50 bg-background/95 backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-1 px-6 py-4">
            {navLinks.map((link) => (
              <a
                className="rounded-lg px-3 py-2.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
                href={link.href}
                key={link.href}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <Button asChild className="mt-2 rounded-lg" size="sm">
              <a href="#contact" onClick={() => setMobileOpen(false)}>
                {t.nav.getQuote}
              </a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
