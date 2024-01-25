import { Boundary } from "@/app/_components/boundary";
import { type PropsWithChildren } from "react";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <Boundary label="Root Layout" bg="green" filePath="layout.tsx">
      {children}
    </Boundary>
  );
}
