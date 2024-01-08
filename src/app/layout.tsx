import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import type { PropsWithChildren } from "react";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "next.js routing demo",
  description: "training next.js routing",
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex justify-between flex-col min-h-screen bg-gray-800 text-gray-100">
          <header className="flex justify-between items-center px-6 py-3 border-b border-b-gray-600">
            <Link href="/">👈 top</Link>
            <Link
              href="https://github.com/hiroppy/nextjs-app-router-training"
              target="_blank"
            >
              GitHub
            </Link>
          </header>
          <main className="p-6 text-gray-200 flex-1 h-full">{children}</main>
        </div>
      </body>
    </html>
  );
}
