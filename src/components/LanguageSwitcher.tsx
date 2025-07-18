import React from 'react';
import { useLanguage, Language } from '@/contexts/LanguageContext';

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang);
  };

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => handleLanguageChange('de')}
        className={`flex items-center gap-1 px-2 py-1 rounded transition-all duration-200 ${
          language === 'de' 
            ? 'bg-primary/10 border border-primary/20' 
            : 'hover:bg-muted/50'
        }`}
        aria-label="Switch to German"
      >
        <span className="text-lg">🇩🇪</span>
      </button>
      <button
        onClick={() => handleLanguageChange('en')}
        className={`flex items-center gap-1 px-2 py-1 rounded transition-all duration-200 ${
          language === 'en' 
            ? 'bg-primary/10 border border-primary/20' 
            : 'hover:bg-muted/50'
        }`}
        aria-label="Switch to English"
      >
        <span className="text-lg">🇺🇸</span>
      </button>
    </div>
  );
};

export default LanguageSwitcher;