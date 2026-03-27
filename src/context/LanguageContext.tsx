"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { dict } from "@/i18n/dictionaries";

type Language = "pt" | "en";

interface LanguageContextProps {
  language: Language;
  toggleLanguage: () => void;
  t: typeof dict.pt;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("pt");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Avoid hydration mismatch by waiting for mount
    setMounted(true);
    const saved = localStorage.getItem("portfolio_lang") as Language;
    if (saved && (saved === "pt" || saved === "en")) {
      setLanguage(saved);
    }
  }, []);

  const toggleLanguage = () => {
    setLanguage((prev) => {
      const next = prev === "pt" ? "en" : "pt";
      localStorage.setItem("portfolio_lang", next);
      return next;
    });
  };

  const t = dict[language];

  // While not mounted, still render children with default PT context to avoid UI flash/block
  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
