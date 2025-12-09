import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { 
  Clock, 
  FileText, 
  Phone, 
  Calendar, 
  Receipt, 
  Users,
  CheckCircle2,
  XCircle,
  ArrowRight,
  Wrench,
  MessageSquare,
  TrendingUp,
  ClipboardList,
  Truck,
  Euro
} from 'lucide-react';
import heroHandwerker from '@/assets/hero-handwerker.jpg';

const scrollToContact = () => {
  const element = document.getElementById('contact-form');
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

const Handwerker = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-24 md:pt-32 pb-12 md:pb-20 px-4 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 pointer-events-none">
          <img 
            src={heroHandwerker} 
            alt="Handwerker mit digitalem Tablet" 
            className="w-full h-full object-cover opacity-50 md:opacity-40 dark:opacity-35 dark:md:opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/50 md:from-background/60 via-background/30 md:via-background/40 to-background" />
        </div>
        
        <div className="absolute top-20 left-10 w-48 md:w-72 h-48 md:h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-64 md:w-96 h-64 md:h-96 bg-primary/3 rounded-full blur-3xl" />
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-primary/10 text-primary text-xs md:text-sm font-medium mb-4 md:mb-6">
            <Wrench className="w-3 h-3 md:w-4 md:h-4" />
            Für Handwerksbetriebe
          </div>
          
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 md:mb-6 leading-tight">
            Weniger Büro.
            <br />
            <span className="text-primary">Mehr Baustelle.</span>
          </h1>
          
          <p className="text-base md:text-xl text-muted-foreground mb-6 md:mb-8 max-w-2xl mx-auto leading-relaxed px-2">
            Angebote, Rechnungen, Terminplanung – alles, was dich von der eigentlichen Arbeit abhält, 
            läuft ab jetzt automatisch.
          </p>
          
          <Button 
            size="lg" 
            onClick={scrollToContact}
            className="text-base md:text-lg px-6 md:px-8 py-5 md:py-6 rounded-full"
          >
            Automatisierung starten
            <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5" />
          </Button>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="py-12 md:py-20 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-3 md:mb-4">
              Kommt dir das <span className="text-primary">bekannt vor</span>?
            </h2>
            <p className="text-muted-foreground text-sm md:text-lg max-w-2xl mx-auto px-2">
              Diese Probleme kennen wir aus Gesprächen mit Handwerksbetrieben
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {[
              {
                icon: Phone,
                title: "Ständige Anrufe",
                description: "Kunden rufen an, während du auf der Baustelle bist. Rückrufe stapeln sich."
              },
              {
                icon: FileText,
                title: "Angebote schreiben",
                description: "Abends noch Angebote tippen, statt Zeit mit der Familie zu verbringen."
              },
              {
                icon: Calendar,
                title: "Terminchaos",
                description: "Doppelbuchungen, vergessene Termine, Kunden die nicht da sind."
              },
              {
                icon: Receipt,
                title: "Rechnungen verzögert",
                description: "Aufträge werden erledigt, aber die Rechnung geht erst Wochen später raus."
              },
              {
                icon: Users,
                title: "Fachkräftemangel",
                description: "Keine Zeit für Recruiting, keine Kapazität für neue Mitarbeiter einzuarbeiten."
              },
              {
                icon: ClipboardList,
                title: "Papierkram überall",
                description: "Zettelwirtschaft, verlorene Notizen, keine Übersicht über laufende Projekte."
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
              Was wir für dich <span className="text-primary">automatisieren</span>
            </h2>
            <p className="text-muted-foreground text-sm md:text-lg max-w-2xl mx-auto px-2">
              Praktische Lösungen, die sofort Zeit sparen
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-4 md:gap-8">
            {[
              {
                icon: MessageSquare,
                title: "Automatische Kundenanfragen",
                description: "Anfragen werden erfasst, kategorisiert und du bekommst eine übersichtliche Zusammenfassung – ohne ständig ans Telefon zu müssen.",
                benefits: ["24/7 Erreichbarkeit", "Keine verpassten Anfragen", "Sofortige Bestätigung an Kunden"]
              },
              {
                icon: FileText,
                title: "Angebote auf Knopfdruck",
                description: "Standardleistungen werden automatisch kalkuliert. Du prüfst kurz und sendest – fertig.",
                benefits: ["Vorlagen für Standardaufträge", "Automatische Preisberechnung", "Digitale Signatur"]
              },
              {
                icon: Calendar,
                title: "Intelligente Terminplanung",
                description: "Kunden buchen selbst verfügbare Slots. Du siehst alle Termine auf einen Blick.",
                benefits: ["Weniger Koordinationsaufwand", "Automatische Erinnerungen", "Fahrtrouten-Optimierung"]
              },
              {
                icon: Euro,
                title: "Rechnungen automatisch",
                description: "Nach Auftragsabschluss geht die Rechnung raus – ohne dass du daran denken musst.",
                benefits: ["Direkte Verknüpfung mit Aufträgen", "Mahnwesen automatisiert", "Zahlungsverfolgung"]
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
              Dein Alltag – <span className="text-primary">vorher und nachher</span>
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
                  "Abends noch 2 Stunden Büroarbeit",
                  "Kunden beschweren sich über späte Antworten",
                  "Rechnungen gehen erst nach Wochen raus",
                  "Keine Übersicht über offene Posten",
                  "Termine werden vergessen oder doppelt vergeben",
                  "Ständiges Suchen nach Infos zu Aufträgen"
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
                  "Feierabend ist wirklich Feierabend",
                  "Kunden bekommen sofort Rückmeldung",
                  "Rechnungen gehen automatisch raus",
                  "Dashboard zeigt alle Zahlen auf einen Blick",
                  "Kalender synchronisiert sich selbst",
                  "Alle Projektinfos an einem Ort"
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
            Das berichten Handwerksbetriebe <span className="text-primary">nach der Einführung</span>
          </h2>
          
          <div className="grid grid-cols-3 gap-3 md:gap-8 mb-8 md:mb-12">
            {[
              { value: "5+", label: "Stunden pro Woche gespart", icon: Clock },
              { value: "2x", label: "Schnellere Angebotserstellung", icon: TrendingUp },
              { value: "30%", label: "Weniger offene Rechnungen", icon: Receipt }
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
              „Ich hätte nie gedacht, dass ich mal weniger arbeite und trotzdem mehr schaffe. 
              Die Automatisierung hat meinen Betrieb komplett verändert."
            </blockquote>
            <p className="text-sm md:text-base text-muted-foreground">
              — Elektriker-Meisterbetrieb, 4 Mitarbeiter
            </p>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-12 md:py-20 px-4 bg-muted/30">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-3 md:mb-4">
              Für alle <span className="text-primary">Gewerke</span>
            </h2>
            <p className="text-muted-foreground text-sm md:text-lg">
              Unsere Lösungen passen sich deinem Betrieb an
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-2 md:gap-4">
            {[
              "Elektriker",
              "Sanitär & Heizung",
              "Maler & Lackierer",
              "Schreiner & Tischler",
              "Dachdecker",
              "Fliesenleger",
              "Maurer",
              "Schlosser",
              "Garten- & Landschaftsbau",
              "KFZ-Werkstätten"
            ].map((trade, index) => (
              <div 
                key={index}
                className="px-3 py-2 md:px-5 md:py-3 bg-card border border-border rounded-full text-sm md:text-base text-foreground font-medium hover:border-primary/50 transition-colors"
              >
                {trade}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact-form" className="py-12 md:py-20 px-4 bg-gradient-to-br from-primary/5 via-background to-primary/10">
        <div className="max-w-3xl mx-auto text-center">
          <Truck className="w-12 h-12 md:w-16 md:h-16 text-primary mx-auto mb-4 md:mb-6" />
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4 md:mb-6 px-2">
            Bereit, deinen Betrieb zu <span className="text-primary">entlasten</span>?
          </h2>
          <p className="text-base md:text-xl text-muted-foreground mb-6 md:mb-8 px-2">
            In einem kostenlosen Gespräch analysieren wir gemeinsam, wo Automatisierung 
            bei dir am meisten bringt.
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

export default Handwerker;