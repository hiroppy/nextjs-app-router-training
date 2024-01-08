"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export function Meta() {
  const [meta, setMeta] = useState("");
  const pathname = usePathname();

  useEffect(() => {
    const title = document.querySelector("title")?.outerHTML;
    const description = document.querySelector(
      'meta[name="description"]'
    )?.outerHTML;

    setMeta([title, description].join("\n"));
  }, [pathname]);

  return <pre>{meta}</pre>;
}
