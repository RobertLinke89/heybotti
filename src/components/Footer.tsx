
const Footer = () => {
  return (
    <footer className="bg-background py-8 border-t border-secondary">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <img src="/lovable-uploads/934215ae-3a62-4f6c-b9f9-76cd450405f2.png" alt="hey" className="h-6 mx-auto mb-3" />
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
