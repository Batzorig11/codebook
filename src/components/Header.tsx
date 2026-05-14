"use client";

import Image from "next/image";
import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import { BookOpen01Icon, Home03Icon, SchoolIcon } from "@hugeicons/core-free-icons";
import ThemeToggle from "@/components/ThemeToggle";
// import { useState } from "react";

export default function Header() {
  // const [lang, setLang] = useState<"en" | "mn">("en");

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-[#17324d]/10 bg-white/88 backdrop-blur-md dark:border-white/10 dark:bg-[#0b1f33]/88">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
      <Link href="/" className="kid-focus rounded-lg">
        <Image
          src="/kami-logo.png"
          alt="Kami Logo"
          width={108}
          height={48}
          style={{ width: "auto", height: "48px" }}
          priority
        />
      </Link>

      <nav className="flex items-center gap-2" aria-label="Primary navigation">
        <Link
          href="/"
          className="kid-focus inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-bold text-[#17324d] transition hover:bg-[#e0f2fe] dark:text-[#e7f7ff] dark:hover:bg-white/10"
        >
          <HugeiconsIcon icon={Home03Icon} size={18} strokeWidth={2} />
          Нүүр
        </Link>
        <Link
          href="/student-guides"
          className="kid-focus hidden items-center gap-2 rounded-lg px-3 py-2 text-sm font-bold text-[#17324d] transition hover:bg-[#e0f2fe] dark:text-[#e7f7ff] dark:hover:bg-white/10 sm:inline-flex"
        >
          <HugeiconsIcon icon={SchoolIcon} size={18} strokeWidth={2} />
          Гарын авлага
        </Link>
        <Link
          href="/codebook"
          className="kid-focus inline-flex items-center gap-2 rounded-lg bg-[#17324d] px-3 py-2 text-sm font-bold text-white shadow-sm transition hover:bg-[#23527d] dark:bg-[#ffd54f] dark:text-[#17324d] dark:hover:bg-[#ffe27a]"
        >
          <HugeiconsIcon icon={BookOpen01Icon} size={18} strokeWidth={2} />
          Codebook
        </Link>
        <ThemeToggle />
      </nav>

      <div className="hidden items-center gap-6">
        {/* <button
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
        </a> */}
      </div>
      </div>
    </header>
  );
}
