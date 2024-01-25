import { Boundary } from "@/app/_components/boundary";
import { type PropsWithChildren } from "react";

type Props = PropsWithChildren<{
  left: React.ReactNode;
  right: React.ReactNode;
}>;

export default function Layout({ left, right, children }: Props) {
  return (
    <Boundary label="Root Layout" filePath="layout.tsx">
      <div className="flex flex-col gap-6">
        <div className="flex gap-4">
          <div className="w-1/2">{left}</div>
          <div className="w-1/2">{right}</div>
        </div>
        {children}
      </div>
    </Boundary>
  );
}
