
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
    'hero.title': 'Bei uns läuft alles',
    'hero.title.highlight': 'automatisch',
    'hero.subtitle': 'Wir automatisieren die Prozesse in Ihrem Unternehmen, damit Sie sich auf das konzentrieren können, was wirklich wichtig ist. Keine manuelle Arbeit mehr – mehr Zeit für echte Wertschöpfung.',
    'hero.cta': 'Projekt anfragen',
    
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
