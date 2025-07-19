
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AutomationComparison from "@/components/AutomationComparison";
import Services from "@/components/Services";
import About from "@/components/About";
import Team from "@/components/Team";
import JobsCTA from "@/components/JobsCTA";
import ProjectForm from "@/components/ProjectForm";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";

const Index = () => {
  return (
    <div className="min-h-screen font-raleway bg-background">
      <Header />
      <Hero />
      <AutomationComparison />
      <Services />
      <About />
      <Team />
      <JobsCTA />
      <ProjectForm />
      <CTA />
      <Footer />
      <Chatbot />
    </div>
  );
};

export default Index;
