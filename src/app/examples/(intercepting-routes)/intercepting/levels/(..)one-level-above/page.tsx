import { Boundary } from "@/app/_components/boundary";
import { Box } from "../../_components/box";

export default function Page() {
  return (
    <Boundary
      label="Intercepting"
      filePath="levels/(..)one-level-above/page.tsx"
    >
      <Box
        title="intercepting the one-level-above page now..."
        isInterceptingRouter
      />
    </Boundary>
  );
}
