import type { Metadata } from "next";
import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  ArrowLeft02Icon,
  BookOpen01Icon,
  CheckmarkCircle02Icon,
  CodeIcon,
  GameController03Icon,
  Rocket02Icon,
  SchoolIcon,
} from "@hugeicons/core-free-icons";
import {
  assessmentRubric,
  dailyStructure,
  kami2Days,
  kami2Overview,
  projectFiles,
  starterCode,
} from "@/data/kami2-curriculum";

export const metadata: Metadata = {
  title: "Kami-2 JavaScript Curriculum | CodeBook",
  description:
    "10 day advanced Kami curriculum where students build their own browser JavaScript platformer game.",
};

const dayColors = [
  "border-[#ffdf6e] bg-[#fff8dc]",
  "border-[#7dd3fc] bg-[#ecfeff]",
  "border-[#86efac] bg-[#f0fdf4]",
  "border-[#fca5a5] bg-[#fff1f2]",
  "border-[#c4b5fd] bg-[#f5f3ff]",
  "border-[#f9a8d4] bg-[#fdf2f8]",
  "border-[#67e8f9] bg-[#ecfeff]",
  "border-[#fdba74] bg-[#fff7ed]",
  "border-[#bef264] bg-[#f7fee7]",
  "border-[#93c5fd] bg-[#eff6ff]",
];

export default function Kami2Page() {
  return (
    <main className="min-h-screen px-4 py-8 text-[#17324d] dark:text-[#e7f7ff] sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <Link
          href="/"
          className="kid-focus mb-6 inline-flex items-center gap-2 rounded-lg bg-white px-4 py-3 text-sm font-black text-[#17324d] shadow-sm transition hover:-translate-y-0.5 hover:bg-[#e0f2fe] dark:bg-[#0f2742] dark:text-[#e7f7ff] dark:hover:bg-[#132f4d]"
        >
          <HugeiconsIcon icon={ArrowLeft02Icon} size={18} strokeWidth={2.2} />
          Нүүр рүү буцах
        </Link>

        <section className="mb-6 rounded-lg border-2 border-[#17324d]/10 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-[#0f2742] sm:p-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-4xl">
              <p className="mb-4 inline-flex items-center gap-2 rounded-lg bg-[#dcfce7] px-3 py-2 text-sm font-black text-[#166534]">
                <HugeiconsIcon icon={GameController03Icon} size={18} strokeWidth={2} />
                {kami2Overview.subtitle}
              </p>
              <h1 className="font-pixel text-3xl leading-tight text-[#17324d] dark:text-[#e7f7ff] sm:text-5xl">
                {kami2Overview.title}
              </h1>
              <p className="mt-5 max-w-3xl text-lg font-semibold leading-8 text-[#48647d] dark:text-[#b8d7e8]">
                {kami2Overview.goal}
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 lg:w-[360px] lg:grid-cols-1">
              <div className="rounded-lg bg-[#f8fafc] p-4 dark:bg-[#10243a]">
                <p className="text-xs font-black uppercase tracking-wide text-[#64748b] dark:text-[#b8d7e8]">
                  Хугацаа
                </p>
                <p className="mt-1 text-lg font-black">{kami2Overview.duration}</p>
              </div>
              <div className="rounded-lg bg-[#f8fafc] p-4 dark:bg-[#10243a]">
                <p className="text-xs font-black uppercase tracking-wide text-[#64748b] dark:text-[#b8d7e8]">
                  Сурагчид
                </p>
                <p className="mt-1 text-lg font-black">{kami2Overview.audience}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-6 grid gap-5 lg:grid-cols-[minmax(0,1.15fr)_minmax(320px,0.85fr)]">
          <article className="rounded-lg border-2 border-[#17324d]/10 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-[#0f2742] sm:p-6">
            <div className="mb-5 flex items-center gap-3">
              <span className="rounded-lg bg-[#ffd54f] p-2 text-[#17324d]">
                <HugeiconsIcon icon={Rocket02Icon} size={22} strokeWidth={2.2} />
              </span>
              <h2 className="text-2xl font-black">Final project</h2>
            </div>
            <p className="text-lg font-semibold leading-8 text-[#334155] dark:text-[#d3e9f5]">
              {kami2Overview.finalProject}
            </p>
          </article>

          <article className="rounded-lg border-2 border-[#17324d]/10 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-[#0f2742] sm:p-6">
            <div className="mb-5 flex items-center gap-3">
              <span className="rounded-lg bg-[#7dd3fc] p-2 text-[#17324d]">
                <HugeiconsIcon icon={SchoolIcon} size={22} strokeWidth={2.2} />
              </span>
              <h2 className="text-2xl font-black">90 минутын бүтэц</h2>
            </div>
            <div className="space-y-3">
              {dailyStructure.map((item, index) => (
                <div
                  key={`${item.time}-${index}`}
                  className="grid grid-cols-[76px_minmax(0,1fr)] gap-3 rounded-lg bg-[#f8fafc] p-3 dark:bg-[#10243a]"
                >
                  <span className="font-pixel text-xs leading-6 text-[#0f766e] dark:text-[#67e8f9]">
                    {item.time}
                  </span>
                  <span className="text-sm font-bold leading-6 text-[#334155] dark:text-[#d3e9f5]">
                    {item.activity}
                  </span>
                </div>
              ))}
            </div>
          </article>
        </section>

        <section className="mb-6">
          <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="mb-2 inline-flex items-center gap-2 rounded-lg bg-[#e0f2fe] px-3 py-1 text-sm font-black text-[#075985]">
                <HugeiconsIcon icon={CodeIcon} size={18} strokeWidth={2} />
                10 өдрийн curriculum
              </p>
              <h2 className="text-3xl font-black tracking-tight text-[#17324d] dark:text-[#e7f7ff]">
                Өдөр бүр нэг playable feature
              </h2>
            </div>
            <p className="max-w-xl text-base font-semibold leading-7 text-[#48647d] dark:text-[#b8d7e8]">
              Сурагчид эхний өдрөөс шууд browser дээр ажиллах project үүсгээд,
              өдөр бүр өөрийн тоглоомдоо шинэ систем нэмнэ.
            </p>
          </div>

          <div className="grid gap-4 lg:grid-cols-2">
            {kami2Days.map((day, index) => (
              <article
                key={day.day}
                className={`rounded-lg border-2 p-5 shadow-sm dark:border-white/10 dark:bg-[#0f2742] ${
                  dayColors[index] ?? dayColors[0]
                }`}
              >
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <p className="font-pixel text-sm text-[#0f766e] dark:text-[#67e8f9]">
                      Day {day.day}
                    </p>
                    <h3 className="mt-2 text-2xl font-black text-[#17324d] dark:text-[#e7f7ff]">
                      {day.title}
                    </h3>
                  </div>
                  <span className="inline-flex w-fit rounded-lg bg-white px-3 py-2 text-xs font-black uppercase tracking-wide text-[#475569] shadow-sm dark:bg-[#10243a] dark:text-[#b8d7e8]">
                    {day.concepts.join(" / ")}
                  </span>
                </div>

                <p className="mt-4 text-base font-bold leading-7 text-[#334155] dark:text-[#d3e9f5]">
                  {day.theme}
                </p>

                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  <div>
                    <p className="text-xs font-black uppercase tracking-wide text-[#64748b] dark:text-[#b8d7e8]">
                      Build
                    </p>
                    <p className="mt-1 text-sm font-semibold leading-6 text-[#334155] dark:text-[#d3e9f5]">
                      {day.build}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-black uppercase tracking-wide text-[#64748b] dark:text-[#b8d7e8]">
                      Outcome
                    </p>
                    <p className="mt-1 text-sm font-semibold leading-6 text-[#334155] dark:text-[#d3e9f5]">
                      {day.outcome}
                    </p>
                  </div>
                </div>

                <div className="mt-4 rounded-lg bg-white/76 p-4 dark:bg-[#10243a]">
                  <p className="text-xs font-black uppercase tracking-wide text-[#0f766e] dark:text-[#67e8f9]">
                    Багшийн focus
                  </p>
                  <p className="mt-1 text-sm font-semibold leading-6 text-[#334155] dark:text-[#d3e9f5]">
                    {day.teacherFocus}
                  </p>
                  <p className="mt-3 text-xs font-black uppercase tracking-wide text-[#9a3412] dark:text-[#fdba74]">
                    Challenge
                  </p>
                  <p className="mt-1 text-sm font-semibold leading-6 text-[#334155] dark:text-[#d3e9f5]">
                    {day.challenge}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mb-6 grid gap-5 lg:grid-cols-[minmax(320px,0.82fr)_minmax(0,1.18fr)]">
          <article className="rounded-lg border-2 border-[#17324d]/10 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-[#0f2742] sm:p-6">
            <div className="mb-5 flex items-center gap-3">
              <span className="rounded-lg bg-[#86efac] p-2 text-[#17324d]">
                <HugeiconsIcon icon={BookOpen01Icon} size={22} strokeWidth={2.2} />
              </span>
              <h2 className="text-2xl font-black">Project files</h2>
            </div>
            <div className="space-y-3">
              {projectFiles.map((file) => (
                <div
                  key={file.name}
                  className="rounded-lg border border-[#17324d]/10 bg-[#f8fafc] p-4 dark:border-white/10 dark:bg-[#10243a]"
                >
                  <p className="font-mono text-sm font-black text-[#075985] dark:text-[#93e5ff]">
                    {file.name}
                  </p>
                  <p className="mt-2 text-sm font-semibold leading-6 text-[#334155] dark:text-[#d3e9f5]">
                    {file.purpose}
                  </p>
                </div>
              ))}
            </div>
          </article>

          <article className="rounded-lg border-2 border-[#17324d]/10 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-[#0f2742] sm:p-6">
            <div className="mb-5 flex items-center gap-3">
              <span className="rounded-lg bg-[#fca5a5] p-2 text-[#17324d]">
                <HugeiconsIcon icon={CodeIcon} size={22} strokeWidth={2.2} />
              </span>
              <h2 className="text-2xl font-black">Starter code</h2>
            </div>
            <div className="overflow-x-auto rounded-lg bg-[#17324d] p-5 dark:bg-[#07111d]">
              <p className="mb-3 text-xs font-black uppercase tracking-wide text-[#93e5ff]">
                game.js
              </p>
              <pre className="text-sm font-bold leading-6 text-[#fff7ad]">
                <code>{starterCode}</code>
              </pre>
            </div>
          </article>
        </section>

        <section className="rounded-lg border-2 border-[#17324d]/10 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-[#0f2742] sm:p-6">
          <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="mb-2 inline-flex items-center gap-2 rounded-lg bg-[#dcfce7] px-3 py-1 text-sm font-black text-[#166534]">
                <HugeiconsIcon icon={CheckmarkCircle02Icon} size={18} strokeWidth={2} />
                Үнэлгээ
              </p>
              <h2 className="text-3xl font-black tracking-tight">Final showcase rubric</h2>
            </div>
            <p className="max-w-xl text-base font-semibold leading-7 text-[#48647d] dark:text-[#b8d7e8]">
              Демо хийхдээ сурагч тоглоомоо тоглуулаад, game loop, player object,
              collision, нэг зассан bug-ээ тайлбарлана.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {assessmentRubric.map((section) => (
              <article
                key={section.title}
                className="rounded-lg border border-[#17324d]/10 bg-[#f8fafc] p-4 dark:border-white/10 dark:bg-[#10243a]"
              >
                <h3 className="text-lg font-black text-[#17324d] dark:text-[#e7f7ff]">
                  {section.title}
                </h3>
                <ul className="mt-3 space-y-2 text-sm font-semibold leading-6 text-[#334155] dark:text-[#d3e9f5]">
                  {section.items.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#22c55e]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
