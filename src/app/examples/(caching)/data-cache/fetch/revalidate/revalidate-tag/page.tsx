// [!code word:revalidateTag]
import { Boundary } from "@/app/_components/boundary";
import { Button } from "@/app/_components/button";
import { NOW_API_ENDPOINT, type NowResponse } from "@/constants";
import { revalidateTag } from "next/cache";

export default async function Page() {
  async function update() {
    "use server";

    revalidateTag("tag");
  }

  const { now }: NowResponse = await (
    await fetch(NOW_API_ENDPOINT, {
      next: {
        tags: ["tag"],
      },
    })
  ).json();
  const { now: noTag }: NowResponse = await (
    await fetch(NOW_API_ENDPOINT, {
      next: {
        // the tag isn't matter when using server action
        tags: [],
      },
    })
  ).json();

  return (
    <Boundary label="RevalidateTag">
      <div className="flex flex-col gap-4">
        <div>
          <p>tag: {now}</p>
          <p>noTag: {noTag}</p>
        </div>
        <form action={update}>
          <Button type="submit">update</Button>
        </form>
      </div>
    </Boundary>
  );
}
