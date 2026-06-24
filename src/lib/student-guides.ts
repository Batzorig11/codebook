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

function getGuideFilename(chapter: number, lang: "mn" | "en" = "mn") {
  return `chapter-${chapter}-student-guide-${lang}.md`;
}

function getGuidePath(chapter: number, lang: "mn" | "en" = "mn") {
  return path.join(guideDirectory, getGuideFilename(chapter, lang));
}

function getTitle(markdown: string, chapter: number, lang: "mn" | "en" = "mn") {
  const title = markdown
    .split("\n")
    .find((line) => line.startsWith("# "))
    ?.replace(/^#\s+/, "")
    .trim();

  return title || (lang === "en" ? `Chapter ${chapter}` : `Бүлэг ${chapter}`);
}

function getExcerpt(markdown: string) {
  return (
    markdown
      .split("\n")
      .map((line) => line.trim())
      .find((line) => line && !line.startsWith("#")) || ""
  );
}

export function getStudentGuideSlugs() {
  return Array.from({ length: 9 }, (_, index) => `chapter-${index + 1}`);
}

export function getStudentGuide(chapter: number): StudentGuide | null {
  const lang = "mn";
  const filename = getGuideFilename(chapter, lang);
  const filePath = getGuidePath(chapter, lang);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const markdown = fs.readFileSync(filePath, "utf8");

  return {
    slug: `chapter-${chapter}`,
    chapter,
    title: getTitle(markdown, chapter, lang),
    excerpt: getExcerpt(markdown),
    filename,
    markdown,
  };
}

function getStudentGuideByLang(chapter: number, lang: "mn" | "en"): StudentGuide | null {
  const filename = getGuideFilename(chapter, lang);
  const filePath = getGuidePath(chapter, lang);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const markdown = fs.readFileSync(filePath, "utf8");

  return {
    slug: `chapter-${chapter}`,
    chapter,
    title: getTitle(markdown, chapter, lang),
    excerpt: getExcerpt(markdown),
    filename,
    markdown,
  };
}

export function getStudentGuides(): StudentGuide[] {
  return Array.from({ length: 9 }, (_, index) => getStudentGuide(index + 1)).filter(
    (guide): guide is StudentGuide => Boolean(guide),
  );
}

export function getStudentGuidesEn(): StudentGuide[] {
  return Array.from({ length: 9 }, (_, i) => {
    const enGuide = getStudentGuideByLang(i + 1, "en");
    return enGuide ?? getStudentGuide(i + 1);
  }).filter((g): g is StudentGuide => Boolean(g));
}
