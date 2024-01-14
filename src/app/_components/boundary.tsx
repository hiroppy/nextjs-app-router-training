"use client";

import { PropsWithChildren } from "react";

type Props = PropsWithChildren<{
  label: string;
}>;

export function Boundary({ label, children }: Props) {
  return (
    <div className="relative p-2 rounded-sm animate-[rerender_1s_ease-in-out_1] border border-gray-500 border-dashed mt-6 h-full w-full">
      <div className="absolute -top-4 ml-2 px-2 py-1 bg-gray-700 rounded-full text-sm animate-[highlight_1s_ease-in-out_1] text-gray-300">
        <span>{label}</span>
      </div>
      <div className="mt-4 py-1 px-2 h-full">{children}</div>
    </div>
  );
}
