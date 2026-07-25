import { CaseStudiesSection } from "@/components/case-studies-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/hero-section";
import { MetricsDashboard } from "@/components/metrics-dashboard";
import { Navbar } from "@/components/navbar";
import { PillarsSection } from "@/components/pillars-section";
import { PricingSection } from "@/components/pricing-section";
import { SkillsSection } from "@/components/skills-section";
import { TrackRecordSection } from "@/components/track-record-section";
import { WorkflowTimeline } from "@/components/workflow-timeline";

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <div className="mx-auto max-w-6xl px-6">
          <hr className="border-border" />
        </div>
        <MetricsDashboard />
        <div className="mx-auto max-w-6xl px-6">
          <hr className="border-border" />
        </div>
        <PillarsSection />
        <div className="mx-auto max-w-6xl px-6">
          <hr className="border-border" />
        </div>
        <WorkflowTimeline />
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
        <TrackRecordSection />
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
  );
}
