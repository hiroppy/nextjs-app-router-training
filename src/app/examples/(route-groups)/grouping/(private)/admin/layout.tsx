import { Boundary } from "@/app/_components/boundary";
import { PropsWithChildren } from "react";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <Boundary label="Private Layout">
      <div className="bg-green-900">{children}</div>
    </Boundary>
  );
}
