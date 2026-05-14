type MarkdownBlock =
  | { type: "heading"; level: number; text: string }
  | { type: "paragraph"; text: string }
  | { type: "list"; ordered: boolean; items: string[] }
  | { type: "code"; language: string; text: string }
  | { type: "table"; rows: string[][] };

function stripInlineMarkers(text: string) {
  return text.replace(/\*\*/g, "").replace(/`/g, "");
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
      blocks.push({
        type: "heading",
        level: heading[1].length,
        text: stripInlineMarkers(heading[2]),
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
        /^\d+\.\s+/.test(paragraphLine)
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

export default function MarkdownViewer({ markdown }: { markdown: string }) {
  const blocks = parseMarkdown(markdown);

  return (
    <article className="space-y-6">
      {blocks.map((block, index) => {
        if (block.type === "heading") {
          const Heading = `h${block.level}` as "h1" | "h2" | "h3";
          const className =
            block.level === 1
              ? "text-3xl font-black tracking-tight text-[#17324d] dark:text-[#e7f7ff] sm:text-4xl"
              : block.level === 2
                ? "border-t border-[#17324d]/10 pt-6 text-2xl font-black text-[#17324d] dark:border-white/10 dark:text-[#e7f7ff]"
                : "text-xl font-black text-[#0f766e] dark:text-[#67e8f9]";

          return (
            <Heading key={index} className={className}>
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
          return (
            <div key={index} className="overflow-x-auto rounded-lg bg-[#17324d] p-5 dark:bg-[#07111d]">
              {block.language && (
                <p className="mb-3 text-xs font-black uppercase tracking-wide text-[#93e5ff]">
                  {block.language}
                </p>
              )}
              <pre className="whitespace-pre-wrap text-base font-bold leading-7 text-[#fff7ad]">
                {block.text}
              </pre>
            </div>
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
      })}
    </article>
  );
}
