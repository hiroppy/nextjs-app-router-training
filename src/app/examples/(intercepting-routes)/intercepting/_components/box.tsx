"use client";

import { useRouter } from "next/navigation";
import type { PropsWithChildren } from "react";

type Props = PropsWithChildren<{
  title: string;
  isInterceptingRouter?: boolean;
}>;

export function Box({ title, isInterceptingRouter, children }: Props) {
  const router = useRouter();

  return (
    <div className="flex flex-col gap-4">
      <h2>{title}</h2>
      <p className="text-sm text-gray-400">
        {isInterceptingRouter
          ? "When you reload this page, the interceptor won't show."
          : "You won't reach this page unless you visit it directly."}
      </p>
      {children}
      <div className="flex justify-around">
        <button
          type="button"
          onClick={() => {
            if (isInterceptingRouter) {
              router.back();
            } else {
              router.replace("/examples/intercepting");
            }
          }}
        >
          Back
        </button>
        <button
          type="button"
          onClick={() => {
            window.location.reload();
          }}
        >
          Reload
        </button>
      </div>
    </div>
  );
}
