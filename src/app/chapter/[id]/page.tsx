"use client";

import { use, useState } from "react";
import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  ArrowLeft02Icon,
  ArrowRight02Icon,
  BookOpen01Icon,
  CheckmarkCircle02Icon,
  Home03Icon,
} from "@hugeicons/core-free-icons";
import { chapters } from "@/data/chapters";

const chapterColors = [
  "bg-[#ffdf6e]",
  "bg-[#7dd3fc]",
  "bg-[#86efac]",
  "bg-[#fca5a5]",
  "bg-[#c4b5fd]",
  "bg-[#f9a8d4]",
  "bg-[#67e8f9]",
  "bg-[#fdba74]",
  "bg-[#bef264]",
];

function getInstructionSegmentClass(className: string) {
  if (className.includes("bg-black/30") || className.includes("text-green-400")) {
    return "mx-1 inline-block rounded-md border border-[#075985]/20 bg-[#e0f2fe] px-2 py-0.5 align-baseline font-black leading-6 text-[#075985] shadow-sm dark:border-[#93e5ff]/20 dark:bg-[#10243a] dark:text-[#93e5ff]";
  }

  if (className.includes("border-l-4")) {
    return "mt-2 block rounded-r-lg border-l-4 border-[#22c55e] bg-[#f0fdf4] px-4 py-3 font-bold text-[#166534] dark:bg-[#10243a] dark:text-[#bbf7d0]";
  }

  if (className.includes("uppercase") || className.includes("text-3xl")) {
    return "block pt-2 text-2xl font-black uppercase tracking-wide text-[#0f766e] dark:text-[#67e8f9]";
  }

  if (className.includes("ml-10")) {
    return "block pl-4 font-semibold text-[#334155] dark:text-[#d3e9f5]";
  }

  if (className.includes("font-bold")) {
    return "font-black text-[#17324d] dark:text-[#e7f7ff]";
  }

  return "font-semibold text-[#334155] dark:text-[#d3e9f5]";
}

export default function ChapterPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const [selectedLevel, setSelectedLevel] = useState<number>(0);

  const chapter = chapters[id];
  const currentColor = chapterColors[(Number(id) || 1) - 1] ?? chapterColors[0];

  if (!chapter) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center px-6 text-center text-[#17324d] dark:text-[#e7f7ff]">
        <h1 className="text-4xl font-black">Chapter not found</h1>
        <Link
          href="/"
          className="kid-focus mt-5 inline-flex items-center gap-2 rounded-lg bg-[#17324d] px-5 py-3 font-bold text-white"
        >
          <HugeiconsIcon icon={Home03Icon} size={20} strokeWidth={2} />
          Нүүр рүү буцах
        </Link>
      </main>
    );
  }

  const level = chapter.levels[selectedLevel];
  const progress = ((selectedLevel + 1) / chapter.levels.length) * 100;

  return (
    <main className="min-h-screen px-4 py-8 text-[#17324d] dark:text-[#e7f7ff] sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <Link
            href="/"
            className="kid-focus inline-flex w-fit items-center gap-2 rounded-lg bg-white px-4 py-3 text-sm font-black text-[#17324d] shadow-sm transition hover:-translate-y-0.5 hover:bg-[#e0f2fe] dark:bg-[#0f2742] dark:text-[#e7f7ff] dark:hover:bg-[#132f4d]"
          >
            <HugeiconsIcon icon={ArrowLeft02Icon} size={18} strokeWidth={2.2} />
            Нүүр
          </Link>

          <Link
            href="/codebook"
            className="kid-focus inline-flex w-fit items-center gap-2 rounded-lg bg-[#17324d] px-4 py-3 text-sm font-black text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-[#23527d] dark:bg-[#ffd54f] dark:text-[#17324d] dark:hover:bg-[#ffe27a]"
          >
            <HugeiconsIcon icon={BookOpen01Icon} size={18} strokeWidth={2.2} />
            Codebook
          </Link>
        </div>

        <section className="rounded-lg border-2 border-[#17324d]/10 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-[#0f2742] sm:p-7">
          <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_320px]">
            <div>
              <div className="mb-5 flex flex-wrap items-center gap-3">
                <span className={`rounded-lg px-3 py-2 font-pixel text-sm ${currentColor}`}>
                  {chapter.chapter}
                </span>
                <span className="rounded-lg bg-[#ecfeff] px-3 py-2 text-sm font-black text-[#0e7490]">
                  Level {selectedLevel + 1} / {chapter.levels.length}
                </span>
              </div>

              <h1 className="text-3xl font-black tracking-tight dark:text-[#e7f7ff] sm:text-5xl">
                {chapter.title}
              </h1>
              <p className="mt-4 inline-flex rounded-lg bg-[#f8fafc] px-4 py-2 text-lg font-black text-[#475569] dark:bg-[#10243a] dark:text-[#b8d7e8]">
                {level.subtitle}
              </p>

              <div className="mt-6 h-3 overflow-hidden rounded-lg bg-[#e2e8f0] dark:bg-[#10243a]">
                <div
                  className="h-full rounded-lg bg-[#22c55e] transition-all"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>

            <div className="rounded-lg bg-[#f8fafc] p-4 dark:bg-[#10243a]">
              <p className="mb-3 text-sm font-black uppercase tracking-wide text-[#64748b] dark:text-[#b8d7e8]">
                Түвшин сонгох
              </p>
              <div className="grid grid-cols-4 gap-2">
                {chapter.levels.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setSelectedLevel(i)}
                    aria-current={selectedLevel === i ? "step" : undefined}
                    className={`kid-focus h-12 rounded-lg border-2 text-sm font-black transition ${
                      selectedLevel === i
                        ? "border-[#17324d] bg-[#17324d] text-white dark:border-[#ffd54f] dark:bg-[#ffd54f] dark:text-[#17324d]"
                        : "border-[#cbd5e1] bg-white text-[#17324d] hover:border-[#38bdf8] dark:border-white/10 dark:bg-[#0f2742] dark:text-[#e7f7ff] dark:hover:border-[#38bdf8]"
                    }`}
                  >
                    {i + 1}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mt-5 grid gap-5 lg:grid-cols-[minmax(0,1fr)_280px]">
          <article className="rounded-lg border-2 border-[#17324d]/10 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-[#0f2742] sm:p-7">
            <div className="mb-6 flex items-center gap-3">
              <span className={`rounded-lg p-2 ${currentColor}`}>
                <HugeiconsIcon icon={CheckmarkCircle02Icon} size={24} strokeWidth={2.2} />
              </span>
              <h2 className="text-2xl font-black dark:text-[#e7f7ff]">Даалгаврын тайлбар</h2>
            </div>

            <div className="space-y-5 text-lg font-semibold leading-8 text-[#334155] dark:text-[#d3e9f5]">
              {level.instructions.map((paragraph, pi) => (
                <p key={pi}>
                  {paragraph.map((segment, si) =>
                    segment.className ? (
                      <span
                        key={si}
                        className={getInstructionSegmentClass(segment.className)}
                      >
                        {segment.text}
                      </span>
                    ) : (
                      segment.text
                    ),
                  )}
                </p>
              ))}
            </div>
          </article>

          <aside className="rounded-lg border-2 border-[#17324d]/10 bg-[#fff7ed] p-5 shadow-sm dark:border-white/10 dark:bg-[#231b12]">
            <h2 className="text-xl font-black text-[#9a3412] dark:text-[#fdba74]">Санах дараалал</h2>
            <ol className="mt-4 space-y-3 text-sm font-bold leading-6 text-[#7c2d12] dark:text-[#fed7aa]">
              <li>1. Газрын зургаа ажигла.</li>
              <li>2. Хэрэгтэй командыг сонго.</li>
              <li>3. Мөрүүдээ зөв дарааллаар бич.</li>
              <li>4. Run дарж үр дүнгээ шалга.</li>
            </ol>

            <button
              type="button"
              onClick={() =>
                setSelectedLevel((prev) =>
                  prev < chapter.levels.length - 1 ? prev + 1 : prev,
                )
              }
              disabled={selectedLevel === chapter.levels.length - 1}
              className="kid-focus mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#22c55e] px-4 py-3 text-sm font-black text-white shadow-sm transition hover:bg-[#16a34a] disabled:cursor-not-allowed disabled:bg-[#94a3b8]"
            >
              Дараагийн түвшин
              <HugeiconsIcon icon={ArrowRight02Icon} size={18} strokeWidth={2.2} />
            </button>
          </aside>
        </section>
      </div>
    </main>
  );
}
