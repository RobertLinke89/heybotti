import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ArrowLeft, MapPin, Calendar, Users } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';

const About = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();

  // Team members data (from existing Team component)
  const teamMembers = [
    {
      name: "Alex",
      role: t('aboutPage.team.alex.role'),
      avatar: "/src/assets/avatar-alex.png",
      description: t('aboutPage.team.alex.description')
    },
    {
      name: "Robert",
      role: t('aboutPage.team.robert.role'),
      avatar: "/src/assets/avatar-robert.png",
      description: t('aboutPage.team.robert.description')
    },
    {
      name: "Chris",
      role: t('aboutPage.team.chris.role'),
      avatar: "/src/assets/avatar-chris.png", 
      description: t('aboutPage.team.chris.description')
    },
    {
      name: "Sebastian",
      role: t('aboutPage.team.sebastian.role'),
      avatar: "/src/assets/avatar-sebastian.png",
      description: t('aboutPage.team.sebastian.description')
    }
  ];

  // Jobs data (from existing Jobs page)
  const jobs = [
    {
      title: t('aboutPage.jobs.job1.title'),
      type: t('aboutPage.jobs.job1.type'),
      location: t('aboutPage.jobs.job1.location'),
      start: t('aboutPage.jobs.job1.start'),
      mission: t('aboutPage.jobs.job1.mission'),
      requirements: [
        t('aboutPage.jobs.job1.requirements.0'),
        t('aboutPage.jobs.job1.requirements.1'),
        t('aboutPage.jobs.job1.requirements.2'),
        t('aboutPage.jobs.job1.requirements.3')
      ],
      benefits: [
        t('aboutPage.jobs.job1.benefits.0'),
        t('aboutPage.jobs.job1.benefits.1'),
        t('aboutPage.jobs.job1.benefits.2')
      ]
    },
    {
      title: t('aboutPage.jobs.job2.title'),
      type: t('aboutPage.jobs.job2.type'),
      location: t('aboutPage.jobs.job2.location'),
      start: t('aboutPage.jobs.job2.start'),
      mission: t('aboutPage.jobs.job2.mission'),
      requirements: [
        t('aboutPage.jobs.job2.requirements.0'),
        t('aboutPage.jobs.job2.requirements.1'),
        t('aboutPage.jobs.job2.requirements.2'),
        t('aboutPage.jobs.job2.requirements.3')
      ],
      benefits: [
        t('aboutPage.jobs.job2.benefits.0'),
        t('aboutPage.jobs.job2.benefits.1'),
        t('aboutPage.jobs.job2.benefits.2')
      ]
    },
    {
      title: t('aboutPage.jobs.job3.title'),
      type: t('aboutPage.jobs.job3.type'),
      location: t('aboutPage.jobs.job3.location'),
      start: t('aboutPage.jobs.job3.start'),
      mission: t('aboutPage.jobs.job3.mission'),
      requirements: [
        t('aboutPage.jobs.job3.requirements.0'),
        t('aboutPage.jobs.job3.requirements.1'),
        t('aboutPage.jobs.job3.requirements.2'),
        t('aboutPage.jobs.job3.requirements.3')
      ],
      benefits: [
        t('aboutPage.jobs.job3.benefits.0'),
        t('aboutPage.jobs.job3.benefits.1'),
        t('aboutPage.jobs.job3.benefits.2')
      ]
    }
  ];

  return (
    <div className="min-h-screen font-raleway bg-background">
      <Header />
      
      <main className="pt-20 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-12">
            <Button
              variant="ghost"
              onClick={() => navigate('/')}
              className="mb-6 -ml-2 text-muted-foreground hover:text-foreground"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              {t('aboutPage.backToHomepage')}
            </Button>
            
            <div className="text-center mb-16">
              <h1 className="text-4xl font-bold text-foreground mb-6 font-raleway">
                {t('aboutPage.title.main')} <span className="text-primary">{t('aboutPage.title.highlight')}</span>
              </h1>
            </div>
          </div>

          {/* About Content */}
          <div className="mb-20">
            <div className="bg-card rounded-xl p-8 border border-secondary">
              <p className="text-lg text-foreground leading-relaxed font-raleway mb-6">
                {t('aboutPage.content.paragraph1')}
              </p>
              
              <p className="text-lg text-foreground leading-relaxed font-raleway mb-6">
                {t('aboutPage.content.paragraph2')}
              </p>
              
              <p className="text-lg text-foreground leading-relaxed font-raleway">
                {t('aboutPage.content.paragraph3')}
              </p>
            </div>
          </div>

          {/* Team Section */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4 font-raleway">
                {t('aboutPage.teamSection.title.main')} <span className="text-primary">{t('aboutPage.teamSection.title.highlight')}</span>
              </h2>
              <p className="text-lg text-muted-foreground font-raleway font-light max-w-2xl mx-auto">
                {t('aboutPage.teamSection.subtitle')}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <div key={index} className="text-center">
                  <div className="relative mb-4">
                    <img
                      src={member.avatar}
                      alt={member.name}
                      className="w-32 h-32 rounded-full mx-auto object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2 font-raleway">
                    {member.name}
                  </h3>
                  <p className="text-primary font-medium mb-3 font-raleway">
                    {member.role}
                  </p>
                  <p className="text-muted-foreground font-raleway font-light text-sm">
                    {member.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Open Positions Section */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4 font-raleway">
                {t('aboutPage.jobsSection.title.main')} <span className="text-primary">{t('aboutPage.jobsSection.title.highlight')}</span>
              </h2>
              <p className="text-lg text-muted-foreground font-raleway font-light max-w-2xl mx-auto">
                {t('aboutPage.jobsSection.subtitle')}
              </p>
            </div>

            <div className="space-y-8">
              {jobs.map((job, index) => (
                <Card key={index} className="border border-border/50 hover:border-primary/20 transition-all duration-300 hover:shadow-lg">
                  <CardContent className="p-8">
                    <div className="mb-6">
                      <h3 className="text-2xl font-bold text-foreground mb-3 font-raleway">
                        {job.title}
                      </h3>
                      
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          <span>{job.start}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="h-4 w-4" />
                          <span>{job.type}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          <span>{job.location}</span>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-6">
                      {/* Mission */}
                      <div>
                        <h4 className="text-lg font-semibold text-foreground mb-3 font-raleway">
                          {t('aboutPage.jobDetails.mission')}
                        </h4>
                        <p className="text-muted-foreground leading-relaxed">
                          {job.mission}
                        </p>
                      </div>

                      {/* Requirements */}
                      <div>
                        <h4 className="text-lg font-semibold text-foreground mb-3 font-raleway">
                          {t('aboutPage.jobDetails.requirements')}
                        </h4>
                        <ul className="space-y-2">
                          {job.requirements.map((req, reqIndex) => (
                            <li key={reqIndex} className="flex items-start gap-3 text-muted-foreground">
                              <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                              <span>{req}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Benefits */}
                      <div>
                        <h4 className="text-lg font-semibold text-foreground mb-3 font-raleway">
                          {t('aboutPage.jobDetails.benefits')}
                        </h4>
                        <ul className="space-y-2">
                          {job.benefits.map((benefit, benefitIndex) => (
                            <li key={benefitIndex} className="flex items-start gap-3 text-muted-foreground">
                              <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                              <span>{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* CTA */}
                      <div className="pt-4 border-t border-border/30">
                        <Button className="w-full sm:w-auto">
                          {t('aboutPage.jobDetails.applyNow')}
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Final CTA Section */}
          <div className="text-center bg-primary/5 rounded-xl p-8 border border-primary/20">
            <h2 className="text-2xl font-bold text-foreground mb-4 font-raleway">
              {t('aboutPage.finalCTA.title')}
            </h2>
            <p className="text-muted-foreground mb-6 font-raleway">
              {t('aboutPage.finalCTA.subtitle')}
            </p>
            <Button 
              onClick={() => navigate('/')}
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              {t('aboutPage.finalCTA.button')}
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;