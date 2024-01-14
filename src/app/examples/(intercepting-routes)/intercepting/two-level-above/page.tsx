import { Boundary } from "@/app/_components/boundary";
import { Box } from "../_components/box";

export default function Page() {
  return (
    <Boundary label="Two Level Above">
      <Box title="two-level-above page" isInterceptingRouter={false} />
    </Boundary>
  );
}
