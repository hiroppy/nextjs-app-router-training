import { Boundary } from "@/app/_components/boundary";
import { Button } from "@/app/_components/button";
import { NOW_API_ENDPOINT, NowResponse } from "@/constants";
import { revalidatePath } from "next/cache";

export default async function Page() {
  async function update() {
    "use server";

    revalidatePath("/examples/data-cache/revalidate-path");
  }

  const data = await fetch(NOW_API_ENDPOINT);
  const { now }: NowResponse = await data.json();

  return (
    <Boundary label="RevalidatePath">
      <div className="flex flex-col gap-4">
        <p>{now}</p>
        <form action={update}>
          <Button type="submit">update</Button>
        </form>
      </div>
    </Boundary>
  );
}
