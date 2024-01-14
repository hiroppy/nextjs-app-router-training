import { Boundary } from "@/app/_components/boundary";
import { type PropsWithChildren } from "react";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <Boundary label="Child Layout">
      <div className="bg-gray-500">{children}</div>
    </Boundary>
  );
}
