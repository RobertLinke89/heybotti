
import { useLanguage } from '@/contexts/LanguageContext';

const About = () => {
  const { t } = useLanguage();
  return (
    <section id="about" className="bg-background py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4 font-raleway">
            {t('about.title')} <span className="text-primary">{t('about.title.highlight')}</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t('about.subtitle')}
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Step 01 */}
          <div className="group p-6 rounded-lg border border-border/50 hover:border-primary/20 transition-all duration-300 hover:shadow-sm">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/15 transition-colors">
                  <span className="text-primary font-semibold text-lg">01</span>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-foreground mb-2 font-raleway">
                  {t('about.step1.title')}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {t('about.step1.description')}
                </p>
              </div>
            </div>
          </div>

          {/* Step 02 */}
          <div className="group p-6 rounded-lg border border-border/50 hover:border-primary/20 transition-all duration-300 hover:shadow-sm">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/15 transition-colors">
                  <span className="text-primary font-semibold text-lg">02</span>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-foreground mb-2 font-raleway">
                  {t('about.step2.title')}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {t('about.step2.description')}
                </p>
              </div>
            </div>
          </div>

          {/* Step 03 */}
          <div className="group p-6 rounded-lg border border-border/50 hover:border-primary/20 transition-all duration-300 hover:shadow-sm">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/15 transition-colors">
                  <span className="text-primary font-semibold text-lg">03</span>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-foreground mb-2 font-raleway">
                  {t('about.step3.title')}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {t('about.step3.description')}
                </p>
              </div>
            </div>
          </div>

          {/* Step 04 */}
          <div className="group p-6 rounded-lg border border-border/50 hover:border-primary/20 transition-all duration-300 hover:shadow-sm">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/15 transition-colors">
                  <span className="text-primary font-semibold text-lg">04</span>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-foreground mb-2 font-raleway">
                  {t('about.step4.title')}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {t('about.step4.description')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
