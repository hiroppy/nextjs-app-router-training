"use client";

import { Boundary } from "@/app/_components/boundary";
import { usePathname } from "next/navigation";
import { type PropsWithChildren } from "react";

export default function Layout({ children }: PropsWithChildren) {
  const pathname = usePathname();

  return (
    <Boundary label="Root Layout">
      <div className="flex flex-col gap-4">
        <p>current path: {pathname}</p>
        {children}
      </div>
    </Boundary>
  );
}
