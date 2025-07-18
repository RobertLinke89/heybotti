import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'de' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  de: {
    // Header
    'nav.services': 'Services',
    'nav.about': 'Über uns',
    'nav.testimonials': 'Referenzen',
    'nav.contact': 'Kontakt',
    'header.cta': 'Ruf mich an',
    
    // Hero
    'hero.title': 'Mit uns läuft\'s',
    'hero.title.highlight': 'automatisch',
    'hero.subtitle': 'Wir automatisieren die Prozesse in deinem Unternehmen, damit du dich auf das Wesentliche konzentrieren kannst. Schluss mit manueller Arbeit – mehr Zeit für echte Wertschöpfung.',
    'hero.cta': 'Projekt anfragen',
    
    // CTA
    'cta.title': 'Bereit für mehr',
    'cta.title.highlight': 'Effizienz',
    'cta.subtitle': 'Lass uns in einem unverbindlichen Gespräch herausfinden, wie botti dein Unternehmen entlasten kann.',
    'cta.button': 'Jetzt kostenlos beraten lassen',
    'cta.note': 'Kein Verkaufsgespräch – nur echtes Interesse an deiner Situation.',
  },
  en: {
    // Header
    'nav.services': 'Services',
    'nav.about': 'About Us',
    'nav.testimonials': 'References',
    'nav.contact': 'Contact',
    'header.cta': 'Call Me',
    
    // Hero
    'hero.title': 'With us, everything runs',
    'hero.title.highlight': 'automatically',
    'hero.subtitle': 'We automate the processes in your company so you can focus on what really matters. No more manual work – more time for real value creation.',
    'hero.cta': 'Request Project',
    
    // CTA
    'cta.title': 'Ready for more',
    'cta.title.highlight': 'Efficiency',
    'cta.subtitle': 'Let\'s find out in a non-binding conversation how botti can relieve your company.',
    'cta.button': 'Get Free Consultation Now',
    'cta.note': 'No sales pitch – just genuine interest in your situation.',
  }
};

// Function to detect language based on IP
const detectLanguageFromIP = async (): Promise<Language> => {
  try {
    const response = await fetch('https://ipapi.co/json/');
    const data = await response.json();
    return data.country_code === 'DE' ? 'de' : 'en';
  } catch (error) {
    console.warn('Could not detect location, defaulting to German');
    return 'de';
  }
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('de');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage) {
      setLanguage(savedLanguage);
    } else {
      detectLanguageFromIP().then(detectedLang => {
        setLanguage(detectedLang);
        localStorage.setItem('language', detectedLang);
      });
    }
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
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