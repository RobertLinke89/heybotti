import { useNavigate } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

const Services = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();
  const services = [
    {
      id: "sales-marketing",
      title: t('services.sales.title'),
      subtitle: t('services.sales.subtitle'),
      description: t('services.sales.description'),
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
      title: t('services.finance.title'),
      subtitle: t('services.finance.subtitle'),
      description: t('services.finance.description'),
      features: [
        "Document recognition & booking",
        "Invoicing & dunning",
        "Automated bank reconciliation",
        "Tax preparation through report automation"
      ]
    },
    {
      id: "hr",
      title: t('services.hr.title'),
      subtitle: t('services.hr.subtitle'),
      description: t('services.hr.description'),
      features: [
        "Automated candidate pre-selection",
        "Interview scheduling",
        "Onboarding automation",
        "Employee communication"
      ]
    },
    {
      id: "ecommerce",
      title: t('services.ecommerce.title'),
      subtitle: t('services.ecommerce.subtitle'),
      description: t('services.ecommerce.description'),
      features: [
        "Inventory synchronization & warehouse management",
        "Shipping processing / label creation",
        "Payment reconciliation & return handling",
        "Product feed automation for marketplaces & ads"
      ]
    },
    {
      id: "business-intelligence",
      title: t('services.bi.title'),
      subtitle: t('services.bi.subtitle'),
      description: t('services.bi.description'),
      features: [
        "Dashboards & KPI automation",
        "Automated data aggregation from multiple tools",
        "Early warning systems via triggers and alerts"
      ]
    },
    {
      id: "workflows",
      title: t('services.workflows.title'),
      subtitle: t('services.workflows.subtitle'),
      description: t('services.workflows.description'),
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
            {t('services.title')} <span className="text-primary">{t('services.title.highlight')}</span>
          </h2>
          <p className="text-xl text-muted-foreground font-raleway font-light max-w-4xl mx-auto">
            {t('services.subtitle')}
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
                {t('services.more.info')}
              </button>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <button className="bg-primary text-primary-foreground px-10 py-4 rounded-lg font-raleway font-semibold text-xl hover:bg-primary/90 transition-colors">
            {t('services.consultation.button')}
          </button>
          <p className="text-muted-foreground mt-4 font-raleway font-light">
            {t('services.consultation.subtitle')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;