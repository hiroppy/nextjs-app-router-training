// [!code word:unstable_noStore]
import { Boundary } from "@/app/_components/boundary";
import { NOW_API_ENDPOINT, type NowResponse } from "@/constants";
import { unstable_noStore } from "next/cache";

export default async function Page() {
  unstable_noStore();

  const { now }: NowResponse = await (await fetch(NOW_API_ENDPOINT)).json();

  return <Boundary label="no-store">{now}</Boundary>;
}
