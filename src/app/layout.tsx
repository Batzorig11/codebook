import type { Metadata } from "next";
import localFont from "next/font/local";
import Header from "@/components/Header";
import { LangProvider } from "@/context/LangContext";
import "./globals.css";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import Script from "next/script"

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
        <Script id="theme-script" dangerouslySetInnerHTML={{ __html: themeScript }} />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XNZ1PXD3Y9"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-XNZ1PXD3Y9');
          `}
        </Script>
        <LangProvider>
          <Header />
          {children}
        </LangProvider>
      </body>
    </html>
  );
}
