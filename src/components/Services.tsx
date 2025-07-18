
import { useLanguage } from '@/contexts/LanguageContext';

const Services = () => {
  const { t } = useLanguage();
  
  const services = [
    {
      id: "sales-marketing",
      title: t('services.salesMarketing.title'),
      subtitle: t('services.salesMarketing.subtitle'),
      description: t('services.salesMarketing.description'),
      features: [
        t('services.salesMarketing.features.email'),
        t('services.salesMarketing.features.leadNurturing'),
        t('services.salesMarketing.features.crm'),
        t('services.salesMarketing.features.chatbots'),
        t('services.salesMarketing.features.retargeting')
      ]
    },
    {
      id: "finance",
      title: t('services.finance.title'),
      subtitle: t('services.finance.subtitle'),
      description: t('services.finance.description'),
      features: [
        t('services.finance.features.receipt'),
        t('services.finance.features.invoicing'),
        t('services.finance.features.banking'),
        t('services.finance.features.tax')
      ]
    },
    {
      id: "hr",
      title: t('services.hr.title'),
      subtitle: t('services.hr.subtitle'),
      description: t('services.hr.description'),
      features: [
        t('services.hr.features.applicantScreening'),
        t('services.hr.features.scheduling'),
        t('services.hr.features.onboarding'),
        t('services.hr.features.communication')
      ]
    },
    {
      id: "ecommerce",
      title: t('services.ecommerce.title'),
      subtitle: t('services.ecommerce.subtitle'),
      description: t('services.ecommerce.description'),
      features: [
        t('services.ecommerce.features.inventory'),
        t('services.ecommerce.features.shipping'),
        t('services.ecommerce.features.payment'),
        t('services.ecommerce.features.productFeed')
      ]
    },
    {
      id: "business-intelligence",
      title: t('services.businessIntelligence.title'),
      subtitle: t('services.businessIntelligence.subtitle'),
      description: t('services.businessIntelligence.description'),
      features: [
        t('services.businessIntelligence.features.dashboards'),
        t('services.businessIntelligence.features.dataAggregation'),
        t('services.businessIntelligence.features.earlyWarning')
      ]
    },
    {
      id: "workflows",
      title: t('services.workflows.title'),
      subtitle: t('services.workflows.subtitle'),
      description: t('services.workflows.description'),
      features: [
        t('services.workflows.features.approval'),
        t('services.workflows.features.ticketing'),
        t('services.workflows.features.customerOnboarding'),
        t('services.workflows.features.contracts'),
        t('services.workflows.features.documents'),
        t('services.workflows.features.communication')
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
              
              <button className="w-full bg-primary/10 text-primary border border-primary/20 px-6 py-3 rounded-lg font-raleway font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                {t('services.automateNow')}
              </button>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <button className="bg-primary text-primary-foreground px-10 py-4 rounded-lg font-raleway font-semibold text-xl hover:bg-primary/90 transition-colors">
            {t('services.freeConsultation')}
          </button>
          <p className="text-muted-foreground mt-4 font-raleway font-light">
            {t('services.potentialQuestion')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
