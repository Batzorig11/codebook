import type { Metadata } from "next";
import localFont from "next/font/local";
import Header from "@/components/Header";
import "./globals.css";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";

const inter = Inter({subsets:['latin'],variable:'--font-sans'});

const publicPixel = localFont({
  src: "../../fonts/PublicPixel.ttf",
  display: "swap",
  variable: "--font-pixel",
});

export const metadata: Metadata = {
  title: "CodeBook",
  description: "Code snippets and notes of codingforkids platform",
};

const themeScript = `
(() => {
  try {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      document.documentElement.classList.add("dark");
    }
  } catch (_) {}
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="mn"
      className={cn("h-full antialiased", inter.variable, publicPixel.variable)}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-[#f5fbff] text-[#17324d] pt-16 font-sans dark:bg-[#081827] dark:text-[#e7f7ff]">
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <Header />
        {children}
      </body>
    </html>
  );
}
