"use client";

import { useState } from "react";
import AnimatedList from "@/components/AnimatedList";
import TextType from "@/components/TextType";
import Image from "next/image";

const chapters = [
  "Chapter 1",
  "Chapter 2",
  "Chapter 3",
  "Chapter 4",
  "Chapter 5",
  "Chapter 6",
  "Chapter 7",
  "Chapter 8",
  "Chapter 9",
];

export default function Home() {
  const [showChapters, setShowChapters] = useState(false);

  return (
    <>
      <main className="flex flex-col items-center gap-10 min-h-screen px-6">
        {/* Banner with overlaid text */}
        <div className="relative w-screen overflow-hidden">
          <Image
            src="/banner.png"
            alt="Banner"
            className="w-full object-cover"
            width={1920}
            height={1080}
          />
          <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center px-6">
            <TextType
              // text="Welcome to Kami"
              text="Kami-д тавтай морил!"
              as="h1"
              className="text-6xl font-light tracking-wide mb-4"
              loop={false}
              typingSpeed={80}
              showCursor={true}
              variableSpeed={undefined}
              onSentenceComplete={undefined}
            />
            <TextType
              // text="Explore each chapter with detailed explanations and the code snippets used throughout the CodingForKids platform."
              text="CodingForKids платформ дээр ашиглагддаг кодын жишээнүүд болон дэлгэрэнгүй тайлбаруудтай бүлэг бүрийг судлаарай."
              as="p"
              initialDelay={2000}
              className="pt-20 text-white/70 text-center max-w-2xl text-lg leading-relaxed"
              loop={false}
              typingSpeed={40}
              showCursor={false}
              variableSpeed={undefined}
              onSentenceComplete={undefined}
            />
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex gap-4">
          <button
            onClick={() => setShowChapters(!showChapters)}
            className="px-10 py-4 border border-white/30 rounded-full text-lg tracking-widest uppercase hover:bg-white/10 transition-colors cursor-pointer"
          >
            {/* {showChapters ? "Close" : "Instructions"} */}
            {showChapters ? "Хаах" : "Тайлбар"}
          </button>
          <a
            href="/codebook"
            className="px-10 py-4 border border-white/30 rounded-full text-lg tracking-widest uppercase hover:bg-white/10 transition-colors"
          >
            Codebook
          </a>
        </div>

        {/* Chapters list */}
        {showChapters && (
          <AnimatedList
            items={chapters}
            onItemSelect={(item: string, index: number) => {
              window.location.href = `/chapter/${index + 1}`;
            }}
            showGradients={false}
            displayScrollbar={false}
          />
        )}
      </main>

      <footer className="py-8 text-center text-white/40 text-sm h-30 flex items-center justify-center">
        &copy; {new Date().getFullYear()} erxes. All rights reserved. Created by
        Batzorig
      </footer>
    </>
  );
}
