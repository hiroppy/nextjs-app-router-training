import { Boundary } from "@/app/_components/boundary";

// turn off full route cache for demo
export const dynamic = "force-dynamic";

export default function Page() {
  return (
    <Boundary label="Root Page">
      <p>
        By using Slot(`@`), you can define independent errors and loading states
        for each route at the same time. In this example, "@left" will fail 50%
        of the time.
      </p>
    </Boundary>
  );
}
