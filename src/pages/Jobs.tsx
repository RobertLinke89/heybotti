import { useNavigate } from 'react-router-dom';
import { ArrowLeft, MapPin, Calendar, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Jobs = () => {
  const navigate = useNavigate();

  const jobs = [
    {
      title: 'No-Code/Low-Code Developer',
      type: 'Freelance',
      location: 'Remote',
      start: 'ab sofort',
      mission: 'Du entwickelst bei botti maßgeschneiderte Automatisierungen mit Tools wie Make, n8n, Airtable oder Zapier – von der Idee bis zur Umsetzung. Du denkst in Workflows, liebst einfache Lösungen für komplexe Prozesse und setzt technische Anforderungen in funktionierende Systeme um.',
      requirements: [
        'Erfahrung mit No-Code- oder Low-Code-Plattformen',
        'Vertrauter Umgang mit APIs, Webhooks & Datenmodellen',
        'Strukturiertes Arbeiten, technisches Verständnis und eine lösungsorientierte Denkweise',
        'Freude an effizienter Umsetzung und sauberem Prozessdesign'
      ],
      benefits: [
        'Abwechslungsreiche Kundenprojekte mit echtem Impact',
        'Volle Flexibilität: arbeite wann und wo du willst',
        'Ein wertschätzendes, agiles Team, das Klartext spricht und Ideen Raum gibt'
      ]
    },
    {
      title: 'Automation Consultant',
      type: 'Freelance',
      location: 'Remote',
      start: 'ab sofort',
      mission: 'Du analysierst Geschäftsprozesse, identifizierst Automatisierungspotenziale und begleitest Unternehmen bei der digitalen Transformation. Als Sparringspartner:in auf Augenhöhe denkst du ganzheitlich und entwickelst gemeinsam mit unserem Team Lösungen, die Menschen und Prozesse wirklich entlasten.',
      requirements: [
        'Erfahrung in der Beratung rund um Digitalisierung und Prozessoptimierung',
        'Klarer Blick für Abläufe, Nutzerfreundlichkeit und Effizienz',
        'Technisches Grundverständnis (z. B. API-Logik, Automatisierungstools)',
        'Kommunikationsstärke, Empathie und Begeisterung für Transformation'
      ],
      benefits: [
        'Kund:innen, die bereit sind, neu zu denken',
        'Freiheit und Verantwortung in der Umsetzung',
        'Zusammenarbeit in einem Team, das Haltung zeigt – mit Verstand, Herz und Weitblick'
      ]
    },
    {
      title: 'AI Workflow Architect',
      type: 'Freelance',
      location: 'Remote',
      start: 'ab sofort',
      mission: 'Du konzipierst intelligente Workflows mit GPT, LangChain, Zapier & Co. und bringst so echte KI-Power in die tägliche Arbeit unserer Kund:innen. Dabei verbindest du technische Raffinesse mit strategischem Denken – und schaffst Lösungen, die intuitiv funktionieren und nachhaltig wirken.',
      requirements: [
        'Erfahrung im Umgang mit KI-Modellen (LLMs), Prompt-Engineering und Tools wie LangChain',
        'Gespür für sinnvolle Automatisierung und Datenflüsse',
        'Selbstständige, strukturierte Arbeitsweise und Freude an Innovation',
        'Interesse daran, Dinge wirklich besser zu machen – nicht nur smarter'
      ],
      benefits: [
        'Projekte am Puls der Zeit – mit echtem Gestaltungsspielraum',
        'Austausch mit einem Team, das Technologie menschlich denkt',
        'Maximale Flexibilität, offene Kommunikation, faire Zusammenarbeit'
      ]
    }
  ];

  return (
    <div className="min-h-screen font-raleway bg-background">
      <Header />
      
      <main className="pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-12">
            <Button
              variant="ghost"
              onClick={() => navigate('/')}
              className="mb-6 -ml-2 text-muted-foreground hover:text-foreground"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Zurück zur Startseite
            </Button>
            
            <div className="text-center">
              <h1 className="text-4xl font-bold text-foreground mb-4 font-raleway">
                Offene <span className="text-primary">Stellen</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Werde Teil unseres Teams und gestalte die Zukunft der Automatisierung mit. 
                Wir suchen talentierte Menschen, die Leidenschaft für Innovation und Effizienz mitbringen.
              </p>
            </div>
          </div>

          {/* Jobs Grid */}
          <div className="space-y-8">
            {jobs.map((job, index) => (
              <Card key={index} className="border border-border/50 hover:border-primary/20 transition-all duration-300 hover:shadow-lg">
                <CardContent className="p-8">
                  <div className="mb-6">
                    <h2 className="text-2xl font-bold text-foreground mb-3 font-raleway">
                      {job.title}
                    </h2>
                    
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
                      <h3 className="text-lg font-semibold text-foreground mb-3 font-raleway">
                        Deine Mission
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {job.mission}
                      </p>
                    </div>

                    {/* Requirements */}
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-3 font-raleway">
                        Was du mitbringst
                      </h3>
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
                      <h3 className="text-lg font-semibold text-foreground mb-3 font-raleway">
                        Was dich erwartet
                      </h3>
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
                        Jetzt bewerben
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Contact Info */}
          <div className="mt-16 text-center">
            <div className="bg-muted/30 rounded-lg p-8">
              <h3 className="text-xl font-semibold text-foreground mb-3 font-raleway">
                Keine passende Stelle gefunden?
              </h3>
              <p className="text-muted-foreground mb-4">
                Wir sind immer auf der Suche nach talentierten Menschen. 
                Sende uns eine Initiativbewerbung!
              </p>
              <Button variant="outline">
                Initiativbewerbung senden
              </Button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Jobs;