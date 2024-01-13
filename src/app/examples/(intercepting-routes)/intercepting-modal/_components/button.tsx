import { type PropsWithChildren } from "react";

export function Button({ children }: PropsWithChildren) {
  return (
    <button
      type="button"
      className="border border-gray-300 rounded-md w-60 py-1"
    >
      {children}
    </button>
  );
}
