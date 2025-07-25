
import { Phone, Menu, X, CalendarIcon } from 'lucide-react';
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
        title: t('callback.error.title'),
        description: t('callback.error.description'),
        variant: "destructive"
      });
      return;
    }

    toast({
      title: t('callback.success.title'),
      description: t('callback.success.description').replace('{date}', format(selectedDate, 'dd.MM.yyyy')).replace('{time}', selectedTime),
    });
    
    reset();
    setSelectedDate(undefined);
    setSelectedTime(undefined);
    setIsCallbackDialogOpen(false);
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
            <a href="#services" className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-muted/50 font-medium">{t('nav.services')}</a>
            <a href="#prozess" className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-muted/50 font-medium">{t('nav.process')}</a>
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
            <Dialog open={isCallbackDialogOpen} onOpenChange={setIsCallbackDialogOpen}>
              <DialogTrigger asChild>
                <button className="bg-primary/90 hover:bg-primary text-primary-foreground px-4 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-2 shadow-sm">
                  <Phone size={16} />
                  {t('header.cta')}
                </button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle>{t('callback.title')}</DialogTitle>
                </DialogHeader>
                <form onSubmit={handleSubmit(handleCallbackSubmit)} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">{t('callback.name')} *</label>
                    <Input
                      {...register("name", { required: t('callback.name.required') })}
                      placeholder={t('callback.name.placeholder')}
                    />
                    {errors.name && (
                      <p className="text-destructive text-sm mt-1">{errors.name.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">{t('callback.email')} *</label>
                    <Input
                      {...register("email", { 
                        required: t('callback.email.required'),
                        pattern: {
                          value: /^\S+@\S+$/i,
                          message: t('callback.email.invalid')
                        }
                      })}
                      type="email"
                      placeholder={t('callback.email.placeholder')}
                    />
                    {errors.email && (
                      <p className="text-destructive text-sm mt-1">{errors.email.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">{t('callback.phone')} *</label>
                    <Input
                      {...register("phone", { required: t('callback.phone.required') })}
                      type="tel"
                      placeholder={t('callback.phone.placeholder')}
                    />
                    {errors.phone && (
                      <p className="text-destructive text-sm mt-1">{errors.phone.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">{t('callback.date')} *</label>
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
                          {selectedDate ? format(selectedDate, 'dd.MM.yyyy') : <span>{t('callback.date.placeholder')}</span>}
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
                    <label className="block text-sm font-medium mb-2">{t('callback.time')} *</label>
                    <Select value={selectedTime} onValueChange={setSelectedTime}>
                      <SelectTrigger>
                        <SelectValue placeholder={t('callback.time.placeholder')} />
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
                      {t('callback.cancel')}
                    </Button>
                    <Button type="submit" className="flex-1">
                      {t('callback.schedule')}
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
          <nav className="flex flex-col space-y-4 pt-4 border-t border-secondary">
            <a 
              href="#services" 
              className="text-foreground hover:text-primary transition-colors font-raleway font-medium py-2 px-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t('nav.services')}
            </a>
            <a 
              href="#prozess" 
              className="text-foreground hover:text-primary transition-colors font-raleway font-medium py-2 px-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t('nav.process')}
            </a>
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
            <div className="py-2 px-2">
              <LanguageSwitch />
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
                  <DialogTitle>{t('callback.title')}</DialogTitle>
                </DialogHeader>
                <form onSubmit={handleSubmit(handleCallbackSubmit)} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">{t('callback.name')} *</label>
                    <Input
                      {...register("name", { required: t('callback.name.required') })}
                      placeholder={t('callback.name.placeholder')}
                    />
                    {errors.name && (
                      <p className="text-destructive text-sm mt-1">{errors.name.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">{t('callback.email')} *</label>
                    <Input
                      {...register("email", { 
                        required: t('callback.email.required'),
                        pattern: {
                          value: /^\S+@\S+$/i,
                          message: t('callback.email.invalid')
                        }
                      })}
                      type="email"
                      placeholder={t('callback.email.placeholder')}
                    />
                    {errors.email && (
                      <p className="text-destructive text-sm mt-1">{errors.email.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">{t('callback.phone')} *</label>
                    <Input
                      {...register("phone", { required: t('callback.phone.required') })}
                      type="tel"
                      placeholder={t('callback.phone.placeholder')}
                    />
                    {errors.phone && (
                      <p className="text-destructive text-sm mt-1">{errors.phone.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">{t('callback.date')} *</label>
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
                          {selectedDate ? format(selectedDate, 'dd.MM.yyyy') : <span>{t('callback.date.placeholder')}</span>}
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
                    <label className="block text-sm font-medium mb-2">{t('callback.time')} *</label>
                    <Select value={selectedTime} onValueChange={setSelectedTime}>
                      <SelectTrigger>
                        <SelectValue placeholder={t('callback.time.placeholder')} />
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
                      {t('callback.cancel')}
                    </Button>
                    <Button type="submit" className="flex-1">
                      {t('callback.schedule')}
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
