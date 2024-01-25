import { Boundary } from "@/app/_components/boundary";
import { PropsWithChildren } from "react";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <Boundary
      label="Public Layout"
      bg="red"
      filePath="(public)/items/layout.tsx"
    >
      {children}
    </Boundary>
  );
}
