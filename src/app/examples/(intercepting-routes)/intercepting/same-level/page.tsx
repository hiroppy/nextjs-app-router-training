import { Boundary } from "@/app/_components/boundary";
import { Box } from "../_components/box";

export default function Page() {
  return (
    <Boundary label="Same Level" filePath="same-level/page.tsx">
      <Box title="same-level page" isInterceptingRouter={false} />
    </Boundary>
  );
}
