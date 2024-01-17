import { type PropsWithChildren } from "react";
import { Box } from "./box";

type Props = PropsWithChildren<{
  file?: string;
}>;

export function Server({ file, children }: Props) {
  let isClientComponent = false;

  if (typeof window !== "undefined") {
    // occurring hydration error because generated html on server is mismatched
    isClientComponent = true;
  }

  return (
    <Box
      type="server"
      actualType={isClientComponent ? "client" : "server"}
      file={file}
    >
      {children}
    </Box>
  );
}
