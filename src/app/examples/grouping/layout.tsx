"use client";

import { usePathname } from "next/navigation";
import { type PropsWithChildren } from "react";

export default function Layout({ children }: PropsWithChildren) {
  const pathname = usePathname();

  return (
    <div className="flex flex-col gap-6">
      <p>current path: {pathname}</p>
      {children}
    </div>
  );
}
