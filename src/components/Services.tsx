
import { useNavigate } from 'react-router-dom';

const Services = () => {
  const navigate = useNavigate();
  const services = [
    {
      id: "sales-marketing",
      title: "Vertriebs- & Marketingautomatisierung",
      subtitle: "Mehr Leads. Weniger Aufwand. Volle Skalierung.",
      description: "Automatisieren Sie Funnels, Follow-ups und Kampagnen, um aus Interessenten systematisch Kunden zu machen – 24/7, datenbasiert und persönlich.",
      features: [
        "E-Mail-Automatisierung",
        "Lead-Nurturing-Funnels",
        "CRM-Automatisierungen",
        "Chatbots / WhatsApp-Automatisierung",
        "Retargeting-Kampagnen"
      ]
    },
    {
      id: "finance",
      title: "Finanzen & Buchhaltung",
      subtitle: "Weniger Fehler. Mehr Übersicht. Automatisch compliant.",
      description: "Belege, Zahlungen, Rechnungen und Reports fließen automatisiert durch Ihre Systeme – für ein aufgeräumtes Backoffice ohne Kopfzerbrechen.",
      features: [
        "Belegerkennung & -verbuchung",
        "Rechnungsstellung & Mahnwesen",
        "Automatisierte Bankabgleiche",
        "Steuer-Vorbereitung durch Automatisierung von Reports"
      ]
    },
    {
      id: "hr",
      title: "HR & Recruiting",
      subtitle: "Die besten Talente. Die besten Abläufe.",
      description: "Von der Bewerbung bis zum Onboarding: Automatisierungen bringen Tempo, Struktur und Wertschätzung in Ihre Personalprozesse.",
      features: [
        "Automatisierte Bewerbervorauswahl",
        "Terminvereinbarung für Interviews",
        "Onboarding-Automatisierung",
        "Mitarbeiter-Kommunikation"
      ]
    },
    {
      id: "ecommerce",
      title: "E-Commerce & Fulfillment",
      subtitle: "Dein stilles E-Commerce-Backoffice. Rund um die Uhr.",
      description: "Verkauf läuft, Lager stimmt, Retouren sind im Griff – jede Bewegung im Shop löst automatisch Aktionen aus, die Ihre Kund:innen begeistern und Ihr Lager entlasten.",
      features: [
        "Bestandsabgleich & Lagerverwaltung",
        "Versandabwicklung / Etikettenerstellung",
        "Zahlungsabgleich & Retouren-Handling",
        "Produktfeed-Automatisierung für Marktplätze & Ads"
      ]
    },
    {
      id: "business-intelligence",
      title: "Business Intelligence & Reporting",
      subtitle: "Alle Zahlen. Alle Antworten. In Echtzeit.",
      description: "Deine wichtigsten KPIs auf einem Blick – aufbereitet, visualisiert und mit Warnsystemen versehen, bevor Risiken zum Problem werden.",
      features: [
        "Dashboards & KPI-Automatisierung",
        "Automatisierte Datenaggregation aus mehreren Tools",
        "Frühwarnsysteme via Triggern und Alerts"
      ]
    },
    {
      id: "workflows",
      title: "Workflows",
      subtitle: "Effizienz beginnt intern.",
      description: "Standardisierte Abläufe wie Genehmigungen, Dokumentenmanagement oder Übergaben laufen im Hintergrund – sauber, nachvollziehbar, skalierbar.",
      features: [
        "Genehmigungsprozesse",
        "Ticketing- und Support-Workflows",
        "Kunden-Onboarding",
        "Vertragsmanagement",
        "Dokumentenmanagement",
        "Interne Kommunikation"
      ]
    }
  ];

  return (
    <section id="services" className="bg-background py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-6 font-raleway">
            Top-Bereiche für maximale <span className="text-primary">Hebelwirkung</span>
          </h2>
          <p className="text-xl text-muted-foreground font-raleway font-light max-w-4xl mx-auto">
            Automatisierung ist kein Luxus mehr – sie ist der Schlüssel zu Wachstum, Effizienz und Klarheit in einer komplexen Arbeitswelt.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={service.id} className="bg-card rounded-xl p-8 border border-secondary hover:border-primary/30 transition-all duration-300 group">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-foreground mb-2 font-raleway group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-primary font-semibold font-raleway mb-4">
                  {service.subtitle}
                </p>
                <p className="text-muted-foreground font-raleway font-light leading-relaxed">
                  {service.description}
                </p>
              </div>
              
              <div className="mb-8">
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-foreground font-raleway">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <button 
                onClick={() => navigate(`/services/${service.id}`)}
                className="w-full bg-primary/10 text-primary border border-primary/20 px-6 py-3 rounded-lg font-raleway font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                Jetzt automatisieren
              </button>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <button className="bg-primary text-primary-foreground px-10 py-4 rounded-lg font-raleway font-semibold text-xl hover:bg-primary/90 transition-colors">
            Kostenlose Beratung anfragen
          </button>
          <p className="text-muted-foreground mt-4 font-raleway font-light">
            Welcher Bereich bietet in Ihrem Unternehmen das größte Potenzial?
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
