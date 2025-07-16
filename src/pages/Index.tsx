
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AutomationComparison from "@/components/AutomationComparison";
import Services from "@/components/Services";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import ProjectForm from "@/components/ProjectForm";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen font-raleway bg-background">
      <Header />
      <Hero />
      <AutomationComparison />
      <Services />
      <About />
      <Testimonials />
      <ProjectForm />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
