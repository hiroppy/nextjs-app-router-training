import { Boundary } from "@/app/_components/boundary";
import { Box } from "../_components/box";

export default function Page() {
  return (
    <Boundary label="One Level Above" filePath="one-level-above/page.tsx">
      <Box title="one-level-above page" isInterceptingRouter={false} />
    </Boundary>
  );
}
