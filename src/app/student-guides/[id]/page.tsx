import Link from "next/link";
import { notFound } from "next/navigation";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  ArrowLeft02Icon,
  BookOpen01Icon,
  CodeIcon,
  File01Icon,
} from "@hugeicons/core-free-icons";
import MarkdownViewer from "@/components/MarkdownViewer";
import { getStudentGuide, getStudentGuideSlugs } from "@/lib/student-guides";

export function generateStaticParams() {
  return getStudentGuideSlugs().map((id) => ({ id }));
}

export default async function StudentGuidePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const match = id.match(/^chapter-(\d+)$/);

  if (!match) {
    notFound();
  }

  const guide = getStudentGuide(Number(match[1]));

  if (!guide) {
    notFound();
  }

  return (
    <main className="min-h-screen px-4 py-8 text-[#17324d] dark:text-[#e7f7ff] sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <Link
            href="/student-guides"
            className="kid-focus inline-flex w-fit items-center gap-2 rounded-lg bg-white px-4 py-3 text-sm font-black text-[#17324d] shadow-sm transition hover:-translate-y-0.5 hover:bg-[#e0f2fe] dark:bg-[#0f2742] dark:text-[#e7f7ff] dark:hover:bg-[#132f4d]"
          >
            <HugeiconsIcon icon={ArrowLeft02Icon} size={18} strokeWidth={2.2} />
            Гарын авлага
          </Link>

          <div className="inline-flex w-fit items-center gap-2 rounded-lg bg-[#17324d] px-4 py-3 text-sm font-black text-white shadow-sm dark:bg-[#ffd54f] dark:text-[#17324d]">
            <HugeiconsIcon icon={File01Icon} size={18} strokeWidth={2.2} />
            {guide.filename}
          </div>
        </div>

        <section className="mb-5 rounded-lg border-2 border-[#17324d]/10 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-[#0f2742] sm:p-8">
          <p className="mb-3 inline-flex items-center gap-2 rounded-lg bg-[#e0f2fe] px-3 py-2 text-sm font-black text-[#075985]">
            <HugeiconsIcon icon={BookOpen01Icon} size={18} strokeWidth={2} />
            Сурагчийн Markdown
          </p>
          <h1 className="font-pixel text-3xl leading-tight text-[#17324d] dark:text-[#e7f7ff] sm:text-5xl">
            {guide.title}
          </h1>
          <p className="mt-4 inline-flex items-center gap-2 rounded-lg bg-[#f8fafc] px-4 py-2 text-sm font-black text-[#475569] dark:bg-[#10243a] dark:text-[#b8d7e8]">
            <HugeiconsIcon icon={CodeIcon} size={18} strokeWidth={2.2} />
            lectures/{guide.filename}
          </p>
        </section>

        <section className="rounded-lg border-2 border-[#17324d]/10 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-[#0f2742] sm:p-8">
          <MarkdownViewer markdown={guide.markdown} />
        </section>
      </div>
    </main>
  );
}
