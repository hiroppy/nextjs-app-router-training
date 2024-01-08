"use client";

// TODO: shikiがclient componentに対応されたら、置き換える(親のfireTreeがclientなため)
// import { getHighlighter } from "shiki";
import { useEffect, useRef, useState } from "react";
import hljs from "highlight.js/lib/core";
import typescript from "highlight.js/lib/languages/typescript";
import xml from "highlight.js/lib/languages/xml";
import "highlight.js/styles/vs2015.min.css";

if (typeof window !== "undefined") {
  // for jsx
  hljs.registerLanguage("xml", xml);
  hljs.registerLanguage("typescript", typescript);
}

type Props = {
  code: string;
};

export function Code({ code }: Props) {
  const codeRef = useRef<HTMLElement>(null);
  const [initialLoading, setInitialLoading] = useState(true);

  useEffect(() => {
    if (codeRef.current && code) {
      codeRef.current.removeAttribute("data-highlighted");
      hljs.highlightBlock(codeRef.current);
      setInitialLoading(false);
    }
  }, [code]);

  if (!code) {
    return null;
  }

  return (
    <pre>
      <code
        ref={codeRef}
        style={{
          background: "transparent",
          opacity: initialLoading ? 0 : 1,
        }}
      >
        {code.trim()}
      </code>
    </pre>
  );
}
