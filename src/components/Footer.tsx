
const Footer = () => {
  return (
    <footer className="bg-background py-12 border-t border-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-4 font-raleway">botti.co</h3>
            <p className="text-muted-foreground font-raleway font-light">
              Smarte Automatisierung mit menschlichem Blick für kleine und mittelständische Unternehmen.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-4 font-raleway">Services</h4>
            <ul className="space-y-2 text-muted-foreground font-raleway font-light">
              <li>E-Mail Automatisierung</li>
              <li>Terminorganisation</li>
              <li>Rechnungsmanagement</li>
              <li>Kommunikationshub</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-4 font-raleway">Unternehmen</h4>
            <ul className="space-y-2 text-muted-foreground font-raleway font-light">
              <li>Über uns</li>
              <li>Referenzen</li>
              <li>Karriere</li>
              <li>Kontakt</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-4 font-raleway">Kontakt</h4>
            <div className="text-muted-foreground font-raleway font-light space-y-2">
              <p>E-Mail: <span className="text-primary">hello@botti.co</span></p>
              <p>Telefon: <span className="text-primary">+49 (0) 123 456789</span></p>
              <p>Mo-Fr, 9:00-18:00 Uhr</p>
            </div>
          </div>
        </div>
        <div className="border-t border-secondary mt-8 pt-8 text-center text-muted-foreground font-raleway font-light">
          <p>&copy; 2024 botti.co. Alle Rechte vorbehalten. | Datenschutz | Impressum</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
