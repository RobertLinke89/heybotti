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
      role: t('team.alex.role'),
      avatar: "/lovable-uploads/2de9c32d-c883-4b16-9c47-d240c3dfb42f.png",
      description: t('team.alex.description')
    },
    {
      name: "Robert",
      role: t('team.robert.role'), 
      avatar: "/lovable-uploads/268cba2a-1016-4101-b25b-0c82bafb3ce1.png",
      description: t('team.robert.description')
    },
    {
      name: "Chris",
      role: t('team.chris.role'),
      avatar: "/lovable-uploads/98692b47-095f-4ded-b823-892c9b0ff8fb.png", 
      description: t('team.chris.description')
    },
    {
      name: "Sebastian",
      role: t('team.sebastian.role'),
      avatar: "/lovable-uploads/6e48f8e7-ab5d-4dca-bac8-b9f74cf527e4.png",
      description: t('team.sebastian.description')
    }
  ];

  // Jobs data (from existing Jobs page)
  const jobs = [
    {
      title: t('jobs.nocode.title'),
      type: t('jobs.nocode.type'),
      location: t('jobs.nocode.location'),
      start: t('jobs.nocode.start'),
      mission: t('jobs.nocode.mission'),
      requirements: [
        t('jobs.nocode.req1'),
        t('jobs.nocode.req2'),
        t('jobs.nocode.req3'),
        t('jobs.nocode.req4')
      ],
      benefits: [
        t('jobs.nocode.benefit1'),
        t('jobs.nocode.benefit2'),
        t('jobs.nocode.benefit3')
      ]
    },
    {
      title: t('jobs.consultant.title'),
      type: t('jobs.consultant.type'),
      location: t('jobs.consultant.location'),
      start: t('jobs.consultant.start'),
      mission: t('jobs.consultant.mission'),
      requirements: [
        t('jobs.consultant.req1'),
        t('jobs.consultant.req2'),
        t('jobs.consultant.req3'),
        t('jobs.consultant.req4')
      ],
      benefits: [
        t('jobs.consultant.benefit1'),
        t('jobs.consultant.benefit2'),
        t('jobs.consultant.benefit3')
      ]
    },
    {
      title: t('jobs.architect.title'),
      type: t('jobs.architect.type'),
      location: t('jobs.architect.location'),
      start: t('jobs.architect.start'),
      mission: t('jobs.architect.mission'),
      requirements: [
        t('jobs.architect.req1'),
        t('jobs.architect.req2'),
        t('jobs.architect.req3'),
        t('jobs.architect.req4')
      ],
      benefits: [
        t('jobs.architect.benefit1'),
        t('jobs.architect.benefit2'),
        t('jobs.architect.benefit3')
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
              {t('about.page.back')}
            </Button>
            
            <div className="text-center mb-16">
              <h1 className="text-4xl font-bold text-foreground mb-6 font-raleway">
                {t('about.page.title')}
              </h1>
            </div>
          </div>

          {/* About Content */}
          <div className="mb-20">
            <div className="bg-card rounded-xl p-8 border border-secondary">
              <p className="text-lg text-foreground leading-relaxed font-raleway mb-6">
                {t('about.page.content1')}
              </p>
              
              <p className="text-lg text-foreground leading-relaxed font-raleway mb-6">
                {t('about.page.content2')}
              </p>
              
              <p className="text-lg text-foreground leading-relaxed font-raleway">
                {t('about.page.content3')}
              </p>
            </div>
          </div>

          {/* Team Section */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4 font-raleway">
                {t('team.title')} <span className="text-primary">{t('team.title.highlight')}</span>
              </h2>
              <p className="text-lg text-muted-foreground font-raleway font-light max-w-2xl mx-auto">
                {t('team.subtitle')}
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
                {t('jobs.page.title')}
              </h2>
              <p className="text-lg text-muted-foreground font-raleway font-light max-w-2xl mx-auto">
                {t('jobs.page.subtitle')}
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
                          {t('jobs.mission.title')}
                        </h4>
                        <p className="text-muted-foreground leading-relaxed">
                          {job.mission}
                        </p>
                      </div>

                      {/* Requirements */}
                      <div>
                        <h4 className="text-lg font-semibold text-foreground mb-3 font-raleway">
                          {t('jobs.requirements.title')}
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
                          {t('jobs.benefits.title')}
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
                          {t('jobs.apply.button')}
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
              {t('about.page.cta.title')}
            </h2>
            <p className="text-muted-foreground mb-6 font-raleway">
              {t('about.page.cta.subtitle')}
            </p>
            <Button 
              onClick={() => navigate('/')}
              className="bg-primary text-primary-foreground hover:bg-primary/90"
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