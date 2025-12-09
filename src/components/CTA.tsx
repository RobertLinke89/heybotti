
import { useLanguage } from '@/contexts/LanguageContext';
import { useNavigate, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const CTA = () => {
  const { t } = useLanguage();

  return (
    <section className="bg-card py-20 border-t border-secondary">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-foreground mb-6 font-raleway">
          {t('cta.title')} <span className="text-primary">{t('cta.title.highlight')}</span>?
        </h2>
        <p className="text-xl text-muted-foreground mb-8 font-raleway font-light">
          {t('cta.subtitle')}
        </p>
        <Button 
          asChild
          size="lg"
          className="px-10 py-4 text-xl"
        >
          <a 
            href="https://cal.katalysat.com/team/heybotti"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t('cta.button')}
          </a>
        </Button>
        <p className="text-muted-foreground mt-4 font-raleway font-light">
          {t('cta.note')}
        </p>
      </div>
    </section>
  );
};

export default CTA;
