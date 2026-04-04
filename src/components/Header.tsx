"use client";

import { useState } from "react";

export default function Header() {
  const [lang, setLang] = useState<"en" | "mn">("en");

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-4 bg-[#2F3129]/80 backdrop-blur-sm border-b border-white/10">
      <a href="/">
        <img src="/kami-logo.png" alt="Kami Logo" className="h-10" />
      </a>

      <div className="flex items-center gap-6">
        <button
          onClick={() => setLang(lang === "en" ? "mn" : "en")}
          className="px-4 py-2 border border-white/30 rounded-full text-sm tracking-wide hover:bg-white/10 transition-colors cursor-pointer uppercase"
        >
          {lang === "en" ? "MN" : "EN"}
        </button>

        <a
          href="/login"
          className="px-4 py-2 border border-white/30 rounded-full text-sm tracking-wide hover:bg-white/10 transition-colors"
        >
          Login / Sign up
        </a>
      </div>
    </header>
  );
}
