export default function Syntax({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-[#1a1c2e] rounded-lg px-5 py-4 my-2">
      <pre className="text-[#7aa2f7] text-lg font-semibold whitespace-pre-wrap leading-relaxed">
        {children}
      </pre>
    </div>
  );
}
