"use client";

import { createContext, useContext, useState, useEffect } from "react";

export type Lang = "mn" | "en";

const LangContext = createContext<{ lang: Lang; setLang: (l: Lang) => void }>({
  lang: "mn",
  setLang: () => {},
});

export function LangProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("mn");

  useEffect(() => {
    const saved = localStorage.getItem("codebook-lang") as Lang | null;
    if (saved === "mn" || saved === "en") setLang(saved);
  }, []);

  const handleSet = (l: Lang) => {
    setLang(l);
    localStorage.setItem("codebook-lang", l);
  };

  return (
    <LangContext.Provider value={{ lang, setLang: handleSet }}>
      {children}
    </LangContext.Provider>
  );
}

export const useLang = () => useContext(LangContext);
