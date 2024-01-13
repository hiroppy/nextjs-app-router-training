"use client";

import { type PropsWithChildren } from "react";

type Props = PropsWithChildren<{
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}>;

export function Button({ onClick, children }: Props) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="border border-gray-500 px-2 rounded-md w-full hover:text-blue-300 hover:border-blue-300"
    >
      {children}
    </button>
  );
}
