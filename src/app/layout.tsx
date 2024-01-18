import { Analytics } from "@vercel/analytics/react";
import { type Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import { type PropsWithChildren } from "react";
import { GitHubIcon } from "./_components/icons/github";
import { TwitterIcon } from "./_components/icons/twitter";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const siteName = "Next.js App Router Training";
const description =
  "Introducing various basic patterns using Next.js' app router with simplified code.";
const url = "https://nextjs-app-router-training.vercel.app";

export const metadata: Metadata = {
  title: siteName,
  description,
  metadataBase: new URL(url),
  openGraph: {
    title: siteName,
    description,
    url,
    siteName,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteName,
    description,
    site: "@about_hiroppy",
    creator: "@about_hiroppy",
  },
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body className={[inter.className, "bg-gray-800"].join(" ")}>
        <div className="flex justify-between flex-col min-h-screen text-gray-100">
          <header className="flex justify-between items-center px-6 py-3 border-b border-b-gray-600">
            <Link
              href="/"
              className="bg-gray-300 p-1 w-8 h-8 text-center rounded-full text-xl hover:bg-blue-300"
            >
              🐕
            </Link>
            <div className="flex gap-5 items-center">
              <Link href="https://twitter.com/about_hiroppy" target="_blank">
                <i className="text-gray-300 hover:text-blue-300">
                  <TwitterIcon />
                </i>
              </Link>
              <Link
                href="https://github.com/hiroppy/nextjs-app-router-training"
                target="_blank"
              >
                <i className="text-gray-300 hover:text-blue-300">
                  <GitHubIcon />
                </i>
              </Link>
            </div>
          </header>
          <main className="p-6 text-gray-200 flex-1 h-full">{children}</main>
        </div>
        <Analytics debug={false} />
      </body>
    </html>
  );
}
