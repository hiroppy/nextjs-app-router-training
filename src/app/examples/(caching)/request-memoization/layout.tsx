import { Boundary } from "@/app/_components/boundary";
import type { PropsWithChildren } from "react";
import { getNow } from "./_utils/fetcher";

export default async function Layout({ children }: PropsWithChildren) {
  const now = await getNow();

  return (
    <Boundary label="Layout">
      {now}
      {children}
    </Boundary>
  );
}
