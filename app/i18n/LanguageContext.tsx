"use client";

import React, { createContext, useContext, useState, useEffect, useCallback } from "react";
import type { Locale, Dictionary } from "./types";
import { pt } from "./translations/pt";
import { en } from "./translations/en";
import { es } from "./translations/es";

const dictionaries: Record<Locale, Dictionary> = { pt, en, es };

interface LanguageContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: Dictionary;
}

const LanguageContext = createContext<LanguageContextType>({
  locale: "pt",
  setLocale: () => {},
  t: pt,
});

function detectInitialLocale(): Locale {
  if (typeof window === "undefined") return "pt";
  const stored = localStorage.getItem("simm-locale") as Locale | null;
  if (stored && dictionaries[stored]) return stored;
  const browserLang = navigator.language.slice(0, 2);
  if (browserLang === "en") return "en";
  if (browserLang === "es") return "es";
  return "pt";
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("pt");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setLocaleState(detectInitialLocale());
    setMounted(true);
  }, []);

  const setLocale = useCallback((l: Locale) => {
    setLocaleState(l);
    localStorage.setItem("simm-locale", l);
    document.documentElement.lang = l === "pt" ? "pt-BR" : l === "es" ? "es" : "en";
  }, []);

  const t = dictionaries[locale];

  if (!mounted) return <>{children}</>;

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useTranslation() {
  return useContext(LanguageContext);
}
