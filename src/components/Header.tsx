import { Menu, X, ChevronDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import LanguageSwitch from '@/components/LanguageSwitch';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';

const Header = () => {
  const navigate = useNavigate();
  const { t, language } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isBranchenDropdownOpen, setIsBranchenDropdownOpen] = useState(false);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);

  const services = [
    { id: 'sales-marketing', key: 'sales' },
    { id: 'finance', key: 'finance' },
    { id: 'hr', key: 'hr' },
    { id: 'ecommerce', key: 'ecommerce' },
    { id: 'business-intelligence', key: 'bi' },
    { id: 'workflows', key: 'workflows' }
  ];

  const branchen = [
    { path: '/praxis-vernetzen', labelDe: 'Praxen & Gesundheit', labelEn: 'Healthcare Practices' },
    { path: '/einzelhandel', labelDe: 'Einzelhandel', labelEn: 'Retail' },
    { path: '/handwerker', labelDe: 'Handwerk', labelEn: 'Trades & Crafts' },
    { path: '/pflege', labelDe: 'Pflege', labelEn: 'Care Services' },
    { path: '/gastronomie', labelDe: 'Gastronomie', labelEn: 'Gastronomy' },
    { path: '/logistik', labelDe: 'Logistik', labelEn: 'Logistics' }
  ];

  const aboutItems = [
    { path: '/about', labelDe: 'Warum Automatisierung', labelEn: 'Why Automation' },
    { path: '/process', labelDe: 'Prozess', labelEn: 'Process' },
    { path: '/jobs', labelDe: 'Offene Stellen', labelEn: 'Careers' },
    { path: '/blog', labelDe: 'Blog', labelEn: 'Blog' }
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-background/95 backdrop-blur-sm border-b border-border/50 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0">
            <button 
              onClick={() => navigate('/')}
              className="focus:outline-none focus:ring-2 focus:ring-primary/20 rounded-lg p-1 hover:bg-muted/50 transition-colors"
            >
              <img 
                src="/lovable-uploads/40d9d7e1-0d48-4516-ac69-df85651529fa.png" 
                alt="Botti" 
                className="h-6 sm:h-7" 
              />
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {/* Services Dropdown */}
            <DropdownMenu open={isServicesDropdownOpen} onOpenChange={setIsServicesDropdownOpen}>
              <DropdownMenuTrigger asChild>
                <button className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-muted/50 font-medium flex items-center gap-1">
                  Services
                  <ChevronDown className="h-3 w-3" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent 
                align="start" 
                className="w-64 bg-background border border-border shadow-lg z-50"
                sideOffset={4}
              >
                {services.map((service) => (
                  <DropdownMenuItem 
                    key={service.id}
                    onClick={() => {
                      navigate(`/services/${service.id}`);
                      setIsServicesDropdownOpen(false);
                    }}
                    className="cursor-pointer hover:bg-muted focus:bg-muted px-4 py-3"
                  >
                    <div>
                      <div className="font-medium text-foreground text-sm">
                        {t(`services.${service.key}.title`)}
                      </div>
                      <div className="text-muted-foreground text-xs mt-1">
                        {t(`services.${service.key}.subtitle`)}
                      </div>
                    </div>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Branchen Dropdown */}
            <DropdownMenu open={isBranchenDropdownOpen} onOpenChange={setIsBranchenDropdownOpen}>
              <DropdownMenuTrigger asChild>
                <button className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-muted/50 font-medium flex items-center gap-1">
                  {language === 'de' ? 'Branchen' : 'Industries'}
                  <ChevronDown className="h-3 w-3" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent 
                align="start" 
                className="w-56 bg-background border border-border shadow-lg z-50"
                sideOffset={4}
              >
                {branchen.map((branche) => (
                  <DropdownMenuItem 
                    key={branche.path}
                    onClick={() => {
                      navigate(branche.path);
                      setIsBranchenDropdownOpen(false);
                    }}
                    className="cursor-pointer hover:bg-muted focus:bg-muted px-4 py-3"
                  >
                    <span className="font-medium text-foreground text-sm">
                      {language === 'de' ? branche.labelDe : branche.labelEn}
                    </span>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            <button 
              onClick={() => {
                navigate('/pricing');
                window.scrollTo(0, 0);
              }}
              className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-muted/50 font-medium"
            >
              {t('nav.pricing')}
            </button>

            {/* About Dropdown */}
            <DropdownMenu open={isAboutDropdownOpen} onOpenChange={setIsAboutDropdownOpen}>
              <DropdownMenuTrigger asChild>
                <button className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-muted/50 font-medium flex items-center gap-1">
                  About
                  <ChevronDown className="h-3 w-3" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent 
                align="start" 
                className="w-56 bg-background border border-border shadow-lg z-50"
                sideOffset={4}
              >
                {aboutItems.map((item) => (
                  <DropdownMenuItem 
                    key={item.path}
                    onClick={() => {
                      navigate(item.path);
                      setIsAboutDropdownOpen(false);
                    }}
                    className="cursor-pointer hover:bg-muted focus:bg-muted px-4 py-3"
                  >
                    <span className="font-medium text-foreground text-sm">
                      {language === 'de' ? item.labelDe : item.labelEn}
                    </span>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-2">
            <LanguageSwitch />
            <Button
              variant="default"
              size="default"
              onClick={() => navigate('/auth')}
              className="px-6 py-2 text-sm font-medium"
            >
              Login
            </Button>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden flex items-center gap-2">
            <LanguageSwitch />
            <button
              onClick={toggleMobileMenu}
              className="p-2 rounded-lg text-foreground hover:bg-secondary transition-colors"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div 
          className={`md:hidden fixed inset-0 top-14 bg-background z-40 overflow-y-auto transition-transform duration-300 ease-out ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <nav className="flex flex-col space-y-4 pt-4 px-4 sm:px-6 lg:px-8">
            {/* Mobile Services Section */}
            <div className="space-y-2">
              <div className="text-foreground font-raleway font-medium py-2 px-2 text-sm text-muted-foreground">
                Services
              </div>
              <div className="pl-4 space-y-1">
                {services.map((service) => (
                  <button
                    key={service.id}
                    onClick={() => {
                      navigate(`/services/${service.id}`);
                      setIsMobileMenuOpen(false);
                    }}
                    className="block w-full text-left text-foreground hover:text-primary transition-colors font-raleway py-2 text-sm"
                  >
                    {t(`services.${service.key}.title`)}
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile Branchen Section */}
            <div className="space-y-2">
              <div className="text-foreground font-raleway font-medium py-2 px-2 text-sm text-muted-foreground">
                {language === 'de' ? 'Branchen' : 'Industries'}
              </div>
              <div className="pl-4 space-y-1">
                {branchen.map((branche) => (
                  <button
                    key={branche.path}
                    onClick={() => {
                      navigate(branche.path);
                      setIsMobileMenuOpen(false);
                    }}
                    className="block w-full text-left text-foreground hover:text-primary transition-colors font-raleway py-2 text-sm"
                  >
                    {language === 'de' ? branche.labelDe : branche.labelEn}
                  </button>
                ))}
              </div>
            </div>
            <button 
              onClick={() => {
                navigate('/pricing');
                window.scrollTo(0, 0);
                setIsMobileMenuOpen(false);
              }}
              className="text-foreground hover:text-primary transition-colors font-raleway font-medium py-2 px-2 text-left"
            >
              {t('nav.pricing')}
            </button>

            {/* Mobile About Section */}
            <div className="space-y-2">
              <div className="text-foreground font-raleway font-medium py-2 px-2 text-sm text-muted-foreground">
                About
              </div>
              <div className="pl-4 space-y-1">
                {aboutItems.map((item) => (
                  <button
                    key={item.path}
                    onClick={() => {
                      navigate(item.path);
                      setIsMobileMenuOpen(false);
                    }}
                    className="block w-full text-left text-foreground hover:text-primary transition-colors font-raleway py-2 text-sm"
                  >
                    {language === 'de' ? item.labelDe : item.labelEn}
                  </button>
                ))}
              </div>
            </div>
            
            {/* Mobile Login Button */}
            <div className="pt-4 border-t border-border mt-4">
              <Button
                variant="default"
                size="default"
                onClick={() => {
                  navigate('/auth');
                  setIsMobileMenuOpen(false);
                }}
                className="w-full"
              >
                Login
              </Button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
