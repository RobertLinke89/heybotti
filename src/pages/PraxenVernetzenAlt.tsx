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
  MessageCircle
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
            Damit Ihr Alltag leichter wird –
            <br />
            <span className="text-primary">nicht komplexer.</span>
          </h1>
          
          <p className="text-base md:text-xl text-muted-foreground mb-2 max-w-2xl mx-auto leading-relaxed px-2">
            KI-Automatisierungen für Gesundheitszentren, Physio-Praxen und Bewegungsstudios.
          </p>
          <p className="text-base md:text-lg text-muted-foreground mb-6 md:mb-8 max-w-2xl mx-auto px-2">
            Mit den Tools, die Sie bereits nutzen.
          </p>
          
          <Button 
            size="lg" 
            onClick={scrollToContact}
            className="text-base md:text-lg px-6 md:px-8 py-5 md:py-6 rounded-full"
          >
            Gesprächstermin vereinbaren
            <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5" />
          </Button>
        </div>
      </section>

      {/* Section 1: Was viele Praxen heute erleben */}
      <section className="py-12 md:py-20 px-4 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-primary/10 flex items-center justify-center">
              <MessageCircle className="w-5 h-5 md:w-6 md:h-6 text-primary" />
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">
              Was viele Praxen <span className="text-primary">heute erleben</span>
            </h2>
          </div>
          
          <div className="space-y-4 text-base md:text-lg text-muted-foreground leading-relaxed">
            <p>
              Der Tag ist voll, das Team bemüht, die Patienten anspruchsvoll – und doch fühlt sich vieles zu schwer an. 
              Nicht, weil Sie schlecht organisiert wären. Sondern, weil zu viele Aufgaben gleichzeitig passieren und 
              zu viele Systeme nebeneinander stehen, statt miteinander zu arbeiten.
            </p>
            <p>
              Termine, Abrechnungen, Dokumentation, Rückfragen, Krankmeldungen, Kursplanung, Telefonate – alles wichtig, 
              alles dringend. Und immer das Gefühl, dass etwas liegen bleibt.
            </p>
            <p>
              Viele Praxen berichten, dass sie heute mehr Zeit mit Organisation verbringen als mit dem, wofür sie 
              eigentlich existieren: <span className="text-foreground font-medium">Menschen helfen.</span>
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: Das Problem ist nicht das Team */}
      <section className="py-12 md:py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-primary/10 flex items-center justify-center">
              <Puzzle className="w-5 h-5 md:w-6 md:h-6 text-primary" />
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">
              Das Problem ist nicht das Team – <span className="text-primary">sondern die Struktur</span>
            </h2>
          </div>
          
          <div className="space-y-4 text-base md:text-lg text-muted-foreground leading-relaxed">
            <p>
              In den meisten Betrieben gibt es bereits Software für fast alles: Buchhaltung, Kalender, CRM, 
              Kursbuchung, Tools für Kommunikation. Aber nichts davon ist miteinander verbunden.
            </p>
            <p>
              Dadurch entstehen doppelte Eingaben, ständige Abstimmungen und ein Alltag, der vom Wissen einzelner 
              Personen abhängt. Wenn jemand ausfällt, steht plötzlich alles still. Nicht, weil die Praxis unfähig 
              wäre – <span className="text-foreground font-medium">sondern weil niemand Zeit hat, das Puzzle zusammenzuhalten.</span>
            </p>
          </div>
        </div>
      </section>

      {/* Section 3: Was heybotti macht */}
      <section className="py-12 md:py-20 px-4 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-primary/10 flex items-center justify-center">
              <Sparkles className="w-5 h-5 md:w-6 md:h-6 text-primary" />
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">
              Was <span className="text-primary">heybotti</span> macht
            </h2>
          </div>
          
          <div className="space-y-4 text-base md:text-lg text-muted-foreground leading-relaxed mb-8">
            <p>
              Wir verbinden Ihre bestehenden Systeme und lassen KI die Aufgaben übernehmen, die Ihren Alltag 
              schwer machen – leise, zuverlässig und im Hintergrund.
            </p>
          </div>
          
          <div className="bg-card border border-border rounded-xl md:rounded-2xl p-5 md:p-8 mb-6">
            <ul className="space-y-3 text-base md:text-lg text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">–</span>
                Keine neue Plattform.
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">–</span>
                Keine radikale Umstellung.
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">–</span>
                Keine zusätzlichen Tools, die niemand bedienen will.
              </li>
            </ul>
          </div>
          
          <div className="bg-primary/5 border border-primary/20 rounded-xl md:rounded-2xl p-5 md:p-8">
            <p className="text-base md:text-lg text-foreground font-medium mb-2">Sondern:</p>
            <p className="text-base md:text-lg text-muted-foreground">
              Ruhe, Struktur und Entlastung – <span className="text-foreground font-medium">durch das, was Sie bereits haben.</span>
            </p>
          </div>
        </div>
      </section>

      {/* Section 4: Wie sich Ihre Arbeit verändert */}
      <section className="py-12 md:py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-primary/10 flex items-center justify-center">
              <Sunrise className="w-5 h-5 md:w-6 md:h-6 text-primary" />
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">
              Wie sich Ihre Arbeit dadurch <span className="text-primary">verändert</span>
            </h2>
          </div>
          
          <div className="space-y-4 text-base md:text-lg text-muted-foreground leading-relaxed">
            <p>
              Praxisinhaber, Teams und Trainer erzählen uns nach der Einführung oft das Gleiche:
            </p>
            <p className="text-foreground font-medium text-lg md:text-xl">
              Der Alltag wird ruhiger. Weniger Hetze, weniger Nachfragen, weniger „Kannst du kurz?"
            </p>
            <p>
              Informationen sind da, wo sie hingehören.
              <br />
              Abläufe laufen, ohne dass sie jemand tragen muss.
            </p>
            <p>
              Und plötzlich entsteht Raum – für Gespräche mit Patienten, für Planung, für Qualität. 
              Und für Momente, in denen man nicht nur reagiert, <span className="text-foreground font-medium">sondern gestalten kann.</span>
            </p>
          </div>
        </div>
      </section>

      {/* Section 5: Ein erster Schritt reicht */}
      <section className="py-12 md:py-20 px-4 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-primary/10 flex items-center justify-center">
              <ArrowRight className="w-5 h-5 md:w-6 md:h-6 text-primary" />
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">
              Ein erster Schritt <span className="text-primary">reicht</span>
            </h2>
          </div>
          
          <div className="space-y-4 text-base md:text-lg text-muted-foreground leading-relaxed">
            <p>
              Wir starten nicht mit einer großen Lösung, sondern mit einem Gespräch. Wir hören zu, verstehen 
              Ihren Alltag, Ihre Systeme und Ihre Kapazitäten. Dann zeigen wir Ihnen, wo Automatisierung 
              sofort entlastet – ohne Risiko, ohne Umbau.
            </p>
            <p className="text-foreground font-medium">
              Manchmal reicht schon ein kleiner Eingriff, um den Druck fühlbar zu senken.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section with Contact Form */}
      <section id="contact-form" className="py-12 md:py-20 px-4 bg-gradient-to-br from-primary/5 via-background to-primary/10">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4 md:mb-6 px-2">
              Wenn Sie neugierig sind, wie <span className="text-primary">Entlastung</span> in Ihrem Betrieb aussehen könnte – lassen Sie uns sprechen.
            </h2>
          </div>
          
          <ProjectForm />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PraxenVernetzenAlt;
