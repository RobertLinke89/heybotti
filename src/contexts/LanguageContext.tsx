
import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'en' | 'de';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

type TranslationKey = 
  // Navigation
  | 'nav.home'
  | 'nav.services' 
  | 'nav.about'
  | 'nav.team'
  | 'nav.contact'
  | 'header.cta'
  // Hero
  | 'hero.title'
  | 'hero.title.highlight'
  | 'hero.subtitle'
  | 'hero.cta'
  // Services
  | 'services.title'
  | 'services.title.highlight'
  | 'services.subtitle'
  | 'services.consultation.button'
  | 'services.consultation.subtitle'
  | 'services.more.info'
  | 'services.sales.title'
  | 'services.sales.subtitle'
  | 'services.sales.description'
  | 'services.finance.title'
  | 'services.finance.subtitle'
  | 'services.finance.description'
  | 'services.hr.title'
  | 'services.hr.subtitle'
  | 'services.hr.description'
  | 'services.ecommerce.title'
  | 'services.ecommerce.subtitle'
  | 'services.ecommerce.description'
  | 'services.bi.title'
  | 'services.bi.subtitle'
  | 'services.bi.description'
  | 'services.workflows.title'
  | 'services.workflows.subtitle'
  | 'services.workflows.description'
  // About
  | 'about.title'
  | 'about.title.highlight'
  | 'about.subtitle'
  | 'about.step1.title'
  | 'about.step1.description'
  | 'about.step2.title'
  | 'about.step2.description'
  | 'about.step3.title'
  | 'about.step3.description'
  | 'about.step4.title'
  | 'about.step4.description'
  // Team
  | 'team.title'
  | 'team.title.highlight'
  | 'team.subtitle'
  | 'team.alex.role'
  | 'team.alex.description'
  | 'team.robert.role'
  | 'team.robert.description'
  | 'team.chris.role'
  | 'team.chris.description'
  | 'team.sebastian.role'
  | 'team.sebastian.description'
  | 'team.karim.role'
  | 'team.karim.description'
  // CTA
  | 'cta.title'
  | 'cta.title.highlight'
  | 'cta.subtitle'
  | 'cta.button'
  | 'cta.note'
  // Footer
  | 'footer.description'
  | 'footer.copyright'
  // Jobs CTA
  | 'jobs.cta.title'
  | 'jobs.cta.title.highlight'
  | 'jobs.cta.subtitle'
  | 'jobs.cta.button'
  // AutomationComparison
  | 'comparison.title'
  | 'comparison.subtitle'
  | 'comparison.off.title'
  | 'comparison.on.title'
  | 'comparison.without.title'
  | 'comparison.without.subtitle'
  | 'comparison.with.title'
  | 'comparison.with.subtitle'
  | 'comparison.without.feature1'
  | 'comparison.without.feature2'
  | 'comparison.without.feature3'
  | 'comparison.without.feature4'
  | 'comparison.with.feature1'
  | 'comparison.with.feature2'
  | 'comparison.with.feature3'
  | 'comparison.with.feature4'
  | 'comparison.with.feature5'
  | 'comparison.with.feature6'
  | 'comparison.with.feature7'
  | 'comparison.with.feature8'
  | 'comparison.with.feature9'
  | 'comparison.with.feature10'
  | 'comparison.testimonial.title'
  | 'comparison.testimonial.subtitle'
  | 'comparison.testimonial.quote'
  | 'comparison.testimonial.name'
  | 'comparison.testimonial.company'
  // About Page
  | 'about.page.title'
  | 'about.page.back'
  | 'about.page.content1'
  | 'about.page.content2'
  | 'about.page.content3'
  | 'about.page.cta.title'
  | 'about.page.cta.subtitle'
  | 'about.page.cta.button'
  // Jobs Page
  | 'jobs.page.title'
  | 'jobs.page.back'
  | 'jobs.page.subtitle'
  | 'jobs.mission.title'
  | 'jobs.requirements.title'
  | 'jobs.benefits.title'
  | 'jobs.apply.button'
  | 'jobs.no.position.title'
  | 'jobs.no.position.subtitle'
  | 'jobs.unsolicited.button'
  // Cookie Banner
  | 'cookies.message'
  | 'cookies.accept'
  | 'cookies.decline';

const translations: Record<Language, Record<TranslationKey, string>> = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.services': 'Services',
    'nav.about': 'About Us',
    'nav.team': 'Team',
    'nav.contact': 'Contact',
    'header.cta': 'Consultation',
    
    // Hero
    'hero.title': 'With us, everything runs',
    'hero.title.highlight': 'automatically',
    'hero.subtitle': 'We automate the processes in your company so you can focus on what really matters. No more manual work – more time for real value creation.',
    'hero.cta': 'Request Project',
    
    // Services
    'services.title': 'Top areas for maximum',
    'services.title.highlight': 'leverage',
    'services.subtitle': 'Automation is no longer a luxury – it\'s the key to growth, efficiency and clarity in a complex working world.',
    'services.consultation.button': 'Request Free Consultation',
    'services.consultation.subtitle': 'Which area offers the greatest potential in your company?',
    'services.more.info': 'More Info',
    'services.sales.title': 'Sales & Marketing Automation',
    'services.sales.subtitle': 'More leads. Less effort. Full scaling.',
    'services.sales.description': 'Automate funnels, follow-ups and campaigns to systematically turn prospects into customers – 24/7, data-driven and personal.',
    'services.finance.title': 'Finance & Accounting',
    'services.finance.subtitle': 'Fewer errors. More overview. Automatically compliant.',
    'services.finance.description': 'Documents, payments, invoices and reports flow automatically through your systems – for a tidy back office without headaches.',
    'services.hr.title': 'HR & Recruiting',
    'services.hr.subtitle': 'The best talents. The best processes.',
    'services.hr.description': 'From application to onboarding: Automation brings speed, structure and appreciation to your HR processes.',
    'services.ecommerce.title': 'E-Commerce & Fulfillment',
    'services.ecommerce.subtitle': 'Your silent e-commerce back office. Around the clock.',
    'services.ecommerce.description': 'Sales run, inventory is correct, returns are under control – every movement in the shop automatically triggers actions that delight your customers and relieve your warehouse.',
    'services.bi.title': 'Business Intelligence & Reporting',
    'services.bi.subtitle': 'All numbers. All answers. In real time.',
    'services.bi.description': 'Your most important KPIs at a glance – prepared, visualized and equipped with warning systems before risks become problems.',
    'services.workflows.title': 'Workflows',
    'services.workflows.subtitle': 'Efficiency starts internally.',
    'services.workflows.description': 'Standardized processes like approvals, document management or handovers run in the background – clean, traceable, scalable.',
    
    // About
    'about.title': 'How we',
    'about.title.highlight': 'approach',
    'about.subtitle': 'Our structured approach for sustainable automation solutions',
    'about.step1.title': 'Analysis & Goal Definition',
    'about.step1.description': 'Thorough analysis of existing processes and definition of clear goals. We identify time-consuming, error-prone tasks and determine whether time should be saved, errors reduced, or scalability increased.',
    'about.step2.title': 'Tool Selection & Technology',
    'about.step2.description': 'Selection of suitable tools and technologies for existing systems. Whether RPA, low-code platforms or API integrations – we focus on user-friendly, secure and scalable solutions.',
    'about.step3.title': 'Implementation & Testing Phase',
    'about.step3.description': 'Technical implementation with small pilot process. Automation, testing with real data and valuable employee feedback for early optimization.',
    'about.step4.title': 'Rollout & Optimization',
    'about.step4.description': 'Go-live with team training and transparent communication. Continuous reviews and extensions ensure long-term success.',
    
    // Team
    'team.title': 'Our',
    'team.title.highlight': 'Team',
    'team.subtitle': 'Meet the experts who automate and digitize your business.',
    'team.alex.role': 'Solution Architect',
    'team.alex.description': 'Designs comprehensive automation solutions that integrate seamlessly with existing business processes and drive digital transformation.',
    'team.robert.role': 'Automation Consultant',
    'team.robert.description': 'Provides strategic guidance on automation opportunities and helps organizations optimize their operational efficiency through intelligent process design.',
    'team.chris.role': 'Automation Engineer',
    'team.chris.description': 'Implements and maintains automated systems, ensuring robust performance and seamless integration across all technical platforms.',
    'team.sebastian.role': 'Business Analyst',
    'team.sebastian.description': 'Analyzes business workflows to identify automation opportunities and translates complex requirements into actionable technical specifications.',
    'team.karim.role': 'Developer',
    'team.karim.description': 'Builds and codes custom automation solutions, developing the technical infrastructure that powers our innovative business process improvements.',
    
    // CTA
    'cta.title': 'Ready for more',
    'cta.title.highlight': 'Efficiency',
    'cta.subtitle': 'Let us find out in a non-binding conversation how botti can relieve your company.',
    'cta.button': 'Request Project',
    'cta.note': 'No sales pitch – just genuine interest in your situation.',

    // Footer
    'footer.description': 'Smart automation with a human perspective for small and medium-sized businesses.',
    'footer.copyright': '© 2024 HeyBotti, a brand of oryve LLC, registered in the state of Miami, USA. All rights reserved.',

    // Jobs CTA
    'jobs.cta.title': 'Become part of our',
    'jobs.cta.title.highlight': 'Team',
    'jobs.cta.subtitle': 'You think automation differently and want to create real impact? Then you\'re in the right place. Discover our open positions.',
    'jobs.cta.button': 'View Open Positions',

    // AutomationComparison
    'comparison.title': 'The difference is clear',
    'comparison.subtitle': 'See for yourself how automation transforms your processes',
    'comparison.off.title': 'botti OFF',
    'comparison.on.title': 'botti ON',
    'comparison.without.title': 'Without Automation',
    'comparison.without.subtitle': 'Chaos and inefficiency',
    'comparison.with.title': 'With botti Automation',
    'comparison.with.subtitle': 'Clarity and efficiency',
    'comparison.without.feature1': 'Confusing communication channels',
    'comparison.without.feature2': 'Time loss through manual processes',
    'comparison.without.feature3': 'Error-prone workflows',
    'comparison.without.feature4': 'Unstructured collaboration',
    'comparison.with.feature1': 'Clear, structured processes',
    'comparison.with.feature2': 'Automated workflows',
    'comparison.with.feature3': 'Seamless team communication',
    'comparison.with.feature4': 'More time for what matters',
    'comparison.with.feature5': 'Reduced error rate',
    'comparison.with.feature6': 'Cost savings',
    'comparison.with.feature7': 'Better scalability',
    'comparison.with.feature8': 'Increased productivity',
    'comparison.with.feature9': '24/7 availability',
    'comparison.with.feature10': 'Improved data quality',
    'comparison.testimonial.title': 'Success Story',
    'comparison.testimonial.subtitle': 'Real Customer Experience',
    'comparison.testimonial.quote': 'I wonder today how we ever managed before. Since we automated our processes, many things just run in the background, without any follow-up or control chaos. The best part: My team is much more relaxed and finally has a clear head for the really important topics. I can only recommend it to anyone who wants less stress and more clarity in everyday life.',
    'comparison.testimonial.name': 'Vera',
    'comparison.testimonial.company': 'BLACK FLASH ARCHERY GmbH',
    
    // About Page
    'about.page.title': 'About Us',
    'about.page.back': 'Back to Homepage',
    'about.page.content1': 'We are Team botti – and we rethink efficiency. With smart automation solutions, we provide sustainable relief instead of just accelerating. Our focus: real added value in everyday life, individually adapted and holistically conceived – with a view to processes, people and potential.',
    'about.page.content2': 'We rely on transparency, plain language and partnership-based cooperation. From the first workshop to implementation, we deliver quickly tangible results and build future-proof structures that grow with you.',
    'about.page.content3': 'With an agile mindset, smart tools and a focus on what matters, we create digital solutions that work – for more creative freedom, productive teams and real joy at work.',
    'about.page.cta.title': 'Ready to Transform Your Business?',
    'about.page.cta.subtitle': 'Let\'s discuss how we can automate your processes and boost your efficiency.',
    'about.page.cta.button': 'Get Started',
    
    // Jobs Page
    'jobs.page.title': 'Open Positions',
    'jobs.page.back': 'Back to Homepage',
    'jobs.page.subtitle': 'Become part of our team and shape the future of automation. We are looking for talented people who bring passion for innovation and efficiency.',
    'jobs.mission.title': 'Your Mission',
    'jobs.requirements.title': 'What you bring',
    'jobs.benefits.title': 'What awaits you',
    'jobs.apply.button': 'Apply Now',
    'jobs.no.position.title': 'Didn\'t find the right position?',
    'jobs.no.position.subtitle': 'We are always looking for talented people. Send us an unsolicited application!',
    'jobs.unsolicited.button': 'Send Unsolicited Application',

    // Cookie Banner
    'cookies.message': 'We use cookies to improve your experience on our website. By using our website, you agree to the use of cookies.',
    'cookies.accept': 'Accept',
    'cookies.decline': 'Decline',
  },
  de: {
    // Navigation
    'nav.home': 'Startseite',
    'nav.services': 'Leistungen',
    'nav.about': 'Über uns',
    'nav.team': 'Team',
    'nav.contact': 'Kontakt',
    'header.cta': 'Beratung',
    
    // Hero
    'hero.title': 'Mit uns läuft\'s',
    'hero.title.highlight': 'automatisch',
    'hero.subtitle': 'Wir automatisieren die Prozesse in Ihrem Unternehmen, damit Sie sich auf das konzentrieren können, was wirklich wichtig ist. Keine manuelle Arbeit mehr – mehr Zeit für echte Wertschöpfung.',
    'hero.cta': 'Projekt anfragen',
    
    // Services
    'services.title': 'Top-Bereiche für maximalen',
    'services.title.highlight': 'Hebel',
    'services.subtitle': 'Automatisierung ist kein Luxus mehr – sie ist der Schlüssel zu Wachstum, Effizienz und Klarheit in einer komplexen Arbeitswelt.',
    'services.consultation.button': 'Kostenlose Beratung anfragen',
    'services.consultation.subtitle': 'Welcher Bereich bietet in Ihrem Unternehmen das größte Potenzial?',
    'services.more.info': 'Mehr Infos',
    'services.sales.title': 'Sales & Marketing Automatisierung',
    'services.sales.subtitle': 'Mehr Leads. Weniger Aufwand. Volle Skalierung.',
    'services.sales.description': 'Automatisieren Sie Funnels, Follow-ups und Kampagnen, um systematisch Interessenten zu Kunden zu machen – 24/7, datengetrieben und persönlich.',
    'services.finance.title': 'Finance & Buchhaltung',
    'services.finance.subtitle': 'Weniger Fehler. Mehr Überblick. Automatisch compliant.',
    'services.finance.description': 'Belege, Zahlungen, Rechnungen und Berichte fließen automatisch durch Ihre Systeme – für ein aufgeräumtes Back-Office ohne Kopfschmerzen.',
    'services.hr.title': 'HR & Recruiting',
    'services.hr.subtitle': 'Die besten Talente. Die besten Prozesse.',
    'services.hr.description': 'Von der Bewerbung bis zum Onboarding: Automatisierung bringt Geschwindigkeit, Struktur und Wertschätzung in Ihre HR-Prozesse.',
    'services.ecommerce.title': 'E-Commerce & Fulfillment',
    'services.ecommerce.subtitle': 'Ihr lautloses E-Commerce Back-Office. Rund um die Uhr.',
    'services.ecommerce.description': 'Verkäufe laufen, Lager stimmt, Retouren sind im Griff – jede Bewegung im Shop löst automatisch Aktionen aus, die Ihre Kunden begeistern und Ihr Lager entlasten.',
    'services.bi.title': 'Business Intelligence & Reporting',
    'services.bi.subtitle': 'Alle Zahlen. Alle Antworten. In Echtzeit.',
    'services.bi.description': 'Ihre wichtigsten KPIs auf einen Blick – aufbereitet, visualisiert und mit Warnsystemen ausgestattet, bevor Risiken zu Problemen werden.',
    'services.workflows.title': 'Workflows',
    'services.workflows.subtitle': 'Effizienz fängt intern an.',
    'services.workflows.description': 'Standardisierte Prozesse wie Freigaben, Dokumentenverwaltung oder Übergaben laufen im Hintergrund ab – sauber, nachvollziehbar, skalierbar.',
    
    // About
    'about.title': 'Wie wir es',
    'about.title.highlight': 'angehen',
    'about.subtitle': 'Unser strukturierter Ansatz für nachhaltige Automatisierungslösungen',
    'about.step1.title': 'Analyse & Zieldefinition',
    'about.step1.description': 'Gründliche Analyse bestehender Prozesse und Definition klarer Ziele. Wir identifizieren zeitaufwändige, fehleranfällige Aufgaben und bestimmen, ob Zeit gespart, Fehler reduziert oder Skalierbarkeit erhöht werden soll.',
    'about.step2.title': 'Tool-Auswahl & Technologie',
    'about.step2.description': 'Auswahl geeigneter Tools und Technologien für bestehende Systeme. Ob RPA, Low-Code-Plattformen oder API-Integrationen – wir setzen auf benutzerfreundliche, sichere und skalierbare Lösungen.',
    'about.step3.title': 'Implementierung & Testphase',
    'about.step3.description': 'Technische Umsetzung mit kleinem Pilotprozess. Automatisierung, Test mit echten Daten und wertvolles Mitarbeiterfeedback für frühzeitige Optimierung.',
    'about.step4.title': 'Rollout & Optimierung',
    'about.step4.description': 'Go-live mit Team-Schulung und transparenter Kommunikation. Kontinuierliche Reviews und Erweiterungen sorgen für langfristigen Erfolg.',
    
    // Team
    'team.title': 'Unser',
    'team.title.highlight': 'Team',
    'team.subtitle': 'Lernen Sie die Experten kennen, die Ihr Unternehmen automatisieren und digitalisieren.',
    'team.alex.role': 'Lösungsarchitekt',
    'team.alex.description': 'Entwirft umfassende Automatisierungslösungen, die sich nahtlos in bestehende Geschäftsprozesse integrieren und die digitale Transformation vorantreiben.',
    'team.robert.role': 'Automatisierungsberater',
    'team.robert.description': 'Bietet strategische Beratung zu Automatisierungsmöglichkeiten und hilft Organisationen dabei, ihre operative Effizienz durch intelligentes Prozessdesign zu optimieren.',
    'team.chris.role': 'Automatisierungsingenieur',
    'team.chris.description': 'Implementiert und wartet automatisierte Systeme und gewährleistet robuste Leistung und nahtlose Integration auf allen technischen Plattformen.',
    'team.sebastian.role': 'Business Analyst',
    'team.sebastian.description': 'Analysiert Geschäftsabläufe zur Identifizierung von Automatisierungsmöglichkeiten und übersetzt komplexe Anforderungen in umsetzbare technische Spezifikationen.',
    'team.karim.role': 'Entwickler',
    'team.karim.description': 'Erstellt und programmiert maßgeschneiderte Automatisierungslösungen und entwickelt die technische Infrastruktur für innovative Geschäftsprozessverbesserungen.',
    
    // CTA
    'cta.title': 'Bereit für mehr',
    'cta.title.highlight': 'Effizienz',
    'cta.subtitle': 'Lassen Sie uns in einem unverbindlichen Gespräch herausfinden, wie botti Ihr Unternehmen entlasten kann.',
    'cta.button': 'Projekt anfragen',
    'cta.note': 'Kein Verkaufsgespräch – nur echtes Interesse an Ihrer Situation.',

    // Footer
    'footer.description': 'Intelligente Automatisierung mit menschlicher Perspektive für kleine und mittlere Unternehmen.',
    'footer.copyright': '© 2024 HeyBotti, eine Marke der oryve LLC, registriert im Bundesstaat Miami, USA. Alle Rechte vorbehalten.',

    // Jobs CTA
    'jobs.cta.title': 'Werden Sie Teil unseres',
    'jobs.cta.title.highlight': 'Teams',
    'jobs.cta.subtitle': 'Sie denken Automatisierung anders und wollen echten Impact schaffen? Dann sind Sie hier richtig. Entdecken Sie unsere offenen Stellen.',
    'jobs.cta.button': 'Offene Stellen ansehen',

    // AutomationComparison
    'comparison.title': 'Der Unterschied ist klar',
    'comparison.subtitle': 'Sehen Sie selbst, wie Automatisierung Ihre Prozesse transformiert',
    'comparison.off.title': 'botti AUS',
    'comparison.on.title': 'botti AN',
    'comparison.without.title': 'Ohne Automatisierung',
    'comparison.without.subtitle': 'Chaos und Ineffizienz',
    'comparison.with.title': 'Mit botti Automatisierung',
    'comparison.with.subtitle': 'Klarheit und Effizienz',
    'comparison.without.feature1': 'Verwirrende Kommunikationskanäle',
    'comparison.without.feature2': 'Zeitverlust durch manuelle Prozesse',
    'comparison.without.feature3': 'Fehleranfällige Arbeitsabläufe',
    'comparison.without.feature4': 'Unstrukturierte Zusammenarbeit',
    'comparison.with.feature1': 'Klare, strukturierte Prozesse',
    'comparison.with.feature2': 'Automatisierte Arbeitsabläufe',
    'comparison.with.feature3': 'Nahtlose Teamkommunikation',
    'comparison.with.feature4': 'Mehr Zeit für das Wesentliche',
    'comparison.with.feature5': 'Reduzierte Fehlerrate',
    'comparison.with.feature6': 'Kosteneinsparungen',
    'comparison.with.feature7': 'Bessere Skalierbarkeit',
    'comparison.with.feature8': 'Erhöhte Produktivität',
    'comparison.with.feature9': '24/7 Verfügbarkeit',
    'comparison.with.feature10': 'Verbesserte Datenqualität',
    'comparison.testimonial.title': 'Erfolgsgeschichte',
    'comparison.testimonial.subtitle': 'Echte Kundenerfahrung',
    'comparison.testimonial.quote': 'Ich frage mich heute, wie wir das früher je geschafft haben. Seit wir unsere Prozesse automatisiert haben, läuft vieles einfach im Hintergrund ab, ohne Nachfass- oder Kontrollchaos. Das Beste: Mein Team ist viel entspannter und hat endlich den Kopf frei für die wirklich wichtigen Themen. Kann ich nur jedem empfehlen, der weniger Stress und mehr Klarheit im Alltag haben möchte.',
    'comparison.testimonial.name': 'Vera',
    'comparison.testimonial.company': 'BLACK FLASH ARCHERY GmbH',
    
    // About Page
    'about.page.title': 'Über uns',
    'about.page.back': 'Zurück zur Startseite',
    'about.page.content1': 'Wir sind Team botti – und denken Effizienz neu. Mit intelligenten Automatisierungslösungen sorgen wir für nachhaltige Entlastung statt nur Beschleunigung. Unser Fokus: echter Mehrwert im Alltag, individuell angepasst und ganzheitlich gedacht – mit Blick auf Prozesse, Menschen und Potentiale.',
    'about.page.content2': 'Wir setzen auf Transparenz, klare Sprache und partnerschaftliche Zusammenarbeit. Vom ersten Workshop bis zur Umsetzung liefern wir schnell greifbare Ergebnisse und bauen zukunftssichere Strukturen, die mit Ihnen wachsen.',
    'about.page.content3': 'Mit agilem Mindset, smarten Tools und dem Fokus auf das Wesentliche schaffen wir digitale Lösungen, die funktionieren – für mehr Gestaltungsfreiheit, produktive Teams und echte Freude an der Arbeit.',
    'about.page.cta.title': 'Bereit, Ihr Unternehmen zu transformieren?',
    'about.page.cta.subtitle': 'Lassen Sie uns besprechen, wie wir Ihre Prozesse automatisieren und Ihre Effizienz steigern können.',
    'about.page.cta.button': 'Jetzt starten',
    
    // Jobs Page
    'jobs.page.title': 'Offene Stellen',
    'jobs.page.back': 'Zurück zur Startseite',
    'jobs.page.subtitle': 'Werden Sie Teil unseres Teams und gestalten Sie die Zukunft der Automatisierung mit. Wir suchen talentierte Menschen, die Leidenschaft für Innovation und Effizienz mitbringen.',
    'jobs.mission.title': 'Ihre Mission',
    'jobs.requirements.title': 'Was Sie mitbringen',
    'jobs.benefits.title': 'Was Sie erwartet',
    'jobs.apply.button': 'Jetzt bewerben',
    'jobs.no.position.title': 'Nicht die richtige Position gefunden?',
    'jobs.no.position.subtitle': 'Wir sind immer auf der Suche nach talentierten Menschen. Senden Sie uns eine Initiativbewerbung!',
    'jobs.unsolicited.button': 'Initiativbewerbung senden',

    // Cookie Banner
    'cookies.message': 'Wir verwenden Cookies, um Ihre Erfahrung auf unserer Website zu verbessern. Durch die Nutzung unserer Website stimmen Sie der Verwendung von Cookies zu.',
    'cookies.accept': 'Akzeptieren',
    'cookies.decline': 'Ablehnen',
  }
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('de');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'de')) {
      setLanguage(savedLanguage);
    }
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
  };

  const t = (key: string): string => {
    return translations[language][key as TranslationKey] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
