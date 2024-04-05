// TODO: next.js has a bug that slot(modal) in layout and template are not working

"use client";

import type { PropsWithChildren } from "react";
import { Header } from "./_components/header";
import { useIsEmbedded } from "./_hooks/useIsIframe";

export default function Template({ children }: PropsWithChildren) {
  const isEmbedded = useIsEmbedded();

  return (
    <div className="flex justify-between flex-col min-h-screen text-gray-100">
      {!isEmbedded && <Header />}
      <main className="p-6 text-gray-200 flex-1 h-full">{children}</main>
    </div>
  );
}
