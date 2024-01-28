import { Boundary } from "@/app/_components/boundary";
import { Link } from "@/app/_components/link";
import { NOW_API_ENDPOINT, NowResponse } from "@/constants";

export default async function Page() {
  const { now }: NowResponse = await (await fetch(NOW_API_ENDPOINT)).json();

  return (
    <div className="flex flex-col gap-4">
      <Boundary label="force-cache">{now}</Boundary>
      <Link href="/examples/data-cache/fetch/no-store?file-path=fetch/no-store/page.tsx">
        No store cache
      </Link>
      <Link href="/examples/data-cache/fetch/revalidate?file-path=fetch/revalidate/page.tsx">
        Revalidating cache
      </Link>
    </div>
  );
}
