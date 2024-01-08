import { PropsWithChildren } from "react";
import { Box } from "../_components/box";

export default function Template({ children }: PropsWithChildren) {
  return <Box title="Child Template">{children}</Box>;
}
