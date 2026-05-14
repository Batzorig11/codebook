import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  ArrowLeft02Icon,
  ArrowRight02Icon,
  BookOpen01Icon,
  SchoolIcon,
} from "@hugeicons/core-free-icons";
import { getStudentGuides } from "@/lib/student-guides";

const colors = [
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

export default function StudentGuidesPage() {
  const guides = getStudentGuides();

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

        <section className="mb-8 rounded-lg border-2 border-[#17324d]/10 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-[#0f2742] sm:p-8">
          <p className="mb-3 inline-flex items-center gap-2 rounded-lg bg-[#dcfce7] px-3 py-2 text-sm font-black text-[#166534]">
            <HugeiconsIcon icon={SchoolIcon} size={18} strokeWidth={2} />
            Сурагчийн материал
          </p>
          <h1 className="font-pixel text-3xl leading-tight text-[#17324d] dark:text-[#e7f7ff] sm:text-5xl">
            Гарын авлага
          </h1>
          <p className="mt-4 max-w-3xl text-base font-semibold leading-7 text-[#5b7086] dark:text-[#b8d7e8]">
            Бүлэг бүрийн Markdown гарын авлагыг эндээс нээж уншина.
          </p>
        </section>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {guides.map((guide, index) => (
            <Link
              key={guide.slug}
              href={`/student-guides/${guide.slug}`}
              className="kid-focus group grid min-h-[210px] grid-rows-[auto_1fr_auto] rounded-lg border-2 border-[#17324d]/10 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-[#17324d]/25 hover:shadow-xl dark:border-white/10 dark:bg-[#0f2742] dark:hover:border-[#38bdf8]/70"
            >
              <div className="flex items-start justify-between gap-3">
                <span
                  className={`rounded-lg px-3 py-2 font-pixel text-sm text-[#17324d] ${
                    colors[index] ?? colors[0]
                  }`}
                >
                  {String(guide.chapter).padStart(2, "0")}
                </span>
                <span className="rounded-lg bg-[#f1f5f9] p-2 text-[#17324d] transition group-hover:bg-[#17324d] group-hover:text-white dark:bg-[#10243a] dark:text-[#e7f7ff] dark:group-hover:bg-[#ffd54f] dark:group-hover:text-[#17324d]">
                  <HugeiconsIcon icon={ArrowRight02Icon} size={20} strokeWidth={2.2} />
                </span>
              </div>

              <div className="mt-5">
                <h2 className="text-2xl font-black leading-tight text-[#17324d] dark:text-[#e7f7ff]">
                  {guide.title}
                </h2>
                <p className="mt-3 line-clamp-3 text-base font-semibold leading-7 text-[#5b7086] dark:text-[#b8d7e8]">
                  {guide.excerpt}
                </p>
              </div>

              <p className="mt-5 inline-flex items-center gap-2 text-sm font-black uppercase tracking-wide text-[#0f766e] dark:text-[#67e8f9]">
                <HugeiconsIcon icon={BookOpen01Icon} size={17} strokeWidth={2.2} />
                Унших
              </p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
