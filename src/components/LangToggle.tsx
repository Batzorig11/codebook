"use client";

import { useLang, type Lang } from "@/context/LangContext";

export default function LangToggle() {
  const { lang, setLang } = useLang();

  return (
    <div className="flex gap-0.5 rounded-lg border border-[#17324d]/10 bg-[#f8fafc] p-1 dark:border-white/10 dark:bg-[#17324d]">
      {(["mn", "en"] as Lang[]).map((l) => (
        <button
          key={l}
          onClick={() => setLang(l)}
          className={`rounded-md px-2.5 py-1 text-xs font-black uppercase tracking-wide transition-all ${
            lang === l
              ? "bg-[#17324d] text-white dark:bg-[#ffd54f] dark:text-[#17324d]"
              : "text-[#64748b] hover:text-[#17324d] dark:text-[#94a3b8] dark:hover:text-[#e7f7ff]"
          }`}
        >
          {l}
        </button>
      ))}
    </div>
  );
}
