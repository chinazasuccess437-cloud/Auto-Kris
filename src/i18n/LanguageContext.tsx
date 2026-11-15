import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { LanguageCode, LanguageOption } from '../types';
import { AVAILABLE_LANGUAGES, TranslationDict, TranslationRegistry } from './schema';
import { LOCALES_CORE } from './localesCore';
import { LOCALES_EUROPE_ASIA } from './localesEuropeAsia';
import { LOCALES_GLOBAL } from './localesGlobal';

const BASE_TRANSLATIONS: TranslationRegistry = {
  ...LOCALES_CORE,
  ...LOCALES_EUROPE_ASIA,
  ...LOCALES_GLOBAL,
};

interface LanguageContextValue {
  language: LanguageCode;
  setLanguage: (code: LanguageCode) => void;
  currentOption: LanguageOption;
  languages: LanguageOption[];
  t: (key: keyof TranslationDict, vars?: Record<string, string | number>) => string;
  registerTranslationPack: (code: LanguageCode, partial: Partial<TranslationDict>) => void;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

const STORAGE_KEY = 'auto_kris_lang';

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // French MUST be the default language when visitors first open the website.
  const [language, setLanguageState] = useState<LanguageCode>(() => {
    try {
      const saved = window.sessionStorage.getItem(STORAGE_KEY) as LanguageCode | null;
      if (saved && saved in BASE_TRANSLATIONS) {
        return saved;
      }
    } catch {
      // Ignore storage access errors
    }
    return 'fr';
  });

  const [customPacks, setCustomPacks] = useState<Partial<Record<LanguageCode, Partial<TranslationDict>>>>({});

  const setLanguage = (code: LanguageCode) => {
    setLanguageState(code);
    try {
      window.sessionStorage.setItem(STORAGE_KEY, code);
    } catch {
      // Ignore storage errors
    }
  };

  const registerTranslationPack = (code: LanguageCode, partial: Partial<TranslationDict>) => {
    setCustomPacks((prev) => ({
      ...prev,
      [code]: { ...(prev[code] || {}), ...partial },
    }));
  };

  const currentOption = useMemo(
    () => AVAILABLE_LANGUAGES.find((l) => l.code === language) ?? AVAILABLE_LANGUAGES[0],
    [language]
  );

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = currentOption.dir ?? 'ltr';
  }, [language, currentOption]);

  const t = (key: keyof TranslationDict, vars?: Record<string, string | number>): string => {
    const custom = customPacks[language]?.[key];
    const base = BASE_TRANSLATIONS[language]?.[key] ?? BASE_TRANSLATIONS.fr[key];
    let text = custom ?? base;
    if (vars) {
      for (const [k, v] of Object.entries(vars)) {
        text = text.replace(`{${k}}`, String(v));
      }
    }
    return text;
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        currentOption,
        languages: AVAILABLE_LANGUAGES,
        t,
        registerTranslationPack,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export function useTranslation() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error('useTranslation must be used within a LanguageProvider');
  }
  return ctx;
}
