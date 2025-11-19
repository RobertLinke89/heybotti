import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate, useLocation } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const Pricing = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useLanguage();

  const handleBooking = () => {
    if (location.pathname === '/') {
      document.getElementById('booking-section')?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/#booking-section');
      setTimeout(() => {
        document.getElementById('booking-section')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  const packages = [
    {
      name: "Starter",
      price: "500€",
      description: "Perfekt für den Einstieg in die Automation",
      features: [
        "Einfache Automation",
        "Bis zu 3 Tools",
        "Basis-Integration",
        "Email Support",
        "1 Monat Support"
      ]
    },
    {
      name: "Professional",
      price: "5.000€",
      description: "Für umfangreiche Automatisierungsprojekte",
      features: [
        "Komplexe Automations",
        "Bis zu 10 Tools",
        "Erweiterte Integrationen",
        "Priority Support",
        "3 Monate Support",
        "Custom Workflows",
        "API Integrationen"
      ],
      popular: true
    },
    {
      name: "Custom",
      price: "Auf Anfrage",
      description: "Individuell auf deine Bedürfnisse zugeschnitten",
      features: [
        "Unbegrenzte Tools",
        "Maßgeschneiderte Lösung",
        "Dedizierter Support",
        "Langzeit-Betreuung",
        "Enterprise Features",
        "Individuelle SLAs",
        "Consulting inklusive"
      ]
    }
  ];

  return (
    <section className="py-20 px-6 bg-muted/30">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Unsere Pakete
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Wähle das passende Paket für deine Automation-Bedürfnisse
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <Card 
              key={index} 
              className={`relative ${pkg.popular ? 'border-primary shadow-lg scale-105' : ''}`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                  Beliebt
                </div>
              )}
              <CardHeader>
                <CardTitle className="text-2xl">{pkg.name}</CardTitle>
                <CardDescription>{pkg.description}</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-foreground">{pkg.price}</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button 
                  onClick={handleBooking}
                  className="w-full"
                  variant={pkg.popular ? "default" : "outline"}
                >
                  Jetzt buchen
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
