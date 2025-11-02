
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AutomationComparison from "@/components/AutomationComparison";
import AutomationBenefits from "@/components/AutomationBenefits";
import Services from "@/components/Services";

import JobsCTA from "@/components/JobsCTA";
import ProjectForm from "@/components/ProjectForm";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";
import CookieBanner from "@/components/CookieBanner";

const Index = () => {
  return (
    <div className="min-h-screen font-raleway bg-background">
      <Header />
      <Hero />
      <AutomationComparison />
      <AutomationBenefits />
      <Services />
      
      <JobsCTA />
      <ProjectForm />
      <CTA />
      <Footer />
      <Chatbot />
      <CookieBanner />
    </div>
  );
};

export default Index;
