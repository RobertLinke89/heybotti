
import { Phone, Menu, X, CalendarIcon, ChevronDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import LanguageSwitch from '@/components/LanguageSwitch';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Calendar } from '@/components/ui/calendar';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';

interface CallbackFormData {
  name: string;
  email: string;
  phone: string;
}

const timeSlots = [
  '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
  '12:00', '12:30', '13:00', '13:30', '14:00', '14:30',
  '15:00', '15:30', '16:00', '16:30', '17:00', '17:30'
];

const Header = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCallbackDialogOpen, setIsCallbackDialogOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [selectedTime, setSelectedTime] = useState<string>();
  const { register, handleSubmit, formState: { errors }, reset } = useForm<CallbackFormData>();
  const { toast } = useToast();

  const services = [
    { id: 'sales-marketing', key: 'sales' },
    { id: 'finance', key: 'finance' },
    { id: 'hr', key: 'hr' },
    { id: 'ecommerce', key: 'ecommerce' },
    { id: 'business-intelligence', key: 'bi' },
    { id: 'workflows', key: 'workflows' }
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleCallbackSubmit = async (data: CallbackFormData) => {
    if (!selectedDate || !selectedTime) {
      toast({
        title: t('callback.error.title'),
        description: t('callback.error.description'),
        variant: "destructive"
      });
      return;
    }

    try {
      const { supabase } = await import("@/integrations/supabase/client");
      
      const response = await supabase.functions.invoke('send-contact-email', {
        body: {
          type: 'callback',
          name: data.name,
          email: data.email,
          phone: data.phone,
          date: format(selectedDate, 'dd.MM.yyyy'),
          time: selectedTime
        }
      });

      if (response.error) {
        throw new Error(response.error.message);
      }

      toast({
        title: t('callback.success.title'),
        description: t('callback.success.description').replace('{date}', format(selectedDate, 'dd.MM.yyyy')).replace('{time}', selectedTime),
      });
      
      reset();
      setSelectedDate(undefined);
      setSelectedTime(undefined);
      setIsCallbackDialogOpen(false);
    } catch (error) {
      console.error('Error sending callback request:', error);
      toast({
        title: "Fehler",
        description: "Die Rückruf-Anfrage konnte nicht gesendet werden. Bitte versuchen Sie es erneut.",
        variant: "destructive"
      });
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
              <img src="/lovable-uploads/40d9d7e1-0d48-4516-ac69-df85651529fa.png" alt="Botti" className="h-6 sm:h-7" />
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {/* Services Dropdown */}
            <DropdownMenu open={isServicesDropdownOpen} onOpenChange={setIsServicesDropdownOpen}>
              <DropdownMenuTrigger asChild>
                <button className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-muted/50 font-medium flex items-center gap-1">
                  {t('nav.services')}
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
            <button 
              onClick={() => {
                navigate('/process');
                window.scrollTo(0, 0);
              }}
              className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-muted/50 font-medium"
            >
              {t('nav.process')}
            </button>
            <button 
              onClick={() => {
                navigate('/blog');
                window.scrollTo(0, 0);
              }} 
              className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-muted/50 font-medium"
            >
              {t('nav.blog')}
            </button>
            <button 
              onClick={() => {
                navigate('/about');
                window.scrollTo(0, 0);
              }} 
              className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-muted/50 font-medium"
            >
              {t('nav.about')}
            </button>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-2">
            <LanguageSwitch />
            <Button
              variant="secondary"
              size="default"
              onClick={() => {
                const projectForm = document.getElementById('project-form');
                if (projectForm) {
                  projectForm.scrollIntoView({ behavior: 'smooth' });
                } else {
                  navigate('/');
                  setTimeout(() => {
                    const form = document.getElementById('project-form');
                    form?.scrollIntoView({ behavior: 'smooth' });
                  }, 100);
                }
              }}
              className="px-4 py-2 text-sm font-medium"
            >
              Request Project
            </Button>
            <a 
              href="tel:+4936724838961" 
              className="bg-primary/90 hover:bg-primary text-primary-foreground px-4 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-2 shadow-sm"
            >
              <Phone size={16} />
              {t('header.cta')}
            </a>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden flex items-center">
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
        <div className={`md:hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen 
            ? 'max-h-96 opacity-100 pb-4' 
            : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <nav className="flex flex-col space-y-4 pt-4 border-t border-border bg-background/95 backdrop-blur-sm">
            {/* Mobile Services Section */}
            <div className="space-y-2">
              <div className="text-foreground font-raleway font-medium py-2 px-2 text-sm text-muted-foreground">
                {t('nav.services')}
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
            <button 
              onClick={() => {
                navigate('/process');
                window.scrollTo(0, 0);
                setIsMobileMenuOpen(false);
              }}
              className="text-foreground hover:text-primary transition-colors font-raleway font-medium py-2 px-2 text-left w-full"
            >
              {t('nav.process')}
            </button>
            <button 
              onClick={() => {
                navigate('/blog');
                window.scrollTo(0, 0);
                setIsMobileMenuOpen(false);
              }}
              className="text-foreground hover:text-primary transition-colors font-raleway font-medium py-2 px-2 text-left"
            >
              {t('nav.blog')}
            </button>
            <button 
              onClick={() => {
                navigate('/about');
                window.scrollTo(0, 0);
                setIsMobileMenuOpen(false);
              }}
              className="text-foreground hover:text-primary transition-colors font-raleway font-medium py-2 px-2 text-left"
            >
              {t('nav.about')}
            </button>
            <div className="py-2 px-2 flex items-center gap-2">
              <LanguageSwitch />
            </div>
            <Button
              variant="secondary"
              size="lg"
              onClick={() => {
                setIsMobileMenuOpen(false);
                const projectForm = document.getElementById('project-form');
                if (projectForm) {
                  projectForm.scrollIntoView({ behavior: 'smooth' });
                } else {
                  navigate('/');
                  setTimeout(() => {
                    const form = document.getElementById('project-form');
                    form?.scrollIntoView({ behavior: 'smooth' });
                  }, 100);
                }
              }}
              className="w-full"
            >
              Request Project
            </Button>
            <a 
              href="tel:+4936724838961" 
              className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-raleway font-semibold hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Phone size={18} />
              {t('header.cta')}
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
