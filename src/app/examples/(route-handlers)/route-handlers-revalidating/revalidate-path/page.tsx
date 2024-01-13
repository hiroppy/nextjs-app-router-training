"use client";

import { useFetch } from "../_hooks/useFetch";

export default function Page() {
  const path = "/examples/route-handlers-revalidating/revalidate-path/api";
  const { data } = useFetch<{ now: number }>(path);

  return <p>revalidated: {data?.now}</p>;
}
