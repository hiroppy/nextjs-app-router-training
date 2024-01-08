"use client";

import { usePathname } from "next/navigation";

export default function Page() {
  const pathname = usePathname();

  return (
    <span>
      The current path is <span className="text-orange-300">{pathname}</span>,
      not /examples/(grouping)/grouping-2
    </span>
  );
}
