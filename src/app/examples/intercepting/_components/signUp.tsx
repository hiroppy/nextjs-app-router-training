"use client";

import { usePathname } from "next/navigation";
import { type PropsWithChildren } from "react";

export function SignUp() {
  const pathname = usePathname();

  return (
    <div className="flex flex-col gap-4 items-center">
      <h2 className="text-xl">Sign up</h2>
      <Button>Google</Button>
      <Button>Facebook</Button>
      <Button>GitHub</Button>
      <p className="text-sm">current path is "{pathname}"</p>
    </div>
  );
}

function Button({ children }: PropsWithChildren) {
  return (
    <button
      type="button"
      className="border border-gray-300 rounded-md w-60 py-1"
    >
      {children}
    </button>
  );
}
