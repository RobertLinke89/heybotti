import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'de';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
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
  
  // Team
  'team.title': 'Unser',
  'team.title.highlight': 'Team',
  'team.subtitle': 'Lerne die Experten kennen, die dein Unternehmen automatisieren und digitalisieren.',
  'team.alex.role': 'CEO & Strategie',
  'team.alex.description': 'Entwickelt maßgeschneiderte Automatisierungsstrategien für Unternehmen.',
  'team.robert.role': 'CTO & Entwicklung',
  'team.robert.description': 'Technischer Leiter mit Fokus auf innovative Lösungsarchitekturen.',
  'team.chris.role': 'Automation Engineer',
  'team.chris.description': 'Spezialist für Prozessoptimierung und intelligente Workflows.',
  'team.sebastian.role': 'Business Analyst',
  'team.sebastian.description': 'Analysiert Geschäftsprozesse und identifiziert Verbesserungspotentiale.',
  
  // CTA
  'cta.title': 'Bereit für mehr',
  'cta.title.highlight': 'Effizienz',
  'cta.subtitle': 'Lass uns in einem unverbindlichen Gespräch herausfinden, wie botti dein Unternehmen entlasten kann.',
  'cta.button': 'Projekt anfragen',
  'cta.note': 'Kein Verkaufsgespräch – nur echtes Interesse an deiner Situation.',
};


export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language] = useState<Language>('de');

  const handleSetLanguage = (lang: Language) => {
    // Language is now fixed to German only
  };

  const t = (key: string): string => {
    return translations[key] || key;
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