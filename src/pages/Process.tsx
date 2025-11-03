import { useLanguage } from '@/contexts/LanguageContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { CheckCircle, ArrowRight, Clock, Users, Target, BarChart } from 'lucide-react';

const Process = () => {
  const { t } = useLanguage();

  const processSteps = [
    {
      number: "01",
      title: t('process.step1.title'),
      subtitle: t('process.step1.subtitle'),
      description: t('process.step1.detailedDescription'),
      duration: t('process.step1.duration'),
      deliverables: [
        t('process.step1.deliverable1'),
        t('process.step1.deliverable2'),
        t('process.step1.deliverable3')
      ],
      icon: <Target className="w-6 h-6" />
    },
    {
      number: "02",
      title: t('process.step2.title'),
      subtitle: t('process.step2.subtitle'),
      description: t('process.step2.detailedDescription'),
      duration: t('process.step2.duration'),
      deliverables: [
        t('process.step2.deliverable1'),
        t('process.step2.deliverable2'),
        t('process.step2.deliverable3')
      ],
      icon: <BarChart className="w-6 h-6" />
    },
    {
      number: "03",
      title: t('process.step3.title'),
      subtitle: t('process.step3.subtitle'),
      description: t('process.step3.detailedDescription'),
      duration: t('process.step3.duration'),
      deliverables: [
        t('process.step3.deliverable1'),
        t('process.step3.deliverable2'),
        t('process.step3.deliverable3')
      ],
      icon: <Users className="w-6 h-6" />
    },
    {
      number: "04",
      title: t('process.step4.title'),
      subtitle: t('process.step4.subtitle'),
      description: t('process.step4.detailedDescription'),
      duration: t('process.step4.duration'),
      deliverables: [
        t('process.step4.deliverable1'),
        t('process.step4.deliverable2'),
        t('process.step4.deliverable3')
      ],
      icon: <Clock className="w-6 h-6" />
    }
  ];

  return (
    <div className="min-h-screen font-raleway bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 via-background to-primary/10 pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 font-raleway">
              {t('process.hero.title')} <span className="text-primary">{t('process.hero.highlight')}</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              {t('process.hero.subtitle')}
            </p>
            <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{t('process.hero.timeline')}</span>
              </div>
              <div className="w-1 h-1 bg-muted-foreground rounded-full"></div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                <span>{t('process.hero.teamSize')}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {processSteps.map((step, index) => (
              <div key={step.number} className="relative">
                <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-start">
                  {/* Step Info */}
                  <div className={`${index % 2 === 1 ? 'md:order-2' : ''}`}>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center">
                        <span className="text-primary font-bold text-xl">{step.number}</span>
                      </div>
                      <div className="flex-1">
                        <h2 className="text-2xl font-bold text-foreground mb-1 font-raleway">
                          {step.title}
                        </h2>
                        <p className="text-primary font-medium">{step.subtitle}</p>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {step.description}
                    </p>
                    
                    <div className="flex items-center gap-2 mb-6 text-sm text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      <span>{step.duration}</span>
                    </div>
                  </div>

                  {/* Deliverables Card */}
                  <div className={`${index % 2 === 1 ? 'md:order-1' : ''}`}>
                    <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                          {step.icon}
                        </div>
                        <h3 className="font-semibold text-foreground">
                          {t('process.deliverables.title')}
                        </h3>
                      </div>
                      
                      <ul className="space-y-3">
                        {step.deliverables.map((deliverable, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                            <span className="text-muted-foreground text-sm">{deliverable}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-card py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4 font-raleway">
              {t('process.benefits.title')}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t('process.benefits.subtitle')}
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">
                {t('process.benefit1.title')}
              </h3>
              <p className="text-muted-foreground text-sm">
                {t('process.benefit1.description')}
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <BarChart className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">
                {t('process.benefit2.title')}
              </h3>
              <p className="text-muted-foreground text-sm">
                {t('process.benefit2.description')}
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">
                {t('process.benefit3.title')}
              </h3>
              <p className="text-muted-foreground text-sm">
                {t('process.benefit3.description')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4 font-raleway">
            {t('process.cta.title')}
          </h2>
          <p className="text-muted-foreground mb-8">
            {t('process.cta.description')}
          </p>
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground"
            onClick={() => {
              const element = document.getElementById('project-form');
              element?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            {t('process.cta.button')}
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Process;