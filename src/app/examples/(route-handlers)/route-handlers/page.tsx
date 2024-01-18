"use client";

import { Boundary } from "@/app/_components/boundary";
import { Loading } from "@/app/_components/loading";
import { notFound } from "next/navigation";
import { useFetch } from "./_hooks/useFetch";
import { COOKIE_NAME } from "./constants";

export default function Page() {
  const path = "/examples/route-handlers/api";
  const { data, loading, error } = useFetch<{ msg: string }>(path);

  if (loading) {
    return <Loading />;
  }

  if (!data || error) {
    return notFound();
  }

  return (
    <Boundary label="Page">
      <div className="flex flex-col gap-4">
        <div>
          <p>endpoint: {path}</p>
          <p>cookie name: {COOKIE_NAME}</p>
        </div>
        <p className="break-all text-gray-400">{data.msg}</p>
      </div>
    </Boundary>
  );
}
