
import { useLanguage } from '@/contexts/LanguageContext';

const Testimonials = () => {
  const { t } = useLanguage();
  
  const testimonials = [
    {
      text: t('testimonials.sarah.text'),
      name: t('testimonials.sarah.name'),
      position: t('testimonials.sarah.position'),
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b95c?auto=format&fit=crop&w=150&q=80"
    },
    {
      text: t('testimonials.michael.text'),
      name: t('testimonials.michael.name'),
      position: t('testimonials.michael.position'),
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
    },
    {
      text: t('testimonials.lisa.text'),
      name: t('testimonials.lisa.name'),
      position: t('testimonials.lisa.position'),
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80"
    }
  ];

  return (
    <section id="testimonials" className="bg-background py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-6 font-raleway">
            {t('testimonials.title')} <span className="text-primary">{t('testimonials.title.highlight')}</span>
          </h2>
          <p className="text-xl text-muted-foreground font-raleway font-light">
            {t('testimonials.subtitle')}
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-card rounded-xl p-8 border border-secondary">
              <div className="flex items-center mb-6">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-foreground font-raleway">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground font-raleway font-light">{testimonial.position}</p>
                </div>
              </div>
              <p className="text-muted-foreground font-raleway font-light italic">"{testimonial.text}"</p>
              <div className="flex text-primary mt-4">
                {"★★★★★"}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
