"use client";

import { PoweredBy } from "@/app/_components/search/poweredBy";
import { Result } from "@/app/_components/search/result";
import { SearchBox } from "@/app/_components/search/searchBox";
import { client } from "@/app/_utils/algolia";
import { Suspense, useState } from "react";
import { Configure } from "react-instantsearch";
import { InstantSearchNext } from "react-instantsearch-nextjs";
import { meta } from "../examples/data";

export const dynamic = "force-dynamic";

export default function Page() {
  const [tag, setTag] = useState<string | null>(null);

  return (
    <div className="flex gap-4 flex-col md:flex-row">
      <ul className="flex flex-row md:flex-col gap-2 items-center md:items-start px-4 overflow-auto w-full md:w-60">
        {Object.keys(meta).map((key) => (
          <li
            key={key}
            className={[
              "hover:text-blue-300 cursor-pointer p-1 w-full",
              tag === key ? "text-blue-300 bg-gray-700 rounded-sm" : "",
            ].join(" ")}
          >
            <button
              type="button"
              className="text-left w-full min-w-max"
              onClick={() => {
                if (tag === key) {
                  setTag(null);
                } else {
                  setTag(key);
                }
              }}
            >
              {key}
            </button>
          </li>
        ))}
      </ul>
      <div className="flex-1 w-full md:w-0">
        <Suspense>
          <InstantSearchNext indexName="examples" searchClient={client}>
            <Configure tagFilters={tag ?? undefined} />
            <div className="text-gray-200 flex flex-col gap-4">
              <header>
                <SearchBox />
              </header>
              <Result />
              <footer className="flex justify-end p-2">
                <PoweredBy />
              </footer>
            </div>
          </InstantSearchNext>
        </Suspense>
      </div>
    </div>
  );
}
