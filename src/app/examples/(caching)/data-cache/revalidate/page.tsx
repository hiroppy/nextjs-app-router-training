import { Boundary } from "@/app/_components/boundary";
import { Link } from "@/app/_components/link";
import { NOW_API_ENDPOINT, NowResponse } from "@/constants";

export default async function Page() {
  const { now: noStore }: NowResponse = await (
    await fetch(NOW_API_ENDPOINT, {
      next: {
        revalidate: 3,
      },
    })
  ).json();

  return (
    <div>
      <Boundary label="Time-based Revalidation">
        <div className="flex flex-col gap-6">
          <p>3s: {noStore}</p>
        </div>
      </Boundary>
      <Boundary label="On-Demand Revalidation">
        <div className="flex flex-col gap-2">
          <div className="flex justify-around">
            <Link href="/examples/data-cache/revalidate/revalidate-path?file-path=revalidate/revalidate-path/page.tsx">
              revalidatePath
            </Link>
            <Link href="/examples/data-cache/revalidate/revalidate-tag?file-path=revalidate/revalidate-tag/page.tsx">
              revalidateTag
            </Link>
          </div>
        </div>
      </Boundary>
    </div>
  );
}
