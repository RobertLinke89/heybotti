
import { Phone } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

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
        <button className="bg-primary text-primary-foreground px-10 py-4 rounded-lg font-raleway font-semibold text-xl hover:bg-primary/90 transition-colors flex items-center justify-center gap-3 mx-auto">
          <Phone size={24} />
          {t('cta.button')}
        </button>
        <p className="text-muted-foreground mt-4 font-raleway font-light">
          {t('cta.note')}
        </p>
      </div>
    </section>
  );
};

export default CTA;
