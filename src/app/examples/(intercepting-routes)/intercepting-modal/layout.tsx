import { Boundary } from "@/app/_components/boundary";
import type React from "react";
import type { PropsWithChildren } from "react";

type Props = PropsWithChildren<{
  modal: React.ReactNode;
}>;

export default function Layout({ modal, children }: Props) {
  return (
    <Boundary label="Layout">
      <div className="relative h-80">
        {children}
        {modal}
      </div>
    </Boundary>
  );
}
