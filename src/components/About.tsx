
const About = () => {
  return (
    <section id="about" className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80" 
              alt="Entspanntes Team - mehr Zeit für das Wesentliche"
              className="w-full h-auto rounded-2xl shadow-xl"
            />
          </div>
          <div>
            <h2 className="text-4xl font-bold text-text-primary mb-6 font-raleway">
              Für Entscheider:innen, die mehr wollen als Technik
            </h2>
            <div className="space-y-6 text-lg text-text-primary font-raleway font-light">
              <p>
                <strong className="font-semibold">Klarheit</strong> statt Chaos. Unsere Lösungen wirken im Hintergrund – leise, effizient, zuverlässig.
              </p>
              <p>
                <strong className="font-semibold">Zeitgewinn</strong> für das Wesentliche. Digitalisierung mit Klartext, nicht Technik-Jargon.
              </p>
              <p>
                <strong className="font-semibold">Neue Leichtigkeit</strong> in der Führung. Persönlich, nah und mit wirklichem Interesse für dich und dein Unternehmen.
              </p>
              <p className="text-btn-primary font-semibold text-xl">
                botti ist dein digitaler Assistent für das Wesentliche.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
