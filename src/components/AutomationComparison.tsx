import { X, Check } from 'lucide-react';
import { useState } from 'react';

const AutomationComparison = () => {
  const [showAutomated, setShowAutomated] = useState(false);

  return (
    <section className="py-20 bg-background">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            The difference is clear
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See for yourself how automation transforms your processes
          </p>
        </div>
        
        <div className="relative">
          {/* Toggle Switch */}
          <div className="flex items-center justify-center mb-8">
            <div className="flex items-center gap-4 bg-card rounded-full p-2 border border-border">
              <button 
                onClick={() => setShowAutomated(false)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                  !showAutomated 
                    ? 'bg-destructive text-destructive-foreground shadow-md' 
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                botti OFF
              </button>
              <button 
                onClick={() => setShowAutomated(true)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                  showAutomated 
                    ? 'bg-primary text-primary-foreground shadow-md' 
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                botti ON
              </button>
            </div>
          </div>

          {/* Content Display */}
          <div className="max-w-3xl mx-auto">
            {!showAutomated ? (
              // Automation OFF
              <div className="space-y-6">
                <div className="flex items-center gap-3 mb-6 justify-center">
                  <div className="w-12 h-12 rounded-full bg-destructive/20 flex items-center justify-center">
                    <X className="w-6 h-6 text-destructive" />
                  </div>
                  <div className="text-center">
                    <h3 className="text-xl font-semibold text-foreground">Without Automation</h3>
                    <p className="text-muted-foreground">Chaos and inefficiency</p>
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
                      <span className="text-foreground">Confusing communication channels</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <X className="w-5 h-5 text-destructive" />
                      <span className="text-foreground">Time loss through manual processes</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <X className="w-5 h-5 text-destructive" />
                      <span className="text-foreground">Error-prone workflows</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <X className="w-5 h-5 text-destructive" />
                      <span className="text-foreground">Unstructured collaboration</span>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              // Automation ON
              <div className="space-y-6">
                <div className="flex items-center gap-3 mb-6 justify-center">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <Check className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-center">
                    <h3 className="text-xl font-semibold text-foreground">With botti Automation</h3>
                    <p className="text-muted-foreground">Clarity and efficiency</p>
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
                      <span className="text-foreground">Clear, structured processes</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-primary" />
                      <span className="text-foreground">Automated workflows</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-primary" />
                      <span className="text-foreground">Seamless team communication</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-primary" />
                      <span className="text-foreground">More time for what matters</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-primary" />
                      <span className="text-foreground">Reduced error rate</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-primary" />
                      <span className="text-foreground">Cost savings</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-primary" />
                      <span className="text-foreground">Better scalability</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-primary" />
                      <span className="text-foreground">Increased productivity</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-primary" />
                      <span className="text-foreground">24/7 availability</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-primary" />
                      <span className="text-foreground">Improved data quality</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Customer Testimonial */}
        <div className="mt-16 bg-gradient-to-br from-primary/20 to-primary/5 rounded-3xl p-8 lg:p-12 border border-primary/20 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full -translate-y-16 translate-x-16"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-primary/5 rounded-full translate-y-12 -translate-x-12"></div>
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <div className="mb-8">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Check className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-2">Success Story</h3>
              <p className="text-primary font-medium">Real Customer Experience</p>
            </div>
            <blockquote className="text-xl lg:text-2xl text-foreground leading-relaxed mb-8 font-medium">
              "I wonder today how we ever managed before. Since we 
              automated our processes, many things just run in the background, 
              without any follow-up or control chaos. The best part: My team is much 
              more relaxed and finally has a clear head for the really important 
              topics. I can only recommend it to anyone who wants less stress and more 
              clarity in everyday life."
            </blockquote>
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">V</span>
              </div>
              <div className="text-left">
                <cite className="text-foreground font-bold text-lg block">
                  Vera
                </cite>
                <span className="text-muted-foreground">BLACK FLASH ARCHERY GmbH</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AutomationComparison;