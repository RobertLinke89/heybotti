import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const Legal = () => {
  const navigate = useNavigate();
  const { language } = useLanguage();

  const germanContent = (
    <div className="space-y-8">
      <section>
        <h2 className="text-2xl font-bold text-foreground mb-4 font-raleway">Angaben gemäß § 5 TMG</h2>
        <div className="bg-muted p-6 rounded-lg">
          <p className="text-foreground font-medium mb-2">PLUSPULS uGmbH</p>
          <p className="text-muted-foreground mb-1">Software & IT Lösungen</p>
          <p className="text-muted-foreground mb-1">Geschäftsführer: Alexander Herre</p>
          <p className="text-muted-foreground mb-1">Schwarzburger Chaussee 78</p>
          <p className="text-muted-foreground mb-1">07407 Rudolstadt, Deutschland</p>
          <p className="text-muted-foreground mb-4">Website: botti.co</p>
          
          <h3 className="text-lg font-semibold text-foreground mb-2">Kontakt</h3>
          <p className="text-muted-foreground mb-1">Telefon: 0176-32549166</p>
          <p className="text-muted-foreground mb-1">E-Mail: info@pluspuls.de</p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-foreground mb-4 font-raleway">Vertreten durch</h2>
        <p className="text-muted-foreground mb-4">
          PLUSPULS uGmbH wird vertreten durch ihren Geschäftsführer Alexander Herre.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-foreground mb-4 font-raleway">Registereintrag</h2>
        <p className="text-muted-foreground mb-2">
          <strong>Eintragung im Handelsregister:</strong> PLUSPULS uGmbH
        </p>
        <p className="text-muted-foreground mb-2">
          <strong>Registergericht:</strong> Deutschland
        </p>
        <p className="text-muted-foreground mb-4">
          <strong>Rechtsform:</strong> Unternehmergesellschaft (haftungsbeschränkt)
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-foreground mb-4 font-raleway">EU-Streitschlichtung</h2>
        <p className="text-muted-foreground mb-4">
          Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{' '}
          <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
            https://ec.europa.eu/consumers/odr/
          </a>
        </p>
        <p className="text-muted-foreground mb-4">
          Unsere E-Mail-Adresse finden Sie oben im Impressum.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-foreground mb-4 font-raleway">Verbraucherstreitbeilegung/Universalschlichtungsstelle</h2>
        <p className="text-muted-foreground mb-4">
          Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-foreground mb-4 font-raleway">Haftung für Inhalte</h2>
        <p className="text-muted-foreground mb-4">
          Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht unter der Verpflichtung, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
        </p>
        <p className="text-muted-foreground mb-4">
          Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-foreground mb-4 font-raleway">Haftung für Links</h2>
        <p className="text-muted-foreground mb-4">
          Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.
        </p>
        <p className="text-muted-foreground mb-4">
          Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-foreground mb-4 font-raleway">Urheberrecht</h2>
        <p className="text-muted-foreground mb-4">
          Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
        </p>
        <p className="text-muted-foreground mb-4">
          Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-foreground mb-4 font-raleway">Berufshaftpflichtversicherung</h2>
        <p className="text-muted-foreground mb-4">
          Als Beratungsunternehmen verfügen wir über eine entsprechende Berufshaftpflichtversicherung. Details hierzu teilen wir auf Anfrage gerne mit.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-foreground mb-4 font-raleway">Anwendbares Recht</h2>
        <p className="text-muted-foreground mb-4">
          Für alle Rechtsbeziehungen zwischen uns und unseren Kunden gilt das Recht der Bundesrepublik Deutschland. Bei Verbrauchern gilt diese Rechtswahl nur, soweit dadurch der durch zwingende Bestimmungen des Rechts des Staates des gewöhnlichen Aufenthaltes des Verbrauchers gewährte Schutz nicht entzogen wird.
        </p>
      </section>
    </div>
  );

  const englishContent = (
    <div className="space-y-8">
      <section>
        <h2 className="text-2xl font-bold text-foreground mb-4 font-raleway">Legal Information</h2>
        <div className="bg-muted p-6 rounded-lg">
          <p className="text-foreground font-medium mb-2">PLUSPULS uGmbH</p>
          <p className="text-muted-foreground mb-1">Software & IT Solutions</p>
          <p className="text-muted-foreground mb-1">Managing Director: Alexander Herre</p>
          <p className="text-muted-foreground mb-1">Schwarzburger Chaussee 78</p>
          <p className="text-muted-foreground mb-1">07407 Rudolstadt, Germany</p>
          <p className="text-muted-foreground mb-4">Website: botti.co</p>
          
          <h3 className="text-lg font-semibold text-foreground mb-2">Contact</h3>
          <p className="text-muted-foreground mb-1">Phone: +49 176-32549166</p>
          <p className="text-muted-foreground mb-1">E-Mail: info@pluspuls.de</p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-foreground mb-4 font-raleway">Represented by</h2>
        <p className="text-muted-foreground mb-4">
          PLUSPULS uGmbH is represented by its managing director Alexander Herre.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-foreground mb-4 font-raleway">Company Registration</h2>
        <p className="text-muted-foreground mb-2">
          <strong>Registration:</strong> PLUSPULS uGmbH
        </p>
        <p className="text-muted-foreground mb-2">
          <strong>Registry Court:</strong> Germany
        </p>
        <p className="text-muted-foreground mb-4">
          <strong>Legal Form:</strong> Unternehmergesellschaft (haftungsbeschränkt)
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-foreground mb-4 font-raleway">EU Dispute Resolution</h2>
        <p className="text-muted-foreground mb-4">
          The European Commission provides a platform for online dispute resolution (ODR):{' '}
          <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
            https://ec.europa.eu/consumers/odr/
          </a>
        </p>
        <p className="text-muted-foreground mb-4">
          You can find our email address in the legal information above.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-foreground mb-4 font-raleway">Consumer Dispute Resolution</h2>
        <p className="text-muted-foreground mb-4">
          We are not willing or obliged to participate in dispute resolution procedures before a consumer arbitration board.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-foreground mb-4 font-raleway">Liability for Contents</h2>
        <p className="text-muted-foreground mb-4">
          As a service provider, we are responsible for our own content on these pages in accordance with general laws. However, we are not obligated to monitor transmitted or stored third-party information or to investigate circumstances that indicate illegal activity.
        </p>
        <p className="text-muted-foreground mb-4">
          Obligations to remove or block the use of information under general laws remain unaffected. However, liability in this regard is only possible from the point in time at which knowledge of a specific legal violation becomes known. Upon becoming aware of corresponding legal violations, we will remove this content immediately.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-foreground mb-4 font-raleway">Liability for Links</h2>
        <p className="text-muted-foreground mb-4">
          Our website contains links to external third-party websites over whose content we have no influence. Therefore, we cannot assume any liability for this external content. The respective provider or operator of the pages is always responsible for the content of the linked pages. The linked pages were checked for possible legal violations at the time of linking. Illegal content was not recognizable at the time of linking.
        </p>
        <p className="text-muted-foreground mb-4">
          However, permanent monitoring of the content of linked pages is not reasonable without concrete evidence of a legal violation. Upon becoming aware of legal violations, we will remove such links immediately.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-foreground mb-4 font-raleway">Copyright</h2>
        <p className="text-muted-foreground mb-4">
          The content and works created by the site operators on these pages are subject to copyright law. Reproduction, editing, distribution and any kind of exploitation outside the limits of copyright require the written consent of the respective author or creator. Downloads and copies of this page are only permitted for private, non-commercial use.
        </p>
        <p className="text-muted-foreground mb-4">
          Insofar as the content on this page was not created by the operator, the copyrights of third parties are respected. In particular, third-party content is marked as such. Should you nevertheless become aware of a copyright infringement, please inform us accordingly. Upon becoming aware of legal violations, we will remove such content immediately.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-foreground mb-4 font-raleway">Professional Liability Insurance</h2>
        <p className="text-muted-foreground mb-4">
          As a consulting company, we have appropriate professional liability insurance. We are happy to share details upon request.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-foreground mb-4 font-raleway">Applicable Law</h2>
        <p className="text-muted-foreground mb-4">
          German law applies to all legal relationships between us and our customers. For consumers, this choice of law only applies insofar as the protection granted by mandatory provisions of the law of the country of the consumer's habitual residence is not thereby withdrawn.
        </p>
      </section>
    </div>
  );

  return (
    <div className="min-h-screen font-raleway bg-background">
      <Header />
      
      <main className="pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-12">
            <Button
              variant="ghost"
              onClick={() => navigate('/')}
              className="mb-6 -ml-2 text-muted-foreground hover:text-foreground"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              {language === 'de' ? 'Zurück zur Startseite' : 'Back to Homepage'}
            </Button>
            
            <div className="text-center mb-16">
              <h1 className="text-4xl font-bold text-foreground mb-6 font-raleway">
                {language === 'de' ? 'Impressum' : 'Legal Notice'}
              </h1>
              <p className="text-lg text-muted-foreground">
                {language === 'de' 
                  ? 'Rechtliche Informationen über den Anbieter dieser Website'
                  : 'Legal information about the provider of this website'
                }
              </p>
            </div>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            {language === 'de' ? germanContent : englishContent}
          </div>

          <div className="mt-12 text-center text-sm text-muted-foreground">
            <p>{language === 'de' ? 'Stand: Januar 2024' : 'Last updated: January 2024'}</p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Legal;