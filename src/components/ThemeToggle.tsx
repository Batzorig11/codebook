"use client";

import { useEffect, useState } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { Moon02Icon, Sun03Icon } from "@hugeicons/core-free-icons";

function applyTheme(isDark: boolean) {
  document.documentElement.classList.toggle("dark", isDark);
  localStorage.setItem("theme", isDark ? "dark" : "light");
}

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const shouldUseDark = savedTheme ? savedTheme === "dark" : prefersDark;

    document.documentElement.classList.toggle("dark", shouldUseDark);
    const updateButtonState = window.setTimeout(() => {
      setIsDark(shouldUseDark);
    }, 0);

    return () => window.clearTimeout(updateButtonState);
  }, []);

  return (
    <button
      type="button"
      onClick={() => {
        const nextTheme = !isDark;
        setIsDark(nextTheme);
        applyTheme(nextTheme);
      }}
      className="kid-focus inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[#17324d]/10 bg-[#f8fafc] text-[#17324d] transition hover:bg-[#e0f2fe] dark:border-white/10 dark:bg-[#17324d] dark:text-[#f8fafc] dark:hover:bg-[#23527d]"
      aria-label={isDark ? "Гэрэлтэй горим асаах" : "Харанхуй горим асаах"}
      title={isDark ? "Гэрэлтэй горим" : "Харанхуй горим"}
    >
      <HugeiconsIcon
        icon={isDark ? Sun03Icon : Moon02Icon}
        size={20}
        strokeWidth={2.2}
      />
    </button>
  );
}
