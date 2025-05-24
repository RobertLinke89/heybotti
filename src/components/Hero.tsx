
import { Phone } from 'lucide-react';

const Hero = () => {
  return (
    <section className="bg-white py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl lg:text-6xl font-bold text-text-primary mb-6 font-raleway leading-tight">
              Stell dir vor, dein Arbeitstag beginnt mit <span className="text-btn-primary">Klarheit</span>
            </h1>
            <p className="text-xl text-text-primary mb-8 font-raleway font-light leading-relaxed">
              Deine E-Mails sind sortiert, Termine organisiert, Rechnungen versendet – und du hast den Kopf frei für das, was wirklich zählt: den Menschen in deinem Unternehmen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-btn-primary text-white px-8 py-4 rounded-lg font-raleway font-semibold text-lg hover:bg-opacity-90 transition-colors flex items-center justify-center gap-2">
                <Phone size={20} />
                Ruf mich an
              </button>
              <button className="border-2 border-text-primary text-text-primary px-8 py-4 rounded-lg font-raleway font-semibold text-lg hover:bg-text-primary hover:text-white transition-colors">
                Mehr erfahren
              </button>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80" 
              alt="Glückliches Team bei der Arbeit - entspannt und produktiv"
              className="w-full h-auto rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
