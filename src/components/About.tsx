
const About = () => {
  return (
    <section id="about" className="bg-secondary py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-6 font-raleway">
            So gehen wir <span className="text-primary">vor</span>
          </h2>
        </div>
        
        <div className="space-y-16">
          {/* Step 01 */}
          <div className="flex flex-col lg:flex-row items-start gap-8">
            <div className="flex-shrink-0">
              <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center">
                <span className="text-primary font-bold text-3xl font-raleway">01</span>
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-foreground mb-4 font-raleway">
                Analyse & Zieldefinition
              </h3>
              <p className="text-muted-foreground font-raleway font-light leading-relaxed text-lg">
                Am Anfang eines Automatisierungsprojekts steht die gründliche Analyse der bestehenden Prozesse. Es gilt herauszufinden, welche Aufgaben regelmäßig, zeitaufwendig und fehleranfällig sind – typische Kandidaten für eine Automatisierung. Gleichzeitig sollen klare Ziele definiert werden: Möchte man Zeit sparen, Fehler reduzieren oder die Skalierbarkeit erhöhen? Diese Zieldefinition bildet die Grundlage für alle weiteren Schritte.
              </p>
            </div>
          </div>

          {/* Step 02 */}
          <div className="flex flex-col lg:flex-row items-start gap-8">
            <div className="flex-shrink-0">
              <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center">
                <span className="text-primary font-bold text-3xl font-raleway">02</span>
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-foreground mb-4 font-raleway">
                Auswahl der passenden Tools & Technologien
              </h3>
              <p className="text-muted-foreground font-raleway font-light leading-relaxed text-lg">
                Im nächsten Schritt wird geprüft, welche Tools und Technologien sich für die geplanten Automatisierungen eignen. Dabei ist wichtig, dass die Lösungen zu den bestehenden Systemen passen und die gewünschten Schnittstellen vorhanden sind. Ob Robotic Process Automation (RPA), Low-Code-Plattformen oder klassische API-Verknüpfungen – entscheidend ist, dass die Technologie benutzerfreundlich, sicher und langfristig skalierbar ist.
              </p>
            </div>
          </div>

          {/* Step 03 */}
          <div className="flex flex-col lg:flex-row items-start gap-8">
            <div className="flex-shrink-0">
              <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center">
                <span className="text-primary font-bold text-3xl font-raleway">03</span>
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-foreground mb-4 font-raleway">
                Umsetzung & Testphase
              </h3>
              <p className="text-muted-foreground font-raleway font-light leading-relaxed text-lg">
                Mit einem klaren Ziel und den richtigen Tools startet die technische Umsetzung. Zunächst empfiehlt es sich, mit einem kleinen Pilotprozess zu beginnen. Dieser wird automatisiert, getestet und mit realen Daten durchgespielt. Das Feedback der betroffenen Mitarbeitenden ist dabei besonders wertvoll, um mögliche Stolpersteine frühzeitig zu erkennen und zu beheben.
              </p>
            </div>
          </div>

          {/* Step 04 */}
          <div className="flex flex-col lg:flex-row items-start gap-8">
            <div className="flex-shrink-0">
              <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center">
                <span className="text-primary font-bold text-3xl font-raleway">04</span>
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-foreground mb-4 font-raleway">
                Rollout & kontinuierliche Verbesserung
              </h3>
              <p className="text-muted-foreground font-raleway font-light leading-relaxed text-lg">
                Sobald die Tests erfolgreich sind, wird der automatisierte Prozess live geschaltet. Wichtig ist es, das Team mitzunehmen, Schulungen anzubieten und den Nutzen transparent zu kommunizieren. Automatisierung ist kein einmaliger Akt, sondern ein kontinuierlicher Prozess – regelmäßige Überprüfungen, Optimierungen und die Erweiterung auf weitere Prozesse sorgen für langfristigen Erfolg.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
