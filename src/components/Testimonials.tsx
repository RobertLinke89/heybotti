
const Testimonials = () => {
  const testimonials = [
    {
      text: "Endlich habe ich wieder Zeit für mein Team. Die Automatisierung läuft so reibungslos, dass ich mich voll auf die strategischen Entscheidungen konzentrieren kann.",
      name: "Sarah Weber",
      position: "Geschäftsführerin, Weber Marketing GmbH",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b95c?auto=format&fit=crop&w=150&q=80"
    },
    {
      text: "Die Lösung von botti hat unseren Arbeitsalltag revolutioniert. Keine verlorenen E-Mails mehr, keine vergessenen Termine. Einfach genial!",
      name: "Michael Hoffmann",
      position: "Inhaber, Hoffmann Consulting",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
    },
    {
      text: "Was mich begeistert: Es funktioniert einfach. Kein kompliziertes Setup, keine endlosen Schulungen. Binnen weniger Tage war alles eingerichtet.",
      name: "Lisa Schneider",
      position: "Prokuristin, Schneider & Partner",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80"
    }
  ];

  return (
    <section id="testimonials" className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-text-primary mb-6 font-raleway">
            Was unsere Kunden sagen
          </h2>
          <p className="text-xl text-text-primary font-raleway font-light">
            Echte Erfahrungen von Unternehmer:innen, die mehr Zeit für das Wesentliche gewonnen haben.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-text-primary font-raleway">{testimonial.name}</h4>
                  <p className="text-sm text-text-primary font-raleway font-light">{testimonial.position}</p>
                </div>
              </div>
              <p className="text-text-primary font-raleway font-light italic">"{testimonial.text}"</p>
              <div className="flex text-btn-primary mt-4">
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
