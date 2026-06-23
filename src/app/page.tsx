"use client";

import Image from "next/image";
import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  ArrowRight02Icon,
  BookOpen01Icon,
  CodeIcon,
  GameController03Icon,
  Rocket02Icon,
  SchoolIcon,
} from "@hugeicons/core-free-icons";
import { useLang } from "@/context/LangContext";

const chapters = [
  {
    number: "01",
    title: { mn: "Python эхлэл", en: "Python Basics" },
    summary: { mn: "Команд, функц, дараалал", en: "Commands, functions, sequence" },
    color: "bg-[#ffdf6e]",
  },
  {
    number: "02",
    title: { mn: "Хувьсагч", en: "Variables" },
    summary: { mn: "Тоон ба текст утга", en: "Number and text values" },
    color: "bg-[#7dd3fc]",
  },
  {
    number: "03",
    title: { mn: "Оператор", en: "Operators" },
    summary: { mn: "Нэмэх, хасах, тооцоолох", en: "Addition, subtraction, calculation" },
    color: "bg-[#86efac]",
  },
  {
    number: "04",
    title: { mn: "Давталт", en: "Loops" },
    summary: { mn: "For, while, range", en: "For, while, range" },
    color: "bg-[#fca5a5]",
  },
  {
    number: "05",
    title: { mn: "Жагсаалт", en: "Lists" },
    summary: { mn: "Олон утгыг хадгалах", en: "Storing multiple values" },
    color: "bg-[#c4b5fd]",
  },
  {
    number: "06",
    title: { mn: "Нөхцөл", en: "Conditions" },
    summary: { mn: "If ашиглан шийдэх", en: "Making decisions with if" },
    color: "bg-[#f9a8d4]",
  },
  {
    number: "07",
    title: { mn: "Функц", en: "Functions" },
    summary: { mn: "Өөрийн команд үүсгэх", en: "Creating your own commands" },
    color: "bg-[#67e8f9]",
  },
  {
    number: "08",
    title: { mn: "Dictionary", en: "Dictionary" },
    summary: { mn: "Key ба value", en: "Key and value" },
    color: "bg-[#fdba74]",
  },
  {
    number: "09",
    title: { mn: "Class", en: "Class" },
    summary: { mn: "Object бүтээх", en: "Building objects" },
    color: "bg-[#bef264]",
  },
];

const LABELS = {
  mn: {
    bannerAlt: "CodingForKids тоглоомын өнгөлөг ертөнц",
    heroSubtitle:
      "Python-ийг тоглоомын даалгавраар ойлгож, бүлэг бүрийн кодыг алхам алхмаар судлаарай.",
    chooseChapter: "Бүлгээ сонгох",
    openCodebook: "Codebook нээх",
    studentGuides: "Сурагчийн гарын авлага",
    chaptersLabel: "9 бүлэг",
    sectionTitle: "Сурах замаа сонго",
    sectionSubtitle: "Эхний бүлгээс эхлээд дараагийн түвшин рүү тайван ахина.",
    start: "Эхлэх",
    studentMarkdown: "Сурагчийн Markdown",
    studentGuidesTitle: "Сурагчийн гарын авлага",
    viewAll: "Бүгдийг харах",
    footerText: (year: number) => `© ${year} erxes. Created by Batzorig.`,
  },
  en: {
    bannerAlt: "CodingForKids game world",
    heroSubtitle:
      "Learn Python through game challenges and explore each chapter's code step by step.",
    chooseChapter: "Choose a Chapter",
    openCodebook: "Open Codebook",
    studentGuides: "Student Guides",
    chaptersLabel: "9 chapters",
    sectionTitle: "Choose Your Path",
    sectionSubtitle: "Start from the first chapter and advance to the next level at your own pace.",
    start: "Start",
    studentMarkdown: "Student Markdown",
    studentGuidesTitle: "Student Guides",
    viewAll: "View All",
    footerText: (year: number) => `© ${year} erxes. Created by Batzorig.`,
  },
} as const;

export default function Home() {
  const { lang } = useLang();
  const L = LABELS[lang];

  return (
    <>
      <main className="min-h-screen">
        <section className="relative isolate min-h-[calc(100vh-4rem)] overflow-hidden">
          <Image
            src="/banner.png"
            alt={L.bannerAlt}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0f2742]/70 via-[#0f2742]/46 to-[#0f2742]/24" />

          <div className="relative mx-auto flex min-h-[calc(100vh-4rem)] max-w-7xl flex-col justify-center px-4 pb-20 pt-12 sm:px-6 lg:px-8">
            <div className="max-w-3xl text-white">
              <div className="mb-5 inline-flex items-center gap-2 rounded-lg bg-white/90 px-3 py-2 text-sm font-bold text-[#17324d] shadow-sm">
                <HugeiconsIcon icon={GameController03Icon} size={20} strokeWidth={2} />
                CodingForKids
              </div>
              <h1 className="font-pixel text-4xl leading-tight text-white drop-shadow sm:text-5xl lg:text-6xl">
                Kami Codebook
              </h1>
              <p className="mt-6 max-w-2xl text-lg font-semibold leading-8 text-white sm:text-xl">
                {L.heroSubtitle}
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Link
                  href="#chapters"
                  className="kid-focus inline-flex items-center justify-center gap-2 rounded-lg bg-[#ffd54f] px-5 py-4 text-base font-black text-[#17324d] shadow-lg shadow-black/20 transition hover:-translate-y-0.5 hover:bg-[#ffe27a]"
                >
                  <HugeiconsIcon icon={Rocket02Icon} size={22} strokeWidth={2.2} />
                  {L.chooseChapter}
                </Link>
                <Link
                  href="/codebook"
                  className="kid-focus inline-flex items-center justify-center gap-2 rounded-lg border-2 border-white bg-white/12 px-5 py-4 text-base font-black text-white backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/22"
                >
                  <HugeiconsIcon icon={BookOpen01Icon} size={22} strokeWidth={2.2} />
                  {L.openCodebook}
                </Link>
                <Link
                  href="/student-guides"
                  className="kid-focus inline-flex items-center justify-center gap-2 rounded-lg border-2 border-white bg-white/12 px-5 py-4 text-base font-black text-white backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/22"
                >
                  <HugeiconsIcon icon={SchoolIcon} size={22} strokeWidth={2.2} />
                  {L.studentGuides}
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section id="chapters" className="px-4 py-12 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mb-7 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="mb-2 inline-flex items-center gap-2 rounded-lg bg-[#dcfce7] px-3 py-1 text-sm font-black text-[#166534]">
                  <HugeiconsIcon icon={CodeIcon} size={18} strokeWidth={2} />
                  {L.chaptersLabel}
                </p>
                <h2 className="text-3xl font-black tracking-tight text-[#17324d] dark:text-[#e7f7ff] sm:text-4xl">
                  {L.sectionTitle}
                </h2>
              </div>
              <p className="max-w-xl text-base font-semibold leading-7 text-[#48647d] dark:text-[#b8d7e8]">
                {L.sectionSubtitle}
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {chapters.map((chapter, index) => (
                <Link
                  key={chapter.number}
                  href={`/chapter/${index + 1}`}
                  className="kid-focus group grid min-h-[172px] grid-rows-[auto_1fr_auto] rounded-lg border-2 border-[#17324d]/10 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-[#17324d]/25 hover:shadow-xl dark:border-white/10 dark:bg-[#0f2742] dark:hover:border-[#38bdf8]/70"
                >
                  <div className="flex items-start justify-between gap-3">
                    <span className={`rounded-lg px-3 py-2 font-pixel text-sm text-[#17324d] ${chapter.color}`}>
                      {chapter.number}
                    </span>
                    <span className="rounded-lg bg-[#f1f5f9] p-2 text-[#17324d] transition group-hover:bg-[#17324d] group-hover:text-white dark:bg-[#10243a] dark:text-[#e7f7ff] dark:group-hover:bg-[#ffd54f] dark:group-hover:text-[#17324d]">
                      <HugeiconsIcon icon={ArrowRight02Icon} size={20} strokeWidth={2.2} />
                    </span>
                  </div>
                  <div className="mt-5">
                    <h3 className="text-2xl font-black text-[#17324d] dark:text-[#e7f7ff]">
                      {chapter.title[lang]}
                    </h3>
                    <p className="mt-2 text-base font-semibold text-[#5b7086] dark:text-[#b8d7e8]">
                      {chapter.summary[lang]}
                    </p>
                  </div>
                  <p className="mt-5 text-sm font-black uppercase tracking-wide text-[#0f766e] dark:text-[#67e8f9]">
                    {L.start}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section id="student-guides" className="px-4 pb-14 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl rounded-lg border-2 border-[#17324d]/10 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-[#0f2742] sm:p-8">
            <div className="mb-7 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="mb-2 inline-flex items-center gap-2 rounded-lg bg-[#e0f2fe] px-3 py-1 text-sm font-black text-[#075985]">
                  <HugeiconsIcon icon={SchoolIcon} size={18} strokeWidth={2} />
                  {L.studentMarkdown}
                </p>
                <h2 className="text-3xl font-black tracking-tight text-[#17324d] dark:text-[#e7f7ff] sm:text-4xl">
                  {L.studentGuidesTitle}
                </h2>
              </div>
              <Link
                href="/student-guides"
                className="kid-focus inline-flex w-fit items-center justify-center gap-2 rounded-lg bg-[#17324d] px-5 py-3 text-sm font-black text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-[#23527d] dark:bg-[#ffd54f] dark:text-[#17324d] dark:hover:bg-[#ffe27a]"
              >
                {L.viewAll}
                <HugeiconsIcon icon={ArrowRight02Icon} size={18} strokeWidth={2.2} />
              </Link>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {chapters.map((chapter, index) => (
                <Link
                  key={`guide-${chapter.number}`}
                  href={`/student-guides/chapter-${index + 1}`}
                  className="kid-focus group flex items-center gap-4 rounded-lg border-2 border-[#17324d]/10 bg-[#f8fafc] p-4 transition hover:-translate-y-0.5 hover:border-[#38bdf8] hover:bg-white dark:border-white/10 dark:bg-[#10243a] dark:hover:border-[#38bdf8]/70 dark:hover:bg-[#132f4d]"
                >
                  <span className={`rounded-lg px-3 py-2 font-pixel text-sm text-[#17324d] ${chapter.color}`}>
                    {chapter.number}
                  </span>
                  <div className="min-w-0 flex-1">
                    <h3 className="truncate text-lg font-black text-[#17324d] dark:text-[#e7f7ff]">
                      {chapter.title[lang]}
                    </h3>
                    <p className="truncate text-sm font-semibold text-[#64748b] dark:text-[#b8d7e8]">
                      chapter-{index + 1}-student-guide-mn.md
                    </p>
                  </div>
                  <HugeiconsIcon
                    icon={ArrowRight02Icon}
                    size={20}
                    strokeWidth={2.2}
                    className="text-[#0f766e] transition group-hover:translate-x-1 dark:text-[#67e8f9]"
                  />
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-[#17324d]/10 bg-white/70 px-4 py-8 text-center text-sm font-semibold text-[#5b7086] dark:border-white/10 dark:bg-[#0b1f33]/80 dark:text-[#b8d7e8]">
        {L.footerText(new Date().getFullYear())}
      </footer>
    </>
  );
}
