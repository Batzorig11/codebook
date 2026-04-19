import type { Chapter } from "./types";
import { chapter1 } from "./chapter-1";
import { chapter2 } from "./chapter-2";
import { chapter3 } from "./chapter-3";
import { chapter4 } from "./chapter-4";
import { chapter5 } from "./chapter-5";
import { chapter6 } from "./chapter-6";
import { chapter7 } from "./chapter-7";
import { chapter8 } from "./chapter-8";
import { chapter9 } from "./chapter-9";

export const chapters: Record<string, Chapter> = {
  "1": chapter1,
  "2": chapter2,
  "3": chapter3,
  "4": chapter4,
  "5": chapter5,
  "6": chapter6,
  "7": chapter7,
  "8": chapter8,
  "9": chapter9,
};

export type { Chapter } from "./types";
