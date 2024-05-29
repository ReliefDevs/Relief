//Language.js

import React, { createContext, useContext, useState } from 'react';

import en from './translates/en.json';
import es from './translates/es.json';


const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('es'); // Default language is Spanish

  const resources = {
    es,
    en
  };

  const changeLanguage = (lang) => {
    setLanguage(lang);
  };

  return (
    <LanguageContext.Provider value={{ language, resources, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);

