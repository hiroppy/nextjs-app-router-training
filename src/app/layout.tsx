import { BASE_URL } from "@/constants";
import { GoogleAnalytics } from "@next/third-parties/google";
import { type Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import { type PropsWithChildren, Suspense } from "react";
import { GitHubIcon } from "./_components/icons/github";
import { SearchIcon } from "./_components/icons/search";
import { TwitterIcon } from "./_components/icons/twitter";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const siteName = "Next.js App Router Training";
const description =
  "Introducing various basic patterns using Next.js' app router with simplified code.";

export const metadata: Metadata = {
  title: siteName,
  description,
  metadataBase: new URL(BASE_URL),
  openGraph: {
    title: siteName,
    description,
    url: BASE_URL,
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

type Props = PropsWithChildren<{
  modal: React.ReactNode;
}>;

export default function RootLayout({ modal, children }: Props) {
  return (
    <html lang="en">
      <body
        className={[
          inter.className,
          "bg-gray-800",
          "has-[dialog[open]]:overflow-hidden",
        ].join(" ")}
      >
        <div className="flex justify-between flex-col min-h-screen text-gray-100">
          <header className="flex justify-between items-center px-6 py-3 border-b border-b-gray-600">
            <div className="flex gap-5 items-center">
              <Link
                href="/"
                className="bg-gray-300 p-1 w-8 h-8 text-center rounded-full text-xl hover:bg-blue-300"
              >
                🐕
              </Link>
              <Link href="/search" scroll={false}>
                <SearchIcon />
              </Link>
            </div>
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
        <Suspense>{modal}</Suspense>
        {process.env.GA_ID && <GoogleAnalytics gaId={process.env.GA_ID} />}
      </body>
    </html>
  );
}
