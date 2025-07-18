
const Footer = () => {
  return (
    <footer className="bg-background py-8 border-t border-secondary">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h3 className="text-lg font-bold text-foreground mb-3 font-raleway">botti.co</h3>
          <p className="text-sm text-muted-foreground font-raleway font-light mb-4 max-w-2xl mx-auto">
            Smarte Automatisierung mit menschlichem Blick für kleine und mittelständische Unternehmen.
          </p>
          <div className="text-sm text-muted-foreground font-raleway font-light space-y-1">
            <p>E-Mail: <span className="text-primary">hello@botti.co</span></p>
            <p>Telefon: <span className="text-primary">+49 (0) 123 456789</span></p>
            <p>Mo-Fr, 9:00-18:00 Uhr</p>
          </div>
        </div>
        <div className="border-t border-secondary mt-6 pt-6 text-center">
          <p className="text-xs text-muted-foreground font-raleway font-light">
            &copy; 2024 botti.co. Alle Rechte vorbehalten.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
