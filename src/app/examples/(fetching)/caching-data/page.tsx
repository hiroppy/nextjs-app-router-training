import { Boundary } from "@/app/_components/boundary";
import { NOW_API_ENDPOINT, NowResponse } from "@/constants";

export default async function Page() {
  const { now: forceCache }: NowResponse = await (
    await fetch(NOW_API_ENDPOINT)
  ).json();
  const { now: noStore }: NowResponse = await (
    await fetch(NOW_API_ENDPOINT, {
      cache: "no-store",
    })
  ).json();

  return (
    <Boundary label="Page">
      <p>force-cache is the default</p>
      <Boundary label="force-cache">{forceCache}</Boundary>
      <Boundary label="no-store">{noStore}</Boundary>
    </Boundary>
  );
}
