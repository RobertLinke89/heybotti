import { useParams, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { ArrowLeft, CheckCircle, TrendingUp, Users, DollarSign, Clock, Zap } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import CTA from '@/components/CTA';

const ServicesDetail = () => {
  const { serviceId } = useParams();
  const navigate = useNavigate();
  const { t } = useLanguage();

  // Scroll to top when component mounts or serviceId changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [serviceId]);

  const getServiceData = (id: string) => {
    const serviceMap: { [key: string]: string } = {
      'sales-marketing': 'sales',
      'finance': 'finance', 
      'hr': 'hr',
      'ecommerce': 'ecommerce',
      'business-intelligence': 'bi',
      'workflows': 'workflows'
    };
    return serviceMap[id] || null;
  };

  const serviceKey = getServiceData(serviceId!);
  
  if (!serviceKey) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-foreground mb-4">{t('service.not.found')}</h1>
            <button 
              onClick={() => navigate('/')}
              className="text-primary hover:underline"
            >
              {t('service.back')}
            </button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const getServiceContent = (key: string) => {
    const iconMap: { [key: string]: any } = {
      'sales': TrendingUp,
      'finance': DollarSign,
      'hr': Users,
      'ecommerce': Zap,
      'bi': TrendingUp,
      'workflows': CheckCircle
    };

    return {
      title: t(`service.${key}.title`),
      subtitle: t(`service.${key}.subtitle`),
      hero: t(`service.${key}.hero`),
      description: t(`service.${key}.description`),
      icon: iconMap[key],
      features: [
        t(`services.${key}.feature1`),
        t(`services.${key}.feature2`),
        t(`services.${key}.feature3`),
        t(`services.${key}.feature4`),
        ...(key === 'workflows' ? [t(`services.${key}.feature5`), t(`services.${key}.feature6`)] : [])
      ],
      benefits: [
        { icon: iconMap[key], title: t(`service.${key}.benefit1.title`), desc: t(`service.${key}.benefit1.desc`) },
        { icon: Clock, title: t(`service.${key}.benefit2.title`), desc: t(`service.${key}.benefit2.desc`) },
        { icon: DollarSign, title: t(`service.${key}.benefit3.title`), desc: t(`service.${key}.benefit3.desc`) }
      ],
      process: [
        { step: "01", title: t(`service.${key}.process1.title`), description: t(`service.${key}.process1.desc`) },
        { step: "02", title: t(`service.${key}.process2.title`), description: t(`service.${key}.process2.desc`) },
        { step: "03", title: t(`service.${key}.process3.title`), description: t(`service.${key}.process3.desc`) }
      ],
      example: {
        title: t(`service.${key}.example.title`),
        scenario: t(`service.${key}.example.scenario`),
        solution: t(`service.${key}.example.solution`),
        results: [
          t(`service.${key}.example.result1`),
          t(`service.${key}.example.result2`),
          t(`service.${key}.example.result3`)
        ]
      }
    };
  };

  const service = getServiceContent(serviceKey);

  if (!service) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-foreground mb-4">Service nicht gefunden</h1>
            <button 
              onClick={() => navigate('/')}
              className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
            >
              Zurück zur Startseite
            </button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const IconComponent = service.icon;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-primary py-20 text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/10"></div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <button 
            onClick={() => navigate('/')}
            className="inline-flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground mb-8 transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            {t('service.back')}
          </button>
          
          <div className="flex items-center gap-6 mb-8 animate-fade-in">
            <div className="w-20 h-20 bg-primary-foreground/20 rounded-2xl flex items-center justify-center backdrop-blur-sm flex-shrink-0">
              <IconComponent size={40} className="text-primary-foreground" strokeWidth={2} />
            </div>
            <div>
              <h1 className="text-5xl font-bold mb-4 font-raleway">{service.title}</h1>
              <p className="text-xl text-primary-foreground/90 font-raleway font-light">{service.hero}</p>
            </div>
          </div>
        </div>
        
        {/* Animated background elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-foreground/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-foreground/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Description & Benefits */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <div className="animate-fade-in">
            <h2 className="text-3xl font-bold text-foreground mb-6 font-raleway">
              {service.subtitle}
            </h2>
            <p className="text-lg text-muted-foreground font-raleway font-light leading-relaxed mb-8">
              {service.description}
            </p>
            
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground font-raleway">Kernkompetenzen:</h3>
              <ul className="space-y-3">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3 group">
                    <CheckCircle size={20} className="text-primary mt-0.5 group-hover:scale-110 transition-transform flex-shrink-0" strokeWidth={2} />
                    <span className="text-foreground font-raleway">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="space-y-6 animate-fade-in">
            <h3 className="text-2xl font-bold text-foreground font-raleway">{t('service.benefits.title')}</h3>
            {service.benefits.map((benefit, index) => (
              <div key={index} className="bg-card p-6 rounded-xl border border-secondary hover:border-primary/30 transition-all duration-300 hover:scale-105 group">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors flex-shrink-0">
                    <benefit.icon size={24} className="text-primary" strokeWidth={2} />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-2 font-raleway">{benefit.title}</h4>
                    <p className="text-muted-foreground font-raleway font-light">{benefit.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Process Steps */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-foreground text-center mb-12 font-raleway animate-fade-in">
            {t('service.process.title')}
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {service.process.map((step, index) => (
              <div key={index} className={`relative group animate-fade-in`} style={{animationDelay: `${index * 200}ms`}}>
                <div className="bg-card p-8 rounded-xl border border-secondary group-hover:border-primary/30 transition-all duration-300 hover:scale-105">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                    <span className="text-primary font-bold text-xl font-raleway">{step.step}</span>
                  </div>
                  <h4 className="text-xl font-semibold text-foreground mb-4 text-center font-raleway">{step.title}</h4>
                  <p className="text-muted-foreground font-raleway font-light text-center leading-relaxed">{step.description}</p>
                </div>
                
                {/* Connecting line */}
                {index < service.process.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-primary/30 z-10 group-hover:bg-primary transition-colors"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Example Case Study */}
        <div className="bg-secondary/50 rounded-2xl p-8 lg:p-12 mb-20 animate-fade-in">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-4 font-raleway">{service.example.title}</h3>
            <div className="w-24 h-1 bg-primary mx-auto"></div>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1">
              <h4 className="text-xl font-semibold text-foreground mb-4 font-raleway">{t('service.example.scenario')}</h4>
              <p className="text-muted-foreground font-raleway font-light leading-relaxed">
                {service.example.scenario}
              </p>
            </div>
            
            <div className="lg:col-span-1">
              <h4 className="text-xl font-semibold text-foreground mb-4 font-raleway">{t('service.example.solution')}</h4>
              <p className="text-muted-foreground font-raleway font-light leading-relaxed">
                {service.example.solution}
              </p>
            </div>
            
            <div className="lg:col-span-1">
              <h4 className="text-xl font-semibold text-foreground mb-4 font-raleway">{t('service.example.results')}</h4>
              <ul className="space-y-3">
                {service.example.results.map((result, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-primary mt-0.5 flex-shrink-0" strokeWidth={2} />
                    <span className="text-muted-foreground font-raleway">{result}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-card rounded-2xl p-12 border border-secondary animate-fade-in">
          <h3 className="text-3xl font-bold text-foreground mb-4 font-raleway">
            Bereit für Ihre Automatisierung?
          </h3>
          <p className="text-lg text-muted-foreground font-raleway font-light mb-8 max-w-2xl mx-auto">
            Lassen Sie uns gemeinsam analysieren, wie wir {service.title.toLowerCase()} in Ihrem Unternehmen optimieren können.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-primary text-primary-foreground px-8 py-4 rounded-lg font-raleway font-semibold text-lg hover:bg-primary/90 transition-all duration-300 hover:scale-105">
              Kostenlose Beratung anfragen
            </button>
            <button 
              onClick={() => navigate('/')}
              className="bg-secondary text-foreground px-8 py-4 rounded-lg font-raleway font-semibold text-lg border border-secondary hover:border-primary/30 transition-all duration-300"
            >
              Weitere Services entdecken
            </button>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default ServicesDetail;