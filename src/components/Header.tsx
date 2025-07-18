
import { Phone, Menu, X } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import { useState } from 'react';

const Header = () => {
  const { t } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-background border-b border-secondary sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0">
            <img src="/lovable-uploads/40d9d7e1-0d48-4516-ac69-df85651529fa.png" alt="hey" className="h-7 sm:h-8" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#services" className="text-foreground hover:text-primary transition-colors font-raleway font-medium">{t('nav.services')}</a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors font-raleway font-medium">{t('nav.about')}</a>
            <a href="#testimonials" className="text-foreground hover:text-primary transition-colors font-raleway font-medium">{t('nav.testimonials')}</a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors font-raleway font-medium">{t('nav.contact')}</a>
          </nav>

          {/* Desktop CTA and Language Switcher */}
          <div className="hidden md:flex items-center gap-4">
            <LanguageSwitcher />
            <button className="bg-primary text-primary-foreground px-6 py-2 rounded-lg font-raleway font-semibold hover:bg-primary/90 transition-colors flex items-center gap-2">
              <Phone size={18} />
              {t('header.cta')}
            </button>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden flex items-center gap-3">
            <LanguageSwitcher />
            <button
              onClick={toggleMobileMenu}
              className="p-2 rounded-lg text-foreground hover:bg-secondary transition-colors"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen 
            ? 'max-h-80 opacity-100 pb-4' 
            : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <nav className="flex flex-col space-y-4 pt-4 border-t border-secondary">
            <a 
              href="#services" 
              className="text-foreground hover:text-primary transition-colors font-raleway font-medium py-2 px-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t('nav.services')}
            </a>
            <a 
              href="#about" 
              className="text-foreground hover:text-primary transition-colors font-raleway font-medium py-2 px-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t('nav.about')}
            </a>
            <a 
              href="#testimonials" 
              className="text-foreground hover:text-primary transition-colors font-raleway font-medium py-2 px-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t('nav.testimonials')}
            </a>
            <a 
              href="#contact" 
              className="text-foreground hover:text-primary transition-colors font-raleway font-medium py-2 px-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t('nav.contact')}
            </a>
            <button 
              className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-raleway font-semibold hover:bg-primary/90 transition-colors flex items-center justify-center gap-2 mt-4"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Phone size={18} />
              {t('header.cta')}
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
