import { X, Check, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const AutomationComparison = () => {
  const [showAutomated, setShowAutomated] = useState(false);
  const { t } = useLanguage();
  const navigate = useNavigate();

  return (
    <section className="py-20 bg-background">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            {t('comparison.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('comparison.subtitle')}
          </p>
        </div>
        
        <div className="relative">
          {/* Toggle Switch */}
          <div className="flex items-center justify-center mb-8">
            <div className="flex items-center gap-4 bg-card rounded-full p-2 border border-border">
              <button 
                onClick={() => setShowAutomated(false)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                  !showAutomated 
                    ? 'bg-destructive text-destructive-foreground shadow-md' 
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {t('comparison.off.title')}
              </button>
              <button 
                onClick={() => setShowAutomated(true)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                  showAutomated 
                    ? 'bg-primary text-primary-foreground shadow-md' 
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {t('comparison.on.title')}
              </button>
            </div>
          </div>

          {/* Content Display */}
          <div className="max-w-3xl mx-auto">
            {!showAutomated ? (
              // Automation OFF
              <div className="space-y-6">
                <div className="flex items-center gap-3 mb-6 justify-center">
                  <div className="w-12 h-12 rounded-full bg-destructive/20 flex items-center justify-center">
                    <X className="w-6 h-6 text-destructive" />
                  </div>
                  <div className="text-center">
                    <h3 className="text-xl font-semibold text-foreground">{t('comparison.without.title')}</h3>
                    <p className="text-muted-foreground">{t('comparison.without.subtitle')}</p>
                  </div>
                </div>
                
                <div className="bg-card rounded-xl p-6 border border-border">
                  <img 
                    src="/lovable-uploads/b7db09fb-6bc3-4de7-9976-ea9b53855bf5.png" 
                    alt="Automation OFF - Chaotic processes"
                    className="w-full h-auto rounded-lg"
                  />
                  <div className="mt-6 space-y-3">
                     <div className="flex items-center gap-3">
                       <X className="w-5 h-5 text-destructive" />
                       <span className="text-foreground">{t('comparison.without.feature1')}</span>
                     </div>
                     <div className="flex items-center gap-3">
                       <X className="w-5 h-5 text-destructive" />
                       <span className="text-foreground">{t('comparison.without.feature2')}</span>
                     </div>
                     <div className="flex items-center gap-3">
                       <X className="w-5 h-5 text-destructive" />
                       <span className="text-foreground">{t('comparison.without.feature3')}</span>
                     </div>
                     <div className="flex items-center gap-3">
                       <X className="w-5 h-5 text-destructive" />
                       <span className="text-foreground">{t('comparison.without.feature4')}</span>
                     </div>
                  </div>
                </div>
              </div>
            ) : (
              // Automation ON
              <div className="space-y-6">
                <div className="flex items-center gap-3 mb-6 justify-center">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <Check className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-center">
                    <h3 className="text-xl font-semibold text-foreground">{t('comparison.with.title')}</h3>
                    <p className="text-muted-foreground">{t('comparison.with.subtitle')}</p>
                  </div>
                </div>
                
                <div className="bg-card rounded-xl p-6 border border-border shadow-lg">
                  <img 
                    src="/lovable-uploads/6adf596e-2d5c-4bf8-b8a3-472cbdb6b045.png" 
                    alt="Automation ON - Streamlined processes"
                    className="w-full h-auto rounded-lg"
                  />
                  <div className="mt-6 space-y-3">
                     <div className="flex items-center gap-3">
                       <Check className="w-5 h-5 text-primary" />
                       <span className="text-foreground">{t('comparison.with.feature1')}</span>
                     </div>
                     <div className="flex items-center gap-3">
                       <Check className="w-5 h-5 text-primary" />
                       <span className="text-foreground">{t('comparison.with.feature2')}</span>
                     </div>
                     <div className="flex items-center gap-3">
                       <Check className="w-5 h-5 text-primary" />
                       <span className="text-foreground">{t('comparison.with.feature3')}</span>
                     </div>
                     <div className="flex items-center gap-3">
                       <Check className="w-5 h-5 text-primary" />
                       <span className="text-foreground">{t('comparison.with.feature4')}</span>
                     </div>
                     <div className="flex items-center gap-3">
                       <Check className="w-5 h-5 text-primary" />
                       <span className="text-foreground">{t('comparison.with.feature5')}</span>
                     </div>
                     <div className="flex items-center gap-3">
                       <Check className="w-5 h-5 text-primary" />
                       <span className="text-foreground">{t('comparison.with.feature6')}</span>
                     </div>
                     <div className="flex items-center gap-3">
                       <Check className="w-5 h-5 text-primary" />
                       <span className="text-foreground">{t('comparison.with.feature7')}</span>
                     </div>
                     <div className="flex items-center gap-3">
                       <Check className="w-5 h-5 text-primary" />
                       <span className="text-foreground">{t('comparison.with.feature8')}</span>
                     </div>
                     <div className="flex items-center gap-3">
                       <Check className="w-5 h-5 text-primary" />
                       <span className="text-foreground">{t('comparison.with.feature9')}</span>
                     </div>
                     <div className="flex items-center gap-3">
                       <Check className="w-5 h-5 text-primary" />
                       <span className="text-foreground">{t('comparison.with.feature10')}</span>
                     </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Customer Testimonial */}
        <div className="mt-16 bg-gradient-to-br from-primary/20 to-primary/5 rounded-3xl p-8 lg:p-12 border border-primary/20 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full -translate-y-16 translate-x-16"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-primary/5 rounded-full translate-y-12 -translate-x-12"></div>
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <div className="mb-8">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Check className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-2">{t('comparison.testimonial.title')}</h3>
              <p className="text-primary font-medium">{t('comparison.testimonial.subtitle')}</p>
            </div>
            <blockquote className="text-xl lg:text-2xl text-foreground leading-relaxed mb-8 font-medium">
              "{t('comparison.testimonial.quote')}"
            </blockquote>
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">V</span>
              </div>
              <div className="text-left">
                <cite className="text-foreground font-bold text-lg block">
                  {t('comparison.testimonial.name')}
                </cite>
                <span className="text-muted-foreground">{t('comparison.testimonial.company')}</span>
              </div>
            </div>
          </div>
        </div>

        {/* CTA to Process Page */}
        <div className="mt-16 text-center">
          <div className="bg-card rounded-2xl p-8 border border-border">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              {t('comparison.cta.title')}
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              {t('comparison.cta.description')}
            </p>
            <Button 
              onClick={() => navigate('/process')}
              size="lg"
              className="gap-2"
            >
              {t('comparison.cta.button')}
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AutomationComparison;