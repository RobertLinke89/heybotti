import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { 
  Clock, 
  Phone, 
  FileText, 
  Calendar, 
  Users,
  CheckCircle2,
  XCircle,
  ArrowRight,
  HeartPulse,
  MessageSquare,
  TrendingUp,
  ClipboardList,
  Stethoscope,
  Timer
} from 'lucide-react';
import heroHealthcare from '@/assets/hero-healthcare.jpg';

const scrollToContact = () => {
  const element = document.getElementById('contact-form');
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

const PraxisVernetzen = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-24 md:pt-32 pb-12 md:pb-20 px-4 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 pointer-events-none">
          <img 
            src={heroHealthcare} 
            alt="Healthcare professionals collaborating" 
            className="w-full h-full object-cover opacity-50 md:opacity-40 dark:opacity-35 dark:md:opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/50 md:from-background/60 via-background/30 md:via-background/40 to-background" />
        </div>
        
        <div className="absolute top-20 left-10 w-48 md:w-72 h-48 md:h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-64 md:w-96 h-64 md:h-96 bg-primary/3 rounded-full blur-3xl" />
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-primary/10 text-primary text-xs md:text-sm font-medium mb-4 md:mb-6">
            <HeartPulse className="w-3 h-3 md:w-4 md:h-4" />
            Für Gesundheitspraxen
          </div>
          
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 md:mb-6 leading-tight">
            Weniger Verwaltung.
            <br />
            <span className="text-primary">Mehr Zeit für Patienten.</span>
          </h1>
          
          <p className="text-base md:text-xl text-muted-foreground mb-6 md:mb-8 max-w-2xl mx-auto leading-relaxed px-2">
            Termine, Dokumentation, Abrechnung – alles, was Sie von Ihren Patienten ablenkt, 
            läuft ab jetzt automatisch.
          </p>
          
          <Button 
            size="lg" 
            onClick={scrollToContact}
            className="text-base md:text-lg px-6 md:px-8 py-5 md:py-6 rounded-full"
          >
            Jetzt Beratung anfragen
            <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5" />
          </Button>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="py-12 md:py-20 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-3 md:mb-4">
              Kommt Ihnen das <span className="text-primary">bekannt vor</span>?
            </h2>
            <p className="text-muted-foreground text-sm md:text-lg max-w-2xl mx-auto px-2">
              Diese Herausforderungen kennen wir aus Gesprächen mit Praxisinhabern
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {[
              {
                icon: Phone,
                title: "Telefonische Erreichbarkeit",
                description: "Patienten rufen an, während Behandlungen laufen. Rückrufe stapeln sich."
              },
              {
                icon: Calendar,
                title: "Terminchaos",
                description: "Absagen, Verschiebungen, No-Shows – der Kalender ist nie verlässlich."
              },
              {
                icon: FileText,
                title: "Dokumentationslast",
                description: "Behandlungsberichte, Arztbriefe, Formulare – alles muss manuell erfasst werden."
              },
              {
                icon: ClipboardList,
                title: "Abrechnungsstress",
                description: "Kassenabrechnungen sind zeitaufwändig und fehleranfällig."
              },
              {
                icon: Users,
                title: "Personalengpässe",
                description: "Das Team ist am Limit, aber Entlastung ist schwer zu organisieren."
              },
              {
                icon: Timer,
                title: "Überstunden ohne Ende",
                description: "Verwaltung findet nach Feierabend statt, weil tagsüber keine Zeit bleibt."
              }
            ].map((pain, index) => (
              <div 
                key={index}
                className="bg-card border border-border rounded-xl md:rounded-2xl p-4 md:p-6 hover:border-primary/30 transition-colors"
              >
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-destructive/10 flex items-center justify-center mb-3 md:mb-4">
                  <pain.icon className="w-5 h-5 md:w-6 md:h-6 text-destructive" />
                </div>
                <h3 className="text-base md:text-lg font-semibold text-foreground mb-1.5 md:mb-2">{pain.title}</h3>
                <p className="text-sm md:text-base text-muted-foreground">{pain.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-12 md:py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-3 md:mb-4">
              Was wir für Sie <span className="text-primary">automatisieren</span>
            </h2>
            <p className="text-muted-foreground text-sm md:text-lg max-w-2xl mx-auto px-2">
              Mehr Zeit für Patienten, weniger für Administration
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-4 md:gap-8">
            {[
              {
                icon: Calendar,
                title: "Intelligente Terminverwaltung",
                description: "Patienten buchen selbst verfügbare Slots. Automatische Erinnerungen reduzieren No-Shows drastisch.",
                benefits: ["Online-Buchung rund um die Uhr", "Automatische Erinnerungen", "Wartelisten-Management"]
              },
              {
                icon: MessageSquare,
                title: "Patientenkommunikation",
                description: "Anfragen werden automatisch beantwortet, sortiert und nur bei Bedarf an Sie weitergeleitet.",
                benefits: ["24/7 Erreichbarkeit", "Automatische Rückrufplanung", "Befundübermittlung vereinfacht"]
              },
              {
                icon: FileText,
                title: "Dokumentation automatisiert",
                description: "Behandlungsberichte werden vorausgefüllt, Arztbriefe automatisch erstellt.",
                benefits: ["Vorlagen für häufige Fälle", "KI-unterstützte Texterstellung", "Digitale Signatur"]
              },
              {
                icon: ClipboardList,
                title: "Abrechnung ohne Stress",
                description: "Leistungen werden automatisch erfasst und zur Abrechnung vorbereitet.",
                benefits: ["Automatische Leistungserfassung", "Fehlerprüfung vor Einreichung", "Übersicht offener Posten"]
              }
            ].map((solution, index) => (
              <div 
                key={index}
                className="bg-card border border-border rounded-xl md:rounded-2xl p-5 md:p-8 hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-primary/10 flex items-center justify-center mb-4 md:mb-6">
                  <solution.icon className="w-6 h-6 md:w-7 md:h-7 text-primary" />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-foreground mb-2 md:mb-3">{solution.title}</h3>
                <p className="text-sm md:text-base text-muted-foreground mb-4 md:mb-6">{solution.description}</p>
                <ul className="space-y-1.5 md:space-y-2">
                  {solution.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-center gap-2 text-xs md:text-sm text-foreground">
                      <CheckCircle2 className="w-3.5 h-3.5 md:w-4 md:h-4 text-primary flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Before/After Comparison */}
      <section className="py-12 md:py-20 px-4 bg-muted/30">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-3 md:mb-4">
              Ihr Alltag – <span className="text-primary">vorher und nachher</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-4 md:gap-8">
            {/* Before */}
            <div className="bg-card border border-destructive/20 rounded-xl md:rounded-2xl p-5 md:p-8">
              <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-destructive/10 flex items-center justify-center">
                  <XCircle className="w-4 h-4 md:w-5 md:h-5 text-destructive" />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-foreground">Ohne Automatisierung</h3>
              </div>
              <ul className="space-y-2.5 md:space-y-4">
                {[
                  "Telefon klingelt ständig während der Behandlung",
                  "Dokumentation nach Feierabend",
                  "Patienten erscheinen nicht zum Termin",
                  "Abrechnungen werden geschoben",
                  "Team ist gestresst und überlastet",
                  "Keine Zeit für Qualitätsentwicklung"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 md:gap-3 text-sm md:text-base text-muted-foreground">
                    <XCircle className="w-4 h-4 md:w-5 md:h-5 text-destructive flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            
            {/* After */}
            <div className="bg-card border border-primary/20 rounded-xl md:rounded-2xl p-5 md:p-8">
              <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-foreground">Mit heybotti</h3>
              </div>
              <ul className="space-y-2.5 md:space-y-4">
                {[
                  "Patienten buchen und stornieren selbst",
                  "Dokumentation ist vorausgefüllt",
                  "Automatische Erinnerungen reduzieren No-Shows",
                  "Abrechnungen laufen im Hintergrund",
                  "Team hat Raum für Patienten",
                  "Zeit für Qualität und Weiterentwicklung"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 md:gap-3 text-sm md:text-base text-foreground">
                    <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-primary flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-12 md:py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-8 md:mb-12 px-2">
            Das berichten Praxen <span className="text-primary">nach der Einführung</span>
          </h2>
          
          <div className="grid grid-cols-3 gap-3 md:gap-8 mb-8 md:mb-12">
            {[
              { value: "50%", label: "Weniger Telefonanrufe", icon: Phone },
              { value: "70%", label: "Weniger No-Shows", icon: Calendar },
              { value: "3h", label: "Ersparnis pro Woche", icon: Clock }
            ].map((stat, index) => (
              <div key={index} className="bg-card border border-border rounded-xl md:rounded-2xl p-4 md:p-8">
                <stat.icon className="w-6 h-6 md:w-8 md:h-8 text-primary mx-auto mb-2 md:mb-4" />
                <div className="text-2xl md:text-4xl font-bold text-primary mb-1 md:mb-2">{stat.value}</div>
                <div className="text-xs md:text-base text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
          
          <div className="bg-muted/50 rounded-xl md:rounded-2xl p-5 md:p-8 border border-border">
            <blockquote className="text-base md:text-xl text-foreground italic mb-3 md:mb-4">
              „Endlich kann ich mich wieder auf meine Patienten konzentrieren. 
              Die Verwaltung läuft im Hintergrund und das Team ist spürbar entspannter."
            </blockquote>
            <p className="text-sm md:text-base text-muted-foreground">
              — Physiotherapie-Praxis, 6 Mitarbeiter
            </p>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-12 md:py-20 px-4 bg-muted/30">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-3 md:mb-4">
              Für alle <span className="text-primary">Gesundheitspraxen</span>
            </h2>
            <p className="text-muted-foreground text-sm md:text-lg">
              Unsere Lösungen passen sich Ihrer Praxis an
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-2 md:gap-4">
            {[
              "Physiotherapie",
              "Ergotherapie",
              "Logopädie",
              "Osteopathie",
              "Heilpraktiker",
              "Psychotherapie",
              "Zahnarztpraxen",
              "Arztpraxen",
              "MVZ",
              "Gesundheitszentren"
            ].map((practice, index) => (
              <div 
                key={index}
                className="px-3 py-2 md:px-5 md:py-3 bg-card border border-border rounded-full text-sm md:text-base text-foreground font-medium hover:border-primary/50 transition-colors"
              >
                {practice}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact-form" className="py-12 md:py-20 px-4 bg-gradient-to-br from-primary/5 via-background to-primary/10">
        <div className="max-w-3xl mx-auto text-center">
          <Stethoscope className="w-12 h-12 md:w-16 md:h-16 text-primary mx-auto mb-4 md:mb-6" />
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4 md:mb-6 px-2">
            Bereit für mehr <span className="text-primary">Patientenzeit</span>?
          </h2>
          <p className="text-base md:text-xl text-muted-foreground mb-6 md:mb-8 px-2">
            In einem kostenlosen Gespräch analysieren wir gemeinsam, wo Automatisierung 
            in Ihrer Praxis am meisten entlastet.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center px-4">
            <Button 
              size="lg" 
              className="text-base md:text-lg px-6 md:px-8 py-5 md:py-6 rounded-full"
              asChild
            >
              <a href="tel:+4916099232779">
                <Phone className="mr-2 w-4 h-4 md:w-5 md:h-5" />
                Jetzt anrufen
              </a>
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="text-base md:text-lg px-6 md:px-8 py-5 md:py-6 rounded-full"
              asChild
            >
              <a href="mailto:info@heybotti.de">
                Nachricht schreiben
              </a>
            </Button>
          </div>
          <p className="text-xs md:text-sm text-muted-foreground mt-4 md:mt-6">
            Kostenlos & unverbindlich · Keine versteckten Kosten
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PraxisVernetzen;