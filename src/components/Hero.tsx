
import { Phone } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="bg-background py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="animate-fade-in max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6 font-raleway leading-tight">
              {t('hero.title')} <span className="text-primary">{t('hero.title.highlight')}</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 font-raleway font-light leading-relaxed max-w-3xl mx-auto">
              {t('hero.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-primary text-primary-foreground px-8 py-4 rounded-lg font-raleway font-semibold text-lg hover:bg-primary/90 hover-scale transition-all duration-300 flex items-center justify-center gap-2 animate-fade-in">
                <Phone size={20} />
                {t('hero.cta')}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
