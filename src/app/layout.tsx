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
});

export const metadata: Metadata = {
  title: "CodeBook",
  description: "Code snippets and notes of codingforkids platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("h-full", "antialiased", publicPixel.className, "font-sans", inter.variable)}>
      <body className="min-h-full flex flex-col bg-[#2F3129] text-white pt-16">
          <Header />
          {children}
        </body>
    </html>
  );
}
