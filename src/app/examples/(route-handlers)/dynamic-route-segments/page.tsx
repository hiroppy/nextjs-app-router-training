"use client";

import { Boundary } from "@/app/_components/boundary";
import { useFetch } from "@/app/_hooks/useFetch";

export default function Page() {
  const { data } = useFetch<{ msg: string }>(
    "/examples/dynamic-route-segments/api/dog",
  );

  return <Boundary label="Dog">{data?.msg ?? "loading"}</Boundary>;
}
