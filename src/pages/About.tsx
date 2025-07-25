import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ArrowLeft, MapPin, Calendar, Users } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const navigate = useNavigate();

  // Team members data (from existing Team component)
  const teamMembers = [
    {
      name: "Alex",
      role: "CEO & Strategy",
      avatar: "/src/assets/avatar-alex.png",
      description: "Develops customized automation strategies for companies."
    },
    {
      name: "Robert",
      role: "CTO & Development", 
      avatar: "/src/assets/avatar-robert.png",
      description: "Technical leader with focus on innovative solution architectures."
    },
    {
      name: "Chris",
      role: "Automation Engineer",
      avatar: "/src/assets/avatar-chris.png", 
      description: "Specialist for process optimization and intelligent workflows."
    },
    {
      name: "Sebastian",
      role: "Business Analyst",
      avatar: "/src/assets/avatar-sebastian.png",
      description: "Analyzes business processes and identifies improvement potential."
    }
  ];

  // Jobs data (from existing Jobs page)
  const jobs = [
    {
      title: 'No-Code/Low-Code Developer',
      type: 'Freelance',
      location: 'Remote',
      start: 'Immediately',
      mission: 'At botti, you develop customized automation solutions using tools like Make, n8n, Airtable or Zapier – from idea to implementation. You think in workflows, love simple solutions for complex processes and translate technical requirements into functioning systems.',
      requirements: [
        'Experience with no-code or low-code platforms',
        'Familiar handling of APIs, webhooks & data models',
        'Structured work approach, technical understanding and solution-oriented mindset',
        'Enthusiasm for efficient implementation and clean process design'
      ],
      benefits: [
        'Diverse customer projects with real impact',
        'Full flexibility: work when and where you want',
        'An appreciative, agile team that speaks plainly and gives ideas space'
      ]
    },
    {
      title: 'Automation Consultant',
      type: 'Freelance',
      location: 'Remote',
      start: 'Immediately',
      mission: 'You analyze business processes, identify automation potential and accompany companies in their digital transformation. As a sparring partner at eye level, you think holistically and develop solutions together with our team that really relieve people and processes.',
      requirements: [
        'Experience in consulting around digitization and process optimization',
        'Clear view for workflows, user-friendliness and efficiency',
        'Basic technical understanding (e.g. API logic, automation tools)',
        'Communication skills, empathy and enthusiasm for transformation'
      ],
      benefits: [
        'Customers who are ready to think differently',
        'Freedom and responsibility in implementation',
        'Collaboration in a team that shows attitude – with mind, heart and foresight'
      ]
    },
    {
      title: 'AI Workflow Architect',
      type: 'Freelance',
      location: 'Remote',
      start: 'Immediately',
      mission: 'You design intelligent workflows with GPT, LangChain, Zapier & Co. and bring real AI power into the daily work of our customers. You combine technical sophistication with strategic thinking – and create solutions that work intuitively and have a lasting impact.',
      requirements: [
        'Experience working with AI models (LLMs), prompt engineering and tools like LangChain',
        'Sense for meaningful automation and data flows',
        'Independent, structured work approach and enthusiasm for innovation',
        'Interest in making things really better – not just smarter'
      ],
      benefits: [
        'Projects at the cutting edge – with real creative freedom',
        'Exchange with a team that thinks technology humanly',
        'Maximum flexibility, open communication, fair cooperation'
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
              Back to Homepage
            </Button>
            
            <div className="text-center mb-16">
              <h1 className="text-4xl font-bold text-foreground mb-6 font-raleway">
                About <span className="text-primary">Us</span>
              </h1>
            </div>
          </div>

          {/* About Content */}
          <div className="mb-20">
            <div className="bg-card rounded-xl p-8 border border-secondary">
              <p className="text-lg text-foreground leading-relaxed font-raleway mb-6">
                We are Team botti – and we rethink efficiency. With smart automation solutions, we provide sustainable relief instead of just accelerating. Our focus: real added value in everyday life, individually adapted and holistically conceived – with a view to processes, people and potential.
              </p>
              
              <p className="text-lg text-foreground leading-relaxed font-raleway mb-6">
                We rely on transparency, plain language and partnership-based cooperation. From the first workshop to implementation, we deliver quickly tangible results and build future-proof structures that grow with you.
              </p>
              
              <p className="text-lg text-foreground leading-relaxed font-raleway">
                With an agile mindset, smart tools and a focus on what matters, we create digital solutions that work – for more creative freedom, productive teams and real joy at work.
              </p>
            </div>
          </div>

          {/* Team Section */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4 font-raleway">
                Our <span className="text-primary">Team</span>
              </h2>
              <p className="text-lg text-muted-foreground font-raleway font-light max-w-2xl mx-auto">
                Meet the experts who automate and digitize your business.
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
                Open <span className="text-primary">Positions</span>
              </h2>
              <p className="text-lg text-muted-foreground font-raleway font-light max-w-2xl mx-auto">
                Join our team and shape the future of automation. We are looking for talented people who bring passion for innovation and efficiency.
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
                          Your Mission
                        </h4>
                        <p className="text-muted-foreground leading-relaxed">
                          {job.mission}
                        </p>
                      </div>

                      {/* Requirements */}
                      <div>
                        <h4 className="text-lg font-semibold text-foreground mb-3 font-raleway">
                          What you bring
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
                          What awaits you
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
                          Apply Now
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
              Ready to Transform Your Business?
            </h2>
            <p className="text-muted-foreground mb-6 font-raleway">
              Let's discuss how we can automate your processes and boost your efficiency.
            </p>
            <Button 
              onClick={() => navigate('/')}
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              Get Started
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;