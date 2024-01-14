import { Boundary } from "@/app/_components/boundary";
import { Box } from "../../../_components/box";

export default function Page() {
  return (
    <Boundary label="Intercepting">
      <Box
        title="intercepting the two-level-above page now..."
        isInterceptingRouter
      />
    </Boundary>
  );
}
