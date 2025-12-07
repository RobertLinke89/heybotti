import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { 
  Clock, 
  Phone, 
  Package, 
  Users,
  CheckCircle2,
  XCircle,
  ArrowRight,
  ShoppingBag,
  TrendingUp,
  BarChart3,
  Truck,
  CreditCard,
  MessageSquare,
  Tag,
  Store,
  Heart,
  Repeat,
  Star
} from 'lucide-react';
import heroRetail from '@/assets/hero-retail.jpg';

const scrollToContact = () => {
  const element = document.getElementById('contact-form');
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

const Einzelhandel = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-24 md:pt-32 pb-12 md:pb-20 px-4 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 pointer-events-none">
          <img 
            src={heroRetail} 
            alt="Modernes Einzelhandelsgeschäft" 
            className="w-full h-full object-cover opacity-40 dark:opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
        </div>
        
        <div className="absolute top-20 left-10 w-48 md:w-72 h-48 md:h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-64 md:w-96 h-64 md:h-96 bg-primary/3 rounded-full blur-3xl" />
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-primary/10 text-primary text-xs md:text-sm font-medium mb-4 md:mb-6">
            <Store className="w-3 h-3 md:w-4 md:h-4" />
            Für den Einzelhandel
          </div>
          
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 md:mb-6 leading-tight">
            Weniger Verwaltung.
            <br />
            <span className="text-primary">Mehr Kundenfokus.</span>
          </h1>
          
          <p className="text-base md:text-xl text-muted-foreground mb-6 md:mb-8 max-w-2xl mx-auto leading-relaxed px-2">
            Bestand, Bestellungen, Kundenkommunikation – alles, was dich von deinen Kunden ablenkt, 
            läuft ab jetzt im Hintergrund.
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
              Kommt dir das <span className="text-primary">bekannt vor</span>?
            </h2>
            <p className="text-muted-foreground text-sm md:text-lg max-w-2xl mx-auto px-2">
              Diese Herausforderungen kennen wir aus Gesprächen mit Einzelhändlern
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {[
              {
                icon: Package,
                title: "Bestandschaos",
                description: "Artikel sind ausverkauft, ohne dass du es merkst. Oder du sitzt auf Ladenhütern."
              },
              {
                icon: Clock,
                title: "Zeitfresser Kasse",
                description: "Kassieren, Retouren, Gutscheine – die Warteschlange wächst, Kunden werden ungeduldig."
              },
              {
                icon: MessageSquare,
                title: "Kundenanfragen überall",
                description: "WhatsApp, Instagram, E-Mail, Telefon – du verlierst den Überblick."
              },
              {
                icon: Truck,
                title: "Lieferanten-Jonglage",
                description: "Bestellungen manuell aufgeben, Liefertermine nachverfolgen, Rechnungen abgleichen."
              },
              {
                icon: Users,
                title: "Personal-Engpässe",
                description: "Schichtplanung ist komplex, Mitarbeiter sind oft nicht da, wo sie gebraucht werden."
              },
              {
                icon: BarChart3,
                title: "Fehlende Übersicht",
                description: "Welche Produkte laufen? Was ist der Umsatz? Du fliegst blind."
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
              Mehr Zeit für Beratung, Verkauf und Wachstum
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-4 md:gap-8">
            {[
              {
                icon: Package,
                title: "Intelligente Bestandsverwaltung",
                description: "Automatische Nachbestellungen bei niedrigem Bestand, Echtzeitabgleich zwischen Lager und Verkaufsfläche.",
                benefits: ["Nie wieder ausverkauft", "Weniger Überbestand", "Automatische Bestellvorschläge"]
              },
              {
                icon: MessageSquare,
                title: "Kundenkommunikation gebündelt",
                description: "Alle Kanäle an einem Ort. Automatische Antworten auf häufige Fragen, persönliche Betreuung wo nötig.",
                benefits: ["Ein Dashboard für alles", "Sofortige Antworten 24/7", "Persönliche Nachrichten bei Bedarf"]
              },
              {
                icon: Tag,
                title: "Dynamische Preisgestaltung",
                description: "Rabatte und Aktionen werden automatisch angewandt. Preisschilder aktualisieren sich selbst.",
                benefits: ["Weniger manuelle Fehler", "Konsistente Preise überall", "Automatische Aktionsverwaltung"]
              },
              {
                icon: BarChart3,
                title: "Echtzeit-Analytics",
                description: "Umsatz, Bestseller, Kundenfrequenz – alles auf einen Blick. Entscheidungen basierend auf Daten, nicht Bauchgefühl.",
                benefits: ["Live-Dashboard", "Trendanalysen", "Automatische Berichte"]
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

      {/* Customer Focus Section */}
      <section className="py-12 md:py-20 px-4 bg-gradient-to-br from-primary/5 via-background to-primary/10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10 md:mb-16">
            <Heart className="w-10 h-10 md:w-12 md:h-12 text-primary mx-auto mb-4 md:mb-6" />
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-3 md:mb-4 px-2">
              Endlich Zeit für das, was zählt: <span className="text-primary">Deine Kunden</span>
            </h2>
            <p className="text-muted-foreground text-sm md:text-lg max-w-2xl mx-auto px-2">
              Wenn die Routine automatisch läuft, kannst du dich auf echte Beziehungen konzentrieren
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {[
              {
                icon: Users,
                title: "Persönliche Beratung",
                description: "Mehr Zeit für individuelle Gespräche und kompetente Produktempfehlungen."
              },
              {
                icon: Star,
                title: "Stammkunden pflegen",
                description: "Automatische Erinnerungen an Geburtstage, Vorlieben und Kaufhistorie."
              },
              {
                icon: TrendingUp,
                title: "Wachstum vorantreiben",
                description: "Endlich Kapazität für neue Ideen, Events und Sortimentserweiterungen."
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
                  "Bestandslisten werden manuell in Excel gepflegt",
                  "Kunden warten an der Kasse, weil Preise unklar sind",
                  "Nachbestellungen werden vergessen",
                  "Kundenanfragen stapeln sich unbeantwortet",
                  "Keine Ahnung, welche Produkte wirklich laufen",
                  "Mitarbeiter wissen nicht, was sie priorisieren sollen"
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
                  "Bestand aktualisiert sich automatisch in Echtzeit",
                  "Preise sind überall konsistent und aktuell",
                  "Automatische Bestellvorschläge vor Engpässen",
                  "Kunden bekommen sofort Antworten",
                  "Dashboard zeigt Topseller und Trends",
                  "Klare Aufgaben und Prioritäten für das Team"
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
            Das berichten Einzelhändler <span className="text-primary">nach der Einführung</span>
          </h2>
          
          <div className="grid grid-cols-3 gap-3 md:gap-8 mb-8 md:mb-12">
            {[
              { value: "40%", label: "Weniger Zeit für Verwaltung", icon: Clock },
              { value: "25%", label: "Weniger Fehlbestände", icon: Package },
              { value: "3x", label: "Schnellere Kundenantworten", icon: MessageSquare }
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
              „Früher war ich mehr Lagerverwalter als Verkäufer. Jetzt kann ich mich endlich 
              wieder auf das konzentrieren, was mir Spaß macht: meine Kunden beraten."
            </blockquote>
            <p className="text-sm md:text-base text-muted-foreground">
              — Boutique-Inhaberin, Mode & Accessoires
            </p>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-12 md:py-20 px-4 bg-muted/30">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-3 md:mb-4">
              Für jeden <span className="text-primary">Einzelhandel</span>
            </h2>
            <p className="text-muted-foreground text-sm md:text-lg">
              Unsere Lösungen passen sich deinem Geschäft an
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-2 md:gap-4">
            {[
              "Mode & Bekleidung",
              "Lebensmittel & Feinkost",
              "Elektronik & Technik",
              "Möbel & Einrichtung",
              "Sport & Outdoor",
              "Spielwaren",
              "Buchhandlungen",
              "Blumen & Garten",
              "Schmuck & Uhren",
              "Drogerien & Kosmetik"
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

      {/* Multi-Channel Section */}
      <section className="py-12 md:py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <Repeat className="w-10 h-10 md:w-12 md:h-12 text-primary mx-auto mb-4 md:mb-6" />
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-3 md:mb-4 px-2">
              Stationär und Online <span className="text-primary">nahtlos verbunden</span>
            </h2>
            <p className="text-muted-foreground text-sm md:text-lg max-w-2xl mx-auto px-2">
              Ob Ladengeschäft, Webshop oder Social Commerce – alle Kanäle laufen synchron
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
            {[
              { icon: Store, label: "Ladengeschäft" },
              { icon: ShoppingBag, label: "Webshop" },
              { icon: MessageSquare, label: "Social Commerce" },
              { icon: CreditCard, label: "Marktplätze" }
            ].map((channel, index) => (
              <div 
                key={index}
                className="bg-card border border-border rounded-xl md:rounded-2xl p-4 md:p-6 text-center hover:border-primary/30 transition-colors"
              >
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-primary/10 flex items-center justify-center mb-2 md:mb-4 mx-auto">
                  <channel.icon className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                </div>
                <span className="text-sm md:text-base font-medium text-foreground">{channel.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact-form" className="py-12 md:py-20 px-4 bg-gradient-to-br from-primary/5 via-background to-primary/10">
        <div className="max-w-3xl mx-auto text-center">
          <ShoppingBag className="w-12 h-12 md:w-16 md:h-16 text-primary mx-auto mb-4 md:mb-6" />
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4 md:mb-6 px-2">
            Bereit, deinen Laden zu <span className="text-primary">entlasten</span>?
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

export default Einzelhandel;