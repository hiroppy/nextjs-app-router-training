"use client";

import { Boundary } from "@/app/_components/boundary";
import { type PropsWithChildren } from "react";
import { useFetch } from "./_hooks/useFetch";

export default function Layout({ children }: PropsWithChildren) {
  const path = "/examples/route-handlers-revalidating/api";
  const { data, loading } = useFetch<{ now: number }>(path);

  return (
    <Boundary label="Root Layout">
      <div className="flex flex-col gap-2">
        <div className="flex justify-end">
          <button
            type="button"
            className="text-right hover:text-blue-300"
            onClick={() => {
              window.location.reload();
            }}
          >
            Reload
          </button>
        </div>
        <p>cached: {data?.now}</p>
        {children}
      </div>
    </Boundary>
  );
}
