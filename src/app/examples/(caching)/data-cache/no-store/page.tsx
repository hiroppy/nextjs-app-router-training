import { Boundary } from "@/app/_components/boundary";
import { NOW_API_ENDPOINT, NowResponse } from "@/constants";
import { unstable_noStore } from "next/cache";

export default async function Page() {
  unstable_noStore();

  const { now: noStore }: NowResponse = await (
    await fetch(NOW_API_ENDPOINT)
  ).json();

  return <Boundary label="No Store">{noStore}</Boundary>;
}
