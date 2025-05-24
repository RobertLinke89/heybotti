
const Footer = () => {
  return (
    <footer className="bg-white py-12 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-text-primary mb-4 font-raleway">botti.co</h3>
            <p className="text-text-primary font-raleway font-light">
              Smarte Automatisierung mit menschlichem Blick für kleine und mittelständische Unternehmen.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-text-primary mb-4 font-raleway">Services</h4>
            <ul className="space-y-2 text-text-primary font-raleway font-light">
              <li>E-Mail Automatisierung</li>
              <li>Terminorganisation</li>
              <li>Rechnungsmanagement</li>
              <li>Kommunikationshub</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-text-primary mb-4 font-raleway">Unternehmen</h4>
            <ul className="space-y-2 text-text-primary font-raleway font-light">
              <li>Über uns</li>
              <li>Referenzen</li>
              <li>Karriere</li>
              <li>Kontakt</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-text-primary mb-4 font-raleway">Kontakt</h4>
            <div className="text-text-primary font-raleway font-light space-y-2">
              <p>E-Mail: hello@botti.co</p>
              <p>Telefon: +49 (0) 123 456789</p>
              <p>Mo-Fr, 9:00-18:00 Uhr</p>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-200 mt-8 pt-8 text-center text-text-primary font-raleway font-light">
          <p>&copy; 2024 botti.co. Alle Rechte vorbehalten. | Datenschutz | Impressum</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
