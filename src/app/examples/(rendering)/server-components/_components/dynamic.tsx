import { performance } from "node:perf_hooks";
import { Boundary } from "@/app/_components/boundary";
import { cookies, headers } from "next/headers";

export async function Dynamic() {
  const headersList = await headers();
  // or
  const cookiesList = await cookies();
  // or
  // searchParams

  return (
    <Boundary label="Dynamic" filePath="_components/dynamic.tsx">
      {performance.now()}
    </Boundary>
  );
}
