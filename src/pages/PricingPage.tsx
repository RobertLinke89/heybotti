import { useState } from "react";
import { Check, ArrowRight, Phone, Shield, Zap, Users, Clock, Headphones } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PricingPage = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();
  const [toolCount, setToolCount] = useState("2");

  const handleBooking = () => {
    navigate('/booking');
  };

  const calculatePrice = (count: number) => {
    const basePrice = 749;
    let discount = 1;
    
    if (count >= 10) {
      discount = 0.80;
    } else if (count >= 7) {
      discount = 0.85;
    } else if (count >= 5) {
      discount = 0.90;
    } else if (count >= 3) {
      discount = 0.95;
    }
    
    return Math.round(basePrice * count * discount);
  };

  const getDiscount = (count: number) => {
    if (count >= 10) return 20;
    if (count >= 7) return 15;
    if (count >= 5) return 10;
    if (count >= 3) return 5;
    return 0;
  };

  const isCustomPrice = toolCount === "10+";
  const currentToolCount = isCustomPrice ? 10 : parseInt(toolCount);
  const totalPrice = calculatePrice(currentToolCount);
  const discount = getDiscount(currentToolCount);
  const pricePerTool = Math.round(totalPrice / currentToolCount);

  const features = [
    t('pricing.tool.feature1'),
    t('pricing.tool.feature2'),
    t('pricing.tool.feature3'),
    t('pricing.tool.feature4'),
    t('pricing.tool.feature5'),
    t('pricing.tool.feature6'),
    t('pricing.tool.feature7')
  ];

  const benefits = [
    {
      icon: Zap,
      title: "Schnelle Implementierung",
      description: "Innerhalb weniger Wochen produktiv – keine monatelangen Projekte."
    },
    {
      icon: Shield,
      title: "DSGVO-konform",
      description: "Alle Daten werden sicher in deutschen Rechenzentren verarbeitet."
    },
    {
      icon: Users,
      title: "Persönlicher Ansprechpartner",
      description: "Ein dedizierter Experte begleitet euch durch das gesamte Projekt."
    },
    {
      icon: Clock,
      title: "Flexible Laufzeiten",
      description: "Keine langfristigen Verträge – monatlich kündbar nach der Erstlaufzeit."
    }
  ];

  const faqItems = [
    {
      question: "Wie funktioniert die Preisgestaltung?",
      answer: "Unser Preis basiert auf der Anzahl der Systeme, die wir für euch verbinden. Je mehr Systeme, desto größer der Mengenrabatt. Ab 3 Systemen erhaltet ihr bereits 5% Rabatt."
    },
    {
      question: "Was zählt als ein System?",
      answer: "Ein System ist eine Software oder Plattform, die wir mit euren anderen Tools verbinden – z.B. euer CRM, Buchhaltungssoftware, E-Mail-Marketing-Tool oder Projektmanagement-System."
    },
    {
      question: "Gibt es versteckte Kosten?",
      answer: "Nein. Der angezeigte Preis beinhaltet Analyse, Implementierung, Schulung und laufenden Support. Nur bei sehr spezifischen Sonderwünschen kann es Zusatzkosten geben – darüber informieren wir euch vorab."
    },
    {
      question: "Wie lange dauert die Implementierung?",
      answer: "Je nach Komplexität zwischen 2-8 Wochen. Einfache Integrationen sind oft schon nach wenigen Tagen einsatzbereit."
    },
    {
      question: "Was passiert nach der Implementierung?",
      answer: "Ihr erhaltet die komplette Infrastruktur und Dokumentation. Wir bieten optionalen laufenden Support und Optimierung – oder ihr betreibt alles selbstständig."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-24 md:pt-32 pb-12 md:pb-16 px-4 overflow-hidden">
        <div className="absolute top-20 left-10 w-48 md:w-72 h-48 md:h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-64 md:w-96 h-64 md:h-96 bg-primary/3 rounded-full blur-3xl" />
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 md:mb-6 leading-tight">
            {t('pricing.title')} <span className="text-primary">{t('pricing.title.highlight')}</span>
          </h1>
          <p className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto px-2">
            {t('pricing.subtitle')}
          </p>
        </div>
      </section>

      {/* Main Pricing Card */}
      <section className="py-8 md:py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <Card className="border-primary/20 shadow-2xl">
            <CardHeader className="text-center pb-4 md:pb-8 px-4 md:px-8 pt-6 md:pt-10">
              <CardTitle className="text-xl md:text-2xl lg:text-3xl mb-2">{t('pricing.tool.title')}</CardTitle>
              <CardDescription className="text-sm md:text-base lg:text-lg">{t('pricing.tool.description')}</CardDescription>
            </CardHeader>
            
            <CardContent className="space-y-6 md:space-y-8 px-4 md:px-8 pb-6 md:pb-10">
              <div className="bg-muted/50 p-4 md:p-6 rounded-xl border border-border/50">
                <label className="block text-xs md:text-sm font-semibold text-foreground mb-2 md:mb-3">
                  {t('pricing.tool.selectLabel')}
                </label>
                <Select value={toolCount} onValueChange={setToolCount}>
                  <SelectTrigger className="w-full text-base md:text-lg h-12 md:h-14 bg-background">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {Array.from({ length: 9 }, (_, i) => i + 2).map((num) => (
                      <SelectItem key={num} value={num.toString()}>
                        {num} {t('pricing.tool.tools')}
                      </SelectItem>
                    ))}
                    <SelectItem value="10+">10+ {t('pricing.tool.tools')}</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="text-center py-6 md:py-8 border-y border-border/50">
                <div className="space-y-2 md:space-y-3">
                  {!isCustomPrice && discount > 0 && (
                    <div className="inline-block bg-primary/10 text-primary px-4 md:px-6 py-1.5 rounded-full text-sm md:text-base font-semibold mb-2">
                      {discount}% {t('pricing.tool.discount')}
                    </div>
                  )}
                  {isCustomPrice ? (
                    <div className="text-xl md:text-2xl lg:text-3xl font-bold text-foreground px-4">
                      Preis auf Anfrage. Kontaktieren Sie uns.
                    </div>
                  ) : (
                    <>
                      <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
                        {totalPrice.toLocaleString('de-DE')}€
                      </div>
                      <div className="text-sm md:text-base lg:text-lg text-muted-foreground">
                        {pricePerTool}€ {t('pricing.tool.perTool')}
                      </div>
                    </>
                  )}
                </div>
              </div>

              <div>
                <h3 className="text-base md:text-lg font-semibold text-foreground mb-4 md:mb-6">
                  {t('pricing.tool.included')}
                </h3>
                <ul className="grid sm:grid-cols-2 gap-3 md:gap-4">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2 md:gap-3">
                      <Check className="w-5 h-5 md:w-6 md:h-6 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm md:text-base text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Button 
                onClick={handleBooking}
                className="w-full h-12 md:h-14 text-base md:text-lg rounded-full"
                size="lg"
              >
                {t('pricing.button')}
                <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5" />
              </Button>
            </CardContent>
          </Card>

          <p className="text-center text-xs md:text-sm text-muted-foreground mt-6 md:mt-8 px-4">
            {t('pricing.tool.note')}
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 md:py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-3 md:mb-4">
              Warum <span className="text-primary">heybotti</span>?
            </h2>
            <p className="text-muted-foreground text-sm md:text-lg max-w-2xl mx-auto">
              Mehr als nur Automatisierung – eine echte Partnerschaft
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="bg-card border border-border rounded-xl md:rounded-2xl p-4 md:p-6 text-center hover:border-primary/30 transition-colors"
              >
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-primary/10 flex items-center justify-center mb-3 md:mb-4 mx-auto">
                  <benefit.icon className="w-6 h-6 md:w-7 md:h-7 text-primary" />
                </div>
                <h3 className="text-base md:text-lg font-semibold text-foreground mb-1.5 md:mb-2">{benefit.title}</h3>
                <p className="text-sm md:text-base text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 md:py-20 px-4">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-3 md:mb-4">
              Häufige <span className="text-primary">Fragen</span>
            </h2>
          </div>

          <div className="space-y-4 md:space-y-6">
            {faqItems.map((item, index) => (
              <div 
                key={index}
                className="bg-card border border-border rounded-xl md:rounded-2xl p-4 md:p-6"
              >
                <h3 className="text-base md:text-lg font-semibold text-foreground mb-2 md:mb-3">
                  {item.question}
                </h3>
                <p className="text-sm md:text-base text-muted-foreground">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20 px-4 bg-gradient-to-br from-primary/10 via-background to-primary/5">
        <div className="max-w-3xl mx-auto text-center">
          <Headphones className="w-10 h-10 md:w-12 md:h-12 text-primary mx-auto mb-4 md:mb-6" />
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-3 md:mb-4">
            Noch <span className="text-primary">Fragen</span>?
          </h2>
          <p className="text-muted-foreground text-sm md:text-lg mb-6 md:mb-8 max-w-xl mx-auto px-2">
            Wir beraten dich gerne persönlich und finden gemeinsam die passende Lösung für dein Unternehmen.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              onClick={() => navigate('/booking')}
              className="text-base md:text-lg px-6 md:px-8 py-5 md:py-6 rounded-full"
            >
              Beratungsgespräch buchen
              <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => window.location.href = 'tel:+4916099232779'}
              className="text-base md:text-lg px-6 md:px-8 py-5 md:py-6 rounded-full"
            >
              <Phone className="mr-2 w-4 h-4 md:w-5 md:h-5" />
              Direkt anrufen
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PricingPage;
