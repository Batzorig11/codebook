import fs from "node:fs";
import path from "node:path";

export type StudentGuide = {
  slug: string;
  chapter: number;
  title: string;
  excerpt: string;
  filename: string;
  markdown: string;
};

const guideDirectory = path.join(process.cwd(), "lectures");

function getGuideFilename(chapter: number) {
  return `chapter-${chapter}-student-guide-mn.md`;
} //chapter-8-student-guide-mn.md - ingej garj irjin

function getGuidePath(chapter: number) {
  return path.join(guideDirectory, getGuideFilename(chapter));
} // /my-project/lectures/chapter-8-student-guide-mn.md - ene hesgiin bn

function getTitle(markdown: string, chapter: number) {
  console.log("markdown", markdown);
  
  const title = markdown
    .split("\n")
    .find((line) => line.startsWith("# "))
    ?.replace(/^#\s+/, "")
    .trim();
    console.log("title", title);
    

  return title || `Бүлэг ${chapter}`;
}

function getExcerpt(markdown: string) {
  return (
    markdown
      .split("\n")
      .map((line) => line.trim())
      .find((line) => line && !line.startsWith("#")) || ""
  );
}
console.log("----geteexcerpt-----",getExcerpt);


export function getStudentGuideSlugs() {
  return Array.from({ length: 9 }, (_, index) => `chapter-${index + 1}`);
}

export function getStudentGuide(chapter: number): StudentGuide | null {
  const filename = getGuideFilename(chapter);
  console.log("filenaem", filename);
  
  const filePath = getGuidePath(chapter);
  console.log("filepath", filePath);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const markdown = fs.readFileSync(filePath, "utf8");

  return {
    slug: `chapter-${chapter}`,
    chapter,
    title: getTitle(markdown, chapter),
    excerpt: getExcerpt(markdown),
    filename,
    markdown,
  };
}

export function getStudentGuides() {
  return Array.from({ length: 9 }, (_, index) => getStudentGuide(index + 1)).filter(
    (guide): guide is StudentGuide => Boolean(guide),
  );
}
