"use client";

import { useLanguage } from "@/context/LanguageContext";

export function LanguageSwitcher() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <div className="fixed top-4 right-4 z-50 flex border border-neutral-800 bg-neutral-900/80 backdrop-blur-md rounded-full shadow-lg overflow-hidden p-1">
      <button
        onClick={() => language !== "pt" && toggleLanguage()}
        className={`px-3 py-1.5 text-xs font-bold rounded-full transition-colors ${
          language === "pt"
            ? "bg-primary text-white"
            : "text-neutral-400 hover:text-white"
        }`}
      >
        PT
      </button>
      <button
        onClick={() => language !== "en" && toggleLanguage()}
        className={`px-3 py-1.5 text-xs font-bold rounded-full transition-colors ${
          language === "en"
            ? "bg-primary text-white"
            : "text-neutral-400 hover:text-white"
        }`}
      >
        EN
      </button>
    </div>
  );
}
