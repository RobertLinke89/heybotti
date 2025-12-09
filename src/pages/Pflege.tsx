import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { 
  Clock, 
  Phone, 
  FileText, 
  Users,
  CheckCircle2,
  XCircle,
  ArrowRight,
  Heart,
  TrendingUp,
  BarChart3,
  Calendar,
  MessageSquare,
  Shield,
  ClipboardList,
  UserCheck,
  Bell,
  Stethoscope,
  Home
} from 'lucide-react';
import heroPflege from '@/assets/hero-pflege.jpg';

const scrollToContact = () => {
  const element = document.getElementById('contact-form');
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

const Pflege = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-24 md:pt-32 pb-12 md:pb-20 px-4 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 pointer-events-none">
          <img 
            src={heroPflege} 
            alt="Moderne Pflegeeinrichtung" 
            className="w-full h-full object-cover opacity-50 md:opacity-40 dark:opacity-35 dark:md:opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/50 md:from-background/60 via-background/30 md:via-background/40 to-background" />
        </div>
        
        <div className="absolute top-20 left-10 w-48 md:w-72 h-48 md:h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-64 md:w-96 h-64 md:h-96 bg-primary/3 rounded-full blur-3xl" />
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-primary/10 text-primary text-xs md:text-sm font-medium mb-4 md:mb-6">
            <Heart className="w-3 h-3 md:w-4 md:h-4" />
            Für Pflegeeinrichtungen
          </div>
          
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 md:mb-6 leading-tight">
            Weniger Dokumentation.
            <br />
            <span className="text-primary">Mehr Zeit für Menschen.</span>
          </h1>
          
          <p className="text-base md:text-xl text-muted-foreground mb-6 md:mb-8 max-w-2xl mx-auto leading-relaxed px-2">
            Pflegedokumentation, Dienstplanung, Angehörigenkommunikation – alles, was euch 
            von der eigentlichen Pflege abhält, läuft ab jetzt automatisch.
          </p>
          
          <Button 
            size="lg" 
            asChild
            className="text-base md:text-lg px-6 md:px-8 py-5 md:py-6 rounded-full"
          >
            <a href="https://cal.katalysat.com/team/heybotti" target="_blank" rel="noopener noreferrer">
              Automatisierung starten
              <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5" />
            </a>
          </Button>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="py-12 md:py-20 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-3 md:mb-4">
              Kommt euch das <span className="text-primary">bekannt vor</span>?
            </h2>
            <p className="text-muted-foreground text-sm md:text-lg max-w-2xl mx-auto px-2">
              Diese Herausforderungen kennen wir aus Gesprächen mit Pflegeeinrichtungen
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {[
              {
                icon: FileText,
                title: "Dokumentationsflut",
                description: "Pflegeberichte, Medikamentenpläne, Vitalwerte – der Papierkram frisst wertvolle Betreuungszeit."
              },
              {
                icon: Calendar,
                title: "Dienstplan-Chaos",
                description: "Schichten planen, Ausfälle abdecken, Urlaubsanträge – die Planung ist ein Vollzeitjob."
              },
              {
                icon: MessageSquare,
                title: "Angehörigenkommunikation",
                description: "Ständige Anrufe und Nachfragen von Familien kosten Zeit und Nerven."
              },
              {
                icon: ClipboardList,
                title: "Medikamentenmanagement",
                description: "Bestellungen, Vergabe, Dokumentation – Fehler können fatale Folgen haben."
              },
              {
                icon: Users,
                title: "Personalmangel",
                description: "Zu wenig Fachkräfte für zu viele Aufgaben. Jede Minute zählt."
              },
              {
                icon: Shield,
                title: "Qualitätsprüfungen",
                description: "MDK-Kontrollen, Qualitätsstandards, Nachweise – der Druck wächst stetig."
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
              Was wir für euch <span className="text-primary">automatisieren</span>
            </h2>
            <p className="text-muted-foreground text-sm md:text-lg max-w-2xl mx-auto px-2">
              Mehr Zeit für das Wesentliche: die Betreuung eurer Bewohner
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-4 md:gap-8">
            {[
              {
                icon: FileText,
                title: "Digitale Pflegedokumentation",
                description: "Automatische Erfassung und Strukturierung von Pflegeberichten. Sprachgesteuerte Eingabe direkt am Bett.",
                benefits: ["80% weniger Schreibarbeit", "Rechtssichere Dokumentation", "Immer griffbereit auf jedem Gerät"]
              },
              {
                icon: Calendar,
                title: "Intelligente Dienstplanung",
                description: "Automatische Schichtvorschläge unter Berücksichtigung von Qualifikationen, Wünschen und gesetzlichen Vorgaben.",
                benefits: ["Faire Verteilung", "Automatische Ausfallabdeckung", "Urlaubsplanung in Minuten"]
              },
              {
                icon: MessageSquare,
                title: "Angehörigenportal",
                description: "Familien bekommen automatische Updates. Weniger Anrufe, mehr Transparenz, zufriedenere Angehörige.",
                benefits: ["Automatische Tagesberichte", "Sichere Fotoverwaltung", "Terminbuchung online"]
              },
              {
                icon: ClipboardList,
                title: "Medikamentenmanagement",
                description: "Automatische Erinnerungen, lückenlose Dokumentation, rechtzeitige Nachbestellungen.",
                benefits: ["Weniger Fehler", "Automatische Wechselwirkungsprüfung", "Bestandsüberwachung"]
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

      {/* Care Focus Section */}
      <section className="py-12 md:py-20 px-4 bg-gradient-to-br from-primary/5 via-background to-primary/10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10 md:mb-16">
            <Heart className="w-10 h-10 md:w-12 md:h-12 text-primary mx-auto mb-4 md:mb-6" />
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-3 md:mb-4 px-2">
              Endlich Zeit für das, was zählt: <span className="text-primary">Eure Bewohner</span>
            </h2>
            <p className="text-muted-foreground text-sm md:text-lg max-w-2xl mx-auto px-2">
              Wenn die Administration automatisch läuft, bleibt mehr Raum für echte Menschlichkeit
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {[
              {
                icon: UserCheck,
                title: "Individuelle Betreuung",
                description: "Mehr Zeit für Gespräche, Aktivitäten und persönliche Zuwendung."
              },
              {
                icon: Users,
                title: "Entlastetes Team",
                description: "Weniger Überstunden, weniger Stress, mehr Zufriedenheit im Job."
              },
              {
                icon: TrendingUp,
                title: "Bessere Pflegequalität",
                description: "Mehr Aufmerksamkeit für Details, weniger Flüchtigkeitsfehler."
              }
            ].map((benefit, index) => (
              <div 
                key={index}
                className="bg-card border border-border rounded-xl md:rounded-2xl p-4 md:p-6 text-center hover:border-primary/30 transition-colors"
              >
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-primary/10 flex items-center justify-center mb-3 md:mb-4 mx-auto">
                  <benefit.icon className="w-6 h-6 md:w-7 md:h-7 text-primary" />
                </div>
                <h3 className="text-base md:text-lg font-semibold text-foreground mb-1.5 md:mb-2">{benefit.title}</h3>
                <p className="text-sm md:text-base text-muted-foreground">{benefit.description}</p>
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
              Euer Alltag – <span className="text-primary">vorher und nachher</span>
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
                  "Pflegekräfte verbringen 40% ihrer Zeit mit Dokumentation",
                  "Dienstpläne werden manuell in Excel erstellt",
                  "Angehörige rufen ständig an für Updates",
                  "Medikamentenvergabe wird auf Papier notiert",
                  "Qualitätsprüfungen erfordern wochenlange Vorbereitung",
                  "Personal ist frustriert und ausgebrannt"
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
                  "Dokumentation per Sprache direkt am Bewohnerbett",
                  "Dienstpläne erstellen sich auf Knopfdruck",
                  "Angehörige erhalten automatische Updates",
                  "Medikamente werden digital verwaltet und dokumentiert",
                  "Alle Nachweise sind jederzeit abrufbereit",
                  "Team kann sich auf die Pflege konzentrieren"
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
            Das berichten Pflegeeinrichtungen <span className="text-primary">nach der Einführung</span>
          </h2>
          
          <div className="grid grid-cols-3 gap-3 md:gap-8 mb-8 md:mb-12">
            {[
              { value: "60%", label: "Weniger Zeit für Dokumentation", icon: FileText },
              { value: "45%", label: "Weniger Angehörigenanrufe", icon: Phone },
              { value: "30%", label: "Weniger Überstunden", icon: Clock }
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
              „Endlich haben unsere Pflegekräfte wieder Zeit für das, wofür sie diesen 
              Beruf gewählt haben – für unsere Bewohner da zu sein."
            </blockquote>
            <p className="text-sm md:text-base text-muted-foreground">
              — Einrichtungsleitung, Seniorenresidenz
            </p>
          </div>
        </div>
      </section>

      {/* Facility Types */}
      <section className="py-12 md:py-20 px-4 bg-muted/30">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-3 md:mb-4">
              Für jede <span className="text-primary">Pflegeeinrichtung</span>
            </h2>
            <p className="text-muted-foreground text-sm md:text-lg">
              Unsere Lösungen passen sich euren Anforderungen an
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-2 md:gap-4">
            {[
              "Seniorenheime",
              "Pflegeheime",
              "Betreutes Wohnen",
              "Tagespflege",
              "Ambulante Pflege",
              "Hospize",
              "Demenzpflege",
              "Intensivpflege",
              "Kurzzeitpflege",
              "Behindertenhilfe"
            ].map((facility, index) => (
              <div 
                key={index}
                className="px-3 py-2 md:px-5 md:py-3 bg-card border border-border rounded-full text-sm md:text-base text-foreground font-medium hover:border-primary/50 transition-colors"
              >
                {facility}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section className="py-12 md:py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <Shield className="w-10 h-10 md:w-12 md:h-12 text-primary mx-auto mb-4 md:mb-6" />
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-3 md:mb-4">
              Compliance & <span className="text-primary">Datenschutz</span>
            </h2>
            <p className="text-muted-foreground text-sm md:text-lg max-w-2xl mx-auto">
              Höchste Standards für sensible Gesundheitsdaten
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {[
              {
                icon: Shield,
                title: "DSGVO-konform",
                description: "Alle Daten werden nach höchsten deutschen Standards verarbeitet."
              },
              {
                icon: FileText,
                title: "MDK-ready",
                description: "Dokumentation erfüllt alle Anforderungen für Qualitätsprüfungen."
              },
              {
                icon: Bell,
                title: "Revisionssicher",
                description: "Lückenlose Nachverfolgung aller Änderungen und Zugriffe."
              },
              {
                icon: Stethoscope,
                title: "Pflegestandards",
                description: "Integrierte Expertenstandards und Qualitätsindikatoren."
              }
            ].map((item, index) => (
              <div 
                key={index}
                className="bg-card border border-border rounded-xl md:rounded-2xl p-4 md:p-6 text-center hover:border-primary/30 transition-colors"
              >
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-3 mx-auto">
                  <item.icon className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                </div>
                <h3 className="text-sm md:text-base font-semibold text-foreground mb-1">{item.title}</h3>
                <p className="text-xs md:text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact-form" className="py-12 md:py-20 px-4 bg-gradient-to-br from-primary/10 via-background to-primary/5">
        <div className="max-w-3xl mx-auto text-center">
          <Home className="w-10 h-10 md:w-12 md:h-12 text-primary mx-auto mb-4 md:mb-6" />
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-3 md:mb-4">
            Bereit für mehr <span className="text-primary">Zeit am Bewohner</span>?
          </h2>
          <p className="text-muted-foreground text-sm md:text-lg mb-6 md:mb-8 max-w-xl mx-auto px-2">
            Lass uns gemeinsam herausfinden, wie wir eure Einrichtung entlasten können. 
            Unverbindlich und kostenlos.
          </p>
          
          <div className="flex justify-center">
            <Button 
              size="lg" 
              asChild
              className="text-base md:text-lg px-6 md:px-8 py-5 md:py-6 rounded-full"
            >
              <a href="https://cal.katalysat.com/team/heybotti" target="_blank" rel="noopener noreferrer">
                Automatisierung starten
                <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Pflege;
