export default function Explanation({ children, bold = false }: { children: React.ReactNode; bold?: boolean }) {
  return (
    <p className={`font-sans text-base leading-relaxed text-white/80 py-2 ${bold ? "font-bold" : ""}`}>
      {children}
    </p>
  );
}
