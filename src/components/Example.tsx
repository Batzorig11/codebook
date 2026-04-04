export default function Example({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-[#1e1e1e] rounded-lg px-5 py-4 my-2">
      <pre className="text-white text-lg font-semibold whitespace-pre-wrap leading-relaxed">
        {children}
      </pre>
    </div>
  );
}
