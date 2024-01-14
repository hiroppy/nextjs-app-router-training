import { Boundary } from "@/app/_components/boundary";
import { Box } from "../_components/box";

export default function Page() {
  return (
    <Boundary label="Same Level">
      <Box title="same-level page" isInterceptingRouter={false} />
    </Boundary>
  );
}
