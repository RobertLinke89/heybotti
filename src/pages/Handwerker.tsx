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
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-primary/3 rounded-full blur-3xl" />
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <Wrench className="w-4 h-4" />
            Für Handwerksbetriebe
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
            Weniger Büro.
            <br />
            <span className="text-primary">Mehr Baustelle.</span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Angebote, Rechnungen, Terminplanung – alles, was dich von der eigentlichen Arbeit abhält, 
            läuft ab jetzt automatisch.
          </p>
          
          <Button 
            size="lg" 
            onClick={scrollToContact}
            className="text-lg px-8 py-6 rounded-full"
          >
            Jetzt Beratung anfragen
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Kommt dir das <span className="text-primary">bekannt vor</span>?
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Diese Probleme kennen wir aus Gesprächen mit Handwerksbetrieben
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                className="bg-card border border-border rounded-2xl p-6 hover:border-primary/30 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center mb-4">
                  <pain.icon className="w-6 h-6 text-destructive" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{pain.title}</h3>
                <p className="text-muted-foreground">{pain.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Was wir für dich <span className="text-primary">automatisieren</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Praktische Lösungen, die sofort Zeit sparen
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
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
                className="bg-card border border-border rounded-2xl p-8 hover:shadow-lg transition-shadow"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                  <solution.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{solution.title}</h3>
                <p className="text-muted-foreground mb-6">{solution.description}</p>
                <ul className="space-y-2">
                  {solution.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-foreground">
                      <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
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
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Dein Alltag – <span className="text-primary">vorher und nachher</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Before */}
            <div className="bg-card border border-destructive/20 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-destructive/10 flex items-center justify-center">
                  <XCircle className="w-5 h-5 text-destructive" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Ohne Automatisierung</h3>
              </div>
              <ul className="space-y-4">
                {[
                  "Abends noch 2 Stunden Büroarbeit",
                  "Kunden beschweren sich über späte Antworten",
                  "Rechnungen gehen erst nach Wochen raus",
                  "Keine Übersicht über offene Posten",
                  "Termine werden vergessen oder doppelt vergeben",
                  "Ständiges Suchen nach Infos zu Aufträgen"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-muted-foreground">
                    <XCircle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            
            {/* After */}
            <div className="bg-card border border-primary/20 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Mit heybotti</h3>
              </div>
              <ul className="space-y-4">
                {[
                  "Feierabend ist wirklich Feierabend",
                  "Kunden bekommen sofort Rückmeldung",
                  "Rechnungen gehen automatisch raus",
                  "Dashboard zeigt alle Zahlen auf einen Blick",
                  "Kalender synchronisiert sich selbst",
                  "Alle Projektinfos an einem Ort"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-foreground">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
            Das berichten Handwerksbetriebe <span className="text-primary">nach der Einführung</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              { value: "5+", label: "Stunden pro Woche gespart", icon: Clock },
              { value: "2x", label: "Schnellere Angebotserstellung", icon: TrendingUp },
              { value: "30%", label: "Weniger offene Rechnungen", icon: Receipt }
            ].map((stat, index) => (
              <div key={index} className="bg-card border border-border rounded-2xl p-8">
                <stat.icon className="w-8 h-8 text-primary mx-auto mb-4" />
                <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
          
          <div className="bg-muted/50 rounded-2xl p-8 border border-border">
            <blockquote className="text-xl text-foreground italic mb-4">
              „Ich hätte nie gedacht, dass ich mal weniger arbeite und trotzdem mehr schaffe. 
              Die Automatisierung hat meinen Betrieb komplett verändert."
            </blockquote>
            <p className="text-muted-foreground">
              — Elektriker-Meisterbetrieb, 4 Mitarbeiter
            </p>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Für alle <span className="text-primary">Gewerke</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Unsere Lösungen passen sich deinem Betrieb an
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
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
                className="px-5 py-3 bg-card border border-border rounded-full text-foreground font-medium hover:border-primary/50 transition-colors"
              >
                {trade}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact-form" className="py-20 px-4 bg-gradient-to-br from-primary/5 via-background to-primary/10">
        <div className="max-w-3xl mx-auto text-center">
          <Truck className="w-16 h-16 text-primary mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Bereit, deinen Betrieb zu <span className="text-primary">entlasten</span>?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            In einem kostenlosen Gespräch analysieren wir gemeinsam, wo Automatisierung 
            bei dir am meisten bringt.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="text-lg px-8 py-6 rounded-full"
              asChild
            >
              <a href="tel:+4916099232779">
                <Phone className="mr-2 w-5 h-5" />
                Jetzt anrufen
              </a>
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="text-lg px-8 py-6 rounded-full"
              asChild
            >
              <a href="mailto:info@heybotti.de">
                Nachricht schreiben
              </a>
            </Button>
          </div>
          <p className="text-sm text-muted-foreground mt-6">
            Kostenlos & unverbindlich · Keine versteckten Kosten
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Handwerker;