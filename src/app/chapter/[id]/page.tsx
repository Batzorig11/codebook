"use client";

import { use, useState } from "react";
import Link from "next/link";

type InstructionSegment = { text: string; className?: string };
type Instructions = InstructionSegment[][];

const chapterData: Record<
  string,
  {
    title: string;
    chapter: string;
    subtitle: string;
    levels: { title: string; level: string; instructions: Instructions }[];
  }
> = {
  "1": {
    chapter: "CHAPTER 1",
    title: "INTRODUCTION TO PYTHON",
    subtitle: "STARTING OUT",
    levels: [
      {
        title: "Level 1",
        level: "",
        instructions: [
          [
            {
              text: "Coding for kids is a learning platform that uses a game to teach Python programming!",
            },
          ],
          [
            { text: "Use the Code Editor below and add the line: " },
            {
              text: "player.move_forward()",
              className:
                "font-bold text-green-400 bg-black/30 px-1 rounded",
            },
            {
              text: " to make your way to the exit. This code will allow you to take one step forward.",
            },
          ],
          [
            { text: "Press the " },
            {
              text: "Run",
              className:
                "bg-white/10 px-2 py-1 rounded text-white font-semibold",
            },
            {
              text: " button to execute the code you have written in the code editor.",
            },
          ],
        ],
      },
      {
        title: "Level 2",
        level: "",
        instructions: [[{ text: "More movement practice with functions." }]],
      },
      {
        title: "Level 3",
        level: "",
        instructions: [[{ text: "Print your first message." }]],
      },
      {
        title: "Level 4",
        level: "",
        instructions: [[{ text: "Work with variables." }]],
      },
      {
        title: "Level 5",
        level: "",
        instructions: [[{ text: "Create a simple program." }]],
      },
    ],
  },
};

export default function ChapterPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const [selectedLevel, setSelectedLevel] = useState<number>(0);

  const chapter = chapterData[id];

  if (!chapter) {
    return (
      <main className="flex flex-col items-center justify-center min-h-screen text-white">
        <h1 className="text-3xl mb-4">Chapter not found</h1>
        <Link href="/" className="underline text-white/60">
          Go back
        </Link>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#111311] text-white flex flex-col items-center px-6 py-10 relative">
      {/* BACK BUTTON */}
      <Link
        href="/"
        className="absolute left-6 top-6 text-white/40 hover:text-white transition"
      >
        ← BACK
      </Link>

      {/* NEXT BUTTON */}
      <button
        onClick={() =>
          setSelectedLevel((prev) =>
            prev < chapter.levels.length - 1 ? prev + 1 : prev,
          )
        }
        className="absolute right-6 top-6 text-green-400 border border-green-400 px-4 py-1 rounded hover:bg-green-400 hover:text-black transition"
      >
        NEXT →
      </button>

      {/* HEADER */}
      <div className="text-center mb-10">
        <p className="text-xs tracking-[0.3em] text-white/40">
          PYTHON DEVELOPMENT COURSE
        </p>

        <h2 className="mt-3 text-lg tracking-wide">
          {chapter.chapter} &gt; LEVEL {selectedLevel + 1}
        </h2>

        {/* PROGRESS DOTS */}
        <div className="flex justify-center gap-2 mt-4">
          {chapter.levels.map((_, i) => (
            <div
              key={i}
              className={`w-4 h-4 rounded ${
                selectedLevel === i ? "bg-white" : "bg-white/20"
              }`}
            />
          ))}
        </div>
      </div>

      {/* MAIN CARD */}
      <div className="w-full max-w-3xl bg-[#1c1f1c] border border-white/10 rounded-xl p-8">
        {/* TITLE */}
        <h1 className="text-2xl tracking-widest mb-4">{chapter.title}</h1>

        {/* SUBTITLE */}
        <span className="inline-block bg-blue-400/30 text-blue-200 text-xs px-3 py-1 rounded mb-6">
          {chapter.subtitle}
        </span>

        {/* INSTRUCTIONS */}
        <div className="text-white/70 leading-relaxed space-y-4">
          {chapter.levels[selectedLevel].instructions.map((paragraph, pi) => (
            <p key={pi}>
              {paragraph.map((segment, si) =>
                segment.className ? (
                  <span key={si} className={segment.className}>
                    {segment.text}
                  </span>
                ) : (
                  segment.text
                ),
              )}
            </p>
          ))}
        </div>
      </div>

      {/* LEVEL SELECTOR (BOTTOM SMALL) */}
      <div className="flex gap-2 mt-8">
        {chapter.levels.map((_, i) => (
          <button
            key={i}
            onClick={() => setSelectedLevel(i)}
            className={`w-8 h-8 text-sm rounded border ${
              selectedLevel === i
                ? "bg-green-400 text-black border-green-400"
                : "border-white/20 text-white/50"
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </main>
  );
}
