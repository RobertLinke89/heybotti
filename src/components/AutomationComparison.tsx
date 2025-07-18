import { X, Check, ArrowRight } from 'lucide-react';
import { useState, useEffect } from 'react';

const AutomationComparison = () => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [showAutomated, setShowAutomated] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setShowAutomated(prev => !prev);
        setIsAnimating(false);
      }, 500);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Der Unterschied ist deutlich
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Sehen Sie selbst, wie Automatisierung Ihre Prozesse transformiert
          </p>
        </div>
        
        <div className="relative">
          {/* Animation Container */}
          <div className="flex items-center justify-center mb-8">
            <div className="flex items-center gap-4 bg-card rounded-full px-6 py-3 border border-border">
              <span className={`text-sm font-medium transition-colors duration-300 ${!showAutomated ? 'text-destructive' : 'text-muted-foreground'}`}>
                Ohne Automatisierung
              </span>
              <div className="flex items-center gap-2">
                <ArrowRight className={`w-5 h-5 transition-all duration-500 ${isAnimating ? 'text-primary animate-pulse' : 'text-muted-foreground'}`} />
              </div>
              <span className={`text-sm font-medium transition-colors duration-300 ${showAutomated ? 'text-primary' : 'text-muted-foreground'}`}>
                Mit botti Automatisierung
              </span>
            </div>
          </div>

          {/* Animated Comparison View */}
          <div className="relative min-h-[1000px] overflow-hidden">
            <div className={`absolute inset-0 transition-all duration-1000 ${showAutomated ? 'opacity-0 transform scale-95' : 'opacity-100 transform scale-100'}`}>
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Automation OFF */}
                <div className="space-y-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-full bg-destructive/20 flex items-center justify-center">
                      <X className="w-6 h-6 text-destructive" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground">Ohne Automatisierung</h3>
                      <p className="text-muted-foreground">Chaos und Ineffizienz</p>
                    </div>
                  </div>
                  
                  <div className="bg-card rounded-xl p-6 border border-border">
                    <img 
                      src="/lovable-uploads/b7db09fb-6bc3-4de7-9976-ea9b53855bf5.png" 
                      alt="Automation OFF - Chaotic processes"
                      className="w-full h-auto rounded-lg"
                    />
                    <div className="mt-6 space-y-3">
                      <div className="flex items-center gap-3">
                        <X className="w-5 h-5 text-destructive" />
                        <span className="text-foreground">Verwirrende Kommunikationswege</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <X className="w-5 h-5 text-destructive" />
                        <span className="text-foreground">Zeitverlust durch manuelle Prozesse</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <X className="w-5 h-5 text-destructive" />
                        <span className="text-foreground">Fehleranfällige Arbeitsabläufe</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <X className="w-5 h-5 text-destructive" />
                        <span className="text-foreground">Unstrukturierte Zusammenarbeit</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Placeholder for second column in OFF state */}
                <div className="space-y-6 opacity-30">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center">
                      <Check className="w-6 h-6 text-muted-foreground" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-muted-foreground">Automatisierung möglich</h3>
                      <p className="text-muted-foreground">Potential wartet</p>
                    </div>
                  </div>
                  <div className="bg-muted/20 rounded-xl p-6 border border-border">
                    <div className="w-full h-48 bg-muted/30 rounded-lg animate-pulse"></div>
                  </div>
                </div>
              </div>
            </div>

            <div className={`absolute inset-0 transition-all duration-1000 ${showAutomated ? 'opacity-100 transform scale-100' : 'opacity-0 transform scale-95'}`}>
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Previous state ghost */}
                <div className="space-y-6 opacity-30">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center">
                      <X className="w-6 h-6 text-muted-foreground" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-muted-foreground">Vergangenheit</h3>
                      <p className="text-muted-foreground">Überwunden</p>
                    </div>
                  </div>
                  <div className="bg-muted/20 rounded-xl p-6 border border-border">
                    <div className="w-full h-48 bg-muted/30 rounded-lg"></div>
                  </div>
                </div>

                {/* Automation ON */}
                <div className="space-y-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                      <Check className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground">Mit botti Automatisierung</h3>
                      <p className="text-muted-foreground">Klarheit und Effizienz</p>
                    </div>
                  </div>
                  
                  <div className="bg-card rounded-xl p-6 border border-border shadow-lg">
                    <img 
                      src="/lovable-uploads/6adf596e-2d5c-4bf8-b8a3-472cbdb6b045.png" 
                      alt="Automation ON - Streamlined processes"
                      className="w-full h-auto rounded-lg"
                    />
                    <div className="mt-6 space-y-3">
                      <div className="flex items-center gap-3">
                        <Check className="w-5 h-5 text-primary" />
                        <span className="text-foreground">Klare, strukturierte Prozesse</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Check className="w-5 h-5 text-primary" />
                        <span className="text-foreground">Automatisierte Arbeitsabläufe</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Check className="w-5 h-5 text-primary" />
                        <span className="text-foreground">Nahtlose Teamkommunikation</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Check className="w-5 h-5 text-primary" />
                        <span className="text-foreground">Mehr Zeit für das Wesentliche</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Check className="w-5 h-5 text-primary" />
                        <span className="text-foreground">Reduzierte Fehlerquote</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Check className="w-5 h-5 text-primary" />
                        <span className="text-foreground">Kosteneinsparungen</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Check className="w-5 h-5 text-primary" />
                        <span className="text-foreground">Bessere Skalierbarkeit</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Check className="w-5 h-5 text-primary" />
                        <span className="text-foreground">Erhöhte Produktivität</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Check className="w-5 h-5 text-primary" />
                        <span className="text-foreground">24/7 Verfügbarkeit</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Check className="w-5 h-5 text-primary" />
                        <span className="text-foreground">Verbesserte Datenqualität</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Customer Testimonial */}
        <div className="mt-16 bg-primary/10 rounded-2xl p-8 lg:p-12">
          <div className="max-w-4xl mx-auto text-center">
            <blockquote className="text-lg lg:text-xl text-foreground leading-relaxed mb-6">
              "Ich frag mich heute, wie wir das vorher überhaupt gemacht haben. Seit wir 
              unsere Prozesse automatisiert haben, läuft vieles einfach im Hintergrund, 
              ganz ohne Nachhaken oder Kontrollchaos. Das Beste: Mein Team ist viel 
              entspannter und hat endlich den Kopf frei für die wirklich wichtigen 
              Themen. Ich kann's nur jedem empfehlen, der weniger Stress und mehr 
              Klarheit im Alltag will."
            </blockquote>
            <cite className="text-foreground font-semibold">
              Vera, BLACK FLASH ARCHERY GmbH
            </cite>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AutomationComparison;