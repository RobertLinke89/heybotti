import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";
const HealthcareHero = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact-form');
    contactSection?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  return <section className="relative bg-background py-28 lg:py-40 overflow-hidden">
      {/* Gradient background with brand color */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5 pointer-events-none" />
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-8 font-raleway leading-tight tracking-tight">
            Damit Ihr Alltag leichter wird –{" "}
            <span className="text-primary">nicht komplexer.</span>
          </h1>
          <p className="text-xl lg:text-2xl text-muted-foreground mb-3 font-raleway font-light leading-relaxed max-w-3xl mx-auto">
            KI-Automatisierungen für Gesundheitszentren, Physio-Praxen und Bewegungsstudios.
          </p>
          <p className="text-lg text-muted-foreground/80 mb-12 font-raleway">Mit den Systemen, die Sie bereits nutzen.</p>
          <Button onClick={scrollToContact} size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-10 py-6 text-lg font-semibold rounded-lg shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 hover:-translate-y-0.5">
            <Calendar className="w-5 h-5 mr-2" />
            Gesprächstermin vereinbaren
          </Button>
        </div>
      </div>
    </section>;
};
export default HealthcareHero;