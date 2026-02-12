"use client"

import {
  Globe,
  FileCode2,
  GitBranch,
  ShieldCheck,
  Workflow,
  Languages,
  FileText,
  FolderOpen,
  GitCommitHorizontal,
  Smartphone,
  Plug,
  RefreshCcw,
  ScanSearch,
  Layers,
  MonitorSmartphone,
  BookCheck,
} from "lucide-react"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

interface Skill {
  name: string
  icon: React.ReactNode
  tooltip: string
}

interface SkillCategory {
  title: string
  icon: React.ReactNode
  gradientFrom: string
  gradientTo: string
  borderAccent: string
  skills: Skill[]
}

const categories: SkillCategory[] = [
  {
    title: "Localization Platforms",
    icon: <Globe className="h-5 w-5" />,
    gradientFrom: "from-primary/8",
    gradientTo: "to-primary/2",
    borderAccent: "hover:border-primary/40",
    skills: [
      {
        name: "Lokalise",
        icon: <Globe className="h-4 w-4" />,
        tooltip:
          "Full API integration for automated string sync, branch-based workflows, and webhook-triggered builds.",
      },
      {
        name: "Localazy",
        icon: <Globe className="h-4 w-4" />,
        tooltip:
          "CLI-driven localization with continuous delivery support and translation memory sharing.",
      },
      {
        name: "Localizely",
        icon: <Globe className="h-4 w-4" />,
        tooltip:
          "OTA (Over-the-Air) update support for shipping translation fixes without app store review.",
      },
      {
        name: "Contentful CMS",
        icon: <Globe className="h-4 w-4" />,
        tooltip:
          "Structured content localization with field-level locale management and rich text handling.",
      },
    ],
  },
  {
    title: "Technical Formats",
    icon: <FileCode2 className="h-5 w-5" />,
    gradientFrom: "from-chart-2/8",
    gradientTo: "to-chart-2/2",
    borderAccent: "hover:border-chart-2/40",
    skills: [
      {
        name: "iOS/Android Placeholders",
        icon: <FileCode2 className="h-4 w-4" />,
        tooltip:
          "Safe handling of %@, %d, %1$s positional specifiers. Validated against platform format rules to prevent runtime crashes.",
      },
      {
        name: "ICU MessageFormat",
        icon: <Languages className="h-4 w-4" />,
        tooltip:
          "Complex plural rules, gender selection, and nested argument handling for internationalized message patterns.",
      },
      {
        name: "Markdown in Strings",
        icon: <FileText className="h-4 w-4" />,
        tooltip:
          "Preserving bold, links, and inline code within translatable strings without breaking markup syntax.",
      },
      {
        name: "ARB / XLIFF / .strings",
        icon: <FolderOpen className="h-4 w-4" />,
        tooltip:
          "Native fluency in Flutter ARB, iOS .strings/.stringsdict, Android XML, and XLIFF interchange formats.",
      },
    ],
  },
  {
    title: "Developer Tools",
    icon: <GitBranch className="h-5 w-5" />,
    gradientFrom: "from-chart-3/8",
    gradientTo: "to-chart-3/2",
    borderAccent: "hover:border-chart-3/40",
    skills: [
      {
        name: "Git + Conventional Commits",
        icon: <GitCommitHorizontal className="h-4 w-4" />,
        tooltip:
          'Version-controlled translations with semantic commit messages: "feat(ko): add onboarding strings" for clean changelogs.',
      },
      {
        name: "TestFlight / Internal Testing",
        icon: <Smartphone className="h-4 w-4" />,
        tooltip:
          "In-context QA on TestFlight (iOS) and Internal Testing tracks (Android) before public release.",
      },
      {
        name: "REST API Integration",
        icon: <Plug className="h-4 w-4" />,
        tooltip:
          "Direct API calls for pushing/pulling translations, triggering builds, and syncing with your deployment pipeline.",
      },
      {
        name: "CI/CD Pipeline Awareness",
        icon: <RefreshCcw className="h-4 w-4" />,
        tooltip:
          "Understanding of GitHub Actions, Bitrise, and Fastlane workflows to integrate localization checks into your build process.",
      },
    ],
  },
  {
    title: "Quality Assurance",
    icon: <ShieldCheck className="h-5 w-5" />,
    gradientFrom: "from-chart-5/8",
    gradientTo: "to-chart-5/2",
    borderAccent: "hover:border-chart-5/40",
    skills: [
      {
        name: "Format Validation",
        icon: <ScanSearch className="h-4 w-4" />,
        tooltip:
          "Automated checks ensuring all format specifiers, HTML tags, and placeholder tokens are preserved after translation.",
      },
      {
        name: "Multi-Context Verification",
        icon: <Layers className="h-4 w-4" />,
        tooltip:
          "Same string key appearing in different UI locations is verified in every context to catch disambiguation issues.",
      },
      {
        name: "Real Device UI Testing",
        icon: <MonitorSmartphone className="h-4 w-4" />,
        tooltip:
          "Layout overflow, text truncation, and font rendering verified on physical iOS and Android devices at multiple screen sizes.",
      },
      {
        name: "Custom Spell-Check Dictionaries",
        icon: <BookCheck className="h-4 w-4" />,
        tooltip:
          "Project-specific terminology dictionaries that ensure brand names, feature terms, and neologisms are consistently handled.",
      },
    ],
  },
]

function SkillItem({ skill }: { skill: Skill }) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <button
          type="button"
          className="group/skill flex items-center gap-2.5 rounded-lg border border-transparent bg-background/60 px-3 py-2.5 text-left transition-all hover:border-border hover:bg-background"
        >
          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-muted text-muted-foreground transition-colors group-hover/skill:text-foreground">
            {skill.icon}
          </span>
          <span className="text-sm font-medium text-foreground/80 transition-colors group-hover/skill:text-foreground">
            {skill.name}
          </span>
        </button>
      </TooltipTrigger>
      <TooltipContent
        side="top"
        className="max-w-xs border border-border bg-popover text-sm leading-relaxed text-popover-foreground shadow-lg"
      >
        <p>{skill.tooltip}</p>
      </TooltipContent>
    </Tooltip>
  )
}

function CategoryCard({ category }: { category: SkillCategory }) {
  return (
    <div
      className={`group relative overflow-hidden rounded-xl border border-border bg-gradient-to-br ${category.gradientFrom} ${category.gradientTo} p-6 transition-all ${category.borderAccent}`}
    >
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-background/80 text-foreground shadow-sm">
          {category.icon}
        </div>
        <h3 className="text-lg font-semibold text-foreground">{category.title}</h3>
      </div>
      <div className="mt-5 flex flex-col gap-2">
        {category.skills.map((skill) => (
          <SkillItem key={skill.name} skill={skill} />
        ))}
      </div>
    </div>
  )
}

export function SkillsSection() {
  return (
    <TooltipProvider delayDuration={200}>
      <section id="skills" className="py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-medium uppercase tracking-widest text-primary">
              Technical toolkit
            </p>
            <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Skills & Tools
            </h2>
            <p className="mt-4 text-pretty text-muted-foreground">
              {"The platforms, formats, and workflows I use daily to deliver production-ready Korean localization. Hover over any skill to learn more."}
            </p>
          </div>

          <div className="mt-14 grid gap-4 md:grid-cols-2 lg:gap-6">
            {categories.map((category) => (
              <CategoryCard key={category.title} category={category} />
            ))}
          </div>
        </div>
      </section>
    </TooltipProvider>
  )
}
