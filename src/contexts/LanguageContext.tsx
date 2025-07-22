
import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'de';

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
  // CTA
  | 'cta.title'
  | 'cta.title.highlight'
  | 'cta.subtitle'
  | 'cta.button'
  | 'cta.note';

const translations: Record<TranslationKey, string> = {
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
  'team.alex.role': 'CEO & Strategy',
  'team.alex.description': 'Develops customized automation strategies for companies.',
  'team.robert.role': 'CTO & Development',
  'team.robert.description': 'Technical leader with focus on innovative solution architectures.',
  'team.chris.role': 'Automation Engineer',
  'team.chris.description': 'Specialist for process optimization and intelligent workflows.',
  'team.sebastian.role': 'Business Analyst',
  'team.sebastian.description': 'Analyzes business processes and identifies improvement potential.',
  
  // CTA
  'cta.title': 'Ready for more',
  'cta.title.highlight': 'Efficiency',
  'cta.subtitle': 'Let us find out in a non-binding conversation how botti can relieve your company.',
  'cta.button': 'Request Project',
  'cta.note': 'No sales pitch – just genuine interest in your situation.',
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language] = useState<Language>('de');

  const handleSetLanguage = (lang: Language) => {
    // Language is now fixed to German only
  };

  const t = (key: string): string => {
    return translations[key as TranslationKey] || key;
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
