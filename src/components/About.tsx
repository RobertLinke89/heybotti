
const About = () => {
  return (
    <section id="about" className="bg-secondary py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-foreground mb-6 font-raleway">
            So gehen wir <span className="text-primary">vor</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold text-xl">01</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3 font-raleway">Analyse</h3>
              <p className="text-muted-foreground font-raleway font-light">
                Wir analysieren deine bestehenden Prozesse und identifizieren Optimierungspotentiale.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold text-xl">02</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3 font-raleway">Konzept</h3>
              <p className="text-muted-foreground font-raleway font-light">
                Entwicklung einer maßgeschneiderten Automatisierungsstrategie für dein Unternehmen.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold text-xl">03</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3 font-raleway">Umsetzung</h3>
              <p className="text-muted-foreground font-raleway font-light">
                Implementierung und Integration der Automatisierungslösungen in deine Arbeitsabläufe.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
