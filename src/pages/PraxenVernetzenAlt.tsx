import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import ProjectForm from '@/components/ProjectForm';
import { 
  ArrowRight,
  HeartPulse,
  Puzzle,
  Sparkles,
  Sunrise,
  MessageCircle,
  Clock,
  Phone,
  FileText,
  Calendar,
  Users,
  AlertCircle,
  Unplug,
  RefreshCw,
  Brain,
  Shield,
  Zap,
  Heart,
  Lightbulb,
  Target,
  Handshake
} from 'lucide-react';
import heroHealthcare from '@/assets/hero-healthcare.jpg';

const scrollToContact = () => {
  const element = document.getElementById('contact-form');
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

const PraxenVernetzenAlt = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-24 md:pt-32 pb-16 md:pb-24 px-4 overflow-hidden">
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
          <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-primary/10 text-primary text-xs md:text-sm font-medium mb-4 md:mb-6 animate-fade-in">
            <HeartPulse className="w-3 h-3 md:w-4 md:h-4" />
            Für Gesundheitspraxen
          </div>
          
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 md:mb-6 leading-tight">
            Damit Ihr Alltag leichter wird –
            <br />
            <span className="text-primary">nicht komplexer.</span>
          </h1>
          
          <p className="text-base md:text-xl text-muted-foreground mb-2 max-w-2xl mx-auto leading-relaxed px-2">
            KI-Automatisierungen für Gesundheitszentren, Physio-Praxen und Bewegungsstudios.
          </p>
          <p className="text-base md:text-lg text-muted-foreground/80 mb-8 md:mb-10 max-w-2xl mx-auto px-2 flex items-center justify-center gap-2">
            <Zap className="w-4 h-4 text-primary" />
            Mit den Tools, die Sie bereits nutzen.
          </p>
          
          <Button 
            size="lg" 
            onClick={scrollToContact}
            className="text-base md:text-lg px-6 md:px-8 py-5 md:py-6 rounded-full shadow-lg hover:shadow-xl transition-shadow"
          >
            Gesprächstermin vereinbaren
            <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5" />
          </Button>
        </div>
      </section>

      {/* Section 1: Was viele Praxen heute erleben */}
      <section className="py-14 md:py-24 px-4 bg-muted/30">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10 md:mb-14">
            <div className="inline-flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-primary/10 mb-4 md:mb-6">
              <MessageCircle className="w-7 h-7 md:w-8 md:h-8 text-primary" />
            </div>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 md:mb-4">
              Was viele Praxen <span className="text-primary">heute erleben</span>
            </h2>
          </div>
          
          <div className="bg-card border border-border rounded-2xl md:rounded-3xl p-6 md:p-10 mb-8">
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6">
              Der Tag ist voll, das Team bemüht, die Patienten anspruchsvoll – und doch fühlt sich vieles zu schwer an. 
              Nicht, weil Sie schlecht organisiert wären. Sondern, weil zu viele Aufgaben gleichzeitig passieren und 
              zu viele Systeme nebeneinander stehen, statt miteinander zu arbeiten.
            </p>
            
            {/* Pain Points Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 mb-6">
              {[
                { icon: Calendar, label: "Termine" },
                { icon: FileText, label: "Abrechnungen" },
                { icon: Clock, label: "Dokumentation" },
                { icon: Phone, label: "Rückfragen" },
                { icon: Users, label: "Krankmeldungen" },
                { icon: AlertCircle, label: "Kursplanung" }
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-2 px-3 py-2 md:px-4 md:py-3 rounded-lg bg-muted/50 text-sm md:text-base text-muted-foreground">
                  <item.icon className="w-4 h-4 text-primary/70 flex-shrink-0" />
                  {item.label}
                </div>
              ))}
            </div>
            
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Alles wichtig, alles dringend. Und immer das Gefühl, dass etwas liegen bleibt.
            </p>
          </div>
          
          <div className="flex items-start gap-4 p-5 md:p-6 rounded-xl bg-primary/5 border border-primary/10">
            <Heart className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
            <p className="text-base md:text-lg text-foreground">
              Viele Praxen berichten, dass sie heute mehr Zeit mit Organisation verbringen als mit dem, wofür sie 
              eigentlich existieren: <span className="font-semibold text-primary">Menschen helfen.</span>
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: Das Problem ist nicht das Team */}
      <section className="py-14 md:py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <div className="inline-flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-xl bg-primary/10 mb-4 md:mb-6">
                <Puzzle className="w-6 h-6 md:w-7 md:h-7 text-primary" />
              </div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4 md:mb-6">
                Das Problem ist nicht das Team – <span className="text-primary">sondern die Struktur</span>
              </h2>
              
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-4">
                In den meisten Betrieben gibt es bereits Software für fast alles: Buchhaltung, Kalender, CRM, 
                Kursbuchung, Tools für Kommunikation.
              </p>
              <p className="text-base md:text-lg text-foreground font-medium">
                Aber nichts davon ist miteinander verbunden.
              </p>
            </div>
            
            <div className="space-y-4">
              {[
                { icon: RefreshCw, text: "Doppelte Eingaben in verschiedenen Systemen", color: "text-destructive" },
                { icon: Users, text: "Ständige Abstimmungen zwischen Teammitgliedern", color: "text-destructive" },
                { icon: Brain, text: "Alltag hängt vom Wissen einzelner Personen ab", color: "text-destructive" }
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-4 p-4 md:p-5 rounded-xl bg-card border border-border">
                  <div className="w-10 h-10 rounded-lg bg-destructive/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className={`w-5 h-5 ${item.color}`} />
                  </div>
                  <p className="text-sm md:text-base text-muted-foreground pt-2">{item.text}</p>
                </div>
              ))}
              
              <div className="p-4 md:p-5 rounded-xl bg-muted/50 border border-border">
                <p className="text-sm md:text-base text-muted-foreground italic">
                  „Wenn jemand ausfällt, steht plötzlich alles still. Nicht, weil die Praxis unfähig wäre – 
                  <span className="text-foreground font-medium"> sondern weil niemand Zeit hat, das Puzzle zusammenzuhalten.</span>"
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Was heybotti macht */}
      <section className="py-14 md:py-24 px-4 bg-gradient-to-br from-primary/5 via-background to-primary/10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10 md:mb-14">
            <div className="inline-flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-primary/10 mb-4 md:mb-6">
              <Sparkles className="w-7 h-7 md:w-8 md:h-8 text-primary" />
            </div>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 md:mb-4">
              Was <span className="text-primary">heybotti</span> macht
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
              Wir verbinden Ihre bestehenden Systeme und lassen KI die Aufgaben übernehmen, die Ihren Alltag 
              schwer machen – <span className="text-foreground">leise, zuverlässig und im Hintergrund.</span>
            </p>
          </div>
          
          {/* What we don't do */}
          <div className="grid md:grid-cols-3 gap-4 md:gap-6 mb-8">
            {[
              { icon: Unplug, text: "Keine neue Plattform" },
              { icon: RefreshCw, text: "Keine radikale Umstellung" },
              { icon: AlertCircle, text: "Keine Tools, die niemand bedienen will" }
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-3 p-4 md:p-5 rounded-xl bg-card border border-border">
                <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-5 h-5 text-muted-foreground" />
                </div>
                <p className="text-sm md:text-base text-muted-foreground">{item.text}</p>
              </div>
            ))}
          </div>
          
          {/* What we do */}
          <div className="bg-primary/10 border border-primary/20 rounded-2xl md:rounded-3xl p-6 md:p-10 text-center">
            <p className="text-lg md:text-xl text-foreground font-medium mb-4">Sondern:</p>
            <div className="flex flex-wrap justify-center gap-3 md:gap-4">
              {[
                { icon: Shield, text: "Ruhe" },
                { icon: Target, text: "Struktur" },
                { icon: Zap, text: "Entlastung" }
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-2 px-4 py-2 md:px-5 md:py-3 rounded-full bg-primary/20 text-primary font-medium">
                  <item.icon className="w-4 h-4 md:w-5 md:h-5" />
                  {item.text}
                </div>
              ))}
            </div>
            <p className="text-base md:text-lg text-muted-foreground mt-4">
              – durch das, was Sie bereits haben.
            </p>
          </div>
        </div>
      </section>

      {/* Section 4: Wie sich Ihre Arbeit verändert */}
      <section className="py-14 md:py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10 md:mb-14">
            <div className="inline-flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-primary/10 mb-4 md:mb-6">
              <Sunrise className="w-7 h-7 md:w-8 md:h-8 text-primary" />
            </div>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 md:mb-4">
              Wie sich Ihre Arbeit dadurch <span className="text-primary">verändert</span>
            </h2>
            <p className="text-base md:text-lg text-muted-foreground">
              Praxisinhaber, Teams und Trainer erzählen uns nach der Einführung oft das Gleiche:
            </p>
          </div>
          
          <div className="bg-card border border-primary/20 rounded-2xl md:rounded-3xl p-6 md:p-10 mb-8 text-center">
            <p className="text-xl md:text-2xl lg:text-3xl text-foreground font-bold leading-relaxed">
              Der Alltag wird ruhiger.
            </p>
            <p className="text-lg md:text-xl text-muted-foreground mt-2">
              Weniger Hetze, weniger Nachfragen, weniger „Kannst du kurz?"
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-4 md:gap-6 mb-8">
            {[
              { icon: Target, title: "Informationen am richtigen Ort", text: "Alles ist da, wo es hingehört – ohne Suchen." },
              { icon: Zap, title: "Abläufe, die laufen", text: "Ohne dass sie jemand tragen muss." },
              { icon: Users, title: "Raum für Menschen", text: "Für Gespräche, Planung und echte Qualität." },
              { icon: Lightbulb, title: "Vom Reagieren zum Gestalten", text: "Endlich Zeit für das, was wirklich zählt." }
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-4 p-5 md:p-6 rounded-xl bg-muted/30 border border-border hover:border-primary/30 transition-colors">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-base md:text-lg font-semibold text-foreground mb-1">{item.title}</h3>
                  <p className="text-sm md:text-base text-muted-foreground">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: Ein erster Schritt reicht */}
      <section className="py-14 md:py-24 px-4 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-5 gap-8 md:gap-12 items-center">
            <div className="md:col-span-3">
              <div className="inline-flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-xl bg-primary/10 mb-4 md:mb-6">
                <Handshake className="w-6 h-6 md:w-7 md:h-7 text-primary" />
              </div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4 md:mb-6">
                Ein erster Schritt <span className="text-primary">reicht</span>
              </h2>
              
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-4">
                Wir starten nicht mit einer großen Lösung, sondern mit einem Gespräch. Wir hören zu, verstehen 
                Ihren Alltag, Ihre Systeme und Ihre Kapazitäten.
              </p>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6">
                Dann zeigen wir Ihnen, wo Automatisierung sofort entlastet – ohne Risiko, ohne Umbau.
              </p>
              
              <div className="inline-flex items-center gap-3 px-5 py-3 rounded-xl bg-primary/10 border border-primary/20">
                <Zap className="w-5 h-5 text-primary" />
                <p className="text-base md:text-lg text-foreground font-medium">
                  Manchmal reicht schon ein kleiner Eingriff, um den Druck fühlbar zu senken.
                </p>
              </div>
            </div>
            
            <div className="md:col-span-2 flex justify-center">
              <div className="relative">
                <div className="w-40 h-40 md:w-48 md:h-48 rounded-full bg-primary/10 flex items-center justify-center">
                  <div className="w-28 h-28 md:w-36 md:h-36 rounded-full bg-primary/20 flex items-center justify-center">
                    <div className="w-16 h-16 md:w-24 md:h-24 rounded-full bg-primary flex items-center justify-center">
                      <ArrowRight className="w-8 h-8 md:w-10 md:h-10 text-primary-foreground" />
                    </div>
                  </div>
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary/30 animate-pulse" />
                <div className="absolute -bottom-2 -left-2 w-6 h-6 rounded-full bg-primary/20 animate-pulse" style={{ animationDelay: '0.5s' }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section with Contact Form */}
      <section id="contact-form" className="py-14 md:py-24 px-4 bg-gradient-to-br from-primary/5 via-background to-primary/10">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <div className="inline-flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-primary/10 mb-4 md:mb-6">
              <HeartPulse className="w-7 h-7 md:w-8 md:h-8 text-primary" />
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4 px-2">
              Wenn Sie neugierig sind, wie <span className="text-primary">Entlastung</span> in Ihrem Betrieb aussehen könnte
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground">
              – lassen Sie uns sprechen.
            </p>
          </div>
          
          <ProjectForm />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PraxenVernetzenAlt;
