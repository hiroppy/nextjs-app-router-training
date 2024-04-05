"use client";

import { useRouter } from "next/navigation";
import type { PropsWithChildren } from "react";

export function Modal({ children }: PropsWithChildren) {
  const router = useRouter();

  return (
    <div className="absolute top-0 w-full h-full bg-gray-800 bg-opacity-75 flex justify-center items-center">
      <div className="w-10/12 h-3/4 bg-slate-700 rounded-md p-2 relative">
        <button
          type="button"
          className="absolute right-2 top-1 hover:text-blue-300"
          onClick={() => {
            router.back();
          }}
        >
          close
        </button>
        <div className="mt-8 h-full">{children}</div>
      </div>
    </div>
  );
}
