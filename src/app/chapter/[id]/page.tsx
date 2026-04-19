"use client";

import { use, useState } from "react";
import Link from "next/link";
import { chapters } from "@/data/chapters";

export default function ChapterPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const [selectedLevel, setSelectedLevel] = useState<number>(0);

  const chapter = chapters[id];

  if (!chapter) {
    return (
      <main className="flex  flex-col items-center justify-center min-h-screen text-white">
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
        <h2 className="mt-3 text-lg tracking-wide">
          {chapter.chapter} &gt; LEVEL {selectedLevel + 1}
        </h2>
      </div>

      {/* LEVEL SELECTOR (BOTTOM SMALL) */}
      <div className="flex gap-2 mb-8">
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
      {/* MAIN CARD */}
      <div className="w-full max-w-5xl bg-[#1c1f1c] border border-white/10 rounded-xl p-8">
        {/* TITLE */}
        <h1 className="text-2xl tracking-widest mb-4">{chapter.title}</h1>

        <div className="text-white/70 leading-relaxed space-y-4">
          {/* SUBTITLE */}
          <span className="inline-block bg-blue-400/30 uppercase text-blue-200 text-md px-3 py-1 rounded mb-6">
            {chapter.levels[selectedLevel].subtitle}
          </span>

          {/* INSTRUCTIONS */}
          {chapter.levels[selectedLevel].instructions.map((paragraph, pi) => (
            <p key={pi} className="font-mono text-2xl font-bold-500">
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
    </main>
  );
}
