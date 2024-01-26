"use client";

import { Boundary } from "@/app/_components/boundary";
import { useFetch } from "@/app/_hooks/useFetch";

export default function Page() {
  const { data: staticData } = useFetch<{ msg: string }>(
    "/examples/route-handlers/api/static",
  );
  const { data: dynamicData } = useFetch<{ msg: string }>(
    "/examples/route-handlers/api/dynamic",
  );
  const { data: revalidateData } = useFetch<{ msg: string }>(
    "/examples/route-handlers/api/revalidate",
  );

  return (
    <div className="space-y-6">
      <Boundary label="Static" filePath="api/static/route.ts">
        <p>{staticData?.msg ?? "loading"}</p>
      </Boundary>
      <Boundary label="Dynamic" filePath="api/dynamic/route.ts">
        <p className="break-all">{dynamicData?.msg ?? "loading"}</p>
      </Boundary>
      <Boundary label="Revalidate (3s)" filePath="api/revalidate/route.ts">
        <p>{revalidateData?.msg ?? "loading"}</p>
      </Boundary>
    </div>
  );
}
