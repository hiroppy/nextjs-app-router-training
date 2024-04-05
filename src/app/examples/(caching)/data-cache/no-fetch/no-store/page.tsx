// [!code word:unstable_noStore]
import { Boundary } from "@/app/_components/boundary";
import { unstable_noStore } from "next/cache";
import { getNow } from "../data";

export default async function Page() {
  unstable_noStore();

  const now = await getNow();

  return (
    <Boundary label="no-store" filePath="no-fetch/no-store/page.tsx">
      {now}
    </Boundary>
  );
}
