import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const cookieConsent = localStorage.getItem('cookieConsent');
    if (!cookieConsent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'declined');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-background border-t border-secondary shadow-lg z-50 p-4 sm:p-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex-1">
          <p className="text-sm text-foreground font-raleway">
            {t('cookies.message')}
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Button 
            variant="outline" 
            size="sm" 
            onClick={handleDecline}
            className="font-raleway"
          >
            {t('cookies.decline')}
          </Button>
          <Button 
            size="sm" 
            onClick={handleAccept}
            className="font-raleway"
          >
            {t('cookies.accept')}
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={handleDecline}
            className="h-8 w-8"
          >
            <X size={16} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;