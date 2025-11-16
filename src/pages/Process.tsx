import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { CheckCircle, ArrowRight, Clock, Users, Target, BarChart, Zap } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

const Process = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();
  const { toast } = useToast();
  const [isJoiningTeam, setIsJoiningTeam] = useState(false);
  const [visibleSteps, setVisibleSteps] = useState<number[]>([]);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers = stepRefs.current.map((ref, index) => {
      if (!ref) return null;
      
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setVisibleSteps((prev) => [...new Set([...prev, index])]);
            }
          });
        },
        { threshold: 0.2 }
      );
      
      observer.observe(ref);
      return observer;
    });

    return () => {
      observers.forEach((observer) => observer?.disconnect());
    };
  }, []);

  const handleJoinTeam = async () => {
    const email = prompt(t('process.cta.joinTeam.emailPrompt'));
    
    if (!email || !email.includes('@')) {
      toast({
        title: t('process.cta.joinTeam.error'),
        description: t('process.cta.joinTeam.invalidEmail'),
        variant: "destructive",
      });
      return;
    }

    setIsJoiningTeam(true);
    
    try {
      const { error } = await supabase.functions.invoke('send-team-join-email', {
        body: { email }
      });

      if (error) throw error;

      toast({
        title: t('process.cta.joinTeam.success'),
        description: t('process.cta.joinTeam.checkEmail'),
      });
    } catch (error) {
      console.error('Error sending team join email:', error);
      toast({
        title: t('process.cta.joinTeam.error'),
        description: t('process.cta.joinTeam.tryAgain'),
        variant: "destructive",
      });
    } finally {
      setIsJoiningTeam(false);
    }
  };

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
      <section className="relative bg-gradient-to-br from-primary/5 via-background to-primary/10 pt-24 pb-16 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 mb-4 sm:mb-6 animate-fade-in">
              <Zap className="w-4 h-4 sm:w-6 sm:h-6 text-primary animate-pulse" />
              <span className="text-xs sm:text-sm font-medium text-primary uppercase tracking-wider">Automated Excellence</span>
              <Zap className="w-4 h-4 sm:w-6 sm:h-6 text-primary animate-pulse" />
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 sm:mb-6 font-raleway animate-fade-in leading-tight px-2" style={{ animationDelay: '0.1s' }}>
              {t('process.hero.title')} <span className="text-primary bg-clip-text">{t('process.hero.highlight')}</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-6 sm:mb-8 animate-fade-in leading-relaxed px-2" style={{ animationDelay: '0.2s' }}>
              {t('process.hero.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 text-xs sm:text-sm text-muted-foreground animate-fade-in px-4" style={{ animationDelay: '0.3s' }}>
              <div className="flex items-center gap-2 bg-background/50 backdrop-blur-sm px-3 sm:px-4 py-2 rounded-full border border-border/50 w-full sm:w-auto justify-center">
                <Clock className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="whitespace-nowrap">{t('process.hero.timeline')}</span>
              </div>
              <div className="hidden sm:block w-1 h-1 bg-muted-foreground rounded-full"></div>
              <div className="flex items-center gap-2 bg-background/50 backdrop-blur-sm px-3 sm:px-4 py-2 rounded-full border border-border/50 w-full sm:w-auto justify-center">
                <Users className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="whitespace-nowrap">{t('process.hero.teamSize')}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16 relative">
        {/* Connecting Flow Line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/20 to-transparent hidden md:block"></div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {processSteps.map((step, index) => (
              <div 
                key={step.number} 
                ref={(el) => (stepRefs.current[index] = el)}
                className={`relative transition-all duration-700 ${
                  visibleSteps.includes(index) 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Step Connector Dot */}
                <div className={`absolute left-1/2 top-8 -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background z-10 hidden md:block transition-all duration-500 ${
                  visibleSteps.includes(index) ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
                }`}>
                  <div className="absolute inset-0 bg-primary rounded-full animate-ping opacity-75"></div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-start">
                  {/* Step Info */}
                  <div className={`${index % 2 === 1 ? 'md:order-2' : ''} group`}>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="relative w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/5 rounded-xl flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                        <div className="absolute inset-0 bg-primary/10 rounded-xl blur-md group-hover:blur-lg transition-all duration-300"></div>
                        <span className="text-primary font-bold text-xl relative z-10">{step.number}</span>
                      </div>
                      <div className="flex-1">
                        <h2 className="text-2xl font-bold text-foreground mb-1 font-raleway transition-colors duration-300 group-hover:text-primary">
                          {step.title}
                        </h2>
                        <p className="text-primary font-medium">{step.subtitle}</p>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {step.description}
                    </p>
                    
                    <div className="flex items-center gap-2 mb-6 text-sm text-muted-foreground bg-muted/30 px-3 py-2 rounded-lg w-fit">
                      <Clock className="w-4 h-4 text-primary" />
                      <span>{step.duration}</span>
                    </div>
                  </div>

                  {/* Deliverables Card */}
                  <div className={`${index % 2 === 1 ? 'md:order-1' : ''}`}>
                    <div className="bg-card border border-border rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:border-primary/20 group">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg flex items-center justify-center text-primary transform transition-all duration-300 group-hover:scale-110">
                          {step.icon}
                        </div>
                        <h3 className="font-semibold text-foreground">
                          {t('process.deliverables.title')}
                        </h3>
                      </div>
                      
                      <ul className="space-y-3">
                        {step.deliverables.map((deliverable, idx) => (
                          <li 
                            key={idx} 
                            className="flex items-start gap-3 transition-all duration-300 hover:translate-x-1"
                            style={{ 
                              opacity: visibleSteps.includes(index) ? 1 : 0,
                              transform: visibleSteps.includes(index) ? 'translateX(0)' : 'translateX(-10px)',
                              transitionDelay: `${(index * 100) + (idx * 50)}ms`
                            }}
                          >
                            <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0 animate-in" />
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
      <section className="bg-card py-16 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl font-bold text-foreground mb-4 font-raleway">
              {t('process.benefits.title')}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t('process.benefits.subtitle')}
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="relative w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/5 rounded-xl flex items-center justify-center mx-auto mb-4 transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                <div className="absolute inset-0 bg-primary/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <Target className="w-8 h-8 text-primary relative z-10" />
              </div>
              <h3 className="font-semibold text-foreground mb-2 transition-colors duration-300 group-hover:text-primary">
                {t('process.benefit1.title')}
              </h3>
              <p className="text-muted-foreground text-sm">
                {t('process.benefit1.description')}
              </p>
            </div>
            
            <div className="text-center group animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="relative w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/5 rounded-xl flex items-center justify-center mx-auto mb-4 transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                <div className="absolute inset-0 bg-primary/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <BarChart className="w-8 h-8 text-primary relative z-10" />
              </div>
              <h3 className="font-semibold text-foreground mb-2 transition-colors duration-300 group-hover:text-primary">
                {t('process.benefit2.title')}
              </h3>
              <p className="text-muted-foreground text-sm">
                {t('process.benefit2.description')}
              </p>
            </div>
            
            <div className="text-center group animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="relative w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/5 rounded-xl flex items-center justify-center mx-auto mb-4 transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                <div className="absolute inset-0 bg-primary/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <Users className="w-8 h-8 text-primary relative z-10" />
              </div>
              <h3 className="font-semibold text-foreground mb-2 transition-colors duration-300 group-hover:text-primary">
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
      <section className="py-16 relative overflow-hidden">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-primary/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-1/2 right-1/4 w-32 h-32 bg-primary/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="animate-fade-in">
            <h2 className="text-3xl font-bold text-foreground mb-4 font-raleway">
              {t('process.cta.title')}
            </h2>
            <p className="text-muted-foreground mb-8">
              {t('process.cta.description')}
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <Button 
              size="lg" 
              onClick={() => {
                navigate('/');
                setTimeout(() => {
                  const bookingSection = document.getElementById('booking-section');
                  bookingSection?.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              }}
              className="group relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center">
                Meeting buchen
                <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary-foreground/10 to-primary/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
            </Button>
            <Button 
              size="lg" 
              variant="secondary"
              onClick={handleJoinTeam}
              disabled={isJoiningTeam}
              className="hover-scale"
            >
              {isJoiningTeam ? t('process.cta.joinTeam.sending') : t('process.cta.joinTeam.button')}
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Process;