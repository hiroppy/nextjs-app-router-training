import { Boundary } from "@/app/_components/boundary";
import type { PropsWithChildren } from "react";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <Boundary label="Child Layout" bg="red" filePath="child/layout.tsx">
      {children}
    </Boundary>
  );
}
