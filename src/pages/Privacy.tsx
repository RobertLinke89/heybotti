import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const Privacy = () => {
  const navigate = useNavigate();
  const { language } = useLanguage();

  const germanContent = (
    <div className="space-y-8">
      <section>
        <h2 className="text-2xl font-bold text-foreground mb-4 font-raleway">1. Datenschutz auf einen Blick</h2>
        
        <h3 className="text-xl font-semibold text-foreground mb-3 font-raleway">Allgemeine Hinweise</h3>
        <p className="text-muted-foreground mb-4">
          Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten Datenschutzerklärung.
        </p>

        <h3 className="text-xl font-semibold text-foreground mb-3 font-raleway">Datenerfassung auf dieser Website</h3>
        <h4 className="text-lg font-medium text-foreground mb-2 font-raleway">Wer ist verantwortlich für die Datenerfassung auf dieser Website?</h4>
        <p className="text-muted-foreground mb-4">
          Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Abschnitt „Hinweis zur verantwortlichen Stelle" in dieser Datenschutzerklärung entnehmen.
        </p>

        <h4 className="text-lg font-medium text-foreground mb-2 font-raleway">Wie erfassen wir Ihre Daten?</h4>
        <p className="text-muted-foreground mb-4">
          Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z. B. um Daten handeln, die Sie in ein Kontaktformular eingeben. Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z. B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs).
        </p>

        <h4 className="text-lg font-medium text-foreground mb-2 font-raleway">Wofür nutzen wir Ihre Daten?</h4>
        <p className="text-muted-foreground mb-4">
          Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.
        </p>

        <h4 className="text-lg font-medium text-foreground mb-2 font-raleway">Welche Rechte haben Sie bezüglich Ihrer Daten?</h4>
        <p className="text-muted-foreground mb-4">
          Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt haben, können Sie diese Einwilligung jederzeit für die Zukunft widerrufen. Außerdem haben Sie das Recht, unter bestimmten Umständen die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-foreground mb-4 font-raleway">2. Hosting und GDPR-Konformität</h2>
        <p className="text-muted-foreground mb-4">
          Wir hosten die Inhalte unserer Website bei folgendem Anbieter:
        </p>

        <h3 className="text-xl font-semibold text-foreground mb-3 font-raleway">GDPR-konformes Hosting in Europa</h3>
        <p className="text-muted-foreground mb-4">
          Diese Website wird auf Servern innerhalb der Europäischen Union (EU) gehostet. Alle personenbezogenen Daten, die auf dieser Website erfasst werden, werden ausschließlich auf europäischen Servern gespeichert und verarbeitet. Dies gewährleistet die vollständige Einhaltung der EU-Datenschutz-Grundverordnung (GDPR/DSGVO).
        </p>
        <p className="text-muted-foreground mb-4">
          Die personenbezogenen Daten, die auf dieser Website erfasst werden, werden auf den Servern des Hosters gespeichert. Hierbei kann es sich v. a. um IP-Adressen, Kontaktanfragen, Meta- und Kommunikationsdaten, Vertragsdaten, Kontaktdaten, Namen, Websitezugriffe und sonstige Daten, die über eine Website generiert werden, handeln.
        </p>
        <p className="text-muted-foreground mb-4">
          Das externe Hosting erfolgt zum Zwecke der Vertragserfüllung gegenüber unseren potenziellen und bestehenden Kunden (Art. 6 Abs. 1 lit. b DSGVO) und im Interesse einer sicheren, schnellen und effizienten Bereitstellung unseres Online-Angebots durch einen professionellen Anbieter (Art. 6 Abs. 1 lit. f DSGVO). Sofern eine entsprechende Einwilligung abgefragt wurde, erfolgt die Verarbeitung ausschließlich auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TTDSG.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-foreground mb-4 font-raleway">3. Allgemeine Hinweise und Pflichtinformationen</h2>

        <h3 className="text-xl font-semibold text-foreground mb-3 font-raleway">Datenschutz</h3>
        <p className="text-muted-foreground mb-4">
          Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzbestimmungen sowie dieser Datenschutzerklärung.
        </p>

        <h3 className="text-xl font-semibold text-foreground mb-3 font-raleway">Hinweis zur verantwortlichen Stelle</h3>
        <p className="text-muted-foreground mb-4">
          Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
        </p>
        <div className="bg-muted p-4 rounded-lg mb-4">
          <p className="text-foreground font-medium">HeyBotti GbR</p>
          <p className="text-muted-foreground">Erkensstraße 5</p>
          <p className="text-muted-foreground">52134 Herzogenrath, Deutschland</p>
          <p className="text-muted-foreground">E-Mail: info@heybotti.de</p>
        </div>

        <h3 className="text-xl font-semibold text-foreground mb-3 font-raleway">Speicherdauer</h3>
        <p className="text-muted-foreground mb-4">
          Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt wurde, verbleiben Ihre personenbezogenen Daten bei uns, bis der Zweck für die Datenverarbeitung entfällt. Wenn Sie ein berechtigtes Löschersuchen geltend machen oder eine Einwilligung zur Datenverarbeitung widerrufen, werden Ihre Daten gelöscht, sofern wir keine anderen rechtlich zulässigen Gründe für die Speicherung Ihrer personenbezogenen Daten haben.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-foreground mb-4 font-raleway">4. Datenerfassung auf dieser Website</h2>

        <h3 className="text-xl font-semibold text-foreground mb-3 font-raleway">Cookies</h3>
        <p className="text-muted-foreground mb-4">
          Unsere Internetseiten verwenden so genannte „Cookies". Cookies sind kleine Datenpakete und richten auf Ihrem Endgerät keinen Schaden an. Sie werden entweder vorübergehend für die Dauer einer Sitzung (Session-Cookies) oder dauerhaft (permanente Cookies) auf Ihrem Endgerät gespeichert. Session-Cookies werden nach Ende Ihres Besuchs automatisch gelöscht. Permanente Cookies bleiben auf Ihrem Endgerät gespeichert, bis Sie diese selbst löschen oder eine automatische Löschung durch Ihren Webbrowser erfolgt.
        </p>
        <p className="text-muted-foreground mb-4">
          Teilweise können auch Cookies von Drittunternehmen auf Ihrem Endgerät gespeichert werden, wenn Sie unsere Seite betreten (Third-Party-Cookies). Diese ermöglichen uns oder Ihnen die Nutzung bestimmter Dienstleistungen des Drittunternehmens (z. B. Cookies zur Abwicklung von Zahlungsdienstleistungen).
        </p>
        <p className="text-muted-foreground mb-4">
          Cookies haben verschiedene Funktionen. Zahlreiche Cookies sind technisch notwendig, da bestimmte Website-Funktionen ohne diese nicht funktionieren würden (z. B. die Warenkorbfunktion oder die Anzeige von Videos). Andere Cookies können zur Auswertung des Nutzerverhaltens oder zu Werbezwecken verwendet werden.
        </p>

        <h3 className="text-xl font-semibold text-foreground mb-3 font-raleway">Kontaktformular</h3>
        <p className="text-muted-foreground mb-4">
          Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
        </p>
        <p className="text-muted-foreground mb-4">
          Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf unserem berechtigten Interesse an der effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) sofern diese abgefragt wurde.
        </p>

        <h3 className="text-xl font-semibold text-foreground mb-3 font-raleway">Rückruf-Service</h3>
        <p className="text-muted-foreground mb-4">
          Unser Rückruf-Service ermöglicht es Ihnen, einen Termin für ein Telefongespräch zu vereinbaren. Hierbei erfassen wir Ihren Namen, Ihre E-Mail-Adresse, Telefonnummer sowie den gewünschten Rückruftermin. Diese Daten verwenden wir ausschließlich zur Durchführung des Rückrufs und löschen sie nach Abschluss des Gesprächs bzw. nach angemessener Zeit, sofern kein Vertragsverhältnis zustande kommt.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-foreground mb-4 font-raleway">5. Plugins und Tools</h2>

        <h3 className="text-xl font-semibold text-foreground mb-3 font-raleway">Google Fonts</h3>
        <p className="text-muted-foreground mb-4">
          Diese Seite nutzt zur einheitlichen Darstellung von Schriftarten so genannte Google Fonts, die von Google bereitgestellt werden. Beim Aufruf einer Seite lädt Ihr Browser die benötigten Fonts in den Browsercache, um Texte und Schriftarten korrekt anzuzeigen.
        </p>
        <p className="text-muted-foreground mb-4">
          Zu diesem Zweck muss der von Ihnen verwendete Browser Verbindung zu den Servern von Google aufnehmen. Hierdurch erlangt Google Kenntnis darüber, dass über Ihre IP-Adresse diese Website aufgerufen wurde. Die Nutzung von Google Fonts erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der Websitebetreiber hat ein berechtigtes Interesse an der einheitlichen Darstellung des Schriftbildes auf seiner Website. Sofern eine entsprechende Einwilligung abgefragt wurde, erfolgt die Verarbeitung ausschließlich auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TTDSG.
        </p>
        <p className="text-muted-foreground mb-4">
          Wenn Ihr Browser Google Fonts nicht unterstützt oder den Zugriff unterbindet, werden Texte in einer Standardschrift angezeigt.
        </p>
        <p className="text-muted-foreground mb-4">
          Weitere Informationen zu Google Fonts finden Sie unter{' '}
          <a href="https://developers.google.com/fonts/faq" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
            https://developers.google.com/fonts/faq
          </a>{' '}
          und in der Datenschutzerklärung von Google:{' '}
          <a href="https://policies.google.com/privacy?hl=de" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
            https://policies.google.com/privacy?hl=de
          </a>.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-foreground mb-4 font-raleway">6. Ihre Rechte</h2>
        <p className="text-muted-foreground mb-4">
          Sie haben folgende Rechte bezüglich Ihrer personenbezogenen Daten:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
          <li>Recht auf Auskunft (Art. 15 DSGVO)</li>
          <li>Recht auf Berichtigung (Art. 16 DSGVO)</li>
          <li>Recht auf Löschung (Art. 17 DSGVO)</li>
          <li>Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
          <li>Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</li>
          <li>Widerspruchsrecht (Art. 21 DSGVO)</li>
          <li>Recht auf Widerruf der Einwilligung (Art. 7 Abs. 3 DSGVO)</li>
        </ul>
        <p className="text-muted-foreground mb-4">
          Zur Ausübung Ihrer Rechte wenden Sie sich bitte an: hello@botti.co
        </p>
      </section>
    </div>
  );

  const englishContent = (
    <div className="space-y-8">
      <section>
        <h2 className="text-2xl font-bold text-foreground mb-4 font-raleway">1. Data Protection at a Glance</h2>
        
        <h3 className="text-xl font-semibold text-foreground mb-3 font-raleway">General Information</h3>
        <p className="text-muted-foreground mb-4">
          The following notes provide a simple overview of what happens to your personal data when you visit this website. Personal data is any data that can personally identify you. Detailed information on data protection can be found in our privacy policy listed below this text.
        </p>

        <h3 className="text-xl font-semibold text-foreground mb-3 font-raleway">Data Collection on this Website</h3>
        <h4 className="text-lg font-medium text-foreground mb-2 font-raleway">Who is responsible for data collection on this website?</h4>
        <p className="text-muted-foreground mb-4">
          Data processing on this website is carried out by the website operator. You can find their contact details in the "Information about the responsible party" section of this privacy policy.
        </p>

        <h4 className="text-lg font-medium text-foreground mb-2 font-raleway">How do we collect your data?</h4>
        <p className="text-muted-foreground mb-4">
          Your data is collected when you provide it to us. This may be data that you enter into a contact form, for example. Other data is automatically collected or collected with your consent when you visit the website through our IT systems. This is mainly technical data (e.g. internet browser, operating system or time of page access).
        </p>

        <h4 className="text-lg font-medium text-foreground mb-2 font-raleway">What do we use your data for?</h4>
        <p className="text-muted-foreground mb-4">
          Some of the data is collected to ensure error-free provision of the website. Other data may be used to analyze your user behavior.
        </p>

        <h4 className="text-lg font-medium text-foreground mb-2 font-raleway">What rights do you have regarding your data?</h4>
        <p className="text-muted-foreground mb-4">
          You have the right to receive information about the origin, recipient and purpose of your stored personal data free of charge at any time. You also have the right to request correction or deletion of this data. If you have given consent to data processing, you can revoke this consent at any time for the future. You also have the right to request restriction of the processing of your personal data under certain circumstances.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-foreground mb-4 font-raleway">2. Hosting and GDPR Compliance</h2>
        <p className="text-muted-foreground mb-4">
          We host the content of our website with the following provider:
        </p>

        <h3 className="text-xl font-semibold text-foreground mb-3 font-raleway">GDPR-Compliant Hosting in Europe</h3>
        <p className="text-muted-foreground mb-4">
          This website is hosted on servers within the European Union (EU). All personal data collected on this website is stored and processed exclusively on European servers. This ensures full compliance with the EU General Data Protection Regulation (GDPR/DSGVO).
        </p>
        <p className="text-muted-foreground mb-4">
          The personal data collected on this website is stored on the servers of the host. This may include IP addresses, contact requests, meta and communication data, contract data, contact details, names, website access and other data generated via a website.
        </p>
        <p className="text-muted-foreground mb-4">
          External hosting is carried out for the purpose of contract fulfillment towards our potential and existing customers (Art. 6 Para. 1 lit. b GDPR) and in the interest of secure, fast and efficient provision of our online offering by a professional provider (Art. 6 Para. 1 lit. f GDPR). If appropriate consent has been requested, processing is carried out exclusively on the basis of Art. 6 Para. 1 lit. a GDPR and § 25 Para. 1 TTDSG.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-foreground mb-4 font-raleway">3. General Information and Mandatory Information</h2>

        <h3 className="text-xl font-semibold text-foreground mb-3 font-raleway">Data Protection</h3>
        <p className="text-muted-foreground mb-4">
          The operators of these pages take the protection of your personal data very seriously. We treat your personal data confidentially and in accordance with statutory data protection regulations and this privacy policy.
        </p>

        <h3 className="text-xl font-semibold text-foreground mb-3 font-raleway">Information about the responsible party</h3>
        <p className="text-muted-foreground mb-4">
          The responsible party for data processing on this website is:
        </p>
        <div className="bg-muted p-4 rounded-lg mb-4">
          <p className="text-foreground font-medium">HeyBotti GbR</p>
          <p className="text-muted-foreground">Erkensstraße 5</p>
          <p className="text-muted-foreground">52134 Herzogenrath, Germany</p>
          <p className="text-muted-foreground">E-Mail: info@heybotti.de</p>
        </div>

        <h3 className="text-xl font-semibold text-foreground mb-3 font-raleway">Storage Duration</h3>
        <p className="text-muted-foreground mb-4">
          Unless a more specific storage duration has been specified within this privacy policy, your personal data will remain with us until the purpose for data processing ceases to apply. If you make a legitimate deletion request or revoke consent to data processing, your data will be deleted unless we have other legally permissible reasons for storing your personal data.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-foreground mb-4 font-raleway">4. Data Collection on this Website</h2>

        <h3 className="text-xl font-semibold text-foreground mb-3 font-raleway">Cookies</h3>
        <p className="text-muted-foreground mb-4">
          Our website uses so-called "cookies". Cookies are small data packets and do not cause any damage to your device. They are stored either temporarily for the duration of a session (session cookies) or permanently (permanent cookies) on your device. Session cookies are automatically deleted after your visit ends. Permanent cookies remain stored on your device until you delete them yourself or automatic deletion occurs through your web browser.
        </p>
        <p className="text-muted-foreground mb-4">
          In some cases, cookies from third-party companies may also be stored on your device when you enter our site (third-party cookies). These enable us or you to use certain services of the third-party company (e.g. cookies for processing payment services).
        </p>
        <p className="text-muted-foreground mb-4">
          Cookies have various functions. Many cookies are technically necessary because certain website functions would not work without them (e.g. the shopping cart function or the display of videos). Other cookies can be used to evaluate user behavior or for advertising purposes.
        </p>

        <h3 className="text-xl font-semibold text-foreground mb-3 font-raleway">Contact Form</h3>
        <p className="text-muted-foreground mb-4">
          If you send us inquiries via the contact form, your details from the inquiry form, including the contact data you provide there, will be stored by us for the purpose of processing the inquiry and in case of follow-up questions. We do not share this data without your consent.
        </p>
        <p className="text-muted-foreground mb-4">
          The processing of this data is based on Art. 6 Para. 1 lit. b GDPR if your inquiry is related to the fulfillment of a contract or is necessary for carrying out pre-contractual measures. In all other cases, the processing is based on our legitimate interest in effectively processing inquiries directed to us (Art. 6 Para. 1 lit. f GDPR) or on your consent (Art. 6 Para. 1 lit. a GDPR) if this has been requested.
        </p>

        <h3 className="text-xl font-semibold text-foreground mb-3 font-raleway">Callback Service</h3>
        <p className="text-muted-foreground mb-4">
          Our callback service allows you to schedule an appointment for a phone conversation. We collect your name, email address, phone number and the desired callback time. We use this data exclusively to conduct the callback and delete it after the conversation is completed or after a reasonable time if no contractual relationship is established.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-foreground mb-4 font-raleway">5. Plugins and Tools</h2>

        <h3 className="text-xl font-semibold text-foreground mb-3 font-raleway">Google Fonts</h3>
        <p className="text-muted-foreground mb-4">
          This site uses Google Fonts, provided by Google, for uniform font display. When you access a page, your browser loads the required fonts into the browser cache to display texts and fonts correctly.
        </p>
        <p className="text-muted-foreground mb-4">
          For this purpose, the browser you use must connect to Google's servers. This gives Google knowledge that this website was accessed via your IP address. The use of Google Fonts is based on Art. 6 Para. 1 lit. f GDPR. The website operator has a legitimate interest in the uniform display of fonts on their website. If appropriate consent has been requested, processing is carried out exclusively on the basis of Art. 6 Para. 1 lit. a GDPR and § 25 Para. 1 TTDSG.
        </p>
        <p className="text-muted-foreground mb-4">
          If your browser does not support Google Fonts or prevents access, texts will be displayed in a standard font.
        </p>
        <p className="text-muted-foreground mb-4">
          You can find more information about Google Fonts at{' '}
          <a href="https://developers.google.com/fonts/faq" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
            https://developers.google.com/fonts/faq
          </a>{' '}
          and in Google's privacy policy:{' '}
          <a href="https://policies.google.com/privacy?hl=en" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
            https://policies.google.com/privacy?hl=en
          </a>.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-foreground mb-4 font-raleway">6. Your Rights</h2>
        <p className="text-muted-foreground mb-4">
          You have the following rights regarding your personal data:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
          <li>Right to information (Art. 15 GDPR)</li>
          <li>Right to correction (Art. 16 GDPR)</li>
          <li>Right to deletion (Art. 17 GDPR)</li>
          <li>Right to restriction of processing (Art. 18 GDPR)</li>
          <li>Right to data portability (Art. 20 GDPR)</li>
          <li>Right to object (Art. 21 GDPR)</li>
          <li>Right to revoke consent (Art. 7 Para. 3 GDPR)</li>
        </ul>
        <p className="text-muted-foreground mb-4">
          To exercise your rights, please contact: hello@botti.co
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
                {language === 'de' ? 'Datenschutzerklärung' : 'Privacy Policy'}
              </h1>
              <p className="text-lg text-muted-foreground">
                {language === 'de' 
                  ? 'Informationen zum Umgang mit Ihren personenbezogenen Daten'
                  : 'Information about how we handle your personal data'
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

export default Privacy;