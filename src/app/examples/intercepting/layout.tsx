import React, { type PropsWithChildren } from "react";

type Props = PropsWithChildren<{
  dialog: React.ReactNode;
}>;

export default function Layout({ dialog, children }: Props) {
  return (
    <>
      {children}
      {dialog}
    </>
  );
}
