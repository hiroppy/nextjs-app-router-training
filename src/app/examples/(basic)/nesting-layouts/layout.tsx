import { Boundary } from "@/app/_components/boundary";
import { type PropsWithChildren } from "react";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <Boundary label="Root Layout">
      <div className="bg-gray-600">{children}</div>
    </Boundary>
  );
}
