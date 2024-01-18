import { Boundary } from "@/app/_components/boundary";
import { NOW_API_ENDPOINT, NowResponse } from "@/constants";

export default async function Page() {
  const { now: noStore }: NowResponse = await (
    await fetch(NOW_API_ENDPOINT, {
      cache: "no-store",
    })
  ).json();

  return <Boundary label="No Store">{noStore}</Boundary>;
}
