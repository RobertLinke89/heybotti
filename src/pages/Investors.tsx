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
      <section className="relative pt-20 pb-12 md:pt-28 md:pb-16 px-4 overflow-hidden">
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
        
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-medium mb-4">
            <BarChart3 className="w-3 h-3" />
            Investor Relations
          </div>
          
          <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 md:mb-5 leading-tight">
            Investieren in die Zukunft der
            <span className="text-primary block mt-1">Geschäftsautomatisierung</span>
          </h1>
          
          <p className="text-sm md:text-base lg:text-lg text-muted-foreground mb-6 md:mb-10 max-w-2xl mx-auto leading-relaxed">
            heybotti erschließt den wachsenden Markt für KI-gestützte Prozessautomatisierung 
            im deutschen Mittelstand – einem Segment mit enormem Nachholbedarf.
          </p>
          
          {/* Key Metrics Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4">
            {[
              { value: "€232 Mrd.", label: "Marktvolumen 2027", icon: Globe },
              { value: "23%", label: "CAGR 2024-2027", icon: TrendingUp },
              { value: "92%", label: "Kundenbindung", icon: Users },
              { value: "4.2x", label: "Customer LTV/CAC", icon: Target },
            ].map((metric, index) => (
              <div key={index} className="bg-card border border-border rounded-lg md:rounded-xl p-3 md:p-4">
                <metric.icon className="w-4 h-4 md:w-5 md:h-5 text-primary mx-auto mb-1.5 md:mb-2" />
                <div className="text-base md:text-xl lg:text-2xl font-bold text-foreground mb-0.5">{metric.value}</div>
                <div className="text-[10px] md:text-xs text-muted-foreground">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 md:py-16 px-4 bg-muted/30">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-foreground mb-2 md:mb-3">
              Marktchance: <span className="text-primary">Deutscher Mittelstand</span>
            </h2>
            <p className="text-muted-foreground text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
              Der globale Markt für Geschäftsprozessautomatisierung wächst exponentiell. 
              Deutschland hinkt bei der Digitalisierung hinterher.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-6 md:gap-8 items-start">
            <div className="bg-card border border-border rounded-lg md:rounded-xl p-4 md:p-5">
              <ul className="space-y-2 md:space-y-3">
                {[
                  "3,5 Mio. KMUs in Deutschland mit Automatisierungspotenzial",
                  "72% der Betriebe nutzen noch manuelle Prozesse",
                  "Fachkräftemangel treibt Nachfrage nach Automatisierung",
                  "Regulatorischer Druck erhöht Digitalisierungszwang"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs md:text-sm text-foreground">
                    <CheckCircle2 className="w-3.5 h-3.5 md:w-4 md:h-4 text-primary flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-card border border-border rounded-lg md:rounded-xl p-4 md:p-5">
              <h3 className="text-sm md:text-base font-semibold text-foreground mb-3 flex items-center gap-2">
                <LineChart className="w-4 h-4 text-primary" />
                Globales Marktvolumen (Mrd. €)
              </h3>
              <ResponsiveContainer width="100%" height={180}>
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
                    fontSize={9}
                    tick={{ fontSize: 9 }}
                  />
                  <YAxis 
                    stroke="hsl(var(--muted-foreground))"
                    fontSize={9}
                    tick={{ fontSize: 9 }}
                    tickFormatter={(value) => `€${value}`}
                    width={40}
                  />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'hsl(var(--card))', 
                      border: '1px solid hsl(var(--border))',
                      borderRadius: '8px',
                      fontSize: '11px'
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
              <p className="text-[10px] md:text-xs text-muted-foreground mt-2 text-center">
                * 2025-2027: Projektion basierend auf aktuellen Wachstumsraten
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-foreground mb-2 md:mb-3">
              Geschäftsmodell mit <span className="text-primary">skalierbaren Umsätzen</span>
            </h2>
            <p className="text-muted-foreground text-sm md:text-base max-w-xl mx-auto">
              Wiederkehrende Einnahmen und hohe Margen durch SaaS-ähnliche Strukturen
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-4 md:gap-6 mb-6 md:mb-8">
            {/* Revenue Chart */}
            <div className="bg-card border border-border rounded-lg md:rounded-xl p-4 md:p-5">
              <h3 className="text-sm md:text-base font-semibold text-foreground mb-3 flex items-center gap-2">
                <BarChart3 className="w-4 h-4 text-primary" />
                Umsatzentwicklung 2024 (Tsd. €)
              </h3>
              <ResponsiveContainer width="100%" height={180}>
                <BarChart data={revenueData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis 
                    dataKey="quarter" 
                    stroke="hsl(var(--muted-foreground))"
                    fontSize={9}
                    tick={{ fontSize: 9 }}
                  />
                  <YAxis 
                    stroke="hsl(var(--muted-foreground))"
                    fontSize={9}
                    tick={{ fontSize: 9 }}
                    width={30}
                  />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'hsl(var(--card))', 
                      border: '1px solid hsl(var(--border))',
                      borderRadius: '8px',
                      fontSize: '11px'
                    }}
                  />
                  <Legend wrapperStyle={{ fontSize: '10px' }} />
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
            <div className="bg-card border border-border rounded-lg md:rounded-xl p-4 md:p-5">
              <h3 className="text-sm md:text-base font-semibold text-foreground mb-3 flex items-center gap-2">
                <PieChart className="w-4 h-4 text-primary" />
                Kundensegmente
              </h3>
              <ResponsiveContainer width="100%" height={180}>
                <RechartsPie>
                  <Pie
                    data={customerSegments}
                    cx="50%"
                    cy="50%"
                    innerRadius={35}
                    outerRadius={60}
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
                      fontSize: '11px'
                    }}
                    formatter={(value: number) => [`${value}%`, 'Anteil']}
                  />
                </RechartsPie>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Key Business Metrics */}
          <div className="grid grid-cols-3 gap-2 md:gap-4">
            {[
              { 
                title: "Recurring Revenue", 
                value: "85%", 
                description: "Wiederkehrende Einnahmen",
                icon: Euro
              },
              { 
                title: "Gross Margin", 
                value: "78%", 
                description: "Skalierbare Infrastruktur",
                icon: TrendingUp
              },
              { 
                title: "Net Revenue Retention", 
                value: "118%", 
                description: "Kontinuierliche Erweiterung",
                icon: Users
              },
            ].map((metric, index) => (
              <div key={index} className="bg-muted/50 rounded-lg md:rounded-xl p-3 md:p-4 border border-border text-center">
                <metric.icon className="w-5 h-5 md:w-6 md:h-6 text-primary mx-auto mb-2" />
                <div className="text-lg md:text-xl lg:text-2xl font-bold text-primary mb-0.5">{metric.value}</div>
                <h3 className="font-medium text-foreground text-[10px] md:text-xs mb-0.5">{metric.title}</h3>
                <p className="text-[9px] md:text-[10px] text-muted-foreground hidden md:block">{metric.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 md:py-16 px-4 bg-muted/30">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-foreground mb-2 md:mb-3">
              Kunden-ROI: <span className="text-primary">Break-Even in 4 Monaten</span>
            </h2>
            <p className="text-muted-foreground text-sm md:text-base max-w-xl mx-auto">
              Schnelle Amortisation schafft überzeugende Value Proposition
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-6 md:gap-8 items-start">
            <div className="bg-card border border-border rounded-lg md:rounded-xl p-4 md:p-5">
              <h3 className="text-sm md:text-base font-semibold text-foreground mb-3">
                Typische ROI-Entwicklung (€)
              </h3>
              <ResponsiveContainer width="100%" height={180}>
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
                    fontSize={8}
                    tick={{ fontSize: 8 }}
                    interval={0}
                  />
                  <YAxis 
                    stroke="hsl(var(--muted-foreground))"
                    fontSize={9}
                    tick={{ fontSize: 9 }}
                    tickFormatter={(value) => `€${value}`}
                    width={45}
                  />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'hsl(var(--card))', 
                      border: '1px solid hsl(var(--border))',
                      borderRadius: '8px',
                      fontSize: '11px'
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
              <h3 className="text-base md:text-lg font-bold text-foreground mb-3 md:mb-4 text-center lg:text-left">
                ROI-Treiber für Kunden
              </h3>
              <div className="grid grid-cols-2 gap-2 md:gap-3">
                {[
                  { title: "Zeitersparnis", value: "5-10h/Woche" },
                  { title: "Fehlerreduktion", value: "90%" },
                  { title: "Schnellere Abrechnung", value: "60%" },
                  { title: "Skalierbarkeit", value: "2x" }
                ].map((item, index) => (
                  <div key={index} className="bg-card border border-border rounded-lg p-3 text-center">
                    <div className="text-primary font-bold text-sm md:text-base mb-0.5">{item.value}</div>
                    <div className="text-[10px] md:text-xs text-muted-foreground">{item.title}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ROI Calculator */}
      <InvestorROICalculator />

      <section className="py-10 md:py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 md:mb-10">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-foreground">
              Wettbewerbsvorteile
            </h2>
          </div>
          
          <div className="grid grid-cols-2 gap-2 md:gap-4">
            {[
              {
                icon: Target,
                title: "Fokus Mittelstand",
                description: "Tiefes Verständnis lokaler Anforderungen"
              },
              {
                icon: Zap,
                title: "Schnelle Implementierung",
                description: "Go-Live in 2-4 Wochen"
              },
              {
                icon: Building2,
                title: "Branchenexpertise",
                description: "Spezialisierte Lösungen"
              },
              {
                icon: Users,
                title: "Customer Success",
                description: "Persönliche Betreuung"
              }
            ].map((item, index) => (
              <div key={index} className="bg-card border border-border rounded-lg md:rounded-xl p-3 md:p-5 text-center hover:border-primary/30 transition-colors">
                <item.icon className="w-6 h-6 md:w-8 md:h-8 text-primary mx-auto mb-2 md:mb-3" />
                <h3 className="text-sm md:text-base font-bold text-foreground mb-1">{item.title}</h3>
                <p className="text-[10px] md:text-xs text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 md:py-16 px-4 bg-muted/30">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-6 md:mb-8">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-foreground mb-2">
              Investitionsmöglichkeit
            </h2>
            <p className="text-muted-foreground text-sm md:text-base">
              Wir suchen strategische Partner für die nächste Wachstumsphase
            </p>
          </div>
          
          <div className="bg-card border border-border rounded-lg md:rounded-xl p-4 md:p-6">
            <div className="grid grid-cols-2 gap-4 md:gap-6">
              <div>
                <h3 className="font-semibold text-foreground text-xs md:text-sm mb-2 md:mb-3">Verwendung der Mittel</h3>
                <ul className="space-y-1.5 md:space-y-2">
                  {[
                    "Produktentwicklung & KI",
                    "Vertriebsteam-Ausbau",
                    "Marketing & Branding",
                    "Infrastruktur & Skalierung"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-1.5 text-[10px] md:text-xs text-muted-foreground">
                      <CheckCircle2 className="w-3 h-3 text-primary flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-foreground text-xs md:text-sm mb-2 md:mb-3">Meilensteine 2025</h3>
                <ul className="space-y-1.5 md:space-y-2">
                  {[
                    "100+ aktive Kunden",
                    "€500k+ ARR",
                    "3 neue Vertikalen",
                    "Enterprise-Plattform"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-1.5 text-[10px] md:text-xs text-muted-foreground">
                      <CheckCircle2 className="w-3 h-3 text-primary flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-16 px-4 bg-gradient-to-br from-primary/5 via-background to-primary/10">
        <div className="max-w-2xl mx-auto text-center">
          <BarChart3 className="w-10 h-10 md:w-12 md:h-12 text-primary mx-auto mb-3 md:mb-4" />
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-foreground mb-3 md:mb-4">
            Investor Deck anfordern
          </h2>
          <p className="text-sm md:text-base text-muted-foreground mb-5 md:mb-6 px-2">
            Erhalten Sie unser detailliertes Pitch Deck mit weiteren Finanzkennzahlen und Team-Vorstellung.
          </p>
          <Button 
            size="default" 
            className="text-sm md:text-base px-5 md:px-6 py-4 md:py-5 rounded-full"
            asChild
          >
            <a href="mailto:invest@heybotti.de">
              Pitch Deck anfragen
              <ArrowRight className="ml-2 w-4 h-4" />
            </a>
          </Button>
          <p className="text-[10px] md:text-xs text-muted-foreground mt-3 md:mt-4">
            Vertraulich · NDA auf Anfrage verfügbar
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Investors;