import React, { type PropsWithChildren } from "react";

type Props = PropsWithChildren<{
  modal: React.ReactNode;
}>;

export default function Layout({ modal, children }: Props) {
  return (
    <div className="relative h-96">
      {children}
      {modal}
    </div>
  );
}
