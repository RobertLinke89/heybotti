import { useState } from "react";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useNavigate, useLocation } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const Pricing = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useLanguage();
  const [toolCount, setToolCount] = useState("2");

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

  const calculatePrice = (count: number) => {
    const basePrice = 749;
    let discount = 1;
    
    if (count >= 10) {
      discount = 0.80; // 20% Rabatt
    } else if (count >= 7) {
      discount = 0.85; // 15% Rabatt
    } else if (count >= 5) {
      discount = 0.90; // 10% Rabatt
    } else if (count >= 3) {
      discount = 0.95; // 5% Rabatt
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

  const currentToolCount = parseInt(toolCount);
  const totalPrice = calculatePrice(currentToolCount);
  const discount = getDiscount(currentToolCount);
  const pricePerTool = Math.round(totalPrice / currentToolCount);

  const features = [
    t('pricing.tool.feature1'),
    t('pricing.tool.feature2'),
    t('pricing.tool.feature3'),
    t('pricing.tool.feature4'),
    t('pricing.tool.feature5'),
    t('pricing.tool.feature6')
  ];

  return (
    <section id="pricing-section" className="py-12 md:py-20 px-4 md:px-6 bg-muted/30">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4 text-foreground">
            {t('pricing.title')} <span className="text-primary">{t('pricing.title.highlight')}</span>
          </h2>
          <p className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto px-2">
            {t('pricing.subtitle')}
          </p>
        </div>

        <Card className="border-primary/20 shadow-xl">
          <CardHeader className="text-center pb-4 md:pb-8 px-4 md:px-6">
            <CardTitle className="text-xl md:text-2xl lg:text-3xl mb-2">{t('pricing.tool.title')}</CardTitle>
            <CardDescription className="text-sm md:text-base lg:text-lg">{t('pricing.tool.description')}</CardDescription>
          </CardHeader>
          
          <CardContent className="space-y-6 md:space-y-8 px-4 md:px-6">
            <div className="bg-muted/50 p-4 md:p-6 rounded-lg border border-border/50">
              <label className="block text-xs md:text-sm font-semibold text-foreground mb-2 md:mb-3">
                {t('pricing.tool.selectLabel')}
              </label>
              <Select value={toolCount} onValueChange={setToolCount}>
                <SelectTrigger className="w-full text-base md:text-lg h-10 md:h-12 bg-background">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {Array.from({ length: 19 }, (_, i) => i + 2).map((num) => (
                    <SelectItem key={num} value={num.toString()}>
                      {num} {t('pricing.tool.tools')}
                    </SelectItem>
                  ))}
                  <SelectItem value="20">20+ {t('pricing.tool.tools')}</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="text-center py-4 md:py-6 border-y border-border/50">
              <div className="space-y-1 md:space-y-2">
                {discount > 0 && (
                  <div className="inline-block bg-primary/10 text-primary px-3 md:px-4 py-1 rounded-full text-xs md:text-sm font-semibold mb-1 md:mb-2">
                    {discount}% {t('pricing.tool.discount')}
                  </div>
                )}
                <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
                  {totalPrice.toLocaleString('de-DE')}€
                </div>
                <div className="text-sm md:text-base text-muted-foreground">
                  {pricePerTool}€ {t('pricing.tool.perTool')}
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-base md:text-lg font-semibold text-foreground mb-3 md:mb-4">
                {t('pricing.tool.included')}
              </h3>
              <ul className="space-y-2 md:space-y-3">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2 md:gap-3">
                    <Check className="w-4 h-4 md:w-5 md:h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm md:text-base text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Button 
              onClick={handleBooking}
              className="w-full h-11 md:h-12 text-base md:text-lg"
              size="lg"
            >
              {t('pricing.button')}
            </Button>
          </CardContent>
        </Card>

        <p className="text-center text-xs md:text-sm text-muted-foreground mt-6 md:mt-8 px-4">
          {t('pricing.tool.note')}
        </p>
      </div>
    </section>
  );
};

export default Pricing;
