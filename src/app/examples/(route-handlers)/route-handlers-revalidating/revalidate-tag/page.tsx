"use client";

import { useMemo } from "react";
import { useFetch } from "../_hooks/useFetch";

export default function Page() {
  const path = "/examples/route-handlers-revalidating/revalidate-tag/api";
  const tags = useMemo(() => ["dog"], []);
  const { data } = useFetch<{ now: number }>(path, tags);
  const { data: a } = useFetch<{ now: number }>(path, tags);
  const { data: b } = useFetch<{ now: number }>(path);

  return (
    <div>
      <p>revalidated: {data?.now}</p>
      <p>revalidated: {a?.now}</p>
      <p>revalidated: {b?.now}</p>
    </div>
  );
}
