import { Boundary } from "@/app/_components/boundary";
import { PropsWithChildren } from "react";

export default function Template({ children }: PropsWithChildren) {
  return <Boundary label="Child Template">{children}</Boundary>;
}
