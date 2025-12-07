import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { 
  TrendingUp, 
  Users, 
  Euro,
  Target,
  BarChart3,
  ArrowRight,
  CheckCircle2,
  Building2,
  Zap,
  Globe,
  LineChart,
  PieChart
} from 'lucide-react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart as RechartsPie,
  Pie,
  Cell,
  Legend
} from 'recharts';
import heroInvestors from '@/assets/hero-investors.jpg';
import InvestorROICalculator from '@/components/InvestorROICalculator';

const marketGrowthData = [
  { year: '2021', value: 42 },
  { year: '2022', value: 58 },
  { year: '2023', value: 78 },
  { year: '2024', value: 102 },
  { year: '2025', value: 135, projected: true },
  { year: '2026', value: 178, projected: true },
  { year: '2027', value: 232, projected: true },
];

const revenueData = [
  { quarter: 'Q1 24', revenue: 45, recurring: 38 },
  { quarter: 'Q2 24', revenue: 62, recurring: 52 },
  { quarter: 'Q3 24', revenue: 85, recurring: 72 },
  { quarter: 'Q4 24', revenue: 112, recurring: 95 },
];

const customerSegments = [
  { name: 'KMU', value: 45, color: 'hsl(var(--primary))' },
  { name: 'Handwerk', value: 25, color: 'hsl(var(--primary) / 0.7)' },
  { name: 'Gesundheit', value: 20, color: 'hsl(var(--primary) / 0.5)' },
  { name: 'Sonstige', value: 10, color: 'hsl(var(--primary) / 0.3)' },
];

const roiData = [
  { month: 'Monat 1', cost: 749, savings: 200, cumulative: -549 },
  { month: 'Monat 2', cost: 749, savings: 600, cumulative: -698 },
  { month: 'Monat 3', cost: 749, savings: 1200, cumulative: -247 },
  { month: 'Monat 4', cost: 749, savings: 1800, cumulative: 804 },
  { month: 'Monat 5', cost: 749, savings: 2400, cumulative: 2455 },
  { month: 'Monat 6', cost: 749, savings: 3000, cumulative: 4706 },
];

const Investors = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-24 md:pt-32 pb-16 md:pb-20 px-4 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 pointer-events-none">
          <img 
            src={heroInvestors} 
            alt="Business growth visualization" 
            className="w-full h-full object-cover opacity-30 dark:opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
        </div>
        
        <div className="absolute top-20 left-10 w-48 md:w-72 h-48 md:h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-64 md:w-96 h-64 md:h-96 bg-primary/3 rounded-full blur-3xl" />
        
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-primary/10 text-primary text-xs md:text-sm font-medium mb-4 md:mb-6">
            <BarChart3 className="w-3 h-3 md:w-4 md:h-4" />
            Investor Relations
          </div>
          
          <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 md:mb-6 leading-tight text-center md:text-left">
            <span className="block sm:inline">Investieren in die</span>{' '}
            <span className="block sm:inline">Zukunft der</span>
            <br className="hidden md:block" />
            <span className="text-primary block sm:inline">Geschäftsautomatisierung</span>
          </h1>
          
          <p className="text-base md:text-xl text-muted-foreground mb-8 md:mb-12 max-w-3xl leading-relaxed">
            heybotti erschließt den wachsenden Markt für KI-gestützte Prozessautomatisierung 
            im deutschen Mittelstand – einem Segment mit enormem Nachholbedarf und 
            hoher Zahlungsbereitschaft.
          </p>
          
          {/* Key Metrics Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6">
            {[
              { value: "€232 Mrd.", label: "Marktvolumen 2027", icon: Globe },
              { value: "23%", label: "CAGR 2024-2027", icon: TrendingUp },
              { value: "92%", label: "Kundenbindung", icon: Users },
              { value: "4.2x", label: "Customer LTV/CAC", icon: Target },
            ].map((metric, index) => (
              <div key={index} className="bg-card border border-border rounded-xl md:rounded-2xl p-4 md:p-6 text-center">
                <metric.icon className="w-5 h-5 md:w-6 md:h-6 text-primary mx-auto mb-2 md:mb-3" />
                <div className="text-lg md:text-2xl lg:text-3xl font-bold text-foreground mb-0.5 md:mb-1">{metric.value}</div>
                <div className="text-xs md:text-sm text-muted-foreground">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Market Opportunity */}
      <section className="py-12 md:py-20 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4 md:mb-6">
                Marktchance: <span className="text-primary">Deutscher Mittelstand</span>
              </h2>
              <p className="text-muted-foreground text-base md:text-lg mb-4 md:mb-6 leading-relaxed">
                Der globale Markt für Geschäftsprozessautomatisierung wächst exponentiell. 
                Deutschland hinkt bei der Digitalisierung hinterher – das schafft eine 
                einzigartige Investitionsmöglichkeit.
              </p>
              <ul className="space-y-3 md:space-y-4">
                {[
                  "3,5 Mio. KMUs in Deutschland mit Automatisierungspotenzial",
                  "72% der Betriebe nutzen noch manuelle Prozesse",
                  "Fachkräftemangel treibt Nachfrage nach Automatisierung",
                  "Regulatorischer Druck erhöht Digitalisierungszwang"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 md:gap-3 text-sm md:text-base text-foreground">
                    <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-primary flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-card border border-border rounded-xl md:rounded-2xl p-4 md:p-6">
              <h3 className="text-base md:text-lg font-semibold text-foreground mb-3 md:mb-4 flex items-center gap-2">
                <LineChart className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                Globales Marktvolumen (Mrd. €)
              </h3>
              <ResponsiveContainer width="100%" height={250}>
                <AreaChart data={marketGrowthData}>
                  <defs>
                    <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis 
                    dataKey="year" 
                    stroke="hsl(var(--muted-foreground))"
                    fontSize={10}
                    tick={{ fontSize: 10 }}
                  />
                  <YAxis 
                    stroke="hsl(var(--muted-foreground))"
                    fontSize={10}
                    tick={{ fontSize: 10 }}
                    tickFormatter={(value) => `€${value}`}
                    width={45}
                  />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'hsl(var(--card))', 
                      border: '1px solid hsl(var(--border))',
                      borderRadius: '8px',
                      fontSize: '12px'
                    }}
                    formatter={(value: number) => [`€${value} Mrd.`, 'Marktvolumen']}
                  />
                  <Area 
                    type="monotone" 
                    dataKey="value" 
                    stroke="hsl(var(--primary))" 
                    strokeWidth={2}
                    fillOpacity={1} 
                    fill="url(#colorValue)" 
                  />
                </AreaChart>
              </ResponsiveContainer>
              <p className="text-xs text-muted-foreground mt-3 md:mt-4 text-center">
                * 2025-2027: Projektion basierend auf aktuellen Wachstumsraten
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Business Model */}
      <section className="py-12 md:py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-3 md:mb-4">
              Geschäftsmodell mit <span className="text-primary">skalierbaren Umsätzen</span>
            </h2>
            <p className="text-muted-foreground text-sm md:text-lg max-w-2xl mx-auto">
              Wiederkehrende Einnahmen und hohe Margen durch SaaS-ähnliche Strukturen
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-6 md:gap-8 mb-8 md:mb-12">
            {/* Revenue Chart */}
            <div className="bg-card border border-border rounded-xl md:rounded-2xl p-4 md:p-6">
              <h3 className="text-base md:text-lg font-semibold text-foreground mb-3 md:mb-4 flex items-center gap-2">
                <BarChart3 className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                Umsatzentwicklung 2024 (Tsd. €)
              </h3>
              <ResponsiveContainer width="100%" height={220}>
                <BarChart data={revenueData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis 
                    dataKey="quarter" 
                    stroke="hsl(var(--muted-foreground))"
                    fontSize={10}
                    tick={{ fontSize: 10 }}
                  />
                  <YAxis 
                    stroke="hsl(var(--muted-foreground))"
                    fontSize={10}
                    tick={{ fontSize: 10 }}
                    width={35}
                  />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'hsl(var(--card))', 
                      border: '1px solid hsl(var(--border))',
                      borderRadius: '8px',
                      fontSize: '12px'
                    }}
                  />
                  <Legend wrapperStyle={{ fontSize: '11px' }} />
                  <Bar 
                    dataKey="revenue" 
                    name="Gesamtumsatz"
                    fill="hsl(var(--primary))" 
                    radius={[4, 4, 0, 0]}
                  />
                  <Bar 
                    dataKey="recurring" 
                    name="Wiederkehrend"
                    fill="hsl(var(--primary) / 0.5)" 
                    radius={[4, 4, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
            
            {/* Customer Segments */}
            <div className="bg-card border border-border rounded-xl md:rounded-2xl p-4 md:p-6">
              <h3 className="text-base md:text-lg font-semibold text-foreground mb-3 md:mb-4 flex items-center gap-2">
                <PieChart className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                Kundensegmente
              </h3>
              <ResponsiveContainer width="100%" height={220}>
                <RechartsPie>
                  <Pie
                    data={customerSegments}
                    cx="50%"
                    cy="50%"
                    innerRadius={40}
                    outerRadius={70}
                    paddingAngle={2}
                    dataKey="value"
                    label={({ name, value }) => `${name}: ${value}%`}
                    labelLine={false}
                  >
                    {customerSegments.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'hsl(var(--card))', 
                      border: '1px solid hsl(var(--border))',
                      borderRadius: '8px',
                      fontSize: '12px'
                    }}
                    formatter={(value: number) => [`${value}%`, 'Anteil']}
                  />
                </RechartsPie>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Key Business Metrics */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
            {[
              { 
                title: "Recurring Revenue", 
                value: "85%", 
                description: "Anteil wiederkehrender Einnahmen am Gesamtumsatz",
                icon: Euro
              },
              { 
                title: "Gross Margin", 
                value: "78%", 
                description: "Hohe Margen durch skalierbare Technologie-Infrastruktur",
                icon: TrendingUp
              },
              { 
                title: "Net Revenue Retention", 
                value: "118%", 
                description: "Kunden erweitern kontinuierlich ihre Automatisierungen",
                icon: Users
              },
            ].map((metric, index) => (
              <div key={index} className="bg-muted/50 rounded-xl md:rounded-2xl p-4 md:p-6 border border-border">
                <metric.icon className="w-6 h-6 md:w-8 md:h-8 text-primary mb-3 md:mb-4" />
                <div className="text-2xl md:text-3xl font-bold text-primary mb-1 md:mb-2">{metric.value}</div>
                <h3 className="font-semibold text-foreground text-sm md:text-base mb-1 md:mb-2">{metric.title}</h3>
                <p className="text-xs md:text-sm text-muted-foreground">{metric.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Section */}
      <section className="py-12 md:py-20 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-3 md:mb-4">
              Kunden-ROI: <span className="text-primary">Break-Even in 4 Monaten</span>
            </h2>
            <p className="text-muted-foreground text-sm md:text-lg max-w-2xl mx-auto">
              Schnelle Amortisation schafft überzeugende Value Proposition und reduziert Churn
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="bg-card border border-border rounded-xl md:rounded-2xl p-4 md:p-6">
              <h3 className="text-base md:text-lg font-semibold text-foreground mb-3 md:mb-4">
                Typische ROI-Entwicklung (€)
              </h3>
              <ResponsiveContainer width="100%" height={220}>
                <AreaChart data={roiData}>
                  <defs>
                    <linearGradient id="colorCumulative" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis 
                    dataKey="month" 
                    stroke="hsl(var(--muted-foreground))"
                    fontSize={9}
                    tick={{ fontSize: 9 }}
                    interval={0}
                  />
                  <YAxis 
                    stroke="hsl(var(--muted-foreground))"
                    fontSize={10}
                    tick={{ fontSize: 10 }}
                    tickFormatter={(value) => `€${value}`}
                    width={50}
                  />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'hsl(var(--card))', 
                      border: '1px solid hsl(var(--border))',
                      borderRadius: '8px',
                      fontSize: '12px'
                    }}
                  />
                  <Area 
                    type="monotone" 
                    dataKey="cumulative" 
                    name="Kumulierter ROI"
                    stroke="hsl(var(--primary))" 
                    strokeWidth={2}
                    fillOpacity={1} 
                    fill="url(#colorCumulative)" 
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
            
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4 md:mb-6">
                ROI-Treiber für Kunden
              </h3>
              <div className="space-y-4 md:space-y-6">
                {[
                  {
                    title: "Zeitersparnis",
                    value: "5-10 Std./Woche",
                    description: "Reduzierung manueller Aufgaben pro Mitarbeiter"
                  },
                  {
                    title: "Fehlerreduktion",
                    value: "90%",
                    description: "Weniger Fehler durch automatisierte Prozesse"
                  },
                  {
                    title: "Schnellere Abrechnung",
                    value: "60%",
                    description: "Kürzere Time-to-Cash durch automatisierte Rechnungsstellung"
                  },
                  {
                    title: "Skalierbarkeit",
                    value: "2x",
                    description: "Mehr Aufträge ohne zusätzliches Personal"
                  }
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3 md:gap-4">
                    <div className="w-12 h-12 md:w-16 md:h-16 rounded-lg md:rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-primary font-bold text-xs md:text-sm">{item.value}</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground text-sm md:text-base">{item.title}</h4>
                      <p className="text-muted-foreground text-xs md:text-sm">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ROI Calculator */}
      <InvestorROICalculator />

      {/* Competitive Advantages */}
      <section className="py-12 md:py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-3 md:mb-4">
              Wettbewerbsvorteile
            </h2>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-4 md:gap-8">
            {[
              {
                icon: Target,
                title: "Fokus auf deutschen Mittelstand",
                description: "Tiefes Verständnis lokaler Anforderungen, Compliance und Geschäftspraktiken. Keine generische US-Software."
              },
              {
                icon: Zap,
                title: "Schnelle Implementierung",
                description: "Go-Live in 2-4 Wochen statt Monaten. Vorkonfigurierte Branchenlösungen reduzieren Customizing-Aufwand."
              },
              {
                icon: Building2,
                title: "Branchenexpertise",
                description: "Spezialisierte Lösungen für Handwerk, Gesundheitswesen und Dienstleistung mit branchenspezifischen Best Practices."
              },
              {
                icon: Users,
                title: "Customer Success",
                description: "Persönliche Betreuung statt Self-Service. Hohe Kundenzufriedenheit führt zu Weiterempfehlungen und niedrigem CAC."
              }
            ].map((item, index) => (
              <div key={index} className="bg-card border border-border rounded-xl md:rounded-2xl p-5 md:p-8 hover:border-primary/30 transition-colors">
                <item.icon className="w-8 h-8 md:w-10 md:h-10 text-primary mb-3 md:mb-4" />
                <h3 className="text-lg md:text-xl font-bold text-foreground mb-2 md:mb-3">{item.title}</h3>
                <p className="text-sm md:text-base text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Opportunity */}
      <section className="py-12 md:py-20 px-4 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-3 md:mb-4">
              Investitionsmöglichkeit
            </h2>
            <p className="text-muted-foreground text-sm md:text-lg">
              Wir suchen strategische Partner für die nächste Wachstumsphase
            </p>
          </div>
          
          <div className="bg-card border border-border rounded-xl md:rounded-2xl p-5 md:p-8 lg:p-12">
            <div className="grid sm:grid-cols-2 gap-6 md:gap-8">
              <div>
                <h3 className="font-semibold text-foreground text-sm md:text-base mb-3 md:mb-4">Verwendung der Mittel</h3>
                <ul className="space-y-2 md:space-y-3">
                  {[
                    "Produktentwicklung & KI-Capabilities",
                    "Vertriebsteam-Ausbau",
                    "Marketing & Brand Building",
                    "Infrastruktur & Skalierung"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-xs md:text-sm text-muted-foreground">
                      <CheckCircle2 className="w-3 h-3 md:w-4 md:h-4 text-primary flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-foreground text-sm md:text-base mb-3 md:mb-4">Meilensteine 2025</h3>
                <ul className="space-y-2 md:space-y-3">
                  {[
                    "100+ aktive Kunden",
                    "€500k+ ARR",
                    "3 neue Branchenvertikalen",
                    "Enterprise-Ready Plattform"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-xs md:text-sm text-muted-foreground">
                      <CheckCircle2 className="w-3 h-3 md:w-4 md:h-4 text-primary flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20 px-4 bg-gradient-to-br from-primary/5 via-background to-primary/10">
        <div className="max-w-3xl mx-auto text-center">
          <BarChart3 className="w-12 h-12 md:w-16 md:h-16 text-primary mx-auto mb-4 md:mb-6" />
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4 md:mb-6">
            Investor Deck anfordern
          </h2>
          <p className="text-base md:text-xl text-muted-foreground mb-6 md:mb-8 px-2">
            Erhalten Sie unser detailliertes Pitch Deck mit weiteren Finanzkennzahlen, 
            Wachstumsprognosen und Team-Vorstellung.
          </p>
          <Button 
            size="lg" 
            className="text-base md:text-lg px-6 md:px-8 py-5 md:py-6 rounded-full"
            asChild
          >
            <a href="mailto:invest@heybotti.de">
              Pitch Deck anfragen
              <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5" />
            </a>
          </Button>
          <p className="text-xs md:text-sm text-muted-foreground mt-4 md:mt-6">
            Vertraulich · NDA auf Anfrage verfügbar
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Investors;