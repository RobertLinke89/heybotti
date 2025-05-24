
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
    <section id="services" className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-text-primary mb-6 font-raleway">
            Smarte Automatisierung mit <span className="text-btn-primary">menschlichem Blick</span>
          </h2>
          <p className="text-xl text-text-primary font-raleway font-light max-w-3xl mx-auto">
            Wir schaffen Strukturen, die deinen Alltag entlasten, Kommunikation vereinfachen und Prozesse intelligent miteinander verbinden – damit wieder Raum entsteht für echte Zusammenarbeit.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <img 
                src={service.image} 
                alt={service.title}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold text-text-primary mb-3 font-raleway">{service.title}</h3>
              <p className="text-text-primary font-raleway font-light">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
