import type { Hit as AlgoliaHit } from "instantsearch.js";
import Link from "next/link";
import { Hits } from "react-instantsearch";
// to infer json type definition
import type Meta from "../../examples/_generated/data-cache.json";

export function Result() {
  return (
    <div className="flex-1 overflow-auto rounded-sm border border-gray-500 p-2 z-20">
      <Hits hitComponent={Hit} />
    </div>
  );
}

function Hit({ hit }: { hit: AlgoliaHit & typeof Meta }) {
  return (
    <Link href={`/examples/${hit.meta.path}`}>
      <div className="my-1 rounded-sm bg-gray-700 px-4 py-2 hover:bg-gray-500">
        <div className="flex justify-between items-center gap-1">
          <p>{hit.meta.title}</p>
          <p className="py-1 px-2 rounded-lg bg-gray-600 text-gray-200 text-sm whitespace-nowrap">
            {hit.meta.kind}
          </p>
        </div>
        <p className="truncate text-sm mt-2 text-gray-400">
          {hit.meta.description}
        </p>
      </div>
    </Link>
  );
}
