import { PropsWithChildren } from "react";

export function PageWrapper({ children }: PropsWithChildren) {
  return <div className="bg-zinc-700 relative h-96">{children}</div>;
}
