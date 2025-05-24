
import { Phone } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-text-primary font-raleway">botti.co</h1>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#services" className="text-text-primary hover:text-btn-primary transition-colors font-raleway font-medium">Services</a>
            <a href="#about" className="text-text-primary hover:text-btn-primary transition-colors font-raleway font-medium">Über uns</a>
            <a href="#testimonials" className="text-text-primary hover:text-btn-primary transition-colors font-raleway font-medium">Referenzen</a>
          </nav>
          <button className="bg-btn-primary text-white px-6 py-2 rounded-lg font-raleway font-semibold hover:bg-opacity-90 transition-colors flex items-center gap-2">
            <Phone size={18} />
            Ruf mich an
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
