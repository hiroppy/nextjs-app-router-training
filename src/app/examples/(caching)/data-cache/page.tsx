import { Boundary } from "@/app/_components/boundary";
import { Link } from "@/app/_components/link";
import { NOW_API_ENDPOINT, NowResponse } from "@/constants";

export default async function Page() {
  const { now: persited }: NowResponse = await (
    await fetch(NOW_API_ENDPOINT)
  ).json();

  return (
    <Boundary label="Page">
      <div className="flex flex-col gap-4">
        <p>force-cache (default): {persited}</p>
        <Link href="/examples/data-cache/no-store?file-path=no-store/page.tsx">
          No store cache
        </Link>
        <Link href="/examples/data-cache/revalidate?file-path=revalidate/page.tsx">
          Revalidating cache
        </Link>
      </div>
    </Boundary>
  );
}
