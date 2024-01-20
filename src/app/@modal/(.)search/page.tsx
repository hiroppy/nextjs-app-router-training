"use client";

import { PoweredBy } from "@/app/_components/search/poweredBy";
import { Result } from "@/app/_components/search/result";
import { SearchBox } from "@/app/_components/search/searchBox";
import { client } from "@/app/_utils/algolia";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useLayoutEffect, useRef } from "react";
import { InstantSearchNext } from "react-instantsearch-nextjs";

export default function Page() {
  const ref = useRef<HTMLDialogElement>(null);
  const router = useRouter();
  const pathname = usePathname();

  // to show backdrop
  useLayoutEffect(() => {
    ref.current?.showModal();
  }, []);

  useEffect(() => {
    if (pathname !== "/search") {
      ref.current?.close();
      // next.js's bug...? example page can't intercept
      // window.location.reload();
    }
  }, [pathname]);

  return (
    <dialog
      ref={ref}
      className="fixed inset-0 w-[560px] h-[520px] bg-gray-800 rounded-sm border border-gray-500 backdrop:bg-gray-900/70 backdrop:backdrop-blur-sm"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) {
          router.back();
        }
      }}
      onKeyDown={(e) => {
        if (e.key === "Escape") {
          router.back();
        }
      }}
    >
      <InstantSearchNext indexName="examples" searchClient={client}>
        <div className="text-gray-200 h-full p-4 flex flex-col gap-4 ">
          <header>
            <SearchBox />
          </header>
          <Result />
          <footer className="flex justify-end p-2">
            <PoweredBy />
          </footer>
        </div>
      </InstantSearchNext>
    </dialog>
  );
}
