"use client";

import { type PropsWithChildren } from "react";
import { Box } from "./box";

type Props = PropsWithChildren<{
  file?: string;
}>;

export function Client({ file, children }: Props) {
  return (
    <Box type="client" file={file}>
      {children}
    </Box>
  );
}
