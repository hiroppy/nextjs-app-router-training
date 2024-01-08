"use client";

import { useEffect, useState } from "react";

export function Meta() {
  const [meta, setMeta] = useState("");

  useEffect(() => {
    const title = document.querySelector("title")?.outerHTML;
    const description = document.querySelector(
      'meta[name="description"]',
    )?.outerHTML;

    setMeta([title, description].join("\n"));
  }, []);

  return (
    <div className="overflow-scroll py-4">
      <pre>{meta}</pre>
    </div>
  );
}
