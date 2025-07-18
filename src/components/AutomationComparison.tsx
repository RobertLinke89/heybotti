import { X, Check } from 'lucide-react';

const AutomationComparison = () => {
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
            
            <div className="bg-card rounded-xl p-6 border border-border">
              <img 
                src="/lovable-uploads/51e3230c-fe8a-48fc-9469-fb78e8ce0d4e.png" 
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
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground mb-6">
            Bereit für den Wandel? Lassen Sie uns Ihre Prozesse optimieren.
          </p>
          <button className="bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary/90 transition-colors">
            Ruf mich an
          </button>
        </div>
      </div>
    </section>
  );
};

export default AutomationComparison;