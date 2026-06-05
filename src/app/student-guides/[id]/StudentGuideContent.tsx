"use client";

import { useState } from "react";
import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  ArrowLeft02Icon,
  Target01Icon,
  Package01Icon,
  CheckmarkCircle02Icon,
  Idea01Icon,
  Alert01Icon,
  Flag01Icon,
  StickyNote01Icon,
  BookOpen01Icon,
  GameController01Icon,
  LeftToRightListNumberIcon,
  PencilEdit01Icon,
} from "@hugeicons/core-free-icons";

const chapterColors = [
  { bg: "bg-[#ffdf6e]", text: "text-[#713f12]" },
  { bg: "bg-[#7dd3fc]", text: "text-[#0c4a6e]" },
  { bg: "bg-[#86efac]", text: "text-[#14532d]" },
  { bg: "bg-[#fca5a5]", text: "text-[#7f1d1d]" },
  { bg: "bg-[#c4b5fd]", text: "text-[#3b0764]" },
];

// ===== TYPES =====
interface Section {
  title: string;
  blocks: ContentBlock[];
  id: string;
}

interface ContentBlock {
  type: "text" | "heading" | "code" | "table" | "quote" | "spacer";
  content: string;
  language?: string;
  level?: number;
  bold?: boolean;
  variant?: QuoteVariant;
}

type QuoteVariant = "tip" | "warning" | "important" | "key";

interface QuizQuestion {
  question: string;
  options: { label: string; text: string }[];
  correctAnswer: string;
  explanation: string;
}

// ===== MARKDOWN PARSER =====
function parseMarkdown(md: string): Section[] {
  const sections: Section[] = [];
  const lines = md.split("\n");
  let currentSection: Section | null = null;
  let currentBlock: ContentBlock[] = [];
  let inCodeBlock = false;
  let codeContent = "";
  let codeLang = "python";
  let inTable = false;
  let tableLines: string[] = [];
  let inQuote = false;
  let quoteContent = "";
  let quoteVariant: QuoteVariant = "tip";

  const flushCurrent = () => {
    if (currentBlock.length > 0) {
      if (currentSection) {
        currentSection.blocks.push(...currentBlock);
      }
      currentBlock = [];
    }
  };

  const detectQuoteVariant = (text: string): QuoteVariant => {
    if (text.includes("⚠️")) return "warning";
    if (text.includes("🎯")) return "key";
    if (text.includes("📌")) return "important";
    return "tip";
  };

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    // Code block
    if (line.startsWith("```")) {
      if (inCodeBlock) {
        currentBlock.push({
          type: "code",
          content: codeContent.slice(0, -1),
          language: codeLang,
        });
        codeContent = "";
        inCodeBlock = false;
      } else {
        flushCurrent();
        inCodeBlock = true;
        codeLang = line.slice(3).trim() || "python";
      }
      continue;
    }

    if (inCodeBlock) {
      codeContent += line + "\n";
      continue;
    }

    // Quote block
    if (line.startsWith("> ")) {
      if (!inQuote) {
        flushCurrent();
        inQuote = true;
        quoteContent = "";
        quoteVariant = detectQuoteVariant(line);
      }
      quoteContent += line.replace("> ", "").trim() + "\n";
      continue;
    } else if (inQuote) {
      inQuote = false;
      currentBlock.push({
        type: "quote",
        content: quoteContent.trim(),
        variant: quoteVariant,
      });
    }

    // Table
    if (line.startsWith("|")) {
      if (!inTable) {
        flushCurrent();
        inTable = true;
        tableLines = [];
      }
      tableLines.push(line);
      continue;
    } else if (inTable) {
      inTable = false;
      currentBlock.push({ type: "table", content: tableLines.join("\n") });
      tableLines = [];
    }

    // Headers (h1 = new section)
    if (line.match(/^#\s/) && !line.match(/^##\s/)) {
      flushCurrent();
      if (currentSection) {
        sections.push(currentSection);
      }
      currentSection = {
        title: line.replace(/^#\s/, "").trim(),
        blocks: [],
        id: `section-${sections.length}`,
      };
      continue;
    }

    // Sub headers
    if (line.match(/^##\s/)) {
      currentBlock.push({
        type: "heading",
        content: line.replace(/^##\s/, "").trim(),
        level: 2,
      });
      continue;
    }

    // Horizontal rule / spacer
    if (line.match(/^---+$/)) {
      currentBlock.push({ type: "spacer", content: "" });
      continue;
    }

    // Bold text
    if (line.match(/^\*\*(.+)\*\*$/)) {
      currentBlock.push({
        type: "text",
        content: line.replace(/\*\*/g, ""),
        bold: true,
      });
      continue;
    }

    // Regular text
    if (line.trim()) {
      currentBlock.push({
        type: "text",
        content: line.trim(),
      });
    }
  }

  // Flush remaining
  if (inTable) {
    currentBlock.push({ type: "table", content: tableLines.join("\n") });
  }
  if (inQuote) {
    currentBlock.push({
      type: "quote",
      content: quoteContent.trim(),
      variant: quoteVariant,
    });
  }
  flushCurrent();
  if (currentSection) {
    sections.push(currentSection);
  }

  return sections;
}

// ===== EXTRACTION FUNCTIONS =====
function extractTitle(md: string): string {
  const titleLine = md.split("\n").find((line) => line.startsWith("# "));
  console.log("titleLine", titleLine);

  return titleLine ? titleLine.replace(/^#\s*/, "").split(":")[1].trim() : "";
}



function extractHeroDescription(md: string): string {
  const lines = md.split("\n");
  for (const line of lines) {
    if (line.startsWith("> ")) {
      return line.replace("> ", "").trim();
    }
  }
  return "";
}

function extractKeyPoints(md: string): string[] {
  const lines = md.split("\n");
  const points: string[] = [];
  let inKeyPoints = false;

  for (const line of lines) {
    if (line.match(/^#\s*Гол санаа/i)) {
      inKeyPoints = true;
      continue;
    }
    if (inKeyPoints && line.match(/^#\s/)) {
      break;
    }
    if (inKeyPoints && line.match(/^-\s/)) {
      points.push(line.replace(/^-\s/, "").trim());
    }
  }

  return points;
}

function extractQuizQuestions(md: string): QuizQuestion[] {
  const lines = md.split("\n");
  const questions: QuizQuestion[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];
    const questionMatch = line.match(/^##\s*Асуулт\s*\d+/i);

    if (questionMatch) {
      const question: QuizQuestion = {
        question: "",
        options: [],
        correctAnswer: "",
        explanation: "",
      };

      i++;
      // Read question text until options start
      const questionLines: string[] = [];
      while (i < lines.length && !lines[i].match(/^-\s*[АБВГ]\)/)) {
        if (lines[i].trim()) {
          questionLines.push(lines[i].trim());
        }
        i++;
      }
      question.question = questionLines.join(" ");

      // Read options
      while (i < lines.length && lines[i].match(/^-\s*[АБВГ]\)/)) {
        const optionMatch = lines[i].match(/^-\s*([АБВГ])\)\s*(.+)/);
        if (optionMatch) {
          question.options.push({
            label: optionMatch[1],
            text: optionMatch[2].trim(),
          });
        }
        i++;
      }

      // Read correct answer
      while (i < lines.length) {
        const correctMatch = lines[i].match(/^\*\*Зөв хариулт:\*\*\s*([АБВГ])/i);
        if (correctMatch) {
          question.correctAnswer = correctMatch[1];
          i++;
          break;
        }
        i++;
      }

      // Read explanation
      while (i < lines.length) {
        const explMatch = lines[i].match(/^\*\*Тайлбар:\*\*\s*(.+)/i);
        if (explMatch) {
          question.explanation = explMatch[1].trim();
          i++;
          break;
        }
        i++;
      }

      questions.push(question);
    } else {
      i++;
    }
  }

  return questions;
}

// ===== COMPONENTS =====

function CodeTab({ code, language = "python" }: { code: string; language?: string }) {
  const [copied, setCopied] = useState(false);
  const lines = code.split("\n");

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <div className="group overflow-hidden rounded-xl border border-white/10 bg-[#0f172a] shadow-lg dark:bg-[#020617]">
      <div className="flex items-center justify-between border-b border-white/10 bg-[#1e293b] px-4 py-2.5">
        <div className="flex items-center gap-2">
          <span className="rounded-md bg-[#334155] px-2 py-1 text-xs font-black uppercase tracking-wide text-[#94a3b8]">
            {language}
          </span>
        </div>
        <button
          onClick={handleCopy}
          className="inline-flex items-center gap-1.5 rounded-md bg-white/10 px-2.5 py-1.5 text-xs font-bold text-white/80 transition hover:bg-white/20 hover:text-white"
        >
          <span className="text-sm">{copied ? "✓" : "📋"}</span>
          {copied ? "Хуулсан!" : "Хуулах"}
        </button>
      </div>
      <div className="overflow-x-auto p-4">
        <pre className="text-sm leading-6">
          <code className="font-mono">
            {lines.map((line, i) => (
              <div key={i} className="flex">
                <span className="w-8 shrink-0 select-none pr-4 text-right text-xs font-semibold text-[#64748b]">
                  {i + 1}
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

function MarkdownTable({ content }: { content: string }) {
  const lines = content.split("\n").filter((l) => l.trim());
  if (lines.length < 2) return null;

  const headers = lines[0]
    .split("|")
    .filter((h) => h.trim())
    .map((h) => h.trim());

  const rows = lines.slice(2).map((line) =>
    line
      .split("|")
      .filter((c) => c.trim())
      .map((c) => c.trim())
  );

  return (
    <div className="overflow-x-auto rounded-xl border border-[#17324d]/10 shadow-sm dark:border-white/10">
      <table className="w-full min-w-[560px] border-collapse bg-white text-left dark:bg-[#0f2742]">
        <thead>
          <tr className="bg-[#e0f2fe] dark:bg-[#10243a]">
            {headers.map((header, i) => (
              <th
                key={i}
                className="border-b border-[#17324d]/10 px-4 py-3 text-sm font-black uppercase tracking-wide text-[#17324d] dark:border-white/10 dark:text-[#e7f7ff]"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className={
                rowIndex % 2 === 0
                  ? "bg-white dark:bg-[#0f2742]"
                  : "bg-[#f8fafc] dark:bg-[#10243a]"
              }
            >
              {row.map((cell, cellIndex) => (
                <td
                  key={cellIndex}
                  className="border-b border-[#17324d]/10 px-4 py-3 text-sm font-semibold text-[#334155] dark:border-white/10 dark:text-[#d3e9f5]"
                >
                  <code className="rounded bg-[#f1f5f9] px-1.5 py-0.5 text-xs font-mono dark:bg-[#1e293b]">
                    {parseInlineBold(cell)}
                  </code>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function QuoteBlock({ content, variant = "tip" }: { content: string; variant?: QuoteVariant }) {
  const quoteStyles = {
    tip: {
      bg: "bg-gradient-to-r from-[#fefce8] to-[#fef9c3] dark:from-[#29220d] dark:to-[#3d3410]",
      border: "border-[#facc15]/40",
      icon: Idea01Icon,
      iconColor: "text-[#eab308]",
      text: "text-[#713f12] dark:text-[#fde047]",
    },
    warning: {
      bg: "bg-gradient-to-r from-[#fff7ed] to-[#ffedd5] dark:from-[#291b0f] dark:to-[#3d2410]",
      border: "border-[#fb923c]/40",
      icon: Alert01Icon,
      iconColor: "text-[#f97316]",
      text: "text-[#9a3412] dark:text-[#fdba74]",
    },
    important: {
      bg: "bg-gradient-to-r from-[#eff6ff] to-[#e0f2fe] dark:from-[#0f1f33] dark:to-[#0d2a3d]",
      border: "border-[#3b82f6]/40",
      icon: Flag01Icon,
      iconColor: "text-[#3b82f6]",
      text: "text-[#1e40af] dark:text-[#93c5fd]",
    },
    key: {
      bg: "bg-gradient-to-r from-[#fef2f2] to-[#fee2e2] dark:from-[#290f0f] dark:to-[#3d1010]",
      border: "border-[#ef4444]/40",
      icon: Target01Icon,
      iconColor: "text-[#ef4444]",
      text: "text-[#991b1b] dark:text-[#fca5a5]",
    },
  };
  const style = quoteStyles[variant];

  return (
    <div className={`rounded-xl border-2 ${style.border} ${style.bg} p-5 shadow-sm`}>
      <div className="mb-2 flex items-center gap-2">
        <HugeiconsIcon icon={style.icon} size={20} strokeWidth={2} className={style.iconColor} />
        <span className={`text-sm font-black uppercase tracking-wide ${style.text}`}>
          {variant === "tip" && "Зөвлөмж"}
          {variant === "warning" && "Анхаарах"}
          {variant === "important" && "Чухал"}
          {variant === "key" && "Гол санаа"}
        </span>
      </div>
      <p className={`text-base font-semibold leading-7 ${style.text}`}>
        {parseInlineBold(content.replace(/[💡⚠️🎯📌]/g, "").trim())}
      </p>
    </div>
  );
}

// Helper to parse inline **bold** markdown
function parseInlineBold(text: string): React.ReactNode[] {
  const parts = text.split(/(\*\*.*?\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <span key={i} className="font-black">
          {part.slice(2, -2)}
        </span>
      );
    }
    return part;
  });
}

function renderBlock(block: ContentBlock, index: number) {
  switch (block.type) {
    case "text":
      return (
        <p
          key={index}
          className={`text-lg leading-8 text-[#334155] dark:text-[#d3e9f5] ${block.bold ? "font-black" : "font-semibold"}`}
        >
          {parseInlineBold(block.content)}
        </p>
      );
    case "heading":
      return (
        <h3
          key={index}
          className="mb-2 mt-6 text-xl font-black text-[#17324d] dark:text-[#e7f7ff]"
        >
          {block.content}
        </h3>
      );
    case "code":
      return <CodeTab key={index} code={block.content} language={block.language} />;
    case "table":
      return <MarkdownTable key={index} content={block.content} />;
    case "quote":
      return <QuoteBlock key={index} content={block.content} variant={block.variant} />;
    case "spacer":
      return <div key={index} className="my-6" />;
    default:
      return null;
  }
}

// ===== QUIZ COMPONENT =====
function QuizSection({ questions }: { questions: QuizQuestion[] }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [completed, setCompleted] = useState(false);
  const [shaking, setShaking] = useState(false);

  if (questions.length === 0) {
    return (
      <div className="rounded-2xl border-2 border-[#e2e8f0] bg-white p-6 shadow-lg dark:border-[#334155] dark:bg-[#0f2742]">
        <p className="text-center text-lg font-semibold text-[#64748b] dark:text-[#94a3b8]">
          Асуулт олдсонгүй
        </p>
      </div>
    );
  }

  const question = questions[currentQuestion];
  const isCorrect = selectedAnswer === question.correctAnswer;

  const handleAnswer = (answer: string) => {
    if (showResult) return;
    setSelectedAnswer(answer);
    setShowResult(true);

    const correct = answer === question.correctAnswer;
    if (correct) {
      setScore((prev) => prev + 1);
    } else {
      setShaking(true);
      setTimeout(() => setShaking(false), 500);
    }
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    } else {
      setCompleted(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
    setCompleted(false);
  };

  if (completed) {
    const allCorrect = score === questions.length;
    return (
      <div className={`rounded-2xl border-2 p-8 text-center shadow-lg transition-all duration-500 ${
        allCorrect 
          ? "border-[#22c55e]/30 bg-gradient-to-br from-[#f0fdf4] to-[#dcfce7] dark:from-[#0f2917] dark:to-[#0d2917]"
          : "border-[#f59e0b]/30 bg-gradient-to-br from-[#fffbeb] to-[#fef3c7] dark:from-[#29220d] dark:to-[#3d3410]"
      }`}>
        <h3 className={`mb-2 text-2xl font-black ${allCorrect ? "text-[#166534] dark:text-[#86efac]" : "text-[#92400e] dark:text-[#fcd34d]"}`}>
          {allCorrect ? "Баяр хүргэе!" : "Дууслаа!"}
        </h3>
        <p className={`mb-6 text-lg font-semibold ${allCorrect ? "text-[#15803d] dark:text-[#86efac]" : "text-[#92400e] dark:text-[#fcd34d]"}`}>
          Та {score} / {questions.length} асуултад зөв хариуллаа!
        </p>
        <div className="flex gap-3 justify-center">
          <button
            onClick={handleRestart}
            className="kid-focus rounded-xl bg-[#22c55e] px-6 py-3 text-sm font-black text-white transition hover:bg-[#16a34a] hover:shadow-lg hover:shadow-green-500/25"
          >
            Дахин эхлэх
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={`rounded-2xl border-2 border-[#a855f7]/30 bg-white p-6 shadow-lg dark:border-[#a855f7]/20 dark:bg-[#0f2742] sm:p-8 ${shaking ? "animate-shake" : ""}`}>
      <div className="mb-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="text-2xl">🎯</span>
          <h3 className="text-xl font-black text-[#17324d] dark:text-[#e7f7ff]">
            Асуулт {currentQuestion + 1} / {questions.length}
          </h3>
        </div>
      </div>

      {/* Progress */}
      <div className="mb-6 h-2.5 overflow-hidden rounded-full bg-[#e2e8f0] dark:bg-[#10243a]">
        <div
          className="h-full rounded-full bg-gradient-to-r from-[#a855f7] to-[#8b5cf6] transition-all duration-500 ease-out"
          style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
        />
      </div>

      <div className="mb-6">
        <p className="text-lg font-bold text-[#334155] dark:text-[#d3e9f5]">
          {question.question}
        </p>
      </div>

      <div className="space-y-3">
        {question.options.map((option) => {
          const isSelected = selectedAnswer === option.label;
          const isCorrectAnswer = option.label === question.correctAnswer;
          const showCorrect = showResult && isCorrectAnswer;
          const showWrong = showResult && isSelected && !isCorrectAnswer;

          return (
            <button
              key={option.label}
              onClick={() => handleAnswer(option.label)}
              disabled={showResult}
              className={`w-full rounded-xl border-2 p-4 text-left transition-all duration-200 ${
                showCorrect
                  ? "border-[#22c55e] bg-[#f0fdf4] shadow-sm dark:border-[#22c55e] dark:bg-[#0f2917]"
                  : showWrong
                    ? "border-[#ef4444] bg-[#fef2f2] shadow-sm dark:border-[#ef4444] dark:bg-[#290f0f]"
                    : isSelected
                      ? "border-[#a855f7] bg-[#faf5ff] shadow-md dark:border-[#a855f7] dark:bg-[#1f1029]"
                      : "border-[#e2e8f0] bg-white hover:border-[#a855f7]/50 hover:shadow-sm dark:border-[#334155] dark:bg-[#0f2742] dark:hover:border-[#a855f7]/50"
              }`}
            >
              <div className="flex items-center gap-3">
                <span
                  className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-black transition-all ${
                    showCorrect
                      ? "bg-[#22c55e] text-white scale-110"
                      : showWrong
                        ? "bg-[#ef4444] text-white scale-110"
                        : isSelected
                          ? "bg-[#a855f7] text-white"
                          : "bg-[#f1f5f9] text-[#475569] dark:bg-[#1e293b] dark:text-[#94a3b8]"
                  }`}
                >
                  {showCorrect ? "✓" : showWrong ? "✕" : option.label}
                </span>
                <span
                  className={`font-semibold ${
                    showCorrect
                      ? "text-[#166534] dark:text-[#86efac]"
                      : showWrong
                        ? "text-[#991b1b] dark:text-[#fca5a5]"
                        : "text-[#334155] dark:text-[#d3e9f5]"
                  }`}
                >
                  {option.text}
                </span>
              </div>
            </button>
          );
        })}
      </div>

      {showResult && (
        <div className={`mt-4 rounded-xl p-4 transition-all duration-300 ${
          isCorrect 
            ? "bg-[#f0fdf4] dark:bg-[#0f2917]" 
            : "bg-[#fef9c3] dark:bg-[#3d3410]"
        }`}>
          <p className={`text-sm font-bold ${
            isCorrect 
              ? "text-[#166534] dark:text-[#86efac]" 
              : "text-[#713f12] dark:text-[#fde047]"
          }`}>
            {isCorrect ? "Зөв!" : "Буруу!"} {question.explanation}
          </p>
          <button
            onClick={handleNext}
            className="kid-focus mt-3 rounded-lg bg-[#17324d] px-5 py-2.5 text-sm font-black text-white transition hover:bg-[#23527d] hover:shadow-lg dark:bg-[#ffd54f] dark:text-[#17324d] dark:hover:bg-[#ffe27a]"
          >
            {currentQuestion < questions.length - 1 ? "Дараагийн асуулт →" : "Дуусгах"}
          </button>
        </div>
      )}
    </div>
  );
}

// ===== STEP CARD =====
function StepCard({
  step,
  index,
  isActive,
  onClick,
  icon,
  label,
}: {
  step?: Section;
  index: number;
  isActive: boolean;
  onClick: () => void;
  icon?: React.ReactNode;
  label?: string;
}) {
  const stepColors = [
    "from-[#e0f2fe]/90 to-[#bae6fd]/90 dark:from-[#0d2a3d]/90 dark:to-[#10243a]/90",
    "from-[#fef3c7]/90 to-[#fde68a]/90 dark:from-[#3d3410]/90 dark:to-[#422e06]/90",
    "from-[#fce7f3]/90 to-[#fbcfe8]/90 dark:from-[#3d1029]/90 dark:to-[#422033]/90",
    "from-[#dcfce7]/90 to-[#bbf7d0]/90 dark:from-[#0d2917]/90 dark:to-[#10291a]/90",
    "from-[#f3e8ff]/90 to-[#e9d5ff]/90 dark:from-[#2d1042]/90 dark:to-[#34104d]/90",
    "from-[#fef2f2]/90 to-[#fee2e2]/90 dark:from-[#450a0a]/90 dark:to-[#7f1d1d]/90",
  ];

  const isLastTab = index === 5;

  return (
    <button
      onClick={onClick}
      className={`group relative w-full overflow-hidden rounded-xl border-2 p-4 text-left transition-all duration-300 ${
        isActive
          ? isLastTab
            ? "border-[#ef4444] bg-gradient-to-br shadow-lg dark:border-[#ef4444]/70"
            : "border-[#38bdf8] bg-gradient-to-br shadow-lg dark:border-[#38bdf8]/70"
          : isLastTab
            ? "border-transparent bg-white/60 hover:bg-white/80 hover:shadow-md dark:bg-white/5 dark:hover:bg-white/10"
            : "border-transparent bg-white/60 hover:bg-white/80 hover:shadow-md dark:bg-white/5 dark:hover:bg-white/10"
      } ${stepColors[index] || stepColors[0]}`}
    >
      <div className="flex items-center gap-3">
        {icon && (
          <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${isLastTab && isActive ? 'bg-[#ef4444] text-white' : isActive ? 'bg-[#38bdf8] text-white' : 'bg-white/80 text-[#64748b] dark:bg-black/20 dark:text-[#94a3b8]'}`}>
            {icon}
          </span>
        )}
        {!icon && step && (
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/80 text-lg font-black text-[#17324d] dark:bg-black/20 dark:text-[#e7f7ff]">
            {index + 1}
          </span>
        )}
        <div>
          <p className={`text-xs font-black uppercase tracking-wide ${isActive ? isLastTab ? "text-[#991b1b] dark:text-[#fca5a5]" : "text-[#17324d] dark:text-[#e7f7ff]" : "text-[#64748b] dark:text-[#94a3b8]"}`}>
            {label || (step ? `Алхам ${index + 1}` : '')}
          </p>
          {step && (
            <p className={`text-sm font-bold ${isActive ? isLastTab ? "text-[#7f1d1d] dark:text-[#fca5a5]" : "text-[#17324d] dark:text-[#e7f7ff]" : "text-[#475569] dark:text-[#b8d7e8]"}`}>
              {step.title.replace(`Алхам ${index + 1}: `, "")}
            </p>
          )}
        </div>
      </div>
      {isActive && (
        <div className={`absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r ${isLastTab ? 'from-[#ef4444] to-[#f87171]' : 'from-[#38bdf8] to-[#8b5cf6]'}`} />
      )}
    </button>
  );
}

// ===== MAIN COMPONENT =====
export default function StudentGuideContent({
  chapterNum,
  prevChapter,
  nextChapter,
  markdownContent,
}: {
  chapterNum: number;
  prevChapter: number | null;
  nextChapter: number | null;
  markdownContent: string;
}) {
  const color = chapterColors[(chapterNum - 1) % chapterColors.length];
  const sections = parseMarkdown(markdownContent);
  const [activeStep, setActiveStep] = useState(0);

  // Extract dynamic data
  const chapterTitle = extractTitle(markdownContent);
  const heroDescription = extractHeroDescription(markdownContent);
  const keyPoints = extractKeyPoints(markdownContent);
  const quizQuestions = extractQuizQuestions(markdownContent);

  // Separate sections
  const stepSections = sections.filter((s) =>
    s.title.match(/Алхам \d/)
  );

  const comparisonSection = sections.find((s) => s.title.includes("Сонголт"));
  console.log("Comparison Section:", comparisonSection);
  
  const homeworkSection = sections.find((s) => s.title.includes("Гэрийн") || s.title.includes("даалгавар"));
  const conclusionSection = sections.find((s) => s.title.includes("Дүгнэлт"));

  const stepColors = [
    "from-[#e0f2fe] to-[#bae6fd] dark:from-[#0d2a3d] dark:to-[#10243a]",
    "from-[#fef3c7] to-[#fde68a] dark:from-[#3d3410] dark:to-[#422e06]",
    "from-[#fce7f3] to-[#fbcfe8] dark:from-[#3d1029] dark:to-[#422033]",
    "from-[#dcfce7] to-[#bbf7d0] dark:from-[#0d2917] dark:to-[#10291a]",
    "from-[#f3e8ff] to-[#e9d5ff] dark:from-[#2d1042] dark:to-[#34104d]",
  ];

  // Check if we're on the final tab (index 5)
  const isFinalTab = activeStep === 5;

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#f8fafc] to-[#e2e8f0] px-4 py-8 text-[#17324d] dark:from-[#020617] dark:to-[#0f172a] dark:text-[#e7f7ff] sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Back Button */}
        <div className="mb-6">
          <Link
            href="/student-guides"
            className="kid-focus inline-flex items-center gap-2 rounded-xl bg-white/90 px-5 py-3 text-sm font-black text-[#17324d] shadow-sm backdrop-blur-xl transition-all hover:-translate-y-0.5 hover:bg-white hover:shadow-md dark:bg-[#0f2742]/90 dark:text-[#e7f7ff] dark:hover:bg-[#0f2742]"
          >
            <HugeiconsIcon icon={ArrowLeft02Icon} size={18} strokeWidth={2.2} />
            Гарын авлага руу буцах
          </Link>
        </div>

        {/* Hero Card */}
        <section className="relative mb-8 overflow-hidden rounded-3xl bg-gradient-to-br from-[#0f2742] via-[#1a3652] to-[#0f2742] p-8 shadow-2xl dark:from-[#081827] dark:via-[#0f2742] dark:to-[#081827] sm:p-10">
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#38bdf8]/10 blur-3xl animate-pulse" />
          <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-[#ffd54f]/10 blur-3xl animate-pulse" />

          <div className="relative">
            <div className="mb-4 flex flex-wrap items-center gap-3">
              <span
                className={`rounded-xl px-4 py-2 text-sm font-black ${color.bg} ${color.text}`}
              >
                БҮЛЭГ {chapterNum}
              </span>
              <span className="rounded-xl bg-white/10 px-3 py-2 text-sm font-black text-white backdrop-blur-sm flex items-center gap-2">
                <HugeiconsIcon icon={BookOpen01Icon} size={16} strokeWidth={2} />
                Сурах бичиг
              </span>
            </div>

            <h1 className="text-4xl font-black tracking-tight text-white sm:text-6xl">
              {chapterTitle || `Бүлэг ${chapterNum}`}
            </h1>
            <p className="mt-4 max-w-2xl text-lg font-semibold leading-8 text-[#b8d7e8]">
              {heroDescription || "..."}
            </p>
          </div>
        </section>

        {/* Step Navigation - Horizontal with 6 tabs */}
        <div className="mb-8 grid gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {stepSections.map((step, index) => (
            <StepCard
              key={step.id}
              step={step}
              index={index}
              isActive={activeStep === index}
              onClick={() => setActiveStep(index)}
            />
          ))}
          {/* 6th Tab - Final Assessment */}
          <StepCard
            index={5}
            isActive={activeStep === 5}
            onClick={() => setActiveStep(5)}
            icon={<HugeiconsIcon icon={Target01Icon} size={20} strokeWidth={2} />}
            label="Дүгнэлт"
          />
        </div>

        {/* Main Content Grid */}
        <div className="grid gap-8 lg:grid-cols-[1fr_320px]">
          {/* Left: Content */}
          <div className="space-y-8">
            {/* Steps 1-5: Show only the active step */}
            {!isFinalTab && stepSections[activeStep] && (
              <article
                className={`relative overflow-hidden rounded-3xl border border-white/30 bg-gradient-to-br ${stepColors[activeStep]} p-6 shadow-xl backdrop-blur-2xl dark:border-white/10 sm:p-8`}
              >
                <div className="absolute inset-0 bg-white/50 backdrop-blur-xl dark:bg-[#0f2742]/70" />

                <div className="relative">
                  <div className="mb-6 flex items-center gap-4">
                    <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-2xl font-black shadow-lg dark:bg-[#17324d]">
                      {activeStep + 1}
                    </span>
                    <div>
                      <p className="text-sm font-black uppercase tracking-wide text-[#64748b] dark:text-[#b8d7e8]">
                        Алхам {activeStep + 1} / {stepSections.length}
                      </p>
                      <h2 className="text-2xl font-black text-[#17324d] dark:text-[#e7f7ff]">
                        {stepSections[activeStep].title.replace(`Алхам ${activeStep + 1}: `, "")}
                      </h2>
                    </div>
                  </div>
                  <div className="space-y-4">
                    {stepSections[activeStep].blocks.map((block, i) => renderBlock(block, i))}
                  </div>
                </div>
              </article>
            )}

            {/* Tab 6: Show ALL assessment content */}
            {isFinalTab && (
              <>
                {/* Comparison Table */}
                {comparisonSection && (
                  <article className="relative overflow-hidden rounded-3xl border border-white/30 bg-gradient-to-br from-[#fef3c7]/80 to-[#fde68a]/80 p-6 shadow-xl backdrop-blur-2xl dark:border-white/10 dark:from-[#3d3410]/80 dark:to-[#422e06]/80 sm:p-8">
                    <div className="absolute inset-0 bg-white/50 backdrop-blur-xl dark:bg-[#0f2742]/70" />
                    <div className="relative">
                      <div className="mb-6 flex items-center gap-4">
                        <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-lg dark:bg-[#17324d]">
                          <HugeiconsIcon icon={Package01Icon} size={28} strokeWidth={2} />
                        </span>
                        <h2 className="text-2xl font-black text-[#17324d] dark:text-[#e7f7ff]">
                          {comparisonSection.title}
                        </h2>
                      </div>
                      <div className="space-y-4">
                        {comparisonSection.blocks.map((block, i) => renderBlock(block, i))}
                      </div>
                    </div>
                  </article>
                )}

                {/* Quiz Section */}
                <div className="pt-4">
                  <div className="mb-6 flex items-center gap-3">
                    <HugeiconsIcon icon={Target01Icon} size={32} strokeWidth={2} />
                    <h2 className="text-2xl font-black text-[#17324d] dark:text-[#e7f7ff]">
                      Асуулт: Өөрийгөө шалгаарай
                    </h2>
                  </div>
                  <QuizSection questions={quizQuestions} />
                </div>

                {/* Conclusion */}
                {conclusionSection && (
                  <article className="relative overflow-hidden rounded-3xl border border-white/30 bg-gradient-to-br from-[#f0fdf4]/80 to-[#dcfce7]/80 p-6 shadow-xl backdrop-blur-2xl dark:border-white/10 dark:from-[#0f2917]/80 dark:to-[#0d2917]/80 sm:p-8">
                    <div className="absolute inset-0 bg-white/50 backdrop-blur-xl dark:bg-[#0f2742]/70" />
                    <div className="relative">
                      <div className="mb-6 flex items-center gap-4">
                        <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-lg dark:bg-[#17324d]">
                          <HugeiconsIcon icon={CheckmarkCircle02Icon} size={28} strokeWidth={2} />
                        </span>
                        <h2 className="text-2xl font-black text-[#17324d] dark:text-[#e7f7ff]">
                          Дүгнэлт
                        </h2>
                      </div>
                      <div className="space-y-4">
                        {conclusionSection.blocks.map((block, i) => renderBlock(block, i))}
                      </div>
                    </div>
                  </article>
                )}

                {/* Homework */}
                {homeworkSection && (
                  <article className="relative overflow-hidden rounded-3xl border border-white/30 bg-gradient-to-br from-[#dcfce7]/80 to-[#bbf7d0]/80 p-6 shadow-xl backdrop-blur-2xl dark:border-white/10 dark:from-[#0d2917]/80 dark:to-[#10291a]/80 sm:p-8">
                    <div className="absolute inset-0 bg-white/50 backdrop-blur-xl dark:bg-[#0f2742]/70" />
                    <div className="relative">
                      <div className="mb-6 flex items-center gap-4">
                        <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-lg dark:bg-[#17324d]">
                          <HugeiconsIcon icon={PencilEdit01Icon} size={28} strokeWidth={2} />
                        </span>
                        <h2 className="text-2xl font-black text-[#17324d] dark:text-[#e7f7ff]">
                          Гэрийн даалгавар
                        </h2>
                      </div>
                      <div className="space-y-4">
                        {homeworkSection.blocks.map((block, i) => renderBlock(block, i))}
                      </div>
                    </div>
                  </article>
                )}
              </>
            )}

            {/* Bottom Navigation */}
            <nav className="mt-8 grid gap-4 sm:grid-cols-2">
              {prevChapter ? (
                <Link
                  href={`/student-guides/chapter-${prevChapter}`}
                  className="kid-focus group flex items-center gap-4 rounded-2xl border-2 border-[#17324d]/10 bg-white p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-[#38bdf8] hover:shadow-md dark:border-white/10 dark:bg-[#0f2742] dark:hover:border-[#38bdf8]/70"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#f1f5f9] text-[#17324d] transition group-hover:bg-[#17324d] group-hover:text-white dark:bg-[#10243a] dark:text-[#e7f7ff] dark:group-hover:bg-[#ffd54f] dark:group-hover:text-[#17324d]">
                    <span className="text-xl">←</span>
                  </span>
                  <div>
                    <p className="text-xs font-black uppercase tracking-wide text-[#64748b] dark:text-[#b8d7e8]">
                      Өмнөх бүлэг
                    </p>
                    <p className="text-lg font-black text-[#17324d] dark:text-[#e7f7ff]">
                      Бүлэг {prevChapter}
                    </p>
                  </div>
                </Link>
              ) : (
                <div />
              )}

              {nextChapter ? (
                <Link
                  href={`/student-guides/chapter-${nextChapter}`}
                  className="kid-focus group flex flex-row-reverse items-center gap-4 rounded-2xl border-2 border-[#17324d]/10 bg-white p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-[#38bdf8] hover:shadow-md dark:border-white/10 dark:bg-[#0f2742] dark:hover:border-[#38bdf8]/70 sm:flex-row"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#f1f5f9] text-[#17324d] transition group-hover:bg-[#17324d] group-hover:text-white dark:bg-[#10243a] dark:text-[#e7f7ff] dark:group-hover:bg-[#ffd54f] dark:group-hover:text-[#17324d]">
                    <span className="text-xl">→</span>
                  </span>
                  <div className="text-right sm:text-left">
                    <p className="text-xs font-black uppercase tracking-wide text-[#64748b] dark:text-[#b8d7e8]">
                      Дараагийн бүлэг
                    </p>
                    <p className="text-lg font-black text-[#17324d] dark:text-[#e7f7ff]">
                      Бүлэг {nextChapter}
                    </p>
                  </div>
                </Link>
              ) : (
                <div />
              )}
            </nav>
          </div>

          {/* Right: Sidebar */}
          <aside className="space-y-4">
            <div className="sticky top-6 space-y-4">
              {/* Step Progress */}
              <div className="rounded-2xl border border-white/30 bg-gradient-to-br from-[#fff7ed]/90 to-[#ffedd5]/90 p-5 shadow-lg backdrop-blur-2xl dark:border-white/10 dark:from-[#231b12]/90 dark:to-[#3d2410]/90"
              >
                <h2 className="mb-4 flex items-center gap-2 text-lg font-black text-[#9a3412] dark:text-[#fdba74]"
                >
                  <HugeiconsIcon icon={LeftToRightListNumberIcon} size={24} strokeWidth={2} />
                  Алхмууд
                </h2>
                <div className="space-y-2">
                  {stepSections.map((step, i) => (
                    <button
                      key={step.id}
                      onClick={() => setActiveStep(i)}
                      className={`w-full rounded-xl px-3 py-2.5 text-left text-sm font-bold transition-all ${
                        activeStep === i
                          ? "bg-[#17324d] text-white shadow-md dark:bg-[#ffd54f] dark:text-[#17324d]"
                          : "bg-white/70 text-[#7c2d12] hover:bg-white dark:bg-black/20 dark:text-[#fed7aa]"
                      }`}
                    >
                      <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/50 text-xs font-black mr-2 dark:bg-black/30">
                        {i + 1}
                      </span>
                      {step.title.replace(`Алхам ${i + 1}: `, "")}
                    </button>
                  ))}
                  <button
                    onClick={() => setActiveStep(5)}
                    className={`w-full rounded-xl px-3 py-2.5 text-left text-sm font-bold transition-all flex items-center gap-2 ${
                      activeStep === 5
                        ? "bg-[#ef4444] text-white shadow-md"
                        : "bg-white/70 text-[#7c2d12] hover:bg-white dark:bg-black/20 dark:text-[#fed7aa]"
                    }`}
                  >
                    <HugeiconsIcon icon={Target01Icon} size={18} strokeWidth={2} />
                    Дүгнэлт & Даалгавар
                  </button>
                </div>
              </div>

              {/* Key Points */}
              <div className="rounded-2xl border border-white/30 bg-gradient-to-br from-[#fff7ed]/90 to-[#ffedd5]/90 p-5 shadow-lg backdrop-blur-2xl dark:border-white/10 dark:from-[#231b12]/90 dark:to-[#3d2410]/90"
              >
                <h2 className="mb-4 flex items-center gap-2 text-lg font-black text-[#9a3412] dark:text-[#fdba74]"
                >
                  <HugeiconsIcon icon={StickyNote01Icon} size={24} strokeWidth={2} />
                  Гол санаа
                </h2>
                <div className="space-y-3">
                  {keyPoints.length > 0 ? (
                    keyPoints.map((item, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-3 rounded-xl bg-white/70 p-3 dark:bg-black/20"
                      >
                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#f1f5f9] text-xs font-black text-[#7c2d12] dark:bg-[#1e293b] dark:text-[#fed7aa]">
                          {i + 1}
                        </span>
                        <p className="text-sm font-bold text-[#7c2d12] dark:text-[#fed7aa]">
                          {parseInlineBold(item)}
                        </p>
                      </div>
                    ))
                  ) : (
                    <p className="text-sm font-semibold text-[#64748b] dark:text-[#94a3b8]">
                      Гол санаа олдсонгүй
                    </p>
                  )}
                </div>
              </div>

              {/* Quick Links */}
              <div className="rounded-2xl border border-white/30 bg-white/90 p-5 shadow-lg backdrop-blur-2xl dark:border-white/10 dark:bg-[#0f2742]/90"
              >
                <h2 className="mb-3 text-sm font-black uppercase tracking-wide text-[#64748b] dark:text-[#b8d7e8]"
                >
                  Хурдан холбоос
                </h2>
                <div className="space-y-2">
                  <Link
                    href={`/chapter/${chapterNum}`}
                    className="kid-focus flex items-center gap-3 rounded-xl bg-gradient-to-r from-[#dcfce7] to-[#bbf7d0] px-4 py-3 text-sm font-black text-[#166534] transition-all hover:from-[#bbf7d0] hover:to-[#86efac] hover:shadow-md"
                  >
                    <HugeiconsIcon icon={GameController01Icon} size={20} strokeWidth={2} />
                    Бүлгийн түвшинд орох
                  </Link>
                  <Link
                    href="/codebook"
                    className="kid-focus flex items-center gap-3 rounded-xl bg-gradient-to-r from-[#e0f2fe] to-[#bae6fd] px-4 py-3 text-sm font-black text-[#075985] transition-all hover:from-[#bae6fd] hover:to-[#7dd3fc] hover:shadow-md"
                  >
                    <HugeiconsIcon icon={BookOpen01Icon} size={20} strokeWidth={2} />
                    Codebook харах
                  </Link>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
