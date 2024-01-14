"use client";

import { Boundary } from "@/app/_components/boundary";
import { useMemo } from "react";
import { useFetch } from "../_hooks/useFetch";

export default function Page() {
  const path = "/examples/route-handlers-revalidating/revalidate-tag/api";
  const tags = useMemo(() => ["dog"], []);
  const { data: dataWithTags } = useFetch<{ now: number }>(path, tags);
  const { data: dataWithNoTag } = useFetch<{ now: number }>(path);

  return (
    <Boundary label="Revalidate Tag">
      <p>revalidated: {dataWithTags?.now}</p>
      <p>revalidated: {dataWithNoTag?.now}</p>
    </Boundary>
  );
}
