import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

const HealthcareHero = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact-form');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative bg-background py-24 lg:py-36 overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6 font-raleway leading-tight">
            Damit Ihr Alltag leichter wird – nicht komplexer.
          </h1>
          <p className="text-xl lg:text-2xl text-muted-foreground mb-4 font-raleway font-light leading-relaxed">
            KI-Automatisierungen für Gesundheitszentren, Physio-Praxen und Bewegungsstudios.
          </p>
          <p className="text-lg text-muted-foreground mb-10 font-raleway">
            Mit den Tools, die Sie bereits nutzen.
          </p>
          <Button 
            onClick={scrollToContact}
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-lg font-semibold"
          >
            <Calendar className="w-5 h-5 mr-2" />
            Gesprächstermin vereinbaren
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HealthcareHero;
