import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { 
  Clock, 
  Phone, 
  Users,
  CheckCircle2,
  XCircle,
  ArrowRight,
  TrendingUp,
  BarChart3,
  Calendar,
  MessageSquare,
  ShoppingBag,
  UtensilsCrossed,
  ClipboardList,
  Wallet,
  Star,
  ChefHat,
  Timer,
  Smartphone
} from 'lucide-react';
import heroGastronomie from '@/assets/hero-gastronomie.jpg';

const scrollToContact = () => {
  const element = document.getElementById('contact-form');
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

const Gastronomie = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-24 md:pt-32 pb-12 md:pb-20 px-4 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 pointer-events-none">
          <img 
            src={heroGastronomie} 
            alt="Moderne Gastronomie" 
            className="w-full h-full object-cover opacity-50 md:opacity-40 dark:opacity-35 dark:md:opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/50 md:from-background/60 via-background/30 md:via-background/40 to-background" />
        </div>
        
        <div className="absolute top-20 left-10 w-48 md:w-72 h-48 md:h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-64 md:w-96 h-64 md:h-96 bg-primary/3 rounded-full blur-3xl" />
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-primary/10 text-primary text-xs md:text-sm font-medium mb-4 md:mb-6">
            <UtensilsCrossed className="w-3 h-3 md:w-4 md:h-4" />
            Für die Gastronomie
          </div>
          
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 md:mb-6 leading-tight">
            Weniger Stress.
            <br />
            <span className="text-primary">Mehr Genuss.</span>
          </h1>
          
          <p className="text-base md:text-xl text-muted-foreground mb-6 md:mb-8 max-w-2xl mx-auto leading-relaxed px-2">
            Reservierungen, Bestellungen, Personalplanung – alles, was euch vom 
            Wesentlichen abhält, läuft ab jetzt automatisch.
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
              Kommt euch das <span className="text-primary">bekannt vor</span>?
            </h2>
            <p className="text-muted-foreground text-sm md:text-lg max-w-2xl mx-auto px-2">
              Diese Herausforderungen kennen wir aus Gesprächen mit Gastronomen
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {[
              {
                icon: Calendar,
                title: "Reservierungs-Chaos",
                description: "Überbuchungen, No-Shows, verlorene Reservierungen – das Telefon klingelt ständig."
              },
              {
                icon: ClipboardList,
                title: "Bestellstress",
                description: "Lange Wartezeiten, falsche Bestellungen, überlastete Servicekräfte in Stoßzeiten."
              },
              {
                icon: Users,
                title: "Personalplanung",
                description: "Schichtpläne sind ein Albtraum, kurzfristige Ausfälle bringen alles durcheinander."
              },
              {
                icon: ShoppingBag,
                title: "Wareneinkauf",
                description: "Bestellungen vergessen, Lebensmittel verderben, Lieferantenrechnungen stapeln sich."
              },
              {
                icon: Wallet,
                title: "Kassenabrechnung",
                description: "Tagesabschluss dauert ewig, Kassendifferenzen, unübersichtliche Buchhaltung."
              },
              {
                icon: MessageSquare,
                title: "Bewertungen & Feedback",
                description: "Keine Zeit für Social Media, negative Bewertungen bleiben unbeantwortet."
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
              Mehr Zeit für eure Gäste und die Küche
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-4 md:gap-8">
            {[
              {
                icon: Calendar,
                title: "Intelligentes Reservierungssystem",
                description: "Online-Buchung rund um die Uhr. Automatische Bestätigungen, Erinnerungen und No-Show-Reduktion.",
                benefits: ["24/7 Online-Reservierung", "Automatische SMS-Erinnerung", "Weniger No-Shows"]
              },
              {
                icon: Smartphone,
                title: "Digitale Bestellaufnahme",
                description: "QR-Code-Menüs, Tablet-Bestellung, direkte Übertragung in die Küche. Weniger Laufwege, weniger Fehler.",
                benefits: ["Schnellere Bestellaufnahme", "Keine Übertragungsfehler", "Upselling-Vorschläge"]
              },
              {
                icon: Users,
                title: "Automatische Dienstplanung",
                description: "Schichtpläne auf Knopfdruck. Mitarbeiter tauschen selbständig, Ausfälle werden automatisch abgedeckt.",
                benefits: ["Faire Schichtverteilung", "Self-Service für Mitarbeiter", "Automatische Benachrichtigungen"]
              },
              {
                icon: BarChart3,
                title: "Umsatz-Dashboard",
                description: "Echtzeit-Überblick über Umsatz, Bestseller, Stoßzeiten. Datenbasierte Entscheidungen statt Bauchgefühl.",
                benefits: ["Live-Umsatzzahlen", "Bestseller-Analyse", "Trendvorhersagen"]
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

      {/* Guest Focus Section */}
      <section className="py-12 md:py-20 px-4 bg-gradient-to-br from-primary/5 via-background to-primary/10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10 md:mb-16">
            <ChefHat className="w-10 h-10 md:w-12 md:h-12 text-primary mx-auto mb-4 md:mb-6" />
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-3 md:mb-4 px-2">
              Endlich Zeit für das, was zählt: <span className="text-primary">Eure Gäste</span>
            </h2>
            <p className="text-muted-foreground text-sm md:text-lg max-w-2xl mx-auto px-2">
              Wenn die Routine automatisch läuft, bleibt mehr Zeit für echte Gastfreundschaft
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {[
              {
                icon: Star,
                title: "Besserer Service",
                description: "Mehr Aufmerksamkeit für jeden Gast, persönlichere Betreuung."
              },
              {
                icon: UtensilsCrossed,
                title: "Fokus auf Qualität",
                description: "Mehr Zeit in der Küche für Kreativität und Perfektion."
              },
              {
                icon: TrendingUp,
                title: "Raum für Wachstum",
                description: "Endlich Kapazität für neue Konzepte und Expansion."
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
                  "Telefon klingelt ständig wegen Reservierungen",
                  "Kellner schreiben Bestellungen auf Zettel",
                  "Dienstplan wird jede Woche mühsam erstellt",
                  "Wareneinkauf nach Gefühl und Erfahrung",
                  "Tagesabschluss dauert bis nach Mitternacht",
                  "Keine Zeit für Social Media und Bewertungen"
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
                  "Gäste buchen selbst online, rund um die Uhr",
                  "Bestellungen gehen direkt digital in die Küche",
                  "Dienstplan erstellt sich automatisch",
                  "Bestellvorschläge basierend auf Verbrauchsdaten",
                  "Kassenabschluss in wenigen Minuten",
                  "Automatische Antworten auf Bewertungen"
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
            Das berichten Gastronomen <span className="text-primary">nach der Einführung</span>
          </h2>
          
          <div className="grid grid-cols-3 gap-3 md:gap-8 mb-8 md:mb-12">
            {[
              { value: "50%", label: "Weniger No-Shows", icon: Calendar },
              { value: "30%", label: "Schnellerer Service", icon: Timer },
              { value: "20%", label: "Höherer Umsatz", icon: TrendingUp }
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
              "Früher war ich bis Mitternacht mit Papierkram beschäftigt. Jetzt habe ich 
              endlich wieder Zeit, mit meinen Gästen zu sprechen und neue Gerichte zu entwickeln."
            </blockquote>
            <p className="text-sm md:text-base text-muted-foreground">
              — Restaurantbesitzer, italienische Küche
            </p>
          </div>
        </div>
      </section>

      {/* Industry Types */}
      <section className="py-12 md:py-20 px-4 bg-muted/30">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-3 md:mb-4">
              Für jede <span className="text-primary">Gastronomie</span>
            </h2>
            <p className="text-muted-foreground text-sm md:text-lg">
              Unsere Lösungen passen sich eurem Konzept an
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-2 md:gap-4">
            {[
              "Restaurants",
              "Cafés",
              "Bars & Clubs",
              "Hotels",
              "Biergärten",
              "Food Trucks",
              "Catering",
              "Kantinen",
              "Bäckereien",
              "Imbisse"
            ].map((type, index) => (
              <div 
                key={index}
                className="px-3 py-2 md:px-5 md:py-3 bg-card border border-border rounded-full text-sm md:text-base text-foreground font-medium hover:border-primary/50 transition-colors"
              >
                {type}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-12 md:py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <Smartphone className="w-10 h-10 md:w-12 md:h-12 text-primary mx-auto mb-4 md:mb-6" />
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-3 md:mb-4">
              Nahtlose <span className="text-primary">Integration</span>
            </h2>
            <p className="text-muted-foreground text-sm md:text-lg max-w-2xl mx-auto">
              Wir verbinden eure bestehenden Systeme zu einem effizienten Ganzen
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {[
              {
                icon: Wallet,
                title: "Kassensysteme",
                description: "orderbird, Lightspeed, SumUp und viele mehr."
              },
              {
                icon: Calendar,
                title: "Reservierungen",
                description: "OpenTable, TheFork, Quandoo – alles synchronisiert."
              },
              {
                icon: ShoppingBag,
                title: "Lieferdienste",
                description: "Lieferando, Wolt, Uber Eats – ein Dashboard."
              },
              {
                icon: BarChart3,
                title: "Buchhaltung",
                description: "DATEV, lexoffice, sevDesk – automatischer Export."
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
          <UtensilsCrossed className="w-10 h-10 md:w-12 md:h-12 text-primary mx-auto mb-4 md:mb-6" />
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-3 md:mb-4">
            Bereit für mehr <span className="text-primary">Genuss</span>?
          </h2>
          <p className="text-muted-foreground text-sm md:text-lg mb-6 md:mb-8 max-w-xl mx-auto px-2">
            Lass uns gemeinsam herausfinden, wie wir euren Betrieb entlasten können. 
            Unverbindlich und kostenlos.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              onClick={() => window.location.href = '/booking'}
              className="text-base md:text-lg px-6 md:px-8 py-5 md:py-6 rounded-full"
            >
              Termin vereinbaren
              <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => window.location.href = 'tel:+4916099232779'}
              className="text-base md:text-lg px-6 md:px-8 py-5 md:py-6 rounded-full"
            >
              <Phone className="mr-2 w-4 h-4 md:w-5 md:h-5" />
              Direkt anrufen
            </Button>
          </div>
          
          <p className="text-xs md:text-sm text-muted-foreground mt-6 md:mt-8">
            Oder schreib uns eine E-Mail an{' '}
            <a href="mailto:info@heybotti.de" className="text-primary hover:underline">
              info@heybotti.de
            </a>
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Gastronomie;
