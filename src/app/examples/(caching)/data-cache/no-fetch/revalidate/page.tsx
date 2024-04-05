// [!code word:unstable_cache]
import { Boundary } from "@/app/_components/boundary";
import { Link } from "@/app/_components/link";
import { unstable_cache } from "next/cache";
import { getNow } from "../data";

const getCachedNow = unstable_cache(async () => getNow(), [], {
  revalidate: 3,
});

export default async function Page() {
  const now = await getCachedNow();

  return (
    <div>
      <Boundary
        label="Time-based Revalidation"
        filePath="no-fetch/revalidate/page.tsx"
      >
        <div className="flex flex-col gap-6">
          <p>3s: {now}</p>
        </div>
      </Boundary>
      <Boundary label="On-Demand Revalidation">
        <div className="flex flex-col gap-2">
          <Link href="/examples/data-cache/no-fetch/revalidate/revalidate-tag?file-path=no-fetch/revalidate/revalidate-tag/page.tsx">
            revalidateTag
          </Link>
        </div>
      </Boundary>
    </div>
  );
}
