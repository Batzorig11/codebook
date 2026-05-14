export default function Explanation({ children, bold = false }: { children: React.ReactNode; bold?: boolean }) {
  return (
    <p className={`py-2 font-sans text-base leading-7 text-[#475569] dark:text-[#d3e9f5] ${bold ? "font-bold" : "font-semibold"}`}>
      {children}
    </p>
  );
}
