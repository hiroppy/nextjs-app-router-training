import { Boundary } from "@/app/_components/boundary";
import { Link } from "@/app/_components/link";

// turn off full route cache for demo
export const dynamic = "force-dynamic";

export default function Page() {
  return (
    <Boundary label="Root Page" filePath="page.tsx">
      <div className="flex flex-col gap-4">
        <p>
          By using Slot(`@`), you can define independent errors and loading
          states for each route at the same time.
        </p>
        <Link href="/examples/parallel/only-right">
          check the default.tsx behavior
        </Link>
      </div>
    </Boundary>
  );
}
