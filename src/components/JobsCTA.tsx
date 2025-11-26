import { useNavigate, useLocation } from 'react-router-dom';
import { ArrowRight, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const JobsCTA = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useLanguage();

  return (
    <section className="bg-muted/30 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <Users className="h-12 w-12 text-primary mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-foreground mb-4 font-raleway">
            {t('jobs.cta.title')} <span className="text-primary">{t('jobs.cta.title.highlight')}</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('jobs.cta.subtitle')}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            onClick={() => navigate('/jobs')}
            size="lg"
            className="group"
          >
            {t('jobs.cta.button')}
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button 
            onClick={() => {
              if (location.pathname === '/') {
                const bookingSection = document.getElementById('booking-section');
                bookingSection?.scrollIntoView({ behavior: 'smooth' });
              } else {
                navigate('/');
                setTimeout(() => {
                  const bookingSection = document.getElementById('booking-section');
                  bookingSection?.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              }
            }}
            size="lg"
            variant="outline"
            className="group"
          >
            {t('jobs.cta.button.secondary')}
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default JobsCTA;