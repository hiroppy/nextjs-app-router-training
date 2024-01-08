import { type PropsWithChildren } from "react";
import { Box } from "../_components/box";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <Box title="Child Layout">
      <div className="bg-gray-500">{children}</div>
    </Box>
  );
}
