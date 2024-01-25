import { GoogleAnalytics } from "@next/third-parties/google";
import { type Metadata } from "next";
import { Inter } from "next/font/google";
import { type PropsWithChildren } from "react";
import { Header } from "./_components/header";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const siteName = "Next.js App Router Training";
const description =
  "Introducing various basic patterns using Next.js' app router with simplified code.";

export const metadata: Metadata = {
  title: siteName,
  description,
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL),
  openGraph: {
    title: siteName,
    description,
    url: process.env.NEXT_PUBLIC_SITE_URL,
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

export default function Layout({ modal, children }: Props) {
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
          <Header />
          <main className="p-6 text-gray-200 flex-1 h-full">{children}</main>
        </div>
        {modal}
        {process.env.GA_ID && <GoogleAnalytics gaId={process.env.GA_ID} />}
      </body>
    </html>
  );
}
