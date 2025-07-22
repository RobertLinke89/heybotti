import { useNavigate } from 'react-router-dom';

const Services = () => {
  const navigate = useNavigate();
  const services = [
    {
      id: "sales-marketing",
      title: "Sales & Marketing Automation",
      subtitle: "More leads. Less effort. Full scaling.",
      description: "Automate funnels, follow-ups and campaigns to systematically turn prospects into customers – 24/7, data-driven and personal.",
      features: [
        "Email automation",
        "Lead nurturing funnels",
        "CRM automation",
        "Chatbots / WhatsApp automation",
        "Retargeting campaigns"
      ]
    },
    {
      id: "finance",
      title: "Finance & Accounting",
      subtitle: "Fewer errors. More overview. Automatically compliant.",
      description: "Documents, payments, invoices and reports flow automatically through your systems – for a tidy back office without headaches.",
      features: [
        "Document recognition & booking",
        "Invoicing & dunning",
        "Automated bank reconciliation",
        "Tax preparation through report automation"
      ]
    },
    {
      id: "hr",
      title: "HR & Recruiting",
      subtitle: "The best talents. The best processes.",
      description: "From application to onboarding: Automation brings speed, structure and appreciation to your HR processes.",
      features: [
        "Automated candidate pre-selection",
        "Interview scheduling",
        "Onboarding automation",
        "Employee communication"
      ]
    },
    {
      id: "ecommerce",
      title: "E-Commerce & Fulfillment",
      subtitle: "Your silent e-commerce back office. Around the clock.",
      description: "Sales run, inventory is correct, returns are under control – every movement in the shop automatically triggers actions that delight your customers and relieve your warehouse.",
      features: [
        "Inventory synchronization & warehouse management",
        "Shipping processing / label creation",
        "Payment reconciliation & return handling",
        "Product feed automation for marketplaces & ads"
      ]
    },
    {
      id: "business-intelligence",
      title: "Business Intelligence & Reporting",
      subtitle: "All numbers. All answers. In real time.",
      description: "Your most important KPIs at a glance – prepared, visualized and equipped with warning systems before risks become problems.",
      features: [
        "Dashboards & KPI automation",
        "Automated data aggregation from multiple tools",
        "Early warning systems via triggers and alerts"
      ]
    },
    {
      id: "workflows",
      title: "Workflows",
      subtitle: "Efficiency starts internally.",
      description: "Standardized processes like approvals, document management or handovers run in the background – clean, traceable, scalable.",
      features: [
        "Approval processes",
        "Ticketing and support workflows",
        "Customer onboarding",
        "Contract management",
        "Document management",
        "Internal communication"
      ]
    }
  ];

  return (
    <section id="services" className="bg-background py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-6 font-raleway">
            Top areas for maximum <span className="text-primary">leverage</span>
          </h2>
          <p className="text-xl text-muted-foreground font-raleway font-light max-w-4xl mx-auto">
            Automation is no longer a luxury – it's the key to growth, efficiency and clarity in a complex working world.
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
                More Info
              </button>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <button className="bg-primary text-primary-foreground px-10 py-4 rounded-lg font-raleway font-semibold text-xl hover:bg-primary/90 transition-colors">
            Request Free Consultation
          </button>
          <p className="text-muted-foreground mt-4 font-raleway font-light">
            Which area offers the greatest potential in your company?
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;