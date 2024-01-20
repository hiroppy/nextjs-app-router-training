"use client";

import { useRef } from "react";
import { useSearchBox } from "react-instantsearch";
import { ResetIcon } from "../icons/reset";
import { SearchIcon } from "../icons/search";

export function SearchBox() {
  const { refine } = useSearchBox();
  const ref = useRef<HTMLInputElement>(null);

  return (
    <form className="flex gap-2 border border-blue-300 rounded-sm p-2">
      <label htmlFor="search">
        <SearchIcon />
      </label>
      <input
        ref={ref}
        id="search"
        className="w-full bg-transparent focus:outline-none"
        onChange={(e) => refine(e.target.value)}
        // I think this action is ok for a11y
        // see https://www.boia.org/blog/accessibility-tips-be-cautious-when-using-autofocus
        // biome-ignore lint: Avoid the autoFocus attribute.
        autoFocus
      />
      <button
        type="reset"
        onClick={(e) => {
          if (ref.current?.value) {
            e.preventDefault();
            ref.current.value = "";
            refine("");
          }
        }}
      >
        <ResetIcon />
      </button>
    </form>
  );
}
