import { Boundary } from "@/app/_components/boundary";
import React, { type PropsWithChildren } from "react";

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
