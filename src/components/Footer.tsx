
import { useLanguage } from '@/contexts/LanguageContext';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const { t, language } = useLanguage();
  const navigate = useNavigate();

  return (
    <footer className="bg-background py-8 border-t border-secondary">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <img src="/lovable-uploads/934215ae-3a62-4f6c-b9f9-76cd450405f2.png" alt="hey" className="h-6 mx-auto mb-3" />
          <p className="text-sm text-muted-foreground font-raleway font-light mb-4 max-w-2xl mx-auto">
            {t('footer.description')}
          </p>
          
          {/* Legal Links */}
          <div className="flex justify-center space-x-6 mb-6">
            <button
              onClick={() => {
                navigate('/privacy');
                window.scrollTo(0, 0);
              }}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors font-raleway"
            >
              {language === 'de' ? 'Datenschutz' : 'Privacy Policy'}
            </button>
            <button
              onClick={() => {
                navigate('/legal');
                window.scrollTo(0, 0);
              }}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors font-raleway"
            >
              {language === 'de' ? 'Impressum' : 'Legal Notice'}
            </button>
          </div>
        </div>
        
        <div className="border-t border-secondary mt-6 pt-6 text-center">
          <p className="text-xs text-muted-foreground font-raleway font-light">
            {t('footer.copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
