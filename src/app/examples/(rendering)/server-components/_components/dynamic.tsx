import { performance } from "node:perf_hooks";
import { Boundary } from "@/app/_components/boundary";
import { cookies, headers } from "next/headers";

export function Dynamic() {
  const headersList = headers();
  // or
  const cookiesList = cookies();
  // or
  // searchParams

  return (
    <Boundary label="Dynamic" filePath="_components/dynamic.tsx">
      {performance.now()}
    </Boundary>
  );
}
