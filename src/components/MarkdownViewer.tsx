"use client";

import { useState } from "react";

type MarkdownBlock =
  | { type: "heading"; level: number; text: string; id: string }
  | { type: "paragraph"; text: string }
  | { type: "list"; ordered: boolean; items: string[] }
  | { type: "code"; language: string; text: string }
  | { type: "table"; rows: string[][] }
  | { type: "quote"; variant: string; title: string; text: string };

function stripInlineMarkers(text: string) {
  return text.replace(/\*\*/g, "").replace(/`/g, "");
}

function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-");
}

function parseMarkdown(markdown: string): MarkdownBlock[] {
  const lines = markdown.replace(/\r\n/g, "\n").split("\n");
  const blocks: MarkdownBlock[] = [];
  let index = 0;

  while (index < lines.length) {
    const line = lines[index];
    const trimmed = line.trim();

    if (!trimmed) {
      index += 1;
      continue;
    }

    // Blockquote handling
    if (trimmed.startsWith(">")) {
      const quoteLines: string[] = [];
      while (index < lines.length && lines[index].trim().startsWith(">")) {
        quoteLines.push(lines[index].trim().replace(/^>\s*/, ""));
        index += 1;
      }

      const fullText = quoteLines.join("\n");
      const firstLine = quoteLines[0] || "";

      // Determine variant based on emoji prefix
      let variant = "info";
      let title = "Мэдээлэл";
      let text = fullText;

      const emojiMatch = firstLine.match(/^(💡|⚠️|✅|📌|❓|🎯)\s*(.*)$/);
      if (emojiMatch) {
        const emoji = emojiMatch[1];
        const rest = emojiMatch[2] || "";
        text = [rest, ...quoteLines.slice(1)].join("\n").trim();

        switch (emoji) {
          case "💡":
            variant = "tip";
            title = "Зөвлөмж";
            break;
          case "⚠️":
            variant = "warning";
            title = "Анхаарах";
            break;
          case "✅":
            variant = "exercise";
            title = "Дасгал";
            break;
          case "📌":
            variant = "important";
            title = "Чухал";
            break;
          case "❓":
            variant = "quiz";
            title = "Асуулт";
            break;
          case "🎯":
            variant = "key";
            title = "Гол санаа";
            break;
        }
      }

      blocks.push({ type: "quote", variant, title, text });
      continue;
    }

    if (trimmed.startsWith("```")) {
      const language = trimmed.replace(/^```/, "").trim();
      const codeLines: string[] = [];
      index += 1;

      while (index < lines.length && !lines[index].trim().startsWith("```")) {
        codeLines.push(lines[index]);
        index += 1;
      }

      blocks.push({ type: "code", language, text: codeLines.join("\n") });
      index += 1;
      continue;
    }

    const heading = trimmed.match(/^(#{1,3})\s+(.+)$/);
    if (heading) {
      const text = stripInlineMarkers(heading[2]);
      blocks.push({
        type: "heading",
        level: heading[1].length,
        text,
        id: slugify(text),
      });
      index += 1;
      continue;
    }

    if (trimmed.startsWith("|") && trimmed.endsWith("|")) {
      const rows: string[][] = [];

      while (
        index < lines.length &&
        lines[index].trim().startsWith("|") &&
        lines[index].trim().endsWith("|")
      ) {
        const row = lines[index]
          .trim()
          .slice(1, -1)
          .split("|")
          .map((cell) => stripInlineMarkers(cell.trim()));

        const isDivider = row.every((cell) => /^:?-{3,}:?$/.test(cell));
        if (!isDivider) rows.push(row);
        index += 1;
      }

      blocks.push({ type: "table", rows });
      continue;
    }

    if (/^- /.test(trimmed) || /^\d+\.\s+/.test(trimmed)) {
      const ordered = /^\d+\.\s+/.test(trimmed);
      const items: string[] = [];

      while (index < lines.length) {
        const item = lines[index].trim();
        const matchesList = ordered ? /^\d+\.\s+/.test(item) : /^- /.test(item);
        if (!matchesList) break;
        items.push(stripInlineMarkers(item.replace(ordered ? /^\d+\.\s+/ : /^- /, "")));
        index += 1;
      }

      blocks.push({ type: "list", ordered, items });
      continue;
    }

    const paragraphLines: string[] = [];
    while (index < lines.length) {
      const paragraphLine = lines[index].trim();
      if (
        !paragraphLine ||
        paragraphLine.startsWith("#") ||
        paragraphLine.startsWith("```") ||
        paragraphLine.startsWith("|") ||
        /^- /.test(paragraphLine) ||
        /^\d+\.\s+/.test(paragraphLine) ||
        paragraphLine.startsWith(">")
      ) {
        break;
      }
      paragraphLines.push(paragraphLine);
      index += 1;
    }

    blocks.push({
      type: "paragraph",
      text: stripInlineMarkers(paragraphLines.join(" ")),
    });
  }

  return blocks;
}

export function extractHeadings(markdown: string) {
  const lines = markdown.replace(/\r\n/g, "\n").split("\n");
  const headings: { level: number; text: string; id: string }[] = [];

  for (const line of lines) {
    const trimmed = line.trim();
    const match = trimmed.match(/^(#{1,3})\s+(.+)$/);
    if (match) {
      const text = match[2].replace(/\*\*/g, "").replace(/`/g, "").trim();
      const id = text
        .toLowerCase()
        .replace(/[^\w\s-]/g, "")
        .replace(/\s+/g, "-");
      headings.push({ level: match[1].length, text, id });
    }
  }

  return headings;
}

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // ignore
    }
  };

  return (
    <button
      onClick={handleCopy}
      className="kid-focus inline-flex items-center gap-1.5 rounded-md bg-white/10 px-2.5 py-1.5 text-xs font-bold text-white/80 transition hover:bg-white/20 hover:text-white"
      aria-label="Код хуулах"
    >
      <span className="text-sm">{copied ? "✓" : "📋"}</span>
      {copied ? "Хуулсан" : "Хуулах"}
    </button>
  );
}

const quoteVariants: Record<string, { bg: string; border: string; icon: string; iconBg: string; text: string }> = {
  tip: {
    bg: "bg-[#fefce8] dark:bg-[#29220d]",
    border: "border-[#facc15]/40 dark:border-[#facc15]/30",
    icon: "💡",
    iconBg: "bg-[#facc15] text-[#713f12]",
    text: "text-[#713f12] dark:text-[#fde047]",
  },
  warning: {
    bg: "bg-[#fff7ed] dark:bg-[#291b0f]",
    border: "border-[#fb923c]/40 dark:border-[#fb923c]/30",
    icon: "⚠️",
    iconBg: "bg-[#fb923c] text-white",
    text: "text-[#9a3412] dark:text-[#fdba74]",
  },
  exercise: {
    bg: "bg-[#f0fdf4] dark:bg-[#0f2917]",
    border: "border-[#22c55e]/40 dark:border-[#22c55e]/30",
    icon: "✅",
    iconBg: "bg-[#22c55e] text-white",
    text: "text-[#166534] dark:text-[#86efac]",
  },
  important: {
    bg: "bg-[#eff6ff] dark:bg-[#0f1f33]",
    border: "border-[#3b82f6]/40 dark:border-[#3b82f6]/30",
    icon: "📌",
    iconBg: "bg-[#3b82f6] text-white",
    text: "text-[#1e40af] dark:text-[#93c5fd]",
  },
  quiz: {
    bg: "bg-[#faf5ff] dark:bg-[#1f1029]",
    border: "border-[#a855f7]/40 dark:border-[#a855f7]/30",
    icon: "❓",
    iconBg: "bg-[#a855f7] text-white",
    text: "text-[#6b21a8] dark:text-[#d8b4fe]",
  },
  key: {
    bg: "bg-[#fef2f2] dark:bg-[#290f0f]",
    border: "border-[#ef4444]/40 dark:border-[#ef4444]/30",
    icon: "🎯",
    iconBg: "bg-[#ef4444] text-white",
    text: "text-[#991b1b] dark:text-[#fca5a5]",
  },
  info: {
    bg: "bg-[#f8fafc] dark:bg-[#10243a]",
    border: "border-[#cbd5e1] dark:border-[#334155]",
    icon: "ℹ️",
    iconBg: "bg-[#94a3b8] text-white",
    text: "text-[#475569] dark:text-[#cbd5e1]",
  },
};

function QuizItem({ title, text }: { title: string; text: string }) {
  const [showAnswer, setShowAnswer] = useState(false);
  const style = quoteVariants.quiz;
  const lines = text.split("\n").filter((l) => l.trim());

  const options = lines.filter((l) => l.match(/^[А-ЯA-Z]\)/));
  const answerLine = lines.find((l) => l.startsWith("Зөв хариулт:") || l.startsWith("✅ Зөв"));
  const explanationLine = lines.find((l) => l.startsWith("Тайлбар:") || l.startsWith("💡"));
  const questionLines = lines.filter(
    (l) =>
      !l.match(/^[А-ЯA-Z]\)/) &&
      !l.startsWith("Зөв хариулт:") &&
      !l.startsWith("✅ Зөв") &&
      !l.startsWith("Тайлбар:") &&
      !l.startsWith("💡")
  );

  return (
    <div className={`rounded-xl border-2 ${style.border} ${style.bg} p-5`}>
      <div className="mb-4 flex items-center gap-2">
        <span className={`inline-flex rounded-lg p-1.5 ${style.iconBg}`}>
          <span className="text-lg">{style.icon}</span>
        </span>
        <span className={`text-sm font-black uppercase tracking-wide ${style.text}`}>{title}</span>
      </div>
      <div className="space-y-3">
        {questionLines.map((q, i) => (
          <p key={i} className="text-base font-bold text-[#334155] dark:text-[#d3e9f5]">
            {q}
          </p>
        ))}
        {options.length > 0 && (
          <div className="mt-3 space-y-2">
            {options.map((opt, i) => (
              <div
                key={i}
                className="flex items-start gap-3 rounded-lg border border-[#cbd5e1]/50 bg-white/60 p-3 dark:border-[#334155]/50 dark:bg-[#0f2742]/60"
              >
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#e2e8f0] text-xs font-black text-[#475569] dark:bg-[#1e293b] dark:text-[#94a3b8]">
                  {opt.charAt(0)}
                </span>
                <span className="text-sm font-semibold text-[#475569] dark:text-[#cbd5e1]">
                  {opt.substring(2).trim()}
                </span>
              </div>
            ))}
          </div>
        )}
        <button
          onClick={() => setShowAnswer(!showAnswer)}
          className="kid-focus mt-2 inline-flex items-center gap-2 rounded-lg bg-[#17324d] px-4 py-2.5 text-sm font-black text-white shadow-sm transition hover:bg-[#23527d] dark:bg-[#ffd54f] dark:text-[#17324d] dark:hover:bg-[#ffe27a]"
        >
          {showAnswer ? "Хариулт нуух" : "Хариулт харах"}
        </button>
        {showAnswer && (
          <div className="mt-3 space-y-2 rounded-lg border border-[#22c55e]/30 bg-[#f0fdf4] p-4 dark:border-[#22c55e]/20 dark:bg-[#0f2917]">
            {answerLine && (
              <p className="text-sm font-black text-[#166534] dark:text-[#86efac]">{answerLine}</p>
            )}
            {explanationLine && (
              <p className="text-sm font-semibold text-[#15803d] dark:text-[#86efac]">{explanationLine}</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

function QuoteBlock({ variant, title, text }: { variant: string; title: string; text: string }) {
  const style = quoteVariants[variant] || quoteVariants.info;
  const lines = text.split("\n").filter((l) => l.trim());

  if (variant === "quiz") {
    return <QuizItem title={title} text={text} />;
  }

  return (
    <div className={`rounded-xl border-2 ${style.border} ${style.bg} p-5`}>
      <div className="mb-3 flex items-center gap-2">
        <span className={`inline-flex rounded-lg p-1.5 ${style.iconBg}`}>
          <span className="text-lg">{style.icon}</span>
        </span>
        <span className={`text-sm font-black uppercase tracking-wide ${style.text}`}>{title}</span>
      </div>
      <div className="space-y-2">
        {lines.map((l, i) => (
          <p key={i} className="text-base font-semibold leading-7 text-[#334155] dark:text-[#d3e9f5]">
            {l}
          </p>
        ))}
      </div>
    </div>
  );
}

// Group blocks into accordion sections by h2 headings
function groupBlocksByH2(blocks: MarkdownBlock[]) {
  const sections: { heading?: MarkdownBlock; blocks: MarkdownBlock[] }[] = [];
  let currentSection: MarkdownBlock[] = [];

  for (const block of blocks) {
    if (block.type === "heading" && block.level === 2) {
      // Save previous section if exists
      if (currentSection.length > 0 || sections.length === 0) {
        if (sections.length > 0) {
          sections[sections.length - 1].blocks = currentSection;
        }
        sections.push({ heading: block, blocks: [] });
        currentSection = [];
      }
    } else if (block.type === "heading" && block.level === 1) {
      // h1 stays outside sections
      if (currentSection.length > 0) {
        sections[sections.length - 1].blocks = currentSection;
        currentSection = [];
      }
      sections.push({ blocks: [block] });
    } else {
      currentSection.push(block);
    }
  }

  // Save last section
  if (sections.length > 0) {
    sections[sections.length - 1].blocks = currentSection;
  }

  return sections;
}

// Section colors (pastel)
const sectionColors = [
  { bg: "bg-[#ffedd5]", border: "border-[#fed7aa]", text: "text-[#7c2d12]", darkBg: "dark:bg-[#3d2410]", darkBorder: "dark:border-[#7c2d12]/30", darkText: "dark:text-[#fdba74]" },
  { bg: "bg-[#dbeafe]", border: "border-[#bfdbfe]", text: "text-[#1e3a8a]", darkBg: "dark:bg-[#10204d]", darkBorder: "dark:border-[#1e3a8a]/30", darkText: "dark:text-[#93c5fd]" },
  { bg: "bg-[#dcfce7]", border: "border-[#bbf7d0]", text: "text-[#14532d]", darkBg: "dark:bg-[#0f2917]", darkBorder: "dark:border-[#14532d]/30", darkText: "dark:text-[#86efac]" },
  { bg: "bg-[#fce7f3]", border: "border-[#fbcfe8]", text: "text-[#831843]", darkBg: "dark:bg-[#3d1029]", darkBorder: "dark:border-[#831843]/30", darkText: "dark:text-[#f9a8d4]" },
  { bg: "bg-[#e9d5ff]", border: "border-[#d8b4fe]", text: "text-[#3b0764]", darkBg: "dark:bg-[#240d3d]", darkBorder: "dark:border-[#3b0764]/30", darkText: "dark:text-[#d8b4fe]" },
  { bg: "bg-[#ccfbf1]", border: "border-[#99f6e4]", text: "text-[#0f766e]", darkBg: "dark:bg-[#0d3330]", darkBorder: "dark:border-[#0f766e]/30", darkText: "dark:text-[#5eead4]" },
  { bg: "bg-[#fef9c3]", border: "border-[#fde047]", text: "text-[#713f12]", darkBg: "dark:bg-[#3d3410]", darkBorder: "dark:border-[#713f12]/30", darkText: "dark:text-[#fde047]" },
  { bg: "bg-[#fee2e2]", border: "border-[#fecaca]", text: "text-[#7f1d1d]", darkBg: "dark:bg-[#3d1010]", darkBorder: "dark:border-[#7f1d1d]/30", darkText: "dark:text-[#fca5a5]" },
  { bg: "bg-[#e0f2fe]", border: "border-[#bae6fd]", text: "text-[#0c4a6e]", darkBg: "dark:bg-[#0d2a3d]", darkBorder: "dark:border-[#0c4a6e]/30", darkText: "dark:text-[#7dd3fc]" },
  { bg: "bg-[#f3e8ff]", border: "border-[#e9d5ff]", text: "text-[#581c87]", darkBg: "dark:bg-[#2d1040]", darkBorder: "dark:border-[#581c87]/30", darkText: "dark:text-[#d8b4fe]" },
  { bg: "bg-[#ffedd5]", border: "border-[#fed7aa]", text: "text-[#7c2d12]", darkBg: "dark:bg-[#3d2410]", darkBorder: "dark:border-[#7c2d12]/30", darkText: "dark:text-[#fdba74]" },
  { bg: "bg-[#dbeafe]", border: "border-[#bfdbfe]", text: "text-[#1e3a8a]", darkBg: "dark:bg-[#10204d]", darkBorder: "dark:border-[#1e3a8a]/30", darkText: "dark:text-[#93c5fd]" },
  { bg: "bg-[#dcfce7]", border: "border-[#bbf7d0]", text: "text-[#14532d]", darkBg: "dark:bg-[#0f2917]", darkBorder: "dark:border-[#14532d]/30", darkText: "dark:text-[#86efac]" },
];

function AccordionSection({
  sectionIndex,
  heading,
  blocks,
  isOpen,
  onToggle,
}: {
  sectionIndex: number;
  heading?: MarkdownBlock;
  blocks: MarkdownBlock[];
  isOpen: boolean;
  onToggle: () => void;
}) {
  const color = sectionColors[sectionIndex % sectionColors.length];

  // Check if this section contains quiz items
  const hasQuiz = blocks.some((b) => b.type === "quote" && b.variant === "quiz");
  const quizCount = blocks.filter((b) => b.type === "quote" && b.variant === "quiz").length;

  return (
    <div
      className={`rounded-xl border-2 ${color.border} ${color.darkBorder} overflow-hidden transition-all duration-300`}
    >
      {heading && heading.type === "heading" && (
        <button
          onClick={onToggle}
          className={`kid-focus w-full flex items-center justify-between gap-4 px-6 py-4 ${color.bg} ${color.darkBg} transition-colors hover:brightness-95 dark:hover:brightness-110`}
          aria-expanded={isOpen}
        >
          <div className="flex items-center gap-3">
            <span className={`rounded-lg px-3 py-1.5 font-black text-sm ${color.bg} ${color.text} ${color.darkText} ring-2 ring-white/40 dark:ring-black/20`}>
              Хэсэг {sectionIndex + 1}
            </span>
            <h2
              id={heading.id}
              className={`text-xl font-black ${color.text} ${color.darkText} sm:text-2xl`}
            >
              {heading.text}
            </h2>
            {hasQuiz && (
              <span className="rounded-full bg-[#faf5ff] px-2.5 py-1 text-xs font-black text-[#7c3aed] dark:bg-[#2e1065] dark:text-[#c4b5fd]">
                {quizCount} асуулт
              </span>
            )}
          </div>
          <span
            className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/70 text-lg font-bold ${color.text} transition-transform duration-300 dark:bg-black/20 dark:text-white ${
              isOpen ? "rotate-180" : ""
            }`}
          >
            ▼
          </span>
        </button>
      )}

      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-[20000px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="space-y-5 bg-white p-5 dark:bg-[#0f2742] sm:p-6">
          {blocks.map((block, index) => renderBlock(block, index))}

          {/* Next section button */}
          <div className="flex justify-end pt-2">
            <button
              onClick={onToggle}
              className="kid-focus inline-flex items-center gap-2 rounded-lg bg-[#17324d] px-4 py-2.5 text-sm font-black text-white shadow-sm transition hover:bg-[#23527d] dark:bg-[#ffd54f] dark:text-[#17324d] dark:hover:bg-[#ffe27a]"
            >
              {isOpen ? "Хаах ⬆" : "Нээх ⬇"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function renderBlock(block: MarkdownBlock, index: number) {
  if (block.type === "heading") {
    const Heading = `h${block.level}` as "h1" | "h2" | "h3";
    const className =
      block.level === 1
        ? "text-3xl font-black tracking-tight text-[#17324d] dark:text-[#e7f7ff] sm:text-4xl"
        : block.level === 2
          ? "text-xl font-black text-[#17324d] dark:text-[#e7f7ff]"
          : "text-lg font-black text-[#0f766e] dark:text-[#67e8f9]";

    return (
      <Heading key={index} id={block.id} className={className}>
        {block.text}
      </Heading>
    );
  }

  if (block.type === "paragraph") {
    return (
      <p key={index} className="text-lg font-semibold leading-8 text-[#334155] dark:text-[#d3e9f5]">
        {block.text}
      </p>
    );
  }

  if (block.type === "list") {
    const List = block.ordered ? "ol" : "ul";
    return (
      <List
        key={index}
        className={`space-y-2 rounded-lg bg-[#f8fafc] p-5 text-base font-bold leading-7 text-[#334155] dark:bg-[#10243a] dark:text-[#d3e9f5] ${
          block.ordered ? "list-decimal pl-10" : "list-disc pl-10"
        }`}
      >
        {block.items.map((item, itemIndex) => (
          <li key={itemIndex}>{item}</li>
        ))}
      </List>
    );
  }

  if (block.type === "code") {
    const codeLines = block.text.split("\n");
    return (
      <div key={index} className="overflow-hidden rounded-xl bg-[#0f172a] dark:bg-[#020617]">
        <div className="flex items-center justify-between border-b border-white/10 bg-[#1e293b] px-4 py-2.5">
          <div className="flex items-center gap-2">
            {block.language && (
              <span className="rounded-md bg-[#334155] px-2 py-1 text-xs font-black uppercase tracking-wide text-[#94a3b8]">
                {block.language}
              </span>
            )}
          </div>
          <CopyButton text={block.text} />
        </div>
        <div className="overflow-x-auto p-4">
          <pre className="text-sm leading-6">
            <code className="font-mono">
              {codeLines.map((line, lineIndex) => (
                <div key={lineIndex} className="flex">
                  <span className="select-none pr-4 text-right text-xs font-semibold text-[#64748b] w-8 shrink-0">
                    {lineIndex + 1}
                  </span>
                  <span className="text-[#e2e8f0]">{line || " "}</span>
                </div>
              ))}
            </code>
          </pre>
        </div>
      </div>
    );
  }

  if (block.type === "quote") {
    return (
      <QuoteBlock
        key={index}
        variant={block.variant}
        title={block.title}
        text={block.text}
      />
    );
  }

  return (
    <div key={index} className="overflow-x-auto rounded-lg border border-[#17324d]/10 dark:border-white/10">
      <table className="w-full min-w-[560px] border-collapse bg-white text-left dark:bg-[#0f2742]">
        <tbody>
          {block.rows.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className={
                rowIndex === 0
                  ? "bg-[#e0f2fe] font-black dark:bg-[#10243a]"
                  : "odd:bg-[#f8fafc] dark:odd:bg-[#10243a]"
              }
            >
              {row.map((cell, cellIndex) => (
                <td
                  key={cellIndex}
                  className="border-b border-[#17324d]/10 px-4 py-3 text-sm font-semibold leading-6 text-[#17324d] dark:border-white/10 dark:text-[#d3e9f5]"
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function MarkdownViewer({
  markdown,
  openSections: externalOpenSections,
  onToggleSection,
}: {
  markdown: string;
  openSections?: Set<number>;
  onToggleSection?: (index: number) => void;
}) {
  const blocks = parseMarkdown(markdown);
  const sections = groupBlocksByH2(blocks);

  // Track which sections are open (first one open by default)
  const [internalOpenSections, setInternalOpenSections] = useState<Set<number>>(new Set([0]));
  const openSections = externalOpenSections ?? internalOpenSections;

  const toggleSection = (index: number) => {
    if (onToggleSection) {
      onToggleSection(index);
    } else {
      setInternalOpenSections((prev) => {
        const next = new Set(prev);
        if (next.has(index)) {
          next.delete(index);
        } else {
          next.add(index);
        }
        return next;
      });
    }
  };

  return (
    <article className="space-y-4">
      {sections.map((section, index) => {
        if (!section.heading) {
          // Non-accordion content (h1 or content before first h2)
          return (
            <div key={index} className="space-y-5">
              {section.blocks.map((block, blockIndex) => renderBlock(block, blockIndex))}
            </div>
          );
        }

        return (
          <AccordionSection
            key={index}
            sectionIndex={index - 1} // Adjust for 0-based, but we want section numbering
            heading={section.heading}
            blocks={section.blocks}
            isOpen={openSections.has(index)}
            onToggle={() => toggleSection(index)}
          />
        );
      })}
    </article>
  );
}
