import { type Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import { type PropsWithChildren } from "react";
import { GitHubIcon } from "./_components/icons/github";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "next.js routing demo",
  description: "training next.js routing",
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body className={[inter.className, "bg-gray-800"].join(" ")}>
        <div className="flex justify-between flex-col min-h-screen text-gray-100">
          <header className="flex justify-between items-center px-6 py-3 border-b border-b-gray-600">
            <Link
              href="/"
              className="bg-gray-300 p-1 w-8 h-8 text-center rounded-full text-xl"
            >
              🐕
            </Link>
            <Link
              href="https://github.com/hiroppy/nextjs-app-router-training"
              target="_blank"
            >
              <i className="text-gray-300 hover:text-blue-300">
                <GitHubIcon />
              </i>
            </Link>
          </header>
          <main className="p-6 text-gray-200 flex-1 h-full">{children}</main>
        </div>
      </body>
    </html>
  );
}
