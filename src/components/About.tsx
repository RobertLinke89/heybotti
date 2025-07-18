
import { useLanguage } from '@/contexts/LanguageContext';

const About = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="bg-secondary py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-foreground mb-6 font-raleway">
            {t('about.title')} <span className="text-primary">{t('about.title.highlight')}</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold text-xl">01</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3 font-raleway">{t('about.step1.title')}</h3>
              <p className="text-muted-foreground font-raleway font-light">
                {t('about.step1.description')}
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold text-xl">02</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3 font-raleway">{t('about.step2.title')}</h3>
              <p className="text-muted-foreground font-raleway font-light">
                {t('about.step2.description')}
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold text-xl">03</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3 font-raleway">{t('about.step3.title')}</h3>
              <p className="text-muted-foreground font-raleway font-light">
                {t('about.step3.description')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
