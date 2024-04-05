import { Boundary } from "@/app/_components/boundary";
import type { PropsWithChildren } from "react";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <Boundary
      label="Private Layout"
      bg="green"
      filePath="(private)/admin/layout.tsx"
    >
      {children}
    </Boundary>
  );
}
