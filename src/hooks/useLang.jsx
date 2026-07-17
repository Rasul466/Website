import { createContext, useContext, useState, useEffect } from 'react';
import { STRINGS } from '../data/translations.js';

const LangContext = createContext(null);

export function LangProvider({ children }) {
  const [lang, setLang] = useState(() => {
    try {
      return localStorage.getItem('portfolio.lang') || 'ru';
    } catch {
      return 'ru';
    }
  });

  useEffect(() => {
    try { localStorage.setItem('portfolio.lang', lang); } catch {}
  }, [lang]);

  const value = { lang, S: STRINGS[lang], setLang };
  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error('useLang must be used within LangProvider');
  return ctx;
}
