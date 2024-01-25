import { Boundary } from "@/app/_components/boundary";
import { Dynamic } from "../_components/dynamic";
import { Static } from "../_components/static";

export default function Page() {
  return (
    <Boundary label="Static and Dynamic" filePath="static-dynamic/page.tsx">
      <p>
        During rendering, if a dynamic function or uncached data request is
        discovered, Next.js will switch to dynamically rendering the whole
        route.
      </p>
      <Static />
      <Dynamic />
    </Boundary>
  );
}
