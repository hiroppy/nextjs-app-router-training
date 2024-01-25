import { Boundary } from "@/app/_components/boundary";
import { Box } from "../_components/box";

export default function Page() {
  return (
    <Boundary label="Intercepting" filePath="(.)same-level/page.tsx">
      <Box
        title="intercepting the same-level page now..."
        isInterceptingRouter
      />
    </Boundary>
  );
}
