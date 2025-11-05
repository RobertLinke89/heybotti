import { memo } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AutomationComparison from "@/components/AutomationComparison";
import AutomationBenefits from "@/components/AutomationBenefits";
import Services from "@/components/Services";
import JobsCTA from "@/components/JobsCTA";
import ProjectForm from "@/components/ProjectForm";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";

// Memoize components to prevent unnecessary re-renders
const MemoizedHeader = memo(Header);
const MemoizedHero = memo(Hero);
const MemoizedAutomationComparison = memo(AutomationComparison);
const MemoizedAutomationBenefits = memo(AutomationBenefits);
const MemoizedServices = memo(Services);
const MemoizedJobsCTA = memo(JobsCTA);
const MemoizedProjectForm = memo(ProjectForm);
const MemoizedCTA = memo(CTA);
const MemoizedFooter = memo(Footer);
const MemoizedCookieBanner = memo(CookieBanner);

const Index = () => {
  return (
    <div className="min-h-screen font-raleway bg-background">
      <MemoizedHeader />
      <MemoizedHero />
      <MemoizedAutomationComparison />
      <MemoizedAutomationBenefits />
      <MemoizedServices />
      <MemoizedJobsCTA />
      <MemoizedProjectForm />
      <MemoizedCTA />
      <MemoizedFooter />
      <MemoizedCookieBanner />
    </div>
  );
};

export default Index;
