

import { useLanguage } from '@/contexts/LanguageContext';

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="relative bg-background py-20 lg:py-32 overflow-hidden">
      {/* Animated Wave Background */}
      <div className="absolute inset-0 pointer-events-none">
        <svg 
          className="absolute w-full h-full" 
          viewBox="0 0 1200 600" 
          preserveAspectRatio="xMidYMid slice"
        >
          <path
            d="M0,300 Q300,200 600,300 T1200,300 L1200,600 L0,600 Z"
            fill="hsl(var(--primary) / 0.05)"
            className="animate-[wave_8s_ease-in-out_infinite]"
          />
          <path
            d="M0,350 Q200,250 400,350 T800,350 T1200,350 L1200,600 L0,600 Z"
            fill="hsl(var(--primary) / 0.03)"
            className="animate-[wave_12s_ease-in-out_infinite_reverse]"
          />
          <path
            d="M0,400 Q150,300 300,400 T600,400 T900,400 T1200,400 L1200,600 L0,600 Z"
            fill="hsl(var(--primary) / 0.02)"
            className="animate-[wave_15s_ease-in-out_infinite]"
          />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="animate-fade-in max-w-4xl mx-auto">
            <h1 className="text-5xl lg:text-7xl font-bold text-foreground mb-6 font-raleway leading-tight">
              {t('hero.title')} <span className="text-primary">{t('hero.title.highlight')}</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8 font-raleway font-light leading-relaxed max-w-3xl mx-auto">
              {t('hero.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => {
                  const element = document.getElementById('callback-form');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="hidden sm:flex bg-primary text-primary-foreground px-8 py-4 rounded-lg font-raleway font-semibold text-lg hover:bg-primary/90 hover-scale transition-all duration-300 items-center justify-center animate-fade-in"
              >
                {t('hero.cta')}
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Mobile Sticky CTA Buttons */}
      <div className="sm:hidden fixed bottom-4 left-4 right-4 z-40 flex flex-col gap-2">
        <button 
          onClick={() => {
            const element = document.getElementById('callback-form');
            element?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="bg-primary text-primary-foreground px-8 py-4 rounded-lg font-raleway font-semibold text-lg hover:bg-primary/90 transition-all duration-300 flex items-center justify-center shadow-lg w-full"
        >
          {t('hero.cta')}
        </button>
        <button 
          onClick={async () => {
            const email = prompt(t('process.cta.joinTeam.emailPrompt'));
            
            if (!email || !email.includes('@')) {
              return;
            }

            try {
              const { supabase } = await import("@/integrations/supabase/client");
              
              await supabase.functions.invoke('send-team-join-email', {
                body: { email }
              });
            } catch (error) {
              console.error('Error sending team join email:', error);
            }
          }}
          className="bg-background text-foreground px-8 py-3 rounded-lg font-raleway font-medium text-base hover:bg-muted transition-all duration-300 flex items-center justify-center shadow-lg w-full border-2 border-primary"
        >
          {t('process.cta.joinTeam.button')}
        </button>
      </div>
    </section>
  );
};

export default Hero;
