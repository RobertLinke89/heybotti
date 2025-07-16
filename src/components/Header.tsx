
import { Phone } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-background border-b border-secondary sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-foreground font-raleway">botti.co</h1>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#services" className="text-foreground hover:text-primary transition-colors font-raleway font-medium">Services</a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors font-raleway font-medium">Über uns</a>
            <a href="#testimonials" className="text-foreground hover:text-primary transition-colors font-raleway font-medium">Referenzen</a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors font-raleway font-medium">Kontakt</a>
          </nav>
          <button className="bg-primary text-primary-foreground px-6 py-2 rounded-lg font-raleway font-semibold hover:bg-primary/90 transition-colors flex items-center gap-2">
            <Phone size={18} />
            Ruf mich an
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
