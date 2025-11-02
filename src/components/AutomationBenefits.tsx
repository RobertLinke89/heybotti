import { Clock, TrendingUp, Target, Zap, Shield, Users, BarChart, Sparkles, CheckCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const AutomationBenefits = () => {
  const { t } = useLanguage();

  const benefits = [
    {
      icon: Clock,
      key: 'time'
    },
    {
      icon: TrendingUp,
      key: 'efficiency'
    },
    {
      icon: Target,
      key: 'accuracy'
    },
    {
      icon: Zap,
      key: 'speed'
    },
    {
      icon: Shield,
      key: 'security'
    },
    {
      icon: Users,
      key: 'satisfaction'
    },
    {
      icon: BarChart,
      key: 'insights'
    },
    {
      icon: Sparkles,
      key: 'innovation'
    },
    {
      icon: CheckCircle,
      key: 'quality'
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            {t('benefits.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('benefits.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;
            return (
              <div 
                key={benefit.key}
                className="group bg-card rounded-xl p-6 border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {t(`benefits.${benefit.key}.title`)}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {t(`benefits.${benefit.key}.description`)}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AutomationBenefits;
