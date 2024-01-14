"use client";

import { Boundary } from "@/app/_components/boundary";
import { useFetch } from "../_hooks/useFetch";

export default function Page() {
  const path = "/examples/route-handlers-revalidating/revalidate-path/api";
  const { data } = useFetch<{ now: number }>(path);

  return (
    <Boundary label="Revalidate Path with Page">
      revalidated: {data?.now}
    </Boundary>
  );
}
