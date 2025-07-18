import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, CheckCircle, TrendingUp, Users, DollarSign, Clock, Zap } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const ServicesDetail = () => {
  const { serviceId } = useParams();
  const navigate = useNavigate();

  const servicesData = {
    "sales-marketing": {
      title: "Vertriebs- & Marketingautomatisierung",
      subtitle: "Mehr Leads. Weniger Aufwand. Volle Skalierung.",
      hero: "Transformieren Sie Ihr Marketing von reaktiv zu proaktiv",
      description: "Automatisieren Sie Funnels, Follow-ups und Kampagnen, um aus Interessenten systematisch Kunden zu machen – 24/7, datenbasiert und persönlich.",
      icon: TrendingUp,
      features: [
        "E-Mail-Automatisierung",
        "Lead-Nurturing-Funnels",
        "CRM-Automatisierungen",
        "Chatbots / WhatsApp-Automatisierung",
        "Retargeting-Kampagnen"
      ],
      benefits: [
        { icon: TrendingUp, title: "300% mehr qualifizierte Leads", desc: "Durch intelligente Lead-Nurturing-Sequenzen" },
        { icon: Clock, title: "80% Zeitersparnis", desc: "Bei der Kundenkommunikation" },
        { icon: DollarSign, title: "250% ROI-Steigerung", desc: "Durch optimierte Conversion-Funnels" }
      ],
      process: [
        {
          step: "01",
          title: "Lead-Capturing optimieren",
          description: "Wir analysieren Ihre bestehenden Touchpoints und implementieren intelligente Lead-Magnets mit automatisierten Follow-up-Sequenzen."
        },
        {
          step: "02", 
          title: "Nurturing-Funnels aufbauen",
          description: "Entwicklung personalisierter E-Mail-Sequenzen basierend auf Kundenverhalten und Interessen für maximale Conversion."
        },
        {
          step: "03",
          title: "CRM-Integration realisieren", 
          description: "Nahtlose Verbindung aller Systeme für automatische Lead-Qualifizierung und Sales-Pipeline-Management."
        }
      ],
      example: {
        title: "Praxisbeispiel: Online-Shop für Sportbekleidung",
        scenario: "Ein mittelständischer Online-Shop kämpfte mit niedriger Conversion-Rate und hohem manuellen Aufwand im Kundenservice.",
        solution: "Wir implementierten einen vollautomatisierten Marketing-Funnel mit personalisierten E-Mail-Sequenzen, Warenkorbabbrecher-Kampagnen und WhatsApp-Bot für Kundenanfragen.",
        results: [
          "Conversion-Rate stieg von 2,3% auf 7,1%",
          "Kundenservice-Anfragen reduzierten sich um 65%",
          "Durchschnittlicher Warenkorbwert erhöhte sich um 180€"
        ]
      }
    },
    "finance": {
      title: "Finanzen & Buchhaltung",
      subtitle: "Weniger Fehler. Mehr Übersicht. Automatisch compliant.",
      hero: "Ihre Finanzen im Autopilot - präzise und rechtskonform",
      description: "Belege, Zahlungen, Rechnungen und Reports fließen automatisiert durch Ihre Systeme – für ein aufgeräumtes Backoffice ohne Kopfzerbrechen.",
      icon: DollarSign,
      features: [
        "Belegerkennung & -verbuchung",
        "Rechnungsstellung & Mahnwesen",
        "Automatisierte Bankabgleiche",
        "Steuer-Vorbereitung durch Automatisierung von Reports"
      ],
      benefits: [
        { icon: Clock, title: "95% weniger manuelle Buchungen", desc: "Durch KI-gestützte Belegerkennung" },
        { icon: CheckCircle, title: "100% Compliance-Sicherheit", desc: "Automatische Prüfung aller Prozesse" },
        { icon: DollarSign, title: "Bis zu 40% Kosteneinsparung", desc: "Reduzierung des Buchführungsaufwands" }
      ],
      process: [
        {
          step: "01",
          title: "Systemanalyse & Integration",
          description: "Bewertung Ihrer bestehenden Finanzsysteme und Entwicklung einer nahtlosen Integrationsstrategie."
        },
        {
          step: "02",
          title: "Automatisierung implementieren",
          description: "Einrichtung von OCR-Belegerkennung, automatischen Buchungsregeln und KI-gestützter Kategorisierung."
        },
        {
          step: "03",
          title: "Monitoring & Optimierung",
          description: "Kontinuierliche Überwachung der Prozesse mit automatischen Fehlerprüfungen und Performance-Optimierung."
        }
      ],
      example: {
        title: "Praxisbeispiel: Consulting-Unternehmen",
        scenario: "Ein 50-Mitarbeiter Beratungsunternehmen verlor wöchentlich 15 Stunden durch manuelle Rechnungsstellung und Belegverarbeitung.",
        solution: "Vollautomatisierte Rechnungsstellung basierend auf Zeiterfassung, OCR-Belegerkennung mit automatischer Verbuchung und digitales Mahnwesen.",
        results: [
          "Zeitersparnis von 15 Stunden pro Woche",
          "Fehlerrate bei Buchungen sank um 98%",
          "Zahlungseingänge beschleunigten sich um durchschnittlich 12 Tage"
        ]
      }
    },
    "hr": {
      title: "HR & Recruiting",
      subtitle: "Die besten Talente. Die besten Abläufe.",
      hero: "Von der ersten Bewerbung bis zum erfolgreichen Onboarding",
      description: "Von der Bewerbung bis zum Onboarding: Automatisierungen bringen Tempo, Struktur und Wertschätzung in Ihre Personalprozesse.",
      icon: Users,
      features: [
        "Automatisierte Bewerbervorauswahl",
        "Terminvereinbarung für Interviews",
        "Onboarding-Automatisierung",
        "Mitarbeiter-Kommunikation"
      ],
      benefits: [
        { icon: Clock, title: "70% schnellere Einstellungen", desc: "Durch automatisierte Vorauswahl" },
        { icon: Users, title: "5x bessere Candidate Experience", desc: "Sofortige, personalisierte Kommunikation" },
        { icon: TrendingUp, title: "90% Reduktion von Admin-Aufwand", desc: "Automatisiertes Onboarding und Dokumentation" }
      ],
      process: [
        {
          step: "01",
          title: "Bewerbungsprozess digitalisieren",
          description: "Implementierung intelligenter Bewerbungsformulare mit automatischer Vorqualifizierung und Candidate-Scoring."
        },
        {
          step: "02",
          title: "Interview-Management automatisieren",
          description: "Automatische Terminkoordination, Reminder-System und standardisierte Bewertungsbögen für faire Entscheidungen."
        },
        {
          step: "03",
          title: "Onboarding orchestrieren",
          description: "Vollautomatischer Onboarding-Workflow mit Dokumentenversand, Account-Erstellung und Einarbeitungsplan."
        }
      ],
      example: {
        title: "Praxisbeispiel: IT-Startup",
        scenario: "Ein schnell wachsendes IT-Startup brauchte 6-8 Wochen für Einstellungen und verlor dabei 40% der Top-Kandidaten an Konkurrenten.",
        solution: "Automatisierter Recruiting-Funnel mit KI-Vorauswahl, automatischer Terminbuchung und 2-Wochen-Onboarding-Programm mit personalisierten Checklisten.",
        results: [
          "Time-to-hire reduzierte sich von 8 auf 2 Wochen",
          "Kandidaten-Satisfaction stieg von 6,2 auf 9,1 (von 10)",
          "HR-Team konnte sich auf strategische Aufgaben fokussieren"
        ]
      }
    },
    "ecommerce": {
      title: "E-Commerce & Fulfillment",
      subtitle: "Dein stilles E-Commerce-Backoffice. Rund um die Uhr.",
      hero: "Ihr E-Commerce läuft wie geschmiert - ohne Ihr Zutun",
      description: "Verkauf läuft, Lager stimmt, Retouren sind im Griff – jede Bewegung im Shop löst automatisch Aktionen aus, die Ihre Kund:innen begeistern und Ihr Lager entlasten.",
      icon: Zap,
      features: [
        "Bestandsabgleich & Lagerverwaltung",
        "Versandabwicklung / Etikettenerstellung",
        "Zahlungsabgleich & Retouren-Handling",
        "Produktfeed-Automatisierung für Marktplätze & Ads"
      ],
      benefits: [
        { icon: Zap, title: "99% weniger Out-of-Stock", desc: "Durch intelligente Bestandsvorhersagen" },
        { icon: Clock, title: "50% schnellerer Versand", desc: "Automatisierte Abwicklung und Etikettierung" },
        { icon: DollarSign, title: "25% höhere Margen", desc: "Optimierte Marktplatz-Performance" }
      ],
      process: [
        {
          step: "01",
          title: "Inventory-Management optimieren",
          description: "Echtzeit-Bestandsabgleich zwischen allen Kanälen mit automatischen Nachbestellungen und Mindestbestand-Alerts."
        },
        {
          step: "02",
          title: "Fulfillment automatisieren",
          description: "Vom Bestelleingang bis zur Versandbestätigung - alles läuft automatisch mit optimaler Carrier-Auswahl."
        },
        {
          step: "03",
          title: "Multi-Channel orchestrieren",
          description: "Synchronisierung aller Verkaufskanäle mit automatisierter Preisoptimierung und Performance-Tracking."
        }
      ],
      example: {
        title: "Praxisbeispiel: Fashion-Retailer",
        scenario: "Ein Online-Fashion-Retailer verlor täglich Umsatz durch vergriffene Artikel und hatte 3 Vollzeitkräfte nur für Bestandsmanagement.",
        solution: "Implementierung eines intelligenten Inventory-Systems mit Predictive Analytics, automatisiertem Multi-Channel-Sync und KI-gesteuerter Nachbestellung.",
        results: [
          "Out-of-Stock-Rate sank von 18% auf unter 2%",
          "Lagerkosten reduzierten sich um 30%",
          "3 Mitarbeiter konnten in kundenorientierte Bereiche wechseln"
        ]
      }
    },
    "business-intelligence": {
      title: "Business Intelligence & Reporting",
      subtitle: "Alle Zahlen. Alle Antworten. In Echtzeit.",
      hero: "Datengetriebene Entscheidungen - automatisch aufbereitet",
      description: "Deine wichtigsten KPIs auf einem Blick – aufbereitet, visualisiert und mit Warnsystemen versehen, bevor Risiken zum Problem werden.",
      icon: TrendingUp,
      features: [
        "Dashboards & KPI-Automatisierung",
        "Automatisierte Datenaggregation aus mehreren Tools",
        "Frühwarnsysteme via Triggern und Alerts"
      ],
      benefits: [
        { icon: TrendingUp, title: "Real-time Einblicke", desc: "Alle wichtigen Kennzahlen in Echtzeit" },
        { icon: CheckCircle, title: "Automatische Anomalie-Erkennung", desc: "Probleme erkennen, bevor sie entstehen" },
        { icon: Clock, title: "80% weniger Reporting-Aufwand", desc: "Automatisierte Report-Generierung" }
      ],
      process: [
        {
          step: "01",
          title: "Datenquellen identifizieren",
          description: "Analyse aller relevanten Datenquellen und Entwicklung einer einheitlichen Data-Warehouse-Strategie."
        },
        {
          step: "02",
          title: "Dashboard-Entwicklung",
          description: "Erstellung interaktiver, rollenbasierter Dashboards mit automatischen Updates und mobiloptimierter Darstellung."
        },
        {
          step: "03",
          title: "Alerting implementieren",
          description: "Intelligente Warnsysteme mit Machine Learning für proaktive Problemerkennung und automatische Benachrichtigungen."
        }
      ],
      example: {
        title: "Praxisbeispiel: SaaS-Unternehmen",
        scenario: "Ein SaaS-Unternehmen hatte Daten in 8 verschiedenen Tools verstreut und brauchte 2 Tage pro Woche für manuelle Reports.",
        solution: "Zentrales Business Intelligence Dashboard mit Echtzeit-Datenintegration aus allen Tools, automatischen Churn-Vorhersagen und proaktiven Alerts.",
        results: [
          "Reporting-Zeit reduzierte sich von 2 Tagen auf 10 Minuten",
          "Churn-Rate sank um 35% durch frühzeitige Intervention",
          "Datenbasierte Entscheidungen stiegen um 400%"
        ]
      }
    },
    "workflows": {
      title: "Workflows",
      subtitle: "Effizienz beginnt intern.",
      hero: "Interne Prozesse, die sich selbst organisieren",
      description: "Standardisierte Abläufe wie Genehmigungen, Dokumentenmanagement oder Übergaben laufen im Hintergrund – sauber, nachvollziehbar, skalierbar.",
      icon: CheckCircle,
      features: [
        "Genehmigungsprozesse",
        "Ticketing- und Support-Workflows",
        "Kunden-Onboarding",
        "Vertragsmanagement",
        "Dokumentenmanagement",
        "Interne Kommunikation"
      ],
      benefits: [
        { icon: Clock, title: "60% schnellere Prozesse", desc: "Durch automatisierte Workflows" },
        { icon: CheckCircle, title: "100% Nachvollziehbarkeit", desc: "Lückenlose Dokumentation aller Schritte" },
        { icon: Users, title: "90% weniger Rückfragen", desc: "Klare, automatisierte Kommunikation" }
      ],
      process: [
        {
          step: "01",
          title: "Prozess-Mapping & Analyse",
          description: "Detaillierte Analyse bestehender Workflows und Identifikation von Optimierungspotenzialen durch Process Mining."
        },
        {
          step: "02",
          title: "Workflow-Design & Implementierung",
          description: "Entwicklung automatisierter Workflows mit klaren Eskalationspfaden und integrierten Freigabeprozessen."
        },
        {
          step: "03",
          title: "Monitoring & Continuous Improvement",
          description: "Kontinuierliche Überwachung der Performance mit automatischer Optimierung und regelmäßigen Process Reviews."
        }
      ],
      example: {
        title: "Praxisbeispiel: Beratungsunternehmen",
        scenario: "Ein Beratungsunternehmen verlor täglich 3 Stunden pro Mitarbeiter durch ineffiziente Genehmigungsprozesse und unklare Zuständigkeiten.",
        solution: "Digitaler Workflow-Hub mit automatisierten Freigabeprozessen, intelligentem Routing und Echtzeit-Status-Tracking für alle Anfragen.",
        results: [
          "Durchlaufzeiten für Genehmigungen von 5 Tagen auf 4 Stunden",
          "Mitarbeiterzufriedenheit stieg um 40%",
          "Produktivität erhöhte sich um 25% durch weniger administrative Aufgaben"
        ]
      }
    }
  };

  const service = servicesData[serviceId as keyof typeof servicesData];

  if (!service) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-foreground mb-4">Service nicht gefunden</h1>
            <button 
              onClick={() => navigate('/')}
              className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
            >
              Zurück zur Startseite
            </button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const IconComponent = service.icon;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-primary py-20 text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/10"></div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <button 
            onClick={() => navigate('/')}
            className="inline-flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground mb-8 transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Zurück zur Übersicht
          </button>
          
          <div className="flex items-center gap-6 mb-8 animate-fade-in">
            <div className="w-20 h-20 bg-primary-foreground/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
              <IconComponent className="w-10 h-10 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-5xl font-bold mb-4 font-raleway">{service.title}</h1>
              <p className="text-xl text-primary-foreground/90 font-raleway font-light">{service.hero}</p>
            </div>
          </div>
        </div>
        
        {/* Animated background elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-foreground/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-foreground/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Description & Benefits */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <div className="animate-fade-in">
            <h2 className="text-3xl font-bold text-foreground mb-6 font-raleway">
              {service.subtitle}
            </h2>
            <p className="text-lg text-muted-foreground font-raleway font-light leading-relaxed mb-8">
              {service.description}
            </p>
            
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground font-raleway">Kernkompetenzen:</h3>
              <ul className="space-y-3">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3 group">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 group-hover:scale-110 transition-transform" />
                    <span className="text-foreground font-raleway">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="space-y-6 animate-fade-in">
            <h3 className="text-2xl font-bold text-foreground font-raleway">Ihre Vorteile auf einen Blick</h3>
            {service.benefits.map((benefit, index) => (
              <div key={index} className="bg-card p-6 rounded-xl border border-secondary hover:border-primary/30 transition-all duration-300 hover:scale-105 group">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <benefit.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-2 font-raleway">{benefit.title}</h4>
                    <p className="text-muted-foreground font-raleway font-light">{benefit.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Process Steps */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-foreground text-center mb-12 font-raleway animate-fade-in">
            So gehen wir vor
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {service.process.map((step, index) => (
              <div key={index} className={`relative group animate-fade-in`} style={{animationDelay: `${index * 200}ms`}}>
                <div className="bg-card p-8 rounded-xl border border-secondary group-hover:border-primary/30 transition-all duration-300 hover:scale-105">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                    <span className="text-primary font-bold text-xl font-raleway">{step.step}</span>
                  </div>
                  <h4 className="text-xl font-semibold text-foreground mb-4 text-center font-raleway">{step.title}</h4>
                  <p className="text-muted-foreground font-raleway font-light text-center leading-relaxed">{step.description}</p>
                </div>
                
                {/* Connecting line */}
                {index < service.process.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-primary/30 z-10 group-hover:bg-primary transition-colors"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Example Case Study */}
        <div className="bg-secondary/50 rounded-2xl p-8 lg:p-12 mb-20 animate-fade-in">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-4 font-raleway">{service.example.title}</h3>
            <div className="w-24 h-1 bg-primary mx-auto"></div>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1">
              <h4 className="text-xl font-semibold text-foreground mb-4 font-raleway">Ausgangssituation</h4>
              <p className="text-muted-foreground font-raleway font-light leading-relaxed">
                {service.example.scenario}
              </p>
            </div>
            
            <div className="lg:col-span-1">
              <h4 className="text-xl font-semibold text-foreground mb-4 font-raleway">Unsere Lösung</h4>
              <p className="text-muted-foreground font-raleway font-light leading-relaxed">
                {service.example.solution}
              </p>
            </div>
            
            <div className="lg:col-span-1">
              <h4 className="text-xl font-semibold text-foreground mb-4 font-raleway">Ergebnisse</h4>
              <ul className="space-y-3">
                {service.example.results.map((result, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground font-raleway">{result}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-card rounded-2xl p-12 border border-secondary animate-fade-in">
          <h3 className="text-3xl font-bold text-foreground mb-4 font-raleway">
            Bereit für Ihre Automatisierung?
          </h3>
          <p className="text-lg text-muted-foreground font-raleway font-light mb-8 max-w-2xl mx-auto">
            Lassen Sie uns gemeinsam analysieren, wie wir {service.title.toLowerCase()} in Ihrem Unternehmen optimieren können.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-primary text-primary-foreground px-8 py-4 rounded-lg font-raleway font-semibold text-lg hover:bg-primary/90 transition-all duration-300 hover:scale-105">
              Kostenlose Beratung anfragen
            </button>
            <button 
              onClick={() => navigate('/')}
              className="bg-secondary text-foreground px-8 py-4 rounded-lg font-raleway font-semibold text-lg border border-secondary hover:border-primary/30 transition-all duration-300"
            >
              Weitere Services entdecken
            </button>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default ServicesDetail;