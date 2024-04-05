// [!code word:unstable_cache]
import { Boundary } from "@/app/_components/boundary";
import { Link } from "@/app/_components/link";
import { unstable_cache } from "next/cache";
import { getNow } from "./data";

const getCachedNowWithId = unstable_cache(
  async (id: string) => getNow(id),
  // It must contain globally unique values that together identify the key of the data being cached.
  // The cache key also includes the arguments passed to the function.
  ["data-with-param"],
);

export default async function Page() {
  // build stage will cache the result of getNow() so it's ok to just run getNow()
  const now = await getNow();
  // also ok to run getCachedNowWithId() because it's cached
  const nowWithId = await getCachedNowWithId("id");

  return (
    <div className="flex flex-col gap-4">
      <Boundary label="force-cache">{now}</Boundary>
      <Boundary label="force-cache with keyParts">{nowWithId}</Boundary>
      <Link href="/examples/data-cache/no-fetch/no-store?file-path=no-fetch/no-store/page.tsx">
        No store cache
      </Link>
      <Link href="/examples/data-cache/no-fetch/revalidate?file-path=no-fetch/revalidate/page.tsx">
        Revalidating cache
      </Link>
    </div>
  );
}
