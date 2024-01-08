"use client";

import { usePathname } from "next/navigation";

export function CurrentPath() {
  const path = usePathname();

  return <p>Current Path: {path}</p>;
}
