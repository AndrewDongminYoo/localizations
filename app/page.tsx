import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { PillarsSection } from "@/components/pillars-section"
import { CaseStudiesSection } from "@/components/case-studies-section"
import { SkillsSection } from "@/components/skills-section"
import { PricingSection } from "@/components/pricing-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <div className="mx-auto max-w-6xl px-6">
          <hr className="border-border" />
        </div>
        <PillarsSection />
        <div className="mx-auto max-w-6xl px-6">
          <hr className="border-border" />
        </div>
        <CaseStudiesSection />
        <div className="mx-auto max-w-6xl px-6">
          <hr className="border-border" />
        </div>
        <SkillsSection />
        <div className="mx-auto max-w-6xl px-6">
          <hr className="border-border" />
        </div>
        <PricingSection />
        <div className="mx-auto max-w-6xl px-6">
          <hr className="border-border" />
        </div>
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
