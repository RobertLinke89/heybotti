import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const About = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();

  const challenges = [
    t('about.page.challenge1'),
    t('about.page.challenge2'),
    t('about.page.challenge3'),
    t('about.page.challenge4'),
    t('about.page.challenge5'),
  ];

  const freedoms = [
    t('about.page.freedom1'),
    t('about.page.freedom2'),
    t('about.page.freedom3'),
  ];

  return (
    <div className="min-h-screen font-raleway bg-background">
      <Header />
      
      <main className="pt-24 pb-24">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
          {/* Back Button */}
          <Button
            variant="ghost"
            onClick={() => navigate('/')}
            className="mb-12 -ml-2 text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            {t('about.page.back')}
          </Button>

          {/* Header */}
          <div className="mb-20">
            <div className="inline-block mb-6">
              <span className="text-xs font-medium tracking-wider uppercase text-muted-foreground">
                {t('about.page.badge')}
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-0 font-raleway leading-tight">
              {t('about.page.title')}
            </h1>
          </div>

          {/* Content Sections */}
          <div className="space-y-16">
            {/* Introduction */}
            <section className="space-y-8">
              <p className="text-lg text-foreground/80 leading-relaxed font-light">
                {t('about.page.intro1')}
              </p>
              
              <p className="text-lg text-foreground/80 leading-relaxed font-light">
                {t('about.page.intro2')}
              </p>
              
              <p className="text-lg text-foreground/80 leading-relaxed font-light">
                {t('about.page.intro3')}
              </p>
            </section>

            {/* Challenges */}
            <section className="py-12 border-t border-b border-border/30">
              <h2 className="text-2xl font-semibold text-foreground mb-8 font-raleway">
                {t('about.page.challenges.title')}
              </h2>
              
              <ul className="space-y-6">
                {challenges.map((challenge, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <span className="w-1 h-1 bg-foreground/40 rounded-full mt-3 flex-shrink-0"></span>
                    <span className="text-lg text-foreground/70 leading-relaxed font-light">
                      {challenge}
                    </span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Belief & Vision */}
            <section className="space-y-8">
              <p className="text-xl font-medium text-foreground">
                {t('about.page.belief')}
              </p>
              
              <p className="text-lg text-foreground/80 leading-relaxed font-light">
                {t('about.page.vision1')}
              </p>
              
              <p className="text-xl font-semibold text-foreground mt-12">
                {t('about.page.vision2')}
              </p>
            </section>

            {/* Freedom Points */}
            <section className="bg-muted/30 rounded-lg p-8 sm:p-12">
              <ul className="space-y-6">
                {freedoms.map((freedom, index) => (
                  <li key={index} className="text-lg text-foreground/90 leading-relaxed font-light">
                    {freedom}
                  </li>
                ))}
              </ul>
            </section>

            {/* Closing */}
            <section className="space-y-8">
              <p className="text-lg text-foreground/80 leading-relaxed font-light">
                {t('about.page.closing')}
              </p>
              
              <p className="text-xl font-semibold text-foreground pt-4">
                {t('about.page.mission')}
              </p>
            </section>
          </div>

          {/* CTA Section */}
          <div className="mt-24 pt-16 border-t border-border/30 text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4 font-raleway">
              {t('about.page.cta.title')}
            </h2>
            <p className="text-lg text-muted-foreground mb-8 font-light">
              {t('about.page.cta.subtitle')}
            </p>
            <Button 
              onClick={() => navigate('/')}
              className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-base"
            >
              {t('about.page.cta.button')}
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
