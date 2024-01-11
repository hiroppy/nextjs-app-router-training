"use client";

import { useMemo } from "react";
import { useFetch } from "../_hooks/useFetch";

export default function Page() {
  const path = "/examples/route-handlers-revalidating/revalidate-tag/api";
  const tags = useMemo(() => ["dog"], []);
  const { data } = useFetch<{ now: number }>(path, tags);

  return <p>revalidated: {data?.now}</p>;
}
