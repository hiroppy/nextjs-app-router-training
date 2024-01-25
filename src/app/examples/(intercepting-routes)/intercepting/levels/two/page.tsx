import { Boundary } from "@/app/_components/boundary";
import { Link } from "@/app/_components/link";

export default function Page() {
  return (
    <Boundary label="/levels/two" filePath="levels/two/page.tsx">
      <div className="flex flex-col gap-4">
        <Link href="/examples/intercepting/two-level-above">
          levels/two (..)(..)
        </Link>
      </div>
    </Boundary>
  );
}
