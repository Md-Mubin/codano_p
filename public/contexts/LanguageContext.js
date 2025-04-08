// app/contexts/LanguageContext.js
'use client';

import { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');
  const [translations, setTranslations] = useState({});

  useEffect(() => {
    const savedLang = localStorage.getItem('language') || 'en';
    changeLanguage(savedLang);
  }, []);

  const loadTranslations = async (lang) => {
    try {
      const response = await fetch(`/locales/${lang}.json`);
      const data = await response.json();
      setTranslations(data);
    } catch (error) {
      console.error('Error loading translations:', error);
    }
  };

  const changeLanguage = (lang) => {
    localStorage.setItem('language', lang);
    setLanguage(lang);
    loadTranslations(lang);
  };

  return (
    <LanguageContext.Provider value={{ t: translations, language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);