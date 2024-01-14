import { Boundary } from "@/app/_components/boundary";
import { PropsWithChildren } from "react";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <Boundary label="Public Layout">
      <div className="bg-blue-900">{children}</div>
    </Boundary>
  );
}
