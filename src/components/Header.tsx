import { Menu, X, ChevronDown, ChevronRight } from 'lucide-react';
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
  
  // Mobile accordion states
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileBranchenOpen, setMobileBranchenOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);

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
    // Reset accordion states when closing
    if (isMobileMenuOpen) {
      setMobileServicesOpen(false);
      setMobileBranchenOpen(false);
      setMobileAboutOpen(false);
    }
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
              className="p-2 rounded-lg text-foreground hover:bg-muted transition-colors"
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
          <nav className="flex flex-col py-2">
            {/* Mobile Services Accordion */}
            <div className="border-b border-border/50">
              <button
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className="w-full flex items-center justify-between px-6 py-4 text-foreground font-medium text-base"
              >
                <span>Services</span>
                <ChevronRight className={`h-4 w-4 text-muted-foreground transition-transform duration-200 ${mobileServicesOpen ? 'rotate-90' : ''}`} />
              </button>
              <div className={`overflow-hidden transition-all duration-200 ${mobileServicesOpen ? 'max-h-96' : 'max-h-0'}`}>
                <div className="bg-muted/30 py-2">
                  {services.map((service) => (
                    <button
                      key={service.id}
                      onClick={() => {
                        navigate(`/services/${service.id}`);
                        setIsMobileMenuOpen(false);
                      }}
                      className="block w-full text-left px-8 py-3 text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors text-sm"
                    >
                      {t(`services.${service.key}.title`)}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Mobile Branchen Accordion */}
            <div className="border-b border-border/50">
              <button
                onClick={() => setMobileBranchenOpen(!mobileBranchenOpen)}
                className="w-full flex items-center justify-between px-6 py-4 text-foreground font-medium text-base"
              >
                <span>{language === 'de' ? 'Branchen' : 'Industries'}</span>
                <ChevronRight className={`h-4 w-4 text-muted-foreground transition-transform duration-200 ${mobileBranchenOpen ? 'rotate-90' : ''}`} />
              </button>
              <div className={`overflow-hidden transition-all duration-200 ${mobileBranchenOpen ? 'max-h-96' : 'max-h-0'}`}>
                <div className="bg-muted/30 py-2">
                  {branchen.map((branche) => (
                    <button
                      key={branche.path}
                      onClick={() => {
                        navigate(branche.path);
                        setIsMobileMenuOpen(false);
                      }}
                      className="block w-full text-left px-8 py-3 text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors text-sm"
                    >
                      {language === 'de' ? branche.labelDe : branche.labelEn}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Pricing Link */}
            <button 
              onClick={() => {
                navigate('/pricing');
                window.scrollTo(0, 0);
                setIsMobileMenuOpen(false);
              }}
              className="w-full text-left px-6 py-4 text-foreground font-medium text-base border-b border-border/50 hover:bg-muted/50 transition-colors"
            >
              {t('nav.pricing')}
            </button>

            {/* Mobile About Accordion */}
            <div className="border-b border-border/50">
              <button
                onClick={() => setMobileAboutOpen(!mobileAboutOpen)}
                className="w-full flex items-center justify-between px-6 py-4 text-foreground font-medium text-base"
              >
                <span>About</span>
                <ChevronRight className={`h-4 w-4 text-muted-foreground transition-transform duration-200 ${mobileAboutOpen ? 'rotate-90' : ''}`} />
              </button>
              <div className={`overflow-hidden transition-all duration-200 ${mobileAboutOpen ? 'max-h-64' : 'max-h-0'}`}>
                <div className="bg-muted/30 py-2">
                  {aboutItems.map((item) => (
                    <button
                      key={item.path}
                      onClick={() => {
                        navigate(item.path);
                        setIsMobileMenuOpen(false);
                      }}
                      className="block w-full text-left px-8 py-3 text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors text-sm"
                    >
                      {language === 'de' ? item.labelDe : item.labelEn}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Mobile Login Button */}
            <div className="px-6 py-6">
              <Button
                variant="default"
                size="lg"
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
