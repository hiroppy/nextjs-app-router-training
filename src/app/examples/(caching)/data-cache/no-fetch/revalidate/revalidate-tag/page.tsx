import { Boundary } from "@/app/_components/boundary";
import { Button } from "@/app/_components/button";
import { revalidateTag, unstable_cache } from "next/cache";
import { getNow } from "../../data";

const getCachedNow = unstable_cache(async () => getNow(), [], {
  tags: ["tag"],
});

export default async function Page() {
  async function update() {
    "use server";

    revalidateTag("tag");
  }

  const now = await getCachedNow();

  return (
    <Boundary
      label="revalidateTag"
      filePath="no-fetch/revalidate/revalidate-tag/page.tsx"
    >
      <p>{now}</p>
      <form action={update} className="mt-2">
        <Button type="submit">update</Button>
      </form>
    </Boundary>
  );
}
