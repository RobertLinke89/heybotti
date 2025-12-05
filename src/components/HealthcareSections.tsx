import { Card } from "@/components/ui/card";
import { X, Check, ArrowRight, MessageCircle, FileText, Phone, Calendar, Users, Clock } from "lucide-react";

const HealthcareSections = () => {
  return (
    <div className="bg-background">
      {/* Section 1: Was viele Praxen heute erleben */}
      <section className="py-24 lg:py-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
                Die Realität
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6 font-raleway leading-tight">
                Was viele Praxen heute erleben
              </h2>
              <div className="space-y-5 text-muted-foreground font-raleway leading-relaxed text-lg">
                <p>
                  Der Tag ist voll, das Team bemüht, die Patienten anspruchsvoll – und doch fühlt sich vieles zu schwer an. Nicht, weil Sie schlecht organisiert wären. Sondern, weil zu viele Aufgaben gleichzeitig passieren und zu viele Systeme nebeneinander stehen, statt miteinander zu arbeiten.
                </p>
                <p className="font-medium text-foreground">
                  Viele Praxen berichten, dass sie heute mehr Zeit mit Organisation verbringen als mit dem, wofür sie eigentlich existieren: Menschen helfen.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Calendar, label: "Termine" },
                { icon: FileText, label: "Dokumentation" },
                { icon: Phone, label: "Telefonate" },
                { icon: MessageCircle, label: "Rückfragen" },
                { icon: Users, label: "Kursplanung" },
                { icon: Clock, label: "Abrechnungen" },
              ].map((item, index) => (
                <Card 
                  key={index}
                  className="p-5 bg-card border-border/50 hover:border-primary/30 transition-colors duration-300"
                >
                  <item.icon className="w-6 h-6 text-primary mb-3" />
                  <span className="text-sm font-medium text-foreground">{item.label}</span>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Das Problem ist nicht das Team */}
      <section className="py-24 lg:py-32 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
              Das eigentliche Problem
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6 font-raleway leading-tight">
              Das Problem ist nicht das Team –{" "}
              <span className="text-primary">sondern die Struktur</span>
            </h2>
          </div>
          <Card className="p-8 lg:p-12 bg-card border-border/50">
            <div className="space-y-6 text-muted-foreground font-raleway leading-relaxed text-lg">
              <p>
                In den meisten Betrieben gibt es bereits Software für fast alles: Buchhaltung, Kalender, CRM, Kursbuchung, Tools für Kommunikation. <span className="text-foreground font-medium">Aber nichts davon ist miteinander verbunden.</span>
              </p>
              <p>
                Dadurch entstehen doppelte Eingaben, ständige Abstimmungen und ein Alltag, der vom Wissen einzelner Personen abhängt. Wenn jemand ausfällt, steht plötzlich alles still.
              </p>
              <p className="text-foreground font-medium border-l-4 border-primary pl-6 py-2 bg-primary/5 rounded-r-lg">
                Nicht, weil die Praxis unfähig wäre – sondern weil niemand Zeit hat, das Puzzle zusammenzuhalten.
              </p>
            </div>
          </Card>
        </div>
      </section>

      {/* Section 3: Was heybotti macht */}
      <section className="py-24 lg:py-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
              Unsere Lösung
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6 font-raleway">
              Was heybotti macht
            </h2>
            <p className="text-xl text-muted-foreground font-raleway max-w-3xl mx-auto leading-relaxed">
              Wir verbinden Ihre bestehenden Systeme und lassen KI die Aufgaben übernehmen, die Ihren Alltag schwer machen – leise, zuverlässig und im Hintergrund.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* What we DON'T do */}
            <Card className="p-8 bg-card border-border/50">
              <h3 className="text-lg font-semibold text-foreground mb-6 flex items-center gap-2">
                <X className="w-5 h-5 text-destructive" />
                Das machen wir nicht
              </h3>
              <div className="space-y-4">
                {[
                  "Keine neue Plattform.",
                  "Keine radikale Umstellung.",
                  "Keine zusätzlichen Tools, die niemand bedienen will."
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3 text-muted-foreground">
                    <X className="w-4 h-4 text-destructive/60 flex-shrink-0 mt-1" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </Card>

            {/* What we DO */}
            <Card className="p-8 bg-primary/5 border-primary/20">
              <h3 className="text-lg font-semibold text-foreground mb-6 flex items-center gap-2">
                <Check className="w-5 h-5 text-primary" />
                Das bekommen Sie
              </h3>
              <div className="space-y-4">
                {[
                  "Ruhe im Arbeitsalltag",
                  "Klare Struktur ohne Mehraufwand",
                  "Echte Entlastung für Ihr Team"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3 text-foreground">
                    <Check className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          <p className="text-center text-xl lg:text-2xl font-semibold text-foreground font-raleway">
            Ruhe, Struktur und Entlastung –{" "}
            <span className="text-primary">durch das, was Sie bereits haben.</span>
          </p>
        </div>
      </section>

      {/* Section 4: Wie sich Ihre Arbeit dadurch verändert */}
      <section className="py-24 lg:py-32 bg-muted/30">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
              Das Ergebnis
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6 font-raleway">
              Wie sich Ihre Arbeit dadurch verändert
            </h2>
          </div>
          
          <Card className="p-8 lg:p-12 bg-card border-border/50">
            <div className="space-y-8">
              <p className="text-lg text-muted-foreground font-raleway leading-relaxed">
                Praxisinhaber, Teams und Trainer erzählen uns nach der Einführung oft das Gleiche:
              </p>
              
              <div className="grid sm:grid-cols-3 gap-6">
                {[
                  { text: "Weniger Hetze", icon: "🧘" },
                  { text: "Weniger Nachfragen", icon: "💬" },
                  { text: 'Weniger „Kannst du kurz?"', icon: "⏰" },
                ].map((item, index) => (
                  <div key={index} className="text-center p-6 rounded-lg bg-muted/50">
                    <span className="text-3xl mb-3 block">{item.icon}</span>
                    <span className="font-medium text-foreground">{item.text}</span>
                  </div>
                ))}
              </div>

              <div className="border-t border-border pt-8 space-y-4 text-muted-foreground font-raleway leading-relaxed text-lg">
                <p>
                  Informationen sind da, wo sie hingehören. Abläufe laufen, ohne dass sie jemand tragen muss.
                </p>
                <p className="text-foreground font-medium text-xl">
                  Und plötzlich entsteht Raum – für Gespräche mit Patienten, für Planung, für Qualität. Und für Momente, in denen man nicht nur reagiert, sondern gestalten kann.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Section 5: Ein erster Schritt reicht */}
      <section className="py-24 lg:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
              Der nächste Schritt
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-8 font-raleway">
              Ein erster Schritt reicht
            </h2>
            <div className="space-y-6 text-muted-foreground font-raleway leading-relaxed text-lg max-w-3xl mx-auto">
              <p>
                Wir starten nicht mit einer großen Lösung, sondern mit einem Gespräch. Wir hören zu, verstehen Ihren Alltag, Ihre Systeme und Ihre Kapazitäten. Dann zeigen wir Ihnen, wo Automatisierung sofort entlastet – ohne Risiko, ohne Umbau.
              </p>
              <p className="text-foreground font-semibold text-xl">
                Manchmal reicht schon ein kleiner Eingriff, um den Druck fühlbar zu senken.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xl lg:text-2xl text-foreground font-raleway font-medium leading-relaxed mb-2">
            Wenn Sie neugierig sind, wie Entlastung in Ihrem Betrieb aussehen könnte –
          </p>
          <p className="text-2xl lg:text-3xl text-primary font-raleway font-bold flex items-center justify-center gap-2">
            lassen Sie uns sprechen
            <ArrowRight className="w-6 h-6" />
          </p>
        </div>
      </section>
    </div>
  );
};

export default HealthcareSections;
