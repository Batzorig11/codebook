export default function Syntax({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-2 overflow-x-auto rounded-lg border-2 border-[#17324d]/10 bg-[#102033] px-5 py-4 dark:border-white/10 dark:bg-[#07111d]">
      <pre className="whitespace-pre-wrap text-base font-bold leading-7 text-[#93e5ff] sm:text-lg">
        {children}
      </pre>
    </div>
  );
}
