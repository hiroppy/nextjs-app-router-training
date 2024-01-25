import Link from "next/link";
import { GitHubIcon } from "./icons/github";
import { SearchIcon } from "./icons/search";
import { TwitterIcon } from "./icons/twitter";

export function Header() {
  return (
    <header
      className="sticky top-0 flex justify-between items-center px-6 py-3 border-b border-b-gray-600 z-50 bg-gray-800/70 backdrop-blur transition-colors duration-500"
      id="header"
    >
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
  );
}
