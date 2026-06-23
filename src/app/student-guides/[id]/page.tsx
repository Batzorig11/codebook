import { notFound } from "next/navigation";
import { readFileSync } from "fs";
import { join } from "path";
import { getStudentGuide, getStudentGuideSlugs } from "@/lib/student-guides";
import StudentGuideContent from "./StudentGuideContent";
import MarkdownViewer from "@/components/MarkdownViewer";

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

  const chapterNum = Number(match[1]);
  const guide = getStudentGuide(chapterNum);

  if (!guide) {
    notFound();
  }

  const prevChapter = chapterNum > 1 ? chapterNum - 1 : null;
  const nextChapter = chapterNum < 9 ? chapterNum + 1 : null;

  // Only use new design for chapter 8
  // if (chapterNum === 8) {
    const markdownPath = join(process.cwd(), "lectures", `chapter-${chapterNum}-student-guide-mn.md`);
    const markdownPathEn = join(process.cwd(), "lectures", `chapter-${chapterNum}-student-guide-en.md`);
    let markdownContent = "";
    let markdownContentEn = "";
    try {
      markdownContent = readFileSync(markdownPath, "utf-8");
    } catch (error) {
      console.error("Failed to read MN markdown file:", error);
    }
    try {
      markdownContentEn = readFileSync(markdownPathEn, "utf-8");
    } catch {
      // EN file not yet created — UI will show "coming soon"
    }

    return (
      <StudentGuideContent
        chapterNum={chapterNum}
        prevChapter={prevChapter}
        nextChapter={nextChapter}
        markdownContent={markdownContent}
        markdownContentEn={markdownContentEn}
      />
    );
  // }

  // For other chapters, use the old design with markdown viewer
  // return (
  //   <main className="min-h-screen px-4 py-8 sm:px-6 lg:px-8">
  //     <div className="mx-auto max-w-4xl">
  //       <div className="mb-6">
  //         <a
  //           href="/student-guides"
  //           className="inline-flex items-center gap-2 rounded-lg bg-white/80 px-4 py-3 text-sm font-black text-[#17324d] shadow-sm backdrop-blur-sm transition hover:-translate-y-0.5 hover:bg-white dark:bg-[#0f2742]/80 dark:text-[#e7f7ff] dark:hover:bg-[#0f2742]"
  //         >
  //           ← Гарын авлага руу буцах
  //         </a>
  //       </div>
  //       <MarkdownViewer markdown={guide.markdown} />
  //     </div>
  //   </main>
  // );
}
