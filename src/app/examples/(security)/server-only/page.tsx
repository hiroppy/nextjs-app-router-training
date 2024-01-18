import { Boundary } from "@/app/_components/boundary";
import { Link } from "@/app/_components/link";

export default function Page() {
  return (
    <Boundary label="Page">
      <div className="flex flex-col gap-4">
        <Link
          href={"/examples/server-only?file-path=_utils/serverOnlyFetcher.ts"}
        >
          server-only package
        </Link>
        <Link href="/examples/server-only/env">process.env</Link>
      </div>
    </Boundary>
  );
}
