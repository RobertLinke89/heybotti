
import { Phone, Menu, X, CalendarIcon } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Calendar } from '@/components/ui/calendar';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
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
  const { t } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCallbackDialogOpen, setIsCallbackDialogOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [selectedTime, setSelectedTime] = useState<string>();
  const { register, handleSubmit, formState: { errors }, reset } = useForm<CallbackFormData>();
  const { toast } = useToast();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleCallbackSubmit = (data: CallbackFormData) => {
    if (!selectedDate || !selectedTime) {
      toast({
        title: "Fehler",
        description: "Bitte wählen Sie Datum und Uhrzeit aus.",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Rückruf vereinbart!",
      description: `Wir rufen Sie am ${format(selectedDate, 'dd.MM.yyyy')} um ${selectedTime} zurück.`,
    });
    
    reset();
    setSelectedDate(undefined);
    setSelectedTime(undefined);
    setIsCallbackDialogOpen(false);
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
            <Dialog open={isCallbackDialogOpen} onOpenChange={setIsCallbackDialogOpen}>
              <DialogTrigger asChild>
                <button className="bg-primary text-primary-foreground px-6 py-2 rounded-lg font-raleway font-semibold hover:bg-primary/90 transition-colors flex items-center gap-2">
                  <Phone size={18} />
                  {t('header.cta')}
                </button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle>Rückruf vereinbaren</DialogTitle>
                </DialogHeader>
                <form onSubmit={handleSubmit(handleCallbackSubmit)} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Name *</label>
                    <Input
                      {...register("name", { required: "Name ist erforderlich" })}
                      placeholder="Ihr Name"
                    />
                    {errors.name && (
                      <p className="text-destructive text-sm mt-1">{errors.name.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">E-Mail *</label>
                    <Input
                      {...register("email", { 
                        required: "E-Mail ist erforderlich",
                        pattern: {
                          value: /^\S+@\S+$/i,
                          message: "Ungültige E-Mail-Adresse"
                        }
                      })}
                      type="email"
                      placeholder="ihre@email.de"
                    />
                    {errors.email && (
                      <p className="text-destructive text-sm mt-1">{errors.email.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Telefon *</label>
                    <Input
                      {...register("phone", { required: "Telefonnummer ist erforderlich" })}
                      type="tel"
                      placeholder="+49 123 456789"
                    />
                    {errors.phone && (
                      <p className="text-destructive text-sm mt-1">{errors.phone.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Datum *</label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className={cn(
                            "w-full justify-start text-left font-normal",
                            !selectedDate && "text-muted-foreground"
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {selectedDate ? format(selectedDate, 'dd.MM.yyyy') : <span>Datum wählen</span>}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={selectedDate}
                          onSelect={setSelectedDate}
                          disabled={(date) => date < new Date()}
                          initialFocus
                          className={cn("p-3 pointer-events-auto")}
                        />
                      </PopoverContent>
                    </Popover>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Uhrzeit *</label>
                    <Select value={selectedTime} onValueChange={setSelectedTime}>
                      <SelectTrigger>
                        <SelectValue placeholder="Uhrzeit wählen" />
                      </SelectTrigger>
                      <SelectContent>
                        {timeSlots.map((time) => (
                          <SelectItem key={time} value={time}>
                            {time}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="flex gap-2 pt-4">
                    <Button
                      type="button"
                      variant="outline"
                      className="flex-1"
                      onClick={() => setIsCallbackDialogOpen(false)}
                    >
                      Abbrechen
                    </Button>
                    <Button type="submit" className="flex-1">
                      Rückruf vereinbaren
                    </Button>
                  </div>
                </form>
              </DialogContent>
            </Dialog>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden flex items-center">
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
            ? 'max-h-96 opacity-100 pb-4' 
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
            <div className="flex items-center justify-between py-2 px-2 border-t border-secondary mt-4 pt-4">
              <span className="text-foreground font-raleway font-medium">Sprache / Language</span>
              <LanguageSwitcher />
            </div>
            <Dialog open={isCallbackDialogOpen} onOpenChange={setIsCallbackDialogOpen}>
              <DialogTrigger asChild>
                <button 
                  className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-raleway font-semibold hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Phone size={18} />
                  {t('header.cta')}
                </button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle>Rückruf vereinbaren</DialogTitle>
                </DialogHeader>
                <form onSubmit={handleSubmit(handleCallbackSubmit)} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Name *</label>
                    <Input
                      {...register("name", { required: "Name ist erforderlich" })}
                      placeholder="Ihr Name"
                    />
                    {errors.name && (
                      <p className="text-destructive text-sm mt-1">{errors.name.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">E-Mail *</label>
                    <Input
                      {...register("email", { 
                        required: "E-Mail ist erforderlich",
                        pattern: {
                          value: /^\S+@\S+$/i,
                          message: "Ungültige E-Mail-Adresse"
                        }
                      })}
                      type="email"
                      placeholder="ihre@email.de"
                    />
                    {errors.email && (
                      <p className="text-destructive text-sm mt-1">{errors.email.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Telefon *</label>
                    <Input
                      {...register("phone", { required: "Telefonnummer ist erforderlich" })}
                      type="tel"
                      placeholder="+49 123 456789"
                    />
                    {errors.phone && (
                      <p className="text-destructive text-sm mt-1">{errors.phone.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Datum *</label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className={cn(
                            "w-full justify-start text-left font-normal",
                            !selectedDate && "text-muted-foreground"
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {selectedDate ? format(selectedDate, 'dd.MM.yyyy') : <span>Datum wählen</span>}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={selectedDate}
                          onSelect={setSelectedDate}
                          disabled={(date) => date < new Date()}
                          initialFocus
                          className={cn("p-3 pointer-events-auto")}
                        />
                      </PopoverContent>
                    </Popover>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Uhrzeit *</label>
                    <Select value={selectedTime} onValueChange={setSelectedTime}>
                      <SelectTrigger>
                        <SelectValue placeholder="Uhrzeit wählen" />
                      </SelectTrigger>
                      <SelectContent>
                        {timeSlots.map((time) => (
                          <SelectItem key={time} value={time}>
                            {time}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="flex gap-2 pt-4">
                    <Button
                      type="button"
                      variant="outline"
                      className="flex-1"
                      onClick={() => setIsCallbackDialogOpen(false)}
                    >
                      Abbrechen
                    </Button>
                    <Button type="submit" className="flex-1">
                      Rückruf vereinbaren
                    </Button>
                  </div>
                </form>
              </DialogContent>
            </Dialog>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
