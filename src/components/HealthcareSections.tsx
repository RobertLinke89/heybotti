import { Card } from "@/components/ui/card";
import { CheckCircle, XCircle } from "lucide-react";

const HealthcareSections = () => {
  return (
    <div className="bg-background">
      {/* Section 1: Was viele Praxen heute erleben */}
      <section className="py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-8 font-raleway text-center">
            Was viele Praxen heute erleben
          </h2>
          <div className="prose-lg text-muted-foreground space-y-6 font-raleway leading-relaxed">
            <p>
              Der Tag ist voll, das Team bemüht, die Patienten anspruchsvoll – und doch fühlt sich vieles zu schwer an. Nicht, weil Sie schlecht organisiert wären. Sondern, weil zu viele Aufgaben gleichzeitig passieren und zu viele Systeme nebeneinander stehen, statt miteinander zu arbeiten.
            </p>
            <p>
              Termine, Abrechnungen, Dokumentation, Rückfragen, Krankmeldungen, Kursplanung, Telefonate – alles wichtig, alles dringend. Und immer das Gefühl, dass etwas liegen bleibt.
            </p>
            <p className="font-medium text-foreground">
              Viele Praxen berichten, dass sie heute mehr Zeit mit Organisation verbringen als mit dem, wofür sie eigentlich existieren: Menschen helfen.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: Das Problem ist nicht das Team */}
      <section className="py-20 lg:py-28 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-8 font-raleway text-center">
            Das Problem ist nicht das Team – sondern die Struktur
          </h2>
          <div className="prose-lg text-muted-foreground space-y-6 font-raleway leading-relaxed">
            <p>
              In den meisten Betrieben gibt es bereits Software für fast alles: Buchhaltung, Kalender, CRM, Kursbuchung, Tools für Kommunikation. Aber nichts davon ist miteinander verbunden.
            </p>
            <p>
              Dadurch entstehen doppelte Eingaben, ständige Abstimmungen und ein Alltag, der vom Wissen einzelner Personen abhängt. Wenn jemand ausfällt, steht plötzlich alles still. Nicht, weil die Praxis unfähig wäre – sondern weil niemand Zeit hat, das Puzzle zusammenzuhalten.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3: Was heybotti macht */}
      <section className="py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-8 font-raleway text-center">
            Was heybotti macht
          </h2>
          <div className="prose-lg text-muted-foreground space-y-6 font-raleway leading-relaxed">
            <p>
              Wir verbinden Ihre bestehenden Systeme und lassen KI die Aufgaben übernehmen, die Ihren Alltag schwer machen – leise, zuverlässig und im Hintergrund.
            </p>
            
            <div className="flex flex-col gap-3 my-8">
              <div className="flex items-center gap-3">
                <XCircle className="w-5 h-5 text-destructive flex-shrink-0" />
                <span>Keine neue Plattform.</span>
              </div>
              <div className="flex items-center gap-3">
                <XCircle className="w-5 h-5 text-destructive flex-shrink-0" />
                <span>Keine radikale Umstellung.</span>
              </div>
              <div className="flex items-center gap-3">
                <XCircle className="w-5 h-5 text-destructive flex-shrink-0" />
                <span>Keine zusätzlichen Tools, die niemand bedienen will.</span>
              </div>
            </div>

            <p className="font-semibold text-foreground text-xl">
              Sondern: Ruhe, Struktur und Entlastung – durch das, was Sie bereits haben.
            </p>
          </div>
        </div>
      </section>

      {/* Section 4: Wie sich Ihre Arbeit dadurch verändert */}
      <section className="py-20 lg:py-28 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-8 font-raleway text-center">
            Wie sich Ihre Arbeit dadurch verändert
          </h2>
          <div className="prose-lg text-muted-foreground space-y-6 font-raleway leading-relaxed">
            <p>
              Praxisinhaber, Teams und Trainer erzählen uns nach der Einführung oft das Gleiche: Der Alltag wird ruhiger. Weniger Hetze, weniger Nachfragen, weniger „Kannst du kurz?"
            </p>
            <p>
              Informationen sind da, wo sie hingehören. Abläufe laufen, ohne dass sie jemand tragen muss.
            </p>
            <p className="font-medium text-foreground">
              Und plötzlich entsteht Raum – für Gespräche mit Patienten, für Planung, für Qualität. Und für Momente, in denen man nicht nur reagiert, sondern gestalten kann.
            </p>
          </div>
        </div>
      </section>

      {/* Section 5: Ein erster Schritt reicht */}
      <section className="py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-8 font-raleway text-center">
            Ein erster Schritt reicht
          </h2>
          <div className="prose-lg text-muted-foreground space-y-6 font-raleway leading-relaxed">
            <p>
              Wir starten nicht mit einer großen Lösung, sondern mit einem Gespräch. Wir hören zu, verstehen Ihren Alltag, Ihre Systeme und Ihre Kapazitäten. Dann zeigen wir Ihnen, wo Automatisierung sofort entlastet – ohne Risiko, ohne Umbau.
            </p>
            <p className="font-medium text-foreground">
              Manchmal reicht schon ein kleiner Eingriff, um den Druck fühlbar zu senken.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-primary/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xl lg:text-2xl text-foreground font-raleway font-medium leading-relaxed">
            Wenn Sie neugierig sind, wie Entlastung in Ihrem Betrieb aussehen könnte – lassen Sie uns sprechen.
          </p>
        </div>
      </section>
    </div>
  );
};

export default HealthcareSections;
