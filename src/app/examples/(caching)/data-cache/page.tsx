import { Boundary } from "@/app/_components/boundary";
import { Link } from "@/app/_components/link";

export default async function Page() {
  return (
    <Boundary label="Data Cache">
      <p className="text-gray-400">
        Next.js caches data when the build step is by default so the default
        strategy is force-cache.
      </p>
      <div className="flex flex-col gap-4 mt-2">
        <Link href="/examples/data-cache/fetch?file-path=fetch/page.tsx">
          Fetch
        </Link>
        <Link href="/examples/data-cache/no-fetch?file-path=no-fetch/page.tsx">
          No Fetch
        </Link>
      </div>
    </Boundary>
  );
}
