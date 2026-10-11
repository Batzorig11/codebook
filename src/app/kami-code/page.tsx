import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "KAMI Код талбай | CodeBook",
  description:
    "Codebook командын лавлах ба Python кодоор дүр удирддаг KAMI тоглоом нэг дор.",
};

export default function KamiCodePage() {
  return (
    <main className="flex-1">
      <iframe
        src="/kami-code.html"
        title="KAMI Код талбай"
        className="block h-[calc(100dvh-4rem)] w-full border-0"
      />
    </main>
  );
}
