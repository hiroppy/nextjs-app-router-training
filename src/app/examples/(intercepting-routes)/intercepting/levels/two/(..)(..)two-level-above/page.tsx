import { Boundary } from "@/app/_components/boundary";
import { Box } from "../../../_components/box";

export default function Page() {
  return (
    <Boundary
      label="Intercepting"
      filePath="levels/two/(..)(..)two-level-above/page.tsx"
    >
      <Box
        title="intercepting the two-level-above page now..."
        isInterceptingRouter
      />
    </Boundary>
  );
}
