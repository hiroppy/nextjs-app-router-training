import { type PropsWithChildren } from "react";
import { Box } from "./_components/box";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <Box title="Layout">
      <div className="bg-gray-600">{children}</div>
    </Box>
  );
}
