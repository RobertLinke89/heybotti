import { useState, useMemo } from 'react';
import { Slider } from '@/components/ui/slider';
import { Calculator, TrendingUp, Clock, Percent, Euro, Info } from 'lucide-react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import {
  Tooltip as UITooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const InvestorROICalculator = () => {
  const [investmentAmount, setInvestmentAmount] = useState(50000);
  const [holdingPeriod, setHoldingPeriod] = useState(5);

  // Investment parameters (conservative estimates)
  const annualGrowthRate = 0.35; // 35% annual growth
  const exitMultiple = 8; // 8x revenue multiple at exit
  const dilutionPerRound = 0.15; // 15% dilution per funding round
  const expectedRounds = 2; // Expected additional funding rounds

  const calculations = useMemo(() => {
    // Calculate projected company value over time
    const projectedValues = [];
    let currentARR = 112000; // Current ARR in EUR (Q4 2024)
    
    for (let year = 0; year <= holdingPeriod; year++) {
      const arr = currentARR * Math.pow(1 + annualGrowthRate, year);
      const companyValue = arr * exitMultiple;
      projectedValues.push({
        year: `Jahr ${year}`,
        value: Math.round(companyValue / 1000), // in thousands
        arr: Math.round(arr / 1000),
      });
    }

    // Calculate investor returns
    const currentValuation = 2000000; // €2M pre-money valuation
    const ownershipPercentage = investmentAmount / (currentValuation + investmentAmount);
    
    // Account for dilution from future rounds
    const dilutionFactor = Math.pow(1 - dilutionPerRound, expectedRounds);
    const finalOwnership = ownershipPercentage * dilutionFactor;
    
    // Exit value calculation
    const finalARR = currentARR * Math.pow(1 + annualGrowthRate, holdingPeriod);
    const exitValuation = finalARR * exitMultiple;
    const investorExitValue = exitValuation * finalOwnership;
    
    // ROI metrics
    const totalReturn = investorExitValue - investmentAmount;
    const roi = (investorExitValue / investmentAmount - 1) * 100;
    const irr = Math.pow(investorExitValue / investmentAmount, 1 / holdingPeriod) - 1;
    const multiple = investorExitValue / investmentAmount;

    return {
      projectedValues,
      ownershipPercentage: ownershipPercentage * 100,
      finalOwnership: finalOwnership * 100,
      exitValuation,
      investorExitValue,
      totalReturn,
      roi,
      irr: irr * 100,
      multiple,
    };
  }, [investmentAmount, holdingPeriod]);

  const formatCurrency = (value: number) => {
    if (value >= 1000000) {
      return `€${(value / 1000000).toFixed(2)}M`;
    }
    return `€${(value / 1000).toFixed(0)}k`;
  };

  return (
    <section className="py-12 md:py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8 md:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-primary/10 text-primary text-xs md:text-sm font-medium mb-4">
            <Calculator className="w-3 h-3 md:w-4 md:h-4" />
            Investitions-Rechner
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-3 md:mb-4">
            Berechnen Sie Ihren <span className="text-primary">potenziellen ROI</span>
          </h2>
          <p className="text-muted-foreground text-sm md:text-lg max-w-2xl mx-auto px-2">
            Simulieren Sie verschiedene Investitionsszenarien basierend auf unseren Wachstumsprognosen
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 md:gap-8">
          {/* Calculator Controls */}
          <div className="bg-card border border-border rounded-xl md:rounded-2xl p-5 md:p-8">
            <h3 className="text-lg md:text-xl font-bold text-foreground mb-6 md:mb-8">Investitionsparameter</h3>
            
            {/* Investment Amount Slider */}
            <div className="mb-8 md:mb-10">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 mb-4">
                <label className="text-sm font-medium text-foreground flex items-center gap-2">
                  <Euro className="w-4 h-4 text-primary" />
                  Investitionsbetrag
                </label>
                <span className="text-xl md:text-2xl font-bold text-primary">
                  {formatCurrency(investmentAmount)}
                </span>
              </div>
              <Slider
                value={[investmentAmount]}
                onValueChange={(value) => setInvestmentAmount(value[0])}
                min={25000}
                max={500000}
                step={5000}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-muted-foreground mt-2">
                <span>€25k</span>
                <span>€500k</span>
              </div>
            </div>

            {/* Holding Period Slider */}
            <div className="mb-8 md:mb-10">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 mb-4">
                <label className="text-sm font-medium text-foreground flex items-center gap-2">
                  <Clock className="w-4 h-4 text-primary" />
                  Haltedauer
                </label>
                <span className="text-xl md:text-2xl font-bold text-primary">
                  {holdingPeriod} Jahre
                </span>
              </div>
              <Slider
                value={[holdingPeriod]}
                onValueChange={(value) => setHoldingPeriod(value[0])}
                min={3}
                max={7}
                step={1}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-muted-foreground mt-2">
                <span>3 Jahre</span>
                <span>7 Jahre</span>
              </div>
            </div>

            {/* Assumptions */}
            <div className="bg-muted/50 rounded-lg md:rounded-xl p-4 md:p-6 space-y-3">
              <h4 className="text-sm font-semibold text-foreground flex items-center gap-2">
                Annahmen
                <TooltipProvider>
                  <UITooltip>
                    <TooltipTrigger>
                      <Info className="w-4 h-4 text-muted-foreground" />
                    </TooltipTrigger>
                    <TooltipContent className="max-w-xs">
                      <p>Basierend auf konservativen Schätzungen und Branchenbenchmarks für B2B SaaS-Unternehmen</p>
                    </TooltipContent>
                  </UITooltip>
                </TooltipProvider>
              </h4>
              <div className="grid grid-cols-2 gap-3 md:gap-4 text-xs md:text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Jährl. Wachstum</span>
                  <span className="font-medium text-foreground">35%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Exit-Multiple</span>
                  <span className="font-medium text-foreground">8x ARR</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Pre-Money</span>
                  <span className="font-medium text-foreground">€2M</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Verwässerung</span>
                  <span className="font-medium text-foreground">~28%</span>
                </div>
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="space-y-4 md:space-y-6">
            {/* Key Metrics */}
            <div className="grid grid-cols-2 gap-3 md:gap-4">
              <div className="bg-card border border-border rounded-lg md:rounded-xl p-4 md:p-6">
                <div className="flex items-center gap-1.5 md:gap-2 text-muted-foreground text-xs md:text-sm mb-1 md:mb-2">
                  <TrendingUp className="w-3 h-3 md:w-4 md:h-4" />
                  <span className="truncate">Exit-Wert</span>
                </div>
                <div className="text-xl md:text-3xl font-bold text-primary">
                  {formatCurrency(calculations.investorExitValue)}
                </div>
              </div>
              <div className="bg-card border border-border rounded-lg md:rounded-xl p-4 md:p-6">
                <div className="flex items-center gap-1.5 md:gap-2 text-muted-foreground text-xs md:text-sm mb-1 md:mb-2">
                  <Percent className="w-3 h-3 md:w-4 md:h-4" />
                  ROI
                </div>
                <div className="text-xl md:text-3xl font-bold text-primary">
                  {calculations.roi.toFixed(0)}%
                </div>
              </div>
              <div className="bg-card border border-border rounded-lg md:rounded-xl p-4 md:p-6">
                <div className="text-muted-foreground text-xs md:text-sm mb-1 md:mb-2">
                  Multiple
                </div>
                <div className="text-xl md:text-3xl font-bold text-foreground">
                  {calculations.multiple.toFixed(1)}x
                </div>
              </div>
              <div className="bg-card border border-border rounded-lg md:rounded-xl p-4 md:p-6">
                <div className="text-muted-foreground text-xs md:text-sm mb-1 md:mb-2">
                  IRR
                </div>
                <div className="text-xl md:text-3xl font-bold text-foreground">
                  {calculations.irr.toFixed(1)}%
                </div>
              </div>
            </div>

            {/* Ownership Details */}
            <div className="bg-card border border-border rounded-lg md:rounded-xl p-4 md:p-6">
              <h4 className="text-xs md:text-sm font-semibold text-foreground mb-3 md:mb-4">Beteiligungsübersicht</h4>
              <div className="space-y-2 md:space-y-3 text-xs md:text-sm">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Initiale Beteiligung</span>
                  <span className="font-semibold text-foreground">{calculations.ownershipPercentage.toFixed(2)}%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Nach Verwässerung</span>
                  <span className="font-semibold text-foreground">{calculations.finalOwnership.toFixed(2)}%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Exit-Bewertung</span>
                  <span className="font-semibold text-foreground">{formatCurrency(calculations.exitValuation)}</span>
                </div>
              </div>
            </div>

            {/* Value Projection Chart */}
            <div className="bg-card border border-border rounded-lg md:rounded-xl p-4 md:p-6">
              <h4 className="text-xs md:text-sm font-semibold text-foreground mb-3 md:mb-4">Projizierte Unternehmensentwicklung</h4>
              <ResponsiveContainer width="100%" height={160}>
                <AreaChart data={calculations.projectedValues}>
                  <defs>
                    <linearGradient id="colorValueCalc" x1="0" y1="0" x2="0" y2="1">
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
                    tickFormatter={(value) => `€${value}k`}
                    width={50}
                  />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'hsl(var(--card))', 
                      border: '1px solid hsl(var(--border))',
                      borderRadius: '8px',
                      fontSize: '12px'
                    }}
                    formatter={(value: number) => [`€${value}k`, 'Unternehmenswert']}
                  />
                  <Area 
                    type="monotone" 
                    dataKey="value" 
                    stroke="hsl(var(--primary))" 
                    strokeWidth={2}
                    fillOpacity={1} 
                    fill="url(#colorValueCalc)" 
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-8 text-center">
          <p className="text-xs text-muted-foreground max-w-2xl mx-auto">
            * Diese Berechnungen dienen ausschließlich zu Illustrationszwecken und stellen keine Garantie für zukünftige Erträge dar. 
            Tatsächliche Ergebnisse können erheblich abweichen. Investitionen in Startups sind mit hohen Risiken verbunden, 
            einschließlich des möglichen Totalverlusts des eingesetzten Kapitals.
          </p>
        </div>
      </div>
    </section>
  );
};

export default InvestorROICalculator;