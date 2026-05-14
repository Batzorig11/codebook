export default function Example({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-2 overflow-x-auto rounded-lg border-2 border-[#17324d]/10 bg-[#17324d] px-5 py-4 dark:border-white/10 dark:bg-[#07111d]">
      <pre className="whitespace-pre-wrap text-base font-bold leading-7 text-[#fff7ad] sm:text-lg">
        {children}
      </pre>
    </div>
  );
}
