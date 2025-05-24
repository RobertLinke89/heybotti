
import { Phone } from 'lucide-react';

const CTA = () => {
  return (
    <section className="bg-text-primary py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-white mb-6 font-raleway">
          Bereit für mehr Klarheit in deinem Arbeitsalltag?
        </h2>
        <p className="text-xl text-white mb-8 font-raleway font-light">
          Lass uns in einem unverbindlichen Gespräch herausfinden, wie botti dein Unternehmen entlasten kann.
        </p>
        <button className="bg-btn-primary text-white px-10 py-4 rounded-lg font-raleway font-semibold text-xl hover:bg-opacity-90 transition-colors flex items-center justify-center gap-3 mx-auto">
          <Phone size={24} />
          Jetzt kostenlos beraten lassen
        </button>
        <p className="text-white mt-4 font-raleway font-light">
          Kein Verkaufsgespräch – nur echtes Interesse an deiner Situation.
        </p>
      </div>
    </section>
  );
};

export default CTA;
