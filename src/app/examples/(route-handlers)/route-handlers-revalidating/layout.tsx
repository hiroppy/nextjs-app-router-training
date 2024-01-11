"use client";

import { type PropsWithChildren } from "react";
import { useFetch } from "./_hooks/useFetch";

export default function Layout({ children }: PropsWithChildren) {
  const path = "/examples/route-handlers-revalidating/api";
  const { data, loading } = useFetch<{ now: number }>(path);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between">
        <h2>layout</h2>
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
      <p>cached: {loading ? "loading..." : data?.now}</p>
      {children}
    </div>
  );
}
