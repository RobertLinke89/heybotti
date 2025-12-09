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
  TrendingUp,
  BarChart3,
  Truck,
  MapPin,
  MessageSquare,
  AlertTriangle,
  Warehouse,
  Route,
  Timer,
  Fuel,
  FileText,
  Globe
} from 'lucide-react';
import heroLogistik from '@/assets/hero-logistik.jpg';

const scrollToContact = () => {
  const element = document.getElementById('contact-form');
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

const Logistik = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-24 md:pt-32 pb-12 md:pb-20 px-4 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 pointer-events-none">
          <img 
            src={heroLogistik} 
            alt="Moderne Logistik" 
            className="w-full h-full object-cover opacity-50 md:opacity-40 dark:opacity-35 dark:md:opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/50 md:from-background/60 via-background/30 md:via-background/40 to-background" />
        </div>
        
        <div className="absolute top-20 left-10 w-48 md:w-72 h-48 md:h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-64 md:w-96 h-64 md:h-96 bg-primary/3 rounded-full blur-3xl" />
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-primary/10 text-primary text-xs md:text-sm font-medium mb-4 md:mb-6">
            <Truck className="w-3 h-3 md:w-4 md:h-4" />
            Für die Logistik
          </div>
          
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 md:mb-6 leading-tight">
            Weniger Chaos.
            <br />
            <span className="text-primary">Mehr Durchsatz.</span>
          </h1>
          
          <p className="text-base md:text-xl text-muted-foreground mb-6 md:mb-8 max-w-2xl mx-auto leading-relaxed px-2">
            Routenplanung, Lagerverwaltung, Sendungsverfolgung – alles, was euren Warenfluss 
            verlangsamt, läuft ab jetzt automatisch.
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
              Diese Herausforderungen kennen wir aus Gesprächen mit Logistikunternehmen
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {[
              {
                icon: Route,
                title: "Ineffiziente Routen",
                description: "Fahrer fahren Umwege, Leerfahrten kosten Geld und Zeit, keine Echtzeitoptimierung."
              },
              {
                icon: Warehouse,
                title: "Lager-Chaos",
                description: "Artikel werden nicht gefunden, Inventuren dauern ewig, Fehlbestände häufen sich."
              },
              {
                icon: MessageSquare,
                title: "Kundenfragen ohne Ende",
                description: "‚Wo ist mein Paket?' – hunderte Anfragen täglich binden wertvolle Ressourcen."
              },
              {
                icon: FileText,
                title: "Papierkram überall",
                description: "Frachtbriefe, Lieferscheine, Zolldokumente – alles manuell und fehleranfällig."
              },
              {
                icon: AlertTriangle,
                title: "Verspätungen & Ausfälle",
                description: "Keine Vorwarnung bei Problemen, Kunden sind verärgert, Eskalationen häufen sich."
              },
              {
                icon: Users,
                title: "Fahrermangel",
                description: "Zu wenig Personal, zu viele Aufträge, keine Zeit für ordentliche Einarbeitung."
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
              Mehr Effizienz, weniger Kosten, zufriedenere Kunden
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-4 md:gap-8">
            {[
              {
                icon: Route,
                title: "Intelligente Routenoptimierung",
                description: "Automatische Tourenplanung unter Berücksichtigung von Verkehr, Zeitfenstern und Fahrzeugkapazitäten.",
                benefits: ["Bis zu 25% weniger Kilometer", "Echtzeit-Verkehrsanpassung", "Multi-Stopp-Optimierung"]
              },
              {
                icon: Warehouse,
                title: "Smarte Lagerverwaltung",
                description: "Automatische Bestandsführung, optimierte Lagerplätze, Echtzeit-Inventur per Scanner.",
                benefits: ["Artikel in Sekunden finden", "Automatische Nachbestellung", "Lückenlose Rückverfolgung"]
              },
              {
                icon: MapPin,
                title: "Live-Sendungsverfolgung",
                description: "Kunden sehen jederzeit, wo ihre Lieferung ist. Automatische Updates bei Statusänderungen.",
                benefits: ["90% weniger Kundenanfragen", "Proaktive Benachrichtigungen", "Zufriedenere Kunden"]
              },
              {
                icon: FileText,
                title: "Digitale Dokumentation",
                description: "Frachtbriefe, Unterschriften, Fotos – alles digital erfasst und automatisch archiviert.",
                benefits: ["Papierlos unterwegs", "Rechtssichere Archivierung", "Sofortiger Zugriff"]
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

      {/* Efficiency Focus Section */}
      <section className="py-12 md:py-20 px-4 bg-gradient-to-br from-primary/5 via-background to-primary/10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10 md:mb-16">
            <TrendingUp className="w-10 h-10 md:w-12 md:h-12 text-primary mx-auto mb-4 md:mb-6" />
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-3 md:mb-4 px-2">
              Endlich Zeit für das, was zählt: <span className="text-primary">Wachstum</span>
            </h2>
            <p className="text-muted-foreground text-sm md:text-lg max-w-2xl mx-auto px-2">
              Wenn die Prozesse automatisch laufen, könnt ihr euch auf Expansion konzentrieren
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {[
              {
                icon: Fuel,
                title: "Kosten senken",
                description: "Weniger Kraftstoff, weniger Leerfahrten, weniger manuelle Arbeit."
              },
              {
                icon: Timer,
                title: "Schneller liefern",
                description: "Optimierte Routen und Prozesse verkürzen die Lieferzeiten."
              },
              {
                icon: Globe,
                title: "Skalieren",
                description: "Mehr Aufträge abwickeln ohne proportional mehr Personal."
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
                  "Routen werden morgens manuell geplant",
                  "Kunden rufen ständig an: ‚Wo ist mein Paket?'",
                  "Fahrer suchen Adressen und Lieferscheine",
                  "Lagerbestände stimmen nicht mit System überein",
                  "Verspätungen werden erst bemerkt, wenn Kunde anruft",
                  "Disposition verbringt Stunden mit Telefonaten"
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
                  "Routen werden automatisch optimiert in Echtzeit",
                  "Kunden tracken ihre Lieferung selbst online",
                  "Alle Infos auf dem Fahrer-Tablet",
                  "Lagerbestand aktualisiert sich bei jedem Scan",
                  "Proaktive Benachrichtigungen bei Verzögerungen",
                  "Disposition überwacht nur noch Ausnahmen"
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
            Das berichten Logistikunternehmen <span className="text-primary">nach der Einführung</span>
          </h2>
          
          <div className="grid grid-cols-3 gap-3 md:gap-8 mb-8 md:mb-12">
            {[
              { value: "25%", label: "Weniger gefahrene Kilometer", icon: Route },
              { value: "90%", label: "Weniger Kundenanfragen", icon: MessageSquare },
              { value: "35%", label: "Schnellere Auftragsbearbeitung", icon: Timer }
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
              „Unsere Fahrer schaffen jetzt 20% mehr Stopps pro Tour – und sind trotzdem 
              früher zu Hause. Die Kunden sind glücklicher, wir sparen Sprit und Überstunden."
            </blockquote>
            <p className="text-sm md:text-base text-muted-foreground">
              — Geschäftsführer, Paketdienst
            </p>
          </div>
        </div>
      </section>

      {/* Industry Types */}
      <section className="py-12 md:py-20 px-4 bg-muted/30">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-3 md:mb-4">
              Für jede <span className="text-primary">Logistik</span>
            </h2>
            <p className="text-muted-foreground text-sm md:text-lg">
              Unsere Lösungen passen sich euren Anforderungen an
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-2 md:gap-4">
            {[
              "KEP-Dienste",
              "Spedition",
              "Kontraktlogistik",
              "Lagerlogistik",
              "E-Commerce Fulfillment",
              "Kühllogistik",
              "Möbellieferung",
              "Last Mile Delivery",
              "Entsorgungslogistik",
              "Baustellenlogistik"
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
            <Package className="w-10 h-10 md:w-12 md:h-12 text-primary mx-auto mb-4 md:mb-6" />
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
                icon: Warehouse,
                title: "WMS-Systeme",
                description: "SAP, Oracle, Microsoft Dynamics und mehr."
              },
              {
                icon: Truck,
                title: "TMS-Systeme",
                description: "Transporeon, TimoCom, Alpega und andere."
              },
              {
                icon: BarChart3,
                title: "ERP-Systeme",
                description: "Eure bestehende Warenwirtschaft bleibt erhalten."
              },
              {
                icon: MapPin,
                title: "Telematiksysteme",
                description: "GPS-Tracking und Flottenmanagement integriert."
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
          <Truck className="w-10 h-10 md:w-12 md:h-12 text-primary mx-auto mb-4 md:mb-6" />
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-3 md:mb-4">
            Bereit für mehr <span className="text-primary">Effizienz</span>?
          </h2>
          <p className="text-muted-foreground text-sm md:text-lg mb-6 md:mb-8 max-w-xl mx-auto px-2">
            Lass uns gemeinsam herausfinden, wie wir eure Logistik optimieren können. 
            Unverbindlich und kostenlos.
          </p>
          
          <div className="flex justify-center">
            <Button 
              size="lg" 
              onClick={scrollToContact}
              className="text-base md:text-lg px-6 md:px-8 py-5 md:py-6 rounded-full"
            >
              Automatisierung starten
              <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5" />
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Logistik;
