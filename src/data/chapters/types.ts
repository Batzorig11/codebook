export type InstructionSegment = { text: string; className?: string };
export type Instructions = InstructionSegment[][];
export type Level = {
  subtitle: string;
  level: string;
  instructions: Instructions;
};
export type Chapter = {
  title: string;
  chapter: string;
  levels: Level[];
};
