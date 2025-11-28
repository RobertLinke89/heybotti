import { memo } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AutomationComparison from "@/components/AutomationComparison";
import Services from "@/components/Services";
import Pricing from "@/components/Pricing";
import JobsCTA from "@/components/JobsCTA";
import ProjectForm from "@/components/ProjectForm";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";

// Memoize components to prevent unnecessary re-renders
const MemoizedHeader = memo(Header);
const MemoizedHero = memo(Hero);
const MemoizedAutomationComparison = memo(AutomationComparison);
const MemoizedServices = memo(Services);
const MemoizedPricing = memo(Pricing);
const MemoizedJobsCTA = memo(JobsCTA);
const MemoizedProjectForm = memo(ProjectForm);
const MemoizedFooter = memo(Footer);
const MemoizedCookieBanner = memo(CookieBanner);

const Index = () => {
  return (
    <div className="min-h-screen font-raleway bg-background">
      <MemoizedHeader />
      <MemoizedHero />
      <MemoizedAutomationComparison />
      <MemoizedServices />
      <MemoizedPricing />
      <MemoizedJobsCTA />
      <MemoizedProjectForm />
      <MemoizedFooter />
      <MemoizedCookieBanner />
    </div>
  );
};

export default Index;
