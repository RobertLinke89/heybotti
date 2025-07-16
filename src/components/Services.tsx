
const Services = () => {
  const services = [
    {
      title: "E-Mail Automatisierung",
      description: "Intelligente Sortierung und Bearbeitung deiner E-Mails. Wichtiges wird priorisiert, Routine automatisiert.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Terminorganisation",
      description: "Nahtlose Koordination von Meetings und Terminen. Mehr Zeit für echte Gespräche, weniger Organisationsaufwand.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Rechnungsmanagement",
      description: "Automatisierte Erstellung und Versendung von Rechnungen. Liquidität im Blick, Papierkram im Griff.",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Kommunikationshub",
      description: "Alle Kanäle an einem Ort. Teams bleiben verbunden, Informationen fließen strukturiert und transparent.",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=600&q=80"
    }
  ];

  return (
    <section id="services" className="bg-background py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-6 font-raleway">
            Unsere <span className="text-primary">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground font-raleway font-light max-w-3xl mx-auto">
            Wir schaffen Strukturen, die deinen Alltag entlasten, Kommunikation vereinfachen und Prozesse intelligent miteinander verbinden.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-card rounded-xl p-6 border border-secondary hover:border-primary/50 transition-all duration-300">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                <div className="w-6 h-6 bg-primary rounded"></div>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3 font-raleway">{service.title}</h3>
              <p className="text-muted-foreground font-raleway font-light">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
