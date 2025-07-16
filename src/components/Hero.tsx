
import { Phone } from 'lucide-react';

const Hero = () => {
  return (
    <section className="bg-background py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="animate-fade-in max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6 font-raleway leading-tight">
              Mit uns läuft's <span className="text-primary">automatisch</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 font-raleway font-light leading-relaxed max-w-3xl mx-auto">
              Wir automatisieren die Prozesse in deinem Unternehmen, damit du dich auf das Wesentliche konzentrieren kannst. Schluss mit manueller Arbeit – mehr Zeit für echte Wertschöpfung.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-primary text-primary-foreground px-8 py-4 rounded-lg font-raleway font-semibold text-lg hover:bg-primary/90 transition-colors flex items-center justify-center gap-2">
                <Phone size={20} />
                Ruf mich an
              </button>
              <button className="border-2 border-primary text-primary px-8 py-4 rounded-lg font-raleway font-semibold text-lg hover:bg-primary hover:text-primary-foreground transition-colors">
                Mehr erfahren
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
