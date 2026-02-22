import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pb-20 pt-32 md:pb-28 md:pt-40">
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-48 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute -bottom-24 right-0 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <Badge variant="secondary" className="mb-6 gap-1.5 rounded-lg border border-border px-3 py-1 text-xs font-medium text-muted-foreground">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary" />
            Available for new projects
          </Badge>

          <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground md:text-6xl lg:text-7xl">
            {"Andrew, Yu"}
          </h1>

          <p className="mx-auto mt-4 text-pretty text-lg text-muted-foreground md:text-xl">
            Korean Localization,{" "}
            <span className="font-semibold text-primary">Developer-Grade</span>{" "}
            Precision
          </p>

          <p className="mx-auto mt-4 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground">
            I bridge the gap between your dev team and the Korean market. Not just translation{" "}
            {"— technical localization that ships without breaking your build."}
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button size="lg" className="w-full rounded-lg sm:w-auto" asChild>
              <a href="#case-studies">
                See Case Studies
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button variant="outline" size="lg" className="w-full rounded-lg sm:w-auto" asChild>
              <a href="#pricing">View Pricing</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
